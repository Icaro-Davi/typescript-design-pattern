import type { CustomerType } from "../Customer/customer.type";

export type VehicleType = {
    getName(): string;
    getBrand(): string;
    getPlate():string;
    getCustomer(): CustomerType | undefined;
    getDescription(): string;
}