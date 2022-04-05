import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h2>1.What is context API?</h2>
            <h4>---The React Context API provides us a way to pass data from component to component without having to pass props down manually at every level.It  is a React structure that enables us to exchange unique details and assists in solving prop-drilling from all levels of our application.</h4>

            <h2>2.What is Semantic tag?</h2>
            <h4>---In HTML there are some semantic elements that can be used to define different parts of a web page.A semantic element clearly describes its meaning to both the browser and the developer. <br />
                <u>Example:</u> form, table and article</h4>

            <h2>3.what is the Difference between Block and Inline Elements?</h2>
            <h4>
                <u>Block Elements:</u>  <br />
                A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
                A block-level element always takes up the full width available. Example: p, div. <br />
                <u>Inline Elements:</u>  <br />
                An inline element does not start on a new line.
                An inline element only takes up as much width as necessary. Example: span.

            </h4>
        </div>
    );
};

export default Blogs;