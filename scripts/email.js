import { compile, save } from 'zeev-mail'
import zeevConfig from '../zeev-config.js'

console.log('Generate e-mails template')

async function onEmailChange () {
  const emails = await compile({
    inputGlob: zeevConfig.emails.entry,
    minifyHtml: true
  })

  save({
    emails,
    outdir: zeevConfig.emails.output
  })

  console.log('emails created', emails)
}

onEmailChange()
