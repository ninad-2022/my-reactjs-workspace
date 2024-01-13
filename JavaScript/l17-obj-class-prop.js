//Dog object
class Dog {
  name = "Bobby";
  ages = 10;
  bread = "GermanShephard";
  weight = 10;
  color = "red";

  eating() {
    console.log(this.name + " is eating");
  }
  barking() {
    console.log(this.name + " is barking");
  }
  aging() {
    console.log(this.name + " is " + this.ages + " years old ");
  }
}

// creating a class object
const pet = new Dog();
pet.eating();
pet.barking();
pet.aging();

Dog.ages = 34;
console.log(Dog.ages);

//myMobile object
class myMobile {
  name = "Redmi note 7 pro";
  age = 3;
  model_no = 177373;
  company = "Redmi";
  country_orign = "Made in China";

  nameing() {
    console.log(" I am having " + this.name + " mobile phone. ");
  }
  details() {
    console.log(
      this.name +
        " is " +
        this.age +
        " years old " +
        this.country_orign +
        " and mode number is" +
        this.model_no
    );
  }
}
const mob = new myMobile();
mob.nameing();
mob.details();
