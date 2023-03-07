window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    // question object     
    let question = {
      hints: [
        // Animal Hints
        ["Big grey animal with long nose", "Black and white horses", "Small modern T-Rex", "1890's car", "Giant great white"],
        // Food Hinst
        ["Indonesian instant noodle", "Italian most popular food", "Japanese Noodle", "Korean Noodle", "Healthy western breakfast dish"]
      ],

      categories: [
         // Animal Category
         ["elephant", "zebra", "chicken", "horse", "shark"],
         // Food Category
         ["indomie", "pizza", "ramen", "samyang", "salad"]
      ],

      get_hints: function(i) {
        return hints[i]
      },


      get_categories: function(i) {
        return categories[i]
      }

    }
    // player object
    let player = {
      userename: null,
      lives: 10,
      gender: ['Male', 'Female'],

      get_lives: function(){
        return lives
      },

      get_gender: function(){
        return this.gender
      },
      set set_username(ourName) {
        this.userename = ourName
      },
      set set_gender(gender) {
        this.gender = gender
      }


    }
    
  
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;
    var checkWin;              // Number of spaces in word '-'

    

  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
  
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Select Catagory
    var selectCat = function () {
      if (chosenCategory === question.categories[0]) {
        catagoryName.innerHTML = "The Chosen Category Is Animals";
      } else if (chosenCategory === question.categories[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Food";
      }
    }
  
    // Create geusses ul
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show lives
     comments = function () {
      showLives.innerHTML = "You have " + player.lives + " lives";
      if (player.lives < 1) {
        showLives.innerHTML = "Game Over";
        checkWin = false;
        
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
          checkWin = true;
        }
      }
    }
  
        // Animate man
    var animate = function () {
      var drawMe = player.lives ;
      drawArray[drawMe]();
    }
  
    
     // Hangman
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // OnClick Function
     check = function () {
      list.onclick = function () {
        if (player.lives < 1) {
          guess.remove()
         
      } else {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          player.lives -= 1;
          comments();
          animate();
          
        } else {
          comments();
        }

      }
    }
  }
        
    
      
    // Play Game
    play = function () {
      
      chosenCategory = question.categories[Math.floor(Math.random() * question.categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)]; // result
      word = word.replace(/\s/g, "-");
      console.log(word);
      var playerNameInput = document.getElementById('playerName').value
      player.set_username = playerNameInput
      buttons();
      player.lives = 2;
      userename = player.userename
      console.log(userename)
      lives = player.lives;
      geusses = [  ];
      counter = 0;
      space = 0;
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
      
    
        for (var i = 0; i < word.length; i++) {
          correct.setAttribute('id', 'my-word');
          guess = document.createElement('li');
          guess.setAttribute('class', 'guess');
          
         
          if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
          } else {
            guess.innerHTML = "_";
          }
    
          geusses.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);
        }
      check()
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
    // Hint
      hint.onclick = function() {
      var catagoryIndex = question.categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " + question.hints[catagoryIndex][hintIndex];
    };
  
     // Reset
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }

