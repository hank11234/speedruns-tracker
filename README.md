# Speedruns Tracker API
Speedruns Tracker is a website that allows user to create and account to add and keep track of their games, and those games' associated speedruns. Can be used exclusively for games as well.

### Relevant Links
- [Deployed Client](https://hank11234.github.io/speedruns-client/)
- [Deployed API](https://sleepy-plateau-04404.herokuapp.com/)
- [Client Repo](https://github.com/hank11234/speedruns-client)

### Technologies Used
- MongoDB
- Mongoose
- Heroku
- Express
- Passport

### Problem Solving Strategy
I relied heavily on the work from past exercises we've done in class and my previous project and was very meticulous with my console.logs to make sure I was always doing what I thought I was. I also took great advantage of the other members of my group as well as a larger subset of my other classmates.

### Planning/Development Process
Initially my plan was to create the credential functions, then design the API for the program, write CRUD functions for the runs and then for the games, make sure runs were properly related to games and then make sure games were properly related to users. I more or less followed this plan with some slight alterations. I set up the game schema, routes, and curl scripts then copied the authorization curl scripts over to the client. I then went back and decided to add an input for game platform as well. After cleaning up various syntax issues I added the schema, curl scripts, and routes for the speedruns themselves. 

### Unsolved Problems/Future Versions
- Would like to further clean up the list of games and runs, most ideally each into its own div box with an edit and delete button right there for each one as opposed to having to manually input all the information for those
- Add use of modals for edit and delete after reformat
- Add ability to call games by title as opposed to ID (Potential issue: Games with the same name)
- Add calendar input for game release date and run date 
- Add time input for run length

### Entitiy Relationship Diagram
![ERD](https://imgur.com/a/8y4QCNE)