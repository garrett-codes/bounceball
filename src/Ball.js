import React from "react";

export default class Ball extends React.Component {

	state = {
		positionY: 10
	}

	handleJump = (event) => {
		// debugger;
		this.setState({
			positionY: this.state.positionY + 10
		})
		event.target.style.bottom = `${this.state.positionY}px`
	}


	render() {
		console.log()
		const image_url = "https://genesisgym.com.sg/wp-content/uploads/2016/04/tip09pic.jpg";

		return (
			<React.Fragment>
				<img onClick={this.handleJump} className="small-ball"  src={image_url} alt="tennis ball" />
			</React.Fragment>
		)
	}
}