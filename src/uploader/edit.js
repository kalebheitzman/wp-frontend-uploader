const { __ } = wp.i18n; // Import __() from wp.i18n

const {
	InspectorControls,
	RichText
} = wp.blockEditor;

console.log(wp.blockEditor)

const {
	Panel, PanelBody, PanelRow,
	TextareaControl,
	SelectControl,
	TextControl,
	ToggleControl,
	Spinner
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

			{ isSelected && (
				<InspectorControls>
					<PanelBody
						title="Uploader Settings"
						icon="admin-settings"
						initialOpen={ true }
					>

					</PanelBody>
				</InspectorControls>
			)}

			<div className={className}>
				<h2>Frontend Uploader</h2>

				{ isSelected && (
					<TextareaControl
						label="Upload Instructions"
						className="textarea"
						value={attributes.uploadInstructions}
						placeholder="Upload Instructions"
						onChange={uploadInstructions => setAttributes({ uploadInstructions: uploadInstructions })}
					/>
				)}
			</div>
		</Fragment>
	)
})

export default UploaderEdit
