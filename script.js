let modalBtns = document.querySelectorAll('[data-target]');
let closeModal = document.querySelectorAll('.close-modal');

modalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector(btn.dataset.target).classList.add('modal-active');
  });
});

closeModal.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector(btn.dataset.target).classList.remove('modal-active');
  });
});

const translate = (lang) => {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach((element) => {
    const key = element.dataset.lang;
    element.innerHTML = translations[lang][key];
  });
};

document.querySelectorAll('.language-switcher').forEach((button) => {
  button.addEventListener('click', () => {
    translate(button.id);
    localStorage.setItem('lang', button.id);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'lv';
  translate(lang);
});
