import "../styles/Item.css";

const Item = ({ id, dragOverlay }) => {
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };

  return (
    <div style={style} className="item">
      <img style={style} className="item" src={id} />
    </div>
  );
};

export default Item;
