import IndividualCustomer from "../../Customer/IndividualCustomer";
import type { VehicleType } from "../../Vehicle/vehicle.type";

describe("CustomerIndividual", () => {
  const expectedCustomerName = "John Doe";
  const expectedAge = 10;

  test("should create", () => {
    const expectedVehicles: VehicleType[] = [];
    const expectedDescription = `Individual name is ${expectedCustomerName} and have ${expectedAge} years old, this individual have 0 vehicles.`;

    const individualCustomer = new IndividualCustomer(
      expectedCustomerName,
      expectedAge,
      expectedVehicles
    );

    expect(individualCustomer.getName()).toStrictEqual(expectedCustomerName);
    expect(individualCustomer.getAge()).toStrictEqual(expectedAge);
    expect(individualCustomer.getVehicles()).toStrictEqual(expectedVehicles);
    expect(individualCustomer.getDescription()).toStrictEqual(
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

    const individualCustomer = new IndividualCustomer(
      expectedCustomerName,
      expectedAge,
      [vehicleOne]
    );

    expect(individualCustomer.setVehicle(vehicleTwo)).toStrictEqual(1);
    expect(individualCustomer.setVehicle(vehicleThree)).toStrictEqual(2);
    expect(individualCustomer.getDescription()).toStrictEqual(
      `Individual name is ${expectedCustomerName} and have ${expectedAge} years old, this individual have 3 vehicles.\n-- test-one\n-- test-two\n-- test-three`
    );
  });
});
