import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import propTypes from 'prop-types';

const MODULES = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
  ],
};

const FORMATS = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

const Editor = (props) => {
  const handleChange = (value) => {
    props.setContent(value);
  };

  return (
    <div>
      <ReactQuill
        value={props.content}
        modules={MODULES}
        formats={FORMATS}
        onChange={handleChange}
      />
    </div>
  );
};

Editor.propTypes = {
  content: propTypes.string,
  setContent: propTypes.func,
};

export default Editor;
