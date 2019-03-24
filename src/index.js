// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let error  = {error: "You are rich, my friend! We don't have so much coins for exchange"}
	
	if(currency > 10000) {
		return error;
	}
	if(currency === 0) {
		return {};	
	}
	let answer = {};
	let coinsArr = [50, 25, 10, 5, 1];
	let namesArr = [0, 0, 0, 0, 0];
	let letterArr = ["H", "Q", "D", "N", "P"];
	coinsArr.forEach((item, i) =>{
		while(currency >= item) {
			currency = currency - item;
			namesArr[i]++;
		}
	})
	namesArr.forEach((item, i) =>{
		if(item){
			answer[letterArr[i]] = item;
		}
	})
	return answer;
}
