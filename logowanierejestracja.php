<!DOCTYPE html>
<html>
<head>
    <title>Formularz logowania i rejestracji</title>
    <meta charset="utf-8"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script2.js">
    </script>
</head>

<body>
    <div>
        <h2>Logowanie i rejestracja</h2>
        <div>
            <a href="#" id="login-link">Logowanie</a>
            <a href="#" id="register-link">Rejestracja</a>
        </div>
    </div>
    <div id="login-form">
        <h3>Logowanie</h3>
        <form>
            <label for="login-username">Nazwa użytkownika:</label>
            <input type="text" id="login-username" name="login-username" required><br><br>
            <label for="login-password">Hasło:</label>
            <input type="password" id="login-password" name="login-password" required><br><br>
            <input type="button" id="login-btn" value="Zaloguj">
        </form>
    </div>
    <div id="register-form">
        <h3>Rejestracja</h3>
        <form>
            <label for="register-username">Nazwa użytkownika:</label>
            <input type="text" id="register-username" name="register-username" required><br><br>
            <label for="register-password">Hasło:</label>
            <input type="password" id="register-password" name="register-password" required><br><br>
            <label for="register-email">Adres email:</label>
            <input type="email" id="register-email" name="register-email" required><br><br>
            <input type="button" id="register-btn" value="Zarejestruj">
        </form>
    </div>

</body></html>