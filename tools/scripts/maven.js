var testModuleThenExecute = require('../lib/testModuleThenExecute');

testModuleThenExecute('shelljs', function executeLater() {

  require('shelljs/global');

  var oscheck = require('../lib/oscheck');

  var sudoStr =  (oscheck.isLinux || oscheck.isMac) ? 'sudo ' : '';
  var cmd = '';

  echo('About to setup environment');
  echo('It works if it finishes with OK');

  echo('----------------------------------------');

  if(!which('phantomjs')) {
    echo('PhantomJS is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global phantomjs';
    echo(cmd); exec(cmd);
  }
  echo('phantomjs --version ');
  echo(exec('phantomjs --version').output);

  echo('----------------------------------------');

  echo(which('bower'));

  echo('Installing bower...\n');
  exec('npm install bower');

  echo('----------------------------------------');

  echo('Installing node dependencies...\n');
  exec('npm install');

  echo('Installing bower components...\n');
  exec('bower install');

  echo('\nOK!');

});
