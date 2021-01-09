// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const router = express.Router()

const Game = require('./../models/game')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { game: { title: '', text: 'foo' } } -> { game: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

router.post('/runs', requireToken, (req, res, next) => {
    // extract the run from the incoming request data
    const runData = req.body.run

    // extract gameId
    const gameId = runData.gameId

    Game.findById(gameId)
    .then(handle404)
    .then(game => {
        // add a new review to our reviews subdoc array
        game.runs.push(runData)

        // save the restaurant so the review gets saved
        return game.save()
    })
    .then(game => res.status(201).json({game:game}))
    // if error occurs go to next middleware (error handler)
    .catch(next)
})

router.delete('/runs/:runId', requireToken, (req, res, next) => {
    // extract run ID
    const runId = req.params.runId
    // extract game Id
    const gameId = req.body.run.gameId

    Game.findById(gameId)
    .then(handle404)
    .then(game => {
        // remove the review from the reviews subdoc array
        game.runs.id(runId).remove()

        // save the review's parent doc to save deletion
        return game.save()
    })
    // response with status 204 "no content"
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.patch('/runs/:runId', requireToken, (req, res, next) => {
    // extract the reviewId
    const runId = req.params.runId

    // extract the restaurantId
    const gameId = req.body.run.gameId
    
    // extract review from incoming request data
    const runData = req.body.run

    Game.findById(gameId)
    .then(handle404)
    .then(game => {
        // find the review whose id is reviewId in the reviews subdoc array
        const run = game.runs.id(runId)
        run.set(runData)
        return game.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)

})

module.exports = router