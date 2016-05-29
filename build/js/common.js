$(document).ready(function() {

$('.partners-slide').slick({
  dots: false,
  speed: 300,
  slidesToShow: 6,
  centerMode: false,
 	slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.blog-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

       $('.news-slider').slick({
            rows: 2,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: $('.prev-news'),
  			nextArrow: $('.next-news'),
            responsive: [
            {
			      breakpoint: 1280,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: false
			      }
			    },
                {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        infinite: true,
			        dots: false
			      }
			    },
			    {
			      breakpoint: 700,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: false
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: false
			      }
			    },
                {
                    breakpoint: 480,
                    settings: {
                        rows: 1,
                        slidesPerRow: 1,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        dots: false
                    }
                }
            ]
        });

        $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

});