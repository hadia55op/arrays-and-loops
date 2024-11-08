//   #### loops tillsammans med arrayer  ####

// 19 Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.

const numbers = [ 8, 12, 20, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 20 : Använd en for-loop för att summera alla tal i arrayen numbers ovan. Logga ut summan efter att loopen har körts klart.
let sum = 0;
for ( let i = 0; i < numbers.length; i ++){
    sum += numbers[i];
}
console.log("sum = ", sum);// 48

// 21 : Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.

let largestnumber = numbers[0] ;
for (let i = 0; i < numbers.length; i +=1){   
    if (numbers[i] > largestnumber){
        largestnumber = numbers[i];
        console.log("largestnumber= ",numbers[i]); /* answer 
                                                   largestnumber= 8
                                                    largestnumber=  12
                                                    largestnumber=  20*/
    }
}

 
 // 22:Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.
let doubelNumbers= [];
for(const n of numbers)
 doubelNumbers.push(n*2);
console.log(doubelNumbers); // (5)[10, 16, 24, 40, 6]

// 23: Använd en for-loop för att räkna ut medelvärdet av talen i numbers. Logga ut medelvärdet.
let medelvärdet = 0;
for ( let i = 0; i < numbers.length; i ++){
    sum += numbers[i];
    medelvärdet = sum/numbers.length
    console.log(medelvärdet )// 19.2

}
// 24 : Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.


let smallestnumber =numbers[0] ;

for (let i = 0; i < numbers.length; i +=1){
    if (numbers[i] < smallestnumber){
        smallestnumber = numbers[i];
        console.log("smallestnumber= ",numbers[i]);// 3
    }

}

// 25 Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva talen från arrayen nedan. Använd en for-loop och en if-sats.

const mixedNumbers = [3, -5, 12, -1, 8, -6];
positivNumbers =[];
for (const n of mixedNumbers){
    if ( n > -1){
        positivNumbers.push(n);
    }
}
console.log(positivNumbers); // (3) [3, 12, 8]

//  26 :Utgå från arrayen mixedNumbers nedan. Skriv en for-loop utan att använda index, där du loggar varje positivt tal.
// const mixedNumbers = [3, -5, 12, -1, 8, -6];
 answer = 0;
for ( numm in mixedNumbers){
     answer = mixedNumbers[numm];
    console.log (answer);// 3 -5 12 -2 -1 8 -6 
}
// 27: Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10. 
 let numBers = [5, 8, 12, 20, 3]
 let i = 0;
 const n =  (numBers[i])
    while (n < 10){
        i++;
        if (n < 10 ){
            break;
        }
        

    }
    console.log(" The  loop breaks at number" + (numBers[i])); //  The loop breaks at number 8
    
 
   // 28 : Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.
 //const mixedNumbers = [3, -5, 12, -1, 8, -6];
 let total = 0
let negativNumbers= [];
let x= 0
 for (const n of mixedNumbers){
    if ( n <= -1){
        negativNumbers.push(n);
    }
    total =negativNumbers.length
}

 console.log(total);// 3

    
// 29 : Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).

const words = ["banana", "apple", "kiwi", "strawberry", "peach"];  
  for (const word of words ){
    const numberofchracters = word.length;
    console.log("Array " + words + " contain total " + numberofchracters +" characters.")
  
     }   // Array banana, apple, kiwi, strawberry, peach contain total 6 characters.
         // Array banana, apple, kiwi, strawberry, peach contain total 5 characters.
         // Array banana, apple, kiwi, strawberry, peach contain total 4 characters.
         // Array banana, apple, kiwi, strawberry, peach contain total 10 characters.
         // Array banana, apple, kiwi, strawberry, peach contain total 5 characters.
    

  
  // 30:Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.
let nyStr = "";
for (const word of words){
    
nyStr += word[0];
console.log(word[0])
console.log(` is starting word for ${word}`)
} // b 
  // is starting word for banana
  // a
  // is starting word for apple
  // k 
  // is starting word for kiwi
  // s 
  // is starting word for straberry
  // p
  // is starting word for peach

  // 31: Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.
 // let numbers = [  8, 12, 20, 3];
  indval = 0;
  summan = 0;
   while (summan < 25){
         
    const number = numbers[indval];
     summan += number; 
    indval++;
    //console.log(summan)
   // console.log (numbers[indval])
}   
console.log(summan)// 40
console.log ("The loop stops taking sum att number " + numbers[indval]) // The loop stops taking sum att number 3 

// 32 :Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.
//const mixedNumbers = [3, -5, 12, -1, 8, -6];
let suM = 0;
for (const numm in mixedNumbers){
    suM += mixedNumbers[numm];
    console.log (suM);// 11
    // 3
    // -2
    // 10
    // 9
    // 17
    // 11
}
// 33 :Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än fem bokstäver.
//const words = ["banana", "apple", "kiwi", "strawberry", "peach"]; 
let ivalue = 0;

for(const word of words){
    const word =(words[ivalue])
    ivalue++ ;
    if (word.length < 5){
        console.log(words[ivalue])// strawberry
    }
    }
    
   
    // 34 ;Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.

    const temperatures = [15, 22, 19, 30, 28, 18, 25];
    let largestemprature = 0;
    
    for (const temperature of temperatures){
        if (temperature > largestemprature){
            largestemprature = temperature;
        

        }
        

    }
    const indext = temperatures.indexOf(largestemprature);

    console.log ("largest temprature is " + largestemprature + " index are " + indext)// largest temprature is 30 index är 3

    // :35 Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.

    
    const mynumbers = [10, 8, 12, 20, 3];
    
    indexval = 0;
    
    while ( indexval < mynumbers.length){
        indexval++; 
          if(mynumbers[indexval] % 2 !== 0){
         break;
           } 
          
        }
        console.log(" The loop breaks after finding odd number " + mynumbers[indexval]) // 3
    
        

 
 



