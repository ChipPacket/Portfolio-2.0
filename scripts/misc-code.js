// Code to open the mobile menu when clicked
let menuOpen = false;
function openMenu(){
    menuOpen = !menuOpen; // reverse state it is currently at onclick
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuOpen){
        mobileMenu.classList.add('flex');
        mobileMenu.classList.remove('hidden');
    }
    else{
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    }
}
