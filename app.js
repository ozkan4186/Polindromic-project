const in1 = document.querySelector(".in1");
const in2 = document.querySelector(".in2");
const but1 = document.querySelector(".but1");
const but2 = document.querySelector(".but2");
const tex1 = document.querySelector(".tex1");
const tex2 = document.querySelector(".tex2");

but1.addEventListener("click", () => {
  tex1.innerHTML= ""

  let a = +in1.value;
  let b = +in2.value;
  for (let i = a; i <= b; i++) {
  
  
                 
  
  
    let x = i.toString().split("").reverse().join("");

    if (x == i) {
      tex1.innerHTML +=  x + "\n"
    }
    // }
  }
});
but2.addEventListener("click", () => {
    tex2.innerHTML = "";
  let a = +in1.value;
  let b = +in2.value;
  for (let i = a; i <= b; i++) {
    if (perfectNumber(i)) {
      tex2.innerHTML +=  i + "\n"
    }
  }
});

function perfectNumber(num) {
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      count += i;
    }
  }
  return count == num;
}
