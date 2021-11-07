#!/usr/bin/env sh

set -e 

npm run build 

cd dist 

git commit -m 'nuevo deployment'

git -f https://github.com/Nassif36/surfyarte.git master:gh-pages

cd -