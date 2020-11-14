$(function () {
   $('.top__slider').slick({
      prevArrow: '<img class="slider-btn slider-btn__prev" src="images/icon/arrow-prev.svg" alt="">',
      nextArrow: '<img class="slider-btn slider-btn__next" src="images/icon/arrow-next.svg" alt="">',
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      fade: true,
      dots: true,
      
      responsive: [
         {
            breakpoint: 1103,
            settings: {
               arrows: false,
            }
         },
      ]
   });



   $(".filter-down").on("click", function () {
      $(".category__list").slideToggle();
      $(".filter-products__country-title").addClass("filter-active");
   });

   $('.header__menu-btn').on('click', function () {
      $('.header__menu-list').slideToggle();
   });



   $(".filter-down").on("click", function () {
      // $(".category__list").slideToggle();
      $(".filter-products__country").removeClass("filter-active");
      $(this).parent().addClass("filter-active");
   });

   $(".price-down").on("click", function () {
      $(".filter-products__price-form").slideToggle();
      $(".filter-products__price").removeClass("filter-active");
      $(this).parent().addClass("filter-active");
   });

   $(".material-down").on("click", function () {
      $(".filter-products__material-list").slideToggle();
      $('.filter-products__material').removeClass('filter-active');
      $(this).parent().addClass('filter-active');
   });

   $(".state-down").on("click", function () {
      $(".filter-products__state-list").slideToggle();
      $('.filter-products__state').removeClass('filter-active');
      $(this).parent().addClass('filter-active');
   });

   $(".states-down").on("click", function () {
      $(".filter-products__states-list").slideToggle();
      $('.filter-products__states').removeClass('filter-active');
      $(this).parent().addClass('filter-active');
   });

   $(".offers-down").on("click", function () {
      $(".filter-products__offers-list").slideToggle();
      $('.filter-products__offers').removeClass('filter-active');
      $(this).parent().addClass('filter-active');
   });

   $(".theme-down").on("click", function () {
      $(".filter-products__theme-list").slideToggle();
      $('.filter-products__theme').removeClass('filter-active');
      $(this).parent().addClass('filter-active');
   });

   $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 3000,
      from: 500,
      to: 1000,
   });

   $('.money__tab .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.money__tab').find('.tab-item').removeClass('active-tab').hide();
      $('.money__tab .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active-tab').fadeIn();
      return false;
   });

   $('input[type="file"],input[type="checkbox"],input[type="radio"],select').styler();

   new WOW().init();

});