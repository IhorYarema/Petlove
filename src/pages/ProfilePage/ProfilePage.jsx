import MyNotices from "../../components/MyNotices/MyNotices";
import UserCard from "../../components/UserCard/UserCard";
import css from "./ProfilePage.module.css";
import { useDispatch } from "react-redux";

export default function ProfilePage() {
  const dispatch = useDispatch();

  return (
    <section className={css.section}>
      <UserCard />
      <MyNotices />
    </section>
  );
}
