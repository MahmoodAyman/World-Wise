import { Link } from "react-router-dom";
import styels from "./CityItem.module.css";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
function CityItem({ city }) {
  const { cityName, emoji, date , id, position } = city;
  return (
    <li>
      <Link className={styels.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styels.emoji}>{emoji}</span>
        <h3 className={styels.name}>{cityName}</h3>
        <time className={styels.date}>{formatDate(date)}</time>
        <button className={styels.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
export default CityItem;
