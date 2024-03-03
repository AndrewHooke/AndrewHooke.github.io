emailjs.init("OBFr8KmgnoC_loyAX"); // Этот ID будет вашим виртуальным почтальоном

function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Не обновляйте страницу, пока сообщение не отправлено
    emailjs.sendForm('service_duar265', 'template_1bfdxrg', this)
        .then(function() {
            alert('Сообщение успешно отправлено!');
        }, function(error) {
            alert('Ошибка отправки: ' + error);
        });
});