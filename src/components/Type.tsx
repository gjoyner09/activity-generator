import React, { useState } from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const Type = () => {
	const [type, setType] = useState(undefined);
	const handleChange = (event) => {
		setType(event);
	};
	const options = [
		" ",
		"Busywork",
		"Charity",
		"Cooking",
		"DIY",
		"Education",
		"Music",
		"Recreational",
		"Relaxation",
		"Social",
	];

	return (
		<Input.Group compact>
			<Select
				defaultValue=" "
				style={{
					width: "30%",
				}}
				onChange={handleChange}
			>
				{options.map((type) => (
					<Option value={type}>{type}</Option>
				))}
			</Select>
		</Input.Group>
	);
};

export default Type;
