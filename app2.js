const poli = (a, b) => {
  let result = []
    for (let i = a; i <= b; i++) {
      
        if (i < 10) {
             console.log(i);
             result.push(i)
        } else {
            let x = i.toString().split("").reverse().join("")
            console.log(x);
            if(x==i){
                result.push(+x)


            }
        }
 
    }
   return result

};
    console.log(poli(0, 500));
