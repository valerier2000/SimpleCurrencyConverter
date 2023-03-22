function switchTheValues(cats) {
  cats.forEach((objects) => {
    let catName = objects.owner;
    let breed = objects.breed;
    let owner = objects.name;
    console.log(`${owner} has a cat named ${catName}, whose breed is ${breed}`);
  });
}

// switchTheValues([
//   { name: "Paul", breed: "Siamese", owner: "Bella" },
//   {
//     name: "Lucia",
//     breed: "Norwegian Forest",
//     owner: "Lilly",
//   },
// ]);

// Paul has a cat named Bella, whose breed is Siamese
// Lucia has a cat named Lilly, whose breed is Norwegian Forest
