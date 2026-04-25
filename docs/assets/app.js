const search = document.querySelector('#search');
const cards = [...document.querySelectorAll('.card')];
const buttons = [...document.querySelectorAll('[data-filter]')];
let active = 'all';
function apply(){
  const q = search.value.trim().toLowerCase();
  cards.forEach(card => {
    const okCat = active === 'all' || card.dataset.category === active;
    const okText = !q || card.dataset.title.includes(q) || card.innerText.toLowerCase().includes(q);
    card.style.display = okCat && okText ? '' : 'none';
  });
}
buttons.forEach(btn => btn.addEventListener('click', () => {
  active = btn.dataset.filter;
  buttons.forEach(b => b.classList.toggle('active', b === btn));
  apply();
}));
search.addEventListener('input', apply);