export type MockedDataCategory = "production" | "staging" | "test";

export interface MockedData {
  uuid: string;
  ownerDetails: OwnerDetail;
  deviceDatas: DeviceDatas;
  //   category: Category;
  //   category: number;
  // category: MockedDataCategory;
  category: string;
}

// interface Category {
//   production: string;
//   staging: string;
//   test: string;
// }

// interface Category {
//   production: number;
//   staging: number;
//   test: number;
// }
interface OwnerDetail {
  firstName: string;
  lastName: string;
  email: string;
  firebaseUuid: string;
  ownerUuid: string;
}

interface DeviceDatas {
  deviceType: string;
  deviceName: string;
  robotType: string;
  isEnabled: boolean;
  deviceUuid: string;
  serialNumber: string;
  macRobot: string;
  macBase: string;
  firmwareVersion: string;
}
