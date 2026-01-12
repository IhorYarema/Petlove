import css from "./FriendsItem.module.css";
import { getTodayWorkTime } from "../../services/getTodayWorkTime";

export default function FriendsItem({ item }) {
  return (
    <a
      href={item.addressUrl}
      target="_blank"
      rel="noopener noreferrer"
      // className={css.item}
    >
      <div className={css.item}>
        <img src={item.imageUrl} alt="Friend's Image" className={css.img} />
        <p className={css.workTime}>{getTodayWorkTime(item.workDays)}</p>
        <div className={css.infoCont}>
          <h3 className={css.title}>{item.title}</h3>
          {/* <p className={css.date}>
          {new Date(item.date).toLocaleDateString("en-GB")}
        </p> */}
          <p className={css.info}>
            <span>Email: </span>
            {item.email ? item.email : "no email"}
          </p>
          <p className={css.info}>
            <span>Address: </span>
            {item.address ? item.address : "website only"}
          </p>
          <p className={css.info}>
            <span>Phone: </span>
            {item.phone ? item.phone : "email only"}
          </p>
        </div>
      </div>
    </a>
  );
}
