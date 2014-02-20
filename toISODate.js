// When passed a native Date object, should return
// a string in the format of "YYYY-MM-DD".
module.exports = function(date) {
	return date.toISOString().split('T')[0];
};
