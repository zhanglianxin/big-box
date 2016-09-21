import React from 'react';
import ReactDOM from 'react-dom';

import Container from './Components/Container';
import Footer from './Components/Footer';


ReactDOM.render(
    <Container />, document.getElementById("content")
);

ReactDOM.render(
    <Footer />, document.getElementById("footer")
);

