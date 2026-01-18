import css from "./ModalNotice.module.css";

export default function ModalNotice({ className }) {
  return <div className={`${css.modal} ${className}`}></div>;
}
