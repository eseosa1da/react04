import style from './Modal.module.css';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onClick}/>

};

const ModalOverlay = (props) => {
    return (
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,portalElement )}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            
            
        
        </>
    )


}

export default Modal;