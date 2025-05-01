const Config = {
	freshdeskApiKeyEncoded: "T1o4UDc2MGxmMFo4ZFRlSlpEOlg=",
	freshdeskDomain: "https://knosetesting.freshdesk.com/",
};

export function freshDeskAPI(action, params, method = "POST") {
	return new Promise(async function (resolve, reject) {
		var options = {
			method: method,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: Config.freshdeskApiKeyEncoded,
			},
		};

		console.log("opts", options);

		if (method !== "GET") {
			options.body = JSON.stringify(params);
		}

		try {
			var response = await fetch(Config.freshdeskDomain + action, options);
			let data = await response.json();
			console.log("Succcc", data);
			return resolve(data);
		} catch (e) {
			console.log(e);
			return reject("Error");
		}
	});
}
