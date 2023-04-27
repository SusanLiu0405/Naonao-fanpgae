import {useRef} from 'react';
import Form from './Form.jsx';

function ModalDialog() { 
    const dialogRef = useRef();
    return (
      <div>
        <button onClick={() => dialogRef.current.showModal()}>
          Click here to see the form
        </button>
        <dialog ref={dialogRef}>
          <Form></Form>
        </dialog>
      </div>
    );
}
export default ModalDialog;