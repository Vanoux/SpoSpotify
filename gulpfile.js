var gulp = require('gulp'); //La déclaration require indique à Node d’aller chercher dans node_modules un package appelé gulp.
var sass = require('gulp-sass'); // pour compiler Sass en CSS avec Gulp, grâce à un plugin nommé gulp-sass. 

//la syntaxe de base d’une tâche gulp :
gulp.task('sass', function() { 
    //gulp.src =  indique à la tâche gulp quels fichiers utiliser pour la tâche
    return gulp.src('app/scss/style.scss')
    .pipe(sass()) // utilisation de gulp-sass
    //.pipe(plugins.cssbeautify({indent: ' '}))
    //.pipe(plugins.autoprefixer())
    //gulp.dest = indique où mettre les fichiers qui résultent de l’exécution de la tâche
    .pipe(gulp.dest('app/css'));
});
