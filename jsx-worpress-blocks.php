<?php
/**
 * Plugin Name: JSX Wordpress Bocks DevKit
 * Description: Dev Kit for Gutemberg Blocks Development.
 * Author: Ivan Oliveira
 * Author URI: https://ivanoliveira.me/
 * Version: 0.0.1
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined( 'ABSPATH' ) || exit;

function jsx_blocks_enqueue_script() {
	wp_enqueue_script(
		'jsx_wordpress_blocks_devkit',
		plugins_url( 'dist/block.build.min.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
        true
	);
}

add_action('enqueue_block_editor_assets', 'jsx_blocks_enqueue_script' );