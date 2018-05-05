$(function () {
  $("#Changelogs").load("changelogs.html");
});
$(document).ready(function () {
  $('.ui.dropdown').dropdown({
    action: 'activate'
  });
  $('#naturaleza').dropdown();
});