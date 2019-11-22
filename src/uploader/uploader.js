const { __ } = wp.i18n; // Import __() from wp.i18n

const {
	InspectorControls
} = wp.blockEditor;

const {
	Panel, PanelBody, PanelRow,
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

	return {

	}
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
				<h2>Uploader</h2>

			</div>
		</Fragment>
	)
})

export default UploaderEdit
