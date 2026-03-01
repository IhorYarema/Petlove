import css from "./Pagination.module.css";
import Icon from "../Icon/Icon";

export default function Pagination({
  page,
  totalPages,
  perPage,
  onPageChange,
  maxButtons = 5,
  className = "",
}) {
  if (totalPages <= 1) return null;

  const createPages = () => {
    const pages = [];
    const half = Math.floor(maxButtons / 2);

    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, page + half);

    // Коррекция если ближе к началу
    if (page <= half) {
      start = 1;
      end = Math.min(totalPages, maxButtons);
    }

    // Коррекция если ближе к концу
    if (page + half >= totalPages) {
      end = totalPages;
      start = Math.max(1, totalPages - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = createPages();

  return (
    <div className={`${css.container} ${className}`}>
      {/* << */}
      <div className={css.firstCont}>
        <button
          onClick={() => onPageChange(1, perPage)}
          disabled={page === 1}
          className={css.btnPagFirst}
        >
          <Icon className={css.iconPagFirst} name="double-chevron" size={20} />
        </button>

        {/* < */}
        <button
          onClick={() => onPageChange(page - 1, perPage)}
          disabled={page === 1}
          className={css.btnPagBefore}
        >
          <Icon
            className={css.iconPagBefore}
            name="pagination-chev"
            size={20}
          />
        </button>
      </div>

      <div className={css.middleCont}>
        {pages.map((p, index) =>
          p === "..." ? (
            <span key={index} className={css.dots}>
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p, perPage)}
              className={p === page ? css.active : ""}
            >
              {p}
            </button>
          ),
        )}
      </div>

      {/* > */}
      <div className={css.lastCont}>
        <button
          onClick={() => onPageChange(page + 1, perPage)}
          disabled={page === totalPages}
          className={css.btnPagNext}
        >
          <Icon className={css.iconPagNext} name="pagination-chev" size={20} />
        </button>

        {/* >> */}
        <button
          onClick={() => onPageChange(totalPages, perPage)}
          disabled={page === totalPages}
          className={css.btnPagLast}
        >
          <Icon className={css.iconPagLast} name="pag-chev-first" size={20} />
        </button>
      </div>
    </div>
  );
}
