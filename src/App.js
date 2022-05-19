import React, { useState } from "react";
import { marked } from 'marked';

//Setting up Marked_________________________________

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

// Output component_______________________________________

function MarkdownOutput(props) {
  let output = marked(props.input, {renderer});
  return (
  <div dangerouslySetInnerHTML={{
    __html: output
  }} />
  );

}

// Overall component, contains state and input component_________________

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    input: ''
  }
  this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  };

  render() {
  return (
  <div className='app-container'>
    <h1>Markdown Previewer</h1>
    <textarea id="editor" className="input" onChange={this.handleChange}/>
    
    <MarkdownOutput id="preview" input={this.state.input} />
  </div>
  );
  }

}

export default App;