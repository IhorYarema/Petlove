import css from "./PetBlock.module.css";
import cat1x from "../../assets/catregister.png";
import cat2x from "../../assets/catregister@2x.png";
import dog1x from "../../assets/doglogin.png";
import dog2x from "../../assets/doglogin@2x.png";
import addPet1x from "../../assets/addpetdog.png";
import addPet2x from "../../assets/addpetdog@2x.png";
import Icon from "../Icon/Icon";
import { useLocation } from "react-router-dom";

export default function PetBlock() {
  const location = useLocation();
  const isReg = location.pathname === "/register";
  const isLogin = location.pathname === "/login";
  const isAddPet = location.pathname === "/add-pet";

  const petBlockClass = `
    ${css.container}
    ${isReg ? css.blockReg : ""}
    ${isLogin ? css.blockLogin : ""}
    ${isAddPet ? css.blockAdd : ""}`;

  let imgSrc;
  let imgSet;
  let alt;

  if (isReg) {
    imgSrc = cat1x;
    imgSet = `${cat1x} 1x, ${cat2x} 2x`;
    alt = "Cat";
  } else if (isAddPet) {
    imgSrc = addPet1x;
    imgSet = `${addPet1x} 1x, ${addPet2x} 2x`;
    alt = "Add pet";
  } else {
    imgSrc = dog1x;
    imgSet = `${dog1x} 1x, ${dog2x} 2x`;
    alt = "Dog";
  }

  return (
    <div className={petBlockClass}>
      <img src={imgSrc} srcSet={imgSet} alt={alt} className={css.img} />
      <Icon name="rectangle" className={css.iconRectangle} />

      <div className={css.petCont}>
        <div className={css.petAvatar}>{isReg ? "🐈" : "🐶"}</div>
        <div className={css.textCont}>
          <div className={css.nameCont}>
            <h3 className={css.petName}>{isReg ? "Jack" : "Rich"}</h3>
            <p className={css.birthday}>
              <span>Birthday: </span>
              {isReg ? "18.10.2021" : "21.09.2020"}
            </p>
          </div>
          <p className={css.text}>
            {isReg
              ? "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys."
              : "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!"}
          </p>
        </div>
      </div>
    </div>
  );
}
