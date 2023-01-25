import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { SettingsModal } from "./SettingsModal";
import { SortableItem } from "./SortableItem";
import "../styles/Droppable.css";
import { Settings } from "./Settings";

export const Droppable = ({
  id,
  items,
  handleEdit,
  handleChangeOnTier,
  handleReorder,
  handleAddTier,
}) => {
  const { setNodeRef } = useDroppable({ id });
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const isUnrankedTier = items.tierName === "Unranked";

  const handleShowModal = () => {
    setShowSettingsModal((prev) => !prev);
  };

  return (
    <div className={!isUnrankedTier ? "droppable-container" : "unranked-tier"}>
      {showSettingsModal &&
        createPortal(
          <SettingsModal
            item={items}
            handleEdit={handleEdit}
            handleChangeOnTier={handleChangeOnTier}
            handleShowModal={handleShowModal}
            handleAddTier={handleAddTier}
          />,
          document.body
        )}
      {!isUnrankedTier ? (
        <div style={{ backgroundColor: items.color }} className="tier-names">
          <span>{items.tierName}</span>
        </div>
      ) : undefined}
      <SortableContext
        id={id}
        items={items.items}
        strategy={rectSortingStrategy}
      >
        <ul
          className={!isUnrankedTier ? "droppable" : "unranked-droppable"}
          ref={setNodeRef}
        >
          {items.items.map((item) => (
            <SortableItem key={item} id={item} />
          ))}
        </ul>
      </SortableContext>
      {!isUnrankedTier ? (
        <Settings
          items={items}
          handleReorder={handleReorder}
          handleShowModal={handleShowModal}
        />
      ) : undefined}
    </div>
  );
};
