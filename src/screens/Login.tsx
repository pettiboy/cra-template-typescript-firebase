import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import AuthContainer from "../components/auth/AuthContainer";
import Center from "../components/utils/Center";

interface Props {}

const tabIdToURL: { [id: string]: string } = {
  0: "login",
  1: "register",
};

const Login = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const action: string = searchParams.get("action") || "login";
  let indexFromUrl = 0;
  if (action === "register") {
    indexFromUrl = 1;
  }
  const [value, setValue] = React.useState(indexFromUrl);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const action = tabIdToURL[newValue];
    setSearchParams({ action });
  };

  return (
    <Center height={90}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        boxShadow={2}
        margin={3}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab
              sx={{ px: { lg: 20, xs: 6 } }}
              label="Login"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ px: { lg: 16, xs: 6 } }}
              label="Register"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        {/* login */}
        <TabPanel value={value} index={0}>
          <AuthContainer />
        </TabPanel>
        {/* register */}
        <TabPanel value={value} index={1}>
          <AuthContainer />
          <Typography sx={{ mt: 4, textAlign: "center" }}>
            {"Login Register same he hai :)"}
          </Typography>
        </TabPanel>
      </Box>
    </Center>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

export default Login;
