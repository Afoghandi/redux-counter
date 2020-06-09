import React from "react";

function Counter() {
	const [count, setCount] = React.useState(0);
	return (
		<div className="container">
			<h1>Counter</h1>
			<p className="counter">{count} </p>
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

export default Counter;
