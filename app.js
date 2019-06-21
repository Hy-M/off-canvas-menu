const toggleNav = _ => {
    const navMenu = document.querySelector(".nav-menu");
    const toggleMenuEl = [...document.querySelectorAll(".nav-toggler")];
    const contentEl = document.querySelector(".content");
    const navItems = [...document.querySelectorAll(".nav-item")];

    for (let item of toggleMenuEl) {
        item.addEventListener("click", _ => {
            navMenu.classList.toggle("nav-open");
            contentEl.classList.toggle("content-shift");
            addAnimation();
        })
    }

    const addAnimation = _ => {
        navItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = '';
            } else {
               item.style.animation = `navItemFade 0.5s ease forwards ${index / 5  + 0.2}s`;
            //    The additional 0.2s is the delay at the beginning. Experiment with your own values
            }
        })
    }
}

toggleNav();