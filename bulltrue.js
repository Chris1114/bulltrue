
const questionsQueue = [];
const answerQueue = [];
const correct = [];
const incorrect =[];
const playerAnswers=[];


 questionsQueue.push('Research suggests that 20% of Neanderthal DNA survives in modern humans');
 answerQueue.push('true');
 correct.push('Well clicked! They live in us. Some of us more than others.');
 incorrect.push('Nope that was true. Already missed one...Maybe you got an extra helping of that Neanderthal DNA.');
      
                
 questionsQueue.push('In accordance with his wishes, comedian George Carlin\'s ashes were encapsulated and fired from a cannon into the Pacific Ocean');
 answerQueue.push('false');
 correct.push('Good job! Didn\'t happen. But it was in one of his bits.');
 incorrect.push('Sorry. Didn\'t happen. Do you also believe that Texas has so many executions that they have to use electric couches? Because that\'s another one of his jokes.');
   
                
 questionsQueue.push('The company Tesla instructs its employees and customers to use \"Teslae\" for the plural form of \"Tesla\"');
 answerQueue.push('false');
 correct.push('Well done! Elon\'s crazy, not stupid.');
 incorrect.push('Wrong-o. Elon\'s crazy, not stupid.');
   
                
 questionsQueue.push('Humans share 50% of their DNA with bananas');
 answerQueue.push('true');
 correct.push('Right! You knew that already. Nobody gets that one.');
 incorrect.push('No, that was true. We also share 98% of our DNA with chimpanzees. Better hope your 2% kicks in.');
   
                
 questionsQueue.push('There actually was a Captain Morgan. He was known for ransacking Spanish ships in the Caribbean in the 1660\'s and 1670\'s.');
 answerQueue.push('true');
 correct.push('Congratulations. You got the easy one.');
 incorrect.push('Nope, he was real. And a real jerk.');
 
                
 questionsQueue.push('The name Jack Daniel\'s was created to obscure the fact that it was created by a woman, Jacquelline Danielle Motlow');
 answerQueue.push('false');
 correct.push('Extremely false. Of course Jack Daniel\'s was created by Jack Daniel.');
 incorrect.push('Seriously? You\'re one of the 2% that miss that one. What\'s the opposite of elite?');
 
                
 questionsQueue.push('In 1989 a panda at the Shanghai zoo died of spontaneous combustion');
 answerQueue.push('false');
 correct.push('Right you are. It was actually a hedgehog. On his birthday too.');
 incorrect.push('You bought that? Please hold...We\'ve been trying to reach you about your vehicle\'s extended service plan.');
 
                
 questionsQueue.push('Ravens in captivity can learn to \"talk\" better than parrots');
 answerQueue.push('true');
 correct.push('Noice!!! Isn\'t that a fun fact.');
 incorrect.push('No, that\'s actually true. And isn\'t that a fun fact.');
 
                
 questionsQueue.push('A group of barracudas is called a battery');
 answerQueue.push('true');
 correct.push('I mean, it was 50/50...But good job anyway. FREEBIE: A group of cougars is called a book club.');
 incorrect.push('Sorry. They are, in fact, a battery of barracudas. That alliteration gets \'em every time.');
 
                
 questionsQueue.push('Due to feuding brothers, the can opener was patented 5 years before the tin can');
 answerQueue.push('false');
 correct.push('Correct! As Michael Corleone said..."A complete falsehood".');
 incorrect.push('Just weird enough to be true but still false.');

 questionsQueue.push('The world consumes about 6700 aluminum cans per second');
 answerQueue.push('true');
 correct.push('Unfortunately, yes, this is true.');
 incorrect.push('Nope. Unfortunately this is true.');

 questionsQueue.push('Much of John William\'s score for Star Wars Episode IV was originally written for a movie about warring Germanic tribes uniting against aliens. The movie was shelved and emerged decades later as "Cowboys vs. Aliens" (starring Harrison Ford).');
 answerQueue.push('false');
 correct.push('Correct you are. And we worked hard on that one!');
 incorrect.push('A big heap of BS. Way to end on a miss.');
   

var round = 0;
var numCorrect = 0;
var numWrong = 0;
var gull = 0;
var cyn = 0;

init();



//Next round**********************************************
function nextRound() {
    round +=1;
      if (round ==12) {
          document.querySelector('.btn-bulltrue').style.display = 'none';
          document.querySelector('.btn-bull').style.display = 'none';
          document.querySelector('.btn-next').style.display = 'none';
          document.querySelector('.score-box').style.display = 'none';
          document.querySelector('.score-text').style.display = 'none';
        if (numCorrect <= 3) {
            document.querySelector('.current-fact-box').textContent = 'Game Over. ' + numWrong + ' wrong...oops. We regret to inform you that the cabbage truck will not be returning for you.';

        } else if (numCorrect > 3 && numCorrect < 7) {
            document.querySelector('.current-fact-box').textContent = 'Game Over. ' + numWrong + ' wrong...oops. Didn\'t exactly kill it. Please don\'t make decisions for yourself in the world.';
 
        } else if (numCorrect > 6 && numCorrect < 10) {
            document.querySelector('.current-fact-box').textContent = numCorrect + ' right...Not too shabby, but you are still vulnerable. Proceed with caution. ';

        } else if (numCorrect > 9 && numCorrect < 12) {
            document.querySelector('.current-fact-box').textContent = numCorrect + ' correct anwsers. You are an excellent BS sniffer, very useful, among the best. Maybe you\'ve been burned a couple times? It takes that to score this high.';

        } else if (numCorrect === 12) {
            document.querySelector('.current-fact-box').textContent = '12 for 12...Perfect score! You can\'t argue with results. You are a shining example of evolution gone right.'; 
        }
    
        } else {
        document.querySelector('.btn-bulltrue').style.display = 'block';
        document.querySelector('.btn-bull').style.display = 'block';
        document.querySelector('.btn-next').style.display = 'none';
        document.querySelector('.current-fact-box').textContent = questionsQueue[round];
        document.querySelector('.btn-bull').addEventListener('click', submitFalse);
        document.querySelector('.btn-bulltrue').addEventListener('click', submitTrue);
        }
    }


//Player clicked Bulltrue**********************************
function submitTrue() {    
    if (answerQueue[round] === 'true') {
        document.querySelector('.current-fact-box').textContent = correct[round];
        numCorrect += 1;
    } else {
        document.querySelector('.current-fact-box').textContent = incorrect[round];
        numWrong += 1;
            gull +=1;
      }
    document.querySelector('.score-text').textContent = (numCorrect + '/' + (round + 1));
    document.querySelector('.btn-bulltrue').style.display = 'none';  
    document.querySelector('.btn-bull').style.display = 'none';
    document.querySelector('.btn-next').style.display = 'block';
    document.querySelector('.btn-next').addEventListener('click', nextRound);
    playerAnswers.push('true');    
  }


//Player clicked Bull**************************************
function submitFalse() {    
    if (answerQueue[round] === 'false') {
      document.querySelector('.current-fact-box').textContent = correct[round];
        numCorrect += 1;
    } else {
        document.querySelector('.current-fact-box').textContent = incorrect[round];
        numWrong += 1;
        cyn += 1;
        }
    document.querySelector('.score-text').textContent = (numCorrect + '/' + (round + 1));
    document.querySelector('.btn-bulltrue').style.display = 'none';
    document.querySelector('.btn-bull').style.display = 'none';
    document.querySelector('.btn-next').style.display = 'block';
    document.querySelector('.btn-next').addEventListener('click', nextRound);
    playerAnswers.push('false');
}

 var answer;

//Game start*************************************************

    function init () {
        round = 0;
        document.querySelector('.btn-bulltrue').style.display = 'block';
        document.querySelector('.btn-bull').style.display = 'block';
        document.querySelector('.btn-next').style.display = 'none';
        document.querySelector('.current-fact-box').textContent = questionsQueue[round];
        document.querySelector('.btn-bull').addEventListener('click', submitFalse);
        document.querySelector('.btn-bulltrue').addEventListener('click', submitTrue);
    }
    
    
    
    
    