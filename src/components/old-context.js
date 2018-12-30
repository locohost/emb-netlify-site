

const reducer = (state, action) => {
	switch (action.type) {
		case 'LOGOUT':
		case 'LOGIN':
		return {
			...state,
			userProfile: action.payload
		};
		default:
		return state;
	}
};

export const Context = React.createContext('');

export default class Provider extends Component {
	///TODO: Read "arrow function tuts", I follow dispatch but 
	// I doubt I could explain it to anyone else
	state = {
		userProfile: null,
		appDropdownOptions: [],
		dispatch: action => this.setState(state => reducer(state, action))
	};

	render = () => { 
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

//export const Consumer = Context.Consumer;
//export Context;