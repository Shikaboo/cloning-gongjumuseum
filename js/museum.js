let btn = document.querySelector('.pause2');

btn.addEventListener('click', ()=>{
    if(btn.classList.contains('on')){
        btn.classList.remove('on');
        swiper.autoplay.start()
    }else{
        btn.classList.add('on');
        swiper.autoplay.stop()
    }
})