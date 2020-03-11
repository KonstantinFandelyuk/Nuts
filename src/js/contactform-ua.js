jQuery(document).ready(function($) {
  $(".ajax-contact-form").submit(function() {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "http://tastenuts.com/contact.php",
      data: str,
      success: function(msg) {
        if (msg == "OK") {
          result = "<p>Спасибі за ваше замовлення.</p><p> Завжди раді вас бачити в нашому магазині</p>";
          $(".shop-form").hide();
        } else {
          result = msg;
        }
        $(".order__list-item--note").html(result);
      },
    });
    return false;
  });
});
