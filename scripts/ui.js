// Script to build UI
// Run from root directory of project

const shell = require('shelljs');

// Start timer
let time = process.hrtime();

// Abort on error
shell.set('-e');

// Make temp directory
shell.rm('-rf', 'tmp');
shell.mkdir('tmp');

// Clone UI and build it
shell.cd('tmp');
shell.exec('git clone https://github.com/mattpilla/kaztalek-ui.git .');
shell.exec('npm install');
shell.exec('npm run build');

// Replace old UI build with new one
shell.cd('..');
shell.rm('-rf', 'ui');
shell.mv('tmp/dist', 'ui');
shell.rm('-rf', 'tmp');

console.log(`finished in ${process.hrtime(time)[0]} seconds`);
