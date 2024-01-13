import React from "react";
import BasicRouting from "./components/1-BasicRouting/BasicRouting";
import RouteResumeTask from "./components/2-TaskResume/RouteResume";
import MilkTask from "./components/2.1-TaskMilkZTable/MilkTask";
import RouteParameters from "./components/3-RouteParameters/RouteParameters";
import RouteParameters2 from "./components/3.1-RoutingParameters/RouteParameters2";
import FriendsTask from "./components/3.2-TaskFriends/FriendsTask";

import LazyLoading from "./components/4-LazyLoading/LazyLoading";
import RouteSecurity2 from "./components/5-Secure routing/RouteSecurity";

const App = () => {
  return (
    <>
      <BasicRouting />
      {/* <RouteResumeTask /> */}
      {/* <RouteParameters /> */}
      {/* <RouteParameters2 /> */}
      {/* <FriendsTask /> */}
      {/* <LazyLoading /> */}
      {/* <RouteSecurity2 /> */}
      {/* <MilkTask /> */}
    </>
  );
};

export default App;
