import React from 'react';
import "./App.css";
import { useState, useEffect } from 'react';
 import DropzoneComponent from './DropzoneComponent';
import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';


export default function App() {

  /*const [posts, setPosts] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");
  const [newText, setNewText] = useState("");
  const [checked, setChecked] = React.useState(false);*/

  return (
    <main>
      
      <button className='button-1'> Shop</button>

      <button className='button-1'> Donate</button>

      <button className='button-1'> Refunds</button>

      <button className='button-1'> Comment</button>

      <button className='button-1'> Home</button>
      
      <button className='button-1'> Signin</button>


      <p className='overlay-text1'> cute plushies</p>

     


          <div className="App">
            <DropzoneComponent />
          </div>
        
      const baseStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        transition: 'border .3s ease-in-out'
      };

      const activeStyle = {
        borderColor: '#2196f3'
      };

      const acceptStyle = {
        borderColor: '#00e676'
      };

      const rejectStyle = {
        borderColor: '#ff1744'
      };

      function DropzoneComponent(props) {
        const onDrop = useCallback(acceptedFiles => {
          console.log(acceptedFiles);
        }, []);

        const {
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        } = useDropzone({
          onDrop,
          accept: 'image/jpeg, image/png'
        });

        const style = useMemo(() => ({
          ...baseStyle,
          ...(isDragActive ? activeStyle : {}),
          ...(isDragAccept ? acceptStyle : {}),
          ...(isDragReject ? rejectStyle : {})
        }), [
          isDragActive,
          isDragReject,
          isDragAccept
        ]);

        return (
          <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <div>Drag and drop your images here.</div>
          </div>
        )
      }
      const baseStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        transition: 'border .3s ease-in-out'
      };

      const activeStyle = {
        borderColor: '#2196f3'
      };

      const acceptStyle = {
        borderColor: '#00e676'
      };

      const rejectStyle = {
        borderColor: '#ff1744'
      };

      function DropzoneComponent(props) {
        const [files, setFiles] = useState([]);

        const onDrop = useCallback(acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
        }, []);

        const {
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        } = useDropzone({
          onDrop,
          accept: 'image/jpeg, image/png'
        });

        const style = useMemo(() => ({
          ...baseStyle,
          ...(isDragActive ? activeStyle : {}),
          ...(isDragAccept ? acceptStyle : {}),
          ...(isDragReject ? rejectStyle : {})
        }), [
          isDragActive,
          isDragReject,
          isDragAccept
        ]);

        const thumbs = files.map(file => (
          <div key={file.name}>
            <img
              src={file.preview}
              alt={file.name}
            />
          </div>
        ));

        // clean up
        useEffect(() => () => {
          files.forEach(file => URL.revokeObjectURL(file.preview));
        }, [files]);

        return (
          <section>
            <div {...getRootProps({style})}>
              <input {...getInputProps()} />
              <div>Drag and drop your images here.</div>
            </div>
            <aside>
              {thumbs}
            </aside>
          </section>

      export default DropzoneComponent;

      export default App;
    </main>
  );
}
