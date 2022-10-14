import { MdSearch } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";


import styles from "./searchbar.module.scss";

type SearchbarProps = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};


export const Searchbar: React.FC<SearchbarProps> = ({ onBlur, value, onChange, onFocus ,placeholder, className }) => {
        
    return(
        <div className={styles.searchbar}>
            <div>
                <span className={styles.iconAndText}>
                    <MdSearch size={25}/>
                    <input 
                        onBlur={onBlur}
                        onChange={onChange}
                        onFocus={onFocus} 
                        value={value} 
                        className={`${className}`} 
                        type="text" 
                        placeholder={placeholder}
                    />
                </span>
                
                <span onClick={() => onBlur} className={styles.cancelBtn}>
                    <IoCloseSharp size={20}/>
                </span>
            </div>
        </div>
    )
}