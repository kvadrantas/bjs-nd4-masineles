/*
Masinu lenktynes
masyvas is 8 masinu (nuvaziuoti kilometrai)
vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pavaziuoja random (1..5) km

lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km

pabaigoj atspausdinam kelinta masina ir kiek nuvaziavo

*)
komentatorius
kas 100 km reikia atspausdinti lyderio numeri ir nuvaziuota atstuma
*/


var masinytes = [0, 0, 0, 0, 0, 0, 0, 0];
var mLength = masinytes.length;
var maxkm = 0;
var k = 1;
// var maxAtstumas = 0;

while (masinytes[maxkm] < 1000) {
    var maxkm = 0;
    for (var i = 0; i < mLength; i++) {
        masinytes[i] += Math.trunc(Math.random() * 5 + 1);
        if (masinytes[i] > masinytes[maxkm]) {
            maxkm = i;
        }

    }
    if (masinytes[maxkm] / 100 >= k) {
        console.log(` -------------- ${100 * k} KM RUOŽE PIRMAUJA: --------------`);
        console.log(`Lyderiauja mašina nr. ${maxkm} ir ji nuvažiavo: ${masinytes[maxkm]} km.\n`);
        k++
    }
    // console.log(masinytes);
    // console.log(masinytes[maxkm]);    
}
console.log(`\n\nFINALINIAI REZULTATAI:\n`);
for (var i = 0; i < mLength; i++) {
    console.log(`Mainytė nr. ${i} nuvažiavo: ${masinytes[i]} km`);
}
