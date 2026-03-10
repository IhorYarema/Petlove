import css from "./PetsItem.module.css";
import Icon from "../Icon/Icon";
import { useState } from "react";

export default function NoticesItem({ item }) {
  const [modalType, setModalType] = useState(null);

  return (
    <div className={css.item}>
      <img src={item.imgURL} alt="Notice's Image" className={css.img} />
      <div className={css.upperCont}>
        <h3 className={css.title}>{item.title}</h3>
      </div>
      <div className={css.infoCont}>
        <p className={css.info}>
          <span>Name </span>
          {item.name}
        </p>
        <p className={css.info}>
          <span>Birthday </span>
          {item.birthday ? item.birthday : "Unknown"}
        </p>
        <p className={css.info}>
          <span>Sex </span>
          {item.sex}
        </p>
        <p className={css.info}>
          <span>Species </span>
          {item.species}
        </p>
      </div>

      <button className={`${css.favBtn}`}>
        <Icon className={css.iconHeart} name="heart" size={18} />
      </button>
    </div>
  );
}
