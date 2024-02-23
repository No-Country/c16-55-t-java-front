export interface IDCProfile {
  id?: number;
  firstName: string;
  lastName: string;
  doi: string;
  typeDoi: string;
  email: string;
  phoneNumber: string;
  password?: string;
  address: Address;
}
interface Address {
  customerId?: number;
  addressId?: number;
  country: string;
  city: string;
  state?: string;
  zipCode: string;
  streetName: string;
  streetNumber: number;
  deleted?: boolean;
}
