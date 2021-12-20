const axios = require("axios");

const getRandom = async (req, res) => {
	var list = [];
	let response = await axios
		.get("https://quoter-211a2-default-rtdb.firebaseio.com/buddy-the-elf.json")
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
        
	const buddy = list[Math.floor(Math.random() * list.length)]
	res.send(buddy);
	return buddy;
};

module.exports = { getRandom };
