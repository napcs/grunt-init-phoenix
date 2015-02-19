'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // smash the scripts together into a single temp js file
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.config('concat', {
    nonull: true,
    scripts: {
      src: ['priv/static/js/phoenix.js',
            // add more here
            'tmp/compiled.js'],
      dest: 'priv/static/assets/app.js'
    },
    styles: {
      src:  ['priv/static/css/phoenix.css',
             // add more here
             'tmp/compiled.css'],
      dest: 'priv/static/assets/app.css'
    }
  });



  // Concat all coffeescript files into a single temp file
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.config('coffee', {
    app: {
      options: {
        bare: false
      },
      files: {
        'tmp/compiled.js': ['priv/coffee/*.coffee']
      }
    }
  });
  // Convert sass files to temp css file
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.config('sass', {
    app: {
      files: {
        'tmp/compiled.css': ['priv/sass/app.sass']
      }
    }
  });

  // Minify css and place in final location
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.config('cssmin', {
    app: {
      files: {
        'priv/static/assets/app.min.css': ['priv/static/assets/app.css']
      }
    }
  });

  // remove whitespace/etc to make js file tiny
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.config('uglify', {
    scripts: {
      files: {
        'priv/static/assets/app.min.js' : 'priv/static/assets/app.js'
      }
    }
  });

  // watch Coffee and Sass files for changes.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.config('watch', {
    scripts: {
      files: ['priv/coffee/**/*.coffee', 'priv/static/css/**/*.css'],
      tasks: ['coffee', 'concat:scripts', 'uglify'],
    },
    styles: {
      files: ['priv/sass/**/*.scss', 'priv/static/js/**/*.js'],
      tasks: ['sass', 'concat:styles', 'cssmin'],
    },
    options: {
      spawn: false,
      livereload: true
    }
  });


  grunt.registerTask('build', "Builds the application.",
                    ['coffee', 'concat:scripts', 'concat:styles', 'sass', 'cssmin', 'uglify' ]);

};
