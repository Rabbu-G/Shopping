import React, {useState} from 'react';
import '../css/pop.css';

const Pop = () => {
    const[popup,setPop] = useState(false);
    const handleClickopen = ()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
  return (
    <div>
        <button onClick={handleClickopen}>open</button>
        <div className='new'>
            {popup?
            <div className='main'>
                <div className='popup'>
                    <div className='popup-header'>
                        <h1>popup</h1>
                        <h1 className='p' onClick={closePopup}>X</h1>
                    </div>
                    <div>
                        <p>......</p>
                    </div>
                    </div>
            </div>:""}
        </div>
    </div>
  )
}

export default Pop