import { CustomerType } from "../Customer/customer.type";
import { VehicleType } from "./vehicle.type";

class EnterpriseVehicle implements VehicleType {
  constructor(
    private name: string,
    private brand: string,
    private plate: string,
    private customer?: CustomerType
  ) {}

  getName(): string {
    return this.name;
  }
  getBrand(): string {
    return this.brand;
  }
  getPlate(): string {
    return this.plate;
  }
  getCustomer(): CustomerType | undefined {
    return this.customer;
  }
  getDescription(): string {
    let description = `Enterprise vehicle: [name:${this.name}][brand:${this.brand}][plate:${this.plate}]`;
    if (this.customer) {
      description = description.concat(`[customer:${this.customer.getName()}]`);
    }
    return description;
  }
}

export default EnterpriseVehicle;
