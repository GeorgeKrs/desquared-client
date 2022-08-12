import { IOrder } from "../../interfaces/order";
import { dateConverter } from "../../util/date-converter";

interface Props {
  orderData: IOrder[];
}

const OrdersTable = ({ orderData }: Props) => {
  return (
    <div
      className="mt-5 p-5 table-responsive text-center"
      style={{ fontWeight: "bolder" }}
    >
      <h4>Incoming Orders:</h4>

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
              {dateConverter(order.orderedAt)}
              {/* <td>{() => dateConverter(order.orderedAt)}</td> */}
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
