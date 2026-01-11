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

      <div className={css.petCont}>
        <div className={css.petAvatar}>
          🐈
          {/* <Icon name="cat" className={css.iconPet} /> */}
        </div>
        <div className={css.textCont}>
          <div className={css.nameCont}>
            <h3 className={css.petName}>Jack</h3>
            <p className={css.birthday}>
              <span>Birthday: </span>
              18.10.2021
            </p>
          </div>
          <p className={css.text}>
            Jack is a gray Persian cat with green eyes. He loves to be pampered
            and groomed, and enjoys playing with toys.
          </p>
        </div>
      </div>
    </div>
  );
}
