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
