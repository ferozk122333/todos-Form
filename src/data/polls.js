const polls = [
	{
		id: 'nijer 01',
		title: 'What is Your Favorite Programming Language',
		description:'There are lot of popular programming languages available. Among them what is your favorite?',
		options: [
			{ id: '1', value: 'C Programming', vote: 0 },
			{ id: '2', value: 'Java', vote: 0 },
			{ id: '3', value: 'Javascript', vote: 0 },
			{ id: '4', value: 'Python', vote: 0 }
		],
		created: new Date(),
		totalVote: 0,
		opinions: []
	},
	{
		id: 'nijer 2',
		title: 'Which Frontend Framework do You Prefer?',
		description:'Javascript has a vast variety of frontend libraries and frameworks. Each and every day we have a new one. Among those which frontend framework you like and prefer others?',
		options: [
			{ id: '454157', value: 'Angular', vote: 0 },
			{ id: '415715', value: 'React', vote: 0 },
			{ id: '41544s', value: 'Vue', vote: 0 }
		],
		created: new Date(),
		totalVote: 0,
		opinions: []
	},
	{
		id: 'nijer 3',
		title: 'What is the best way to create android app?',
		description:"I want to create an android application but I don't understand which technology would be better. There are lot of technologies available and my application is not so bulky. I need an easy and simple solution, so that I can prototype within no time. Please share your opinions",
		options: [
			{ id: '4158112', value: 'Java', vote: 0 },
			{ id: '174441', value: 'Kotlin', vote: 0 },
			{ id: '15624', value: 'React Native', vote: 0 },
			{ id: '164235', value: 'Flutter', vote: 0 },
			{ id: '156242', value: 'Ionic', vote: 0 }
		],
		created: new Date(),
		totalVote: 0,
		opinions: []
	}
];

export default polls;
