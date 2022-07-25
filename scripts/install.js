import shell from 'shelljs'

shell.echo('Install Zeev Boilerplate')
shell.mkdir('config')
shell.touch('config/.env')
shell.touch('config/.env.local')
shell.touch('config/.env.production')
