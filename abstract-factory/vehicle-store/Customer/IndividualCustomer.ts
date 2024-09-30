import { VehicleType } from "../Vehicle/vehicle.type";
import { CustomerType } from "./customer.type";

class IndividualCustomer implements CustomerType {
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
    return `Individual name is ${this.name} and have ${this.age} years old, this individual have ${this.vehicles.length} vehicles.${vehiclesDescription}`;
  }
}

export default IndividualCustomer;
