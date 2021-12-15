// Os cálculos do dano:
function dragonDamage(strength) {
const result = Math.floor(Math.random() * (strength - 15) + 15);
return result;
}

function warriorDamage(strength, weapon) {
  const max = strength * weapon;
  const result = Math.floor(Math.random() * (max - strength) + strength);
  return result;
}

function mageDamage(intelligenceValue, manaValue) {
  const random = Math.floor(Math.random() * (intelligenceValue * 2 - intelligenceValue) + intelligenceValue);
  let result = undefined;
  if (manaValue < 15) {
    return 'Não possui mana suficiente';
  } else {
    manaValue -= 15;
    result = {
      mana: manaValue,
      damage: random,
    }
  }
  return result;
}

// Os combatentes:
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

console.log(battleMembers);

// O Turno:
const gameActions = {
  warriorAction: (callback) => {
    warrior.damage = callback;
    dragon.healthPoints -= callback;
  },
  mageAction: (callback) => {
    dragon.healthPoints -= callback.damage;
    Object.assign(mage, callback);
  },
  dragonAction: (callback) => {
    warrior.healthPoints -= callback;
    mage.healthPoints -= callback;
    dragon.damage = callback;
  },
  battleResult: () => console.log(battleMembers),
};

gameActions.warriorAction(warriorDamage(warrior.strength, warrior.weaponDmg));
gameActions.mageAction(mageDamage(mage.intelligence, mage.mana));
gameActions.dragonAction(dragonDamage(dragon.strength));
console.log(battleMembers);

// Simula uma batalha de um jogo de RPG.