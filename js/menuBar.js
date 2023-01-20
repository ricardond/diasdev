let totalBars = document.querySelectorAll('.icon');
let changeMenuIcon = function(){
    document.getElementsByClassName("menus")[0].classList.toggle("responsive");
}

window.onscroll = () => {
    const nav = document.querySelector('header');
    if(this.scrollY > 100) nav.className = 'menuFixo'; else nav.className = 'menu';
  };