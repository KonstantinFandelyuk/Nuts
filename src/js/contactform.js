jQuery(document).ready(function ($) {
  $(".ajax-contact-form").submit(function () {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "https://tastenuts.com/contact.php",
      data: str,
      success: function (msg) {
        if (msg == "OK") {
          result =
            "<p>Спасибо за ваш заказ.</p><p>Мы свяжемся с вами по телефону или в мессенджере</p>";
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
