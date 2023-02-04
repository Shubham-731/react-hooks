import { UserContext, SubContext } from "../App";
import { useContext } from "react";

export default function CompC() {
  const subscription = useContext(SubContext);

  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <p>
              My name is {user} and I'm subscribed to {subscription}
            </p>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
