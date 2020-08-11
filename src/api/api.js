export const apiCall = (link) => 
	fetch(link, {
		method: 'GET',
 		headers: {
  			'X-API-KEY': '63DBCC75-37064B86-8666620F-09A37CFD',
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