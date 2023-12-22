import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const defaultValue = JSON.parse(localStorage.getItem('listArray') || '[]');

const setLocalStorage = (items) => {
	localStorage.setItem('listArray', JSON.stringify(items));
};
const ListLogics = () => {
	const [inputDataState, setInputDataState] = useState('');
	const [listItemsState, setListItemsState] = useState(defaultValue);

	const handleAddingItem = (e) => {
		e.preventDefault();
		let ItemData = { title: inputDataState, id: nanoid(), done: false };
		const newItems = [ItemData, ...listItemsState];
		inputDataState
			? (setListItemsState(newItems),
			  toast.success(ItemData.title),
			  setLocalStorage(newItems))
			: toast.error('Please write something');
	};
	const handleChangeInputData = (e) => {
		setInputDataState(e.target.value);
	};
	const handleRemoveItem = (id) => {
		const newItems = listItemsState.filter((item) => item.id !== id);
		setListItemsState(newItems);
		toast.success('item has been removed');
		setLocalStorage(newItems);
	};
	const handleCheckbox = (e) => {
		const id = e.target.name;
		const newItems = listItemsState.map((item) =>
			item.id === id ? { ...item, done: e.target.checked } : item
		);

		setListItemsState(newItems);
		// setLocalStorage(newItems);
	};
	return {
		inputDataState,
		listItemsState,
		handleAddingItem,
		handleRemoveItem,
		handleCheckbox,
		handleChangeInputData,
	};
};

export default ListLogics;
