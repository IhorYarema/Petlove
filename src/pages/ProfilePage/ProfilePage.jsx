import UserCard from "../../components/UserCard/UserCard";
import css from "./ProfilePage.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function ProfilePage() {
  const dispatch = useDispatch();

  return (
    <section className={css.section}>
      <UserCard />
    </section>
  );
}
