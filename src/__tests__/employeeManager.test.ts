import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });
  test("can add at least one new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person2",
      phone: "1234567899",
      title: "test result2",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("test person2");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person2");
    expect(employee.phone).toEqual("1234567899");
    expect(employee.title).toEqual("test result2");
  });
  test("can cancel out of editing an employee", async () => {
    //selectEmployeeByName 
    //then editEmployee 
    //then cancelChanges
    //then selectEmployeeByName
    //then expect changes are not present
    await em.selectEmployeeByName("Lois Brewer");
    await em.editEmployee({
      name: "test person3",
      phone: "1234567898",
      title: "test result3",
    });
    await em.cancelChanges();
    await em.selectEmployeeByName("Lois Brewer");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("Lois Brewer");
    expect(employee.phone).toEqual("8749823456");
    expect(employee.title).toEqual("Sales Manager");
  });
  test("can navigate away without saving, new changes don't persist", 
  async () => {
    //selectEmployeeByName(a) 
    //then editEmployee(a) 
    //then selectEmployeeByName(b)
    //then selectEmployeeByName(a) 
    //then getEmployeeInfo(a)
    //then expect changes are not present
    await em.selectEmployeeByName("Lois Brewer");
    await em.editEmployee({
      name: "test person3",
      phone: "1234567898",
      title: "test result3",
    });
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("Lois Brewer");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("Lois Brewer");
    expect(employee.phone).toEqual("8749823456");
    expect(employee.title).toEqual("Sales Manager");
  });
});
