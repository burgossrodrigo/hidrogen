const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
		  module.exports = {
	  images: {
		domains: ["upload.wikimedia.org"],
	  },
	};
    }
  }

  return {
    /* config options for all phases except development here */
  }
}