/* eslint-disable @typescript-eslint/no-var-requires */
const React = require('react');
const ReactDOM = require('react-dom');

const modalRoot = document.getElementById('___modal');

function closeModal(element) {
  element.removeChild(element.childNodes[0]);
}

function reloadPage() {
  if (window) {
    window.location.reload();
  }
}

export const onServiceWorkerUpdateReady = () => {
  function ServiceWorkerUpdateReady() {
    return (
      <div className="modal">
        <p className="modal__content">
          The website has been updated. Reload to display the latest version?
        </p>
        <button className="modal__button modal__button--primary" onClick={reloadPage} type="submit">
          Reload
        </button>
        <button
          className="modal__button modal__button--secondary"
          onClick={closeModal.bind(null, modalRoot)}
          type="submit"
        >
          &times;
        </button>
      </div>
    );
  }

  ReactDOM.render(<ServiceWorkerUpdateReady />, modalRoot);
};

export const onServiceWorkerInstalled = () => {
  function ServiceWorkerInstalled() {
    return (
      <div className="modal">
        <p className="modal__content">The website content is now available offline.</p>
        <button
          className="modal__button modal__button--secondary"
          onClick={closeModal.bind(null, modalRoot)}
          type="submit"
        >
          &times;
        </button>
      </div>
    );
  }

  ReactDOM.render(<ServiceWorkerInstalled />, modalRoot);
};
