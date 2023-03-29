import React, { useState } from "react";
import './Home.css';
function Home()
{
    const [clicknumber,setclicknumber]=useState(0);
   const [array,SetArray]=useState([
    [0,0,0],
    [0,0,0],
    [0,0,0]
   ]);
   
   
    const handleClick=(e)=>{
        setclicknumber(clicknumber+1)
        let row,col
        console.log(e.target.name)
        if(e.target.name==1 || e.target.name==2 || e.target.name==3)
        {
            row=0;
            if(e.target.name%3==0)
            col=2
            else if(e.target.name%3==2)
            col=1
            else
            col=0

        }
        else if(e.target.name==4 || e.target.name==5 || e.target.name==6)
        {
            row=1;
            if(e.target.name%3==0)
            col=2
            else if(e.target.name%3==2)
            col=1
            else
            col=0

        }
        else
        {
            row=2;
            if(e.target.name%3==0)
            col=2
            else if(e.target.name%3==2)
            col=1
            else
            col=0

        }
          console.log(row,col)

      
        if(clicknumber%2==0){
         e.target.value="X"
         console.log( e.target.value)
         array[row][col]=7
         console.log(Array)
        SetArray([...array,array[row][col]])
     
        }
        else{
            e.target.value="O"
            console.log( e.target.value)
            array[row][col]=8
            console.log(Array)
           SetArray([...array,array[row][col]])

        }
         
    }
    
    
    return(
        <>
        
        <div className="Main">
            <div className="Container">
                
                 <input className="inp" onClick={handleClick} type='text' name="1" placeholder="1" id="1"readOnly/>
                 <input className="inp" onClick={handleClick} type='text'name="2" placeholder="2" id="2"readOnly/>
                 <input className="inp" onClick={handleClick} type='text'name="3" placeholder="3" id="3"readOnly/>
                <br/><br/>
                <input  className="inp" onClick={handleClick}  type='text' name="4"placeholder="4" id="4"readOnly/>
                <input className="inp" onClick={handleClick} type='text' name="5" placeholder="5" id="5"readOnly/>
                <input className="inp" onClick={handleClick} type='text' name="6" placeholder="6" id="6"readOnly/>
                <br/><br/>
                <input className="inp" onClick={handleClick} type='text' name="7" placeholder="7" id="7"readOnly/>
                <input className="inp" onClick={handleClick} type='text' name="8" placeholder="8" id="8"readOnly/>
                <input className="inp" onClick={handleClick} type='text' name="9" placeholder="9" id="9"readOnly/>
                
            </div>
        </div>
        </>
    );

}
export default Home;