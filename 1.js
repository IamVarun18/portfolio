
x1=1;
x2=0;
x3=0;
x4=0;
function mousee(x)
{
    if(x=="a")
    {
        document.getElementById('btm').style.transform="translateX(81%)";
        if(x1==0)
        {
        document.getElementById('kk').style.display="block";
        document.getElementById('kk1').style.display="none";
        document.getElementById('kk2').style.display="none";
            document.getElementById('kk3').style.display="none";

         x1=1;
         x2=0;
         x3=0;
         x4=0;
    }

    }
    else if(x=="s")
    {
        document.getElementById('btm').style.transform="translateX(231%)";

        
        if(x2==0)
        {
            document.getElementById('kk').style.display="none";
            document.getElementById('kk1').style.display="block";
            document.getElementById('kk2').style.display="none";
            document.getElementById('kk3').style.display="none";


        
         x1=0;
         x2=1;
         x3=0;
         x4=0;
    }
    }
    
   
    else if(x=="w")
    {
        document.getElementById('btm').style.transform="translateX(404%)";


        if(x3==0)
        {
            document.getElementById('kk').style.display="none";
            document.getElementById('kk2').style.display="block";
            document.getElementById('kk1').style.display="none";
            document.getElementById('kk3').style.display="none";


        
         x1=0;
         x2=0;
         x3=1;
         x4=0;
    }
    }
    else if(x=="d")
    {




        document.getElementById('btm').style.transform="translateX(582.5%)";


        if(x4==0)
        {
            document.getElementById('kk').style.display="none";
            document.getElementById('kk1').style.display="none";
            document.getElementById('kk2').style.display="none";
            document.getElementById('kk3').style.display="block";


        
         x1=0;
         x2=0;
         x3=0;
         x4=1;
    }
    }
}
function sh()
{
    document.getElementById('nbr').style.width="50vw";
}
function hd()
{
    document.getElementById('nbr').style.width="0vw";
}
function sbr()
{
    document.getElementById('srch').style.height="40vh";  
    document.getElementById('srch').style.border="1px solid white";  
    document.getElementById('srch1').style.opacity="0";
    document.getElementById('bar').value="";  
    document.getElementById('o1').style.transform="rotateZ(0deg)";
}
function hsbr()
{
    document.getElementById('srch').style.height="0vw";    
    document.getElementById('srch').style.border="0px solid white";  
    document.getElementById('srch1').style.opacity="1";
    document.getElementById('bar').value="";  
    document.getElementById('o1').style.transform="rotateZ(180deg)";
}

function rst()
{
    document.getElementById('bar').value="";  
    
}
function find()
{
    y=document.getElementById('bar').value;  
    x=y.toUpperCase();
    if(x.includes("AGE"))
    {
         if(x.includes("COLLAGE"))
    {
        document.getElementById('bar').value="ORIENTAL INSTITUTE, BHOPAL."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }
       else{ 
        document.getElementById('bar').value="I AM 21 YEARS OLD."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);}
    }
    else if(x.includes("CGPA"))
    {
        document.getElementById('bar').value="MY CURRENT CGPA IS 8.1."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }
    else if(x=="" || x==" ")
{
    document.getElementById('bar').value="Ask Something."; 
    setTimeout(function() {
        document.getElementById('bar').value=""; 
    },500);
}


    else if(  x.includes("ABOUT YOU") || x.includes("PROFILE") || x.includes("ABOUT YOURSELF"))
    {
        document.getElementById('bar').value="";  
        document.getElementById('btm').style.transform="translateX(85%)";
        if(x1==0)
        {
        document.getElementById('kk').style.display="block";
        document.getElementById('kk1').style.display="none";
        document.getElementById('kk2').style.display="none";
            document.getElementById('kk3').style.display="none";

         x1=1;
         x2=0;
         x3=0;
         x4=0;
    }

    document.getElementById('srch').style.height="0vw";    
    document.getElementById('srch').style.border="0px solid white";  
    document.getElementById('srch1').style.opacity="1";
    document.getElementById('bar').value="";  



    }








    else if(x.includes("12TH") ||x.includes("12"))
    {
        document.getElementById('bar').value="I GOT 81.2% IN 12TH."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }

    else if(x.includes("HI") ||x.includes("HELLO") || x.includes("NAME") )
    {
        document.getElementById('bar').value="Hello, I'm Vishesh Pawar.";
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000); 
    }
    else if(x.includes("10TH") ||x.includes("10TH"))
    {
        document.getElementById('bar').value="I GOT 72.4% IN 10TH."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }
    else if(x.includes("GENDER"))
    {
        document.getElementById('bar').value="MALE."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }

    else if(x.includes("CITY")||x.includes("STATE") || x.includes("LIVE"))
    {
        document.getElementById('bar').value="I LIVE IN BHOPAL, M.P."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }

    else if(x.includes("DATE OF BIRTH") ||x.includes("DOB") || x.includes("BIRTHDAY"))
    {
        document.getElementById('bar').value="I WAS BORN ON 18/06/2002."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }
    else if(x.includes("CLOSE"))
    {
        document.getElementById('bar').value="IT WAS NICE TALKING TO YOU."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
            document.getElementById('srch').style.height="0vw";    
            document.getElementById('srch').style.border="0px solid white";  
            document.getElementById('srch1').style.opacity="1";
            document.getElementById('bar').value="";  
            document.getElementById('o1').style.transform="rotateZ(180deg)";
        
        },2000);
       







    }




    else if(x.includes("SKILL")|| x.includes("SKILLS"))
    {

        
        document.getElementById('srch').style.height="0vw";    
        document.getElementById('srch').style.border="0px solid white";  
        document.getElementById('srch1').style.opacity="1";
        document.getElementById('bar').value="";  
    


        document.getElementById('btm').style.transform="translateX(230%)";

        
        if(x2==0)
        {
            document.getElementById('kk').style.display="none";
            document.getElementById('kk1').style.display="block";
            document.getElementById('kk2').style.display="none";
            document.getElementById('kk3').style.display="none";


        
         x1=0;
         x2=1;
         x3=0;
         x4=0;
    }




        
}
   
    else if(x.includes("UNIVERSITY"))
    {
        document.getElementById('bar').value="MY UNIVERSITY IS RGPV."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }
    else if( x.includes("MOBILE") || x.includes("PHONE") || x.includes("NUMBER") )
    {
        document.getElementById('bar').value="MY PHONE NUMBER IS 9X5X4X6X0."; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }
    else if(x.includes("HOBBIES") || x.includes("INTEREST") )
    {
        document.getElementById('bar').value="Volleyball, Video Games, Designing"; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);

    }
    else if( x.includes("MAIL ID") || x.includes("MAIL") || x.includes("EMAIL") || x.includes("GMAIL"))
    {
     
        document.getElementById('bar').value="MY EMAIL IS VISHESHPAWAR@ICLOUD.COM"; 
        setTimeout(function() {
            document.getElementById('bar').value=""; 
        },2000);
    }

    else if(x.includes("CERTIFICATION") || x.includes("CERTIFICATES") || x.includes("CERTIFICATE") )
    {
        document.getElementById('btm').style.transform="translateX(403%)";


        if(x3==0)
        {
            document.getElementById('kk').style.display="none";
            document.getElementById('kk2').style.display="block";
            document.getElementById('kk1').style.display="none";
            document.getElementById('kk3').style.display="none";


        
         x1=0;
         x2=0;
         x3=1;
         x4=0;



         document.getElementById('srch').style.height="0vw";    
         document.getElementById('srch').style.border="0px solid white";  
         document.getElementById('srch1').style.opacity="1";
         document.getElementById('bar').value="";  
     



    }


    

    }




    else if(x.includes("PROJECT") || x.includes("WORK"))
    {
        document.getElementById('srch').style.height="0vw";    
        document.getElementById('srch').style.border="0px solid white";  
        document.getElementById('srch1').style.opacity="1";
        document.getElementById('bar').value="";  
    

        

        document.getElementById('btm').style.transform="translateX(585%)";


        if(x4==0)
        {
            document.getElementById('kk').style.display="none";
            document.getElementById('kk1').style.display="none";
            document.getElementById('kk2').style.display="none";
            document.getElementById('kk3').style.display="block";


        
         x1=0;
         x2=0;
         x3=0;
         x4=1;


    }
    }

    else{
        document.getElementById('bar').value="I DIDN'T UNDERSTAND."; 
const elem=document.getElementById("bar");
setTimeout(function() {elem.value= ""}, 1000);
    }
}
