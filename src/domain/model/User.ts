export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  recentPurchases: string[];
}
