function Question(fact, answer, yep, nope) {
    this.fact = fact;
    this.answer = answer;

}

var q1 = new Question('Research suggests that 20% of Neanderthal DNA survives in modern humans', 'true');

var q2 = new Question('In accordance with his wishes, comedian George Carlin\'s ashes were encapsulated and fired from a cannon into the Pacific Ocean', 'false');
                
var q3 = new Question('The company Tesla instructs its employees and customers to use \"Teslae\" for the plural form of \"Tesla\"', 'false');

var q4 = new Question('Humans share 50% of their DNA with bananas', 'true');   

var q5 = new Question('There actually was a Captain Morgan. He was known for ransacking Spanish ships in the Caribbean in the 1660\'s and 1670\'s.', 'true');

var q6 = new Question('The name Jack Daniel\'s was created to obscure the fact that it was created by a woman, Jacquelline Danielle Motlow', 'false'); 

var q7 = new Question('In 1989 a panda at the Shanghai Zoo died of spontaneous combustion', 'false');

var q8 = new Question('Ravens in captivity can learn to \"talk\" better than parrots', 'true');
 
var q9 = new Question('A group of barracudas is called a battery', 'true');                

var q10 = new Question('Due to feuding brothers, the can opener was patented 5 years before the tin can', 'false');

var q11 = new Question('The world consumes about 6700 aluminum cans per second', 'true');
                
                
var q12 = new Question('Much of John William\'s score for Star Wars Episode IV was originally written for a movie about warring Germanic tribes uniting against aliens. The movie was shelved and emerged decades later as "Cowboys vs. Aliens" (starring Harrison Ford).', 'false');

var q13 = new Question('Ants outweigh humans on the planet', 'true');

var q14 = new Question('Warren Harding was born with an extra toe, which was removed shortly after his birth', 'false');

var q15 = new Question('Twisted Sister frontman Dee Snider got his start singing backup vocals for artists such as Hall and Oats and Jackson Browne', 'false');

var q16 = new Question('Carly Simon and Paul Simon are first cousins and are the neice and nephew of Richard Simon of Simon and Schuster', 'false');

var q17 = new Question('There is a small island off of Samoa where about 30% of the native inhabitants are born with nine fingers and eleven toes', 'false');

var q18 = new Question('Casu Marzu cheese is purposely infested with maggots', 'true');

var q19 = new Question('During the casting phase for the Lord of the Rings movies, Nicholas Cage turned down the role of Aragorn and Sean Connery turned down the role of Gandalf', 'true');

var q20 = new Question('In parts of Wyoming hunters are required to fire on a Sasquatch if spotted', 'false');



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


init();



    


/*//True counters**********************************
function clickedTrue() {
       clickedTrue ++;
     if (questionsQueue[round].answer === 'true') {
        numCorrect ++;
     } else {
        numWrong ++;
            gull ++;
      }
    document.querySelector('.score-text').textContent = (Math.ceil((numCorrect / (round + 1)) * 100) + '%');
    roundCheck(); 
}
*/
/***********False counters***********
clickedBull ++;
    

        numWrong ++;
        cyn ++;
      
    document.querySelector('.score-text').textContent = (Math.ceil((numCorrect / (round + 1)) * 100) + '%');
    roundCheck();
    */

//answer[i] is true button setup
function answerTrue() {
    document.getElementById('btn-true').addEventListener('click', trueCorrect);
    document.getElementById('btn-bull').addEventListener('click', bullWrong);
}              


//answer[i] is false button setup
function answerFalse() {
    document.getElementById('btn-bull').addEventListener('click', bullCorrect);
    document.getElementById('btn-true').addEventListener('click', trueWrong);
 
}

//when the answer is true and they click true
function trueCorrect() {
    numCorrect ++;
    clickedTrue ++;
    document.getElementById('btn-true').classList.toggle('correct-true', true);
    document.getElementById('btn-bull').classList.toggle('wrong-bull', true);
    btnNextReveal();
}

//when the answer is true and they click bull
function bullWrong() {
    cyn ++;
    clickedBull ++;
    numWrong ++;
    document.getElementById('btn-true').classList.toggle('correct-true', true);
    document.getElementById('btn-bull').classList.toggle('wrong-bull', true);
    btnNextReveal();
}

//when the answer is false and they click bull
function bullCorrect() {
    clickedBull ++;
    numCorrect ++;
    document.getElementById('btn-bull').classList.toggle('correct-bull', true);
    document.getElementById('btn-true').classList.toggle('wrong-true', true); 
    btnNextReveal();
}

//when the answer is false and they click true
function trueWrong() {
    gull ++;
    clickedTrue ++;
    numWrong ++;
    document.getElementById('btn-bull').classList.toggle('correct-bull', true);   
    document.getElementById('btn-true').classList.toggle('wrong-true', true);
    btnNextReveal();
}


function percentage() {document.querySelector('.score-text').textContent = (Math.ceil((numCorrect / (round + 1)) * 100) + '%');
}



function btnNextReveal() {
    percentage();
    document.getElementById('btn-bull').classList.toggle('btn-bull-off', true)
    document.getElementById('btn-true').classList.toggle('btn-true-off', true)
    document.getElementById('btn-true').removeEventListener('click', trueCorrect);
    document.getElementById('btn-true').removeEventListener('click', trueWrong);
    document.getElementById('btn-bull').removeEventListener('click', bullCorrect);
    document.getElementById('btn-bull').removeEventListener('click', bullWrong);
    document.getElementById('btn-next').style.display = 'block';
    document.getElementById('btn-next').classList.toggle('btn-next-show', true);
    document.getElementById('btn-next').addEventListener('click', roundCheck)
}

//Game start*******************************

function init () {
    round = 0;
    document.getElementById('results-box').style.display = 'none';
    document.getElementById('btn-results').style.display = 'none';
    document.getElementById('btn-true').style.display = 'block';
    document.getElementById('btn-bull').style.display = 'block';
    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('current-fact-box').textContent = questionsQueue[round].fact;
        if (questionsQueue[round].answer === 'true') {
            answerTrue();
        } else if (questionsQueue[round].answer === 'false') {
            answerFalse();
        } 
    }
    
    
function roundCheck() {
    if (round < 9) {
        nextRound();
            
    } else if (round === 9) {
       // document.getElementById('current-fact-box').style.display = 'none';
        //document.querySelector('.results-box').style.display = 'block';
        document.querySelector('.current-fact-box').textContent = ('Think you can you do better? Click the NEXT button to see if you can raise your average with 10 more \"facts\". Or click RESULTS to get a breakdown of your answers.');
        document.querySelector('.btn-results').style.display = 'block';
        document.querySelector('.btn-results').addEventListener('click', displayResults);
        document.querySelector('.btn-next').addEventListener('click', nextRound);
    } else if (round > 0 && round < 19) {
        document.querySelector('.btn-next').addEventListener('click', nextRound);
    } else if (round === 19) {
        displayResults(); 
        }
    }

//Next round 
function nextRound() {
    round++;
    document.getElementById('results-box').style.display = 'none';
    document.getElementById('btn-results').style.display = 'none';
    document.getElementById('btn-true').classList.toggle('correct-true', false);
    document.getElementById('btn-true').classList.toggle('wrong-true', false);

    document.getElementById('btn-bull').classList.toggle('correct-bull', false);
    document.getElementById('btn-bull').classList.toggle('wrong-bull', false);

    document.getElementById('btn-next').style.display = 'none';
    document.getElementById('current-fact-box').textContent = questionsQueue[round].fact;
    
    if (questionsQueue[round].answer === 'true') {
            answerTrue();
        } else if (questionsQueue[round].answer === 'false') {
            answerFalse();
        } 
        } 


   function displayResults() {
        document.getElementById('btn-bull').style.display = 'none'
        document.getElementById('btn-true').style.display = 'none'

        document.getElementById('btn-results').style.display = 'none';
        document.getElementById('current-fact-box').style.display = 'none';
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('results-box').style.display = 'block';
        document.getElementById('right').textContent = numCorrect;
        document.getElementById('wrong').textContent = numWrong;
        document.getElementById('gull').textContent = gull;
        document.getElementById('cyn').textContent = cyn;
        document.getElementById('bull').textContent = clickedBull;
        document.getElementById('true').textContent = clickedTrue;

   } 