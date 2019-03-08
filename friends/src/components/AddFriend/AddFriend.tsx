import * as React from "react";
import { useState } from "react";
import { addFriend } from "../../actions";

interface Props {
  addFriend: any;
}

function AddFriend(props: Props) {
  // Normally I would write a hook to make these for me for DRY but
  // I haven't figured out how to do it with TypeScript yet
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitNewFriend = (e: React.FormEvent) => {
    e.preventDefault();
    props.addFriend({ name, age, email });
  };
  return (
    <form onSubmit={onSubmitNewFriend}>
      <span>Name</span>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.currentTarget.value)
        }
      />
      <span>Age</span>
      <input
        type="number"
        value={age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAge(e.currentTarget.value)
        }
      />
      <span>Email</span>
      <input
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.currentTarget.value)
        }
      />
    </form>
  );
}

export default AddFriend;
