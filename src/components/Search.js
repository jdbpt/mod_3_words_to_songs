import React, { useState } from 'react';
import "./components.css"
//primary code source: Coding Shiksha: https://www.youtube.com/watch?v=44-Kx5ZZTsY&t=1s
//code source: Caffeine Code on Youtube:https://www.youtube.com/watch?v=XWePdlCGTno
//**contains the search bar and video for searching the YouTube api */
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const onSearch = props.onSearch;
  
  const onSearchChanged = (e)=>{
    const _title = e.target.value;
    console.log(_title);
    setSearchValue(_title);
    
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(searchValue);
    onSearch(searchValue);
    
  };

  return (
    <div className='formSize'>
       <form onSubmit={onSubmit}>
        <div className="form-controls">
          <h2>YouTube Search*</h2>
          <label htmlFor="searching">Explore Videos</label>&nbsp;
          <input value={searchValue} onChange={onSearchChanged} id="searching" type='text' placeholder=''/>
        </div>
        
       </form>
    </div>
  )
}

export default Search;