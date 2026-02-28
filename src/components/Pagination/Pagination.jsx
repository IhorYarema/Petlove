import css from "./Pagination.module.css";
import Icon from "../Icon/Icon";

export default function Pagination({
  page,
  totalPages,
  perPage,
  onPageChange,
}) {
  if (totalPages <= 1) return null;

  const createPages = () => {
    const pages = [];
    const delta = 1; // сколько страниц показывать вокруг текущей

    const start = Math.max(2, page - delta);
    const end = Math.min(totalPages - 1, page + delta);

    pages.push(1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = createPages();

  return (
    <div className={css.container}>
      {/* << */}
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
        <Icon className={css.iconPagBefore} name="pagination-chev" size={20} />
      </button>

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

      {/* > */}
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
  );
}
