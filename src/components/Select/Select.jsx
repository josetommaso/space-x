import cx from 'classnames';
import { useLaunchContext } from '../../contexts/LaunchContext';

export const Select = ({ label, classes, error, allowDisabledState }) => {
	const { setFilter, filter, items } = useLaunchContext();
	const selectClasses = cx(classes, {
		disabled: allowDisabledState ? error : '',
	});

	const getYears = () => {
		const years = [];
		items.map(
			(item) =>
				years.indexOf(item.launch_year) === -1 && years.push(item.launch_year)
		);

		return years;
	};

	return (
		<select
			name={label}
			className={selectClasses}
			onChange={(event) => {
				setFilter(event.target.value);
			}}
			value={filter}
		>
			<option value="">{label}</option>
			{getYears().map((year) => (
				<option key={year} value={year}>
					{year}
				</option>
			))}
		</select>
	);
};
