import fs from 'fs'
import path from 'path'
import stylus from 'stylus'
import autoprefixer from 'autoprefixer-stylus'

const sanitizeStylDir = path.dirname(require.resolve('sanitize.css/lib/sanitize.styl'))
const stylusPaths = [
  __dirname,
  `${__dirname}/src`,
  sanitizeStylDir
]

const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

export default (filename) => {
  const data = fs.readFileSync(filename, 'utf8')

  const options = {
    filename,
    compress: isProduction,
    sourcemap: isDevelopment ? {inline: true} : {}
  }

  let css
  stylus(data, options)
  .set('paths', stylusPaths)
  .use(autoprefixer())
  .render((error, data) => {
    if (error) {
      throw error
    }

    css = data
  })

  return css
}
