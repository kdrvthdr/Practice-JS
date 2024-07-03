document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const circle = document.querySelector('.circle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            circle.classList.add('right');
        } else {
            circle.classList.remove('right');
        }
    });
});
