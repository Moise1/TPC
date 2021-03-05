import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import '../assets/styles/confirm-alert.css';

export const ConfirmAlert = () => {

    const resetTable = () => localStorage.removeItem("data");
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='confirm-alert'>
                    <p>
                        This action  deletes all data currently in the table. Are you sure?
                    </p>

                    <div className="action-btns">
                        <button onClick={onClose} className="cancel-btn">Cancel</button>
                        <button
                            className="reset-btn"
                            onClick={() => {
                                resetTable();
                                onClose();
                                window.location.reload();
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            );
        }
    });

}