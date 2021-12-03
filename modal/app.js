const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const modal = document.querySelector('#modal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});