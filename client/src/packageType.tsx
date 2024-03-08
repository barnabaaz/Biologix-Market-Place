export interface Packages {
  listOfTest: string[];
  packageName: string;
  testDescription: string;
  price: number;
  packageCategory: string;
  discount?: number;
  discountTag?: boolean;
  id: number;
  selected?: boolean;
  tag?: string;
  approved: string;
  update_url: string;
}

export interface Cart {
  price: number;
  title: string;
  listOfTest?: string[];
  quantity?: number;
  totalPrice?: number;
  id: number;
  category: string;
}
