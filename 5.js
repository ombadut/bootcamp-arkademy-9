function calculateParkingCost(hours) {
    if (hours == 1) {
        return 2000;
    } else {
        parkingCost = 2000 + ((hours - 1) * 1000);
        if (parkingCost > 10000) {
            parkingCost = 10000;
        }
        return parkingCost;
    }
}

parkingCost = calculateParkingCost(2);
console.log(parkingCost);