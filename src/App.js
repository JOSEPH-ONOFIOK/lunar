import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import fortuneCookieImage from './photo_2025-01-03_20-24-21 1.png'; // Import the fortune cookie image
import twitterLogo from './Group.png'; // Import Twitter logo
import telegramLogo from './Vector.png'; // Import Telegram logo
import surprise from './suprise.png'; // Import surprise image

const fortunes = [
  "You’re not down bad until you’re calculating profits in ramen packs.",
  "Your portfolio isn’t red, it’s just ‘future green.’",
  "Stop staring at the chart. Go touch grass.",
  "You didn’t get rugged. You just ‘funded someone else’s dream.’",
  "If it pumps, you’re a genius. If it dumps, it’s the dev’s fault.",
  "Don’t be a jeet. Don’t. Be. A. Jeet.",
  "The dip will always dip harder after you buy.",
  "You’ll make it back. You always say that.",
  "WAGMI… unless you sold at the bottom.",
  "Every degen believes in two things: hopium and cope.",
  "Your bags are heavy because they’re filled with regret.",
  "Should’ve sold. Should’ve bought. Should’ve stopped.",
  "The pump starts… right after you close the chart.",
  "Never underestimate the power of a ‘last minute mint.’",
  "If your heart isn’t racing, you didn’t go all-in hard enough.",
  "Gas fees are just entry tickets to heartbreak.",
  // Ridiculously Funny Memecoin Fortunes (1–100)
  "🤑 Don’t jeet your next bag—diamond hands, bro!",
  "🚀 You will hit 100x... or lose it all. Who knows?",
  "🕳 You’re about to get rugged harder than grandma’s carpet.",
  "🛸 Aliens are jealous of your next moonshot.",
  "🧻 Your hands are so paper they make origami jealous.",
  "💀 Your wallet is dead. Long live your next gamble.",
  "🐋 You’re a whale… in a kiddie pool.",
  "🍌 Ape harder—banana season is coming.",
  "🪤 Rug-pull incoming. At least it’s soft.",
  "🎢 Your portfolio is the Six Flags of crypto.",
  "🍪 This cookie cost less gas than your last trade.",
  "🏴‍☠️ Congrats! You just minted an NFT of nothing.",
  "🌪 Your portfolio is like a tornado—everything’s spinning.",
  "🎨 You’re an artist now. Just HODL your JPEG.",
  "🧠 You’ll gain knowledge, but lose half your wallet.",
  "🥷 The dev is gone. Your funds are, too.",
  "📈 The chart looks great—until it doesn’t.",
  "💣 You bought the top. Classic move.",
  "🕵️ DYOR? Nah, YOLO into the next rug.",
  "🔥 Burning tokens feels good… unless they’re yours.",
  "🪙 You hodl so hard your wallet is crying.",
  "🕰 Timing is everything… unless you suck at it.",
  "🍔 You traded your lunch money for memecoins. Respect.",
  "🐸 Pepe laughs at your portfolio.",
  "🕳 If it smells like a rug, it’s probably a rug.",
  "🎯 Your aim is worse than a dart-throwing chimp.",
  "🛳 You missed the ship. Again.",
  "💾 Ledger saved your coins. Congrats, nerd.",
  "🏴 You minted a rug. At least it’s colorful.",
  "🥴 Your PnL is drunk, just like your trades.",
  "🎰 Spin the wheel, lose the bag. Repeat.",
  "📉 Your portfolio looks like a ski slope.",
  "🚧 Maintenance mode—like your profits.",
  "🍕 Trade smarter, so you can afford pizza again.",
  "🧻 Your hands make Charmin blush.",
  "🐻 Bear market blues hit harder than your ex.",
  "🪙 You’ve got coins, but no gains.",
  "🚑 The doctor called. Your wallet needs CPR.",
  "📉 Dips are for chips, not your portfolio.",
  "🦖 Your portfolio is extinct. Try again.",
  "🥹 You’re the meme, not the trader.",
  "🛡 Not your keys, not your cheese, not your gains.",
  "💎 You sold. Now it’s mooning. Congrats, jeet.",
  "🔥 Tokenomics sound great until it’s all burnt.",
  "🥴 Your portfolio is more volatile than your mood.",
  "🏗 You’re building something… but it’s probably a mistake.",
  "🧱 You’re stacking bricks. Of debt.",
  "🍌 Ape in. Banana gains await!",
  "🐕 Doge thinks you’re poor. Fix it.",
  "🛒 You’ll trade your gains for groceries. Sad.",
  "🐳 You’re not a whale. You’re plankton.",
  "💀 Rugged so hard even the devs are laughing.",
  "🍺 Beer market vibes. Hold tight.",
  "🧙 The chart wizard lied. You’re wrecked.",
  "🌪 Tornado.cash your way to regret.",
  "🛏 You’re sleeping on gains. Wake up!",
  "🕶 Cool story, bro. Still down 90%.",
  "📊 Charts don’t lie, but you do.",
  "🌋 Volcano tokens = hot garbage.",
  "🕳 Deep liquidity pool = your funds vanished.",
  "🎤 GM. Devs have left the chat.",
  "🐒 Your next trade screams 'degen ape.'",
  "📉 The only thing breaking is your wallet.",
  "🌈 Rainbows are pretty. Your chart isn’t.",
  "🕵️ You’re investigating the floor. It’s low.",
  "🍪 This cookie is worth more than your airdrop.",
  "🎡 Your trades are a carnival ride.",
  "🕳 You’re in the hole. Again.",
  "🪦 Your coin: Rest In Peace.",
  "🥇 First place in buying tops. Congrats!",
  "🛠 You’re building dreams. And debts.",
  "🏴‍☠️ Pirates took your liquidity. Argh.",
  "🌭 Sell memes, buy hot dogs. Great plan.",
  "🐕 Shiba laughed at your entry price.",
  "🍄 Your portfolio: Mario Kart banana peel edition.",
  "📉 You’re shorting gains. Literally.",
  "🍺 Your trades are drunk. Again.",
  "🎰 Memecoins = Vegas but worse.",
  "🛫 Your coins took off… without you.",
  "🐂 Bull market horns. You missed them.",
  "🍑 Your chart = peach-shaped sadness.",
  "🔧 Fix your trades. They’re broken.",
  "🐒 Ape harder, bro. Your banana empire awaits!",
  "🧻 Your hands are so paper, even your mom’s ashamed.",
  "🚀 Moon? Nah, you’re headed straight to Uranus.",
  "🕳 You’ll get rugged so hard, your grandkids will feel it.",
  "💎 Diamond hands? More like plastic spoons.",
  "🎢 Your portfolio is a circus, and you’re the clown.",
  "🐋 Congrats, you’re whale bait now.",
  "📉 Your trades scream ‘financial ruin.’",
  "🍌 Banana market! You’re already slipping.",
  "🔥 Burnt toast has more value than your last trade.",
  "🪂 You sold early. Hope you enjoy watching the moon.",
  "🛳 You’ll miss the ship harder than the Titanic did.",
  "🦴 Your wallet has less meat than a vegan menu.",
  "🥴 Your last trade belongs in a cringe compilation.",
  "🪙 You’re stacking pennies while others 100x.",
  "🍔 You’ll flip burgers before you flip coins.",
  "📦 Your portfolio is boxed in with zero exits.",
  "🐕 Even your dog hates your trading skills.",
  "🏴‍☠️ You’ll mint an NFT of regret.",
  "🧻 Congrats, you’re now the poster child for paper hands.",
  "🎰 Trading memecoins = playing Russian roulette with your wallet.",
  "🐸 Pepe says: ‘You’re poor. Try again.’",
  "🚑 Your wallet needs life support. Stat.",
  "🌈 Rainbow charts. Pot of gold? Nope, just tears.",
  "🍹 Your gains are evaporating like margarita ice.",
  "🧠 Big brain move—now you’re broke.",
  "🛠 Fix your trading skills, then come back.",
  "🛳 GM sailor! You just sank the whole fleet.",
  "📉 Hope you like red. Your chart is bleeding.",
  "🐒 Ape into nothingness. A true hero.",
  "🔥 You’re the arsonist of your own portfolio.",
  "🍌 Next meme token? Peel harder!",
  "🛡 You’re not rugged; you’re just bad at this.",
  "🧙 You believed the dev’s roadmap. Rookie mistake.",
  "🍪 This cookie = more value than your wallet right now.",
  "🕳 Fell for a black hole token. Classic move.",
  "🎉 Congratulations! You’re officially a bagholder.",
  "🥹 Your portfolio looks like it got punched in the face.",
  "🦧 Ape legend! Too bad you’re poor now.",
  "🍕 Trade smarter. Maybe one day you’ll afford toppings.",
  "🌪 You’ll be swept away by FOMO… again.",
  "🚧 You’re the construction site of poor trades.",
  "🧸 HODL your plushie. It’s more valuable.",
  "🪄 You’ll disappear from crypto like magic.",
  "🍄 Watch out for rug-pulls. They’re everywhere.",
  "🎨 Your next art is your loss chart.",
  "🎰 Spin the wheel! Lose the bag!",
];


const App = () => {
  const [currentFortune, setCurrentFortune] = useState(null); // No fortune displayed initially
  const [isCookieOpened, setIsCookieOpened] = useState(false); // Track if the cookie has been opened

  // Function to change the fortune text when the button is clicked
  const handleOpenCookie = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const newFortune = fortunes[randomIndex];
    console.log("New fortune selected:", newFortune); // Debug log
    setCurrentFortune(newFortune); // Set a new random fortune
    setIsCookieOpened(true); // Mark that the cookie has been opened
  };

  return (
    <div className="fortune-cookie-container">
      {/* Title and Image Container */}
      <div className="fortune-cookie-title-container">
        <img
          className="fortune-cookie-image"
          src={fortuneCookieImage}
          alt="Fortune Cookie"
        />
        <div className="fortune-cookie-title">
          SOLANA FORTUNE COOKIE
        </div>
      </div>

      {/* White Container for Fortune Text */}
      <div className="fortune-cookie-white-container">
        {/* Show the fortune text only after the button is clicked */}
        {isCookieOpened ? (
          <div className="fortune-cookie-instruction">
            <img
              className="fortune-cookie-image3"
              src={surprise}
              alt="Surprise Fortune"
            />
            {currentFortune}
          </div>
        ) : (
          <img
            className="fortune-cookie-image2"
            src={fortuneCookieImage}
            alt="Fortune Cookie"
          />
        )}

        {/* Open Cookie Button */}
        <div className="fortune-cookie-button" onClick={handleOpenCookie}>
          OPEN MY COOKIE
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://x.com/i/communities/1875287405323800936" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src={twitterLogo} alt="Twitter" />
          </div>
        </a>
        <a href="https://t.me/solanafortunecookie" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src={telegramLogo} alt="Telegram" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
