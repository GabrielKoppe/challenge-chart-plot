import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import { useData } from '../../Context/DataContext.jsx';

import './Input.scss'

function Input() {
    const { data , setData } = useData()

    const [size, setSize] = useState(250);
    
    function handleResize(e){
        setSize(() => {
            if(e.clientY !== 0) 
                return e.clientY
        })
    }

    function handleEditorOnMount(editor, monaco) {
        monaco.editor.defineTheme('int-dark', {
            base: 'vs-dark',
            inherit: true,
            rules: [
                { token: 'number', foreground: 'c689f6'},
                { token: 'string.key.json', foreground: 'ffffff'},
                { token: 'string.value.json', foreground: '16a0ae'},
                { background: '2e3440' }
            ],
            colors: {
                'editor.background': '#2e3440',
                'editorLineNumber.foreground': '#414652',
                'selection.background': '#60656e',
                'editorGutter.background': '#60656e',
            }
        })
        monaco.editor.setTheme('int-dark')
    }

    
    return ( 
        <div className="input__container" >
            <Editor
                id='code'
                height={`${size}px`}
                language="json"
                value= {data}
                onChange={code => setData(code)}
                onMount={handleEditorOnMount}
                options={{
                    fontFamily: 'Source Code Pro',
                    fontSize: 16,
                    lineHeight: 24
                }}
            />
            <div 
                id = 'Draggable'
                draggable
                onDrag = {handleResize}
            >
                <hr/>
                <hr/>
            </div>
        </div>
    );
}

export default Input;