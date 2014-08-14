module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    concat: {   
        dist: {
            src: [
                'src/js/jquery.js', 
                'src/js/bootstrap.js',
                'src/js/grayscale.js',
            ],
            dest: 'src/js/script.js',
        }
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        src: 'src/js/script.js',
        dest: 'build/js/script.min.js'
      }
    },
    less: {
      build: {
        files: {
          'src/css/style.css': 'src/css/style.less'
        }
      }
    },
    concat_css: {
      build: {
        src: [
          'src/css/bootstrap.css',
          'src/css/style.css',
          // 'src/css/grayscale.css',
        ],
        dest: 'src/css/main.css'
      }
    },
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'build/css/style.min.css': 'src/css/main.css'
        }
      }
    },
    imagemin: {
      dynamic: {                         
        files: [{
          expand: true,                  
          cwd: 'src/',                   
          src: ['**/*.{png,jpg,gif,svg}'],        
          dest: 'build/'                  
        }]
      }
    },
    assemble: {
      options: {
        layout: 'src/templates/layouts/base.hbs',
        partials: 'src/templates/partials/*.hbs',
        data: 'src/data/*.json',
      },
      site: {
        options: {
          flatten: true,
          ext: '.html'
        },
        files: {
          'build': ['src/templates/site/*.hbs' ]
        }
      }
    },
    aws: grunt.file.readJSON("credentials.json"),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "www.tandartsgooi.nl",
        region: 'us-west-2',
        access: "public-read",
        headers: {
          // CacheControl: 604800
          CacheControl: 86400
        },
        // cache: false
      },
      build: {
        cwd: "build/",
        src: "**"
      }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-aws');

  grunt.registerTask('default', ['concat', 'uglify', 'less', 'concat_css', 'cssmin', 'imagemin', ]);

};
