import React, { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import styles from './login.module.scss';
import {useRouter} from 'next/router';
import { useMutation } from 'react-query';
import {TError} from '../../services';
import {VerifyCode} from '../../services/authentication';

export const CodeModal = ({ handleModal, email }: { handleModal: any, email:string }) => {
  const [codes, setCodes] = useState([...Array(4)].map(() => ''));
  const [verified, setVerified] = useState(false);
  const [errorText, setErrorText] = useState("");
  const router = useRouter();

  const codeMutation = useMutation(VerifyCode, {
    onError(error: TError) { },
  });


  useEffect(() => {
    document.getElementById(String(0))?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    e.preventDefault();
    if (e.target.value.length <= 1) {
      var c = [...codes];
      c[i] = e.target.value;
      setCodes([...c]);
    }
    if (e.target.value !== '') {
      const nextTextBox = document.getElementById(String(i + 1));
      if (nextTextBox) {
        nextTextBox?.focus();
      }
    }
  };

  useEffect(() => {
    if (codeMutation.isSuccess) {
        setVerified(true);
    }
    if(codeMutation.isError){
        console.log(codeMutation.data);
        setErrorText(codeMutation.error.response.data.toString());
    }
    }, [codeMutation.isSuccess, codeMutation.isError]
  );

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement> | any) => {
    e.preventDefault();
    if (codes.join('').length === 4) {
      codeMutation.mutateAsync({
        email,
        code: codes.join('').toString()
      })
      
    }
  };

  useEffect(() => {
    if(verified == true){
      setTimeout(() => {
        router.push('/complete-signup')
      }, 3000);
    }
  }
  , [verified])
  return (
    <Modal isOpen={true} closeModal={handleModal} fixed={true}>
      {!verified ? (
        <div>
          <div className={styles.header}>Verification Code</div>
          <div className={styles.altLoginText}>
            Please enter the verification code sent to your email {email}
          </div>

          <div className={styles.inputContainer}>
            {codes.map((v, i) => (
              <input
                key={i}
                id={i.toString()}
                onChange={(e) => handleChange(e, i)}
                className={styles.codeInput}
                onKeyUp={handleSubmit}
                type="number"
                pattern="\d*"
                max={9}
                maxLength={1}
              />
            ))}
          </div>

          <div className={styles.resendText}>RESEND CODE</div>

          {errorText && <div className={styles.errorText}>
            {errorText}
          </div>}

          <button
            onClick={handleSubmit}
            disabled={codeMutation.isLoading}
            className={`${styles.btnPrimary} ${styles.bottom}`}
          >
            {(codeMutation.isLoading) && <>...</>}
            {(codeMutation.isIdle) && <>Verify</>}
          </button>
        </div>
      ) : (
        <div>
          <div className={styles.header}>Email Verified!</div>
          <img
            className={styles.confirmImage}
            src="/assets/illustrations/mail_verified.svg"
            alt="profile"
          />
          <div className={styles.altLoginText}>
            Welcome to the Interna family, and have fun exploring our community!
            🚀
          </div>
          <button
            onClick={handleModal}
            className={`${styles.btnPrimary} ${styles.bottom}`}
          >
            Redirecting....
          </button>
        </div>
      )}
    </Modal>
  );
};
