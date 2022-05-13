function fixUrl(url: string): string {
	if( import.meta.env.MODE === 'development' ) {
		console.log('DEV MODE')
		return 'http://localhost:433' + url
	} else {
		console.log('PRODUCTION MODE')
		return url
	}
}

export { fixUrl }

//the same
// export default React
// export { useState, useEffect }
// import React, { useState } from 'react'