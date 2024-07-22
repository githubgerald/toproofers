document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const fullMenu = document.getElementById('full-menu');
    const body = document.body;

    if (hamburgerMenu && fullMenu) {
        hamburgerMenu.addEventListener('click', () => {
            fullMenu.classList.toggle('full-menu-active');
            if (fullMenu.classList.contains('full-menu-active')) {
                body.classList.add('menu-active');
            } else {
                body.classList.remove('menu-active');
            }
        });

        const links = document.querySelectorAll('#full-menu nav ul li a');
        links.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        function smoothScroll(event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const targetPosition = targetElement.offsetTop;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                // Hide the menu after clicking a link
                fullMenu.classList.remove('full-menu-active');
                body.classList.remove('menu-active');
            }
        }
    }
});
