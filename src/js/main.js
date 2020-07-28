svg4everybody();

// @include('detect.js')
// @include('globals.js')

$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  rows: 0,
  arrows: false,
  dots: true,
  appendDots: $('.banner-slider-pagination'),
  centerMode: false,
});

$('.information-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  rows: 0,
  arrows: true,
  dots: true,
  appendArrows: $('.information .slider-arrows'),
  prevArrow: $('.information .arrow-prev'),
  nextArrow: $('.information .arrow-next'),
  appendDots: $('.information-slider-pagination'),
  centerMode: false,
});

$('.reviews-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  rows: 0,
  arrows: true,
  dots: true,
  appendArrows: $('.reviews .slider-arrows'),
  prevArrow: $('.reviews .arrow-prev'),
  nextArrow: $('.reviews .arrow-next'),
  appendDots: $('.reviews-slider-pagination'),
  centerMode: false,
  responsive: [
    {
      breakpoint: 1488,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(window).scroll(function(e){
  if($('.sticky').length > 0) {

    if ($(window).scrollTop() > $('.sticky-start').offset().top) $('.sticky').addClass('fixed');
    else $('.sticky').removeClass('fixed');
  }

  if($('.sidebar-fixed').length > 0) {
    let sidebar = $('.sidebar-fixed'),
        fixedStop = $('.fixed-stop').offset().top - sidebar.height() - 29;

    if ($(window).scrollTop() > 0 && $(window).scrollTop() <= fixedStop) {
      sidebar.removeClass('absolute').css('top', '0');
      sidebar.addClass('fixed');
    }
    else if ($(window).scrollTop() > fixedStop) {
      if(fixedStop > sidebar.height()) {
        let top = sidebar.offset().top;
        sidebar.removeClass('fixed');
        sidebar.addClass('absolute').css('top', top + 'px');
      }
    }
    else {
      sidebar.removeClass('fixed');
      sidebar.removeClass('absolute').removeAttr('style');
    }
  }
});

$('#sidebar').on('show.bs.collapse', function () {
  $('body').addClass('overlay');
});
$('#sidebar').on('hidden.bs.collapse', function () {
  $('body').removeClass('overlay');
});

$('#dropdownMenuProfile').on('show.bs.dropdown', function () {
  $('body').addClass('overlay');
});
$('#dropdownMenuProfile').on('hidden.bs.dropdown', function () {
  $('body').removeClass('overlay');
});

$('.nav-slider').slick({
  dots: false,
  infinite: false,
  rows: 0,
  slidesToShow: 1,
  variableWidth: true,
});

$('#myTab').slick({
  dots: false,
  infinite: false,
  rows: 0,
  slidesToShow: 1,
  variableWidth: true,
});

$(".order-prev").on("click", function() {
  let scrollBlock = $(this).parents('.order-slider').find('.order-scroll'),
      scrolled = scrollBlock.scrollTop();

  scrollBlock.animate({ scrollTop: (scrolled - 300) });
});
$(".order-next").on("click", function() {
  let scrollBlock = $(this).parents('.order-slider').find('.order-scroll'),
      scrolled = scrollBlock.scrollTop();

  scrollBlock.animate({ scrollTop: (scrolled + 300) });
});

$(".product-count").on("click", '.minus', function() {
  let _this = $(this),
      _input = _this.parents('.product-count').find('input'),
      _value = parseInt(_input.val());
  if (_value > 0) {
    _input.val(parseInt(_value - 1));
    if (_value - 1 == 0) {
      _this.parents('.product-count').find('.minus').addClass('disable');
      _this.parents('.product-count').removeClass('is-open');
    }
  }
});
$(".product-count").on("click", '.pluse', function() {
  let _this = $(this),
      _input = _this.parents('.product-count').find('input'),
      _value = parseInt(_input.val());
  _this.parents('.product-count').find('.minus').removeClass('disable');
  _this.parents('.product-count').addClass('is-open');
  _input.val(parseInt(_value + 1));
});

$(".sidebar-filter").on("click", '.nav-link', function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
});

$('.nav-tabs').each(function(i, tabs) {
  let tabsHide = () => {
    $(tabs).find('a.nav-link').each(function(i, link) {
      $(link).removeClass('active');
    });
  }
  $(tabs).find('a.nav-link').each(function(i, link) {
    $(link).on('show.bs.tab', function (e) {
      tabsHide();
    })
  });
});

// @include('map.js')