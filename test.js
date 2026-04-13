const { fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');



// Import the function sum from the app.js file
/*const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});*/

////// TEST EURO A DOLLAR //////
test("One euro should be 1.07 dollars", function() {
  
    const euros = 3.5;
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(euros);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBeCloseTo(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

//////////// TEST DOLAR A YEN ///////////////////
test("One dollar should be converted to yen correctly", () => {
  const dollars = 1;

  const result = fromDollarToYen(dollars);

  const expected = (1 / 1.07) * 156.5;

  expect(result).toBeCloseTo(expected);
});

//////////// TEST YEN A POUND ///////////////////

test("Yen should be converted to pounds correctly", () => {
  const yen = 156.5;

  const result = fromYenToPound(yen);

  const expected = (156.5 / 156.5) * 0.87;

  expect(result).toBeCloseTo(expected);
});