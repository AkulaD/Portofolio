window.addEventListener("load", () => {
    const loader = document.querySelector("#loader-wrapper");
    loader.classList.add("loader-hidden");
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav a[href^="#"], .responsive-nav a[href^="#"], #contact-button a');

    for (const link of links) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                hidebar(); 
                
                const navHeight = document.querySelector("nav").offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    }
});

function showsidebar() {
    const sidebar = document.querySelector('.responsive-nav');
    sidebar.classList.add('active');
}

function hidebar() {
    const sidebar = document.querySelector('.responsive-nav');
    sidebar.classList.remove('active');
}