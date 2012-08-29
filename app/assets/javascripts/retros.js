$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    $(e.target).parent().find('span').text(parseInt($(e.target).parent().find('span').text())+1);
    
    var addedItem = $(e.target).find('#description').val();
    $(e.target).parent().find('ul').append("<li>"+addedItem+"<img src='/assets/purple.png' class='icon' /></li>");
  });
});

$(function() {
});