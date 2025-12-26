const obj1= {
    name: 'Raghuvar',
    age: 40,
}

const obj2 = {
    name: "Anshul",
    age:20
}

function introduceYourself(position = 'engineer', salary = 0) {
    console.log(`my name is ${this.name} and age is  ${this.age}. My status is ${position} and salary is ${salary}`);
}

introduceYourself();
// using call we can reuse 
introduceYourself.call(obj1);
introduceYourself.call(obj2);

introduceYourself.call(obj2, 'Developer', 15000); // you can call developer and salary

// apply -
introduceYourself.apply(obj2,["HR", 50000]);

const bindIntroduceYourself= introduceYourself.bind(obj2,"Cloud Manager", 87000);
bindIntroduceYourself();


