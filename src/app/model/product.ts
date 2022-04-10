import * as internal from 'stream';

export class Product {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  dateCreated: Date | undefined;
  dateUpdated: Date | undefined;
  isActive: boolean | undefined;
}
