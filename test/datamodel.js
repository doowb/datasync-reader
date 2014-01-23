var model = {
	options: {
		datastore: {
			db: 'mongodb',
			url: '',
			authentication: {}
		},
		passport: {
			service: 'github'
		},
		user: userId
	},
	github2yammer: {
		reader: {
			service: 'github',
			options: {
				// from datastore ?
				authentication: {
					clientToken: '',
					clientSecret: ''
				},

				fields: {
					githubid: {
						type: 'string',
						require: true
					},
					repoUrl: {
						type: 'string'
					}
				}
			}
		},
		writer: {
			service: 'yammer',
			options: {
				fields: {
					yammerid: {
						type: 'string',
						require: true
					},
					message: {
						type: 'string'
					}
				}
			}
		},
		map: {
			// fields being mapped
			fields: [
				{
					src: 'githubid',
					dest: 'yammerid'
				},
				{
					src: ['githubid', 'repoUrl', 'commitDate'],
					dest: 'message',
					structure: '[:githubid] - :repoUrl'
				},
				{
					src: ['githubid', 'repoUrl', 'commitDate'],
					dest: 'message',
					// throws error because :commitUrl is not in the src array
					structure: ':repoUrl updated by :githubid on :commitDate :commitUrl :foo',
					patterns: [
						{ pattern: 'foo', replacement: 'bar' },
						{ pattern: 'foo', replacement: /_/ },
						{ pattern: /:foo/, replacement: '<%= _.date(commitDate, "YYYY-MM-DD") %>' },
						{ pattern: ':foo', replacement: function(match) {
								return match.upperCase();
							}
						}
					]
				}
			]
		}
	}
};
