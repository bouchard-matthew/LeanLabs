export interface Product {
  category: string;
  description: string;
  flavors: string[];
  longDescription: string;
  price: string;
  quantity: number[];
  stock: number;
  title: string;
}

export interface APIProductDoc {
  name: string;
  createdTime: string;
  updateTime: string;
  fields: {
    category: {
      stringValue: string;
    };
    description: {
      stringValue: string;
    };
    flavors: {
      arrayValue: [
        {
          stringValue: string;
        }
      ];
    };
    longDescription: {
      stringValue: string;
    };
    price: {
      stringValue: string;
    };
    quantity: {
      arrayValue: [
        {
          values: {
            integerValue: string;
          };
        }
      ];
    };
    stock: {
      integerValue: string;
    };
    title: {
      stringValue: string;
    };
  };
}
