#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Brew Update
# @raycast.mode fullOutput

# Optional parameters:
# @raycast.icon 🤖
# @raycast.packageName Brew Update

# Documentation:
# @raycast.description Update homebrew itself and all services and casks then cleanup
# @raycast.author Songkeys
# @raycast.authorURL https://github.com/Songkeys/raycast-extensions

brew update
brew upgrade
brew upgrade --cask --greedy
brew cleanup

osascript -e 'display notification "✅ Brew has been updated!" with title "RayCast Script"'
