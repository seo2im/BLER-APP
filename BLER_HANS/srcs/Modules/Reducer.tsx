import { tAction } from '../Types'
export const ACTION = 'ACTION' as const;

const initState : tAction.tAction = {
	title : "Reducer"
}

export const actionFunc = () => ({
	type : ACTION,
	payload : {}
});

type Action = 
	| ReturnType<typeof actionFunc>;

const Reducer = (state : tAction.tAction = initState, action : Action) => {
	switch (action.type) {
		case ACTION :
			return state;

		default :
			return state;
	}
}

export default Reducer;

