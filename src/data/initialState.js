import smashcharacters from "./smashcharacters.json";
import mk11characters from "./mk11characters.json";
import tekken7characters from "./tekken7characters.json";
import boirepbosses from "./boirepbosses.json";
import btd6towers from "./btd6towers.json";
import civ6leaders from "./civ6leaders.json";
import cupheadbosses from "./cupheadbosses.json";
import tekken8characters from "./tekken8characters.json";

export const initialState = (listName) => {
  let firstState = [
    { color: "#48cb7a", items: [], tierName: "S", id: 1 },
    { color: "#63d981", items: [], tierName: "A", id: 2 },
    { color: "#7675b3", items: [], tierName: "B", id: 3 },
    { color: "#719fd0", items: [], tierName: "C", id: 4 },
    { color: "#d846ec", items: [], tierName: "D", id: 5 },
    { color: "#d56dcc", items: [], tierName: "F", id: 6 },
  ];
  let newData = {
    color: "#8ef1c2",
    tierName: "Unranked",
    items: null,
    id: 7,
  };

  switch (listName) {
    case "smashcharacters":
      newData.items = smashcharacters;
      break;
    case "tekken7characters":
      newData.items = tekken7characters;
      break;
    case "mk11characters":
      newData.items = mk11characters;
      break;
    case "boirepbosses":
      newData.items = boirepbosses;
      break;
    case "btd6towers":
      newData.items = btd6towers;
      break;
    case "civ6leaders":
      newData.items = civ6leaders;
      break;
    case "cupheadbosses":
      newData.items = cupheadbosses;
      break;
    case "tekken8characters":
      newData.items = tekken8characters;
      break;
    default:
      break;
  }

  if (newData.items) {
    firstState.push(newData);
  }

  return firstState;
};
