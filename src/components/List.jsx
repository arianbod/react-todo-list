import React, { useState } from 'react';
import ListItem from './ListItem';
const List = ({ Items, handleRemoveItem, handleCheckbox }) => {
	return (
		<div className='items'>
			{Items.map((item) => {
				return (
					<ListItem
						key={item.id}
						{...item}
						handleRemoveItem={handleRemoveItem}
						handleCheckbox={handleCheckbox}
					/>
				);
			})}
		</div>
	);
};

export default List;
