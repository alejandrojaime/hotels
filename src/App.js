import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta'; //https://www.npmjs.com/package/react-document-meta

import Header from './shell/Header.js';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };
    return (

      <div>
        <DocumentMeta {...meta}/>
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
