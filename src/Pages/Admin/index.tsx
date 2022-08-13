import { useState, useEffect } from "react";
import { response_categories } from "../../constants/response_categories";
import { IOrder } from "../../interfaces/order";
import OrdersTable from "./OrdersTable";
import openSocket from "socket.io-client";

const Admin = () => {
  const [orderData, setOrderData] = useState<IOrder[]>([]);

  const [loader, setLoader] = useState<boolean>(true);
  const [newOrder, setNewOrder] = useState<boolean>(false);
  const [errorFatchingData, setErrorFatchingData] = useState<string>("");

  const socket = openSocket("http://localhost:3002");

  const fetchOrders = async () => {
    await fetch("http://127.0.0.1:3001/orders")
      .then((res) => res.json())
      .then((data) => setOrderData(data))
      .finally(() => {
        setNewOrder(false);
        setLoader(false);
      })
      .catch(() => setErrorFatchingData(response_categories.ERROR));
  };

  useEffect(() => {
    if (loader || newOrder) {
      fetchOrders();
    }

    socket.on("orders", (newOrder: any) => {
      setNewOrder(true);
    });
  }, [newOrder]);

  return (
    <div>
      {loader && (
        <div className="mt-5 d-flex justify-content-center">
          <div className="my-auto spinner-border"></div>
          <div className="my-auto mx-1">
            <b>Fetching orders...</b>
          </div>
        </div>
      )}

      {!loader && <OrdersTable orderData={orderData} />}

      {!loader && errorFatchingData === response_categories.ERROR && (
        <div
          className="alert alert-danger d-flex align-items-center justify-content-center"
          style={{ marginTop: "30vh" }}
        >
          Failed to fetch order data. Please try again later.
        </div>
      )}
    </div>
  );
};

export default Admin;
