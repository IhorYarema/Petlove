import css from "./PetBlock.module.css";
import cat1x from "../../assets/catregister.png";
import cat2x from "../../assets/catregister@2x.png";
import Icon from "../Icon/Icon";

export default function PetBlock() {
  return (
    <div className={css.container}>
      <img
        src={cat1x}
        alt="Cat"
        srcSet={`${cat1x} 1x, ${cat2x} 2x`}
        className={css.img}
      />
      <Icon name="rectangle" className={css.iconRectangle} />
    </div>
  );
}
