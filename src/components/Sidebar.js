import React, {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';

function Sidebar() {
    const [state, setstate] = useState(false);
    const [notes, setNotes] = useContext(AppContext);

    const sidebarHandler = () => {
        setstate(!state);
    }

    const noteHandler = (e) => {
       const color = e.target.dataset.color;
       let id;
       try {
         id = notes[notes.length -1].id + 1
       } catch(e) {
         id = 1
       }
       const currentdate = new Date(); 
       const datetime = `Created at: ${currentdate.getDate()}-${(currentdate.getMonth()+1)}-${currentdate.getFullYear()} ${currentdate.getHours()}.${currentdate.getMinutes()}`;
       
       setNotes([
            ...notes, {
            "id": id,
            "background": color,
            "note": "",
            "datetime": datetime
            }
        ]);
        setstate(!state);
    }   
    
    return (
        <div className="sidebar">
            <div className="sidebar-switch" onClick={sidebarHandler}>{state ? (<i className="fas fa-chevron-up"></i>): (<i className="fas fa-chevron-down"></i>)}</div>
            {state && (
                <ul className="note-style-list">
                    <li className="nst-red" data-color="#e63946" onClick={noteHandler}></li>
                    <li className="nst-green" data-color="#52b69a" onClick={noteHandler}></li>
                    <li className="nst-yellow" data-color="#ee9b00" onClick={noteHandler}></li>
                    <li className="nst-blue" data-color="#00b4d8" onClick={noteHandler}></li>
                    <li className="nst-aysh" data-color="#8d99ae" onClick={noteHandler}></li>
                    <li className="nst-coffee" data-color="#7f4f24" onClick={noteHandler}></li>
                    <li className="nst-pink" data-color="#ef476f" onClick={noteHandler}></li>
                </ul>
            )};
            
        </div>
    )
}

export default Sidebar
