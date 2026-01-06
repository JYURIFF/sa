document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById('progress-bar').style.width = (scrollTop / height) * 100 + '%';
});

const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const threshold = window.innerHeight * 0.85;
    if(top < threshold && top > 0){
      el.classList.add('active');
    }
  });
});

window.addEventListener('load', () => {
  document.querySelectorAll('.bar').forEach(bar => {
    const h = bar.style.getPropertyValue('--h');
    bar.style.height = '0';
    setTimeout(()=>bar.style.height=h,300);
  });
});