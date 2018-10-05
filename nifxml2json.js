#!/usr/bin/env node

const fs= require('fs');

require('xml2js')
	.Parser()
	.parseString(
		fs.readFileSync('./nif.xml').toString(),
		(e,d) => {
			console.log(JSON.stringify(d))
		}
	)
