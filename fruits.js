const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

const getAllFruitsName = () => {
  let allFruits = [];
  fruits.map((x) => {
    allFruits.push(x.fruitName);
  });

  return allFruits;
};

const mappedInput = fruits.reduce((grouped, { fruitType, fruitName }) => {
  if (!grouped.hasOwnProperty(fruitType)) {
    grouped[fruitType] = `Type ${fruitType}: ${fruitName}`;
  } else {
    grouped[fruitType] += `, ${fruitName}`;
  }
  return grouped;
}, {});

const checkStock = fruits.reduce((grouped, { stock, fruitName }) => {
  if (!grouped.hasOwnProperty(stock)) {
    grouped[fruitName] = `Buah ${fruitName}: ${stock}`;
  } else {
    grouped[fruitName] += `, ${fruitName}`;
  }
  return grouped;
}, {});

console.log(getAllFruitsName());
console.log(Object.values(mappedInput));
console.log(Object.values(checkStock));
