class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
  attendClass(hours: number): string {
    return `${this.name} attend ${hours} classes`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(hours: number): string {
    return `${this.designation} ${this.name} takes ${hours} classes `;
  }
}

const student1 = new Student("Minhaz", 25, "BD");
console.log(student1.attendClass(20));

const teacher1 = new Teacher("Mr X", 40, "AUS", "Professor");
console.log(teacher1.takeClass(5));
