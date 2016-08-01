$(document).ready(function() {
    $('#btnSendEmail').click(function() {
        $('#contactForm').attr('action',
                       'mailto:dzhinnhyi@mail.ru?subject=FromSite' + '&body=' + $('#message').val());
        $('#contactForm').submit();
    });
});