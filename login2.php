<?php 
// session_start();
// include_once("dbcon.php"); 
// $mob=$_GET["mob"]; 

//$rs=mysqli_query($conn, "select * from table2 where e_id='$e_id' and pass='Spass'");
//if($rw = mysqli_fetch_array($rs))
// if($mob != null)
// {
//     $_SESSION["mob"]=$mob;  
//     header ("Location: Finalrank_test.php");
// } 
// else
// {
//     //Query String
//     header ("Location: otp.php?abc=inv");
// }
?>
<?php
session_start();

$mobile = $_POST["mob"];
$otp = $_POST["otp"];

// Static values
$valid_mobile = "9999999999";
$valid_otp = "123456";

if ($mobile === $valid_mobile && $otp === $valid_otp) {
    $_SESSION["mob"] = $mobile;
    header("Location: Finalrank_test.php");
} else {
    // Redirect to otp page with error message
    header("Location: otp.php?abc=inv");
}
?>
