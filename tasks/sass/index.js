import { src, dest, watch, series } from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'

const path = {
  src: './src/sass/**/*.scss',
  dist: './dist/css/',
  reject: '!./src/sass/**/_*.scss'
}

const message = (done) => {
  console.log('scss -> css converted!')
  done()
}

const generate = (done) => {

  src([path.src, path.reject])
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'expanded' }))
  .pipe(sourcemaps.write('./.maps'))
  .pipe(dest(path.dist))

  done()
}

const observe = (done) => {

  watch([path.src])
  .on('change', series(generate, message))

  done()
}

export default {
  generate,
  observe
}