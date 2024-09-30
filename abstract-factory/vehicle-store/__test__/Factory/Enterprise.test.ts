import EnterpriseFactory from "../../Factory/EnterpriseFactory";
import EnterpriseCustomer from "../../Customer/EnterpriseCustomer";
import EnterpriseVehicle from "../../Vehicle/EnterpriseVehicle";

jest.mock("../../Customer/EnterpriseCustomer.ts");
jest.mock("../../Vehicle/EnterpriseVehicle.ts");

describe("Enterprise Factory", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should create customer", () => {
    const expectedCustomer = {
      name: "John Doe",
      age: 22,
      vehicles: [],
    };
    const enterpriseFactory = new EnterpriseFactory();

    expect(
      enterpriseFactory.createCustomer(
        expectedCustomer.name,
        expectedCustomer.age,
        expectedCustomer.vehicles
      )
    ).toBeInstanceOf(EnterpriseCustomer);

    expect(EnterpriseCustomer).toHaveBeenCalledWith(
      expectedCustomer.name,
      expectedCustomer.age,
      expectedCustomer.vehicles
    );
  });

  test("should create vehicle", () => {
    const expectedVehicle = {
      name: "Test",
      brand: "Test",
      customer: EnterpriseCustomer.prototype,
      plate: "TEST123",
    };
    const enterpriseFactory = new EnterpriseFactory();

    const originalSlice = String.prototype.slice;
    String.prototype.slice = jest
      .fn()
      .mockReturnValueOnce(expectedVehicle.plate);

    const vehicle = enterpriseFactory.createVehicle(
      expectedVehicle.name,
      expectedVehicle.brand,
      expectedVehicle.customer
    );

    String.prototype.slice = originalSlice;

    expect(vehicle).toBeInstanceOf(EnterpriseVehicle);

    expect(EnterpriseVehicle).toHaveBeenCalledWith(
      expectedVehicle.name,
      expectedVehicle.brand,
      expectedVehicle.plate,
      expectedVehicle.customer
    );

    expect(expectedVehicle.customer.setVehicle).toHaveBeenCalledWith(vehicle);
  });
});
