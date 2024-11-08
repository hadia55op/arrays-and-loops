// 1 :Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]);// Maradona

// 2: I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?
names.push("Drogba");
console.log(names);//["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo" ,"Drogba"];

// :3 Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?
names.unshift("Figo");
console.log(names);//["Figo" , "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo" ,"Drogba"];

// : 4 Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden.
names.pop([7]);
console.log(names);//[ "Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo" ];

// : 5 //Flytta namnet "Ronaldo" från slutet av array till början av array
const indexFrom = 6; // which is "Ronaldo"
const indexTo = 0;// will replace namee "Figo" att index 0
[names[indexFrom],names[indexTo]] = [names[indexTo] , names[indexFrom]];
console.log(names);/*[ "Ronaldo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Figo" ]; WE KAN USE SPLICE METHODE 
BUT THEN WE HAVE TO REOMVE "figo". names.splic(0,1, "Ronaldo");*/


// : 7 Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
if (players.includes("Messi")) {
    console.log("The number Messi exists in the array");
  } else {
    console.log("There is no name Messi in the array");//There is no name Messi in the array
  }

// : 9 Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?
const indexOfMaradona = players.indexOf("Maradona");
console.log(indexOfMaradona);// 5

/* : 10  Skriv ut indexet för "Messi" i arrayen "players" med hjälp av indexOf(). Vad är resultatet när det inte finns 
elementet och hur kan den information vara användbar*/
const indexOfMessi = players.indexOf("Messi");
console.log(indexOfMessi); // -1

/*: 11 Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ).
 Använd join() för att göra detta och logga resultatet.*/
 const playersAsString = players.join("," +" ");
console.log(playersAsString); // Zlatan, Beckham, Zidane, Ronaldo, Romario, Maradona

//:12 Använd join() för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?
/*const playersAsString = players.join("-");
console.log(playersAsString); // error */

//:13 Använd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.
players.splice(1,2);// we give the index position of elements we want to remove.

console.log(players);// Zlatan, Ronaldo, Romario, Maradona

//:14 Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och vad returnerar splice()?
players.splice(2,0,"Ronaldinho")//  2 here is the indexposition for adding in array and 0 for not to delete any aitem
console.log(players);// [Zlatan, Ronaldo, Ronaldinho, Romario, Maradona]

// : 15 Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig. 
const indexOf = players.indexOf("Ronaldo");
players.splice(players.indexOf("Ronaldo") , 1);

console.log(players);//[Zlatan, Ronaldinho, Romario, Maradona]
 
// :  16 Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna.
  console.log(players.slice(0,3));//['Zlatan', 'Ronaldinho', 'Romario']

  //: 17 Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "players". 
  console.log(players.slice(0,5));// [Zlatan, Ronaldinho, Romario, Maradona]

  // : 18 Använd metoden with() för att ersätta spelaren på indexposition 1 i "players" med "Mbappé".
  console.log(players.with(0,"Mbappe"));//['Mbppe', 'Zlatan', 'Ronaldinho', 'Romario', 'Maradona']
 console.log(players);//['Zlatan', 'Ronaldinho', 'Romario', 'Maradona']









 

  
  
  

