import EnterpriseCustomer from "../Customer/EnterpriseCustomer";
import EnterpriseVehicle from "../Vehicle/EnterpriseVehicle";
import type { VehicleType } from "../Vehicle/vehicle.type";
import type { FactoryType } from "./factory.type";
import type { CustomerType } from "../Customer/customer.type";

class EnterpriseFactory implements FactoryType {
  createCustomer(
    name: string,
    age: number,
    vehicles: VehicleType[] = []
  ): CustomerType {
    return new EnterpriseCustomer(name, age, vehicles);
  }
  createVehicle(
    name: string,
    brand: string,
    customer?: CustomerType
  ): VehicleType {
    const plate = Math.random().toString(32).slice(-6);
    const vehicle = new EnterpriseVehicle(name, brand, plate, customer);
    customer && customer.setVehicle(vehicle);
    return vehicle;
  }
}

export default EnterpriseFactory;
