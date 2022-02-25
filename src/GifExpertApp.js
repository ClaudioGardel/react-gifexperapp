import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])
  
  // const handleAdd =  ()=>{
    // setCategories(categories.concat('SpiderMan'));
    // setCategories([...categories , 'nuevo' ]);
    // setCategories(cats => [...cats, 'Hola']);

  // }
  return (

    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories ={setCategories}/>
       
      <ol className='ol'>
          {
            categories.map( category => (
              <GifGrid 
                key={category}
                category={ category }
              />
            ))
          }
      </ol>

    </>
  )
}

