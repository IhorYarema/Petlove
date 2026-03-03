import css from "./Pagination.module.css";
import Icon from "../Icon/Icon";

export default function Pagination({
  page,
  totalPages,
  perPage,
  onPageChange,
  className = "",
}) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // если мы на последней странице
    if (page >= totalPages - 1) {
      return ["...", totalPages - 2, totalPages - 1, totalPages];
    }

    if (page < totalPages / 2) {
      return [page, page + 1, page + 2, "..."];
    }

    return ["...", page - 1, page, page + 1];
  };

  const pages = getPages();

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
            <span key={`dots-${index}`} className={css.dots}>
              ...
            </span>
          ) : (
            <button
              key={`page-${p}`}
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
