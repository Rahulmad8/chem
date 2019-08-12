<?php
include 'connect.php';


if (count($_POST) > 0){
    $name = $_POST['regName'];
    $cname = $_POST['cname'];
    $clinicNumber = $_POST['clinicNo'];
    $mobileNumber = $_POST['mobile'];
    $email = $_POST['regEmail'];
    $drQualification = $_POST['Qualification'];
    $Specialization = $_POST['special'];
    $Experience = $_POST['experience'];
    $address = $_POST['regAddress'];

    if (!isset($Errmsg)) {

        $query = "INSERT INTO users (name, cname , clinicNumber , mobileNumber , email , drQualification , Specialization , Experience , address) VALUES ('".$name."','".$cname."','".$clinicNumber."','".$mobileNumber."','".$email."','".$drQualification."','".$Specialization."','".$Experience."','".$address."')";
        $result = mysqli_query($conn,$query);

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
    // header('Location: index.html');
    die();

}
?>