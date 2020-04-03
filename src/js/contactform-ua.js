jQuery(document).ready(function($) {
  $(".ajax-contact-form").submit(function() {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "https://tastenuts.com/contact.php",
      data: str,
      success: function(msg) {
        if (msg == "OK") {
          result = "<p>Дякую за ваше замовлення.</p><p>Ми зв'яжемося з вами по телефону або в месенджері</p>";
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
