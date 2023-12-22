import { Form, Title, List } from './components';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListLogics from './components/ListLogics';
const App = () => {
	const {
		inputDataState,
		listItemsState,
		handleAddingItem,
		handleRemoveItem,
		handleCheckbox,
		handleChangeInputData,
	} = ListLogics();
	return (
		<section className='section-center'>
			<ToastContainer />
			<Title />
			<Form
				handleAddingItem={handleAddingItem}
				inputData={inputDataState}
				handleChangeInputData={handleChangeInputData}
			/>
			<List
				Items={listItemsState}
				handleRemoveItem={handleRemoveItem}
				handleCheckbox={handleCheckbox}
			/>
		</section>
	);
};

export default App;
