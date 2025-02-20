import React, { Component } from "react";
import Navbar from "../Navbar.js"

export default class Resume extends Component {
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
      			<li>JavaScipt <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>Java <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>Python <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
     			<li>Html <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>CSS <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
      			<li>PHP <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
				<span className="fa fa-star checked"></span>
				<span className="fa fa-star checked"></span></li>

				<li>SQL <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>

				<li>C <span className="fa fa-star checked"></span>
      			<span className="fa fa-star checked"></span></li>
      			
    		</ul>
    	</div>
    	<div id="main">
			<Navbar></Navbar>
			<div id="content">
				<div id="featured">
					<div className="title">
						<h2><a href="https://github.com/Comput391-kchow3-bwcheung-yw2/C391Proj1"target="_blank" rel="noopener noreferrer">
						Radiology Web App</a></h2>
						<span>Frontend - HTML/JAVASCRIPT  |  Backend - PHP  |  Database - ORACLE</span>
					</div>
					<p> This was a web app that stores and show records of radiology examinations. Doctors could login and store records of 
					their examinations for each of their patients into a database. Each record has a date, diagnosis, pictures and various 
					other information. While patients could search through the database to find their own examination through a 
					login and unique ID.</p>
				</div>
				
				<div id="featured">
					<div className="title">
						<h2><a href="https://github.com/CMPUT301W15T14/ExpenseExpress"target="_blank" rel="noopener noreferrer">
						Android App</a></h2>
						<span> JAVA </span>
					</div>
					<p> This was an android app that allowed multiple user to login and track their traveling expenses. 
					Each expense has a type of expense like food or gas, date, status of paid or unpaid, destination, and various
					other information. The user could also sort and search the expenses by adding a tag and searching for the tag.
					Also each travelled destination can show its cooridinates on a GPS. </p>
				</div>
				
				<div id="featured">
					<div className="title">
						<h2><a href="https://github.com/CMPUT404-FireBreathingRubberDuckies/CMPUT404-project-socialdistribution"target="_blank" rel="noopener noreferrer">
						Social Networking Website</a></h2>
						<span> Frontend - HTML/JAVASCRIPT  |  Backend - DJANGO(PYTHON)</span>
					</div>
					<p>This was a social networking website that connected to the other groups in the same class. Users login to
					create posts of text and/or pictures. A user can change the posts visibility to public, private, friends and 
					even friends of friends. Users have a profile and can view other users profile and send friends requests. 
					Using a API, users in one group can see the posts of the users in another group.</p>
				</div>
			</div>
    	</div>
    </div>
    );
  }
}
