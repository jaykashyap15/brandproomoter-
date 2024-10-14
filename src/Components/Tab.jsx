import { useState } from "react";

function Tab(){
    const [activeTab,setActivetab]=useState("tab1");
    const handleclick=(tab)=>{
        setActivetab(tab);
    }
return(
    <div>
    <center>
         <h1>Tab</h1>
<button onClick={()=>handleclick("tab1")}>Tab1</button>
<button onClick={()=>handleclick("tab2")}>Tab2</button>
<button onClick={()=>handleclick("tab3")}>Tab3</button>

<div>
    {activeTab==="tab1" &&(
        <div>
            <h1>tab 1</h1>
            </div>
    )}
     {activeTab==="tab2" &&(
        <div>
            <h1>tab 2</h1>
            </div>
    )}
     {activeTab==="tab3" &&(
        <div>
            <h1>tab 3</h1>
            </div>
    )}
</div>
    </center>
    </div>
   
)

}
export default Tab;