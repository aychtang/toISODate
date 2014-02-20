
// When passed a native Date object, should return
// a string in the format of "YYYY-MM-DD".
module.exports = function(Date) {
	return Date.toISOString().split('T')[0];
};
