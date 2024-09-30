import EnterpriseVehicle from "../../Vehicle/EnterpriseVehicle";
import type { CustomerType } from "../../Customer/customer.type";

describe("Enterprise Vehicle", () => {
  const expectedVehicleName = "Truck";
  const expectedBrand = "Brand";
  const expecterPlate = "AFG3451";
  const expectedDescription = `Enterprise vehicle: [name:${expectedVehicleName}][brand:${expectedBrand}][plate:${expecterPlate}]`;

  test("should create vehicle", () => {
    const enterpriseVehicle = new EnterpriseVehicle(
      expectedVehicleName,
      expectedBrand,
      expecterPlate
    );

    expect(enterpriseVehicle.getName()).toStrictEqual(expectedVehicleName);
    expect(enterpriseVehicle.getBrand()).toStrictEqual(expectedBrand);
    expect(enterpriseVehicle.getPlate()).toStrictEqual(expecterPlate);
    expect(enterpriseVehicle.getDescription()).toStrictEqual(
      expectedDescription
    );
    expect(enterpriseVehicle.getCustomer()).toBeUndefined();
  });

  test("should link customer to vehicle", () => {
    const expectedCustomerName = "John Doe";
    const expectedCustomer = {
      getName: jest.fn().mockReturnValueOnce(expectedCustomerName),
    } as unknown as CustomerType;

    const enterpriseVehicle = new EnterpriseVehicle(
      expectedVehicleName,
      expectedBrand,
      expecterPlate,
      expectedCustomer
    );

    expect(enterpriseVehicle.getDescription()).toStrictEqual(
      expectedDescription.concat(`[customer:${expectedCustomerName}]`)
    );
  });
});
