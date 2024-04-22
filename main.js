//vytvaranie premennych
const tooltip  = document.querySelector('.tooltip');
const region = document.querySelectorAll('.region');
const popupBg = document.querySelector('.info_bg');
const popup = document.querySelector('.info');

document.body.onload = function () {
    setTimeout(function (){
        let preloader = document.getElementById('preloader_id');
        if(!preloader.classList.contains('preloader--hidden'))
        {
            preloader.classList.add('preloader--hidden');
        }
    }, 2700);
}
 //funkcia na zobrazenie pup up okna
region.forEach(region => {
    region.addEventListener('click', function (){
        popup.querySelector('.info_photo').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info_title').innerText = this.dataset.title;
        popup.querySelector('.info_text').innerText = this.dataset.description;
        popupBg.classList.add('active');
    });
 //nastavenie suranic tooltipu
    region.addEventListener('mousemove', function (ev) {
       tooltip.innerText = this.dataset.title;
       tooltip.style.top = (ev.y + 20) + 'px';
       tooltip.style.left =(ev.x + 20) + 'px';
    });
    //zobrazenie tooltipu
    region.addEventListener('mouseenter', function () {
       tooltip.style.display = 'block';
    });
    //odstranenie tooltipu
    region.addEventListener('mouseleave', function () {
        tooltip.style.display = 'none';
    });
});
//funkcia na zatvaranie pop up okienka
document.addEventListener('click', (ev) => {
    if(ev.target === popupBg) {
        popupBg.classList.remove('active');
    }
});
