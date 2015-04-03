module.exports = {
    bower: {
        files: [
            // start bower

            //end bower
        ]
    },
    scripts: {
        files: [
            {
                expand: true,
                cwd: "build/js/",
                src: ["**/*.js"],
                dest: "<%= destPath %>/js/"
            }
        ]
    }
};
