const { __ } = wp.i18n; // Import __() from wp.i18n

const {
	Panel, PanelBody, PanelRow,
	TextareaControl,
} = wp.components;

const {
	Fragment,
} = wp.element;

const {
	withSelect
} = wp.data;

const UploaderEdit = withSelect((select, { attributes }) => {
	// return
	return {}
})(({ attributes, className, isSelected, setAttributes }) => {

	return(
		<Fragment>
			<div className={className}>
				<h2>Frontend Uploader</h2>
			</div>
			{ isSelected && (
				<Panel
					header="WP Frontend Uploader"
					className="wp-frontend-uploader-settings"
				>
					<PanelBody
						title="Text Displays"
						icon="admin-settings"
						initialOpen={ true }
					>
						<TextareaControl
							label={__('Upload Instructions')}
							className="textarea"
							value={attributes.upload_instructions}
							help={ __('Enter upload instructions for the user here. These instructions will be placed on the initial uploader.')}
							onChange={upload_instructions => setAttributes({ upload_instructions: upload_instructions })}
						/>
						<TextareaControl
							label={__('Saved Media Instructions')}
							className="textarea"
							value={attributes.saved_instructions}
							help={__('Enter a message to display to users after they save media title, caption, and meta. These instructions will be displayed to the user once they click on the submit button.')}
							onChange={saved_instructions => setAttributes({ saved_instructions: saved_instructions })}
						/>
					</PanelBody>
				</Panel>
			)}
		</Fragment>
	)
})

export default UploaderEdit
