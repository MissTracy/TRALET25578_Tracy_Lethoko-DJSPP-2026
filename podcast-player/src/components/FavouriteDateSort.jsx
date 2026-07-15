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
 * Renders a dropdown for sorting favourites.
 *
 * @param {Object} props
 * @param {string} props.value - Selected sort option.
 * @param {Function} props.onChange - Updates the selected option.
 * @returns {JSX.Element}
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