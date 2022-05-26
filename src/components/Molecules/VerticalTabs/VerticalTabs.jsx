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
    <div className={styles["outerBox"]}>
    <h1 className={styles["header"]}>ADVOCA<span>SIX</span></h1>
    <Box
      sx={{
        
        
        display: "flex",
        height: 400,
        
      }}
    >
      <div className={styles["outerTab"]}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        indicatorColor="secondary"
        sx={{ borderRight: 2, borderColor: "divider" }}
      >
        {data.items.map((item, index) => (
         
          <Tab key={index} label={item.heading} sx={{color: 'white'}} />
          
        ))}
      </Tabs>
      </div>
      <div>
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
      </div>
    </Box>
    </div>
  );
};

export default VerticalTabs;
