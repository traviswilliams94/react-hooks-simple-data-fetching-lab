// create your App component here

import React, { useState, useEffect } from 'react';

function App() {
const APIURL = "https://dog.ceo/api/breeds/image/random";

const [image, setImage] = useState(null)



useEffect(() =>  {
    fetch(APIURL)
    .then(res => res.json())
    .then(data => setImage(data.message))
}, [])

if (!image) {
    return <p>Loading...</p>
}

return (

    <div>
        <img src={image} alt="A Random Dog" />
    </div>
)
}


export default App;