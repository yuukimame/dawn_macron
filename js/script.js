// hamburger menu
$(function () {
  $('.menu-trigger').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.g-navi').addClass('active');
    } else {
      $('.g-navi').removeClass('active');
    }
  });
  $('.nav-wrapper ul li a').click(function () {
    $('.menu-trigger').removeClass('active');
    $('.g-navi').removeClass('active');
  });
});

// thought
$(function () {
  function toggleChangeBtn() {
    var slideIndex = $('.staff-box').index($('.active'));
    $('.slide-button').show();
    if (slideIndex == 0) {
      $('.prev').hide();
    } else if (slideIndex == 2) {
      $('.next').hide();
    }
  }

  toggleChangeBtn();

  $('.next').click(function () {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active box-design');
    $displaySlide.next().addClass('active box-design');
    toggleChangeBtn();
  });
  $('.prev').click(function () {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active box-design');
    $displaySlide.prev().addClass('active box-design');
    toggleChangeBtn();
  });
});

// modal
$(function () {
  $('.modalopen').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(modal);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.modalClose').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});

// lineup
$(function () {
  var $filters = $('.filter [data-filter]'),
    $boxes = $('.lineup-wrapper [data-category]');

  $filters.on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'ranking') {
      $boxes.removeClass('is-animated').fadeOut().promise().done(function () {
        $boxes.addClass('is-animated').fadeIn();
      });
    } else {
      $boxes.removeClass('is-animated').fadeOut().promise().done(function () {
        $boxes.filter('[data-category = "' + $filterTime + '"]').addClass('is-animated').fadeIn();
      });
    };
  });
});
