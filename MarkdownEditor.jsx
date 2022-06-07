//Markdown.jsx

// @ts-check

import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.rootElement = React.createRef();
  }

  componentDidMount() {
    const editor = new Editor({
      el: this.rootElement.current,
      hideModeSwitch: true,
    });
    editor.addHook('change', () => this.onChange(editor));
  }

  onChange = (editor) => {
    const { onContentChange } = this.props;
    onContentChange(editor.getMarkdown());
  }

  render() {
    return <div ref={this.rootElement} />;
  }
}
// END


//index.jsx
// @ts-check
/* eslint-disable no-console */

import '@toast-ui/editor/dist/toastui-editor.css';

import ReactDOM from 'react-dom/client';
import React from 'react';

import MarkdownEditor from './MarkdownEditor.jsx';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<MarkdownEditor onContentChange={console.log} />);


// Markdown HOOKS VERSION

// @ts-check

import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const rootElement = React.createRef();

  const onChange = (editor) => {
    onContentChange(editor.getMarkdown());
  }

  useEffect(() => {
    const editor = new Editor({
      el: rootElement.current,
      hideModeSwitch: true,
    });
    editor.addHook('change', () => onChange(editor));
  })
  
  return <div ref={rootElement} />;
  
  // END
};

export default MarkdownEditor;

