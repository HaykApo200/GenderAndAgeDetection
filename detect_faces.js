const output = document.getElementById('output');

function detect_faces(){
    var photo = document.getElementsByName("photo")[0].files[0];
    
    detect(photo, function(result){
        let res = (JSON.stringify(result, null, 5));
        console.log(res);
        let smile;
        if(result[0].expression[0].value){
            smile = result[0].expression[0].value;
        }
        output.innerHTML = `Gender - ${result[0].gender.value}  |  ${Math.floor((result[0].gender.probability) * 100)}%</br> Age - ${result[0].age} </br>Face expression - ${(smile) ? smile : "-"}`;
        console.log(result[0].gender.value);
        
        //console.log(resultObj);
              
    });
    
}



