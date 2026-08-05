const fs = require('fs');

const replacements = [
  // Gradients
  [/from-slate-900/g, 'from-slate-100'],
  [/to-slate-800/g, 'to-slate-50'],
  [/bg-brand-500 hover:bg-brand-400 text-slate-950/g, 'bg-brand-500 hover:bg-brand-400 text-white'],
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(([regex, replacement]) => {
    content = content.replace(regex, replacement);
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${filePath}`);
}

processFile('src/components/PricingSection.tsx');
processFile('src/components/ComparePackages.tsx');
