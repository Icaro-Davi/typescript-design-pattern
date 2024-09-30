import type { VehicleType } from "../Vehicle/vehicle.type";

export type CustomerType = {
  getName(): string;
  getAge(): number;
  getVehicles(): VehicleType[];
  setVehicle(vehicle: VehicleType): number;
  getDescription(): string;
};
