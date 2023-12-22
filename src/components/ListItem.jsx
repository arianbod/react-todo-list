import React from 'react';

const ListItem = ({ title, id, done, handleRemoveItem, handleCheckbox }) => {
	return (
		<div className='single-item'>
			<input
				type='checkbox'
				name={id}
				id={id}
				onChange={handleCheckbox}
				checked={done}
			/>
			<label
				style={{
					textTransform: 'capitalize',
					textDecoration: done && 'line-through',
				}}
				htmlFor={id}>
				{title}
			</label>
			<button
				className='btn brn-remove'
				onClick={() => handleRemoveItem(id)}>
				Delete
			</button>
		</div>
	);
};

export default ListItem;
