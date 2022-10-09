import { MdSearch } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";


import styles from "./searchbar.module.scss";

type SearchbarProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
};


export const Searchbar: React.FC<SearchbarProps> = ({ value, onChange, placeholder, className }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const isHidden = inputRef.current?.value === "" ? styles.hidden : "";; 
    
    useEffect(() => {
        console.log('ok')
    }, [inputRef.current?.value])
    
    return(
        <div className={styles.searchbar}>
            <div>
                <span className={styles.iconAndText}>
                    <MdSearch size={25}/>
                    <input ref={inputRef} value={value} className={`${className}`} type="text" placeholder={placeholder}/>
                </span>
                
                <span className={styles.cancelBtn}>
                    <IoCloseSharp size={25}/>
                </span>
            </div>
        </div>
    )
}