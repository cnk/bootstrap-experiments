"use strict";

/*global jQuery */

/**
 * This file defines all the javascript functionality provided by wagtail-airspace.
 */

(function($, window, document) {
  function configure_carousel_with_bottom_thumbnails_blocks() {
    function thumbnail_width(block) {
      var number_of_thumbnails = 2;
      if (window.matchMedia("(min-width: 480px)").matches) {
        number_of_thumbnails = 4;
      }
      var parent_width = $('.carousel-wbt__thumbnail-wrapper', block).outerWidth();
      return parent_width / number_of_thumbnails;
    }

    function resize_thumbnails(block) {
      console.log('in resize_thumbnails');
      console.log(thumbnail_width(block));
      $('.carousel-wbt__thumbnail-image', block).css('width', thumbnail_width(block) + 'px');
    }

    function slide_thumbnails(to_item, from_item) {
      // If one of the controls is clicked and it leads to an extant thumbnail, we slide the thumbnail-wrapper an
      // appropriate distance and set the item being slid away from as "animating" until the animation is done.
      if (to_item.length) {
        var wrapper = to_item.parent();
        wrapper.css('transform', 'translateX(' + get_translate_distance_for_centering(to_item) + 'px)');
        to_item.addClass('active');
        from_item.removeClass('active').addClass('animating');
        wrapper.on('transitionend', function() {
          from_item.removeClass('animating');
        });
      }
    }

    $('.carousel-wbt').each(function() {
      var block = $(this);

      // Set up click handers to move the select image into the main content
      $('.carousel-wbt__thumbnail', block).on('click', function() {
        var filename = $(this).data('filename');
        $('.carousel-wbt__slide.active, .carousel-wbt__thumbnail.active', block).removeClass('active');
        $(".carousel-wbt__slide[data-filename='" + filename + "']", block).addClass('active');
        $(this).addClass('active');
      });

      // Set up the carousel controls.
      $('.js-cwbt-control-right', block).on('click', function() {
        console.log('.js-cwbt-control-right');
        var offset = 192;
        $('.js-thumbnail-slider', block).css('transform', 'translateX(' + offset + 'px)');
      });
      $('.js-cwbt-control-left', block).on('click', function() {
        console.log('.js-cwbt-control-left');
        var offset = 192;
        $('.js-thumbnail-slider', block).css('transform', 'translateX(-' + offset + 'px)');
      });

      resize_thumbnails(block);
      $(window).on('resize orientationchange', function() {
        resize_thumbnails(block);
      });
    });
  }

  $(document).ready(function() {
    console.log('document ready');
    configure_carousel_with_bottom_thumbnails_blocks();
  });
})(jQuery, this, this.document);


