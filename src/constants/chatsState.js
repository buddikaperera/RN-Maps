const chatState = {
  messages: [
    {   
	    id:1,
        sender: 'me',
        text: 'What can I do for you ? Please tell me how I can help you ?',
      },
      {
        sender: 'opponent',
        text: 'We sure do! Check it out below.',
        image: 'https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5ec36523544c771830037859_wfh-drawkit-thumbnail.png',
      },
      {
        id:2,
		sender: 'me',
        text: 'Thanks for sharing.',
      },
      {
        id:3,
	    sender: 'opponent',
        text: 'Looking forward to hearing from you.',
      },
      {
        id:4, 
	    sender: 'me',
        text: `I'll do my best to keep in touch as often as I can.`,
      },
      {
        id:5,
		sender: 'opponent',
        text: 'Cool, see you during our next meeting',
      },
      {
        id:6,
		sender: 'me',
        text: 'Will keep you updated on any new project',
      },
  ],
};

export default chatState;
