import { renderHook } from '@testing-library/react';
import { useDragAndDrop } from '../useDragAndDrop';

describe('useDragAndDrop', () => {
  let dropZone: HTMLElement;
  let handleFiles: jest.Mock;

  beforeEach(() => {
    dropZone = document.createElement('div');
    document.body.appendChild(dropZone);
    handleFiles = jest.fn();
  });
  global.DataTransfer = class {
    items: DataTransferItemList;
    files: FileList;

    constructor() {
      this.items = {
        add: jest.fn(),
        remove: jest.fn(),
        clear: jest.fn(),
        length: 0,
        [Symbol.iterator]: jest.fn(),
      };
      this.files = [] as unknown as FileList;
    }
  } as never;
  afterEach(() => {
    document.body.removeChild(dropZone);
  });

  it('should add hoverClassName on dragenter and dragover', () => {
    renderHook(() => useDragAndDrop(dropZone, handleFiles, 'hover'));

    const event = new Event('dragenter', { bubbles: true });
    dropZone.dispatchEvent(event);

    expect(dropZone.classList.contains('hover')).toBe(true);

    dropZone.dispatchEvent(new Event('dragover', { bubbles: true }));
    expect(dropZone.classList.contains('hover')).toBe(true);
  });

  it('should remove hoverClassName on dragleave and drop', () => {
    renderHook(() => useDragAndDrop(dropZone, handleFiles, 'hover'));

    dropZone.classList.add('hover');
    dropZone.dispatchEvent(new Event('dragleave', { bubbles: true }));

    expect(dropZone.classList.contains('hover')).toBe(false);

    dropZone.classList.add('hover');
    dropZone.dispatchEvent(new Event('drop', { bubbles: true }));

    expect(dropZone.classList.contains('hover')).toBe(false);
  });

  it('should call handleFiles on drop with unic', () => {
    renderHook(() => useDragAndDrop(dropZone, handleFiles, 'hover'));

    const file1 = new File(['content'], 'file1.txt', { type: 'text/plain' });
    const file2 = new File(['content'], 'file2.txt', { type: 'text/plain' });
    const duplicateFile = new File(['content'], 'file1.txt', {
      type: 'text/plain',
    });

    const fileList = {
      length: 3,
      item: (index: number) => [file1, file2, duplicateFile][index],
      0: file1,
      1: file2,
      2: duplicateFile,
    } as unknown as FileList;

    const dropEvent = new Event('drop', { bubbles: true });
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: { files: fileList },
    });

    dropZone.dispatchEvent(dropEvent);

    expect(handleFiles).toHaveBeenCalledWith([file1, file2]);
  });
  it('should end if no dropzone', () => {
    renderHook(() => useDragAndDrop(null, handleFiles, 'hover'));

    const file1 = new File(['content'], 'file1.txt', { type: 'text/plain' });
    const file2 = new File(['content'], 'file2.txt', { type: 'text/plain' });
    const duplicateFile = new File(['content'], 'file1.txt', {
      type: 'text/plain',
    });

    const fileList = {
      length: 3,
      item: (index: number) => [file1, file2, duplicateFile][index],
      0: file1,
      1: file2,
      2: duplicateFile,
    } as unknown as FileList;

    const dropEvent = new Event('drop', { bubbles: true });
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: { files: fileList },
    });

    dropZone.dispatchEvent(dropEvent);

    expect(handleFiles).not.toHaveBeenCalled();
  });
});
