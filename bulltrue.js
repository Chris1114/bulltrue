'use strict';

function Question(fact, answer, yep, nope) {
    this.fact = fact;
    this.answer = answer;
    this.yep = yep;
    this.nope = nope;

}

var q1 = new Question('FACT: Research suggests that 20% of Neanderthal DNA survives in modern humans', 'true', 'YEP, NEANDERTHALS ARE STILL KICKING AROUND', 'WRONG...THAT\'S ACTUALLY TRUE');
var q2 = new Question('FACT: In accordance with his wishes, comedian George Carlin\'s ashes were encapsulated and fired from a cannon into the Pacific Ocean', 'bull', 'INDEED THAT IS BULL', 'NOPE...DIDN\'T HAPPEN' );
var q3 = new Question('FACT: The company Tesla initially instructed its employees and customers to use \"Teslae\" for the plural form of \"Tesla\", but gave up when it failed to catch on', 'bull', 'CORRECT!', "WRONG...ELON\'S NOT THAT WEIRD");
var q4 = new Question('FACT: Humans share 50% of their DNA with bananas', 'true','THAT IS CORRECT', 'NOPE, IT\'S ACTUALLY TRUE');   
var q5 = new Question('FACT: There actually was a Captain Morgan. He was known for ransacking Spanish ships in the Caribbean in the 1660\'s and 1670\'s.', 'true', 'CORRECT!!!', 'NOPE, THAT WAS TRUE');
var q6 = new Question('FACT: Jack Daniel\'s was named after the independently wealthy woman who financed its launch: Jacquelline Danielle Motlow', 'bull', 'GOOD BS SNIFFING', 'SORRY...TOTAL BULL'); 
var q7 = new Question('FACT: In 1963 a panda at the Shanghai Zoo died of spontaneous combustion', 'bull', 'WELL DONE...A COMPLETE LIE.', 'YOU BOUGHT THAT?');
var q8 = new Question('FACT: Ravens in captivity can learn to \"talk\" better than parrots', 'true', 'TRUE...WELL DONE!', 'NO, THAT\'S TRUE');
var q9 = new Question('FACT: A group of barracudas is called a battery', 'true', 'CORRECT! GOOD JOB', 'NOPE. THEY ARE ACTUALLY A BATTERY OF BARRACUDAS');                
var q10 = new Question('FACT: Due to feuding brothers, the can opener was patented 5 years before the tin can', 'bull', ' CORRECT...NICE WORK!', 'SERIOUSLY?');
var q11 = new Question('FACT: The world consumes about 6700 aluminum cans per second', 'true', 'YES. PER SECOND.', 'SORRY THAT\'S TRUE');
var q12 = new Question('FACT: John William\'s iconic Star Wars theme was originally written for a movie that was shelved and later became "Cowboys vs. Aliens"', 'bull', 'GOOD SHOT!', 'CAN\'T WIN \'EM ALL');
var q13 = new Question('FACT: Ants outweigh humans on the planet', 'true', 'YEP. THAT\'S A LOT OF ANTS', 'WRONG...THEY OUTNUMBER US AND OUTWEIGH US');
var q14 = new Question('FACT: President Warren Harding, who died in office in 1923, is the great-grandfather of figure skater Tonya Harding', 'bull','CORRECT!...NOWHERE NEAR TRUE', 'NOPE, NOT TRUE' );
var q15 = new Question('FACT: Twisted Sister frontman Dee Snider got his start singing backup vocals for artists such as Hall and Oats and Jackson Browne', 'bull', 'CORRECT!!!', 'HALL AND OATS? REALLY?');
var q16 = new Question('FACT: Carly Simon and Paul Simon are cousins and are the neice and nephew of Richard Simon of Simon and Schuster', 'bull', 'CORRECT YOU ARE', 'NOPE, IT\'S BULL');
var q17 = new Question('FACT: There is an island off of Samoa where the likelihood of conjoined twins is triple that of the rest of the world', 'bull', 'GREAT SHOT!!!', 'NO. NOT TRUE.');
var q18 = new Question('FACT: Casu Marzu cheese is purposely infested with maggots', 'true', 'TRUE...MAGGOTS', 'TRUE...UNFORTUNATELY');
var q19 = new Question('FACT: During the casting phase for the Lord of the Rings movies, Nicholas Cage turned down the role of Aragorn and Sean Connery turned down the role of Gandalf', 'true', 'CORRECT!', 'NO, THAT\'S TRUE');
var q20 = new Question('FACT: In the state of Wyoming hunters are required to fire on a Sasquatch if spotted', 'bull','CORRECT!', 'NO...WHO SHOOTS A SASQUATCH?');
var q21 = new Question('FACT: Clint Eastwood\'s name is an anagram for \"old west action\". It is his given name.', 'true','CORRECT! Crazy, right?', 'Nope that\'s all true!');

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21];

//randomize the questions array into a new array
var questionsQueue = questions.sort(function(a, b){return 0.5 - Math.random()});
var round;
var lastRound = 9;
var numCorrect = 0;
var numWrong = 0;
var clickedTrue = 0;
var clickedBull = 0;
var cyn = 0;//cynical-bullWrong counter
var gul = 0;//gullible-trueWrong counter
var playerAnswer;
var score = 1025;
var wager25;
var wager50;
var wager75;
var wager100;
var wager;
// vars for elements
var wagerBox = document.getElementById('wager-box');
var scoreBox = document.getElementById('score-box');
var answer = document.getElementById('answer');
var answerFact = document.getElementById('answer-box-fact');
var answerBox = document.querySelector('.answer-box');
var bullOrTrue = document.getElementById('bull-or-true');
var factBox = document.getElementById('fact-box');
var resultsBox = document.getElementById('results-box');
var scoreText = document.getElementById('score-text');
var factText = document.getElementById('fact-text');
var wagerScorebox = document.getElementById('wager-scorebox');
// vars for buttons
var bullButton = document.getElementById('btn-bull');
var trueButton = document.getElementById('btn-true');
var nextButton = document.getElementById('btn-next');
var btn25 = document.getElementById('btn-25');
var btn50 = document.getElementById('btn-50');
var btn75 = document.getElementById('btn-75');
var btn100 = document.getElementById('btn-100');
var selected = "none";

init();

function init() {
    calculateWagers();
    round = 0;
    wagerBox.style.display = "none";
    scoreBox.style.display = "block";
    scoreText.textContent = "SCORE: " + formatNumber(score);
    wagerScorebox.style.display = "none";
    factBox.style.display = "block";
    answerBox.classList.add('box-hide');
    resultsBox.style.display = "none";
    bullButton.addEventListener('click', callBull);
    trueButton.addEventListener('click', callTrue);
    nextButton.style.display = "none";
    factText.textContent = questionsQueue[round].fact;
    }
 
//what happens when they first click bull 
   function callBull() {
        playerAnswer = "bull";
        bullButton.classList.add('btn-border');
        wagerBox.style.display = "block";
        document.getElementById('wager-fact').textContent = questionsQueue[round].fact;
        factBox.style.display = "none";
        trueButton.classList.remove('btn-border');
        document.querySelector('.bull-btn-text').classList.add('text-selected');
        document.querySelector('.true-btn-text').classList.remove('text-selected');
        wagerSelect();
}
//what happens when they first click true
    function callTrue() {
        playerAnswer = "true";
        trueButton.classList.add('btn-border');
        wagerBox.style.display = "block";
        document.getElementById('wager-fact').textContent = questionsQueue[round].fact;
        factBox.style.display = "none";
        bullButton.classList.remove('btn-border');
        document.querySelector('.true-btn-text').classList.add('text-selected');
        document.querySelector('.bull-btn-text').classList.remove('text-selected'); 
        wagerSelect();       
   }

//defines wager amounts and displays on wager buttons
function calculateWagers(){
    wager25 = Math.ceil(score * .25);
    wager50 = Math.ceil(score * .5);
    wager75 = Math.ceil(score * .75);
    wager100 = score * 1;
    btn25.textContent = formatNumber(wager25) + (' (25%)');
    btn50.textContent = formatNumber(wager50) + (' (50%)');
    btn75.textContent = formatNumber(wager75) + (' (75%)');
    btn100.textContent = formatNumber(wager100) + (' (ALL OF IT!)');
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

//sets up wager button actions,submit button
function wagerSelect() {
    document.getElementById('wager-text').textContent = ('How sure are you? Make your wager...')
   //change answer based on playerAnswer
   if (playerAnswer === 'bull') {
        document.getElementById('btn-change').addEventListener('click', callTrue);
       } 
   if (playerAnswer === 'true') {
        document.getElementById('btn-change').addEventListener('click', callBull);
       }

    btn25.addEventListener('click', selectAnswer);
    btn50.addEventListener('click', selectAnswer);
    btn75.addEventListener('click', selectAnswer);
    btn100.addEventListener('click', selectAnswer);
    wagerBox.addEventListener('submit', handleSubmit);
}

function selectAnswer(event) {
    calculateWagers();
    selected = event.target.id;
    if (selected === 'btn-25') {
        wager = wager25;
    } else if (selected === 'btn-50') {
        wager = wager50;
    } else if (selected === 'btn-75') {
        wager = wager75;
    } else if (selected === 'btn-100') {
        wager = wager100;
    }
    wagerScorebox.style.display = "block"
    wagerScorebox.textContent = "WAGER: " + formatNumber(wager);
}

function handleSubmit(event) {
    event.preventDefault(); 
    bullButton.removeEventListener('click', callBull);
    trueButton.removeEventListener('click', callTrue);
    if (selected === 'none') {
        alert('You must make a wager')
        console.log('you can do it here');
        if (playerAnswer === 'true') {
            callTrue();
        } else if (playerAnswer === 'bull') {
            callBull;
        }
    }
    else if (playerAnswer === 'true') {
        if (questionsQueue[round].answer === 'true') { 
            trueCorrect();
        } else if (questionsQueue[round].answer === 'bull') {
            trueWrong();    
        };
    } else if (playerAnswer === 'bull') {
        if (questionsQueue[round].answer === 'bull') { 
            bullCorrect();
        } else if (questionsQueue[round].answer === 'true') {
            bullWrong();
        };
    }
}

// updates score, shows 'next' button, turns off other buttons
function answerReveal() { 
    factBox.style.display = "none"
    document.querySelector('.wager-box').classList.toggle('wager-box-fade');
    nextButton.style.display = "block";
    nextButton.classList.toggle('btn-next-show', true);
    nextButton.addEventListener('click', roundCheck)
    answerFact.textContent = questionsQueue[round].fact;
}

function zeroedOut() {
    round++;
    lastRound = round + 9;
    document.getElementById('score-change').style.display = "none";
    nextButton.textContent = "TRY AGAIN";
    factBox.style.display = "none"
    wagerBox.style.display = "none"
    // document.querySelector('.wager-box').classList.toggle('wager-box-fade');
    nextButton.style.display = "block";
    nextButton.classList.toggle('btn-next-show', true);
    nextButton.addEventListener('click', roundCheck);
    answerFact.textContent = "Zeroed Out...Game Over";
    document.getElementById('score-change').style.display = 'block';
    answer.style.display = "none";
    score = 1000;
}

function wrongAnswer () {
    numWrong ++;
    score = score - wager;
    scoreText.textContent = "SCORE: " + formatNumber(score);
    var wagerFormatted = formatNumber(wager);
    answer.textContent = questionsQueue[round].nope;
    document.getElementById('score-change').textContent = `${wagerFormatted} POINTS DEDUCTED`;
    document.getElementById('score-change').style.display = 'block';
    if (score === 0) {
        zeroedOut();
    }
}

function rightAnswer () {
    numCorrect ++;
    score = score + wager;
    scoreText.textContent = "SCORE: " + formatNumber(score);
    var wagerFormatted = formatNumber(wager);
    answer.textContent = questionsQueue[round].yep;
    document.getElementById('score-change').textContent = `${wagerFormatted} POINTS ADDED!!!`;

}

function dryButtonStates () {
    document.querySelector('.answer-box').classList.remove('box-hide');
    document.querySelector('.bull-btn-text').classList.add('text-hide');
    document.querySelector('.true-btn-text').classList.add('text-hide');
    answerReveal(); 
}
///////player clicked TRUE correctly
function trueCorrect() {
    clickedTrue ++;
    trueButton.classList.remove('btn-border');
    bullButton.classList.add('true-whole');
    bullOrTrue.textContent = `TRUE`;
    bullOrTrue.classList.remove('bull-text');
    bullOrTrue.classList.add('true-text');
    dryButtonStates(); 
    rightAnswer();  
}

///////player clicked BULL incorrectly
function bullWrong() {
    cyn ++;
    clickedBull ++;
    bullButton.classList.remove('btn-border');
    bullButton.classList.add('true-whole');
    bullOrTrue.textContent = `TRUE`;
    bullOrTrue.classList.remove('bull-text');
    bullOrTrue.classList.add('true-text');
    dryButtonStates();
    wrongAnswer();
}

///////player clicked BULL correctly
function bullCorrect() {
    clickedBull ++;
    bullButton.classList.remove('btn-border');
    trueButton.classList.add('bull-whole');
    bullOrTrue.textContent = `BULL`;
    bullOrTrue.classList.remove('ture-text');
    bullOrTrue.classList.add('bull-text');
    dryButtonStates();
    rightAnswer();
}

///////player clicked TRUE incorrectly
function trueWrong() {
    gul ++;
    clickedTrue ++;
    trueButton.classList.remove('btn-border');
    trueButton.classList.add('bull-whole');
    bullOrTrue.textContent = `BULL`;
    bullOrTrue.classList.remove('true-text');
    bullOrTrue.classList.add('bull-text');
    dryButtonStates();
    wrongAnswer();
}

function zeroRestart(){

}
  
//hides wager-text, checks round, allows game to progress until round === 9, gives choice of 10 more or see thei stats   
function roundCheck() {
    console.log('round ' + round + ' last round = ' + lastRound);
    if (round < lastRound) {
        resetter();
    } else if (round === lastRound) {
        // factBox.style.display = "block";
        // wagerBox.style.display = "none";
        // factBox.addEventListener('click', displayResults);
        // factText.textContent = ('GAME OVER. Click this box to see your lie detection stats.');
        displayResults();    
    }        
    }

//Advances round, updates wager options to reflect %'s of new score, hides buttons, creates slight time delay before nextRound is called
function resetter() {
    if (score === 0) {
        score = score + 1000;
    }
    nextButton.textContent = 'NEXT';
    scoreText.textContent = "SCORE: " + formatNumber(score);
    document.querySelector('.fact-box').classList.add('box-hide');
    nextButton.style.display = "none";
    answerBox.classList.add('box-hide');
    round ++;
    selected = "none";
    delayer();
}

function delayer() {
    setTimeout(newRound, 500);
}

//sets up next round (like init)
function newRound() {
    calculateWagers();
    document.querySelector('.fact-box').classList.remove('box-hide');
    factText.textContent = questionsQueue[round].fact;
    factBox.style.display = "block";
    answerBox.classList.add('box-hide');
    document.querySelector('.wager-box').classList.toggle('wager-box-fade');
    wagerBox.style.display = "none";
    wagerScorebox.style.display = "none";
    bullButton.classList.remove('true-whole');
    trueButton.classList.remove('bull-whole');
    document.querySelector('.bull-btn-text').classList.remove('text-selected');
    document.querySelector('.true-btn-text').classList.remove('text-selected');
    document.querySelector('.bull-btn-text').classList.remove('text-hide');
    document.querySelector('.true-btn-text').classList.remove('text-hide');
    bullButton.addEventListener('click', callBull);
    trueButton.addEventListener('click', callTrue);
}

function displayResults() {
    factBox.style.display = "block";
    factText.textContent = ('GAME COMPLETED...THANK YOU FOR PLAYING BULLTUE!');
    wagerBox.style.display = "none";
    scoreText.textContent= "SCORE: " + formatNumber(score);
    answerBox.style.display = "none";
    scoreBox.style.display = "none";
    // document.querySelector('.fact-box').style.display = "none";
    nextButton.style.display = "none";
    resultsBox.style.display = "block";
    document.getElementById('final-score').textContent = formatNumber(score);
    document.getElementById('gul').textContent = gul;
    document.getElementById('cyn').textContent = cyn;
    // document.getElementById('wrong').textContent = numWrong;
    document.getElementById('cyn').textContent = cyn;
    document.getElementById('true').textContent = clickedTrue;
    document.getElementById('bull').textContent = clickedBull;
    document.getElementById('num-correct').textContent = numCorrect;
    document.getElementById('num-wrong').textContent = numWrong;
    }
