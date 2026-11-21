export const resources=[
 {id:1,title:'A better learning note',description:'Turn a useful insight into a note your future self can act on.',topic:'Learning',minutes:4,glyph:'Aa'},
 {id:2,title:'The five-minute team check-in',description:'A simple structure for sharing one thing you learned this week.',topic:'Collaboration',minutes:5,glyph:'↗'},
 {id:3,title:'Give useful knowledge a home',description:'Keep a small, focused library of answers your team returns to.',topic:'Knowledge',minutes:6,glyph:'▤'},
 {id:4,title:'From reading to trying',description:'Choose one small experiment after your next learning session.',topic:'Learning',minutes:3,glyph:'✳'}
];
export function filterResources(items,query='',topic='All'){
 const q=String(query).trim().toLowerCase();return items.filter(r=>(topic==='All'||r.topic===topic)&&`${r.title} ${r.description} ${r.topic}`.toLowerCase().includes(q));
}
export function safeLoad(storage){try{storage??=globalThis.localStorage;const value=JSON.parse(storage.getItem('commonplace-saved')||'[]');return Array.isArray(value)?[...new Set(value.filter(x=>resources.some(r=>r.id===x)))]:[]}catch{return []}}
export function safeSave(ids,storage){try{storage??=globalThis.localStorage;storage.setItem('commonplace-saved',JSON.stringify(ids));return true}catch{return false}}
export function campaignCopy(audience,channel){
 const team=audience==='Team leads';
 if(channel==='Web headline')return team?'Give your team’s best ideas a place to grow.\nBring learning and shared knowledge into the everyday flow of work.\nExplore the prototype.':'Keep a useful idea close. Put it into practice.\nFind a short guide, save a thought and take one small next step.\nExplore the prototype.';
 if(channel==='Event card')return team?'A conversation about shared learning\nHow can teams make useful knowledge easier to find and use? Explore a fictional workspace concept and discuss one habit worth trying.':'A little space for your next idea\nTry a sample learning workspace. Find one resource, save an idea and choose a practical next step.';
 return team?'Useful knowledge should not stop at one person.\n\nCommonplace is a fictional workspace concept for collecting learning resources and making room for shared progress. Start with one guide. Discuss one idea. Try one small change together.\n\nWhat helps your team turn learning into everyday practice?':'You do not need a perfect learning plan to begin.\n\nStart with a short guide and one idea you can use. Commonplace is a fictional workspace concept that helps you find and save useful learning resources.\n\nWhat is one small thing you would like to try this week?';
}
