$(document).ready(function () {
    // Smooth scroll to sections
    $('#learn-more').click(function () {
      $('#about').slideToggle(600);
    });
  
    // Animate skill progress bars
    $('.progress-bar').each(function () {
      $(this).css('width', $(this).attr('style').split('width: ')[1]);
    });
  });
  