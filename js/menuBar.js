let totalBars = document.querySelectorAll('.icon');
let changeMenuIcon = function(){
    for(var activeBar = 0;
            activeBar < totalBars.length;
            activeBar++){
                totalBars[activeBar].classList.toggle('active');
            }
    document.getElementsByClassName("menus")[0].classList.toggle("responsive");
}