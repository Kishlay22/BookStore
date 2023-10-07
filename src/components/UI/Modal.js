import ReactDOM from 'react-dom';
import style from './Modal.module.css';
const Backdrop=props=>{
    return <div className={style.backdrop} onClick={props.onShow}></div>
}

const ModalOverlay=props=>{
    return <div className={style.modal}>
        <div className={style.content}>{props.children}</div>
    </div>
}

const portalElement=document.getElementById('overlays');
const Modal=props=>{
  return(
      <>
      {ReactDOM.createPortal(<Backdrop onShow={props.onShow}/>,portalElement)}
      
      { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
      </>
  )
}

export default Modal;