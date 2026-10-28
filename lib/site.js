export const site = {
  url: 'https://niru.dev',
  name: 'Niru Maheswaranathan',
  description: 'Machine learning and neuroscience research by Niru Maheswaranathan.',
};

export const pageMetadata = {
  '/': { title: site.name, description: site.description },
  '/about': { title: 'About', description: 'About Niru Maheswaranathan, a researcher working on machine learning and neuroscience.' },
  '/research': { title: 'Research', description: 'Selected publications in machine learning and neuroscience by Niru Maheswaranathan.' },
  '/code': { title: 'Code', description: 'Selected open source projects by Niru Maheswaranathan.' },
  '/blog': { title: 'Blog', description: 'Notes on machine learning, neuroscience, and software by Niru Maheswaranathan.' },
};

export const canonicalUrl = (pathname) =>
  new URL(pathname === '/' ? '/' : `${pathname.replace(/\/$/, '')}/`, site.url).href;

export const formatPostDate = (date) => new Intl.DateTimeFormat('en', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));
