const execFile = require('child_process').execFile;
exports.child = function () {
  const child = execFile('explorer.exe', [], {
    detached: true,
    shell: true
  }
  // , (err, stdout, stderr) => {
  //   if (err) {
  //     throw err;
  //   }

  //     console.log(stdout);
  //   },
  //   {
  //     encoding: 'utf8',
  //     timeout: 0,
  //     maxBuffer: 200 * 1024,
  //     killSignal: 'SIGTERM',
  //     cwd: null,
  //     env:null,
  //     code: 0
  //   }
  );
  //spawn
  child.on('error', (err) => {
    console.error(err);
  });

  child.stdout.on('data', (data) => {
    console.log(data);
  });
}