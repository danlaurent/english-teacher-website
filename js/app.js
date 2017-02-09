$(document).foundation();
$(document).ready(function() {
  $('#fullpage').fullpage({
    menu: '#menu',
    anchors: ['Home', 'Vantagens', 'AulaExperimental', 'Contato', 'Localizacao'],
    navigationPosition: 'right',
    navigation: true,
    responsiveWidth: 1024,
    onLeave: function(index, nextIndex, direction) {
      if (index == 1 && nextIndex == 2) {
        isAnimatedSecond.addClass('animated fadeInUpBig');
        isAnimatedSecond.eq(0).css('animation-delay', '.3s');
        isAnimatedSecond.eq(1).css('animation-delay', '.6s');
        isAnimatedSecond.eq(2).css('animation-delay', '.9s');
        isAnimatedSecondSingle.addClass('animated zoomIn').css('animation-delay', '2s');
      } else if ((index == 1 || index == 2) && nextIndex == 3) {
        isAnimatedThird.addClass('animated zoomIn');
      }
    }
  });
});
var isAnimatedSecond = $('.second .is-animated');
var isAnimatedSecondSingle = $('.second .is-animated__single');
var isAnimatedThird = $('.third .is-animated');
$('.apresentacao').addClass('animated zoomIn');
$('.teacher').addClass('animated zoomIn').css('animation-delay', '.6s');
$('.contato').addClass('animated infinite pulse');