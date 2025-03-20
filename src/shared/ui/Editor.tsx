import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface EditorProps {
  readOnly?: boolean;
  defaultValue?: string;
  onTextChange?: (html: string) => void;
}

type QuillEditor = Quill | null;

const Editor = forwardRef<QuillEditor, EditorProps>(
  ({ defaultValue = '', onTextChange }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const onTextChangeRef = useRef(onTextChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
    }, [onTextChange]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        document.createElement('div'),
      );
      const quill = new Quill(editorContainer, {
        theme: 'snow',
      });

      if (ref && 'current' in ref) {
        ref.current = quill;
      }

      quill.root.innerHTML = defaultValue;

      quill.on(Quill.events.TEXT_CHANGE, () => {
        const html = quill.root.innerHTML;
        onTextChangeRef.current?.(html);
      });

      return () => {
        if (ref && 'current' in ref) {
          ref.current = null;
        }
        container.innerHTML = '';
      };
    }, [ref]);

    return <div ref={containerRef}></div>;
  },
);

Editor.displayName = 'Editor';

export default Editor;
