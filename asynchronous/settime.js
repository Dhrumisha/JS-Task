function settime(from,to){
    let current = from;
    
setTimeout(function go(){
    // console.log(current);
    
while(current<=to){
    console.log(current);
    current++;
}
},2000);
}
settime(2,5);