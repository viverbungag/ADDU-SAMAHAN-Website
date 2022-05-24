import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "./Tabpanel.module.scss";

export default function TabPanel(props) {
  const { children, value, index, subHeading} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
     
    >
      {value === index && (
  
        <Box sx = {{p : 3}}>
          
          <h2 className={styles["subHeading"]}>{subHeading}</h2>
          <Typography className={styles["content"]}>{children}</Typography>
          
        </Box>
       
      )}
    </div>
  );
}
