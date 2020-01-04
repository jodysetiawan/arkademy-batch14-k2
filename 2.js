//function untuk memvalidate email
function validateEmail (email){
    let regEmail = /(^([0-9][a-zA-Z0-9\-\_\.]*)(\@gmail)(\.)(com|co\.id)$)/gi;
    console.log ("email anda : "+ email);
    if (regEmail.test(email)){
        console.log ("selamat email anda valid")
    }
    else {
        console.log ("maaf email anda tidak valid")
        console.log ("mohon isi dengan ketentuan harus diawali angka dan harus ber-extension gmail")
    }
    
}
validateEmail ("4Jo.dy@gmail.com") //silahkan masukan email anda kesini
validateEmail ("Jo.dy@gmail.co.id") //silahkan masukan email anda kesini
console.log ("\n")

//function untuk memvalidate password

function validatePass (password){
    let regpass = /(([0-9]{2})([a-z]{5})([-@!$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]{2}))/gi;
    console.log ("password anda : "+ password);
    if (regpass.test(password)){
        console.log ("password anda valid")
    }
    else {
        console.log ("password anda tidak valid")
    }
}  

validatePass ("21words@#") //silahkan masukan email anda kesini
validatePass ("22worD*21") //silahkan masukan email anda kesini