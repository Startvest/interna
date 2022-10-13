import {useEffect, useState} from 'react';

export const isMobile = () =>{
     const [screen, setScreen] = useState(window.document.body.clientWidth);
     useEffect(() => {
          setScreen(window.document.body.clientWidth);
     }, [window.document.body.clientWidth])
     return screen <= 700;
}