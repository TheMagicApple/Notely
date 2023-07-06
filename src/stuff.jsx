import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
class Home extends React.Component{
	
	createOpen=false;
	
	constructor(props){
			super(props);
			this.create=this.create.bind(this);
			this.closeCreate=this.closeCreate.bind(this);
			this.createDocument=this.createDocument.bind(this);
	}
	create(){
			this.createOpen=true;
			this.forceUpdate();
	}
	closeCreate(){
			this.createOpen=false;
			this.forceUpdate();
	}
	createDocument(){
			alert("YOUR DOC IS BEING CREATED! (or is it?)");
	}
	render(){
			return 	<>
						<img className="headerIcon" src={require('./icon.webp')} />
						<div className="div headerTitle"><b>NOTELY</b></div>
						<div className="div homePitchBig"><b>UPGRADED</b></div>
						<div className="div homePitchSmall">NOTE-TAKING</div>
						<div className="div homePitchTiny">Notely is your &nbsp;<span className="highlight">dream</span>&nbsp; way to take any kind of notes.</div>
						<img className="homePitchImage" src={require('./book.jpg')} />
						<button onClick={this.create} className="div homePitchNew">Create a Doc</button>
						<button className="div homePitchLearn">Learn More</button>
						<div onClick={this.closeCreate} className="homeCreateBackground" style={{opacity:this.createOpen?0.5:0,display:this.createOpen?"block":"none"}}></div>
						<div className="homeCreate" style={{display:this.createOpen?"block":"none"}}>
							<div className="homeCreateHeader"><b>New Document</b></div>
							<input className="homeCreateName" type="text" placeholder="New Document"/>
							<div className="homeCreateNameLabel">Document Name:</div>
							<select name="homeCreateType" id="homeCreateType">
								<option>Basic Text</option>
								<option>Advanced Text</option>
								<option>Drawing</option>
								<option>List</option>
							</select>
							<div className="homeCreateTypeLabel">Document Type:</div>
							<button onClick={this.createDocument} className="div homeCreateSubmit">Create!</button>
						</div>
					</>
	}
}

export {Home}
