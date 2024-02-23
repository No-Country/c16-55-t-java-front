export interface DcProfileEdit {
  customerData?: CustomerData;
  addressDTO?: AddressDTO;
}

interface CustomerData {
  firstName?: string;
  lastName?: string;
  contactNumber?: string;
}

interface AddressDTO {
  addressId?: number;
  city?: string;
  country?: string;
  zipCode?: string;
  streetName?: string;
  streetNumber?: number;
  customerId?: number;
}
