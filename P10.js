function palindrome(){
    var num = document.querySelector(".inputbox").value.toUpperCase();
    var alpha = num
    .split('')
    .reverse()
    .join('');
    if(num.length<=0){
        document.querySelector(".list").innerHTML = "type more values";
    }
    else if(num.length>=2 && num === alpha){
        document.querySelector(".list").innerHTML = `<b>"${num}"</b> is a palindrome`;
    }
    else{
        document.querySelector(".list").innerHTML = `<b>"${num}"</b> is not a palindrome`;
    }
}