let orbs = document.getElementsByClassName('category-orb');
let output = document.getElementById('output');
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

function hideOrbs(){
    for(let i = 0; i < orbs.length;i++){
        orbs[i].style.display = "none";
    } 
}
function makeString(){
    let command = this.getElementsByTagName("p")[0].textContent;
    console.log(command);
    if(command == "Romantic  Advice"){
        output.textContent = "Romantic";
        hideOrbs();

    }else if(command == "Financial  Advice"){
        output.textContent = "Financial";
        hideOrbs();
    }else if(command == "Career  Advice"){
        output.textContent = "Career";
        hideOrbs();
    }else if(command == "Life  Advice"){
        output.textContent = "Life";
        hideOrbs();
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