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

test:
  echo 'Running unit tests...'
  npm test
  echo 'Done!'

sloc:
  @echo "`wc -l **/*.js` lines of code"
