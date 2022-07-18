import { ReactQueryDevtools } from "react-query/devtools";
import Routes from "./Routes";
import useUser from "../hooks/useUser";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { queryClient } from "../reactQuery/queryClient";
import Header from "../components/header/Header";
import LeftSideBar from "./../components/leftSideBar/LeftSideBar";
import Box from "./../components/chakraUi/Box";
import { useIsMutating } from "react-query";
import LoadingModal from "../components/commom/LoadingModal";

function App() {
  const { user, clearUser } = useUser();
  const logoutUser = useRef();
  let location = useLocation();

  useEffect(() => {
    if (user) {
      const tokenExpirationTime =
        (user.expiresIn - Math.floor(Date.now() / 1000)) * 1000;
      logoutUser.current = setTimeout(clearUser, tokenExpirationTime);

      return () => {
        clearTimeout(logoutUser.current);
      };
    }

    return () => {
      clearTimeout(logoutUser.current);
    };
  }, [user, clearUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    queryClient.invalidateQueries("user", { exact: true });
  }, []);

  const isMutating = useIsMutating();

  const isMutatingUploadFile = queryClient.isMutating({
    mutationKey: "uploadFile",
  });

  return (
    <>
      {user && <Header />}
      {user && <LeftSideBar />}
      {<LoadingModal isLoading={isMutating && !isMutatingUploadFile} />}
      <Box marginLeft={user ? "250px" : "0px"}>
        <Routes />
      </Box>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
