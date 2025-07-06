import { Button, Flex } from "antd";
import { useState, useMemo } from "react";

function ShoppingCart() {
  const defaultItems = [
    { id: 1, name: "苹果", price: 3, quantity: 2 },
    { id: 2, name: "香蕉", price: 2, quantity: 5 },
    { id: 3, name: "橙子", price: 4, quantity: 3 },
  ];
  const [items, setItems] = useState(defaultItems);

  // 使用 useMemo 缓存总价计算
  const total = useMemo(() => {
    console.log("计算总价...");
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]); // 只有 items 变化时，才重新计算

  return (
    <div>
      <h2>🛒 购物车</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - 单价: {item.price} x 数量: {item.quantity}
            <Button
              style={{ marginLeft: "8px" }}
              size="small"
              color="danger"
              onClick={() =>
                setItems((prevItems) =>
                  prevItems.filter((i) => i.id !== item.id)
                )
              }>
              删除
            </Button>
          </li>
        ))}
      </ul>
      <h3>💰 总价: {total}</h3>
      <Flex gap={"8px"} style={{ marginBottom: "16px" }}>
        <Button
          onClick={() =>
            setItems((prevItems) => [
              ...prevItems,
              {
                id: prevItems.length + 1,
                name: "新商品",
                price: 5,
                quantity: 1,
              },
            ])
          }>
          添加新商品
        </Button>
        <Button
          onClick={() =>
            setItems((prevItems) =>
              prevItems.map((item) =>
                item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
              )
            )
          }>
          增加苹果数量
        </Button>
        <Button onClick={() => setItems(defaultItems)}>重置购物车</Button>
      </Flex>
    </div>
  );
}

export default ShoppingCart;
