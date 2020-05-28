// javascript Document
jQuery(document).ready(function(){
  $('nav div.menu_btn').click(function(){
    $('header > nav ul.menu').toggleClass('active');
  })
})
