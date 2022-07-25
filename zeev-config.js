import { defineConfig } from 'zeev-run'
import { config } from 'dotenv-flow'

config({ path: './config' })

export default defineConfig({
  src: {
    form: {
      codform: parseInt(process.env.ZEEV_CODFORM),
      entry: 'src/form/form.html',
      output: 'form.html'
    },
    js: [{
      entry: 'src/js/main.js',
      output: 'main-bundle.js'
    }, {
      entry: 'src/js/report.js',
      output: 'report-bundle.js'
    }]
  },
  emails: {
    entry: './src/emails/**/*.html',
    output: './dist/emails'
  }
})
