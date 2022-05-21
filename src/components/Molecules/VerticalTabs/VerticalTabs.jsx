import React from "react";
import { Tabpanel } from "../../ComponentIndex";
import { Tabs, Tab, Box } from "@mui/material";

const VerticalTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data.items[0].heading);
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {data.items.map((item) => (
          <Tab label={item.heading} />
        ))}
      </Tabs>

      <Tabpanel value={value} index={0}>
        <h1>{data.items[0].desc}</h1>
      </Tabpanel>
      <Tabpanel value={value} index={1}>
        <h1>{data.items[1].desc}</h1>
      </Tabpanel>
      <Tabpanel value={value} index={2}>
        <h1>{data.items[2].desc}</h1>
      </Tabpanel>
      <Tabpanel value={value} index={3}>
        <h1>{data.items[3].desc}</h1>
      </Tabpanel>
      <Tabpanel value={value} index={4}>
        <h1>{data.items[4].desc}</h1>
      </Tabpanel>
      <Tabpanel value={value} index={5}>
        <h1>{data.items[5].desc}</h1>
      </Tabpanel>
    </Box>
  );
};

export default VerticalTabs;
