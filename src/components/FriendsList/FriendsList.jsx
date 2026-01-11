import css from "./FriendsList.module.css";
import FriendsItem from "../FriendsItem/FriendsItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";

export default function FriendsList({ className = "" }) {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends.items) || [];
  const loading = useSelector((state) => state.friends.loading);

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={`${css.container} ${className}`}>
      <ul className={css.list}>
        {friends.map((item) => (
          <li key={item._id} className={css.item}>
            <FriendsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
