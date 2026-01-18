import css from "./NoticesItem.module.css";
import Icon from "../Icon/Icon";
import ModalAttention from "../ModalAttention/ModalAttention";

export default function NoticesItem({ item }) {
  const openModal = () => {
    return <ModalAttention />;
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
        <button onClick={openModal} className={css.moreBtn}>
          Learn more
        </button>
        <button className={css.favBtn}>
          <Icon
            className={`${css.iconHeart} ${css.iconHeart}`}
            name="heart"
            size={18}
          />
        </button>
      </div>
    </div>
  );
}
