import {build,stop} from 'esbuild';
import {writeFile} from 'node:fs/promises';
const result=await build({entryPoints:['app.jsx'],bundle:true,minify:true,write:false,loader:{'.css':'text'},plugins:[{name:'inline-style',setup(b){b.onLoad({filter:/style\.css$/},async a=>({contents:`const s=document.createElement('style');s.textContent=${JSON.stringify(await (await import('node:fs/promises')).readFile(a.path,'utf8'))};document.head.appendChild(s);`,loader:'js'}))}}],define:{'process.env.NODE_ENV':'"production"'}});
const js=result.outputFiles[0].text.replaceAll('</script','<\\/script');
await writeFile('index.html',`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Three assisted learning prototypes for design, web and communication. Fictional product, candidate review pending."><link rel="icon" href="data:,"><title>Commonplace | Design lab</title><style>body{margin:0}</style></head><body><div id="root"></div><script>${js}</script></body></html>`);
console.log('Built self-contained index.html. No runtime CDN, secrets or external assets.');
stop();
