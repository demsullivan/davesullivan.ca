$(document).ready(function() {

  function sendEmail() {
    $('#input-name').attr('disabled', true);
    $('#input-email').attr('disabled', true);
    $('#btn-submit').attr('disabled', true);

    $.ajax({
      url: "https://formspree.io/website@dems.ws",
      method: "POST",
      data: {
        name: $('#input-name').val(),
        _replyto: $('#input-email').val()
      },
      dataType: 'json',
      success: function(data, status, xhr) {
        $('div.email').hide();
        $('div.email-success').show();
      }
    });
  }

  function attachEventListeners() {
    $('#btn-submit').on('click', sendEmail);
  }

  attachEventListeners();

});
