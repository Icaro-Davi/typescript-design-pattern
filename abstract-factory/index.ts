import EnterpriseFactory from "./vehicle-store/Factory/EnterpriseFactory";
import IndividualFactory from "./vehicle-store/Factory/IndividualFactory";

const individualFactory = new IndividualFactory();

const individualCustomer = individualFactory.createCustomer("John Doe", 27);
individualFactory.createVehicle(
  "individualVehicleOne",
  "Opala",
  individualCustomer
);
individualFactory.createVehicle(
  "individualVehicleTwo",
  "Tesla",
  individualCustomer
);
individualFactory.createVehicle(
  "individualVehicleThree",
  "Fiat",
  individualCustomer
);
console.log(individualCustomer.getDescription());

const enterpriseFactory = new EnterpriseFactory();
const enterpriseVehicleOne = enterpriseFactory.createVehicle(
  "enterpriseVehicleOne",
  "CyberTruck"
);
console.log(enterpriseVehicleOne.getDescription());

const enterpriseCustomer = enterpriseFactory.createCustomer("Bobs", 6);
enterpriseFactory.createVehicle(
  "enterpriseVehicleTwo",
  "DigitalBus",
  enterpriseCustomer
);
console.log(enterpriseCustomer.getDescription());
