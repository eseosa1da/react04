#!/bin/bash
echo "Initializing Git"
git init
git remote add origin $1
git pull origin main
git add .
git commit -m "initial commit"
git push origin main
