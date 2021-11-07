#!/usr/bin/env sh

set -e 

npm run build 

cd dist 

git add -A

git commit -m 'nuevo deployment'

git push -f git@github.com/Nassif36/surfyarte main:gh-pages

cd -