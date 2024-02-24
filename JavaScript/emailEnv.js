function getEnvironmentVariable({ actual, temp }) {
	dotEnv.config();
	const { NODE_ENV } = process.env;
	if (NODE_ENV == "production") {
		return actual;
	} else if (_.isEmpty(temp) && Array.isArray(actual)) {
		temp = _.compact(actual).map(v => {
			if (_.startsWith(v.split("@")[0], "irnavgathdev+")) {
				return `${v.split("@")[0]}@gmail.com`
			} else {
				return `irnavgathdev+${v.split("@")[0]}@gmail.com`
			}
		})
	} else if (_.isEmpty(temp) && !_.isEmpty(actual)) {
		if(_.startsWith(actual.split("@")[0], "irnavgathdev+")) {
			console.log(' `${actual.split("@")[0]}@gmail.com`: ',  `${actual.split("@")[0]}@gmail.com`);
			return `${actual.split("@")[0]}@gmail.com`
		} else {
			return `irnavgathdev+${actual.split("@")[0]}@gmail.com`
		}
	}
	return temp;
}
getEnvironmentVariable({actual:["ninad@yopmail.com", ]})