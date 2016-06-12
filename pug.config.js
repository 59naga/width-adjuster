const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction
export default {
  pretty: isDevelopment,
  basedir: 'src'
}
