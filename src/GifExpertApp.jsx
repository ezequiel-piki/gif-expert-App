import { useState } from "react";
import {AddCategory, GifGrid} from './components'




export const GifExpertApp = () => {

const [categories, setCategories]   = useState(['One Punch']);

const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return;

    console.log  (newCategory)
    setCategories([newCategory, ...categories]);
 }

  return (
    
    <>

    <h1>Expert App</h1>
    
     <AddCategory 
      onNewCategory={(inputValue)=>onAddCategory(inputValue)}
     />
     
      
        {categories.map(category =>(
                                    <GifGrid key={category} category={category}/>
                                    ))
        }
   
    
    </>
  )
}
