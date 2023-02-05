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
let careerAdviceWords = [
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

//list of Friendship verbs
let friendVerbs = [
    "bond",
    "connect",
    "unite",
    "socilize",
    "support",
    "encourage",
    "trust",
    "respect",
    "strike up",
    "share",
    "friended"
]

let friendWords = [
    "camaraderie",
    "companionship",
    "affinity",
    "rapport",
    "loyalty",
    "mutual support",
    "mutual repsect",
    "closeness",
    "acceptance",
    "lasting"
]

//List of school advice
let schoolWords = [
    "study",
    "procrastinate",
    "stress",
    "sleep",
    "use ChatGPT",
    "sleep in",
    "read",
    "pretend to work",
    "HELP, I'M STuc...",
    "breakdown",
    "explore",
    "fake it"
]
//List of clothing
let clothingWords = [
    "shirt",
    "pants",
    "shoes",
    "shorts",
    "dress",
    "hat"
]
//List of clothing adjuctives
let clothingAdj = [
    "purple",
    "red",
    "blue",
    "yellow",
    "green",
    "lavender",
    "pink",
    "fluffy",
    "silky",
    "shiny",
    "stretchy",
    "spiffy",
    "pompus",
    "80's",
    "tight",
    "loose"
]
//List of life advice words
let lifeWords = [
    "sleep",
    "water drinking",
    "love",
    "passive-comments",
    "conforming",
    "complacent",
    "runing... don't stop..",
    "smile",
    "bottle up",
    "complaining",
    "HELP, I'M TRAPed.."
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
    updateImg(1);
})

function updateImg(num){
    if(num == 1){
        let shamanImg = document.getElementById('shaman');
        shamanImg.src = "imgs/FortuneTellingShamen.png";
    }else if(num == 2){
        let shamanImg = document.getElementById('shaman');
        shamanImg.src = "imgs/ShamenMouthOpen.png";
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
    updateImg(2);
    if(command == "Romantic  Advice"){
        hideOrbs();
        let randomPhrase = getRandomInt(4);
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
                output.textContent = "You shall fall head over heels for your " + randomWord + " love in the morning after yonder yester fortnight.";
                return;
            case 3:
                output.textContent = "Thy " + randomWord + " love shall be requited within the next " + getRandomInt(40) + " years.";
            case 4:
                output.textContent = "Be wary of those in " + clothingAdj[getRandomInt(15)] + " " + clothingWords[getRandomInt(4)] + ", for one has a secret surprise for you.";
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
            case 4:
                output.textContent = "The crypto market, evolving the field of " + randomWord + ", will set you free (of all your money).";
        }
    }else if(command == "Career  Advice"){
        hideOrbs();
        let randomPhrase = getRandomInt(5);
        let randomWord  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)];
        randomWord = randomWord.toLowerCase();
        let randomWord2  = careerAdviceWords[getRandomInt(careerAdviceWords.length-1)]; 
        randomWord2 = randomWord2.toLowerCase();
        let randomVerb  = careerAdviceVerbs[getRandomInt(careerAdviceVerbs.length-1)]; 
        randomVerb = randomVerb.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Success in a career is not just about " + randomWord + " but it's not also about " + randomWord2 + ".";
                return;
            case 1:
                output.textContent = "Your career is a" + randomWord2 + "not just a " + randomWord + " and it's up to you to chart " + randomWord + ".";
                return;
            case 2:
                output.textContent = "Finding balance between your " + randomVerb + " and " + randomWord2 + "is crucial for success in your career.";
                return;
            case 3:
                output.textContent = "You are not gonna succeed practice with " +  randomWord2 + " and " + randomVerb + ".";
                return;
            case 4:
                output.textContent = "Paying  off your " + randomWord + " is essential in preventing blood sucking debt collectors";
                return;
        }
    }else if(command == "Life  Advice"){
        hideOrbs();
        let randomPhrase = getRandomInt(5);
        let randomWord  = lifeWords[getRandomInt(lifeWords.length-1)];
        randomWord.toLowerCase();
        let randomAdj = clothingAdj[getRandomInt(clothingAdj.length-1)];
        randomAdj.toLowerCase();
        let randomClothes = clothingWords[(clothingWords.length-1)];
        randomClothes.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Make sure to " + randomWord + " around others, they need that.";
                
                return;
            case 1:
                output.textContent = "Next time you " + randomWord + " in " + randomClothes + ", expect a fulfilling day!";
        
                return;
            case 2:
                output.textContent = "Life is like a Dallas Cowboys game, " + randomWord + " will make it better.";
                
                return;
            case 3:
                output.textContent = "With enough " + randomWord + ", your day will be brighter!";
                
                return;
            case 4:
                output.textContent = "Practicing your normal routine of " + randomWord + " isn't a good idea";
                
                return;
            case 5:
                output.textContent = " Do more pratice of " + randomWord + " with " + randomWord2 + " to spice your life ";
                
                return;
        }
    }else if(command == "School  Advice"){
        output.textContent = "School";
        hideOrbs();
        let randomPhrase = getRandomInt(4);
        let randomWord  = schoolWords[getRandomInt(schoolWords.length-1)];
        randomWord.toLowerCase();
        let randomAdj = clothingAdj[getRandomInt(clothingAdj.length-1)];
        randomAdj.toLowerCase();
        let randomClothes = clothingWords[(clothingWords.length-1)];
        randomClothes.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "Make sure to " + randomWord + " every school night to prepare for the next day.";
                return;
            case 1:
                output.textContent = "Come next Thursday, fortune befalls those in " + randomAdj + " " + randomClothes + " on campus.";
                return;
            case 2:
                output.textContent = "Plan to " + randomWord + " at least " + getRandomInt(4) + " times next week... you've been warned...";
                return;
            case 3:
                output.textContent = "All the best CS students " + randomWord + " before tests, trust me.";
                return;
            case 4:
                output.textContent = "For academic luck this work, don't forget your " + randomAdj + " " + randomClothes + ", hope you (finally) did laundry this week.";
        }
    }else if(command == "Friendship Advice"){
        output.textContent = "Friendship";
        hideOrbs();
        let randomPhrase = getRandomInt(6);
        let randomWord  = friendVerbs[getRandomInt(friendVerbs.length-1)];
        randomWord.toLowerCase();
        let randomWord2  = friendVerbs[getRandomInt(friendVerbs.length-1)];
        randomWord2.toLowerCase();
        let randomVerb  = friendWords[getRandomInt(friendWords.length-1)]; 
        randomVerb.toLowerCase();
        console.log(randomPhrase);
        switch(randomPhrase){
            case 0:
                output.textContent = "friendship will be like " + randomVerb + " and " + randomWord + ".";
                return;
            case 1:
                output.textContent = "You substain friendship through your " + randomVerb + ".";
                return;
            case 2:
                output.textContent = "Why would you maintain friendship through " + randomVerb + " and practice with " + randomWord2;         
                return;
            case 3:
                output.textContent = "A true friend is someone who brings" + randomVerb + "and " + randomWord + ".";
                return;
            case 4:
                output.textContent = "Friendship is a "  + randomVerb  + " and " + randomWord2 + " that lasts a lifetime.";
                return;
            case 5:
                output.textContent = "Friendship is not about " + randomWord + " and not about " + randomVerb + ".";
                return;
            
        }
    }
    
} 

for(let i = 0; i < orbs.length;i++){
    orbs[i].addEventListener('click',makeString);
}
