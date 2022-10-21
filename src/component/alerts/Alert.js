import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import SuccessAlert from 'component/alerts/SuccessAlert';
import DangerAlert from 'component/alerts/DangerAlert';

Alert.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
};

function Alert(props) {
    const [show, setShow] = useState(true);
    const showContainer = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, []);

    return (
        <>
            <CSSTransition
                in={show}
                timeout={300}
                nodeRef={showContainer}
                classNames={{
                    enter: 'opacity-0',
                    enterActive: 'ease-out duration-300',
                    enterDone: 'opacity-100',
                    exit: 'opacity-100',
                    exitActive: 'ease-in duration-200',
                    exitDone: 'opacity-0',
                }}
                unmountOnExit
            >
                <div ref={showContainer}>
                    {props.type === 'success' && (
                        <SuccessAlert
                            setShow={setShow}
                            message={props.message}
                        />
                    )}

                    {props.type === 'danger' && (
                        <DangerAlert
                            setShow={setShow}
                            message={props.message}
                        />
                    )}
                </div>
            </CSSTransition>
        </>
    );
}

export default Alert;
