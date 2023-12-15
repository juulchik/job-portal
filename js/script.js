    // Функція для перевірки відповідності паролів при реєстрації
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    var pass = document.getElementById("pass").value;
    var c_pass = document.getElementById("c_pass").value;

    if (pass !== c_pass) {
        alert("Passwords do not match. Please try again.");
        event.preventDefault(); // Зупинити відправку форми
    }
});
