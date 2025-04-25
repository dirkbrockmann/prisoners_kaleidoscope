import pkg from './package.json';

export default () => {
  const meta = {
    name: pkg.name,
    title: pkg.title,
    subtitle: pkg.subtitle || '',
    description: pkg.description || '',
	author:  pkg.author || ''
  };

  return {
    name: 'virtual-meta',
    resolveId(id) {
      if (id === 'virtual:meta') return id;
    },
    load(id) {
      if (id === 'virtual:meta') {
        return `export default ${JSON.stringify(meta, null, 2)};`;
      }
    }
  };
}