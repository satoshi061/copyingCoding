$(function() {
  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false
  });

  //ナビゲーションのフェード
  $('a').on('mouseover',function() {
    $(this).animate({
      opacity: 0.5
    }, 100);
  });

  $('a').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0
    }, 100);
  });

  //windowスクロール
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
      $('#back-btn').fadeIn();
    } else {
      $('#back-btn').fadeOut();
    }
  });

  //スムーズスクロール
  $('a[href^="#"]').on('click', function() {
    const linkTarget = $(this).attr('href');
    let $target;
    if (linkTarget == '#') {
      $target = $('html');
    } else {
      $target = $(linkTarget);
    }
    const position = $target.offset().top;
    $('html, body').animate({'scrollTop': position}, 500, 'swing');
    return false;
  });

  //スクロールフェード
  $(window).on('scroll', function() {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function() {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  //モーダル
  $('#worksFlex img').click(function() {
    const imgSrc = $(this).attr('src');
    $('.mordalPhoto').attr('src', imgSrc);
    $('.mordal').fadeIn();
    return false;
  });

  $('.mordalClose').click(function() {
    $('.mordal').fadeOut();
    return false;
  });
});