$(document).ready(function(){

    //efeito de fumaça
    $('header, .info').ripples({
        dropRadius: 25,
        perturbance: 0.1,
    })

    //botão toggler
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    })

    //magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

    //slick carroseu
    $('.carrosel').slick({
        centerMode: true,
        mobileFirst: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

    
    $('.fotos-churrascaria').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed:700,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    })

    //Fixar menu de navegação ao dar scroll
    $(window).scroll(function(){
      let position = $(this).scrollTop();

      if(position >= 720){
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
      }else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
      }
    })

    //Botão voltar topo
    $(window).scroll(function(){
      let position = $(this).scrollTop();

      if(position >= 718){
        $('#voltar-topo').addClass('scrollTop');
      }else{
        $('#voltar-topo').removeClass('scrollTop');
      }
    })

    //suaviza scroll automatico
    $('nav-link a, header-link, btn-adiante, #voltar-topo, navbar-brand').click(function(link){
      link.preventDefault();
      let target = $(this).attr('href');

      $('html, body').stop().animate({
        scrollTop: $(target).offset.top - 25
      }, 1000);
    })
})