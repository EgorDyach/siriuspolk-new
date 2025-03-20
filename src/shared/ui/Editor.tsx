import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  FontFamily,
  FontSize,
  List,
  Underline,
  BlockQuote,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import { FC, ReactNode } from 'react';
import { Label } from '@shared/ui/label';
import { useFormContext } from 'react-hook-form';

const FormEditor: FC<{
  name: string;
  label?: ReactNode;
  className?: string;
}> = ({ name, label }) => {
  const { getValues, setValue } = useFormContext();

  return (
    <>
      {label && <Label>{label}</Label>}
      <CKEditor
        editor={ClassicEditor}
        data={getValues(name)}
        onChange={(_, editor) => {
          setValue(name, editor.getData());
        }}
        config={{
          licenseKey: 'GPL',
          image: {
            insert: {
              integrations: ['upload', 'assetManager', 'url'],
            },
          },
          toolbar: {
            items: [
              'undo',
              'redo',
              '|',
              'bold',
              'italic',
              'underline',
              'blockquote',
              '|',
              'fontSize',
              'fontFamily',
              '|',
              'bulletedList',
              'numberedList',
            ],
          },
          plugins: [
            Bold,
            Essentials,
            Italic,
            Mention,
            Underline,
            BlockQuote,
            Paragraph,
            Undo,
            FontFamily,
            FontSize,
            List,
          ],
          initialData: '',
        }}
      />
    </>
  );
};

export default FormEditor;
