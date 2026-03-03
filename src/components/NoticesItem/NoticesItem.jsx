import css from "./NoticesItem.module.css";
import Icon from "../Icon/Icon";
import ModalAttention from "../ModalAttention/ModalAttention";
import ModalNotice from "../ModalNotice/ModalNotice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleFavorite } from "../../redux/notices/operations";
import { setFavorites } from "../../redux/notices/slice";

export default function NoticesItem({ item }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [modalType, setModalType] = useState(null);

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.notices?.favorites ?? []);

  const isFavorite = useSelector((state) =>
    state.notices?.favorites?.includes(item._id),
  );

  const handleLearnMore = () => {
    setModalType(isLoggedIn ? "notice" : "attention");
  };

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      setModalType("attention");
      return;
    }

    // Оптимистичное обновление UI
    const currentlyFavorite = favorites.includes(item._id);
    const newFavorites = currentlyFavorite
      ? favorites.filter((id) => id !== item._id)
      : [...favorites, item._id];

    dispatch(setFavorites(newFavorites));

    // Отправляем запрос на сервер
    dispatch(toggleFavorite(item._id))
      .unwrap()
      .catch(() => {
        // если сервер реально упал — откатываем изменения
        dispatch(setFavorites(favorites));
      });
  };

  return (
    <div className={css.item}>
      <img src={item.imgURL} alt="Notice's Image" className={css.img} />
      <div className={css.upperCont}>
        <h3 className={css.title}>{item.title}</h3>
        <div className={css.ratingCont}>
          <Icon className={css.iconStar} name="star" size={16} />
          <p className={css.info}>{item.popularity}</p>
        </div>
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
        <p className={css.info}>
          <span>Category </span>
          {item.category}
        </p>
      </div>
      <p className={css.comment}>{item.comment}</p>
      <p className={css.price}>
        {item.price ? "$" + item.price : "Price needs clarification"}
      </p>
      <div className={css.btnsCont}>
        <button onClick={handleLearnMore} className={css.moreBtn}>
          Learn more
        </button>
        <button
          onClick={handleFavoriteClick}
          className={`${css.favBtn} ${isFavorite ? css.activeHeartBtn : ""}`}
        >
          <Icon className={css.iconHeart} name="heart" size={18} />
        </button>
      </div>
      {modalType === "attention" && (
        <ModalAttention onClose={() => setModalType(null)} />
      )}

      {modalType === "notice" && (
        <ModalNotice item={item} onClose={() => setModalType(null)} />
      )}
    </div>
  );
}
