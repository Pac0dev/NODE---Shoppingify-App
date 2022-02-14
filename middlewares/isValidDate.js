import moment from 'moment';

const isValidDate = ( value = new Date() ) =>  {
	const dateFormat = "DD-MMM-YYYY"; 
	console.log(moment(value, dateFormat, true).isValid());
	return true;
};

export default isValidDate;
