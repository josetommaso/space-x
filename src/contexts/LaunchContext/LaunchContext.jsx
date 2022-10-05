import React from 'react';
import { GetLaunchesAPI } from '../../api/GetLaunches';

export const launchContextDefaults = {
	listLaunches: Function,
	items: [],
	sort: false,
	setSort: Function,
	filter: '',
	setFilter: Function,
	error: '',
	setError: Function,
	loading: true,
	setLoading: Function,
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
	const [items, setItems] = React.useState([]);
	const [sort, setSort] = React.useState(false);
	const [filter, setFilter] = React.useState('');
	const [error, setError] = React.useState('');
	const [loading, setLoading] = React.useState(true);

	return (
		<LaunchContext.Provider
			value={{
				listLaunches: React.useCallback(async () => {
					setFilter('');
					const response = await GetLaunchesAPI();
					if (typeof response != 'object') {
						setLoading(false);
						setError(response);
						return;
					}
					setLoading(false);
					setItems(response);
				}, []),
				items,
				sort,
				setSort,
				filter,
				setFilter,
				error,
				loading,
			}}
		>
			{children}
		</LaunchContext.Provider>
	);
};
