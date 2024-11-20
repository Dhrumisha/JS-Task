let number = 2, multipleNum =3;

const multiplicationTable = (num ,multipleNum) => {
    for (let i = 1; i <= multipleNum; i++) {
        let multiplication = (num*i);
        console.log(`${num} X ${i} = ${multiplication}`);
        
    }
}
multiplicationTable(number,multipleNum);