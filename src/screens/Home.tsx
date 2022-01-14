import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Logout from "../components/auth/Logout";
import Center from "../components/utils/Center";
import { auth } from "../config/firebase";

interface Props {}

const Home = ({}: Props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Center>
      <Logout />
    </Center>
  );
};

export default Home;
