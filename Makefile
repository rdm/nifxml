nif.json: nif.xml
	./nifxml2json.js | jq . >nif.json
