import EnterpriseCustomer from "../../Customer/EnterpriseCustomer";
import type { VehicleType } from "../../Vehicle/vehicle.type";

describe("CustomerEnterprise", () => {
  const expectedCustomerName = "John Doe";
  const expectedAge = 10;
  const expectedYear = new Date().getFullYear() - expectedAge;

  test("should create", () => {
    const expectedVehicles: VehicleType[] = [];
    const expectedDescription = `Enterprise name is ${expectedCustomerName} and it's active since ${expectedYear}, this enterprise have 0 vehicles.`;

    const enterpriseCustomer = new EnterpriseCustomer(
      expectedCustomerName,
      expectedAge,
      expectedVehicles
    );

    expect(enterpriseCustomer.getName()).toStrictEqual(expectedCustomerName);
    expect(enterpriseCustomer.getAge()).toStrictEqual(expectedAge);
    expect(enterpriseCustomer.getVehicles()).toStrictEqual(expectedVehicles);
    expect(enterpriseCustomer.getDescription()).toStrictEqual(
      expectedDescription
    );
  });

  test("should add vehicles", () => {
    const vehicleOne: VehicleType = {
      getDescription: jest.fn().mockReturnValueOnce("test-one"),
    } as unknown as VehicleType;
    const vehicleTwo: VehicleType = {
      getDescription: jest.fn().mockReturnValueOnce("test-two"),
    } as unknown as VehicleType;
    const vehicleThree: VehicleType = {
      getDescription: jest.fn().mockReturnValueOnce("test-three"),
    } as unknown as VehicleType;

    const enterpriseCustomer = new EnterpriseCustomer(
      expectedCustomerName,
      expectedAge,
      [vehicleOne]
    );

    expect(enterpriseCustomer.setVehicle(vehicleTwo)).toStrictEqual(1);
    expect(enterpriseCustomer.setVehicle(vehicleThree)).toStrictEqual(2);
    expect(enterpriseCustomer.getDescription()).toStrictEqual(
      `Enterprise name is ${expectedCustomerName} and it's active since ${expectedYear}, this enterprise have 3 vehicles.\n-- test-one\n-- test-two\n-- test-three`
    );
  });
});
