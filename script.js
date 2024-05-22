document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById("registrationForm");
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var passwordInput = document.getElementById("password");
        var password = passwordInput.value;
        var password2Input = document.getElementById("password2");
        var password2 = password2Input.value;
        if (password2 != password) {
            alert("Password Tidak Cocok")
        } else {
            var validasi = document.getElementById("validasi");
            validasi.style.display = "block";
            document.getElementById("yes").addEventListener("click", function(){
                validasi.style.display = "none";
                registrationForm.submit();
            });
            document.getElementById("no").addEventListener("click", function(){
                validasi.style.display = "none";
            });
        }
    });
});