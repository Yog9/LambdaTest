import React from "react";
import Modal from "./components/Modal";
import { data } from "./peopleData";

const App = () => {
  const [peopleData, setPeopleData] = React.useState(data);
  return (
    <>
      <Modal peopleData={peopleData} setPeopleData={setPeopleData} />
    </>
  );
};

export default App;
