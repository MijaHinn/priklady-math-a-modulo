console.log('%c CVIČENÍ: Objekt Math ', 'background:black;color:yellow;');

/*
Cvičení 1: Obsah kruhu
Nechte uživatele pomocí `prompt()` zadat poloměr kruhu. Výsledek si uložte do proměnné `r`. Spočitejte a do konzoly vypište, jaký je obsah kruhu.
Vzorec pro obsah kruhu je πr^2 (pí * r na druhou).
*/

const r = Number(prompt('Zadej poloměr kruhu.'));
const obsahKruhu = Math.PI * (r ** 2);
console.log('Obsah kruhu je: ', obsahKruhu);


/*
Cvičení 2: Nejmenší a největší číslo
Nechte uživatele pomocí `prompt()` zadat postupně 3 čísla, tj. použijte `prompt()` třikrát za sebou a výsledek si pokaždé uložte do proměnné, např. `cislo1`, `cislo2` a `cislo3`.
Zjistětě nejmenší a největší číslo ze všech tří a vypište do konzole zprávu:
Nejmenší číslo je [x].
Největší číslo je [y].
*/

const cislo1 = prompt('Zadej první číslo');
const cislo2 = prompt('Zadej druhé číslo');
const cislo3 = prompt('Zadej třetí číslo');

const nejmensiCislo = Math.min(cislo1, cislo2, cislo3);
const nejvetsiCislo = Math.max(cislo1, cislo2, cislo3);

console.log('Nejmenší číslo je: ', nejmensiCislo);
console.log('Největší číslo je: ', nejvetsiCislo);


/*
Cvičení 3: DnD kostka
Jste zapálený fanoušek/fanynka hry Dungeons & Dragons. Při hraní se používají různé kostky označené jako D4, D6, D8, D10, D12 apod. podle toho, jako hodnoty na nich mohou padnout. Např. na D12 může padnout hodnota 1 - 12.
Vyberte si jednu z kostek (jinou než D6) a její velikost si uložte do proměnné `kostka`.
Napište program, který vygeneruje náhodný hod touto kostkou a do konzoly vypíše zprávu:
Na D12 padla hodnota [x].
*/

const kostka = Math.floor(Math.random() * 12) + 1;
console.log('Na D12 padla hodnota', kostka); 


/*
Cvičení 4: Náhodné desítky
Vytvoř program, který vygeneruje a do konzoly vypíše náhodnou desítku - tj. jednu z hodnot 10, 20, 30, 40, … , 90, 100.
*/

const nahodne = Math.floor((Math.random() * 10) + 1);
const desitky = nahodne * 10;
console.log(desitky); 



console.log('%c CVIČENÍ: Modulo ', 'background:black;color:yellow;');

/*
Cvičení 1: Sudé nebo liché číslo
Nechte uživatele pomocí `prompt()` zadat číslo a do konzoly vypište `true` nebo `false`, podle toho, zda číslo je nebo není sudé.
*/

const cislo = Number(prompt('Zadej číslo'));

if (cislo % 2 === 1) {
    console.log('Číslo je liché.');
} else console.log('Číslo je sudé.');


/*
Cvičení 2: Dělitelnost čísla
Nechte uživatele pomocí `prompt()` zadat číslo a do konzoly vypište `true` nebo `false`, podle toho, zda je číslo beze zbytku dělitelné číslem  `7`.
*/

const cislo7 = Number(prompt('Zadej číslo'));

const delitelneSedmi = ((cislo7 % 7) === 0);

console.log(delitelneSedmi);


/*
Cvičení 3: Ručičkové hodiny
Představte si obyčejné ručičkové hodiny, které mají 12 pozic a ukazují 0-11 hodin. (Pro zjednodušení dvanáctku bereme jako 0 hodin). Když je 9 hodin, ukazuje ručička na devítku. Když je 15 hodin, ukazuje ručička na trojku.

Nechte uživatele zadat, kolik je hodin (jako celé číslo), a do konzoly vypište, na jakou číslici ukazuje hodinová ručička.
*/
/*
const hodiny2 = Number(Math.trunc(prompt('Zadej, kolik je hodin')));

if (hodiny2 <= 24 && hodiny2 >= 1) {
    const hodinky2 = hodiny2 % 12;
    console.log(hodinky2);

} else console.log('Lze zvolit pouze celé číslo od 1 do 24');
*/

const hodiny = Number(Math.trunc(prompt('Zadej, kolik je hodin')));
const hodinky = 12;

if (hodiny <= 24 && hodiny >= 0) {
    if (hodiny > hodinky) {
        const hodinky = hodiny - 12;
        console.log(hodinky);
    } else if (hodiny === 0){
        console.log(12);
    } else console.log(hodiny);

} else console.log('Lze zvolit pouze celé číslo od 0 do 24');


/*
Cvičení 4: Výměna peněz
Předpokládejte, že máte k dispozici bankovky v hodnotě 1000, 500, 200 a 100 Kč.

Nechte uživatele pomocí `prompt()` zadat částku. Zjistěte, jak mu můžete částku vydat, abyste mu dali co nejméně bankovek (tj. co nejvíc tisícovek, pak pětiskovku, dvoustovky, stovky a zbytek drobných).

Do konzoly vypište např.:
-------------------------
Částku 3863 Kč rozměníme jako:
3 x 1000 Kč
1 x 500 Kč
1 x 200 Kč
1 x 100 Kč
a 63 Kč v drobných mincích
*/

const celkemPenez = Number(prompt('Zadej částku'));
console.log('Zadal/a jsi částku: ' + celkemPenez);

const tisicovka = Math.floor(celkemPenez / 1000);
console.log(tisicovka + ' x 1000 Kč');

const petistovka = Math.floor((celkemPenez % 1000) / 500);
console.log(petistovka + ' x 500 Kč');

const dvoustovka = Math.floor((celkemPenez % 500) / 200);
console.log(dvoustovka + ' x 200 Kč');

const stovka = Math.floor(((celkemPenez % 500) % 200) / 100);
console.log(stovka + ' x 100 Kč');

const drobne = Math.floor((celkemPenez % 100));
console.log(drobne + ' Kč v drobných mincích');