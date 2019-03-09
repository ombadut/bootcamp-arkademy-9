function hitungKembalian(bayar, biaya) {
    var kembalian = bayar - biaya;
    var pecahan = [50000, 20000, 10000, 5000, 2000, 1000, 500];
    var x = 0

    for (x = 0; x < pecahan.length; x++) {    
        sisa = kembalian % pecahan[x];
        kembalianTerpakai = kembalian - sisa;
        banyaknyaPecahan = kembalianTerpakai / pecahan[x];
        console.log(pecahan[x], banyaknyaPecahan);
        kembalian = kembalian - kembalianTerpakai;
    }
}

hitungKembalian (50000, 15000);