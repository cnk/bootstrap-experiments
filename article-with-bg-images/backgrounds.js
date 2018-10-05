"use strict";

$(function() {
  $(window).scroll(function() {
    var img_transition_offset = 75;
    var scroll_top = $(window).scrollTop();
    var scroll_bottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var current_page = $('.page.current');
    var prev_page = $('.page.current').prevAll('.page').first();
    var next_page = $('.page.current').nextAll('.page').first();

    // When the title is visible change bg image
    if (next_page.length &&
        (scroll_top + $(window).height() + img_transition_offset >= $('.page__text', next_page).offset()['top'])) {
      $('body').css('background-image', 'url(' + next_page.data('bgimg') + ')');
      current_page.removeClass('current');
      next_page.addClass('current');
    } else if (prev_page.length &&
               (scroll_top + $(window).height() - img_transition_offset <= current_page.offset()['top'])) {
      $('body').css('background-image', 'url(' + prev_page.data('bgimg') + ')');
      current_page.removeClass('current');
      prev_page.addClass('current');
    }

    if ($('.page__text', current_page).length &&
        scroll_top + $(window).height() >= $('.page__text', current_page).offset()['top'] + 20) {
      $('.pages').css('background-color', 'rgb(0,0,0,0.5)')
    } else {
      $('.pages').css('background-color', 'rgb(0,0,0,0)')
    }
  });
})
