// -> Observer:- it is an HOC. we use observer in react component. it will help to render the component or update the UI if state changes.

import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useStore } from "../Hooks/useStore";

export const GitHubUser = observer(() => {
  const {
    RootStore: { githubUserDetails },
  } = useStore();

  const [text, setText] = useState("");

  console.log(text);

  const getUsers = () => {
    githubUserDetails.fetchGitHubUserDetails(text);
  };
  //   console.log(githubUserDetails.userDetails);

  return (
    <>
      <div>
        <h1>Name: {githubUserDetails.getUserDetails.name}</h1>
        <p>Name: {githubUserDetails.userDetails.name}</p>
      </div>
      <form>
        <label htmlFor="name">Search User</label>
        <input
          type="text"
          name="name"
          id="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={getUsers}>
          Get Users
        </button>
      </form>
    </>
  );
});
