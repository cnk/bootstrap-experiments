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

    function slide_thumbnails(block, direction) {
      // When one of the controls is clicked, we check to see if there are any more images to show if we slide
      // in the requested direction. If so, we slide the thumbnail-slider within the thumbnail-wrapper by updating
      // the translateX property. This function returns the value we need for the translateX.
      var slider = $('.js-thumbnail-slider', block);
      var current_translate_value = slider.attr('style').split('(')[1].split(')')[0].replace('px', '');
      var slider_left_edge = slider.offset().left;

      // Default is for the slider not to move
      var position = current_translate_value;

      if (direction == 'left') {
        // Loop through the images backwards until we find the first image that is scrolled out of site to the left
        // and return the position of its left edge. If there are no images out the left hand side, then we will just
        // return the current_translate_value, aaka stay where we are.
        $($('.carousel-wbt__thumbnail', slider).get().reverse()).each(function(index, element) {
          var thumbnail_left_edge = $(element).offset().left - slider_left_edge;
          if (-thumbnail_left_edge > current_translate_value) {
            position = thumbnail_left_edge;
            return false;
          }
        });
      } else if (direction == 'right') {
        // If we have images hanging out the right hand boundary, then we need to update translate when left arrow clicked
        // If not, then we will return the current_translate_value (aka stay where we are).
        var last_thumbnail = $('.carousel-wbt__thumbnail', block).eq(-1);
        var slider_right_edge = last_thumbnail.offset().left + last_thumbnail.outerWidth();
        var wrapper = $('.carousel-wbt__thumbnail-wrapper');
        var wrapper_right_edge = wrapper.offset().left + wrapper.outerWidth();

        if (slider_right_edge > wrapper_right_edge) {
          $('.carousel-wbt__thumbnail', slider).each(function(index, element) {
            var thumbnail_left_edge = $(element).offset().left - slider_left_edge;
            if (-thumbnail_left_edge < current_translate_value) {
              position = -thumbnail_left_edge;
              return false;
            }
          });
        }
      }

      return position;
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
        var offset = slide_thumbnails(block, 'right');
        $('.js-thumbnail-slider', block).css('transform', 'translateX(' + offset + 'px)');
      });
      $('.js-cwbt-control-left', block).on('click', function() {
        var offset = slide_thumbnails(block, 'left');
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


