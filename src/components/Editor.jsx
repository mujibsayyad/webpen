import CodeMirror from '@uiw/react-codemirror';

const Editor = (props) => {
  return (
    <div className='codeBlock'>
      <div className='name'>
        {props.icon}
        <h1>{props.name}</h1>
      </div>
      <CodeMirror
        className='codeMirror'
        value={props.value}
        onChange={props.onChange}
        height='200px'
        extensions={props.lang}
        theme='dark'
      />
    </div>
  );
};

export default Editor;
