import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import copy from 'copy-to-clipboard';
import { LabelContact, MainContacts } from './Style';

function Contacts() {
  const [isCopied, setIsCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const HandleCopyEmail = (e) => {
    e.preventDefault();
    copy('vieira.vitor42@gmail.com');
    setIsCopied(true);
    setCopyMessage('Email copied!');
    setTimeout(
      () => {
        setIsCopied(false);
        setCopyMessage('');
      },
      2000,
    );
    window.open('mailto: vieira.vitor42@gmail.com', '_blank');
  };

  return (
    <MainContacts>
      <div>
        <LabelContact htmlFor="linkedIn">
          {' '}
          <abbr title="https://www.linkedin.com/in/vtorvieira/">
            <a href="https://www.linkedin.com/in/vtorvieira/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </abbr>
        </LabelContact>
        <LabelContact htmlFor="gitHub">
          {' '}
          <abbr title="https://github.com/VtorVieira">
            <a href="https://github.com/VtorVieira" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </abbr>
        </LabelContact>
        <LabelContact htmlFor="email">
          {' '}
          <abbr title="vieira.vitor42@gmail.com">
            <a href="mailto: vieira.vitor42@gmail.com" target="_blank" rel="noreferrer" onClick={HandleCopyEmail}>
              <AiOutlineMail />
            </a>
          </abbr>
        </LabelContact>
        {isCopied && <p id="copyMsg">{copyMessage}</p>}
      </div>
    </MainContacts>
  );
}

export default Contacts;
