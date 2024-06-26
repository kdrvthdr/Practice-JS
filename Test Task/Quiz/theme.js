document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if(themeToggle.textContent === "Dark Theme"){
            themeToggle.textContent = "Light Theme";
        }
    });
});