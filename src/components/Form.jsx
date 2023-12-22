import React from 'react';

const Form = ({ handleAddingItem, inputData, handleChangeInputData }) => {
	return (
		<form onSubmit={handleAddingItem}>
			<div className='form-control'>
				<input
					className='form-input'
					name={inputData}
					value={inputData}
					onChange={handleChangeInputData}
				/>
				<button className='btn'>Add Item</button>
			</div>
		</form>
	);
};

export default Form;
