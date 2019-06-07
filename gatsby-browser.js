import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const onServiceWorkerUpdateReady = () => {
  const modalRoot = document.getElementById('___modal');

  function ServiceWorkerPrompt() {
    return (
      <div className="modal">
        <p>The website has been updated. Reload to display the latest version?</p>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    );
  }

  ReactDOM.createPortal(<ServiceWorkerPrompt />, modalRoot);
};
