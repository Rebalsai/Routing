import { Link } from "react-router-dom";

const NavigationRouting = () =>{

    return(
    <div>
           {/* to means home page */}
         <Link to="/home">   Screen1 </Link>&emsp;
         <Link to="/screen2">  Screen2 </Link>&emsp;
         <Link to="/screen3/:id">  Screen3 </Link>&emsp;
         <Link to="/screen4">  Screen4 </Link>&emsp;
         <Link to="/screen5/:id">  Screen5 </Link>&emsp;

        
    </div>
    )
}
export default NavigationRouting;