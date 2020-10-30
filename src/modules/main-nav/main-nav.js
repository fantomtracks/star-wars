/**
 * Front Base - main-nav.js
 * @author Sade
 * @created 31/10/2017
 * @requires jQuery
 */

import './main-nav.scss';

(function ($) {
    "use strict";
    $(function () {
  
      var $target = $('.main-nav');
      $(document).on('click', '.main-nav__trigger', function (e) {
        e.preventDefault();
        e.stopPropagation();
  
        if (!$target.is('.is-open')) {
          $target.addClass('is-open');
          $('body').addClass('no-scroll');
        } else {
          $target.removeClass('is-open');
          $('body').removeClass('no-scroll');
        }
      }).on('click', '.main-nav', function (e) {
        e.stopPropagation();
      }).on('click', function () {
        $target.removeClass('is-open');
      });
      
      checkSticky();
      
      $(window).scroll(function(){
        checkSticky();
      });

      $(window).on('resize', function(){
        checkSticky();
      });

      function checkSticky(){
        if($( window ).width() > 767){
          $('.main-nav').addClass('main-nav--sticky')
        } else {
          $('.main-nav').removeClass('main-nav--sticky')
        }
      }
    }); 
  })(jQuery);
