import React from "react";

export default class Ball extends React.Component {

	handleJump = (event) => {
		
	}


	render() {
		console.log()
		const image_url = "https://genesisgym.com.sg/wp-content/uploads/2016/04/tip09pic.jpg";

		return (
			<React.Fragment>
				<img onClick={this.handleJump} className="small-ball" src={image_url} alt="tennis ball" />
			</React.Fragment>
		)
	}
}