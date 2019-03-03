const wpxml2md = require('wpxml2md');
 
const options = {
  report: true,
  noGFM: false,
  noMELink: true,
  withMetadata: true,
  withImageDownload: true,
  withComment: true,
	//  replaceLinkPrefix: {
	// old: 'http://akabeko.me/blog/',
	// new: '/'
	// }
}
 
wpxml2md('wordpress.xml', 'dest', options)
.then(() => {
  console.log('Completed!!');
} )
.catch((err) => {
  console.error(err);
});
