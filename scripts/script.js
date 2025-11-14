// Toggle Google Translate visibility
document.getElementById('translateButton').addEventListener('click', function () {
  const element = document.getElementById('google_translate_element');
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
});

// Random quote on refresh

const quotes = [
  "The Zen rock garden is a creative act, a symbol, a meditation. Its waves are ephemeral, and what human hands have created, human hands must also maintain. Performing repetitive tasks calls for a discipline that is also part of ganbatte. Those who can accept that their hard work will be undone, and are able to persist in the redoing of it, are able to achieve anything. ~ Albert Liebermann",
  "Inspiration can pass through the soul just as easily in the midst of an orgy as in the silence of the woods, but when it is a question of giving form to your thoughts, whether you are secluded in your study or performing on the planks of a stage, you must be in total possession of yourself. ~ George Sand",
  "I shall always be depressed, but what comforts me is the realization that I can now accept this dark side as the commanding side of my personality. In accepting it, I will make it work for me. ~ Samuel Beckett",
  "I've realized that somebody who's tired and needs a rest, and goes on working all the same is a fool. ~ Carl Jung",
  "Routine, in an intelligent man, is a sign of ambition. ~ W.H. Auden, 1958",
  "A modern stoic knows that the surest way to discipline passion is to discipline time: decide what you want or ought to do during the day, then always do it at exactly the same moment every day, and passion will give you no trouble. ~ W.H. Auden",
  "Happiness is an enemy. It weakens you. Suddenly, you have something to lose. ~ Niki Lauda",
  "From success, you learn absolutely nothing. From failure and setbacks conclusions can be drawn. That goes for your private life as well as your career. ~ Niki Lauda",
  "The world doesn't disappear when you close your eyes, does it?",
  "Things that are unknown and things that don’t exist are not the same.",
  "Lady luck favors the one who tries.",
  "Tomorrow’s troubles are not yet your concern.",
  "Life is but the flicker of a light in an eternity of darkness.",
  "The purpose of education is to turn mirrors into windows. - Sydney J. Harris",
  "Life is easier when you live it the hard way. - Martin Meadows",
  "The struggle itself toward the heights is enough to fill a man’s heart. One must imagine Sisyphus happy.",
  "The harder you work, the harder it is to surrender. - Vince Lombardi",
  "Someone who works hard… can never beat someone who enjoys himself. - Baki",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
  "A man who asks is a fool for five minutes. A man who never asks is a fool for life. - Chinese proverb",
  "Work like a slave. Command like a king. Create like a God. - Constantin Brancusi",
  "Life is easier when you live it the hard way.",
  "To follow, without halt, one aim: there is the secret to success. —Anna Pavlova, Russian ballet dancer",
  "Every choice that you make should make you more independent.",
  "Simplicity is the ultimate sophistication. - Leonardo DaVinci",
  "You are what you do, not what you say you’ll do. - Carl Jung",
  "She said she had faith in us… in me.. that was way before I had faith in myself.",
  "A goal without a plan is just a wish. ― Antoine De Saint-Exupery",
  "I recognize that winning is not everything, but the effort to win is.",
  "When we tune out the opinions, expectations, and obligations of the world around us, we begin to hear ourselves.",
  "The tactic to sell anything: Firstly find a simple and obvious cue (or a problem), secondly, clearly define the rewards and clear that problem.",
  "Usually this debate would happen unseen, and I’d almost immediately give in. But now I was watching, and I couldn’t believe how strong my mind could become when it really wanted to escape discomfort. It would rationalize, bargain, plead, cry, ask for mercy, negotiate some more. It was a little child, doing whatever it could to get its way.",
  "When I face the desolate impossibility of writing 500 pages, a sick sense of failure falls on me and I know I can never do it. Then, gradually, I write one page and then another. One day’s work is all I can permit myself to contemplate. - John Steinbeck, a Nobel Prize winning author",
  "I know I will do some things well and other things poorly, and neither reflects my worth as a person. (Unconditional self-acceptance) - Jennifer Shannon",
  "Mistakes, judgments, and criticism are signs that I have taken a risk and seized an opportunity for growth. I am motivated by excellence, creativity, and purpose. It is more important to do my personal best than measure myself against others’ accomplishments. Being imperfect and fallible is part of being human. - Jennifer Shannon",
  "For this reason, possessing an undefeated mind in which hope beats in time with every thrust of our pulse, a constant refrain in our body and heart, isn’t just necessary for victory; it is victory. - Alex Lickerman",
  "For in refusing to give up, we refuse to give in, not just to oppressive circumstances, but to the moment-by-moment experience of suffering itself. - Alex Lickerman",
  "In one sense, then, when two people interact, they’re actually creating a third person: the person they are together, a melding of the recursive influence each of the two has upon the other. - Alex Lickerman",
  "For we can resist discouragement by articulating our life’s mission; accomplish that mission by making a great determination; overcome the obstacles that naturally arise when we make such a determination by changing poison into medicine; gain the strength to change poison into medicine by accepting responsibility and standing against injustice; endure pain by accepting it and loss by letting go of what we cannot keep; enjoy what we have by learning to appreciate it and help ourselves through trauma by helping others; conquer fear by leveraging our connections to the ones we love. And, finally, I realized, gain inspiration from others who’ve managed to forge an undefeated mind of their own. - Alex Lickerman",
  "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
  "I hate loneliness but it loves me. - unknown",
  "The word school is derived from the Greek word schole, meaning “leisure.”",
  "What is the simplest possible product that will be useful and valuable to the intended customer?",
  "The purpose of the exploration of an Essentialist is to discern the vital few from the trivial many. - Greg McKown",
  "If you want to improve, be content to be thought foolish and stupid - Epictetus"
];

window.onload = function() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.querySelector('.random-quote-block').innerText = quotes[randomIndex];
};

// easter egg 🥚