const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

function store(value) {
    localStorage.setItem('darkmode', value);
}

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (darkmode === 'true') {
        body.classList.add('dark-mode');
        icon.classList.add('fa-moon');
    } else {
        body.classList.remove('dark-mode');
        icon.classList.add('fa-sun');
    }
}

load();

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    icon.classList.add('animated');

    store(body.classList.contains('dark-mode'));

    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500);
});
