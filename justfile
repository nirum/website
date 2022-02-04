default:
  just --list

dev:
  echo 'Launching dev server...'
  npm run dev
  echo 'Done!'

build:
  echo 'Building html...'
  npm run build
  echo 'Done!'

publish: build
  echo 'Exporting...'
  npm run export
  echo 'Done'

sloc:
  @echo "`wc -l **/*.{js,jsx,ts}` lines of code"
