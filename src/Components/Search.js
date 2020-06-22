import React from 'react';


export default function Search ({handleInput,search}){
        return(
          <section className='searchbox-wrap'>
              <input 
                    type='text' 
                    placeholder='Search For A Movie...' 
                    className='searchbox' 
                    onChange={handleInput} 
                    onKeyPress={search}
              /> 
          </section>
        )
};