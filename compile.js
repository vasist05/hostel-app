const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

console.log('Compiling app.js -> app.compiled.js...');
const inputPath = path.resolve(__dirname, 'app.js');
const outputPath = path.resolve(__dirname, 'app.compiled.js');

try {
  const src = fs.readFileSync(inputPath, 'utf8');
  const transformed = babel.transformSync(src, {
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    comments: true
  });

  fs.writeFileSync(outputPath, transformed.code, 'utf8');
  console.log(`[Success] Compiled ${src.length} bytes JSX -> ${transformed.code.length} bytes JS into app.compiled.js`);
} catch (err) {
  console.error('[Error] Compilation failed:', err);
  process.exit(1);
}
