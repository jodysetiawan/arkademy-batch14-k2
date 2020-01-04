function countChar (input,char){
    for (var count = -1,index = -2; index != -1;count++, index=input.indexOf(char,index+1));
    if (count == true){
    console.log ("input : " + input)
    console.log ("search : " + char)
    console.log ("count : " + count)
    } else {
        console.log (char + " not found")
    }
}

countChar ("arkad!emy!","@")