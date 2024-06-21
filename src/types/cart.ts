interface Image {
  FileName: string;
  FileExtension: string;
  Image: string;
}

export type QuantityChangeRequestType = {
  ProductId: number;
  UserGuid: string;
};

export type QuantitySetRequestType = QuantityChangeRequestType & {
  Value: number;
};

export interface CartItemType {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Сurrency: string;
  Price: number;
  DiscountedPrice: number;
  Images: Image[];
}
