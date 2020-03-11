jQuery(document).ready(function($) {
  $(".ajax-contact-form").submit(function() {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "http://tastenuts.com/contact.php",
      data: str,
      success: function(msg) {
        if (msg == "OK") {
          result = "<p>Спасибо за ваш заказ.</p><p> Всегда рады вас видеть в нашем магазине</p>";
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
