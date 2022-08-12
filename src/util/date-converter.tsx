export const dateConverter = (date: string) => {
  let temp: any = date;
  temp = temp.split("T");

  const tempHour = temp[1].split(":");
  const tempDate: any = temp[0];

  let orderHour = parseInt(tempHour[0]);
  orderHour += 3;

  const orderFullDate =
    orderHour.toString() + ":" + tempHour[1] + " | " + tempDate;

  return <td>{orderFullDate}</td>;
};
