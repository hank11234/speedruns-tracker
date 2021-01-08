curl "http://localhost:4741/runs/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "run": {
      "gameId": "'"${GAMEID}
    }
  }'

echo
