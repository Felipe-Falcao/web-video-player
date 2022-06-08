import React from 'react'
import './style.css'

{/* <input id='input' type='file' className="custom-file-input" onChange={onChange} /> */ }

const FileButton = ({ onChange, text = 'Selecione o arquivo...' }) => {
    return (
        <>
            <input type="file" name="file" id="file" class="inputfile" onChange={onChange} />
            <label for="file">{text}</label>
        </>
    )
}

export default FileButton