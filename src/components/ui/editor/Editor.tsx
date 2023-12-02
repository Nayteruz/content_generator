import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface EditorProps {
  data: string;
  onChange?: (event: any, editor: any) => void;
}

export const Editor = ({ data, onChange }: EditorProps) => {
  const [editorData, setEditorData] = useState<string>(data);

  useEffect(() => {
    setEditorData(data);
  }, [data]);

  const handleEditorChange = (event: any, editor: any) => {
    const newData = editor.getData();
    setEditorData(newData);
    onChange && onChange(event, editor);
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={handleEditorChange}
    />
  );
};
