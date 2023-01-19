import React ,{Component}from "react";
import './Login.css'
// import {Route} from "react-router-dom";
// import { Switch } from "react-router";
import Navdash1 from "./Navdash1";
import Logint from "./Logint";
// import {Switch,Route} from 'react-router-dom'
import Registration from"./Registration";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
// class Front extends Component{
//     constructor(){
//         super()
//         this.state={
//             'Login':'',
//             'Registration':''
            
//         }
//         // this.handleChangeFields=this.handleChangeFields.bind(this)
//     }
//     handleChangeFields=(event)=>{
//         this.setState({
//             ...this.state,
//             [event.target.name]:event.target.value
//         })
//         console.log(this.state,"formFilled")
    // }
    class Front extends Component{
       render(){ return (
         
        <BrowserRouter>
        <Navdash1/>
        <Routes>
            <Route  path="/Registration" element={<Registration/>}/>
            <Route path="/Logint" element={<Logint/>}/>
            {/* <Redirect to="/"/> */}
            

                     
 	 <div class="main">


			<div class="signup">
				    
					<label for="chk" aria-hidden="true"><h1>Tic-Tac-Toe</h1></label>
                    <button>Registration</button>
                    <button>Login</button>
				
			</div>
             <div class="login"/>

 		
        </div>   
            
            </Routes>
             </BrowserRouter>
             
        ) 
    }
};
export default Front;
