import IndividualFactory from "../../Factory/IndividualFactory";
import IndividualCustomer from "../../Customer/IndividualCustomer";
import IndividualVehicle from "../../Vehicle/IndividualVehicle";

jest.mock("../../Customer/IndividualCustomer.ts");
jest.mock("../../Vehicle/IndividualVehicle.ts");

describe("Individual Factory", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should create customer", () => {
    const expectedCustomer = {
      name: "John Doe",
      age: 22,
      vehicles: [],
    };
    const individualFactory = new IndividualFactory();

    expect(
      individualFactory.createCustomer(
        expectedCustomer.name,
        expectedCustomer.age,
        expectedCustomer.vehicles
      )
    ).toBeInstanceOf(IndividualCustomer);

    expect(IndividualCustomer).toHaveBeenCalledWith(
      expectedCustomer.name,
      expectedCustomer.age,
      expectedCustomer.vehicles
    );
  });

  test("should create vehicle", () => {
    const expectedVehicle = {
      name: "Test",
      brand: "Test",
      customer: IndividualCustomer.prototype,
      plate: "TEST123",
    };
    const individualFactory = new IndividualFactory();

    const originalSlice = String.prototype.slice;
    String.prototype.slice = jest
      .fn()
      .mockReturnValueOnce(expectedVehicle.plate);

    const vehicle = individualFactory.createVehicle(
      expectedVehicle.name,
      expectedVehicle.brand,
      expectedVehicle.customer
    );

    String.prototype.slice = originalSlice;

    expect(vehicle).toBeInstanceOf(IndividualVehicle);

    expect(IndividualVehicle).toHaveBeenCalledWith(
      expectedVehicle.name,
      expectedVehicle.brand,
      expectedVehicle.plate,
      expectedVehicle.customer
    );

    expect(expectedVehicle.customer.setVehicle).toHaveBeenCalledWith(vehicle);
  });
});
