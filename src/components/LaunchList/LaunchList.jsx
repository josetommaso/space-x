import React, { useState } from 'react';
import { useLaunchContext } from '../../contexts/LaunchContext';
import Error from '../Error/Error';
import { LaunchItem } from '../LaunchItem';
import Loading from '../Loading/Loading';
import { slice } from 'lodash';

export const LaunchList = ({ items, filter, sort }) => {
	const { error, loading } = useLaunchContext();

	const [index, setIndex] = useState(10);
	const [isCompleted, setIsCompleted] = useState(false);
	const initialLaunches = slice(items, 0, index);

	const loadMore = () => {
		setIndex(index + 10);
		console.log(index);
		if (index >= items.length) {
			setIsCompleted(true);
		} else {
			setIsCompleted(false);
		}
	};

	let filteredItems = [...initialLaunches];

	if (filter !== '') {
		filteredItems = items.filter((item) => item.launch_year === filter);
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
		<>
			<ul className="launch-list">
				{launches.map((item, index) => {
					return <LaunchItem key={index} item={item} />;
				})}
			</ul>

			<div className="load-more">
				{isCompleted ? (
					<button
						onClick={loadMore}
						type="button"
						className="button load-more__button--completed"
						disabled
					>
						Completed
					</button>
				) : (
					<button
						onClick={loadMore}
						type="button"
						className="button load-more__button--load"
					>
						Load More +
					</button>
				)}
			</div>
		</>
	);
};
