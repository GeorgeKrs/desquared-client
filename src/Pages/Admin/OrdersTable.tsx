import { IProduct } from "../../interfaces/product";

const OrdersTable = () => {
  const orderData: Array<IProduct> = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
      name: "Chicken Burger",
      price: 15.99,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 2,
      imageUrl:
        "https://2aj47i3u0emv3rfnwz2zoyfm-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/foodiesfeed.jpg",
      name: "French Fries",
      price: 12.49,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Appetizers",
    },
    {
      id: 7,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsECMksXtlI8pNIN1JWOQ5-63CvMKlRp42GBItf2zi_I2mwmWKwjcIbApy-7ltF4zmWA&usqp=CAU",
      name: "Sprite 330ml",
      price: 3.5,
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      category: "Drinks",
    },
  ];
  return (
    <div className="mt-5 container table-responsive">
      <h4>Incoming Orders:</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Ordered At</th>
            <th>Status</th>
            <th>Paid Method</th>
            <th>Cost</th>
            <th>Name</th>
            <th>Street Address</th>
            <th>Mobile</th>
            <th>Items</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>11/08/2022 | 13:39</td>
            <td>Pending</td>
            <td>Credit Card</td>
            <td>29.19</td>
            <td>Test User</td>
            <td>Some street address</td>
            <td>6969696969</td>
            <td>
              <>
                {orderData.map((product: IProduct) => (
                  <p className="m-0">{product.name}</p>
                ))}
              </>
            </td>
            <td>Want to be delivered at 15:00</td>
          </tr>
          <tr>
            <th>2</th>
            <td>11/08/2022 | 13:43</td>
            <td>Pending</td>
            <td>Credit Card</td>
            <td>29.19</td>
            <td>Test User</td>
            <td>Some street address</td>
            <td>6969696969</td>
            <td>
              <>
                {orderData.map((product: IProduct) => (
                  <p className="m-0">{product.name}</p>
                ))}
              </>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
