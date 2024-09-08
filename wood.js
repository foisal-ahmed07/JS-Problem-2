function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const totalChairWood = perChair * chairQuantity;
    const totalTableWood = perTable * tableQuantity;
    const totalBedWood = perBed * bedQuantity;

    const totalWood = totalChairWood + totalTableWood + totalBedWood ;

    return totalWood;

}

const wood = woodQuantity(5, 2, 1);
console.log(wood);