function showsidebar(){
    const sidebar = document.querySelector('.responsive-nav');
    const buttonbar = document.querySelector('.responsive-menu-nav')
    sidebar.style.display = 'flex';
    buttonbar.style.display = 'none'
}

function hidebar(){
    const hidebar = document.querySelector('.responsive-nav')
    const buttonshow = document.querySelector('.responsive-menu-nav')
    hidebar.style.display = 'none'
    buttonshow.style.display = 'flex'
}