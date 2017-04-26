var moreButton = document.getElementsByTagName('button');
moreButton[0].addEventListener('click', getNewQuote, false);

var twitterButton = document.getElementsByClassName('twitter-share-button');
twitterButton[0].addEventListener('click', tweetQuote , false);

function getNewQuote(){
  var text = document.getElementsByClassName('text');
  text[0].innerText = linusQuotes[getRandomInt(0,linusQuotes.length)];
  return console.log(getRandomInt(0,linusQuotes.length));
}

function tweetQuote(){
  link = 'https://twitter.com/intent/tweet?text='+ document.getElementsByClassName('text')[0].innerText+' - Linus Torvalds';
  window.open(link, 'newwindow', 'width=450, height=250');
  return console.log("tweet quote");
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var linusQuotes = [
    "A computer is like air conditioning - it becomes useless when you open Windows",
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    "Modern PCs are horrible. ACPI is a complete design disaster in every way. But we're kind of stuck with it. If any Intel people are listening to this and you had anything to do with ACPI, shoot yourself now, before you reproduce.",
    "The complaints I've had is that GitHub as a development platform - making commits, pull requests, keeping track of issues etc - doesn't work very well at all. It's not even close, not for something like the kernel. It's much too limited.",
    "Talk is cheap. Show me the code.",
    "Nobody actually creates perfect code the first time around, except me. But there's only one of me.",
    "I want my office to be quiet. The loudest thing in the room - by far - should be the occasional purring of the cat.",
    "Backups are for wimps. Real men upload their data to an FTP site and have everyone else mirror it.",
    "Microsoft isn't evil, they just make really crappy operating systems.",
    "I have one very basic rule when it comes to 'good ideas'. A good idea is not an idea that solves a problem cleanly. A good idea is an idea that solves several things at the same time. The mark of good coding is not that the program does what you want, it's that it also does something that you didn't start out wanting.",
    "UNIX has a philosophy, it has 25 years of history behind it, and most importantly, it has a clean core. It strives for something - some kind of beauty. And that's really what struck me as a programmer. Operating systems that normal home users are used to, such as DOS and Windows, didn't have any way of life. Nobody tried to design Windows - it just grew in random directions without any kind of thought behind it. [...] I don't think Microsoft is evil in itself; I just think that they make really crappy operating systems.",
    "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
    "C++ is a horrible language. It's made more horrible by the fact that a lot of substandard programmers use it, to the point where it's much much easier to generate total and utter crap with it.",
    "I think Leopard is a much better system [than Windows Vista] ... but OS X in some ways is actually worse than Windows to program for. Their file system is complete and utter crap, which is scary.",
    "I may make jokes about Microsoft at times, but at the same time, I think the Microsoft hatred is a disease.",
    "And what's the Internet without the rick-roll?",
    "I'm basically a very lazy person who likes to get credit for things other people actually do.",
    "I am not out to destroy Microsoft, that would be a completely unintended side effect.",
    "I do get my pizzas paid for by Linux indirectly.",
    "In short: just say NO TO DRUGS, and maybe you won't end up like the Hurd people.",
    "Software is like sex: It's better when it's free.",
    "In real open source, you have the right to control your own destiny.",
    "Those that can, do. Those that can't, complain.",
    "To be a nemesis, you have to actively try to destroy something, don't you? Really, I'm not out to destroy Microsoft. That will just be a completely unintentional side effect.",
    "I like offending people, because I think people who get offended should be offended.",
    "If Microsoft ever does applications for Linux it means I've won.",
    "Any program is only as good as it is useful.",
    "My name is Linus, and I am your God.",
    "Microsoft isn't evil, they just make really crappy operating systems.",
    "Intelligence is the ability to avoid doing work, yet getting the work done.",
    "No-one has ever called me a cool dude. I'm somewhere between geek and normal.",
    "I'm sitting in my home office wearing a bathrobe. The same way I'm not going to start wearing ties, I'm also not going to buy into the fake politeness, the lying, the office politics and backstabbing, the passive aggressiveness, and the buzzwords."
];
