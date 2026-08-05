const fs = require('fs');

const replacements = [
  // Backgrounds
  [/bg-slate-950/g, 'bg-slate-50'],
  [/bg-slate-900\/40/g, 'bg-white/80'],
  [/bg-slate-900\/50/g, 'bg-slate-100'],
  [/bg-slate-900/g, 'bg-white'],
  [/bg-slate-800\/80/g, 'bg-slate-100/80'],
  [/bg-slate-800\/50/g, 'bg-slate-100/50'],
  [/bg-slate-800/g, 'bg-slate-100'],
  [/bg-slate-700/g, 'bg-slate-200'],
  [/bg-slate-950\/50/g, 'bg-white/50'],
  
  // Text
  [/text-white/g, 'text-slate-900'],
  [/text-slate-100/g, 'text-slate-800'],
  [/text-slate-200/g, 'text-slate-700'],
  [/text-slate-300/g, 'text-slate-700'],
  [/text-slate-400/g, 'text-slate-600'],
  [/text-slate-500/g, 'text-slate-500'],
  [/text-brand-100\/70/g, 'text-brand-700/70'],
  
  // Borders
  [/border-slate-800\/50/g, 'border-slate-200/50'],
  [/border-slate-800/g, 'border-slate-200'],
  [/border-slate-700\/50/g, 'border-slate-200/50'],
  [/border-slate-700/g, 'border-slate-300'],
  [/border-white\/10/g, 'border-slate-200'],
  
  // Gradients
  [/from-brand-900\/80/g, 'from-brand-50'],
  [/to-slate-900\/80/g, 'to-slate-100'],
  
  // Hovers
  [/hover:bg-slate-800\/50/g, 'hover:bg-slate-50/50'],
  [/hover:bg-slate-800/g, 'hover:bg-slate-100'],
  [/hover:bg-slate-700/g, 'hover:bg-slate-200'],
  [/hover:border-slate-700/g, 'hover:border-slate-300'],
  [/group-hover:text-white/g, 'group-hover:text-slate-900'],
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
processFile('src/pages/Home.tsx');
