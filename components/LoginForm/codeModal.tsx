import {Modal} from '../Modal';

export const CodeModal = ({handleModal}:{handleModal: any}) =>{
     return(
          <Modal isOpen={true} closeModal={handleModal}>
          <div>
               <div>Verification Code</div>
               <div>Please enter the verification code sent to your email</div>

               <div>
                    4 2 3 2
               </div>

               <div>
                    RESEND CODE
               </div>

               <button>Send</button>
          </div>
          </Modal>
     )
}
