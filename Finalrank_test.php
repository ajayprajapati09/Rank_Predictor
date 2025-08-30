<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/rank.css">
        <link rel="stylesheet" href="css/test.css">
        <script src="js/rank1.js"></script>
    </head>
<body>
<?php
if(isset($_POST['m1']))
{
    include_once("dbcon.php");
    extract($_POST);
    $qry = "insert into tab values('$n1','$p1','$m1','$cat')";
    mysqli_query($conn,$qry);
    //echo '<script>document.getElementById("myid1").innerHTML="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";</script>';
}
?>

      <div class="container">
          <ul>
              <li style="float: left;"><a href="#"><img src="images/aj.png"></a></li>
              <li><a class="active" href="#home">Home</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
      </div>

<h1 align="center">AI Based NIMCET Rank/College Calculator</h1>
<h3 align="center">Find Your NIMCET Rank/College</h3>

<div>
  <form name="frm" method=post action="Finalrank_test.php">
    <label for="fname">Name</label>
    <input type="text" id="fname" name="n1" placeholder="Your name.." required>
    
    <label for="fname">Mobile no</label><br>
    <input type="number" id="fname" name="p1" placeholder="+91-xxxxx-xxxxx" required><br>
    
    <label for="fname">Your Expected Marks in NIMCET 2023</label>
    <input type="text" id="fname" name="m1" placeholder="Obtain marks" required>
    
    <label for="fname">Category :</label>
    GEN<input type="radio" name="cat" value="gen">
    OBC<input type="radio" name="cat" value="obc">
    SC<input type="radio" name="cat" value="sc">
    ST/PWD<input type="radio" name="cat" value="st">
    <input type="hidden" name=msg1 id=msg1 value="<?php echo $_POST['msg1']; ?>">
    <!-- <input class="btn" type="submit" value="Get my predicted college" onclick=x()><br> -->
    <button class="btn" onclick="x()">Get my predicted college</button>
  </form>
</div>
<center><span id="myid1" class="res"></span></center>
<script>
      document.getElementById("myid1").innerHTML=frm.msg1.value;
</script>

</div>

<div class="con1">
  <div class="item1" align="center"><img src="images/gift.jpeg" width="90%" height="400px" ></div>
</div>
<div class="con1">
  <p>
  We are delighted to announce that ACME ACADEMY will be presenting a motivation prize to students 
  who excel in the NIMCET 2023 exam, up to AIR Rank 500. To qualify for this prize, you must be enrolled 
  in any of our courses, including Classroom Courses, Any Offline or Online course, Recorded Course, Any of 
  the Test Series, Including Star Batch. In addition, you must not be associated with any other coaching institute.
  </p>
  <p>
  The prize will be awarded at specific time and place which we will tell you very soon & no sooner than 15 days
   following the release of the results.  Prior to accepting the prize, you must agree to all the terms and 
   conditions specified above and sign an agreement stating that you will not endorse any other coaching institute
    in any way.
  </P>
  <p>
  Furthermore, we would like to clarify that the fee for each semester will only be transferred to the NIT Institute 
  account. We trust that this prize will serve as an additional source of inspiration for our students to strive for 
  excellence and achieve their objectives.

  Please note: We have a motivation prize for all students based on their performance (up to AIR Rank 500) in NIMCET 2023. 
  Kindly share your AIR Rank of NIMCET 2023 through the ACME ACADEMY'S mobile app or by contacting the concerned mobile
   numbers and register your name on the prize list.
  </p>
  <p>
  *Terms and Conditions for receiving the prize:
    <ol>
        <li>You must be enrolled in one of ACME ACADEMY's courses (Offline or Online Course, Recorded Course, Any of the Test Series, Including Star Batch.)</li>        
                <li>You must not be associated with any other coaching institute.</li>
        <li>The prize will be awarded at a given specific time and date.</li>
        <li>Prior to accepting the prize, you must agree to all the terms and conditions specified above. Additionally, you must sign an agreement stating that you will not endorse any other coaching institute in any way.</li>
        <li>The fee for each semester will only be transferred to the NIT Institute account.</li>
    </ol>
  </p>
</div>

</body>
</html>
