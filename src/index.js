import './style.css'
import nyanpopgif from './metadata/nyanpop.gif';

// Header
const header = document.querySelector('header');

const tickerText = document.createElement('span');
tickerText.innerHTML = `NON-STOP $NYANPOP`;

header.appendChild(tickerText);

// Main
const main = document.querySelector('main');

const nyanpopGif = document.createElement('img');
nyanpopGif.src = nyanpopgif;
nyanpopGif.id = "nyanpopgif";
nyanpopGif.classList.add("backdrop-shadow");
main.appendChild(nyanpopGif);

const actions = document.createElement('div');
actions.classList.add("actions");

const telegramBtn = document.createElement('button');
telegramBtn.id = "telegram-button";
telegramBtn.innerHTML = `TG`;
actions.appendChild(telegramBtn);

const twitterBtn = document.createElement('button');
twitterBtn.id = "twitter-button";
twitterBtn.innerHTML = `TWITTER`;
actions.appendChild(twitterBtn);

const chartBtn = document.createElement('button');
chartBtn.id = "chart-button";
chartBtn.innerHTML = `CHART`;
actions.appendChild(chartBtn);

const buyBtn = document.createElement('button');
buyBtn.id = "buy-button";
buyBtn.innerHTML = `BUY`;
actions.appendChild(buyBtn); 

main.appendChild(actions);

// Timer logic
const nyanpopTimer = document.createElement('div');
nyanpopTimer.id = "nyanpopTimer";

const timerText = document.createElement('span');

let seconds = 0;

timerText.innerHTML = `YOU'VE NYANPOPPED FOR ${seconds.toFixed(1)} SECONDS`

// update the timer every 100 milliseconds
setInterval(() => {
  seconds += 0.1;
  timerText.innerHTML = `YOU'VE NYANPOPPED FOR ${seconds.toFixed(1)} SECONDS`;
}, 100);

const timerTweetBtn = document.createElement('button');
timerTweetBtn.innerHTML = `TWEET YOUR SCORE!`;

timerTweetBtn.addEventListener('click', () => {
  const tweetText = `I have NyanPopped FOR ${seconds} seconds! http://nyanpop.fun via @nyanpop $NYANPOP`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, '_blank');
});

nyanpopTimer.appendChild(timerText);
nyanpopTimer.appendChild(timerTweetBtn);
main.appendChild(nyanpopTimer);

// Footer
const footer = document.querySelector('footer');

const contract = document.createElement('span');
contract.innerHTML = `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`;
footer.appendChild(contract);

const copyCaBtn = document.createElement('button');
copyCaBtn.innerHTML = `COPY CA`;
footer.appendChild(copyCaBtn);