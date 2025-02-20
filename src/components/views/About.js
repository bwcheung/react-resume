import React, { Component } from "react";
import Navbar from "../Navbar.js"

export default class About extends Component {
  render() {
    return (
    	<div id="page">
    	<div id="header">
    		<div id="logo">
    			<img alt="" src="https://raw.githubusercontent.com/bwcheung/resume/master/pics/20181129_224920.jpg" />
    			<h2>Brandon Cheung</h2>
    			<span> Important Points </span>
    		</div>
    		 
    		<ul>
      	  <li>Diligent</li>
      		<li>Fast Learner</li>
      		<li>Genuine Interest in Computer Science</li>
     			<li>Work Well With Others</li>
     			<li>Motivated</li>
     			<li>Critical Thinking</li>
      		<li>Problem Solving</li>
    		</ul>
    	</div>
    	<div id="main">
			<Navbar></Navbar>
			<div id="content">
				<div id="featured">
					<div className="title">
						<h2>Introduction</h2>
					</div>
					<p>Hi! My Name is Brandon Cheung. This is a online resume I made that will hopefully help potential employers
					to see if I will be a good fit for their company. The resume tab shows my professional history and the game
					tab is my interactive resume.</p>
				</div>
				<div id="featured">
					<div className="title">
						<h2>About me</h2>
					</div>
					<p> I am a computer science graduate from the University of Alberta with a burning passion to create new and 
			inventive applications. I truly believe that programming is one of the most rewarding work one can do, so I am always excited 
			to work on new projects. I find coding like a open world game, where there are multiple 
			paths to a solution but it is up to the player to find most effective path. Therefore, because I am an avid gamer, 
			it is in my nature to do whatever possible to find the most efficient solution. This realization became a passion for 
			me and now I have a long term goal of someday developing my own web app, mobile app or game. In order to achieve this goal, 
					I am motivated and excited to learn and gain new experience.</p>
				</div>
				<div id="featured">
					<div className="title">
						<h2>For Potential Employers</h2>
					</div>
					<p> I have a genuine interest in computer science, therefore I am willing to learn and/or be guided to do any work necessary. 
					I am a fast learner, diligent, and motivated to learn new technical skills. I guarentee that I will be able to give unique
			ideas and solutions, and be able to provide a consitent workflow. Thank you for taking a look at my online resume and I hope 
			to hear from you soon.</p>
				</div>
			</div>
    	</div>
    </div>
    );
  }
}
