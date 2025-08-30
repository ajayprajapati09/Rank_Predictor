<head>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>

<?php
if(isset($_POST['fnm']))
{
    include_once("dbcon.php");
    extract($_POST);
    $qry = "insert into table2 values('$fnm',$mob)";
    mysqli_query($conn,$qry);
}
?>

    <div class="logcon1">
        <h2 align="center">Login Form</h2>
    
    
        <div class="imgcontainer">
            <img src="images/img_avatar2.png" alt="Avatar" class="avatar">
        </div>
    
        <div class="logcontainer1">
            <form name="frm2" method="post" action="otp.php">
            <label><b>Name</b></label><br>
            <input type="text" name="fnm" placeholder="Enter your name"/><br>

            <label for="uname"><b>Mobile Number</b></label><br>
            <input type="number" name="mob" id="mobile" placeholder="Enter Mobile Number"/>

            <button onclick="sendOTP();">Get OTP</button>
            </form>
            <br>
            
            <form name="frm" action="">
            
            <label for="psw"><b>Enter OTP</b></label><br>
            <input type="number" id="otp" placeholder="Enter OTP"/>
            
            <input type="button" onclick="verifyOTP()" value="Login"></input>
            <!-- <button onclick="verifyOTP();">Login</button> -->
            </form>
        </div>
        <div class="logcontainer2" style="background-color:#f1f1f1">
            <button onclick="sendOTP();">Resend OTP</button>
        </div>
    
    </div>







<!-- <input type="number" id="mobile" placeholder="Enter Mobile Number"/>
<br/>
<button onclick="sendOTP();">Get OTP</button>
<br/>
<input type="number" id="otp" placeholder="Enter OTP"/>
<button onclick="verifyOTP();">Verify</button> -->

<script>
    let session_id = "";
    const api_key="14127bc3-09f4-11ee-addf-0200cd936042";
    function sendOTP() {
        let mobilenumber = document.getElementById("mobile").value;
        if (mobilenumber == "") {
            return;
        }
        let url = "https://2factor.in/API/V1/"+api_key+"/SMS/+91"+mobilenumber+"/AUTOGEN";
        //alert("OK 1");
        fetch (url)
                        .then((response) => response.json())
                        .then((data)=>{
                            //frm2.submit();
                            alert("OTP send successfully");
                            if (data["Status"] == "Success") {
                                session_id = data["Details"];
                                
                            }
                        })
                            
                        .catch((err) => {
                            alert("Error", err);
                        });
                    }                
    function verifyOTP() {
        let otp_entered_by_user = document.getElementById("otp").value;
        let ssn=session_id;
        let url = "https://2factor.in/API/V1/"+api_key+"/SMS/VERIFY/"+ssn+"/"+otp_entered_by_user+"";

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data["Details"] == "OTP Matched") {
                //alert("OTP matched successfully");
                window.location.href = "Finalrank_test.php";
            }
            console.log(data);
        })
        .catch((err) => console.log(err));
    }
        </script>
</body>