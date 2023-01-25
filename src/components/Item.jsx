import "../styles/Item.css";

export const Item = ({ id, dragOverlay }) => {
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };

  return (
    <div style={style} className="item">
      <img style={style} className="item" src={id} />
    </div>
  );
};
