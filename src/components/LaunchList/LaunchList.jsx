import React from 'react';
import { useLaunchContext } from '../../contexts/LaunchContext';
import Error from '../Error/Error';
import { LaunchItem } from '../LaunchItem';
import Loading from '../Loading/Loading';

export const LaunchList = ({ items, filter, sort }) => {
	const { error, loading } = useLaunchContext();

	let filteredItems = [...items];

	if (filter !== '') {
		filteredItems = filteredItems.filter((item) => item.launch_year === filter);
	}

	//Bug in the sorting function below
	const launches = filteredItems.sort((a, b) => {
		const x = new Date(a.launch_date_utc);
		const y = new Date(b.launch_date_utc);
		return sort ? y - x : x - y;
	});

	if (error) {
		return <Error message={error} />;
	}

	return loading ? (
		<Loading />
	) : (
		<ul className="launch-list">
			{launches.map((item, index) => {
				return <LaunchItem key={index} item={item} index={index} />;
			})}
		</ul>
	);
};
