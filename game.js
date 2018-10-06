var a = document.getElementById('next');
    a.addEventListener("click",next);

    function next()
    {
        wordIndex++;
        guessIt();
        document.getElementById('attemptsLeft').innerText = 10;
    
        
    }

    var guess = [];
    var userScore = 10;
    var wordIndex = 0;
    var word = ['RHINO', 'CRANKY', 'CHIMPANZE'];
    var store = [];
    var attemptsLeft = 10;

    var stopGame = function () {
        if (word.length == wordIndex) {
            alert('GAME OVER');
            location.reload();

        }
    }

    var guessIt = function () {

        if (wordIndex < word.length) {

            guess = [];
            store = [];
            attemptsLeft = 10;
            for (i = 0; i < word[wordIndex].length; i++) {
                guess.push('_');
            }
            document.getElementById('word').innerText = guess;
        }

        else {
            stopGame();
        }
    }

    guessIt();

    document.getElementById('attemptsLeft').innerText = attemptsLeft;

    // Filling the dashes function

    document.onkeyup = function (event) {
        var letter = event.key.toUpperCase();

        if (letter.length == 1 && letter >= "A" && letter <= "Z") {

            if (store.indexOf(letter) === -1 && guess.indexOf(letter) === -1) {
                store.push(letter); //Array to store the alphabet
                attemptsLeft--;
                document.getElementById('attemptsLeft').innerText = attemptsLeft;
                document.getElementById('selectedLetters').innerText = store;

                //Copied
                if (guess.indexOf('_') != -1 && attemptsLeft > 0) {

                    for (i = 0; i < word[wordIndex].length; i++) {


                        if (letter === word[wordIndex][i]) {

                            guess[word[wordIndex].indexOf(letter, i)] = letter;

                          

                            attemptsLeft++;
                            document.getElementById('attemptsLeft').innerText = attemptsLeft;
                            
                        }
                    }
                    document.getElementById('word').innerText = guess;
                    console.log(guess);
                    console.log(attemptsLeft);

                    //Adding Top IF in here

                    if (guess.indexOf('_') == -1) {
                        // userScore --;
                        document.getElementById('word').innerHTML = '<div class="alert alert-success" role="alert">' + word[wordIndex] + '</div>';
                        
                        document.getElementById('selectedLetters').innerText = ' ';
                       
                    }

                }

                else if (attemptsLeft < 1) {
                    alert('Attempts Over -  Guess the New Word');
                    wordIndex++;
                    document.getElementById('word').innerText = ' ';
                    document.getElementById('selectedLetters').innerText = ' ';
                    guessIt();
                }
            }

            else if (store.indexOf(letter) != -1) {
                
                document.getElementById('selectedLetters').innerText = store;

            }


            if (guess.indexOf('_') == -1) {
                
                document.getElementById('word').innerHTML = '<div class="alert alert-success" role="alert">' + word[wordIndex] + '</div>';
            
            }






        }
    };
