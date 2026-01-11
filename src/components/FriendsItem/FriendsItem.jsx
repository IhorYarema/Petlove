import css from "./FriendsItem.module.css";

export default function FriendsItem({ item }) {
  return (
    <div className={css.item}>
      <img src={item.imageUrl} alt="Friend's Image" className={css.img} />
      <h3 className={css.title}>{item.title}</h3>
      <p className={css.text}>{item.text}</p>
      <div className={css.bottomCont}>
        {/* <p className={css.date}>
          {new Date(item.date).toLocaleDateString("en-GB")}
        </p> */}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          Read more
        </a>
      </div>
    </div>
  );
}
