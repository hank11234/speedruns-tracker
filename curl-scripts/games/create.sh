curl "http://localhost4741/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "title": "'"${TITLE}"'",
      "releaseDate": "'"${DATE}"'",
      "genre": "'"${GENRE}"'"
    }
  }'
