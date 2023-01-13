import React from 'react'

function SortFunction({data,onDataChange}) {
    const SortByStars = () => {
        let temp = data;
        temp.sort((a, b) => {
          return a.stargazers_count - b.stargazers_count;
        });
        onDataChange([...temp]);
      };
    
      const SortByWatchersCount=()=>{
        let temp = data;
        temp.sort((a, b) => {
          return a.watchers_count - b.watchers_count;
        });
        onDataChange([...temp]);
      }
      const SortByNameCount=()=>{
        let temp = data;
        temp.sort((a, b) => {
          return a.name - b.name;
        });
        onDataChange([...temp]);
      }
      
      const SortByCreatedDate=()=>{
        let temp = data;
        temp.sort((a, b) => {
          return  new Date(a.updated_at)- new Date(b.updated_at);
        });
        onDataChange([...temp]);
      }

      const SortByUpdatedDate=()=>{
        let temp = data;
        temp.sort((a, b) => {
          return  new Date(a.created_at)- new Date(b.created_at);
        });
        onDataChange([...temp]);
      }
  return (
    <>
      <label className="dropdown">
          <div className="dd-button">Sort BY</div>
          <input type="checkbox" className="dd-input" id="test" />

          <ul className="dd-menu">
            <li onClick={SortByStars}>Stars</li>
            <li onClick={SortByWatchersCount}>Watchers count</li>
            <li onClick={SortByNameCount}>Name</li>
            <li onClick={SortByCreatedDate}>Created_at</li>
            <li onClick={SortByUpdatedDate}>Updated_at</li>
          </ul>
        </label>
    </>
  )
}

export default SortFunction
