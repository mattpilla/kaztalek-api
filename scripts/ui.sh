#!/bin/bash

# Script to build UI
# Run from root directory of project

# Start timer
start=`date +%s`;

# Abort on error
set -e;

# Make temp directory
rm -rf tmp;
mkdir tmp;

# Clone UI and build it
cd tmp;
git clone https://github.com/mattpilla/kaztalek-ui.git .;
npm ci;
npm run build;

# Replace old UI build with new one
cd ..;
cp -Trv tmp/dist ui;
rm -rf tmp;

end=`date +%s`;
echo finished in $((end-start)) seconds;
