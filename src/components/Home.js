import React from "react";
import * as XLSX from 'xlsx';
import "./home.css";

function Home(){
	
  

	return(
		<body>
		  <span className="bckg"></span>
		<header>
		  <h1>Dashboard</h1>
		  <nav>
		    <ul>
		      <li>
		        <a href="javascript:void(0);" data-title="Projects">Projects</a>
		      </li>
		      <li>
		        <a href="javascript:void(0);" data-title="Team">Team</a>
		      </li>
		      <li>
		        <a href="javascript:void(0);" data-title="Diary">Diary</a>
		      </li>
		      <li>
		        <a href="javascript:void(0);" data-title="Timeline">Timeline</a>
		      </li>
		      <li>
		        <a href="javascript:void(0);" data-title="Settings">Settings</a>
		      </li>
		      <li>
		        <a href="javascript:void(0);" data-title="Search">Search</a>
		      </li>
		    </ul>
		  </nav>
		</header>
		<main>
		  <div className="title">
		    <h2>Projects</h2>
		    <a href="javascript:void(0);">Admin !</a>
		  </div>

		  <article className="larg">
		    <div>
		    	<form>
		    		<input type="file" /><br />
		    		<input type="submit" />
		    	</form>
		    </div>
		  </article>
		</main>
		</body>

	);
}

export default Home;