<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    
    $to = "andrewhooke@yandex.ru";
    $subject = "Сообщение с веб-страницы";
    $body = "Имя: $name\nEmail: $email\nPhone number: $phone\n\n$message";
    
    if (mail($to, $subject, $body)) {
        echo "Ваше сообщение успешно отправлено.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
