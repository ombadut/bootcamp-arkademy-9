function getBio() {
    var biodata = {
        name: "Rendra",
        address: "Jl. Anggrek XI Blok AS-30 No.6, Kec. Jatisampurna, Kel. Jatisampurna, Bekasi.",
        hobbies: ["Desain grafis", "Futsal", "Bermain game", "Trevilng"],
        is_married: false,
        school: {
            highSchool: "SMAN 105 Jakarta",
            university: "Institut Pertanian Bogor"
        },
        skills: [
            {desain: "Adobe Photoshop"},
            {olahraga: "Futsal"}
        ]
    }
    return biodata;
}

console.log(getBio());