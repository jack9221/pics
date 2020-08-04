import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID xkUDVkMNMs847rHK_bZMg_oXQP6zSz-nmdNu0vw7y7Q'
	}
});
