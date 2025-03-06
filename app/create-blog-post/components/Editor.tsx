'use client';
import React, { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's snow theme CSS

type Props = {
  initialContent?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
}

const Editor: React.FC<Props> = ({ 
  initialContent = '', 
  onChange, 
  placeholder = 'Write something amazing...' 
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [quillInstance, setQuillInstance] = useState<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow', // Use the snow theme
        placeholder: placeholder,
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image'],
            ['clean']
          ]
        }
      });

      // Set initial content if provided
      if (initialContent) {
        quill.root.innerHTML = initialContent;
      }

      // Handle content changes
      quill.on('text-change', () => {
        if (onChange) {
          onChange(quill.root.innerHTML);
        }
      });

      setQuillInstance(quill);
    }

    // Cleanup on unmount
    return () => {
      if (quillInstance) {
        quillInstance.off('text-change');
      }
    };
  }, []);

  return (
    <div className="editor-container">
      <div
        ref={editorRef}
        className="[&_.ql-editor.ql-blank::before]:text-gray-400 [&_.ql-editor.ql-blank::before]:opacity-70" 
      />
    </div>
  );
};

export default Editor;