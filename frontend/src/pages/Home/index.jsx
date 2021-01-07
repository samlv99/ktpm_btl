import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import PostFeature from "../../features/Post";
import { getUser } from "../../features/Auth/userSlice";


Home.propTypes = {};


function Home(props) {
  const [fetchUser, setFetchUser] = useState(null);
  const dispatch = useDispatch();

 
  useEffect(() => {
    const getUserData = async () => {
      const  action = getUser();
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      if(user){
        setFetchUser(user?.user.name);
      }
      
    }
    getUserData();

  }, [])
  return (
    <div>

     
      {/* <CssBaseline /> */}
      <Container maxWidth="sm">
        {fetchUser}
      </Container>
    </div>
  );
}

export default Home;
