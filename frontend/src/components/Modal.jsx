import React, { useLayoutEffect } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

function Modal({ isShowing, hide, rocket }) {
  useLayoutEffect(() => {
    if (!isShowing) {
      document.getElementById("root").classList.remove("no-scroll");
    } else document.getElementById("root").classList.add("no-scroll");
  });
  return isShowing
    ? ReactDom.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4 className="modal-name">{rocket.rocket_name}</h4>
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">{rocket.description}</div>
              </div>
            </div>
          </div>

          <style>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 250;
              background-color: rgba(0, 0, 0, 0.8);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 100;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: rgba(0, 0, 0, 0.7);
              position: relative;
              margin: auto;
              border: 0.2rem solid rgba(3, 151, 145, 1);
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-name {
              align-content: center;
              text-align: center;
              color: rgb(3, 151, 145);
              font-size: large;
            }

            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: rgba(3, 151, 145, 1);
              cursor: pointer;
              border: none;
              background: transparent;
            }

            .modal-body {
              margin: 1rem;
              font-family: "Karla", sans-serif;
              font-size: medium;
              color: rgb(255, 255, 255);
              line-height: 1.6rem;
              letter-spacing: 0.07rem;
            }
          `}</style>
        </>,
        document.body
      )
    : null;
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Modal;
