
<script setup>

  class Player {
    constructor() {
      this.ruka = []
    }

    giveCards(_6_cards_array) {
      this.ruka = _6_cards_array;
    }
  }

  class Koloda {
    constructor() {
      this.karti = [
        [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], [1,11], [1,12], [1,13],
        [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10], [2,11], [2,12], [2,13],
        [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9], [3,10], [3,11], [3,12], [3,13],
        [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9], [4,10], [4,11], [4,12], [4,13]
      ];
    }
    shuffle() {
      this.karti.sort(function(){return 0.5 - Math.random()});
    }

    takeCard() {
      var cardTaken = this.karti[this.karti.length - 1];
      this.karti.pop();
      return cardTaken;
    }
  }

  function PrintArray(array) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  function PrintName(karta) {
    
    var mastj;
    var znachenije;
    
    // Mastj

    switch (karta[0]) {
      case 1:
        mastj = "bubi";
        break;
      case 2:
        mastj = "cervi";
        break;
      case 3:
        mastj = "krestja";
        break;
      case 4:
        mastj = "piki";
        break;
    }

    // Znachenije

    switch (karta[1]) {
      case 1:
        znachenije = "A";
        break;
      case 2:
        znachenije = "2";
        break;
      case 3:
        znachenije = "3";
        break;
      case 4:
        znachenije = "4";
        break;
      case 5:
        znachenije = "5";
        break;
      case 6:
        znachenije = "6";
        break;
      case 7:
        znachenije = "7";
        break;
      case 8:
        znachenije = "8";
        break;
      case 9:
        znachenije = "9";
        break;
      case 10:
        znachenije = "10";
        break;
      case 11:
        znachenije = "Valet";
        break;
      case 12:
        znachenije = "Dama";
        break;
      case 13:
        znachenije = "Korol";
        break;
    }

    return znachenije + " " + mastj;
  }
  
  var koloda = new Koloda();
  koloda.shuffle();
  for (var i = 0; i < 10; i++) {
    console.log("Card Taken:", PrintName(koloda.takeCard()));
  }

</script>

<template>
    <div class="container">
      <h1>Durak Game</h1>
    </div>
</template>