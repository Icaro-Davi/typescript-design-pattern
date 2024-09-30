import IndividualCustomer from "../Customer/IndividualCustomer";
import IndividualVehicle from "../Vehicle/IndividualVehicle";
import type { VehicleType } from "../Vehicle/vehicle.type";
import type { FactoryType } from "./factory.type";
import type { CustomerType } from "../Customer/customer.type";

class IndividualFactory implements FactoryType {
  createCustomer(
    name: string,
    age: number,
    vehicles: VehicleType[] = []
  ): CustomerType {
    return new IndividualCustomer(name, age, vehicles);
  }
  createVehicle(
    name: string,
    brand: string,
    customer: CustomerType
  ): VehicleType {
    const plate = Math.random().toString(32).slice(-6);
    const vehicle = new IndividualVehicle(name, brand, plate, customer);
    customer.setVehicle(vehicle);
    return vehicle;
  }
}

export default IndividualFactory;
