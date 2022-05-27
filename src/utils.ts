function fixUrl(url: string): string {
	if( import.meta.env.MODE === 'development' ) {
		return 'http://localhost:433' + url
	} else {
		console.log('PRODUCTION MODE')
		return url
	}
}

function imageUrl(url: string): any {
	if (url.includes('http')) {
		return url
	} else {
		return fixUrl('/img/' + url)
	}
}

export { fixUrl, imageUrl }

//the same
// export default React
// export { useState, useEffect }
// import React, { useState } from 'react'