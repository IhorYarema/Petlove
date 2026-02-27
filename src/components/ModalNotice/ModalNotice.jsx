import css from "./ModalNotice.module.css";
import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";

export default function ModalNotice({ item, className, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closeByBackdrop = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div
      className={`${css.backdrop} ${className} ${isClosing ? css.closing : ""}`}
      onClick={closeByBackdrop}
    >
      <div
        className={`${css.modal} ${isClosing ? css.closing : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={closeModal}>
          <Icon className={css.iconClose} name="cross-small" size={24} />
        </button>
        <div className={css.avatarCont}>
          <img src={item.imgURL} alt="Notice's Image" className={css.img} />
          <div className={css.categoryCont}>
            <p className={css.categoryText}>{item.category}</p>
          </div>
        </div>
        <div className={css.upperCont}>
          <h3 className={css.title}>{item.title}</h3>
          <div className={css.ratingCont}>
            <Icon
              className={!item.popularity ? css.iconStarGrey : css.iconStar}
              name="star"
              size={16}
            />
            <Icon
              className={item.popularity > 1 ? css.iconStar : css.iconStarGrey}
              name="star"
              size={16}
            />
            <Icon
              className={item.popularity > 2 ? css.iconStar : css.iconStarGrey}
              name="star"
              size={16}
            />
            <Icon
              className={item.popularity > 3 ? css.iconStar : css.iconStarGrey}
              name="star"
              size={16}
            />
            <Icon
              className={item.popularity > 4 ? css.iconStar : css.iconStarGrey}
              name="star"
              size={16}
            />
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
        </div>
        <p className={css.comment}>{item.comment}</p>
        <p className={css.price}>
          {item.price ? "$" + item.price : "Price needs clarification"}
        </p>
        <div className={css.btnsCont}>
          <button className={css.favBtn}>
            Add to
            <Icon className={`${css.iconHeart}`} name="heart" size={18} />
          </button>
          <button className={css.contactBtn}>Contact</button>
        </div>
      </div>
    </div>
  );
}
