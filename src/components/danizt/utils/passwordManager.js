export const getRandomPassword = (charactersAvaliable, length) => {
	let randomPassword = ''
	for (let i = 0; i < length; i++) {
		randomPassword += charactersAvaliable.charAt(
			Math.floor(Math.random() * charactersAvaliable.length)
		)
	}
	return randomPassword
}

export const copyPassword = (password) => {
	navigator.clipboard.writeText(password)
	return true
}
