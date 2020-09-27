const path = require('path');
const execFile = require('child_process').execFile;


exports.child = function (param) {
  let parsed = param.split(' ');
  const child = execFile(parsed[0], parsed.slice(1),
    {
      cwd: path.parse(__dirname).root,
      shell: true
    }
  );
  //spawn
  child.on('error', (err) => {
    console.error(err);
  });

  child.stdout.on('data', (data) => {
    console.log(data);
  });
}