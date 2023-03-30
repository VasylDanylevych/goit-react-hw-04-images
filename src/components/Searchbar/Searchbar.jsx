import PropTypes from 'prop-types';
import { useState } from 'react';
import {
	Bar,
	Input,
	SearchForm,
	SearchFormButton,
	Span,
} from './Searchbar.style';

export default function Searchbar({ onSubmit }) {
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(value);
	};

	return (
		<Bar>
			<SearchForm onSubmit={handleSubmit}>
				<SearchFormButton type='submit'>
					🔍<Span>Search</Span>
				</SearchFormButton>

				<Input
					type='text'
					autocomplete='off'
					autoFocus
					placeholder='Search images and photos'
					onChange={e => setValue(e.target.value)}
					value={value}
				/>
			</SearchForm>
		</Bar>
	);
}

Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
