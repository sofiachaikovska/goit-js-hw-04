function isEnoughCapacity(products, containerSize) {
  const values = Object.values(products);
  let totalProducts = 0;

  for (let i = 0; i < values.length; i++) {
    totalProducts += values[i];
  }

  return totalProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));
