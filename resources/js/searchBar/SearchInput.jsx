import React, { useEffect, useState } from 'react'
import './SearchInput.css';

function SearchInput() {

    const[searchText,setSearchText] = useState('')
    const[searchResult,setSearchResult] = useState([])
    // console.log(searchText);

    
    const fetchSearch = async()=>{
         
        const response = await fetch(`http://www.search.test/api/search/${searchText}`);
        const data = await response.json()
        setSearchResult(data.items)
        console.log(data);
       
      }

      const handleSave = () => {
        const fileData = JSON.stringify(searchResult, null, 2);
        const blob = new Blob([fileData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'search_results.json';
        link.click();
    };


  return (
    <div className='mainContainer'>
        <div className='mainContainer-head'>
            <h1 className='mainContainer-head_title'>Search Engine</h1>
             <div className='mainContainer-head_input'>
            <input className='inputField' placeholder='search...' value={searchText} type="text" onChange={(e)=>{setSearchText(e.target.value)}} />
            <button className='button' onClick={fetchSearch}>search</button>
            {
              searchResult.length > 1 ?  
            <button className='button-save' onClick={handleSave}>Save Results</button>
            : " "
            }
            </div>
        </div>
            <div className='mainContainer-results'>
            {
        searchResult.map(item=>{
         
          return(
            <>
             <div>
               <a className='mainContainer-results_title' href={item.link}>{item.title}</a>
               <p>{item.snippet}</p>
               <a className='mainContainer-results_link' href={item.link}>{item.link}</a>
             </div>
            
            </>
            )
          })
            }
            </div>
        
    </div>
  )
}

export default SearchInput