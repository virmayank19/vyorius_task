import React from 'react';
import './home.css';
import mainPageimg from "./images/mainPageimg.png";
function Home () {
  return (
    <div class="page1">
      <div class="row">
        <div class="page1col">
            <h6 class="mainPageHeading6"> CONNECTING THE DISCONNECTED </h6> 
            <h1 class="mainHeading">
               <span class="orangeText"> Vyorius </span>brings 
               <span class="textinSingleline"> unmanned robots <span class="orangeText"> together</span></span>,
               <br/>
               wherever they are
            </h1>

            <p class="mainPageP"> 
              With all of the operations, commanding and maintenance tools in one place,unmanned vehicles will stay connected and productive no matter where you’re operating. 
            </p> 
            <button type="button" class=" btn  button1"> Try Vyorius </button> 
            <button type="button" class=" btn  button2"> <a href="#" class="ancTag">Learn More</a> </button>
            <p class="deliveryLink"> 
               <span> Need to order  ? <a href="#page2" class="link1"> Get Started </a></span> 
            </p>
        </div>

        <div class="page1col">
              <img src={mainPageimg}/>
        </div>
        
      </div>
      
    </div>


    // <div>
        
    //     <div class="row">
        
    //       <div style={{display: inline-block, width:50,}}>
              
    //           <h6 class="mainPageHeading6"> CONNECTING THE DISCONNECTED </h6> 
    //           <h1 class="mainHeading">
    //             <span class="orangeText"> Vyorius </span>brings 
    //             <span class="textinSingleline">unmanned robots <span class="orangeText"> together</span></span>,
    //             <br/>
    //             wherever they are
    //           </h1>
    //           <p class="mainPageP"> 
              
    //           With all of the operations, commanding and maintenance tools in one place,unmanned vehicles will stay connected and productive no matter where you’re operating. 
    //           </p> 
              
    //           <button type="button" class=" btn  button1"> Try Vyorius </button> 
    //           <button class=" btn button2"> <a href="#" style="color: rgb(255, 145, 77);">Learn More</a> </button> 
              
    //           <br/>
    //           <p class="deliveryLink"> 
    //             <span> Need to order  ? <a href="#page2" class="link1"> Get Started </a></span> 
    //           </p>
          
          
    //       </div>
             
    //       {/* <div class="page1col page1imagecol">
    //           <img src={mainPageimg} alt="" class="image" style="float: right;"/>
    //       </div>
    //       <div class="page1col "></div> */}
        
    //     </div>
    // </div>
  )
}


export default Home;
