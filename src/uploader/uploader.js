/**
 * WP Frontend Uploader
 *
 * @package WPFrontendUploader
 * @author Kaleb Heitzman
 * @since 1.0.0
 */
(function() {

	// get the drop area
	let dropArea = document.getElementById('wp-frontend-uploader');

	// attach listeners
	dropArea.addEventListener('dragenter', handlerFunction, false);
	dropArea.addEventListener('dragleave', handlerFunction, false);
	dropArea.addEventListener('dragover', handlerFunction, false);
	dropArea.addEventListener('drop', handlerFunction, false);

})();
