import React from "react";
import Accessibility from "./Accessibility";
import Type from "./Type";
import Price from "./Price";
import Participants from "./Participants"
import GetActivity from "./GetActivity";

const Inputs = () => {
	return (
		<>
			<Accessibility />
			<Type />
			<Price />
			<Participants />
			<GetActivity />
		</>
	);
};

export default Inputs;
