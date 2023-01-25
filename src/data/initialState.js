import smashcharacters from "./smashcharacters.json";
import mk11characters from "./mk11characters.json";
import tekken7characters from "./tekken7characters.json";
import boirepbosses from "./boirepbosses.json";
import btd6towers from "./btd6towers.json";

const initialState = (listName) => {
  let firstState = [
    { color: "#FFD700", items: [], tierName: "S", id: 1 },
    { color: "#e8d13c", items: [], tierName: "A", id: 2 },
    { color: "#C0C0C0", items: [], tierName: "B", id: 3 },
    { color: "#9C9C9C", items: [], tierName: "C", id: 4 },
    { color: "#CD7F32", items: [], tierName: "D", id: 5 },
    { color: "#B87333", items: [], tierName: "F", id: 6 },
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
  return firstState;
};
export default initialState;
