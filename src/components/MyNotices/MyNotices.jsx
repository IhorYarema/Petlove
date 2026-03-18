import css from "./MyNotices.module.css";
import NoticesItem from "../NoticesItem/NoticesItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  selectUserFavorites,
  selectUserViewed,
} from "../../redux/auth/selectors";

export default function MyNotices({ className = "" }) {
  const [activeTab, setActiveTab] = useState("favorites");

  const favNotices = useSelector(selectUserFavorites);
  const viewedNotices = useSelector(selectUserViewed);

  const notices = activeTab === "favorites" ? favNotices : viewedNotices;

  if (!notices.length) {
    return (
      <div className={`${css.containerEmpty} ${className}`}>
        {/* TABS */}
        <div className={css.tabs}>
          <button
            className={`${css.tab} ${
              activeTab === "favorites" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("favorites")}
          >
            My favorite pets
          </button>

          <button
            className={`${css.tab} ${
              activeTab === "viewed" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("viewed")}
          >
            Viewed
          </button>
        </div>
        <p className={css.emptyText}>
          Oops, <span>looks like there aren't any furries</span> on our adorable
          page yet. Do not worry! View your pets on the "find your favorite pet"
          page and add them to your favorites.
        </p>
      </div>
    );
  } else {
    return (
      <div className={`${css.container} ${className}`}>
        {/* TABS */}
        <div className={css.tabs}>
          <button
            className={`${css.tab} ${
              activeTab === "favorites" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("favorites")}
          >
            My favorite pets
          </button>

          <button
            className={`${css.tab} ${
              activeTab === "viewed" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("viewed")}
          >
            Viewed
          </button>
        </div>
        <ul className={css.list}>
          {notices.map((item) => (
            <li key={item._id} className={css.item}>
              <NoticesItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
