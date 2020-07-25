svg4everybody();

// @include('detect.js')
// @include('globals.js')
// @include('map.js')

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

var stickyOffset = 0;
if($('.sticky').length > 0) stickyOffset = $('.sticky').offset().top;
$(window).scroll(function(e){
  if($('.sticky').length > 0) {
    let sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll > (stickyOffset + 150)) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
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

// $('.order-list').slick({
//   infinite: false,
//   vertical: true,
//   swipeToSlide: true,
//   verticalSwiping: true,
//   mobileFirst: true,
//   responsive: [
//     {
//       breakpoint: 900,
//       settings: 'unslick'
//     },
//   ]
// });
// $('.order-check-list').slick({
//   infinite: false,
//   vertical: true,
//   swipeToSlide: true,
//   verticalSwiping: true,
// });
// $('.order-list', '.order-check-list').each(function() {
//   this.slick.getSlideCount = function() {
//     var _ = this, slidesTraversed, swipedSlide, centerOffset;

//     centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

//     if (_.options.swipeToSlide === true) {
//       _.$slideTrack.find('.slick-slide').each(function(index, slide) {
//         var offsetPoint = slide.offsetLeft,
//           outerSize = $(slide).outerWidth();
        
//         if(_.options.vertical === true) {
//           offsetPoint = slide.offsetTop;
//           outerSize = $(slide).outerHeight();
//         }
//         if (offsetPoint - centerOffset + (outerSize / 2) > (_.swipeLeft * -1)) {
//           swipedSlide = slide;
//           return false;
//         }
//       });
//       slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      
//       return slidesTraversed;
//     } else {
//       return _.options.slidesToScroll;
//     }

//   };
  
//   this.slick.getNavigableIndexes = function() {
//     var _ = this,
//         breakPoint = 0,
//         counter = 0,
//         indexes = [],
//         max;
//     if (_.options.infinite === false) {
//       max = _.slideCount;
//     } else {
//       breakPoint = _.options.slideCount * -1;
//       counter = _.options.slideCount * -1;
//       max = _.slideCount * 2;
//     }
//     while (breakPoint < max) {
//       indexes.push(breakPoint);
//       breakPoint = counter + _.options.slidesToScroll;
//       counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
//     }
//     return indexes;
//   };
// });

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
  if(_value > 0) _input.val(parseInt(_value - 1));
});
$(".product-count").on("click", '.pluse', function() {
  let _this = $(this),
      _input = _this.parents('.product-count').find('input'),
      _value = parseInt(_input.val());
  _input.val(parseInt(_value + 1));
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