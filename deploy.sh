rm -rf ../build
npm run build
cp -r build ../build
git checkout deployment
git pull
rm -rf static
cp -r ../build/* .
cp index.html 404.html
git add .
git commit -m "$(date +"%Y-%m-%d %T")"
git push
git checkout main
rm -rf ../build