import React, { Component } from "react";
import Navbar from "../Navbar.js"


export default class Resume extends Component {
  render() {
    return (
    	<div id="page" className="contact-us">
		<Navbar></Navbar>
    	<div id="header">
    		<div id="logo">
    			<img alt="" src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/20181129_224920.jpg" />
    			<h2>Brandon Cheung</h2>
    			<span> Important Points </span>
    		</div>
    		 
    		<ul>
      	
    		</ul>
    	</div>
    	<div id="main">
    		<div id="logo2">
    		<img alt="" src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/281769.jpg" />
    		</div>
    		<div id="featured">
    			<p>bwcheung8@gmail.com</p>
    		</div>
    		
    		<div id="featured">
    			<div id="logo2">
    			<img alt="" src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/GitHub-Mark-120px-plus.png" />
    			</div>
    			<p><a href="https://github.com/bwcheung"target="_blank" rel="noopener noreferrer">https://github.com/bwcheung</a></p>
    		</div>
    		
    		<div id="featured">
    			<div id="logo2">
    			<img alt="" src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/Logo-Black-101px-R.png" />
    			</div>
    			<p><a href="https://linkedin.com/in/bwcheung/"target="_blank" rel="noopener noreferrer">https://linkedin.com/in/bwcheung</a> </p>
    		</div>
    	
    	</div>
    	</div>
    );
  }
}
