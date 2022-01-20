import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import AuthContainer from "../components/auth/AuthContainer";
import Center from "../components/utils/Center";

interface Props {}

const tabIdToURL: { [id: number]: string } = {
  0: "login",
  1: "register",
};

const Login = ({}: Props) => {
  // getting and setting URL params
  const [searchParams, setSearchParams] = useSearchParams();

  // get action from URL
  const action: string = searchParams.get("action") || "login";

  // used to set initial state
  let indexFromUrl = 0;
  if (action === "register") {
    indexFromUrl = 1;
  }

  // handle Tab Panel
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
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab sx={{ px: { lg: 20, xs: 6 } }} label="Login" />
            <Tab sx={{ px: { lg: 16, xs: 6 } }} label="Register" />
          </Tabs>
        </Box>
        {/* login */}
        <TabPanel value={value} index={0}>
          <AuthContainer />
        </TabPanel>
        {/* register */}
        <TabPanel value={value} index={1}>
          <AuthContainer />
        </TabPanel>
      </Box>
    </Center>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
};

export default Login;
