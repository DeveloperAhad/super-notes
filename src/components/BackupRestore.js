import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

function BackupRestore() {
    const [notes, setNotes] = useContext(AppContext);

    const notes_json = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(notes));

    const restoreHandler = (event) => {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    const onReaderLoad = (event) => {
        var obj = JSON.parse(event.target.result);
        setNotes(obj);
        alert("Successfully notes restored!");
    }

    return (
        <div className="backup-restore">
            <a title="Backup notes" id="downloadAnchorElem" href={`data:${notes_json}`}  download="notes_backup.json"><i className="fas fa-download"></i></a>
            <label title="Restore notes" htmlFor="restoreInput"><i className="fas fa-upload"></i></label>
            <input id="restoreInput" type="file" onChange={restoreHandler} accept="application/json"/>
        </div>
    )
}

export default BackupRestore;
