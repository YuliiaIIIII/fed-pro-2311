// - використовуючи цикл виведіть суму чисел між  А і В з умовою що A<B 

let a = prompt('Введіть перше число:');
let b = prompt('Введіть друге число:');
if(a<b){
    for(a; a<b; a++){
        console.log(a);
        sum1 = a + a;
        sum2 = sum1 + (b-1); 
    }
    console.log(sum1);
    console.log(sum2);
}















// 3

// for(let i=10; i>=0; i--){
//     console.log(i);
// }