'use strict';
const PROFILE = 'IvoStoyanovTech';
const REPO = `${PROFILE}/${PROFILE}`;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
const work = [
  { title: 'AI voice agents', text: 'Live phone answering that listens, understands, and responds. Speech-to-text, LLM reasoning, and text-to-speech over cloud and SIP.', tags: ['Voice AI', 'Cloud & SIP', 'Real-time'] },
  { title: 'Outbound AI calling', text: 'Automated sales and follow-up conversations, with a human in the loop. Building the connection between AI agents and the people behind them.', tags: ['Outbound', 'Twilio', 'Human-in-the-loop'] },
  { title: 'Call-compliance scoring', text: 'AI grading of recorded calls against a checklist. Turning conversations into structured insights for insurance teams.', tags: ['Call analysis', 'AI scoring', 'Insurance'] },
  { title: 'Multi-tenant insurance CRM', text: 'The system behind the conversations. Leads, quotes, campaigns, and an agentic AI layer, connected in a multi-tenant CRM.', tags: ['Full-stack', 'CRM', 'Agentic AI'] },
  { title: 'AI integrations for websites', text: 'Embedding AI into websites, and designing and working with the APIs that connect them to the systems behind the scenes.', tags: ['AI integrations', 'Web', 'APIs'] },
  { title: 'AI-assisted engineering', text: 'Building with Claude and Codex, Hermes, Obsidian and Graphify, Groq, Qwen, and Higgsfield. Connecting tools across the engineering workflow.', tags: ['Claude & Codex', 'Knowledge graphs', 'AI tooling'] }
];
const stack = [
  {title:'Engineering', items:[['TS','TypeScript','#7cbcff'],['Py','Python','#f6d77d'],['C+','C++','#8dc6ff'],['N','Node.js','#a9d979'],['F','Fastify','#e5ebde'],['R','React','#86d8ed'],['V','Vite','#be9bff'],['P','PostgreSQL','#95b9eb'],['Pr','Prisma','#c3d2e2']]},
  {title:'AI & models',items:[['✧','Gemini','#a5b2fa'],['Cl','Claude','#e4ab8d'],['Co','OpenAI Codex','#d1e5c1'],['Q','Qwen','#b9a0ff'],['G','Groq','#f4a482'],['H','Hermes (Nous)','#c4b5fa'],['W','Whisper','#dae3d1'],['Hi','Higgsfield','#bdabfb']]},
  {title:'Voice & infrastructure',items:[['Tw','Twilio','#ff9caa'],['↗','DMC / SIP','#a2c8ff'],['A','Asterisk','#ffbd8b'],['L','Linux / systemd','#e5d477'],['O','Obsidian','#c4a4ff'],['Gr','Graphify','#99ddb4']]}
];
const snapshot = [
  ['c1cbc890d2079c13bc89598be04df35b0ae61d07','Update README.md','2026-08-21T07:15:25Z'],
  ['32ae395f4ed85d4f4a6ec16f21aa61495abaf99f','Revise README with updated project details and tech stack','2026-08-20T15:10:57Z'],
  ['d9ac7fa93079913b3ef8be6d0837b66d93a20dbf','Update README.md','2026-08-20T14:56:53Z'],
  ['3c8c9c834dcce92928bd8e1f99411d3d600e2832','Revise README for clarity and project updates','2026-08-20T14:52:10Z'],
  ['951fc274f250ee59ab1cd8b7ae527915ea8b624c','Update README.md','2026-08-20T14:49:00Z'],
  ['add0f4788d7620aaad546ca9c1a0dc9b10f885be','Initial commit','2026-08-20T14:48:32Z']
].map(([sha,message,date])=>({sha,message,date}));
const $ = (id)=>document.getElementById(id);
const escapeHTML = (value)=>String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let activeWork = 0;
let userInteracting = false;
let lastSlide = performance.now();
function showWork(index) {
  activeWork = (index + work.length) % work.length;
  const item = work[activeWork];
  const card = $('work-card');
  card.innerHTML = `<div class="work-icon" aria-hidden="true">${[17,28,36,24,32,15].map((h,i)=>`<i style="--h:${h}px;--d:${i*.15}s"></i>`).join('')}</div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p><div class="work-tags">${item.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>`;
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
  $('work-count').textContent = `${String(activeWork+1).padStart(2,'0')} / 06`;
  [...$('slide-dots').children].forEach((button,i)=>button.setAttribute('aria-pressed',String(i===activeWork)));
  lastSlide = performance.now();
}
work.forEach((item,i)=>{
  const button = document.createElement('button');
  button.setAttribute('aria-label',`Show ${item.title}`);
  button.setAttribute('aria-pressed',String(i===0));
  button.addEventListener('click',()=>showWork(i));
  $('slide-dots').append(button);
});
$('next-work').addEventListener('click',()=>showWork(activeWork+1));
$('previous-work').addEventListener('click',()=>showWork(activeWork-1));
const workArea = document.querySelector('.work-area');
workArea.addEventListener('pointerenter',()=>userInteracting=true);
workArea.addEventListener('pointerleave',()=>userInteracting=false);
showWork(0);
$('stack-grid').innerHTML = stack.map((group,i)=>`<div class="stack-group"><div class="stack-group-head"><h3>${group.title}</h3><span>0${i+1}</span></div><div class="tech-list">${group.items.map(([mark,name,color])=>`<span class="tech"><b style="--color:${color}" aria-hidden="true">${mark}</b>${name}</span>`).join('')}</div></div>`).join('');
function renderCommits(commits,live=false) {
  $('commit-total').textContent=commits.length;
  $('commit-total-label').textContent=commits.length===100?'recent commits loaded':'commits loaded';
  const format = new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short'});
  $('commit-list').innerHTML=commits.slice(0,3).map(c=>`<a class="commit-row" href="https://github.com/${REPO}/commit/${encodeURIComponent(c.sha)}" target="_blank" rel="noopener noreferrer"><svg><use href="#git"/></svg><div class="commit-text"><p title="${escapeHTML(c.message)}">${escapeHTML(c.message)}</p><span>${escapeHTML(c.sha.slice(0,7))} · ${PROFILE}</span></div><time datetime="${escapeHTML(c.date)}">${format.format(new Date(c.date))}</time></a>`).join('') || '<p>No commits available.</p>';
  const end = new Date(); end.setUTCHours(23,59,59,999);
  const week=7*86400000;
  const start = new Date(end.getTime()-12*week);
  const buckets=Array(12).fill(0);
  commits.forEach(c=>{const bin=Math.floor((new Date(c.date)-start)/week);if(bin>=0&&bin<12)buckets[bin]++});
  const max=Math.max(1,...buckets);
  $('commit-chart').innerHTML=buckets.map((count,i)=>`<div class="chart-bar ${count?'has-commits':''}" style="--height:${Math.max(9,count/max*100)}%" title="Week of ${format.format(new Date(start.getTime()+i*week))}: ${count} ${count===1?'commit':'commits'}" role="img" aria-label="Week of ${format.format(new Date(start.getTime()+i*week))}: ${count} commits"></div>`).join('');
  $('chart-start').textContent=format.format(start);
  $('chart-end').textContent=format.format(end);
  $('commit-status').textContent=live?'GITHUB · UPDATED':'SAVED SNAPSHOT';
  $('sync-note').textContent=live?'Public GitHub data · updated just now':'Snapshot · 10 Sep 2026';
}
renderCommits(snapshot);
async function updateCommits(){
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),8000);
  try{
    const response=await fetch(`https://api.github.com/repos/${REPO}/commits?per_page=100`,{signal:controller.signal,headers:{Accept:'application/vnd.github+json'}});
    if(!response.ok)throw new Error('GitHub unavailable');
    const data=await response.json();
    if(!Array.isArray(data))throw new Error('Invalid response');
    const commits=data.filter(c=>/^[a-f0-9]{40}$/.test(c.sha)&&c.commit?.message&&Number.isFinite(Date.parse(c.commit?.committer?.date))).map(c=>({sha:c.sha,message:c.commit.message.split('\n')[0],date:c.commit.committer.date}));
    renderCommits(commits,true);
  }catch{
    $('sync-note').textContent='GitHub unavailable · saved 10 Sep 2026';
  }finally{clearTimeout(timeout)}
}
updateCommits();

// A perspective-projected 3D orbital surface. No libraries or server required.
const canvas=$('sculpture');
const ctx=canvas.getContext('2d');
let width=0,height=0,dpr=1,angle=.35,mouseX=0,mouseY=0,targetX=0,targetY=0,lastFrame=0,frameHandle;
const ringCount=42,segments=120;
const geometry=Array.from({length:ringCount},(_,ring)=>{
  const u=ring/ringCount*Math.PI*2;
  return Array.from({length:segments+1},(_,part)=>{
    const v=part/segments*Math.PI*2;
    const radial=1.17+.46*Math.cos(v);
    return [radial*Math.cos(u),radial*Math.sin(u),.46*Math.sin(v)];
  });
});
function resize(){const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);if(ctx){ctx.setTransform(dpr,0,0,dpr,0,0);draw()}}
function draw(){
  if(!ctx||!width)return;
  ctx.clearRect(0,0,width,height);
  const tiltX=1.0+mouseY*.2,tiltY=-.6+mouseX*.3,spin=angle;
  const scale=Math.min(width,height)*.232;
  const cx=width*.5,cy=height*.48;
  const sinX=Math.sin(tiltX),cosX=Math.cos(tiltX),sinY=Math.sin(tiltY),cosY=Math.cos(tiltY),sinZ=Math.sin(spin),cosZ=Math.cos(spin);
  const paths=geometry.map((ring,i)=>{
    let depth=0;
    const points=ring.map(([x,y,z])=>{
      let x1=x*cosZ-y*sinZ,y1=x*sinZ+y*cosZ;
      let y2=y1*cosX-z*sinX,z2=y1*sinX+z*cosX;
      let x3=x1*cosY+z2*sinY,z3=-x1*sinY+z2*cosY;
      depth+=z3;
      const perspective=4.8/(4.8-z3);
      return [cx+x3*scale*perspective,cy+y2*scale*perspective,z3];
    });
    return {points,depth:depth/(segments+1),i};
  }).sort((a,b)=>a.depth-b.depth);
  const glow=ctx.createRadialGradient(cx,cy,5,cx,cy,scale*1.8);
  glow.addColorStop(0,'rgba(154,228,61,.055)');glow.addColorStop(1,'rgba(154,228,61,0)');
  ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
  paths.forEach(({points,depth,i})=>{
    const brightness=(depth+1.7)/3.4;
    ctx.beginPath();points.forEach(([x,y],j)=>j?ctx.lineTo(x,y):ctx.moveTo(x,y));
    ctx.strokeStyle=`rgba(${Math.round(123+brightness*86)},${Math.round(160+brightness*95)},${Math.round(61+brightness*72)},${.16+brightness*.66})`;
    ctx.lineWidth=.55+brightness*.65;
    ctx.stroke();
    if(i%5===0){const point=points[(i*11)%segments];ctx.beginPath();ctx.arc(point[0],point[1],1.7,0,Math.PI*2);ctx.fillStyle='#e5ffb5';ctx.fill()}
  });
}
function loop(now){
  const delta=Math.min(40,now-lastFrame||16);lastFrame=now;
  if(!paused){angle+=delta*.00008;mouseX+=(targetX-mouseX)*.04;mouseY+=(targetY-mouseY)*.04;draw();if(now-lastSlide>7000&&!userInteracting&&!workArea.contains(document.activeElement))showWork(activeWork+1)}
  frameHandle=requestAnimationFrame(loop);
}
$('visual').addEventListener('pointermove',e=>{const rect=canvas.getBoundingClientRect();targetX=(e.clientX-rect.left)/rect.width*2-1;targetY=(e.clientY-rect.top)/rect.height*2-1});
$('visual').addEventListener('pointerleave',()=>{targetX=0;targetY=0});
function setMotion(value){paused=value;document.body.classList.toggle('motion-paused',paused);$('motion-toggle').setAttribute('aria-pressed',String(paused));$('motion-toggle').setAttribute('aria-label',paused?'Resume animations':'Pause animations');$('motion-toggle').querySelector('span').textContent=paused?'Motion off':'Motion on';lastSlide=performance.now()}
$('motion-toggle').addEventListener('click',()=>setMotion(!paused));
reducedMotion.addEventListener('change',e=>setMotion(e.matches));
setMotion(paused);
new ResizeObserver(resize).observe(canvas);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frameHandle)}else{lastFrame=performance.now();lastSlide=lastFrame;frameHandle=requestAnimationFrame(loop)}});
frameHandle=requestAnimationFrame(loop);
