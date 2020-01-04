function palindrome(input){
    
    var ambilHuruf = input.match(/([a-zA-Z]+)/g);
    var kapital = /([a-z]{4})([A-Z]{1})/g;
    var kecil = /(^[A-Z]{4}[a-z]{1})/g;
    var mix = /([A-Z]{1}[a-z]{1,}[A-Z]{1})/g;
    var murni = /((^[A-Z]{1,}|[a-z]{1,}))/g;
    var tampung = ambilHuruf.join('');
    var palindrom = [];
    var hasil = '';
 
 
    for (var i = tampung.length; i >= 0; i--){
        palindrom.push(tampung[i]);
    }
    hasil = palindrom.join('');
    console.log (input)
 
    if (kapital.exec(hasil)){
        return console.log ("Palindrom Kapital")
    }
    else if (kecil.exec(hasil)){
        return console.log ("Palindrom Kecil")
    }
    else if (mix.exec(hasil)){
        return console.log ("Palindrom Mix")
    }
    else if (murni.exec(hasil)){
        return console.log ("Palindrom Murni")
    }
    // else {
    //     return console.log ("bukan Palindrom")
    // }
}
palindrome('mALA2312M')
palindrome('Mala3123M')
palindrome('MALAM')