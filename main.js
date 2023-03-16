for (let i = 0; i < 10; i++) {
  if(i%2==1){
    console.log(i + " is odd");
  }

  }
  
  // Using a while loop
  let i = 0;
  while (i <= 10) {
    if (i % 2 === 0) {
      console.log(i +" is even");
    }
    i++;
  }


  function square(number) {
    return number * number;
  }
  
  console.log(square(5));



  function createPerson(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
  let person = createPerson("Kairat", 30);
  console.log(person.name); 
  console.log(person.age);
