<?php
/**
 * Plugin Name: WP Frontend Uploader
 * Plugin URI: https://github.com/kheitzman/wp-frontend-uploader
 * Description: A frontend uploader that allows registered users to upload files to your website.
 * Author: kalebheitzman
 * Author URI: https://heitzman.co
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
