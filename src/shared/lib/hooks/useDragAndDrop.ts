import { useEffect } from 'react';

export const useDragAndDrop = (
  dropZone: HTMLElement | null,
  func: (files: File[]) => void,
  hoverClassName: string,
) => {
  useEffect(() => {
    if (!dropZone) return;

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();

      dropZone.classList.add(hoverClassName);
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      dropZone.classList.add(hoverClassName);
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dropZone.classList.remove(hoverClassName);
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dropZone.classList.remove(hoverClassName);
      if (e.dataTransfer) {
        const uniqueFiles = Array.from(e.dataTransfer.files).filter(
          (file, index, self) =>
            self.findIndex(
              (f) => f.name === file.name && f.size === file.size,
            ) === index,
        );
        func(uniqueFiles);
      }
    };
    dropZone.addEventListener('dragenter', handleDragEnter);
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);

    return () => {
      dropZone.removeEventListener('dragenter', handleDragEnter);
      dropZone.removeEventListener('dragover', handleDragOver);
      dropZone.removeEventListener('dragleave', handleDragLeave);
      dropZone.removeEventListener('drop', handleDrop);
    };
  }, [dropZone, func, hoverClassName]);
};
