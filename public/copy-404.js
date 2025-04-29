
// This script is meant to be run after the build process
// It copies the index.html file to 404.html for proper SPA routing on GitHub Pages
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

// Copy index.html to 404.html
try {
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, notFoundPath);
    console.log('Successfully created 404.html from index.html');
  } else {
    console.error('index.html does not exist in the dist directory');
  }
} catch (err) {
  console.error('Error copying file:', err);
}
