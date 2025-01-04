<?php
if (isset($_POST['resetPassword'])) {
    $username = $_POST['resetPasswordUsername'];
    $newPassword1 = $_POST['resetPasswordPassword1'];
    $newPassword2 = $_POST['resetPasswordPassword2'];
    if ($newPassword1 === $newPassword2) {
        echo 'Password reset successful!';
    } else {
        echo 'Passwords do not match!';
    }
}
?>
