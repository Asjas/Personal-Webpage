const React = require('react');
const ReactDOM = require('react-dom');

export const onServiceWorkerUpdateReady = () => {
  const modalRoot = document.getElementById('___modal');

  function reloadPage() {
    if (window) {
      window.location.reload();
    }
  }

  function ServiceWorkerUpdateReady() {
    return (
      <div className="sw-modal">
        <p className="sw-content">
          The website has been updated. Reload to display the latest version?
        </p>
        <button className="sw-button" onClick={reloadPage} type="submit">
          Reload
        </button>
      </div>
    );
  }

  ReactDOM.render(<ServiceWorkerUpdateReady />, modalRoot);
};

export const onServiceWorkerInstalled = () => {
  const modalRoot = document.getElementById('___modal');

  function closeModal() {
    modalRoot.removeChild(modalRoot.childNodes[0]);
  }

  function ServiceWorkerInstalled() {
    return (
      <div className="sw-modal">
        <p className="sw-content">The website content is now available offline.</p>
        <button className="sw-button" onClick={closeModal} type="submit">
          Dismiss
        </button>
      </div>
    );
  }

  ReactDOM.render(<ServiceWorkerInstalled />, modalRoot);
};
