'use strict';

module.exports = function() {
  $.gulp.task('sprite.generator', function (cb) {
  var spriteData = $.gulp.src('./source/images/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));

  spriteData.img.pipe($.gulp.dest($.config.root +'assets/sprite/images/'));
  spriteData.css.pipe($.gulp.dest($.config.root +'assets/sprite/styles/'));

  cb();
});
};
