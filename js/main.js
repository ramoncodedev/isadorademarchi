(function(){
  var h=document.querySelector('.header'),b=document.getElementById('burger'),n=document.getElementById('nav');
  function s(){h.classList.toggle('scrolled',window.scrollY>30)}
  s();window.addEventListener('scroll',s,{passive:true});
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false')})});
  document.querySelectorAll('.areas,.feats,.steps,.quotes,.pillars').forEach(function(g){[].forEach.call(g.children,function(el,i){el.style.setProperty('--d',(i*0.12)+'s')})});
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('reveal','in');t.style.removeProperty('--d')},1900)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
  document.getElementById('ano').textContent=new Date().getFullYear();
  document.getElementById('form').addEventListener('submit',function(ev){
    ev.preventDefault();var f=ev.target,nome=f.nome.value.trim();
    if(!nome){f.nome.focus();return}
    var t='Olá, Dra. Isadora! Meu nome é '+nome+'.\nAssunto: '+f.assunto.value+(f.tel.value?'\nTelefone: '+f.tel.value:'')+(f.msg.value?'\n\n'+f.msg.value.trim():'');
    window.open('https://api.whatsapp.com/send?phone=5573981661335&text='+encodeURIComponent(t),'_blank','noopener');
  });
})();
