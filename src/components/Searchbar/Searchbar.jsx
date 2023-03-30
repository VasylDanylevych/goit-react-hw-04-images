import PropTypes from 'prop-types';
import { Component } from 'react';
import {
	Bar,
	Input,
	SearchForm,
	SearchFormButton,
	Span,
} from './Searchbar.style';

class Searchbar extends Component {
	state = {
		value: '',
	};

	handleChange = ({ target }) => {
		this.setState({ value: target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.value);
	};

	render() {
		const { value } = this.state;
		return (
			<Bar>
				<SearchForm onSubmit={this.handleSubmit}>
					<SearchFormButton type='submit'>
						🔍<Span>Search</Span>
					</SearchFormButton>

					<Input
						type='text'
						autocomplete='off'
						autoFocus
						placeholder='Search images and photos'
						onChange={this.handleChange}
						value={value}
					/>
				</SearchForm>
			</Bar>
		);
	}
}

export default Searchbar;

Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
