const axios = require("axios");

const getRandom = async (req, res) => {
	var list = [];
	let response = await axios
		.get("https://quoter-211a2-default-rtdb.firebaseio.com/garyvee.json")
		.then((res) => {
			const data = res.data;
			const items = [];
			for (let i in data) {
				if (i > 0) {
					list.push(data[i]);
					items.push(data[i]);
				}
			}
			return items;
		});
        
	const gvee = list[Math.floor(Math.random() * list.length)]
	res.send(gvee.text);
	return gvee.text;
};

module.exports = { getRandom };
