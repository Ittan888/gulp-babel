import { task, series, parallel } from 'gulp'
import sass from './tasks/sass'

task('default',
  series(
    parallel(
      sass.generate,
      sass.observe
    )
  )
)
