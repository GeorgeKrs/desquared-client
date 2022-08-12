export interface IOrder {
  _id: string;
  fullname: string;
  status: string;
  itemsOrdered: string[];
  mobile: string;
  orderedAt: string;
  paidMethod: string;
  streetAddress: string;
  totalCost_EUR: number;
  currency: string;
  totalCost_OtherCurrency: number;
  comments: string;
}
