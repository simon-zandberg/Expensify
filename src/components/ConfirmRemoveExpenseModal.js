import React from 'react';
import Modal from 'react-modal';

const ConfirmRemoveExpenseModal = (props) => (
    <Modal
        appElement = {document.getElementById('app')}
        isOpen = {!!props.selectedExpense}
        //onRequestClose = {props.handleClearSelectedOption}
        contentLabel = 'Confirm expense removal'
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Confirm removal?</h3>
        {props.selectedExpense && <p className="modal__body">{props.selectedExpense.description}</p>}
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">        
                    <button className="button" onClick={props.onRemoveExpense}>OK</button>
                </div>
                <div className="input-group__item">
                    <button className="button button--secondary" onClick={props.cancelRemoveExpense}>Cancel</button>
                </div>
            </div>
        </div>
    </Modal>
);

export default ConfirmRemoveExpenseModal;