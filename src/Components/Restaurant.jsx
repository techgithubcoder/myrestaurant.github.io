import React, {useState} from 'react'
import Right from './Right'
import MenuApi from "./menuApi"


const Restaurant = () => {
    const [menuData, setMenuData] =useState(MenuApi)

    const filterItem = (category) => {
      if (category === "All") {
        setMenuData(MenuApi);
        return;
      }
  
      const updatedList = MenuApi.filter((curElem) => {
        return curElem.category === category;
      });
  
      setMenuData(updatedList);
    };

   /*  function filterResult(category){
        let result=menuData.filter((currElem)=>{
            console.log(category)
            if(currElem.category===category){
                return currElem;
                
            }
      })
      SetMenuData(result)
      
    } */

  return (
    <>
    <div className='menu pt-2'>
            <button type="button" className="btn btn-outline-danger btn-lg btnPadding" onClick={()=>filterItem("All")}>Home</button>
            <button type="button" className="btn btn-outline-danger btn-lg btnPadding" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
            <button type="button" className="btn btn-outline-danger btn-lg btnPadding" onClick={()=>filterItem("Lunch")}>Lunch</button>
            <button type="button" className="btn btn-outline-danger btn-lg btnPadding" onClick={()=>filterItem("Evening")}>Evening</button>
            <button type="button" className="btn btn-outline-danger btn-lg btnPadding" onClick={()=>filterItem("Dinner")}>Dinner</button>
        
        </div>
    
    <Right menuData={menuData}/>
    </>
  )
}

export default Restaurant