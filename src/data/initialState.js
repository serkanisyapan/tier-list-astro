import smashcharacters from "./smashcharacters.json";
import mk11characters from "./mk11characters.json";
import tekken7characters from "./tekken7characters.json";
import boirepbosses from "./boirepbosses.json";
import btd6towers from "./btd6towers.json";
import civ6leaders from "./civ6leaders.json";

export const initialState = (listName) => {
  let firstState = [
    { color: "#48cb7a", items: [], tierName: "S", id: 1 },
    { color: "#63d981", items: [], tierName: "A", id: 2 },
    { color: "#7675b3", items: [], tierName: "B", id: 3 },
    { color: "#719fd0", items: [], tierName: "C", id: 4 },
    { color: "#d846ec", items: [], tierName: "D", id: 5 },
    { color: "#d56dcc", items: [], tierName: "F", id: 6 },
  ];
  if (listName === "smashcharacters") {
    firstState.push({
      color: "#8ef1c2",
      tierName: "Unranked",
      items: smashcharacters,
      id: 7,
    });
  }
  if (listName === "tekken7characters") {
    firstState.push({
      color: "#8ef1c2",
      tierName: "Unranked",
      items: tekken7characters,
      id: 7,
    });
  }
  if (listName === "mk11characters") {
    firstState.push({
      color: "#8ef1c2",
      tierName: "Unranked",
      items: mk11characters,
      id: 7,
    });
  }
  if (listName === "boirepbosses") {
    firstState.push({
      color: "#8ef1c2",
      tierName: "Unranked",
      items: boirepbosses,
      id: 7,
    });
  }
  if (listName === "btd6towers") {
    firstState.push({
      color: "#8ef1c2",
      tierName: "Unranked",
      items: btd6towers,
      id: 7,
    });
  }
  if (listName === "civ6leaders") {
    firstState.push({
      color: "#8ef1c2",
      tierName: "Unranked",
      items: civ6leaders,
      id: 7,
    });
  }
  return firstState;
};
