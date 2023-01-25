import { DownArrow, UpArrow } from "./ArrowIcons";
import settingsButton from "../../public/assets/settings.png";
import "../styles/Settings.css";
export const Settings = ({ items, handleReorder, handleShowModal }) => {
  return (
    <div className="settings">
      <span onClick={() => handleReorder(items, "goUp")} className="arrows">
        <UpArrow size="16px" />
      </span>
      <img
        onClick={handleShowModal}
        src={settingsButton}
        alt="change tier settings"
      />
      <span onClick={() => handleReorder(items, "goDown")} className="arrows">
        <DownArrow size="16px" />
      </span>
    </div>
  );
};
