let str = "Hello i aM dhrumiShA";

const truncateStr = (str,len) => {
    if(str.length > len){
        console.log(`${str.slice(0,len)}...`);
    }
    else{
        console.log("length should grater than total length");
        
    }
}
truncateStr(str,10);
