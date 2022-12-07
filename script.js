window.addEventListener('load', init)

const mixedMessages = 
["How you doin?", 
"Could I BE wearing any more clothes?!",
"I am not great at the advice. Can I interest you in a sarcastic comment?",
"We were on a break!",
"Unagi.",
"Pivot!",
"Oh, I wish I could, but I dont want to.",
"Oh I'm sorry. Did my back hurt your knife?",
"I KNOW!",
"OH MY GOD."];


function randomQuote() {
    const randNum = Math.floor(Math.random() * mixedMessages.length);
    document.getElementById("quoteinput").value = mixedMessages[randNum];
};
function init (){
const textHover = document.getElementById('textHover');
const pictureFriends = document.getElementById('boxFriends');


function makePicture() {
    pictureFriends.style.display = 'flex'
};

textHover.onmouseover = makePicture
    }