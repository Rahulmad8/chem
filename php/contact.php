<?php
include 'connect.php';


if (count($_POST) > 0){
    $name = $_POST['contactName'];
    $email = $_POST['contactEmail'];
    $subject = $_POST['contactSubject'];
    $message = $_POST['contactMessage'];

    if (!isset($Errmsg)) {

        $query = "INSERT INTO contact_us (name, email, subject, message)
        VALUES ('".$name."','".$email."','".$subject."','".$message."')";
        $result = mysqli_query($conn, $query);
        if (!empty($result)) {
            $Errmsg = "You have registered successfully!";
            echo $Errmsg;
            unset($_POST);
        } else {
            $Errmsg = "Problem in registration. Try Again!";
        }
    } else
    echo $Errmsg;
    echo '<a href="../index.html">Continue...</a>';
    // header('Location: ../index.html');
    die();

}
?>