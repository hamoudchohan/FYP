
$('#myCheck').on('change', function () {
  if ($(this).is(':checked')) {
    $('#dateField').show();
  } else {
    $('#dateField').hide();
  }
});