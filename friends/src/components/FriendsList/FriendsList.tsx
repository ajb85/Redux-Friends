import * as React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getFriends } from "../../actions";
import Loader from "react-loader-spinner";

interface friendsObj {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface Props {
  getFriends(): friendsObj[];
  friends: friendsObj[];
  fetchingFriends: boolean;
  savingFriends: boolean;
  updatingFriend: boolean;
  deletingFriend: boolean;
}

function FriendsList(props: Props) {
  // create friendList state
  // const [friendsList, setFriendsList] = useState();
  useEffect(() => {
    // basically componentDidMount
    props.getFriends();
    // Only run on mount
  }, []);
  return (
    <div>
      {props.fetchingFriends && (
        <Loader type="Bars" color="black" height={80} width={80} />
      )}
      {props.friends.map((friend: friendsObj) => (
        <div key={friend.id} className="friendCard">
          <h2>
            {friend.name} {friend.age}
          </h2>
          <p>{friend.email}</p>
        </div>
      ))}
    </div>
  );
}

interface State {
  friends: friendsObj[];
  fetchingFriends: boolean;
  savingFriends: boolean;
  updatingFriend: boolean;
  deletingFriend: boolean;
}

const mapStateToProps = (state: State) => ({
  friends: state.friends,
  fetchingFriends: state.fetchingFriends,
  savingFriends: state.savingFriends,
  updatingFriend: state.updatingFriend,
  deletingFriend: state.deletingFriend
});

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
