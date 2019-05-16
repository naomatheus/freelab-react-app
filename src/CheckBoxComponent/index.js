
import React from 'react';

/// optional check property type

const Checkbox = ({type='checkbox', name, checked = false, onChange}) => 

	(

		<input 
			type={type}
			name={name}
			checked={checked}
			onChange={onChange}

		/>
		
)
// allNicheCheckboxes includes label property
export default Checkbox;