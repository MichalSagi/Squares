import React from "react";
import { ItemsContext } from "../contexts/ItemsProvider";
import { Table, Typography } from "antd";

export default function ShoppingCart() {
  const items = JSON.parse(localStorage.getItem("squares-shopping"));
  const { Text } = Typography;

  //   rowKey={items.indexOf(item)}}
  const columns = [
    {
      title: "Square",
      dataIndex: "style",
    },
    {
      dataIndex: "img",
      render: (theImageURL) => <img alt={theImageURL} src={theImageURL} style={{ height: "3%", width: "auto" }} />,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={items}
        bordered
        summary={() => {
          let totalPrice = 0;
          items.forEach((item) => {
            totalPrice += item.price;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell>Total</Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Text style={{color: '#722ed1', fontWeight: 600, alignContent: 'flex-end'}}>{totalPrice} </Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
        style={{ display: "flex", justifyContent: "center", bordercollapse: "separate", borderSpacing: "0 1em" }}
      />

      {/* <Table
        key={items.index}
        columns={columns}
        dataSource={items}
        pagination={false}
        bordered
        summary={(pageData) => {
          let totalPrice = 0;
          pageData.forEach(({ price }) => {
            totalPrice += price;
          });

            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell>Total</Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Text type="danger">{totalPrice}</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
                {/* <Table.Summary.Row> */}
      {/* <Table.Summary.Cell>Balance</Table.Summary.Cell>
                  <Table.Summary.Cell colSpan={2}>
                    <Text type="danger">{totalBorrow - totalRepayment}</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row> */}
      {/* </>
            );
        }}
      /> */}
    </div>
  );
}
