const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("browserSync", function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./*.html", "./css/*.css"]).on("change", browserSync.reload);
});

