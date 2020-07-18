"use strict";
var finalvalue = 0;
var Card1 = []; //1
var Card2 = []; //2
var Card3 = []; //4
var Card4 = []; //8
var Card5 = []; //16
var Card6 = []; //32
var Cards = [Card1, Card2, Card3, Card4, Card5, Card6];
var m;
var currentCard;
var currentCardValue = 0; 
var CardAdder = 1;


m = 6; // Number of cards used
var max = Math.pow(2, m) -1; // Max possible numbers to guess = 2^m - 1

function newGame()
{
  location.reload();
}

function startGame()
{
    // Generating the cards for values 1 through max. In this case 63.
    // If the number can be subtracted by a value, then it goes into the card starting with that value.
    // For example: 7 = 4+2+1 would go into cards starting with 4, 2, and 1.

    var value;
    var i;
    for(i = 1; i<= max; i++)
    {
      value = i;
      var y;
      for(y = (m-1); y>= 0; y--) // Starting with the highest card value (32) and going down to 1.
      {
        var subtractor = Math.pow(2,y);
        while(value > 0) // Continue subtracting until the value = 0.
        {
          if(value - subtractor >= 0)
            {
              switch(subtractor)
              {
              case 32: Card6.push(i);
              break;
              case 16: Card5.push(i);
              break;
              case 8: Card4.push(i);
              break;
              case 4: Card3.push(i);
              break;
              case 2: Card2.push(i);
              break;
              case 1: Card1.push(i);
              break;
              }
              value = value - subtractor;  // Subtract the subtractor from the original value and loop until until 0 is reached. 
            }
            else
            {
              break;
            }
        }
      }
    }
    
    console.table(Card1);
    console.log(Card2);
    console.log(Card3);
    console.log(Card4);
    console.log(Card5);
    console.log(Card6);

    currentCard = Cards[currentCardValue];
    printCard();
}

function yesHere()
{
  if(currentCardValue >= 5)
  {
    finalvalue = finalvalue + CardAdder;
    document.getElementById("finalresult").innerHTML =("You're thinking of " + finalvalue);
    CardAdder = 0;
  }
  else
  {
  finalvalue = finalvalue + CardAdder;
 // alert(finalvalue);

  currentCardValue++;
  CardAdder = Math.pow(2, currentCardValue);
  if(currentCardValue < 6)
  {
  currentCard = currentCard = Cards[currentCardValue];
  printCard();
  }
  }
}

function notHere()
{
  if(currentCardValue >= 5)
  {
    document.getElementById("finalresult").innerHTML =("You're thinking of " + finalvalue);
    CardAdder = 0;
  }
  else
  {
  finalvalue = finalvalue + 0;
 // alert(finalvalue);
  currentCardValue++;
  CardAdder = Math.pow(2, currentCardValue);
  if(currentCardValue < 6)
  {
  currentCard = currentCard = Cards[currentCardValue];
  printCard();
  }
  }
  
}

function printCard()
{
  var x = ''
  document.getElementById("Result").innerHTML = x;
  var e = "";   
  for (var y=0; y<currentCard.length; y++)
  {
    e += currentCard[y] + " " + currentCard[y+1] + " " + currentCard[y+2] + " " + currentCard[y+3] + "<br/>";
    y = y+3;
  }
  document.getElementById("Result").innerHTML = e;
}