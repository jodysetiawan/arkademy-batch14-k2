function bio (name,age) {

    return JSON.stringify({
        nama : name,
        age : age,
        address: "kebraon utama XI, Blok DK 07,karang pilang. Surabaya",
        hobbies :["bersepeda","musik","game","anime","badminton","volly"],
        is_married : false,
        list_school : [
            {name : "SDN Sedati Gede 2",year_in : 2006,year_out : 2012, major : null},
            {name : "SMPN 2 Waru",year_in : 2012,year_out : 2015, major : null},
            {name : "SMK Ketintang",year_in : 2015,year_out : 2018, major : "akuntansi"},
        ],
        skills : [
            {skill_name : "Javascript", level : "beginner"},
            {skill_name : "C++", level : "beginner"},
            {skill_name : "HTML", level : "advanced"},
            {skill_name : "CSS", level : "advanced"},
        ],
        interest_in_coding : true

    })
    
}

console.log (bio("M. Jody Setiawan",20))