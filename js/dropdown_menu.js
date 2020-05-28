// javascript document

jQuery(document).ready(function(){
  $('nav ul.submenu').hide();

  $('nav ul.menu > li').hover(
    function(){
      $(this).find('ul.submenu').stop().fadeIn(350);
    },
    function(){
      $(this).find('ul.submenu').stop().fadeOut(350);
    }
  );
})
