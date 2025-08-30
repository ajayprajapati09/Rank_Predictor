

function x(){
    //m1 = parseInt(frm.m1.value);
    m1 = frm.m1.value;
    sx = frm.cat.value;
    
    clg_gen="";
        if(sx == 'gen')
        {
            if(m1>=700){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";    
            frm.msg1.value="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";  
              
        }
        else if(m1>= 650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy";
            frm.msg1.value="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy";    
        }
        else if(m1>= 600 && m1<=650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy";
            frm.msg1.value="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy";    
        }
        else if(m1>= 570 && m1<=599){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy";
            frm.msg1.value="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy";    
        }
        else if(m1>= 550 && m1<=570){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Surathkal"; 
            frm.msg1.value="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Surathkal";
        }
        else if(m1>= 500 && m1<=550){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Surathkal";    
            frm.msg1.value="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Sutathkal";
        }
        else if(m1>= 470 && m1<=500){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Allahabad";
            frm.msg1.value="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Surathkal";    
        }
        else if(m1>= 450 && m1<=470){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Warangal";
            frm.msg1.value="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Warangal";    
        }
        else if(m1>= 420 && m1<=450){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Bhopal/NIT-Kurukshetra";
            frm.msg1.value="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Bhopal/NIT-Kurukshetra";    
        }
        else if(m1>= 400 && m1<=420){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Raipur/NIT-Jamshedpur";  
            frm.msg1.value="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Raipur/NIT-Jamshedpur";  
        }
        else if(m1>= 385 && m1<=400){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Agartala";
            frm.msg1.value="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Agartala";    
        }
        else if(m1>= 370 && m1<=385){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>750</b><br>Colleges suggested : HCU/HBTU";
            frm.msg1.value="Your Rank under : <b>750</b><br>Colleges suggested : HCU/HBTU";    
        }
        else if(m1>= 350 && m1<=370){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>1000</b><br>Colleges suggested : IPU";   
            frm.msg1.value="Your Rank under : <b>1000</b><br>Colleges suggested : IPU"; 
        }
        else if(m1>= 300 && m1<=350){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>2000</b><br>Colleges suggested : IPU"; 
            frm.msg1.value="Your Rank under : <b>2000</b><br>Colleges suggested : IPU";   
        }
        else if(m1>= 250 && m1<=300){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>3000</b>";
            frm.msg1.value="Your Rank under : <b>3000</b>";    
        }
        else if(m1>= 200 && m1<=250){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>4500</b>";
            frm.msg1.value="Your Rank under : <b>3000</b>";    
        }
        else if(m1>= 150 && m1<=200){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>6000</b>";   
            frm.msg1.value="Your Rank under : <b>3000</b>"; 
        }
        }


        if(sx == 'obc'){
            if(m1>=700){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";
            frm.msg1.value="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 600 && m1<=650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 570 && m1<=599){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 550 && m1<=570){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Trichy";   
            frm.msg1.value="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Trichy"; 
        }
        else if(m1>= 500 && m1<=550){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 470 && m1<=500){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Surathkal";   
            frm.msg1.value="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Surathkal"; 
        }
        else if(m1>= 450 && m1<=470){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Allahabad";    
            frm.msg1.value="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Allahabad";
        }
        else if(m1>= 420 && m1<=450){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Warangal";  
            frm.msg1.value="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Warangal";  
        }
        else if(m1>= 400 && m1<=420){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Warangal/NIT-Kurukshetra";
            frm.msg1.value="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Warangal/NIT-Kurukshetra";    
        }
        else if(m1>= 385 && m1<=400){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Kurukshetra/NIT-Jamshedpur";
            frm.msg1.value="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Kurukshetra/NIT-Jamshedpur";    
        }
        else if(m1>= 370 && m1<=385){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>750</b><br>Colleges suggested : NIT-Raipur/NIT-Jamshedpur"; 
            frm.msg1.value="Your Rank under : <b>750</b><br>Colleges suggested : NIT-Raipur/NIT-Jamshedpur";   
        }
        else if(m1>= 350 && m1<=370){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>1000</b><br>Colleges suggested : NIT-Agartala/HCU"; 
            frm.msg1.value="Your Rank under : <b>1000</b><br>Colleges suggested : NIT-Agartala/HCU";   
        }
        else if(m1>= 300 && m1<=350){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>2000</b><br>Colleges suggested : HBTU/IPU";
            frm.msg1.value="Your Rank under : <b>2000</b><br>Colleges suggested : HBTU/IPU";    
        }
        else if(m1>= 250 && m1<=300){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>3000</b>";  
            frm.msg1.value="Your Rank under : <b>3000</b>";  
        }
        else if(m1>= 200 && m1<=250){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>4500</b>";    
            frm.msg1.value="Your Rank under : <b>4500</b>";
        }
        else if(m1>= 150 && m1<=200){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>6000</b>";    
            frm.msg1.value="Your Rank under : <b>6000</b>";
        }
        }
        if(sx == 'sc'){
            if(m1>=700){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";   
            frm.msg1.value="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy"; 
        }
        else if(m1>= 650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy";   
            frm.msg1.value="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy"; 
        }
        else if(m1>= 600 && m1<=650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 570 && m1<=599){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy";
            frm.msg1.value="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy";    
        }
        else if(m1>= 550 && m1<=570){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 500 && m1<=550){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Trichy";  
            frm.msg1.value="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Trichy";  
        }
        else if(m1>= 470 && m1<=500){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Trichy";  
            frm.msg1.value="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Trichy";  
        }
        else if(m1>= 450 && m1<=470){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Surathkal";  
            frm.msg1.value="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Surathkal";  
        }
        else if(m1>= 420 && m1<=450){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Surathkal/NIT Allahabad"; 
            frm.msg1.value="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Surathkal/NIT-Allahabad";   
        }
        else if(m1>= 400 && m1<=420){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Allahabad/NIT-Warangal"; 
            frm.msg1.value="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Allahabad/NIT-Warangal";   
        }
        else if(m1>= 385 && m1<=400){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Bhopal/NIT-Warangal";  
            frm.msg1.value="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Bhopal/NIT-Warangal";  
        }
        else if(m1>= 370 && m1<=385){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>750</b><br>Colleges suggested : NIT-Bhopal/NIT-Kurukshetra";  
            frm.msg1.value="Your Rank under : <b>750</b><br>Colleges suggested : NIT-Bhopal/NIT-Kurukshetra";  
        }
        else if(m1>= 350 && m1<=370){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>1000</b><br>Colleges suggested : NIT-Jamshedpur/NIT-Raipur"; 
            frm.msg1.value="Your Rank under : <b>1000</b><br>Colleges suggested : NIT-Jamshedpur/NIT-Raipur";   
        }
        else if(m1>= 300 && m1<=350){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>2000</b><br>Colleges suggested : NIt-Raipur/NIT-Agartala"; 
            frm.msg1.value="Your Rank under : <b>2000</b><br>Colleges suggested : NIT-Raipur/NIT-Agartala";   
        }
        else if(m1>= 250 && m1<=300){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>3000</b><br>Colleges suggested : NIT-Agartala/HCU";   
            frm.msg1.value="Your Rank under : <b>3000</b><br>Colleges suggested : NIT-Agartala/HCU"; 
        }
        else if(m1>= 200 && m1<=250){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>4500</b><br>Colleges suggested : HCU/IPU";   
            frm.msg1.value="Your Rank under : <b>4500</b><br>Colleges suggested : HCU/IPU"; 
        }
        else if(m1>= 150 && m1<=200){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>6000</b><br>Colleges suggested : IPU";  
            frm.msg1.value="Your Rank under : <b>6000</b><br>Colleges suggested : IPU";  
        }
        }

        if(sx == 'st'){
            if(m1>=700){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";  
            frm.msg1.value="Your Rank under : <b>10</b><br>Colleges suggested : NIT-Trichy";  
        }
        else if(m1>= 650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy";  
            frm.msg1.value="Your Rank under : <b>20</b><br>Colleges suggested : NIT-Trichy";  
        }
        else if(m1>= 600 && m1<=650){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>35</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 570 && m1<=599){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy";  
            frm.msg1.value="Your Rank under : <b>50</b><br>Colleges suggested : NIT-Trichy";  
        }
        else if(m1>= 550 && m1<=570){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>70</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 500 && m1<=550){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Trichy";  
            frm.msg1.value="Your Rank under : <b>120</b><br>Colleges suggested : NIT-Trichy";  
        }
        else if(m1>= 470 && m1<=500){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Trichy";   
            frm.msg1.value="Your Rank under : <b>200</b><br>Colleges suggested : NIT-Trichy"; 
        }
        else if(m1>= 450 && m1<=470){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Trichy"; 
            frm.msg1.value="Your Rank under : <b>300</b><br>Colleges suggested : NIT-Trichy";   
        }
        else if(m1>= 420 && m1<=450){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Trichy/NIT-Surathkal";
            frm.msg1.value="Your Rank under : <b>400</b><br>Colleges suggested : NIT-Trichy/NIT-Surathkal";    
        }
        else if(m1>= 400 && m1<=420){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Surathkal/NIT-Allahabad"; 
            frm.msg1.value="Your Rank under : <b>500</b><br>Colleges suggested : NIT-Surathkal/NIT-Allahabad";   
        }
        else if(m1>= 385 && m1<=400){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Allahabad/NIT-Warangal"; 
            frm.msg1.value="Your Rank under : <b>650</b><br>Colleges suggested : NIT-Allahabad/NIT-Warangal";   
        }
        else if(m1>= 370 && m1<=385){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>750</b><br>Colleges suggested : NIT-Warangal/NIT-Kurukshetra"; 
            frm.msg1.value="Your Rank under : <b>750</b><br>Colleges suggested : NIT-Warangal/NIT-Kurukshetra";   
        }
        else if(m1>= 350 && m1<=370){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>1000</b><br>Colleges suggested : NIT-Kurukshetra/NIT-Jamshedpur";
            frm.msg1.value="Your Rank under : <b>1000</b><br>Colleges suggested : NIT-Kurukshetra/NIT-Jamshedpur";    
        }
        else if(m1>= 300 && m1<=350){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>2000</b><br>Colleges suggested : NIT-Jamshedpur/NIT-Raipur";  
            frm.msg1.value="Your Rank under : <b>2000</b><br>Colleges suggested : NIT-Jamshedpur/NIT-Raipur";  
        }
        else if(m1>= 250 && m1<=300){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>3000</b><br>Colleges suggested : NIT-Raipur/NIT-Agartala";
            frm.msg1.value="Your Rank under : <b>3000</b><br>Colleges suggested : NIT-Raipur/NIT-Agartala";    
        }
        else if(m1>= 200 && m1<=250){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>4500</b><br>Colleges suggested : NIT-Agartala/HCU";  
            frm.msg1.value="Your Rank under : <b>4500</b><br>Colleges suggested : NIT-Agartala/HCU";  
        }
        else if(m1>= 150 && m1<=200){
            document.getElementById("myid1").innerHTML="Your Rank under : <b>6000</b><br>Colleges suggested : HCU/HBTU/IPU";
            frm.msg1.value="Your Rank under : <b>6000</b><br>Colleges suggested : HCU/HBTU/IPU";    
        }
        }
    }
