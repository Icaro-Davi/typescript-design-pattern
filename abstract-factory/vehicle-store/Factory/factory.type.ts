import type { CustomerType } from "../Customer/customer.type";
import type { VehicleType } from "../Vehicle/vehicle.type";

export type FactoryType = {
    createCustomer(name: string, age: number, vehicles: VehicleType[]): CustomerType;
    createVehicle(name: string, brand: string, customer?: CustomerType): VehicleType;
}