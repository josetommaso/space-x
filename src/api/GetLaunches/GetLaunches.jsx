import CONSTANTS from '../../constants/Config';

export const GetLaunchesAPI = async () => {
	try {
		const url = CONSTANTS.SPACE_X_API;
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		return error.message;
	}
};
