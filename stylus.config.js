import {readFileSync, writeFileSync} from 'fs'
import {dirname} from 'path'
import mkdirp from 'mkdirp'
import stylus from 'stylus'
import autoprefixer from 'autoprefixer-stylus'

const entry = 'src/index.styl'
const outfile = 'release/index.css'
const sanitizeStylDir = dirname(require.resolve('sanitize.css/lib/sanitize.styl'))
const stylusPaths = [
  __dirname,
  `${__dirname}/src`,
  sanitizeStylDir
]

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

const data = readFileSync(entry, 'utf8')
const options = {
  filename: entry,
  compress: isProduction,
  sourcemap: isDevelopment ? {inline: true} : {}
}

stylus(data, options)
.set('paths', stylusPaths)
.use(autoprefixer())
.render((error, css) => {
  if (error) {
    throw error
  }

  mkdirp(dirname(outfile))
  writeFileSync(outfile, css)
})
