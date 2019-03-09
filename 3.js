function drawImage(totalRows) {
    for (row=1; row<=totalRows; row++) {
        for (colEqu=totalRows-row;colEqu>=1;colEqu--) {
            process.stdout.write("=");
        }

        for (colAt=1;colAt<=2*row-1;colAt++) {
            process.stdout.write("@");
        }

        for (colEqu=totalRows-row;colEqu>=1;colEqu--) {
            process.stdout.write("=");
        }
        
        process.stdout.write("\n");
    } 

    for (row=totalRows-1; row>=1; row--) {
        for (colEqu=1;colEqu<=totalRows-row;colEqu++) {
            process.stdout.write("=");
        }

        for (colAt=1;colAt<=2*row-1;colAt++) {
            process.stdout.write("@");
        }
        
        for (colEqu=1;colEqu<=totalRows-row;colEqu++) {
            process.stdout.write("=");
        }

        process.stdout.write("\n")
        
    }
}

drawImage(5);