 export default function TabButton({label,onslected}){
   
   // function handleClick(){
   //    console.log('Hello world');
   // }
    return (
         <li>
            <button onClick={onslected}>{label}</button>
         </li>
    );
    
    
 }