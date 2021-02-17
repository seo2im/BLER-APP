import AsyncStorage from '@react-native-async-storage/async-storage'

export const getData = async (name : string, callback : any) => {
	try {
		const data = await AsyncStorage.getItem(name);
		if (data != null)
			callback(data);
	}
	catch (e) {
		console.log(name, ": data can't acess");
	}
}

export const setData = (name : string, data : any) => {
	try {
		AsyncStorage.setItem(name, JSON.stringify(data));
	}
	catch (e) {
		console.log(name, "data cant setting in storage\n", e);
	}
}

export const initData = () => {
	try {
		AsyncStorage.clear();
	}
	catch (e) {
		console.log("initial error", e);
	}
}
