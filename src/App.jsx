import { useState, useEffect } from 'react';
import Editor from './components/Editor';

import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

import './App.css';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCSSCode] = useState('');
  const [jsCode, setJSCode] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <>
      <div className='panel'>
        <Editor
          lang={html()}
          value={htmlCode}
          onChange={setHtmlCode}
          name='HTML'
          icon={<i className='fa-solid fa-code html-bg'></i>}
        />

        <Editor
          lang={css()}
          value={cssCode}
          onChange={setCSSCode}
          name='CSS'
          icon={<i className='fa-solid fa-star-of-life css-bg'></i>}
        />

        <Editor
          lang={javascript()}
          value={jsCode}
          onChange={setJSCode}
          name='JS'
          icon={<i className='fa-brands fa-superpowers js-bg'></i>}
        />
      </div>

      <div className='panel-bottom'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
        />
      </div>

      <footer>
        <p>
          Made Using <i className='fa-brands fa-react'></i> By{' '}
          <a
            href='https://github.com/mujibsayyad'
            target='_blank'
            rel='noopener'
          >
            MUJIB SAYYAD
          </a>
        </p>

        <p>
          <i className='fab social-icons fa-github'></i>{' '}
          <a
            href='https://github.com/mujibsayyad/webpen'
            target='_blank'
            rel='noopener'
          >
            Source Code
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
