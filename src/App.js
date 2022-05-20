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
  <div className="output" dangerouslySetInnerHTML={{
    __html: output
  }} />
  );

}

// Placeholder markdown text_______________________________________

let placeholder = `# Check this out!!
## You can put any markdown text you like in here. 
You can put [links]() and \` inline code \`, as well as: 
\`\`\` code blocks \`\`\`, 
- List items,

> Blockquotes,

 **Bolded text**,
 And images! 
 ![Samuel Hipp logo](Logo1_PNG.png "Samuel Hipp logo")`

// Overall component, contains state and input component_________________

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    input: placeholder
  }
  this.handleChange = this.handleChange.bind(this);
  this.copyText = this.copyText.bind(this);
  }

  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  };

  copyText() {
    navigator.clipboard.writeText(this.state.input);
  }

  render() {
  return (
  <div>
    <div className='app-container'>
    <h1 className="title">Markdown Previewer</h1>
    <p className="description">Enter your markdown text here:</p>
    <textarea id="editor" className="input" onChange={this.handleChange}>{placeholder}</textarea>
    <button className="copy-button" onClick={this.copyText}>Copy text</button>
    <MarkdownOutput id="preview" input={this.state.input} />
    </div>
  </div>
  );
  }

}

export default App;