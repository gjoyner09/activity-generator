import React, { useState } from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const Accesibility = () => {
	const [accessibility, setAccessibility] = useState(undefined);
	const handleChange = (event) => {
		setAccessibility(event);
		console.log("Accessibility: ", accessibility);
	};
	const options = [" ", "High", "Medium", "Low"];

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

export default Accesibility;
