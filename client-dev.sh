#!/usr/bin/env bash
# chmod +x ./build.sh
clear
echo "Clean up dist files if any"
rm -rf dist || true
echo "Build Prod for Client Project (without functions)"
docker build -f Dockerfile.dev -t khmy2010/focus-client:latest .
echo "Build Prod finished"
open http://localhost:3200
echo "Running built container at port 3200"
docker run -p 3200:3000 khmy2010/focus-client