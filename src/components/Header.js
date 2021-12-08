import React from 'react';

const Header = ({search, updatesearch, selected}) => {
    return (
            <div className='top'>
                <div className='input-icon'>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input 
                        placeholder='Search For a Country ....' type='text'
                        value={search}
                        onChange = {updatesearch}/>

                </div>
                
                
                <select onChange = {selected}>
                    <option value="">Filter by region</option>
                    <option value='africa'>Africa</option>
                    <option value='america'>America</option>
                    <option value='asia'>Asia</option>
                    <option value='europe'>Europe</option>
                    <option value='oceania'>Oceania</option>
                </select>
            </div>
    )
}

export default Header
