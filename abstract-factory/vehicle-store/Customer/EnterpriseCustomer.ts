import { VehicleType } from "../Vehicle/vehicle.type";
import { CustomerType } from "./customer.type";

class EnterpriseCustomer implements CustomerType {
  constructor(
    private name: string,
    private age: number,
    private vehicles: VehicleType[]
  ) {}

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getVehicles(): VehicleType[] {
    return this.vehicles;
  }

  setVehicle(vehicle: VehicleType): number {
    return this.vehicles.push(vehicle) - 1;
  }

  getDescription(): string {
    let vehiclesDescription = this.vehicles.reduce(
      (description, vehicle) =>
        description.concat(`\n-- ${vehicle.getDescription()}`),
      ""
    );
    return `Enterprise name is ${this.name} and it's active since ${
      new Date().getFullYear() - this.age
    }, this enterprise have ${this.vehicles.length} vehicles.${vehiclesDescription}`;
  }
}

export default EnterpriseCustomer;
