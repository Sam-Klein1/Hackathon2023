let orbs = document.getElementsByClassName('category-orb');
let output = document.getElementById('output');
let retryBtn = document.getElementById('retry-btn');
let lightningSound = document.getElementById('Lightning');
let lightnings = document.getElementsByClassName('lightning');
let videoSource = document.getElementById('video-source');
let romanticWords = [
    "adorable",
    "amazing",
    "angel",
    "beautiful",
    "beloved",
    "better half",
    "bewitching",
    "crazy for you",
    "darling",
    "dearest",
    "enchanting",
    "enthralling",
    "friend and lover",
    "gorgeous",
    "handsome",
    "heavenly",
    "intoxicating",
    "life-changing",
    "main squeeze",
    "my everything",
    "paramour",
    "sweetheart",
    "swoon",
    "wonderful"
]
let financialWords = [
    "Accounts Payable",
    "Accounts Receivable",
    "Asset",
    "Balance Sheet",
    "Cash Flow",
    "Fixed Asset",
    "Income Statement",
    "Liability",
    "Profit & Loss Statement",
    "Annual Percentage Rate",
    "Collateral",
    "Loan-to-Value",
    "Debt-Service Coverage Ratio",
    "Personal Guarantee",
    "Financial Statements",
    "Debt Consolidation",
    "Gross Profit",
    "Statement of Cash Flow",
    "Credit Limit",
    "Interest Rate",
    "Investment",
    "External capital",
    "Cash outflow",
    "Revenue",
    "Profit",
    "Recessions",
    "Debt",
    "Collateral",
    "Mortgage",
    "Short-term loan",
    "Long-term loan",
    "Credit rating",
    "Overdraft",
    "Shares",
    "Stocks",
    "Rally",
    "Bull market",
    "Bear market"
]
// list of CareerAdviceWords
let carrerAdviceWords = [
    "great work",
    "I'm possible",
    "don't stop",
    "try harder",
    "to be of value",
    "self-reflection",
    "adaptability ",
    "communication skills",
    "time managemen",
    "proactivity",
    "resilience",
    "goal setting",
    "collaboration",
    "passion",
    "professionalism",
    "victory"

]
// list of CareerAdviceVerbs
let careerAdviceVerbs = [
   "network",
   "learn",
   "grow",
   "persevere",
   "adapt",
   "innovate",
   "collaborate",
   "diversify",
   "specialize",
   "prioritize",
   "analyzed",
   "explored",
   "qualified",
   "be flexible",
   "persevere",
   "learn continuously",
   "enhanced",
   "furthered",
   "improved"
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function hideOrbs(){
    for(let i = 0; i < 3;i++){
        orbs[i].animate([
            // keyframes
            { transform: 'translateX(0%)' },
            { transform: 'translateX(-400%)' },
          ], {
            // timing options
            duration: 800,
            iterations: 1,
            fill: "forwards"
          })
    }
    for(let i = 3; i < 6;i++){
        orbs[i].animate([
            // keyframes
            { transform: 'translateX(0%)' },
            { transform: 'translateX(400%)' },
          ], {
            // timing options
            duration: 800,
            iterations: 1,
            fill: "forwards"
          })
    } 
}
retryBtn.addEventListener('click', function(){
    for(let i = 0; i < 3;i++){
        orbs[i].animate([
            // keyframes
            { transform: 'translateX(-400%)' },
            { transform: 'translateX(0%)' },
          ], {
            // timing options
            duration: 800,
            iterations: 1,
            fill: "forwards"
          })
          orbs[i].animate([
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(20px)' },
          ], {
            // timing options
            duration: 1000 + (getRandomInt(10)*10),
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
          })
    }
    for(let i = 3; i < 6;i++){
        orbs[i].animate([
            // keyframes
            { transform: 'translateX(400%)' },
            { transform: 'translateX(0%)' },
          ], {
            // timing options
            duration: 800,
            iterations: 1,
            fill: "forwards"
          })
          orbs[i].animate([
            // keyframes
            { transform: 'translateY(0px)' },
            { transform: 'translateY(20px)' },
          ], {
            // timing options
            duration: 1000 + (getRandomInt(10)*10),
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
          })
    } 
    output.textContent = "";
    output.style.display = "none";
    retryBtn.style.display = "none";
})

function updateVideo(num){
    if(num == 1){
        videoSource = "Sample Video.mp4";
    }else if(num == 2){
        videoSource = "Wav2Lip/results/result_voice.mp4";
    }
    
}
function makeString(){

    let command = this.getElementsByTagName("p")[0].textContent;
    console.log(command);

    lightningSound.play();
    lightnings[0].animate([
        // keyframes
        { opacity: '0%' },
        { opacity: '100%' },
        { opacity: '0%' }
      ], {
        // timing options
        duration: 800,
        iterations: 1
      })
      lightnings[1].animate([
        // keyframes
        { opacity: '0%' },
        { opacity: '100%' },
        { opacity: '0%' }
      ], {
        // timing options
        duration: 500,
        iterations: 1
      })
      lightnings[2].animate([
        // keyframes
        { opacity: '0%' },
        { opacity: '100%' },
        { opacity: '0%' }
      ], {
        // timing options
        duration: 700,
        iterations: 1
      })
    output.style.display = "block";
    output.animate([
            // keyframes
            { transform: 'translateY(0%)' },
            { transform: 'translateY(-60%)' },
          ], {
            // timing options
            duration: 800,
            iterations: 1,
            fill: "forwards"
    })
    
    retryBtn.style.display = "block";
    retryBtn.animate([
        // keyframes
        { transform: 'translateY(0%)' },
        { transform: 'translateY(-500%)' },
      ], {
        // timing options
        duration: 800,
        iterations: 1,
        fill: "forwards"
    })
    if(command == "Romantic  Advice"){
        hideOrbs();
        let randomPhrase = getRandomInt(2);
        let randomWord  = romanticWords[getRandomInt(romanticWords.length-1)];
        let randomWord2  = romanticWords[getRandomInt(romanticWords.length-1)]; 
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "So " + randomWord + ", your love will bloom in the springtime when " + randomWord2 + " is ready for computer love.";
                return;
            case 1:
                output.textContent = "Your admirer " + randomWord + " actively awaits outside your window.";
                return;
            case 2:
                output.textContent = "You shall fall head over heel for your " + randomWord + " love in the morning after yonder yester fortnight.";
                return;
        }
        
    }else if(command == "Financial  Advice"){
        output.textContent = "Financial"; 
        hideOrbs();
        let randomPhrase = getRandomInt(4);
        let randomWord  = financialWords[getRandomInt(financialWords.length-1)];
        randomWord = randomWord.toLowerCase();
        let randomWord2  = financialWords[getRandomInt(financialWords.length-1)]; 
        randomWord2 = randomWord2.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Be sure to wear your socks inside out to ensure " + randomWord + " does not liquidate your " + randomWord2 + " leading to economic collapse.";
                return;
            case 1:
                output.textContent = "Always bet on " + randomWord + " multiplying your money twentytwofold.";
                return;
            case 2:
                output.textContent = "Don't hire a financial advisor, investing in " + randomWord + " will " + randomWord2 + " which will ensure a retirement in your 90s.";
                return;
            case 3:
                    output.textContent = "Paying  off your " + randomWord + " is essential in preventing blood sucking debt collectors";
                    return;
        }
    }else if(command == "Career  Advice"){
        output.textContent = "Career";
        hideOrbs();
        let randomPhrase = getRandomInt(4);
        let randomWord  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)];
        randomWord = randomWord.toLowerCase();
        let randomWord2  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)]; 
        randomWord2 = randomWord2.toLowerCase();
        let randomVerb  = careerAdviceVerbs[getRandomInt(careerAdviceVerbs.length-1)]; 
        randomVerb = randomVerb.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Be sure to participate in company " + randomWord + " in order to  " + randomWord2 + " leading to promotion to CEO.";
                return;
            case 1:
                output.textContent = "Always upskill on " + randomWord + " when "+ randomVerb + "ing to prevent major job loss syndrome(MJLS).";
                return;
            case 2:
                output.textContent = "A team player always " + randomWord + "s and ensures  " + randomWord2 + " to maintain an extrememly unprofessional environment.";
                return;
            case 3:
                    output.textContent = "Networking with others " + randomVerb + "s  your potiential to quit your job in a companies' most dire situations.";
                    return;
        }
    }else if(command == "Life  Advice"){
        output.textContent = "Life";
        hideOrbs();
        let randomPhrase = getRandomInt(4);
        let randomWord  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)];
        randomWord = randomWord.toLowerCase();
        let randomWord2  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)]; 
        randomWord2 = randomWord2.toLowerCase();
        let randomVerb  = careerAdviceVerbs[getRandomInt(careerAdviceVerbs.length-1)]; 
        randomVerb = randomVerb.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Be sure to participate in company " + randomWord + " in order to  " + randomWord2 + " leading to promotion to CEO.";
                return;
            case 1:
                output.textContent = "Always upskill on " + randomWord + " when "+ randomVerb + "ing to prevent major job loss syndrome(MJLS).";
                return;
            case 2:
                output.textContent = "A team player always " + randomWord + "s and ensures  " + randomWord2 + " to maintain an extrememly unprofessional environment.";
                return;
            case 3:
                    output.textContent = "Networking with others " + randomVerb + "s  your potiential to quit your job in a companies' most dire situations.";
                    return;
        }
    }else if(command == "School  Advice"){
        output.textContent = "School";
        hideOrbs();
    }else if(command == "Friendship Advice"){
        output.textContent = "Friendship";
        hideOrbs();
    }
} 

for(let i = 0; i < orbs.length;i++){
    orbs[i].addEventListener('click',makeString);
}