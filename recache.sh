#!/bin/sh

vold=$1
vnew=$2

git mv site/script/main.$vold.js site/script/main.$vnew.js
git mv site/script/feedData.$vold.json site/script/feedData.$vnew.json

