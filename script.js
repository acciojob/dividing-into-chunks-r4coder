const arr = [1, 2, 3, 4, 1, 0, 2, 2];




const divide = (arr, n) => {
  // Write your code here

 let ans = [];
let temp = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= n) {
        temp.push(arr[i]);
        sum += arr[i];
    } else {
        ans.push(temp);
        temp = [arr[i]];
        sum = arr[i];
    }
}

ans.push(temp);
 return ans;
}; 

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
