/*console.log("Hello, World!");
console.log("1");
alert("Hello, World!");
*/
// USS Schwarzenegger properties
// hull- 20
// firepower- 5
// accuracy- .7

// The Alien ship have the following propeties 
// hull - between 3 and 6
// firepoer- between 2 and 4
// accuracy- between .6 and .8
// Example use of **accuracy** to determine a hit:

// ```javascript
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }
// Battle Ship

// Your Ship
class USS_Schwarzenegger {
    constructor() {
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = .7
    }
  
    attack() {
      let rand = Math.random()
      if (rand < this.accuracy) {
        invader.hull -= this.firepower;
        alert(`YOUR ATTACK WAS SUCCESSFUL! `)
      } else {
        alert(`YOUR ATTACK FAILED!`)
      }
    }
  }
  const defender = new USS_Schwarzenegger()
  
  // Alien Ship
  class Alien {
    constructor() {
      this.hull = Math.floor(Math.random() * (7 - 3) + 3)
      this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
      this.accuracy = Math.random() * (.8 - .6) + .6
    }
    attack() {
      let rand = Math.random()
      if (rand < this.accuracy) {
        defender.hull -= this.firepower;
        alert(`YOU'VE BEEN HIT!`)
      } else {
        alert(`Failed!`)
      }
    }
  }
  
  const invader = new Alien()
  
  
  // Initiate Game
  const init = () => {
    alert('Lets start the sapce battle!');
    const response = prompt(`Enter 'start' to play or 'quit' to exit.`);
    if (response.toLowerCase() === 'quit') {
      alert(`See you again!`)
    } else if (response.toLowerCase() === 'start') {
      alert('Earth has been attacked by  aliens!')
      lockAndLoad()
    } else {
      alert(`Try again next time!`)
    }
  }
  
  
  // Check Status
  const status = () => {
    alert(`Your Status >>> HULL: ${defender.hull} | FIREPOWER: ${defender.firepower} | ACCURACY: ${defender.accuracy*100}%\n\nAlien#${invaderCount} Status >>> HULL: ${invader.hull} | FIREPOWER: ${invader.firepower} | ACCURACY: ${Math.floor(invader.accuracy*100)}%`)
  }
  
  
  // Get Ready to Battle
  invaderCount = 6;
  
  const lockAndLoad = () => {
  
    while (invaderCount > 0) {
      if (invader.hull < 1) {
        invaderCount--
      }
  
      if (invaderCount > 0 && defender.hull > 0) {
        invader.hull = Math.floor(Math.random() * (7 - 3) + 3)
        invader.firepower = Math.floor(Math.random() * (5 - 2) + 2)
        invader.accuracy = Math.random() * (.8 - .6) + .6
      } else if (invaderCount < 1 && defender.hull < 1) {
        return alert(`TIE GAME!`)
      } else if (invaderCount < 1 && defender.hull > 0) {
        return alert(`YOU HAVE DEFEATED ALL ALIENS`)
      } else {
        return alert(`YOU LOSE!`)
      }
  
      const response = prompt(`Enter 'a' to attack or 'q' to retreat`)
      if (response.toLowerCase() === 'q') {
        alert(`YOU LOSE!`)
        defender.hull = 0;
        defender.firepower = 0;
        defender.accuracy = 0;
        status()
      } else if (response.toLowerCase() === 'a') {
        engage()
      } else {
        alert(` Try again!`)
      }
  
    }
  
  }
  
  // Battle
  const engage = () => {
    defender.attack();
    invader.attack();
    lockAndLoad();
  }
  
  init(); 