import React from 'react'
import PostFiltersForm from './PostFiltersForm'

function Home() {

    function handleFiltersChange(newFilters:any){
        console.log("New Filters: " , newFilters);
        
    }

  return (
    <>
    <div>Home</div>
    <PostFiltersForm onSubmit={handleFiltersChange}/>
    </>

  )
}

export default Home