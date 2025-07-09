import { Typography } from "antd";
import React from "react";

const { Title } = Typography;
const Page = React.memo(() => {
  return (
    <Typography>
      <Title>Introduction</Title>
    </Typography>
  );
});

export default Page;
