#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Copy netlify functions to out directory
echo "Copying Netlify functions..."
cp -r netlify out/

echo "Deployment ready! Upload the 'out' folder to Netlify."










