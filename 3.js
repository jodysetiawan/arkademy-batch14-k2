function hex(input){
    if (input[0] !== "#")
        return false
        
    if (input[0] == "#")
        return (function (hex){
            if (hex.length != 3 && hex.length != 6)
                return false;
            return !isNaN(Number("0x" + hex ));
        })(input.substr(1));
    return false;

}
let output = hex ("#ata910")
console.log (output)