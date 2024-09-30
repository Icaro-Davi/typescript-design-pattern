import IndividualVehicle from "../../Vehicle/IndividualVehicle";
import type { CustomerType } from "../../Customer/customer.type";

describe("Individual Vehicle", () => {
  const expectedVehicleName = "V8";
  const expectedBrand = "Tesla";
  const expecterPlate = "AFG3451";
  const expectedDescription = `Individual vehicle: [name:${expectedVehicleName}][brand:${expectedBrand}][plate:${expecterPlate}]`;

  test("should create vehicle", () => {
    const individualVehicle = new IndividualVehicle(
      expectedVehicleName,
      expectedBrand,
      expecterPlate
    );

    expect(individualVehicle.getName()).toStrictEqual(expectedVehicleName);
    expect(individualVehicle.getBrand()).toStrictEqual(expectedBrand);
    expect(individualVehicle.getPlate()).toStrictEqual(expecterPlate);
    expect(individualVehicle.getDescription()).toStrictEqual(
      expectedDescription
    );
    expect(individualVehicle.getCustomer()).toBeUndefined();
  });

  test("should link customer to vehicle", () => {
    const expectedCustomerName = "John Doe";
    const expectedCustomer = {
      getName: jest.fn().mockReturnValueOnce(expectedCustomerName),
    } as unknown as CustomerType;

    const individualVehicle = new IndividualVehicle(
      expectedVehicleName,
      expectedBrand,
      expecterPlate,
      expectedCustomer
    );

    expect(individualVehicle.getDescription()).toStrictEqual(
      expectedDescription.concat(`[customer:${expectedCustomerName}]`)
    );
  });
});
