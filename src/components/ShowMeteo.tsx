import React from 'react';


function ShowMeteo( props: { meteo: any[any] } ) {
    console.log(props.meteo)
  return (
      <div>
          {props.meteo.hasOwnProperty('current') && 
            <div>
                <h3>{props.meteo.location.name} {props.meteo.location.country}</h3>
                <h3>{props.meteo.current.temp_c}</h3>
                
            </div>  }
          
      </div>
  );
}

export default ShowMeteo;