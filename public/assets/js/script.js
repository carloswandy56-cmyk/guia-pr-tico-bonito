let time=1800;const timer=document.getElementById('timer');setInterval(()=>{let m=Math.floor(time/60),s=time%60;timer.textContent=`${m}:${s<10?'0':''}${s}`;if(time>0)time--;},1000);

document.querySelectorAll('.faq button').forEach(btn=>{btn.onclick=()=>{let p=btn.nextElementSibling;p.style.display=p.style.display==='block'?'none':'block'}});

let shown=false;function showPopup(){if(!shown){document.getElementById('popup').style.display='block';shown=true;}}
document.addEventListener('mouseout',e=>{if(e.clientY<10)showPopup()});setTimeout(showPopup,20000);

window.fbq=window.fbq||function(){window.fbq.callMethod?window.fbq.callMethod.apply(window.fbq,arguments):window.fbq.queue.push(arguments)};window.fbq.queue=[];window.fbq('init','COLOCAR_PIXEL_ID');window.fbq('track','PageView');