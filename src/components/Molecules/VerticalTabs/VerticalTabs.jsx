import React from "react";
import { Tabpanel } from "../../ComponentIndex";
import { Tabs, Tab, Box } from "@mui/material";
import styles from './VerticalTabs.Module.scss';
import Typography from '@mui/material/Typography';

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
        height: 300,
        
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
        {data.items.map((item, index) => (
         
          <Tab key={index} label={item.heading} />
          
        ))}
      </Tabs>

      {data.items.map((item, index) => {
        
        return (
          <Tabpanel
            key={index}
            value={value}
            subHeading={item.subHeading}
            index={index}
          >
            {console.log(item.subHeading)}
            
            
            

           
            {item.desc}
           

          </Tabpanel>
        );
      })}
    </Box>
  );
};

export default VerticalTabs;
