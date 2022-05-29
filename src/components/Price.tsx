import React, { useState } from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const Price = () => {
	const [price, setPrice] = useState(undefined);
	const handleChange = (event) => {
		setPrice(event);
	};
	const options = [" ", "Free", "Low", "Medium", "High"];

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

export default Price;
