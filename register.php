<?php
if (isset($_POST['register'])) {
    $fullName = $_POST['registerFullName'];
    $username = $_POST['registerUsername'];
    $password1 = $_POST['registerPassword1'];
    $password2 = $_POST['registerPassword2'];
    if ($password1 === $password2) {
        echo 'Registration successful!';
    } else {
        echo 'Passwords do not match!';
    }
}
?>
