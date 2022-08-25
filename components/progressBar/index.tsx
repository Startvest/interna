// import styles from "./progress.module.css";

export function ProgressBar (props : any){
     const {completed } = props;
     const containerStyles = {
          height: 5,
          width: `20rem`,
          backgroundColor: "#d3e2ed",
          borderRadius: 50,
          margin: 50
        }
      
        const fillerStyles = {
          height: '100%',
          width: `${completed}%`,
          backgroundColor: "#21295c",
          borderRadius: 'inherit',
          transition: 'width 1s ease-in-out',
        }      
     return (
       <div style={containerStyles}>
         <div style={fillerStyles}>
           {/* <span>{`${completed}%`}</span> */}
         </div>
       </div>
     );
   };