import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useTiers } from "../hooks/useTiers";
import { Droppable } from "./Droppable";
import { Item } from "./Item";
import "../styles/App.css";

export const App = ({ listName, title }) => {
  const {
    tiers,
    activeId,
    handleAddTier,
    handleChangeOnTier,
    handleDragCancel,
    handleDragEnd,
    handleDragOver,
    handleDragStart,
    handleEdit,
    handleReorder,
    handleResetTiers,
  } = useTiers(listName);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const isTiersLoaded = tiers.length;
  let tierContent;

  if (!isTiersLoaded) {
    tierContent = (
      <div className="main-container">
        <h1 className="loading-text">Getting tier list...</h1>
      </div>
    );
  } else {
    tierContent = (
      <>
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragCancel={handleDragCancel}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className="main-container">
            <h1>{title} Tier List</h1>
            {tiers.map((group) => (
              <Droppable
                id={group.id}
                items={group}
                activeId={activeId}
                handleEdit={handleEdit}
                handleChangeOnTier={handleChangeOnTier}
                handleReorder={handleReorder}
                handleAddTier={handleAddTier}
                key={group.id}
              />
            ))}
            <button onClick={handleResetTiers} className="reset-all-button">
              Reset All Tiers
            </button>
          </div>
          <DragOverlay>
            {activeId ? <Item id={activeId} dragOverlay /> : null}
          </DragOverlay>
        </DndContext>
      </>
    );
  }
  return <>{tierContent}</>;
};
