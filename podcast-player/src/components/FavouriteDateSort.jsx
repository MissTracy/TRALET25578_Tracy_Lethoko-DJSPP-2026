import styles from "./SortSelect.module.css";

const DATE_OPTIONS = [
  {
    key: "newest",
    label: "Newest Added",
  },
  {
    key: "oldest",
    label: "Oldest Added",
  },
];

/**
 * Dropdown for sorting favourites by the date
 * they were added.
 */
export default function FavouriteDateSort({
  value,
  onChange,
}) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {DATE_OPTIONS.map((option) => (
        <option
          key={option.key}
          value={option.key}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}