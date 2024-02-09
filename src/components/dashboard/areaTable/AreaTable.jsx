import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 1,
    name: "Iphone 13 Pro",
    order_id: +Math.floor(+new Date() * Math.random() * 10000)
      .toString()
      .substring(0, 10),
    date: "Jun 29, 2023",
    customer: "Cristiano Penaldo",
    status: "delivered",
    amount: 400,
  },
  {
    id: 2,
    name: "Macbook Pro",
    order_id: +Math.floor(+new Date() * Math.random() * 10000)
      .toString()
      .substring(0, 10),
    date: "Jun 29, 2023",
    customer: "Harry Maguire",
    status: "pending",
    amount: 288,
  },
  {
    id: 3,
    name: "Apple Watch",
    order_id: +Math.floor(+new Date() * Math.random() * 10000)
      .toString()
      .substring(0, 10),
    date: "Jun 29, 2023",
    customer: "Mykhailo Mudryk",
    status: "canceled",
    amount: 500,
  },
  {
    id: 4,
    name: "Microsoft Book",
    order_id: +Math.floor(+new Date() * Math.random() * 10000)
      .toString()
      .substring(0, 10),
    date: "Jun 29, 2023",
    customer: "Darwin Nyunyez",
    status: "delivered",
    amount: 100,
  },
  {
    id: 5,
    name: "Apple Pen",
    order_id: +Math.floor(+new Date() * Math.random() * 10000)
      .toString()
      .substring(0, 10),
    date: "Jun 29, 2023",
    customer: "Badminson",
    status: "delivered",
    amount: 60,
  },
  {
    id: 6,
    name: "Airpods",
    order_id: +Math.floor(+new Date() * Math.random() * 10000)
      .toString()
      .substring(0, 10),
    date: "Jun 29, 2023",
    customer: "El Cekek",
    status: "delivered",
    amount: 80,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>€{dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
