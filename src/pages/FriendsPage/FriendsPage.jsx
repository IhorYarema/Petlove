import Title from "../../components/Title/Title";
import css from "./FriendsPage.module.css";
import FriendsList from "../../components/FriendsList/FriendsList";

export default function NewsPage() {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <Title className={css.title} />
        <FriendsList className={css.list} />
      </div>
    </section>
  );
}
