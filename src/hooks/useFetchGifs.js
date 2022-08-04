import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

const useFetchGifs = (category) => {
    
    const [images , setImages  ] = useState([]);
    const [loading, setLoading ] = useState(true);

    const getImages = async() =>{
 
    const newImages = await getGifs(category);
    
    setImages(newImages) 
    
    setLoading(false)
    }
     
    
    useEffect(() => {
     
     getImages();
         
     }, []) 

    return {images, loading}
}

export default useFetchGifs;
   
   