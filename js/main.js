import { getChatData, _$, _$$ } from './modules.js';



//retrieve the callback data from the JSON request
getChatData('https://api.myjson.com/bins/18ce70',
    res => { 
    	let days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    	let conversation_date = res.data.conversationDate;
    	let date = new Date(conversation_date);
	

    	let messages = res.data.messages;

    	//populate Date to the conversation date in the chat transcript
    	_$("header>time").innerHTML = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} `;
    	_$("header>time").setAttribute("datetime", conversation_date);
	  	
	  	for (let i = 0; i < messages.length; i++) {		
	  		let hr = parseInt(messages[i].timestamp.substring(11, 13));
			let min = parseInt(messages[i].timestamp.substring(14, 16));
			//Add a leading 0 to mins to the mins that begin with 0 (:03)
			let absMin = (min < 10 ? "0" : "") + min;
			let time;

			//Format PM & AM to the time variable (Chat time)
			if (hr > 12) {
				time = `${hr - 12}:${absMin} PM`;
			} 
			else {
				time = `${hr}:${absMin} AM`;
			}

			//Populate chat data into HTML that dynamically loops into an ordered list
			_$("ol").innerHTML += `
				<li>
					<div class="avatar">
						<img src="${messages[i].image}" alt="avatar">
					</div>	
					<div id="${messages[i].focused}" class="messages">

						<p>${messages[i].message}</p>
						<span class="username">${messages[i].username}</span>
						<img src="assets/icons/clock-icon.svg" alt="Clock Icon">
						<time datetime="${hr}:${min}">${time}</time>
					</div>
				</li>
			`;

		}
		//Change id="true" to id="focused" for better readabilty in css
		_$("#true").setAttribute("id", "focused");
});








