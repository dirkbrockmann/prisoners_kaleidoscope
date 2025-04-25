import fs from 'fs';
import path from 'path';
import pkg from './package.json';

// define plugin
export default () => {
  return {
    name: 'generate-README-md',
    apply: 'build', // or 'serve' to run in dev too
    enforce: 'post',
    closeBundle() {
      const name = pkg.name?.split('/').pop() ?? 'explorable';
      const title = pkg.title;
	  const subtitle = pkg.subtitle;
	  const description = pkg.description;
      const namespace = name.replace(/[-\s]/g, '_');
      const ce_name = name.replace(/[_\s]/g, '-');
      const templatePath = path.resolve('./templates/README.template.md');
      const outputPath = path.resolve('./README.md');

      let readme = fs.readFileSync(templatePath, 'utf8');
      readme = readme
        .replace(/{{TITLE}}/g, title)
	  	.replace(/{{SUBTITLE}}/g, subtitle)
	  	.replace(/{{DESCRIPTION}}/g, description)
        .replace(/{{NAMESPACE}}/g, namespace)
        .replace(/{{NAME}}/g, ce_name);
	  
	  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	  fs.writeFileSync(outputPath, readme);
	  console.log(`✅ Wrote README.md successfully`);
    }
  };
}