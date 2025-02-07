import logo from "./logo.svg";
import "./App.css";
import GetRequest from "./component/get-request/GetRequest";
import UserTask from "./component/user-task/UserTask";
import FakeStoreApiTask from "./component/FakestoreApi-Task/FakeStoreApiTask";
import CountryTask from "./component/Country-task/CountyTask";

function App() {
  return (
    <>
      {/* <GetRequest /> */}
      {/* <UserTask /> */}
      {/* <FakeStoreApiTask /> */}
      <CountryTask />
    </>
  );
}
export default App;
