import React from "react";
import { Tabpanel } from "../../ComponentIndex";
import { Tabs, Tab, Box } from "@mui/material";
// import styles from "./VerticalTabs.module.scss";
import Typography from "@mui/material/Typography";
// import Bounce from "react-reveal/Bounce";
// import Slide from "react-reveal/Slide";

const HorizontalTabs = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles["background"]}>
    <div className={styles["outerBox"]}>
      <Bounce>
        <div className={styles["headerContainer"]}>
        <h1 className={styles["header"]}>
          ADVOCA<span>SIX</span>
        </h1>
        </div>
      </Bounce>
      <Slide bottom>
        <Box
          sx={{
            display: "flex",
            height: 400,
          }}
        >
          <div className={styles["outerTab"]}>
            <Tabs
             
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              indicatorColor="secondary"
              sx={{ borderRight: 2, borderColor: "divider" }}
            >
              {data.items.map((item, index) => (
                <Tab key={index} label={item.heading} sx={{ color: "white" }} />
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
      </Slide>
    </div>
    </div>
  );
};

export default HorizontalTabs;
