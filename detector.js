function palindrome(str) {
  let arr1 = str.split(/[^A-Za-z0-9]/);
  let arr2 = arr1.slice();
  let str3 = arr2.join("");
  let arr3 = str3.split("");
  arr3.reverse();
  let str4 = arr3.join("");
  let str5 = str4.toLowerCase();
  let str1 = arr1.join("");
  let str2 = str1.toLowerCase();
  if(str2 == str5){
    return true;
  } else{
    return false;
  }
}
