import calculator from "../calculator";

let u: undefined = undefined;
let n: null = null;

let dataset: {x: number, y: number, method: string}[] = [ 
  { x: 5, y: 10, method: "add" },           //x+y= 15
  { x: 5, y: 10, method: "subtract" },      //x-y= -5
  { x: 5, y: 10, method: "multiply" },      //x*y= 50
  { x: 5, y: 10, method: "divide" },        //x/y= 1/2
  { x: -12, y: 10000, method: "add" },      //x+y= 9988
  { x: -12, y: 10000, method: "subtract" }, //x-y= -10012
  { x: -12, y: 10000, method: "multiply" }, //x*y= -120000
  { x: -12, y: 10000, method: "divide" },   //x/y= -0.0012
  { x: 42, y: 0, method: "add" },           //x+y= 42
  { x: 42, y: 0, method: "subtract" },      //x-y= 42
  { x: 42, y: 0, method: "multiply" },      //x*y= 0
  { x: 42, y: 0, method: "divide" },        //x/y= NaN, undefined, or null?
  { x: 81, y: 227, method: "add" },         //x+y= 308
  { x: 81, y: 227, method: "subtract" },    //x-y= -148
  { x: 81, y: 227, method: "multiply" },    //x*y= 18387
  { x: 81, y: 227, method: "divide" },      //x/y= 81/227
];

//declaring variables from the dataset array method
var addIt = "add";
var subIt = "subtract";
var multIt = "multiply";
var divIt = "divide";
//declaring new array with the variables above
var checkIt = [addIt, subIt, multIt, divIt];

//using a switch to find the method string in an array
describe("Calculator Attempt 1 - using a switch", () => {
  test("Checking for the method", () => {
    for (var i = 0; i < checkIt.length; i++){
      dataset.forEach((item, i) => {
        //using switch with the method string array
        switch (checkIt[i]) {
          case ("add"):
            //adding x and y in a dataset and comparing it to the calcuator.add method
            expect (dataset[i].x + dataset[i].y).toBe(calculator.add(dataset[i].x, dataset[i].y));
            break;
          case ("subtract"):
            //subtracting x from y in a dataset and comparing it to the calcuator.subtract method
            expect (dataset[i].x - dataset[i].y).toBe(calculator.subtract(dataset[i].x, dataset[i].y));
            break;
          case ("divide"):
            //x divided by y in a dataset and comparing it to the calcuator.divide method
            expect (dataset[i].x / dataset[i].y).toBe(calculator.divide(dataset[i].x, dataset[i].y));
            break;
          case ("multiply"):
            //multiplying x and y in a dataset and comparing it to the calcuator.multiply method
            expect (dataset[i].x * dataset[i].y).toBe(calculator.multiply(dataset[i].x, dataset[i].y));
            break;
          default:
            break;
        };
      });
    };
  });
});

//coded the following 2 tests out before I realized I need to do a switch
//decided to leave them in since I took the time to code them
describe("Calculator Attempt 2 - learning stuff", () => {
  test("Check the method", () => {
    //for each of the values from a dataset loop it the length of the dataset
    dataset.forEach((value, i) => {
      for (let i = 0; i < dataset.length; i++) {
        //declaring an object and filling it with the info from a dataset
        var {x, y, method} = dataset[i];
        //if method matches the string, 
        //fill calculation with calculator.add method
        //check x + y and compare it to the calculation
        if (dataset[i].method.match("add")) {
          var calculation = calculator.add(x, y);
          expect(x + y).toBe(calculation);
        }
        else { //else, do the same with subtract
          if (dataset[i].method.match("subtract")) {
            var calculation = calculator.subtract(x, y);
            expect(x - y).toBe(calculation);
          }
          else { //else, do the same with multiply
            if (dataset[i].method.match("multiply")) {
              var calculation = calculator.multiply(x, y);
              expect(x * y).toBe(calculation);
            }
            else { //else, do the same with divide
              var calculation = calculator.divide(x, y);
              expect(x / y).toBe(calculation);
            };
          };
        };
      };
    });
  });
});

//the second test I worked out before I did the switch,
//similar to the one above
describe("Calculator Attempt 3 - learning more stuff", () => {
  test("Check the method", () => {
    dataset.forEach((item, i) => {
      if(dataset[i].method.match("add")) {
        var a = dataset[i].x; //instead of creating an object, declaring a and b for x and y
        var b = dataset[i].y;
        //a plus b should be the same as the calculator.add method with x and y
        expect (a + b).toBe(calculator.add(dataset[i].x, dataset[i].y));
      } 
      else{ //else, do the same with subtract
        if(dataset[i].method.match("subtract")) {
          var a = dataset[i].x;
          var b = dataset[i].y;
          expect (a - b).toBe(calculator.subtract(dataset[i].x, dataset[i].y));
        }
        else{ //else, do the same with multiply
          if(dataset[i].method.match("multiply")) {
            var a = dataset[i].x;
            var b = dataset[i].y;
            expect (a * b).toBe(calculator.multiply(dataset[i].x, dataset[i].y));
          }
          else{ //else do the same with divide
            var a = dataset[i].x;
            var b = dataset[i].y;
            expect (a / b).toBe(calculator.divide(dataset[i].x, dataset[i].y));
          };
        };
      };
    });
  });
});