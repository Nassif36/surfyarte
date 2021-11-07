#!/usr/bin/env sh

set -e 

npm run build 

cd dist 

git add -A

git commit -m 'nuevo deployment'

git push origin gh-pages

cd -