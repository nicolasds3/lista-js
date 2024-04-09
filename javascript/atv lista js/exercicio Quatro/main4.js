arr = [];

for(let i = 1; i <=4; i++){
    let n = prompt(`qual o ${i}° número?`);
    arr.push(Number(n));
}
arr.sort(function(a, b){return b-a});
console.log(arr);