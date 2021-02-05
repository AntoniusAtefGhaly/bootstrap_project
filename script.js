var jsTips=new Array("JavaScript Objects","JavaScript Built-in Objects",
"String Object","Number Object","Array Object","Date Object","Math Object",
"Boolean Object","Regular expression Object","Error Object");
alert("topic of the day  is m "+showJsTip());

function choseDateColor(){
    var c=prompt("enter date color");
    var dates=new Array();
    dates["r"]="red";
    dates["g"]="green";
    dates["b"]="blue";  
    var date=Date();
    document.write("<h1 style=\"color: "+dates[c]+";\" >"+date.toLocaleLowerCase()+"</h1>") 
}
function showJsTip(){
return jsTips[Math.round(Math.random()*10)];
}
function dateDisplay(){
    var date=Date();
document.write(date.toLocaleLowerCase());
}