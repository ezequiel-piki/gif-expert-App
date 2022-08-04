export const getGifs = async(category)=>{
    
    const url   = `https://api.giphy.com/v1/gifs/search?api_key=0w0pa511aAL7Ru8Db63V4IuKqDSHk0gv&q=${category}&limit=10&offset=0&rating=g&lang=es`;

    const resp  = await fetch(url) ;
    const {data}= await resp.json();
    
    const gifs = data.map((images)=>({
        id:images.id,
        title:images.title,
        url:images.images.downsized_medium.url
    }))
    
    console.log(gifs);
     return gifs;
  }