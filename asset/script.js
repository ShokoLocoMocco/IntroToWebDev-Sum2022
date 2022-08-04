const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://twitter60.p.rapidapi.com/user_info?user_name=yua_mikami",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
		"X-RapidAPI-Host": "twitter60.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://twitter60.p.rapidapi.com/user_info',
  params: {user_name: 'yua_mikami'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'twitter60.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
