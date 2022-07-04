function fixUrl(url: string): string {
	if( import.meta.env.MODE === 'development' ) {
		return 'http://localhost:1433' + url
	} else {
		console.log('PRODUCTION MODE')
		return url
	}
}



function imageUrl(url: string): any {
	if (url.startsWith('https:')) {
		return url
	} else {
		return fixUrl('/img/' + url)
	}
}

export { fixUrl, imageUrl  }

