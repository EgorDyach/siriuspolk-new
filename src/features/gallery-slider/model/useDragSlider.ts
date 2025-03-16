import { useRef } from 'react';

export const useDragSlider = (
  dragLeft: VoidFunction,
  dragRight: VoidFunction,
  dragDistance: number = 50,
) => {
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const shiftX = useRef(0);
  const isClick = useRef(true);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    isClick.current = true;
    startX.current = e.clientX;
    shiftX.current = 0;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;

    shiftX.current = e.clientX - startX.current;

    if (Math.abs(shiftX.current) > 5) {
      isClick.current = false;
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    isDraggingRef.current = false;

    if (!isClick.current) {
      if (shiftX.current > dragDistance) {
        dragLeft();
      } else if (shiftX.current < -dragDistance) {
        dragRight();
      }
    }
  };
  return handleMouseDown;
};
