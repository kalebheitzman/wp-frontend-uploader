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
	let savedArea = document.getElementById('wp-frontend-uploader-saved');
	let progressBar = document.querySelector(`[data-element="progress-bar"]`);
	let progressStatus = document.querySelector(`[data-element="progress-status"]`);
	let submitButton = document.querySelector(`[data-element="submit-button"]`);

	// prevent defaults on drag and drop
	let preventDefaults = (e) => {
		e.preventDefault()
		e.stopPropagation()
	};

	// update progress bar
	updateProgressBar = () => {

		// get media state
		let media = wpFrontendUploader.media;
		let totalParts = media.length*3

		let totalUploads = 0
		let totalTitles = 0
		let totalCaptions = 0
		media.forEach(item => {
			totalUploads = !item.upload ? totalUploads : totalUploads+1;
			totalTitles = !item.data.title ? totalTitles : totalTitles+1;
			totalCaptions = !item.data.caption ? totalCaptions : totalCaptions+1;
		});

		// get the progress
		let total = totalUploads+totalTitles+totalCaptions;
		let progress = Math.round( (total/totalParts)*100 );
		wpFrontendUploader.progress = progress;

		// update the progressbar
		progressBar.style = `width: ${wpFrontendUploader.progress}%`;
		progressStatus.innerHTML = `${wpFrontendUploader.progress}%`

		// enable submit button
		if (wpFrontendUploader.progress === 100) {
			submitButton.disabled = false;
		}
	}

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
			mediaItem.setAttribute('data-key', media.key);

			// image wrapper
			let mediaWrapper = document.createElement('div');
			mediaWrapper.className = 'media-wrapper';

			// image preview
			let img = document.createElement('img');
			img.setAttribute('data-element', 'image');
			img.onload = () => {
				img.classList.add('loaded')
			}
			img.src = window.URL.createObjectURL(media.file);
			mediaWrapper.appendChild(img)

			// spinner
			let spinner = document.createElement('div');
			spinner.className = 'loader';
			spinner.setAttribute( 'data-element', 'loader' );
			spinner.innerHTML = '<div class="spinner"><div></div><div></div><div></div><div></div></div>';
			mediaWrapper.appendChild(spinner);

			// mediaForm
			let mediaForm = document.createElement('div');
			mediaForm.className = 'media-form';

			// title input
			let titleInput = document.createElement('input');
			titleInput.type = 'text';
			titleInput.placeholder = 'Title';
			titleInput.addEventListener('keyup', e => {
				if (e.target.value.length > 3) {
					wpFrontendUploader.media[media.key].data.title = e.target.value;
				} else {
					wpFrontendUploader.media[media.key].data.title = null;
				}
				updateProgressBar();
			});
			mediaForm.appendChild(titleInput);

			// photo credit input
			let creditInput = document.createElement('input');
			creditInput.type = 'text';
			creditInput.placeholder = 'Photo Credit';
			creditInput.addEventListener('keyup', e => {
				if (e.target.value.length > 3) {
					wpFrontendUploader.media[media.key].data.credit = e.target.value;
				} else {
					wpFrontendUploader.media[media.key].data.credit = null;
				}
				updateProgressBar();
			});
			mediaForm.appendChild(creditInput);

			// photo credit input
			let captionText = document.createElement('textarea');
			captionText.placeholder = 'Photo Caption';
			captionText.addEventListener('keyup', e => {
				if (e.target.value.length > 3) {
					wpFrontendUploader.media[media.key].data.caption = e.target.value;
				} else {
					wpFrontendUploader.media[media.key].data.caption = null;
				}
				updateProgressBar();
			});
			mediaForm.appendChild(captionText);

			// append wrappers to container div
			mediaItem.appendChild(mediaWrapper)
			mediaItem.appendChild(mediaForm)

			// append main container div to edit area
			editArea.appendChild(mediaItem)
		});
	}

	// update the preview
	let updatePreview = (upload, key) => {
		// set the upload to the media storage
		wpFrontendUploader.media[key].upload = upload

		// get the media item
		let mediaItem = document.querySelector(`[data-key="${key}"]`);

		// get the image and add uploaded class
		let image = mediaItem.querySelector(`[data-element="image"]`);
		image.classList.add('uploaded');

		// get the loader and hide it
		let loader = mediaItem.querySelector(`[data-element="loader"]`);
		loader.classList.add('hide');
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
			updatePreview(upload, media.key);
			updateProgressBar();
		})
		.catch(error => {
			console.log(error)
		})

	};

	// updateMediaItem
	let updateMediaItem = (media) => {

		return new Promise((resolve, reject) => {
			// build the endpoint
			let id = media.upload.id
			let endpoint = `${wpFrontendUploader.endpoint}${id}`;

			// build the data
			let postData = {
				'title': media.data.title,
				'alt_text': media.data.title,
				'caption': media.data.caption,
				'fields': {
				'media_contributor': media.data.credit,
				'media_downloads_count': 0,
				'media_favorites_count': 0,
				'media_views_count': 0
				}
			}

			// update the media
			fetch(endpoint, {
				method: 'POST',
				body: JSON.stringify(postData),
				headers: new Headers({
					'X-WP-Nonce': wpFrontendUploader.nonce,
					'Content-Type': 'application/json',
					'accept': 'application/json',
				})
			})
			.then(response => {
				return response.json();
			})
			.then(media => {
				resolve(media)
			})
			.catch(error => {
				reject(error)
			})
		})
	}

	// process data
	let processMediaItems = () => {

		// disable submit button
		submitButton.disabled = true;
		submitButton.innerHTML = 'Updating...';

		// build a promise list
		let promises = [];
		;([...wpFrontendUploader.media]).forEach(media => {
			promises.push(updateMediaItem(media))
		});

		// run promises
		Promise.all(promises).then(results => {

			// enable submit button
			submitButton.classList.add('saved');
			submitButton.innerHTML = 'Saved';

			editArea.classList.add('hide');
			savedArea.classList.remove('hide');
		})
	}
	submitButton.addEventListener('click', processMediaItems);


	// handle dropped files
	let handleDrop = (e) => {
		let dt = e.dataTransfer
		let files = dt.files

		handleFiles(files)
	};

	// handleFiles
	let handleFiles = (files) => {

		// build a storage array for files and uploads identified by keys
		;([...files]).forEach(( file, idx ) => {
			let mediaFile = {
				file: file,
				upload: null,
				key: idx,
				data: {
					title: null,
					credit: null,
					caption: null,
				}
			}
			wpFrontendUploader.media.push(mediaFile)
		});

		wpFrontendUploader.totalParts = wpFrontendUploader.media.length*3;
		// set previews based off of files (not the uploads themselves)
		setPreviews();

		// upload the files
		;([...wpFrontendUploader.media]).forEach(uploadFile);
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

	// detect when droparea is clicked
	dropArea.addEventListener('click', (e) => {
		let fileField = dropArea.querySelector('form input[type="file"]');
		fileField.click();
	}, false)

})(window);
