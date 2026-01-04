import path from 'path';

export const changeExtension = (file) =>
  path.join('/pubs/', path.basename(file, path.extname(file)) + '.png');
