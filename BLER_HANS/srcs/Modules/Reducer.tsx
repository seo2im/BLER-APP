import { tAction } from '../Types'
export const ACTION = 'ACTION' as const;

const initState : tAction.tAction = {}

export const actionFunc = () => ({
	type : ACTION,
	payload : {}
});

type Action = 
	| ReturnType<typeof actionFunc>
const Reducer = (state : tAction.tAction, action : Action) => {
	switch (action.type) {
		case ACTION :
			return state;

		default :
			return state;
	}
}

export default Reducer;

