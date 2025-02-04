import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface TinyMCEProps {
  value: string;
  onChange: (content: string) => void;
}

export default function TinyMCE({ value, onChange }: TinyMCEProps) {
  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINY_MCE}
      value={value}
      onEditorChange={(newValue) => onChange(newValue)}
      init={{
        plugins: [
          // Core editing features
          'anchor',
          'autolink',
          'charmap',
          'codesample',
          'emoticons',
          'image',
          'link',
          'lists',
          'media',
          'searchreplace',
          'table',
          'visualblocks',
          'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Dec 12, 2024:
          // 'checklist',
          // 'mediaembed',
          // 'casechange',
          // 'export',
          // 'formatpainter',
          // 'pageembed',
          // 'a11ychecker',
          // 'tinymcespellchecker',
          // 'permanentpen',
          // 'powerpaste',
          // 'advtable',
          // 'advcode',
          // 'editimage',
          // 'advtemplate',
          // 'ai',
          // 'mentions',
          // 'tinycomments',
          // 'tableofcontents',
          // 'footnotes',
          // 'mergetags',
          // 'autocorrect',
          // 'typography',
          // 'inlinecss',
          // 'markdown',
          // // Early access to document converters
          // 'importword',
          // 'exportword',
          // 'exportpdf',
        ],
        toolbar:
          'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (
          request: any,
          respondWith: { string: (arg0: () => Promise<never>) => any }
        ) =>
          respondWith.string(() =>
            Promise.reject('See docs to implement AI Assistant')
          ),
        exportpdf_converter_options: {
          format: 'Letter',
          margin_top: '1in',
          margin_right: '1in',
          margin_bottom: '1in',
          margin_left: '1in',
        },
        exportword_converter_options: { document: { size: 'Letter' } },
        importword_converter_options: {
          formatting: {
            styles: 'inline',
            resets: 'inline',
            defaults: 'inline',
          },
        },
      }}
    />
  );
}
