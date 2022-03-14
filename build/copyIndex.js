const fs = require('fs');
const path = require('path');

// function copyFile(src, dist) {
//   fs.writeFileSync(dist, fs.readFileSync(src));
// }

fs.writeFileSync(
  path.resolve(__dirname, '../dist/404.html'),
  fs.readFileSync(path.resolve(__dirname, '../dist/index.html'))
);
