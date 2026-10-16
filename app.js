'use strict';
// Connect the official checkout URL here when supplied by the owner.
const CHECKOUT_URL = '';
const samples = {
  1: {title:'Um encontro antes das respostas', scripture:'Mateus 11,28-30', body:['Talvez você tenha aberto este livro com um pedido muito definido. Uma conta vencida. Uma pessoa que não voltou para casa. Um resultado de exame. Uma conversa que o casamento não consegue mais ter.','Você não precisa esconder nada disso para começar a rezar. A pausa começa quando sua vida real encontra espaço diante de Deus.'], purpose:'Escolha um horário possível e um lugar simples para sua pausa. Anote uma intenção principal e duas pessoas pelas quais deseja rezar.'},
  17: {title:'Quando o amor precisa voltar a conversar', scripture:'Efésios 4,25-32', body:['Talvez vocês ainda dividam a casa, mas tenham parado de compartilhar o que sentem. A conversa ficou restrita a contas, tarefas e cobranças. Cada tentativa termina em defesa, e o silêncio parece mais seguro do que outra discussão.','A reconciliação costuma precisar de um caminho mais concreto do que esperar que o outro adivinhe sua dor.'], purpose:'Escreva uma frase sobre um fato concreto, um sentimento e um pedido possível. Escolha um momento tranquilo para conversar apenas se houver segurança e abertura.'},
  25: {title:'Quando o dinheiro não alcança o fim do mês', scripture:'Mateus 6,9-13', body:['A falta de dinheiro pode tirar o sono e também a coragem de conversar. Você evita uma ligação, adia abrir uma conta e se sente menor diante de quem parece ter tudo organizado.','Mas uma dificuldade financeira não define seu valor nem revela quanto Deus ama você.'], purpose:'Anote entradas, despesas essenciais e compromissos urgentes, sem tentar resolver tudo na mesma hora. Escolha uma providência para amanhã.'}
};
const tabs = Array.from(document.querySelectorAll('[data-day]'));
function activateTab(tab,focus=false){
 const day=Number(tab.dataset.day), sample=samples[day];
 tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;});
 document.getElementById('sample-day').textContent='DIA '+String(day).padStart(2,'0');
 document.getElementById('sample-title').textContent=sample.title;
 document.getElementById('sample-scripture').textContent=sample.scripture;
 const body=document.getElementById('sample-body');body.replaceChildren(...sample.body.map(t=>{const p=document.createElement('p');p.textContent=t;return p;}));
 document.getElementById('sample-purpose').textContent=sample.purpose;
 document.getElementById('sample-number').textContent=String(day).padStart(2,'0')+' / 40';
 document.getElementById('sample-panel').setAttribute('aria-labelledby',tab.id);
 if(focus)tab.focus();
}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{let next=i;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();activateTab(tabs[next],true);});});
const gallery=document.getElementById('materials-gallery');
function scrollGallery(direction){const card=gallery.querySelector('.material');gallery.scrollBy({left:direction*(card.getBoundingClientRect().width+24),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
document.getElementById('gallery-prev').addEventListener('click',()=>scrollGallery(-1));document.getElementById('gallery-next').addEventListener('click',()=>scrollGallery(1));
const dialog=document.getElementById('launch-dialog');let priorFocus=null;
function closeDialog(){dialog.close();}
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(priorFocus)priorFocus.focus();});
document.querySelector('.dialog-close').addEventListener('click',closeDialog);document.querySelector('.dialog-done').addEventListener('click',closeDialog);
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog();});
document.querySelectorAll('[data-checkout]').forEach(button=>button.addEventListener('click',()=>{if(CHECKOUT_URL){window.location.assign(CHECKOUT_URL);return;}priorFocus=document.activeElement;dialog.showModal();document.body.classList.add('dialog-open');}));
const floating=document.getElementById('mobile-offer');let heroVisible=true,offerVisible=false,footerVisible=false;
function updateFloating(){floating.hidden=heroVisible||offerVisible||footerVisible;}
if('IntersectionObserver' in window){new IntersectionObserver(es=>{heroVisible=es[0].isIntersecting;updateFloating();},{threshold:0}).observe(document.getElementById('inicio'));new IntersectionObserver(es=>{offerVisible=es[0].isIntersecting;updateFloating();},{threshold:0}).observe(document.getElementById('acesso'));new IntersectionObserver(es=>{footerVisible=es[0].isIntersecting;updateFloating();},{threshold:0}).observe(document.querySelector('.footer'));}
document.getElementById('year').textContent=new Date().getFullYear();
