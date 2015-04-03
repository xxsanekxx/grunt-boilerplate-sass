module.exports = {
    gruntfile: {
        files: ['Gruntfile.coffee', 'grunt/*'],
        options: {
            reload: true
        }
    },
    scripts: {
        files: ['build/js/**/*.js'],
        tasks: ['newer:copy:scripts']
    },
    sass: {
        files: ['build/scss/**/*.scss', 'build/scss/**/*.sass'],
        tasks: ['sass:debug'],
        options: {
            livereload: true
        }
    },
    images: {
        files: ['build/img/**/*.{png,jpg,svg,gif}', '!build/img/icons'],
        tasks: ['newer:imagemin']
    },
    icons: {
        files: ['build/icons/*.{png}'],
        tasks: ['concurrent:sprite', 'concurrent:imagemin']
    },
    html: {
        files: ['<%= htmlPath %>/**/*.html'],
        options: {
            livereload: true
        }
    }
};
