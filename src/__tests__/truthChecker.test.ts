describe("checking for truth", () => {
  test("are the littleNumbers < bigNumbers?", () => {
    // here are the two arrays to populate in this test.
    // all littleNumbers entries should be smaller than any bigNumbers entry
    // both arrays should have the same length.
    let littleNumbers: Array<number> = [1, 2, 3, 4]; //numbers smaller than bigNumbers.
    let bigNumbers: Array<number> = [6, 7, 8, 9]; //numbers bigger than smallNumbers.

    for (let i = 0; i < littleNumbers.length && i < bigNumbers.length; i++) {
      expect(littleNumbers[i]).toBeLessThan(bigNumbers[i]);
    }
  });
  test("wordToCheck is a palindrome, case and everything", () => {
    let wordToCheck = "TacocaT"; // yeah, replace the value to pass the test. //value replaced with a palindrome with the correct case.
    expect(wordToCheck.split("").reverse().join("")).toBe(wordToCheck);
  });
  test("true", () => {
    let val = !false; //set this to a passing value //This value appears to only be true or !false.
    expect(val).toBeTruthy();
  });
  test("there is a sequence to this test", () => { //all tests below pass with the following array
    let values: Array<any> = ["no", true, 1, null]; // set values here - the array will take any type or combo of types.
    for (let i = 0; i < values.length; i++) {
      if (i == 0) expect(typeof values[i]).toBe("string"); //set as "no"
      else if (i == 1) expect(typeof values[i]).toBe("boolean"); //set as true
      else if (i == 2) expect(typeof values[i]).toBe("number"); //set as 1
      else if (i == 3) expect(values[i]).toBeNull(); //set as null
      else expect(false).toBe(true); //not adding anything to the array for this because false cannot == true
    }
  });
});
