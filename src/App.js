import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import CardList from "./Components/CardList";
import Form from "./Components/Form";

const App = () => {
  const [profiles, setProfiles] = React.useState([]);

  const addNewProfile = profileData => {
    setProfiles([...profiles, profileData]);
  };

  return (
    <>
      <Header title="The GitHub Cards App" />
      <Form onSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </>
  );
};

export default App;
