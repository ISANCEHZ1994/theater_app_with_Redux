import React from 'react';


export default function Search ({handleInput,search}){
        return(
            <>
            <h1 style={{textAlign: 'center'}}> Lets look for a movie! </h1>
          <section className='searchbox-wrap' style={{textAlign: 'center'}}>
              <input 
                    type='text' 
                    placeholder='Search For A Movie...' 
                    className='searchbox' 
                    onChange={handleInput} 
                    onKeyPress={search}
              /> 
          </section>

          
          </>

        )
};