// const poli = (a, b) => {
//   let result = []
    // for (let i = a; i <= b; i++) {
    //   
        // if (i < 10) {
            //  console.log(i);
            //  result.push(i)
        // } else {
            // let x = i.toString().split("").reverse().join("")
            // console.log(x);
            // if(x==i){
                // result.push(+x)
// 
// 
            // }
        // }
//  
    // }
//    return result
// 
// };
    // console.log(poli(0, 500));
const perfectNumber = (num) => {
    console.log(num);
    let count = 0;
    console.log(count);
    for (let i = 1; i <num; i++) {
        if (num % i == 0) {
            console.log(num)
            count += i
        }
    }
    if (count == num){
        return num
    }else{
        return 
    }

}
console.log(perfectNumber(28));