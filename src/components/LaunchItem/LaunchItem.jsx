import React from 'react';
import Moment from 'react-moment';

export const LaunchItem = ({ item, index }) => {
	//missing rocket name
	const {
		flight_number,
		mission_name,
		launch_date_utc,
		rocket: { rocket_name },
	} = item;

	return (
		<li key={index} className="launch">
			<div>
				<span className="launch__flight">{`#${flight_number}`}</span>
				<span className="launch__mission">{`${mission_name}`}</span>
			</div>
			<div className="launch__data">
				<Moment format="DD/MM/YYYY HH:MM:SS">{launch_date_utc}</Moment>
				<h2>{rocket_name}</h2>
			</div>
		</li>
	);
};
