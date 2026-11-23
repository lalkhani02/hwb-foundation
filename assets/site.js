(() => {
 const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('#main-nav');
 toggle.hidden=false;
 function close(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');}
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){close();toggle.focus();}});
 const config=window.HWB_CONFIG||{};
 const email=String(config.contactEmail||'').trim();
 if(/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email))document.querySelectorAll('[data-contact]').forEach(el=>{const a=document.createElement('a');a.href='mailto:'+encodeURIComponent(email).replace('%40','@');a.textContent=email;el.replaceChildren(a);});
 try{const url=new URL(config.donationUrl);if(url.protocol==='https:'){
 document.querySelectorAll('[data-checkout]').forEach(a=>{a.href=url.href;a.hidden=false;});
 document.querySelectorAll('[data-donation-pending]').forEach(e=>e.hidden=true);
 document.querySelectorAll('[data-checkout-note]').forEach(e=>e.hidden=false);
 const status=document.querySelector('[data-giving-status]');if(status)status.textContent='Secure online giving';
 const state=document.querySelector('[data-donation-state]');if(state)state.textContent='Continue to our secure donation provider to choose your gift and complete your donation.';
 }}catch{}
})();