let navItems = document.querySelector(".nav-items");
let hamburgerBtn = document.querySelector(".hamburger");
let wrapperNav = document.querySelector(".wrapper");
let closeBtn = document.querySelector(".close");

hamburgerBtn.addEventListener('click', () => {
        navItems.classList.add("active");
        wrapperNav.classList.add("active");
        hamburgerBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    })

closeBtn.addEventListener('click', () => {
        navItems.classList.remove("active");
        wrapperNav.classList.remove("active");
        hamburgerBtn.style.display = 'flex';
        closeBtn.style.display = 'none';
    })
