function Question(fact, answer, yep, nope) {
    this.fact = fact;
    this.answer = answer;
    this.yep = yep;
    this.nope = nope;

}

var q1 = new Question('FACT: Research suggests that 20% of Neanderthal DNA survives in modern humans', 'true', 'YEP, NEANDERTHALS ARE STILL KICKING AROUND', 'WRONG...THAT\S ACTUALLY TRUE');

var q2 = new Question('FACT: In accordance with his wishes, comedian George Carlin\'s ashes were encapsulated and fired from a cannon into the Pacific Ocean', 'false', 'INDEED THAT IS BULL', 'NOPE...DIDN\'T HAPPEN' );
                
var q3 = new Question('FACT: The company Tesla instructs its employees and customers to use \"Teslae\" for the plural form of \"Tesla\"', 'false', 'CORRECT!', "WRONG...ELON\'S NOT THAT WEIRD");

var q4 = new Question('FACT: Humans share 50% of their DNA with bananas', 'true','THAT IS CORRECT', 'NOPE, IT\'S ACTUALLY TRUE');   

var q5 = new Question('FACT: There actually was a Captain Morgan. He was known for ransacking Spanish ships in the Caribbean in the 1660\'s and 1670\'s.', 'true', 'CORRECT!!!', 'NOPE, THAT WAS TRUE');

var q6 = new Question('FACT: Jack Daniel\'s was named after the independently wealthy woman who financed its launch: Jacquelline Danielle Motlow', 'false', 'GOOD BS SNIFFING', 'SORRY...TOTAL BULL'); 

var q7 = new Question('FACT: In 1989 a panda at the Shanghai Zoo died of spontaneous combustion', 'false', 'WELL DONE. A COMPLETE LIE', 'YOU BOUGHT THAT?');

var q8 = new Question('FACT: Ravens in captivity can learn to \"talk\" better than parrots', 'true', 'TRUE...WELL DONE!', 'NO, THAT\'S TRUE');
 
var q9 = new Question('FACT: A group of barracudas is called a battery', 'true', 'GOOD JOB', 'NOPE. THEY ARE A BATTERY OF BARRACUDAS');                

var q10 = new Question('FACT: Due to feuding brothers, the can opener was patented 5 years before the tin can', 'false', ' CORRECT...NICE WORK!', 'SERIOUSLY?');

var q11 = new Question('FACT: The world consumes about 6700 aluminum cans per second', 'true', 'YES. PER SECOND.', 'SORRY THAT\'S TRUE');
                
var q12 = new Question('FACT: John William\'s iconic Star Wars theme was originally written for a movie that was shelved and later became "Cowboys vs. Aliens"', 'false', 'GOOD SHOT!', 'CAN\'T WIN \'EM ALL');

var q13 = new Question('FACT: Ants outweigh humans on the planet', 'true', 'YEP. THAT\'S A LOT OF ANTS', 'WRONG...THEY OUTNUMBER US AND OUTWEIGH US');

var q14 = new Question('FACT: President Warren Harding was born with two pinky toes on each foot, which were removed shortly after his birth', 'false','CORRECT...NOWHERE NEAR TRUE', 'NOWHERE NEAR TRUE' );

var q15 = new Question('FACT: Twisted Sister frontman Dee Snider got his start singing backup vocals for artists such as Hall and Oats and Jackson Browne', 'false', 'CORRECT!!!', 'HALL AND OATS? REALLY?');

var q16 = new Question('FACT: Carly Simon and Paul Simon are cousins and are the neice and nephew of Richard Simon of Simon and Schuster', 'false', 'CORRECT YOU ARE', 'NOPE, IT\'S BULL');

var q17 = new Question('FACT: There is an island off of Samoa where the likelihood of cojoined twins is triple that of the rest of the world', 'false', 'GREAT SHOT', 'WE\'VE BEEN TRYING TO REACH YOU ABOUT YOUR AUOTOMOBILE\'S EXTENDED WARRANTY');

var q18 = new Question('FACT: Casu Marzu cheese is purposely infested with maggots', 'true', 'TRUE...ALL TRUE', 'TRUE...UNFORTUNATELY');

var q19 = new Question('FACT: During the casting phase for the Lord of the Rings movies, Nicholas Cage turned down the role of Aragorn and Sean Connery turned down the role of Gandalf', 'true', 'CORRECT!', 'NO, THAT\'S TRUE');

var q20 = new Question('FACT: In parts of Wyoming hunters are required to fire on a Sasquatch if spotted', 'false','CORRECT!', 'NO...WHO SHOOTS A SASQUATCH?');



var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];

//randomize the questions array into a new array
var questionsQueue = questions.sort(function(a, b){return 0.5 - Math.random()});



var round;
var numCorrect = 0;
var numWrong = 0;
var clickedTrue = 0;
var clickedBull = 0;
var cyn = 0;
var gull = 0;
var curStreak = 1;//stores current streak
var curSlump = 1;//stores current slump
var lastResult = -1;//stores whether last answer was correct
var streak = 1;//stores longest win streak
var slump = 1;//stores longest slump
var percentage;


init();



function trueCorrect() {
         if (lastResult === 1) {
        curStreak ++;
    }
        if (curStreak > streak) {
            streak = curStreak;
        }
    curSlump = 1;
    lastResult = 1;
    numCorrect ++;
    clickedTrue ++;
    
    document.getElementById('btn-true').classList.remove('btn-border');
    document.getElementById('btn-bull').classList.add('true-whole');
    document.querySelector('.answer-box').classList.remove('box-hide');
    document.querySelector('.answer-box').textContent = questionsQueue[round].yep;
    document.getElementById('fact-box-1').classList.add('dim-out');
    document.getElementById('fact-box-2').classList.add('dim-out');
    document.querySelector('.bull-text').classList.add('text-hide');
    document.querySelector('.true-text').classList.add('text-hide');
    btnNextReveal();
}

//when the answer is true and they click bull(incorrect)
function bullWrong() {
    if (lastResult === 0) {
        curSlump ++;
    }
        if (curSlump > slump) {
            slump = curSlump;
        }
    curStreak = 1;
    lastResult = 0;
    cyn ++;
    clickedBull ++;
    numWrong ++;
    document.getElementById('btn-bull').classList.remove('btn-border');
    document.getElementById('btn-bull').classList.add('true-whole');
    document.querySelector('.answer-box').classList.remove('box-hide');
    document.querySelector('.answer-box').textContent = questionsQueue[round].nope;
    document.getElementById('fact-box-1').classList.add('dim-out');
    document.getElementById('fact-box-2').classList.add('dim-out');
    document.querySelector('.bull-text').classList.add('text-hide');
    document.querySelector('.true-text').classList.add('text-hide');
    btnNextReveal();
}

//when the answer is false and they click bull(correct)
function bullCorrect() {
    if (lastResult === 1) {
        curStreak ++;
    }
        if (curStreak > streak) {
            streak = curStreak;
        }
    curSlump = 1;
    lastResult = 1;
    clickedBull ++;
    numCorrect ++;
    document.getElementById('btn-bull').classList.remove('btn-border');
    document.getElementById('btn-true').classList.add('bull-whole');
    document.querySelector('.answer-box').classList.remove('box-hide');
    document.querySelector('.answer-box').textContent = questionsQueue[round].yep;
    document.getElementById('fact-box-1').classList.add('dim-out');
    document.getElementById('fact-box-2').classList.add('dim-out');
    document.querySelector('.true-text').classList.add('text-hide');
    document.querySelector('.bull-text').classList.add('text-hide');
    btnNextReveal();
}

//when the answer is false and they click true(incorrect)
function trueWrong() {
    if (lastResult === 0) {
        curSlump ++;
    }
        if (curSlump > slump) {
            slump = curSlump;
        }
    curStreak = 1;
    lastResult = 0;
    gull ++;
    clickedTrue ++;
    numWrong ++;
    document.getElementById('btn-true').classList.remove('btn-border');
    document.getElementById('btn-true').classList.add('bull-whole');
    document.querySelector('.answer-box').classList.remove('box-hide');
    document.querySelector('.answer-box').textContent = questionsQueue[round].nope;
    document.getElementById('fact-box-1').classList.add('dim-out');
    document.getElementById('fact-box-2').classList.add('dim-out');
    document.querySelector('.true-text').classList.add('text-hide');
    document.querySelector('.bull-text').classList.add('text-hide');
    btnNextReveal();
}




//Game start*******************************

function init() {
    round = 0;
    console.log('round' + round + ' answer is: '+ questionsQueue[round].answer);
    document.getElementById('fact-box-1').classList.add('box-hide');
    document.getElementById('fact-box-2').style.display = 'block';
    document.getElementById('answer-box').classList.add('box-hide');
    document.getElementById('results-box').style.display = 'none';
    document.getElementById('btn-bull').addEventListener('click', callBull);
    document.getElementById('btn-true').addEventListener('click', callTrue);
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('fact-box-2').textContent = questionsQueue[round].fact;
    }


    var answer;


//what happens when they click bull- big buttons setup 
   function callBull() {
    console.log('player called bull');

       answer = 'bull';
        document.getElementById('btn-bull').classList.add('btn-border');
        document.getElementById('btn-true').classList.remove('btn-border');
        document.querySelector('.bull-text').classList.add('text-selected');
        document.querySelector('.true-text').classList.remove('text-selected');
        document.getElementById('btn-bull').removeEventListener('click', callBull);
        document.getElementById('btn-true').removeEventListener('click', trueCorrect);
        document.getElementById('btn-true').removeEventListener('click', trueWrong);
        document.getElementById('btn-true').addEventListener('click', callTrue);
        if (questionsQueue[round].answer === 'false') { 
            console.log('real answer is still false');
        document.getElementById('btn-bull').addEventListener('click', bullCorrect);
    } else if (questionsQueue[round].answer === 'true') {
        console.log('real answer is still true');
        document.getElementById('btn-bull').addEventListener('click', bullWrong);
    }
    }
//what happens when they click true
    function callTrue() {
        console.log('player called true');

        answer = 'true';
        document.getElementById('btn-true').classList.add('btn-border');
        document.getElementById('btn-bull').classList.remove('btn-border');
        document.querySelector('.true-text').classList.add('text-selected');
        document.querySelector('.bull-text').classList.remove('text-selected');        
        document.getElementById('btn-true').removeEventListener('click', callTrue);
        document.getElementById('btn-bull').removeEventListener('click', bullCorrect);
        document.getElementById('btn-bull').removeEventListener('click', bullWrong);
        document.getElementById('btn-bull').addEventListener('click', callBull);
        if (questionsQueue[round].answer === 'true') { 
            console.log('real answer is still true');
            document.getElementById('btn-true').addEventListener('click', trueCorrect);
        } else if (questionsQueue[round].answer === 'false') {
            console.log('real answer is still false');
            document.getElementById('btn-true').addEventListener('click', trueWrong);    
    };
}
          
    

//updates score, shows 'next fact' button, turns off other buttons
function btnNextReveal() {
    percentage = (Math.ceil((numCorrect / (round + 1)) * 100)); 
    document.getElementById('score').textContent = percentage + ' %';  
    if (percentage < 51 ) {
        document.getElementById('score-box').classList.add('red-text');
    } else {
        document.getElementById('score-box').classList.remove('red-text');

    }
    document.getElementById('btn-true').removeEventListener('click', trueCorrect);
    document.getElementById('btn-true').removeEventListener('click', trueWrong);
    document.getElementById('btn-bull').removeEventListener('click', bullCorrect);
    document.getElementById('btn-bull').removeEventListener('click', bullWrong);
    document.getElementById('btn-next').style.display = 'block';
    document.getElementById('btn-next').classList.toggle('btn-next-show', true);
    document.getElementById('btn-next').addEventListener('click', roundCheck)
}


    //checks round, allows game to progress until round 10, gives choice of 10 more or results   
function roundCheck() {
    console.log(round); 
    if (round < 9) {
        resetter();
            
    } else if (round === 9) {
        document.getElementById('fact-box-1').classList.remove('dim-out');
        document.getElementById('answer-box').classList.add('box-hide');
        document.getElementById('fact-box-1').textContent = ('Think you can you do better? Click "NEXT FACT" to see if you can raise your average with 10 more \"facts\". Or click this box to get a breakdown of your answers.');
        document.querySelector('.fact-box-1').addEventListener('click', displayResults);
        document.querySelector('.btn-next').addEventListener('click', resetter);
        
    } else if (round > 0 && round < 19) {
        document.querySelector('.btn-next').addEventListener('click', resetter);
    
    } else if (round === 19) {
        displayResults(); 
        }
    }

//Advances rounds, hides buttons, creates slight time delay before nextRound is called
function resetter() {
    document.getElementById('fact-box-1').classList.add('box-hide');
    document.getElementById('fact-box-2').classList.add('box-hide');
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('answer-box').classList.add('box-hide');
    round ++;

   delayer();
}

function delayer() {
    setTimeout(newRound, 500);
}


//sets up next round based on odd/even
function newRound() {
    if (round % 2 !== 0) {//ODD ROUND
        document.getElementById('fact-box-1').textContent = questionsQueue[round].fact; 
        document.getElementById('fact-box-1').classList.add('box-hide');
        document.getElementById('fact-box-1').style.display = 'block';
        document.getElementById('fact-box-1').classList.remove('box-hide');
    } else {//EVEN ROUND
        document.getElementById('fact-box-2').textContent = questionsQueue[round].fact; 
        document.getElementById('fact-box-2').classList.add('box-hide');
        document.getElementById('fact-box-2').style.display = 'block';
        document.getElementById('fact-box-2').classList.remove('box-hide');   
         };
document.getElementById('answer-box').classList.add('box-hide');
document.getElementById('results-box').style.display = 'none';
document.getElementById('btn-bull').addEventListener('click', callBull);
document.getElementById('btn-true').addEventListener('click', callTrue); 
document.getElementById ('btn-bull').classList.remove('true-whole');
document.getElementById ('btn-true').classList.remove('bull-whole');
document.querySelector('.bull-text').classList.remove('text-selected');
document.querySelector('.true-text').classList.remove('text-selected');
document.querySelector('.bull-text').classList.remove('text-hide');
document.querySelector('.true-text').classList.remove('text-hide');
document.getElementById('fact-box-1').classList.remove('dim-out');
document.getElementById('fact-box-2').classList.remove('dim-out');


        }


   function displayResults() {
        document.getElementById('answer-box').style.display = 'none';
        document.getElementById('fact-box-1').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('results-box').style.display = 'block';
        document.getElementById('right').textContent = numCorrect;
        document.getElementById('wrong').textContent = numWrong;
        document.getElementById('gull').textContent = gull;
        document.getElementById('cyn').textContent = cyn;
        document.getElementById('bull').textContent = clickedBull;
        document.getElementById('true').textContent = clickedTrue;
   }
