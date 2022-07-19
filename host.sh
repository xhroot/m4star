#!/bin/sh

#python -m http.server 8000 --bind 127.0.0.1

echo View site at http://localhost:8000/site

python3 -m http.server 8000

# open -a "Google Chrome" site/index.html

# ps aux | grep 8000


