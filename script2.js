$(document).ready(function() {
            $("#register-form").hide();
            $("#register-link").click(function() {
                $("#login-form").hide();
                $("#register-form").show();
            });
            $("#login-link").click(function() {
                $("#register-form").hide();
                $("#login-form").show();
            });
            $("#register-btn").click(function() {
                var username = $("#register-username").val();
                var password = $("#register-password").val();
                var email = $("#register-email").val();
                if (validateUsername(username) && validatePassword(password) && validateEmail(email)) {
                    alert("Pomyślnie zarejestrowano użytkownika!");
                } else {
                    alert("Proszę poprawić błędy w formularzu rejestracji.");
                }
            });
            $("#login-btn").click(function() {
                var username = $("#login-username").val();
                var password = $("#login-password").val();
                if (validateUsername(username) && validatePassword(password)) {
                    alert("Pomyślnie zalogowano użytkownika!");
                } else {
                    alert("Proszę poprawić błędy w formularzu logowania.");
                }
            });
        });

        function validateUsername(username) {
            if (username.length < 5) {
                alert("Nazwa użytkownika musi zawierać co najmniej 5 znaków.");
                return false;
            }
            return true;
        }

        function validatePassword(password) {
            if (password.length < 8) {
                alert("Hasło musi zawierać co najmniej 8 znaków.");
                return false;
            }
            return true;
        }

        function validateEmail(email) {
            if (!email.includes("@")) {
                alert("Adres email jest niepoprawny.");
                return false;
            }
            return true;
        }