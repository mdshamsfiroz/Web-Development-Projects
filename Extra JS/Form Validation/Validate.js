function validates()
{
    var result=true;
    var username=document.getElementById("username");
    var mobile=document.getElementById("mobile");
    var password=document.getElementById("password");
    // alert("Hello"); Using this we can able to check error
    if(username.value.length==0)
    {
        result=false;
    }
    if(mobile.value.length!=10)
    {
        result=false;
    }
    if(!checkPasswordString(password.value))
    {
        result=false;
    }
    return result;
}
function checkPasswordString(pwd)
{
    var isAlpha=false;
    var isDigit=false;
    var isSpecialCharacter=false;
    for(i=0;i<pwd.length;i++)
    {
       
       if( pwd.charAt(i)>='a'&& pwd.charAt(i)<='z'|| pwd.charAt(i)>='A'&&pwd.charAt(i)>='Z')
        isAlpha=true;
       else if(pwd.charAt(i)>=0 && pwd.charAt(i)<=9)
        isDigit=true;
       else
        isSpecialCharacter=true;

    }
    // alert(isAlpha + " "+ isDigit+" "+isSpecialCharacter);
    if(isAlpha&&isDigit&&isSpecialCharacter)
       return true;
    else
       return false;
}