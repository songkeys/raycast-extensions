#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Is It Down or Just Me
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🤖
# @raycast.packageName Is It Down or Just Me
# @raycast.argument1 { "type": "text", "placeholder": "url" }

# Documentation:
# @raycast.description Check if a website is really down or just me
# @raycast.author Songkeys
# @raycast.authorURL https://github.com/Songkeys/raycast-extensions

URL="https://api-prod.downfor.cloud/httpcheck/$1"

RESULT=$(curl -s $URL \
  -H 'authority: api-prod.downfor.cloud' \
  -H 'cache-control: max-age=0' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
  -H 'sec-gpc: 1' \
  -H 'sec-fetch-site: none' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-user: ?1' \
  -H 'sec-fetch-dest: document' \
  -H 'accept-language: en,en-US;q=0.9,zh-TW;q=0.8,zh-CN;q=0.7,zh;q=0.6' \
  --compressed | sed -e 's/[{}]/''/g' | awk -v RS=',"' -F: '/^isDown/ {print $2}')

if [[ $RESULT == "true" ]]
then
  echo "❌ IT IS DOWN!"
else
  echo "✅ IT IS UP!"
fi
