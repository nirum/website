default:
  just --list

dev:
  echo 'Launching dev server...'
  next
  echo 'Done!'

build:
  echo 'Building html...'
  next build
  echo 'Done!'

publish: build
  echo 'Exporting...'
  next export
  echo 'Done'

sloc:
  @echo "`wc -l **/*.{js,jsx,ts}` lines of code"
