// /* eslint-disable react/jsx-no-bind */
// /* eslint-disable @typescript-eslint/no-var-requires */
// const React = require('react');
// const ReactDOM = require('react-dom');
// const styled = require('styled-components');

// const Modal = styled.div`
//   display: flex;
//   background-color: $primaryColor;
//   position: fixed;
//   bottom: 30px;
//   left: 0;
//   right: 0;
//   width: 80%;
//   border-radius: 4px;
//   margin: 0 auto;
//   z-index: 10;
//   will-change: transform opacity;
//   animation: animateModal 0.9s cubic-bezier(0.48, 0.18, 0, 0.53);

//   @media screen and (max-width: $laptop) {
//     width: 90%;
//   }

//   @media screen and (max-width: $tablet) {
//     width: 95%;
//   }

//   @keyframes animateModal {
//     0% {
//       opacity: 0;
//       transform: scale(0.7);
//     }

//     80% {
//       opacity: 0.8;
//       transform: scale(1.1);
//     }

//     100% {
//       opacity: 1;
//       transform: scale(1);
//     }
//   }
// `;

// const ModalContent = styled.p`
//   color: #fff;
//   flex: 7 1 auto;
//   padding: 0 15px;
//   font-size: $fontSmall;
// `;

// const ModalButton = styled.button`
//   color: $white;
//   flex: 1 7 auto;

//   &--primary {
//     background: $black;
//     border: none;
//     font-size: $fontMedium;
//   }

//   &--secondary {
//     border-radius: 0 4px 4px 0;
//     border: 1px solid $primaryColor;
//     background: $primaryColor;
//     font-size: 25px;
//   }
// `;

// const modalRoot = document.getElementById('___modal');

// function closeModal(element) {
//   element.removeChild(element.childNodes[0]);
// }

// function reloadPage() {
//   if (window) {
//     window.location.reload();
//   }
// }

// export const onServiceWorkerUpdateReady = () => {
//   function ServiceWorkerUpdateReady() {
//     return (
//       <Modal>
//         <ModalContent>
//           The website has been updated. Reload to display the latest version?
//         </ModalContent>
//         <ModalButton
//           className="modal__button modal__button--primary"
//           onClick={reloadPage}
//           type="submit"
//         >
//           Reload
//         </ModalButton>
//         <ModalButton
//           className="modal__button modal__button--secondary"
//           onClick={closeModal.bind(null, modalRoot)}
//           type="submit"
//         >
//           &times;
//         </ModalButton>
//       </Modal>
//     );
//   }

//   ReactDOM.render(<ServiceWorkerUpdateReady />, modalRoot);
// };

// export const onServiceWorkerInstalled = () => {
//   function ServiceWorkerInstalled() {
//     return (
//       <Modal>
//         <ModalContent>The website content is now available offline.</ModalContent>
//         <ModalButton
//           className="modal__button modal__button--secondary"
//           onClick={closeModal.bind(null, modalRoot)}
//           type="submit"
//         >
//           &times;
//         </ModalButton>
//       </Modal>
//     );
//   }

//   ReactDOM.render(<ServiceWorkerInstalled />, modalRoot);
// };
