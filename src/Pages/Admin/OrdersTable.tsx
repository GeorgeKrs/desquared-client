import { IOrder } from "../../interfaces/order";

interface Props {
  orderData: IOrder[];
}

const OrdersTable = ({ orderData }: Props) => {
  return (
    <div className="mt-5 p-5 table-responsive" style={{ fontWeight: "bolder" }}>
      <div className="d-flex justify-content-between">
        <h4>Incoming Orders:</h4>
        <button className="btn btn-outline-dark">Fetch Orders</button>
      </div>
      <table className="mt-2 table table-striped border border-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Ordered At</th>
            <th>Status</th>
            <th>Paid Method</th>
            <th>Cost (EUR)</th>
            <th>Cost (Paid Currency)</th>
            <th>Name</th>
            <th>Street Address</th>
            <th>Mobile</th>
            <th>Items</th>
            <th>Comments</th>
          </tr>
        </thead>

        <tbody>
          {orderData.map((order, index) => (
            <tr
              key={order._id}
              className={
                order.status === "Pending"
                  ? "table-warning border border-dark"
                  : order.status === "Completed"
                  ? "table-success border border-dark"
                  : ""
              }
            >
              <th>{index + 1}</th>
              <td>{order.orderedAt.replace("T", " | ").replace(".", " ")}</td>
              <td>{order.status}</td>
              <td>{order.paidMethod}</td>
              <td>{order.totalCost_EUR.toFixed(2)}</td>
              <td>
                {order.totalCost_OtherCurrency.toFixed(2)} ({order.currency})
              </td>
              <td>{order.fullname}</td>
              <td>{order.streetAddress}</td>
              <td>{order.mobile}</td>
              <td>
                <ol>
                  {order.itemsOrdered.map((food) => (
                    <li className="" key={food}>
                      {food}
                    </li>
                  ))}
                </ol>
              </td>
              <td>{order.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
