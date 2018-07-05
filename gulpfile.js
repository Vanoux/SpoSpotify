var gulp = require('gulp'); //La déclaration require indique à Node d’aller chercher dans node_modules un package appelé gulp.
var sass = require('gulp-sass'); // pour compiler Sass en CSS avec Gulp, grâce à un plugin nommé gulp-sass. 
var browserSync = require('browser-sync'); //Browser Sync simplifie le développement web en créant un serveur web nous permettant un rafraîchissement live et  la synchronisation sur plusieurs devices.


//la syntaxe de base d’une tâche gulp :
gulp.task('sass', function() { 
    //gulp.src =  indique à la tâche gulp quels fichiers utiliser pour la tâche
    return gulp.src('app/scss/style.scss')
    .pipe(sass()) // utilisation de gulp-sass
    //.pipe(plugins.cssbeautify({indent: ' '}))
    //.pipe(plugins.autoprefixer())
    //gulp.dest = indique où mettre les fichiers qui résultent de l’exécution de la tâche
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ //afin que Browser Sync puisse injecter les nouveaux styles CSS (c’est à dire mettre à jour CSS) dans le navigateur à chaque fois que la tâche sass est lancée.
        stream: true
    }))
});

//Suivi des modifications de fichiers avec watch et rafraîchissement en live avec browserSync
gulp.task('watch', ['browserSync', 'sass'], function() {
    // => ['browserSync', 'sass'] permet de s'assurer que browser et sass soient toujours lancé avant watch
    gulp.watch('app/scss/**/*.scss', ['sass']);
    
    //Recharge le navigateur lorsque des fichiers HTML ou JS changent
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


//Création d'une tâche browserSync pour permettre la création d'1 serveur et lui dire où doit ce trouver la racine du serveur = dossier app
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
    })
})