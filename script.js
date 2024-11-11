class User {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.location = location;
  }
  confronto(primoUtente, secondoUtente) {
    if (primoUtente.age > secondoUtente.age) {
      console.log(primoUtente.name + " é piú vecchio di " + secondoUtente.name);
    } else {
      console.log(secondoUtente.name + " é piú vecchio di " + primoUtente.name);
    }
  }
}

const user1 = new User("Tommaso", "Cesaro", 22, "Cardito");

const user2 = new User("Marco", "Concilio", 23, "Secondigliano");

user2.confronto(user1, user2);

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.name = petName;
    this.surname = ownerName;
    this.species = species;
    this.breed = breed;
  }

  stessoPadroneDomanda(petOne, petTwo) {
    if (petOne.ownerName === petTwo.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const pet1 = new Pet("Stephy", "Tommaso", "Cane", "Messicano");

const pet2 = new Pet("Ditto", "Tommaso", "Pokemon", "Bho");

console.log(pet1.stessoPadroneDomanda(pet1, pet2));
