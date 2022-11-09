// ALL RIGHTS RESERVED
// AUTHOR: MIRACLE MARCEL
// YEAR DEVELOPED: 2022
// THIS IS THE FRONT END VERSION OF THIS WEBSITE


const navItems = document.querySelector('.nav__items');
const navOpenBtn = document.querySelector('#menu-btn');
const navCloseBtn = document.querySelector('#close-btn');



// open nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block'
}

//close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none'
}
navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);


//========DASHBOARD SIDEBAR TOGGLE

const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');


//show side bar==========
const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display ='none';
    hideSidebarBtn.style.display = 'inline-block'
}

//hide side bar==========
const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display ='inline-block';
    hideSidebarBtn.style.display = 'none';
}


showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);













