//Trial 
function testResults(){
    var TestVar = document.getElementById("fname").Value;
        var
        Dy=document.getElementById("ddate").value;
        var
        gender=document.getElementByName("gender");
        document.getElementById("name").innerHTML=TestVar;
        document.getElementById("date").innerHTML=Dy;

        var myGender="male";
        for(var i=0,length=gender.length; i<length;i++){
            if(gender[i].checked){
                myGender=gender[i].value;
                document.getElementById("genderLabel").innerHTML=myGender;
                break;
            }
        }

        var mydate = newDate(Dy);
        var dayOfWeek=mydate.getDay();
        var malesArray=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var femaleArray= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        var myName="";
        if(myGender=="male"){
            myName = malesArray[dayOfWeek];
        }else{
            myName = femaleArray[dayOfWeek];
        }
        document.getElementById("Newname").innerHTML=myName
}