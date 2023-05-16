class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(
      `This ${this.species} named ${this.name} making sound like ${this.sound}`
    );
  }
}

const cat = new Animal("Jackson", "cat", "Miew Miew");
cat.makeSound();
