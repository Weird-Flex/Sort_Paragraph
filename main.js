 sArray = [];
function submit(){
    
    var dArray = [];
    for(var j = 1; j <=4;j++){
var stname = document.getElementById("name_of_the_student_"+ j).value;
console.log(stname);
sArray.push(stname);

    }
    var NameLength =sArray.length;
    for(var k = 0; k < NameLength; k++){
        dArray.push("<h4>Name-"+sArray[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = dArray;
    var RemoveCommas = dArray.join("");
    document.getElementById("display_name_without_commas").innerHTML = RemoveCommas;
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block";
    
    }
function sorting(){
    sArray.sort();
    var dArray = [];
    var lengthArray = sArray.length;
    for(var k = 0; k < lengthArray; k++){
        dArray.push("<h4>Name-"+sArray[k]+"</h4>");
    }
    var RemoveCommas = dArray.join("");
    document.getElementById("display_name_without_commas").innerHTML = RemoveCommas;
}