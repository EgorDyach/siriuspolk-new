'use client';
import React, { memo } from 'react';

import 'quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import ReactQuill from 'react-quill-new';
const ReactQuillComponent = dynamic(() => import('react-quill-new'), {
  ssr: false,
});

const TOOLBAR_OPTIONS = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote'],

  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ header: [2, 3, 4, false] }],

  [{ align: [] }],
];

const Editor = memo((props: ReactQuill.ReactQuillProps) => {
  return (
    <ReactQuillComponent modules={{ toolbar: TOOLBAR_OPTIONS }} {...props} />
  );
});

Editor.displayName = 'Editor';

export default Editor;
