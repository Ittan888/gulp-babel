import { task, series, parallel } from 'gulp'
import { generate, observe } from './gulp/tasks'

task('default', series(parallel(generate.css, observe.files)))
