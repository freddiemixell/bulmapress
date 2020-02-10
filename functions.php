<?php
/**
 * BulmaPress functions and definitions
 *
 * @package BulmaPress
 */

// Webpack enqueue class.
require_once __DIR__ . '/inc/enqueue.php';

// Asset enqueue - css, js, fonts.
require_once __DIR__ . '/inc/assets.php';

// Theme setup.
require_once __DIR__ .'/inc/theme-setup.php';

// Widgets areas.
require_once __DIR__ . '/inc/widgets.php';

// Custom template tags for BulmaPress.
require_once __DIR__ . '/inc/template-tags.php';

// Load Jetpack compatibility file.
require_once __DIR__ . '/inc/jetpack.php';

// Theme mods.
require_once __DIR__ . '/inc/theme-mods.php';

add_filter( 'block_editor_settings' , 'remove_guten_wrapper_styles' );
function remove_guten_wrapper_styles( $settings ) {
    unset($settings['styles']);

    return $settings;
}

add_action( 'admin_head', function() {
    echo '<style>.editor-post-title { display: none !important; } .edit-post-visual-editor { padding-top: 5px !important; }</style>';
} );
