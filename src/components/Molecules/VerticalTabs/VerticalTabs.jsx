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

     

      {data.items.map((item, index) => {console.log(); return (<Tabpanel value = {value} index = {index}><h1>{item.desc}</h1></Tabpanel>)})}
    </Box>
  );
};

export default VerticalTabs;
