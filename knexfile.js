module.exports = {
    development: {
	client: 'sqlite3',
	connection: {
	    filename: './data/users.sqlite3',
	},
	useNullAsDefault: true,
	migrations: {
	    directory: './data/migrations',
	},
	seeds: {
	    directory: './data/seeds',
	},
	debug: true,
    },
};
