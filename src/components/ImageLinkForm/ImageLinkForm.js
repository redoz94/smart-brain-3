import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div>
			<p className='f3'> 
				{'this magic brain, will detect faces in your pictures'}
			</p>
			<div className='center'>
				<div className='form center pa4 shadow-5 br3'>
				<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
				<button 
				className='w-40 grow f4 link ph3 pv2 dib white bg-light-purple'
				onClick={onButtonSubmit}
				>Detect</button>
				 </div>
			</div>
		</div>
		);
}

export default ImageLinkForm;