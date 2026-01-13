import css from "./NoticesItem.module.css";

export default function NoticesItem({ item }) {
  return (
    <div className={css.item}>
      <img src={item.imgURL} alt="Notice's Image" className={css.img} />
      <div className={css.infoCont}>
        <h3 className={css.title}>{item.title}</h3>
        <p className={css.info}>
          <span>Email: </span>
          {item.name ? item.email : "no email"}
        </p>
        <p className={css.info}>
          <span>Address: </span>
          {item.birthday ? item.address : "website only"}
        </p>
        <p className={css.info}>
          <span>Phone: </span>
          {item.sex ? item.phone : "email only"}
        </p>
      </div>
    </div>
  );
}
