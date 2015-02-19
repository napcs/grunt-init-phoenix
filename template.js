exports.description = 'Creates a Gruntfile with support for the Phoenix framework.';
exports.notes = 'Sets up support for an asset pipeline for Phoenix projects ' +
                'using Grunt. Supports minification of CSS and JavaScript ' +
                'with support for Sass and CoffeeScript.';

exports.warnOn = ['package.json', 'Gruntfile.js', 'app.coffee', 'app.sass'];

exports.template = function(grunt, init, done) {

  init.process({}, [
      init.prompt('name'   , 'AwesomeCo') ,
      init.prompt('author' , 'Max Power') ,
  ], function(err, props) {

    props.devDependencies = {
      'grunt'                : '~0.4.5',
      'grunt-contrib-concat' : '^0.5.0',
      'grunt-contrib-cssmin' : '^0.10.0',
      'grunt-contrib-uglify' : '^0.6.0',
      'grunt-contrib-watch'  : '^0.6.1',
      'grunt-contrib-sass'   : '^0.8.1',
      'grunt-contrib-coffee' : '^0.11.1'
    };

    var files = init.filesToCopy(props); init.copyAndProcess(files, props);
    init.writePackageJSON('package.json', props);
    done();
  });
};
