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


var randomQuote = arr => {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
};


console.log(randomQuote(mixedMessages))