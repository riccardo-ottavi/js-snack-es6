console.log("provaaaa");

//snack 1

//inizializzo l'arry di oggetti
const bikes = [
    {name: "Alltrail" ,weigth : 6800},
    {name: "Winora" ,weigth : 6200},
    {name: "Brera" ,weigth : 6100},
    {name: "Bottecchia" ,weigth : 6900},
]

//rimnando a schermo la bici più leggera
let lighterBike = bikes[0];
for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].weigth < bikes[0].weigth){
        lighterBike = bikes[i];
    }
}

console.log("La bici che pesa di meno è: " +lighterBike.name, (lighterBike.weigth/1000) + "kg");