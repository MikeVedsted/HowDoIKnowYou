export const apiCall = (link) => 
	fetch(link, {
		method: 'GET',
 		headers: {
  			'X-API-KEY': REACT_APP_FACES_KEY,
 			'Accept': 'application/json',
  			'Cache-Control': 'no-cache'
 		}
 	})
 	.then(response => response.json())
 	.then(arr => arr.map((user, i) => { 
 		user.id = i+1
 		return user;
 		}
 	))