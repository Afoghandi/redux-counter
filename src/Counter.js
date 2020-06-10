import React from "react";
import { connect } from "react-redux";
function Counter(props) {
	const [count, setCount] = React.useState(0);
	return (
		<div className="container">
			<h1>Counter</h1>
			<h2>{props.name} </h2>
			<p className="counter">{props.count} </p>
			<div className="buttons">
				<div className="button">
					<div className="btn" onClick={() => setCount(count - 1)}>
						decreace
					</div>
					<div className="btn" onClick={() => setCount(0)}>
						reset
					</div>
					<div className="btn" onClick={() => setCount(count + 1)}>
						increase
					</div>
				</div>
			</div>
		</div>
	);
}
function mapStateToProps(state) {
	console.log(state);

	return { count: state.count, name: state.name };
}
export default connect(mapStateToProps)(Counter);
