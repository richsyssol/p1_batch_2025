// String Concate
let str1="Ishan";
let str2="Pawar";
let str3=str1+str2;
console.log(str3);

//slice method
let str="Ishan_Pawar";
let mystr = str.slice(0,5);
console.log(mystr);

//trim meathod
let first_name="Ishan    ";
console.log(first_name.length);
first_name.trim();
console.log(first_name.length);

const arr1=["val1","var2","var3","var4","var5"];

const[var1,var2,var3,...newarr]=arr1;

console.log(var1);
console.log(var2);
console.log(var3);
console.log(newarr);