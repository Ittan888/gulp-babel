import { src, dest, watch, series } from 'gulp'
import { path } from './path'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'


export const message = {

  generatedCss(done){
    console.log('scss -> css converted!')
    done()
  }

}

export const generate = {

  css(done){
    src([path.scss.src, path.scss.reject])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(sourcemaps.write('./.maps'))
    .pipe(dest(path.scss.dist))

    done()
  }

}

export const observe = {

  files(done){
    watch([path.scss.src])
    .on('change', series(generate.css, message.generatedCss))

    done()
  }

}