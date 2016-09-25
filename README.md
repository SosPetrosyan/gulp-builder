#Учебная сборка Loftschool (выпускной проект №1) 

Stack:
 - Gulp 4.0
 
Getting started:

1. clone this repo
2. cd path/to/
3. npm install gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally
4. npm install
6. run "gulp" command to start


ФИО: Петросян Сос Гагикович

1. Первый таск - генерация спрайтов из графических файлов (png, gif).

	* установил плагин gulp.spritesmith
	* написал таск (gulp/task/sprite.generator.js)
	* В файле (gulp/paths/tasks.js) указал путь к файлу 'sprite.generator.js'
	* В gulpfile.js : Добавил новую глобальную переменную 'spritesmith: require('gulp.spritesmith')', так же добавил в gulp.task название этой переменной - 'sprite.generator'

2. Второй таск - копирование файлов из папки с исходниками в папку для продакшена (картинки, шрифты).

	* в директории (gulp/task/) создал новый таск 'copy.fonts.js'
	* в 'copy.fonts.js' написал таск, который и будет копировать наши шрифты
	* в gulpfile.js : так же добавил в gulp.task название этой переменной - 'copy:fonts'
	* в файле (gulp/paths/tasks.js) указал путь к файлу 'copy:fonts'
	* в директории (gulp/task/) файл 'watch.js', добавляем новую строчку с нашим 'copy:fonts'
