/**
 * WP Frontend Uploader
 *
 * @package WPFrontendUploader
 * @author Kaleb Heitzman
 * @since 1.0.0
 */
(function(window) {

	// get the drop area
	let dropArea = document.getElementById('wp-frontend-uploader');
	let editArea = document.getElementById('wp-frontend-uploader-edit');

	// prevent defaults on drag and drop
	let preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	};

	// add highlight class
	let highlight = (e) => {
		dropArea.classList.add('highlight')
	};

	// remove highlight class
	let unhighlight = (e) => {
		dropArea.classList.remove('highlight')
	};

	// edit area
	let setPreviews = () => {

		// enable the edit area
		dropArea.classList.add('hide')
		editArea.classList.remove('hide')

		// loop through files and add to the edit area
		Array.from(wpFrontendUploader.media).forEach(media => {

			// main container div
			let mediaItem = document.createElement('div');
			mediaItem.className = 'media-item';

			// image wrapper
			let mediaWrapper = document.createElement('div');
			mediaWrapper.className = 'media-wrapper';

			// image preview
			let img = document.createElement('img');
			img.onload = () => {
				img.classList.add('loaded')
			}
			img.src = window.URL.createObjectURL(media.file);
			mediaWrapper.appendChild(img)

			// mediaForm
			let mediaForm = document.createElement('div');
			mediaForm.className = 'media-form';

			// title input
			let titleInput = document.createElement('input');
			titleInput.type = 'text';
			titleInput.placeholder = 'Title';
			mediaForm.appendChild(titleInput);

			// photo credit input
			let creditInput = document.createElement('input');
			creditInput.type = 'text';
			creditInput.placeholder = 'Photo Credit';
			mediaForm.appendChild(creditInput);

			// photo credit input
			let captionText = document.createElement('textarea');
			captionText.placeholder = 'Photo Caption';
			mediaForm.appendChild(captionText);

			// append wrappers to container div
			mediaItem.appendChild(mediaWrapper)
			mediaItem.appendChild(mediaForm)

			// append main container div to edit area
			editArea.appendChild(mediaItem)
		});
	}

	// upload a single file
	let uploadFile = (media) => {

		// set formdata
		let formData = new FormData()
		formData.append('file', media.file)

		// upload the file
		fetch(wpFrontendUploader.endpoint, {
			method: 'POST',
			body: formData,
			headers: new Headers({
				'X-WP-Nonce': wpFrontendUploader.nonce
			})
		})
		.then(response => {
			return response.json();
		})
		.then(upload => {
			wpFrontendUploader.media[media.key].upload = upload
			console.log(wpFrontendUploader.media[media.key])
		})
		.catch(error => {
			console.log(error)
		})

	};

	// handle dropped files
	let handleDrop = (e) => {
		let dt = e.dataTransfer
		let files = dt.files

		handleFiles(files)
	};

	// handleFiles
	let handleFiles = (files) => {

		;([...files]).forEach(( file, idx ) => {
			let mediaFile = {
				file: file,
				upload: null,
				key: idx
			}
			wpFrontendUploader.media.push(mediaFile)
		})

		setPreviews();

		// upload the files
		;([...wpFrontendUploader.media]).forEach(uploadFile)
	};

	// make handleFiles public
	window.handleFiles = handleFiles;

	// stop propogation on drag and drop events
	['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, preventDefaults, false)
	});

	['dragenter', 'dragover'].forEach(eventName => {
		dropArea.addEventListener(eventName, highlight, false)
	});

	['dragleave', 'drop'].forEach(eventName => {
		dropArea.addEventListener(eventName, unhighlight, false)
	});

	// detect when files are dropped
	dropArea.addEventListener('drop', handleDrop, false);

	// attach listeners
	// dropArea.addEventListener('dragenter', handleFiles, false);
	// dropArea.addEventListener('dragleave', handleFiles, false);
	// dropArea.addEventListener('dragover', handleFiles, false);
	// dropArea.addEventListener('drop', handleFiles, false);

})(window);
