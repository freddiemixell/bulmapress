<?php
/**
 * Paper Press functions and definitions
 *
 * @package Paper Press
 */

// Webpack enqueue class.
require_once __DIR__ . '/inc/enqueue.php';

// Asset enqueue - css, js, fonts.
require_once __DIR__ . '/inc/assets.php';

// Theme setup.
require_once __DIR__ .'/inc/theme-setup.php';

// Widgets areas.
require_once __DIR__ . '/inc/widgets.php';

// Custom template tags for Paper Press.
require_once __DIR__ . '/inc/template-tags.php';

// Load Jetpack compatibility file.
require_once __DIR__ . '/inc/jetpack.php';

// Theme mods.
require_once __DIR__ . '/inc/theme-mods.php';
add_editor_style('editor-style.css');