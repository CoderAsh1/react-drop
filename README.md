# react-drop-upload

Drop and Upload Images with Ease

Documentation and examples at https://react-dropzone.js.org. Source code at https://github.com/react-dropzone/react-dropzone/.


## Installation
Install it from npm and include it in your React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/), etc).

```bash
npm install --save react-drop-upload
```
or:
```bash
yarn add react-drop-upload
```

### How to Use


```bash
import { useState } from 'react'
import Drop from 'react-drop-upload'

function App() {
  const [state, setState] = useState([])
  const multiple = true

  function handleDrop(files) {
    
    // Do what you want with the files

    // For ex - 

    if(!multiple){
      let temp = [...state]
      let url = URL.createObjectURL(files[0]);
      temp.push({url:url,name : files[0].name});
      setState(temp)
      return;
    }
    let temp = [...state];
    for (let file of files) {
      let url = URL.createObjectURL(file);
      temp.push({url:url,name : file.name});
    }
    setState(temp);
  }

  return (
    <div style={{width:'100%'}}>
      <Drop handleDrop={handleDrop} state={state} setState={setState} name={'Image'} accept='image/*'/> 
    </div>
  )
}

export default App


```