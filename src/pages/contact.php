<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$name = htmlspecialchars($_POST['name']);
$tel = htmlspecialchars($_POST["tel"]);
$price = $_POST["price"];
$price2 = "";
foreach ($price as $value) {
	$price2.= "Прайс: $value.\n";
}
}



$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject ="Новая заявка с сайта tastenuts.com";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";


$message1 ="\n\nИмя: ".$name."\n\nТелефон: " .$tel."\n\nПрайс " .$price2."\n\n";

$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From: Новая заявка <fandeluk.k@gmail.com>\n\n";
$mail = mail("fandeluk.k@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));

if($mail)
{
echo 'OK';
}

else
{
echo '<div class="notification_error">'.$error.'</div>';
}

?>