import React, {useContext, useEffect} from 'react';
import { AppContext } from '../context/AppContext';

function Container() {
    const [notes, setNotes] = useContext(AppContext);

    useEffect(() => {
        const getNotes = JSON.parse(localStorage.getItem("notes"));
        if(getNotes !== null) {
            setNotes(getNotes)
        }
    }, [setNotes]);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const notechangeHandler = (e) => {
        const newlist = notes.map(el => {
            if(Number(el.id) === Number(e.target.dataset.id)) {
                return {...el, note: e.target.value}
            }
            return el;
        });
        setNotes(newlist);
    }

    const notedeleteHandler = (id) => {
        const answer = window.confirm('Do you want to delete this note?');
        if (answer) {
            const newlist = notes.filter(el => Number(el.id) !== Number(id));
            setNotes(newlist);
        }
    }


    return (
        <div className="note-container">
            {notes.slice(0).reverse().map((el, index) => 
                <div key={index} className="note-item" style={{background: el.background}}>
                    <textarea data-id={el.id} onChange={notechangeHandler} value={el.note} draggable='false'></textarea>
                <h6>{el.datetime}</h6>
                <button className="deleteButton" onClick={() => notedeleteHandler(el.id)}><i className="far fa-trash-alt"></i></button>
            </div>
        )}
            
        </div>
    )
}

export default Container
