import React from "react";
import axios from "axios";

const Form = props => {
  const [userName, setUserName] = React.useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);

    props.onSubmit(resp.data);

    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={event => setUserName(event.target.value)}
        placeholder="GitHub username"
        style={{ marginTop: 20 }}
        required
      />
      <button>Add Card</button>
    </form>
  );
};

export default Form;
