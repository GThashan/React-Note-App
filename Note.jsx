import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<div>
			<FontAwesomeIcon icon={faThumbtack} className="pin-icon" />
			</div>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
