#!/usr/bin/env sh

set -e 

npm run build 

cd dist 

git commit -m 'nuevo deployment'

git -f git@github.com:Nassif36/surfyarte.git master:front

cd -