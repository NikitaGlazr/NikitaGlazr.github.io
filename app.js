        var i=0; /*переменная */
        var image=document.getElementById("image");
        var imgs=new Array('pic1.2.jpg','pic1.3.jpg', "banner.jpg", "prk0.9.jpg", "prk0.10.jpg")
        elem.onclick = function() {
            i++;i%=imgs.length;
            image.src = imgs[i];
          };
 /*Строка эквивалентна i = i % imgs.length, что есть получение отстатка от деления на imgs.length, 
 а это в свою очередь гарантирует, что значение i всегда будет в диапазоне между 0 и imgs.length-1 
 (ведь других остатков от деления быть не может) */
 
 /*function changeImg() {
  const image = document.getElementById('img');
  const imgArray = ['https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg','https://cs9.pikabu.ru/avatars/2293/x2293505-666315228.png'];
  // Находим в массиве картинку, которая отображается сейчас
  const currentIndex = imgArray.indexOf(image.src);
  // Проверяем, если это последняя картинка в массиве, то снова покажем первую (прибавляем 1, т.к. в массиве индексы начинаются с нуля, а длина массива считается с 1)
  const nextIndex = currentIndex + 1 >= imgArray.length ? 0 : currentIndex + 1;
  image.src = imgArray[nextIndex];
} */
/*_______________________________________________________________________________________*/
(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 10);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();
