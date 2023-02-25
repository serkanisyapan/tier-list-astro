import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable";

const removeAtIndex = (array, index) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

const insertAtIndex = (array, index, item) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

const arrayMove = (array, oldIndex, newIndex) => {
  return dndKitArrayMove(array, oldIndex, newIndex);
};

const moveBetweenContainers = (
  items,
  activeContainer,
  activeIndex,
  overContainer,
  overIndex,
  activeItemID
) => {
  return items.map((item) => {
    if (activeContainer === item.id) {
      return {
        ...item,
        items: removeAtIndex(item.items, activeIndex),
      };
    }
    if (overContainer === item.id) {
      return {
        ...item,
        items: insertAtIndex(item.items, overIndex, activeItemID),
      };
    }
    return item;
  });
};

export { arrayMove, moveBetweenContainers };
