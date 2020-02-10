<?php
/**
 * Enqueue Assets
 *
 * @package BulmaPress
 */

if ( ! function_exists( 'paperpress_block_editor_assets_enqueue' ) ) {

	/**
	 * Enqueue assets for the block editor.
	 */
	function paperpress_block_editor_assets_enqueue( $enqueue ) {
		$enqueue = new WebpackEnqueue(
			// Name of the project, same as `appName` in wpackio.project.js
			'bulmaPress',
			// Output directory, same as `outputPath` in wpackio.project.js
			'dist',
			// Version of your plugin
			'1.0.0',
			// Type of your project, same as `type` in wpackio.project.js
			'theme',
			// Plugin location, pass false in case of theme.
			false
		);

		$enqueue->enqueue(
            'theme',
            'paperBlocks',
            [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-keycodes' ]
		);
	}

	add_action( 'enqueue_block_editor_assets', 'paperpress_block_editor_assets_enqueue' );
}

if ( ! function_exists( 'paperpress_shared_assets_enqueue' ) ) {

	/**
	 * Enqueue assets for frontend and editor.
	 */
	function paperpress_shared_assets_enqueue() {
		wp_enqueue_style( 'paperpress-fonts', paper_press_fonts_url(), array(), null );
	}

	add_action( 'enqueue_block_assets', 'paperpress_shared_assets_enqueue' );
}

/**
 * Frontend only assets.
 */
if ( ! function_exists( 'paperpress_frontend_assets_enqueue' ) ) {
	function paperpress_frontend_assets_enqueue() {
		$enqueue = new WebpackEnqueue(
			// Name of the project, same as `appName` in wpackio.project.js
			'bulmaPress',
			// Output directory, same as `outputPath` in wpackio.project.js
			'dist',
			// Version of your plugin
			'1.0.0',
			// Type of your project, same as `type` in wpackio.project.js
			'theme',
			// Plugin location, pass false in case of theme.
			false
		);

		$enqueue->enqueue( 'theme', 'main', [] );

		wp_enqueue_style( 'font-awesome-css', get_template_directory_uri() . '/inc/fontawesome/css/fontawesome-all.css', [], time(), 'all'  );
	}

	add_action( 'wp_enqueue_scripts', 'paperpress_frontend_assets_enqueue' );
}

/**
 * Return the Google font stylesheet URL
 */
if ( ! function_exists( 'paper_press_fonts_url' ) ) :
    function paper_press_fonts_url() {
    
		$fonts_url = '';
		/* Translators: If there are characters in your language that are not
		* supported by these fonts, translate this to 'off'. Do not translate
		* into your own language.
		*/
		$font_style = get_theme_mod( 'paper_press_font_style', 'sans' );
		if ( $font_style == 'serif' ) {
			$frank = esc_html_x( 'on', 'Frank Ruhl Libre font: on or off', 'bulma-press' );
			if ( 'off' !== $frank ) {
				$font_families = array();
				if ( 'off' !== $frank )
					$font_families[] = 'Frank Ruhl Libre:400,700';
			}
		} else {
			$roboto_mono = esc_html_x( 'on', 'Roboto Mono font: on or off', 'bulma-press' );
			if ( 'off' !== $roboto_mono ) {
				$font_families = array();
				if ( 'off' !== $roboto_mono )
					$font_families[] = 'Roboto Mono';
			}
		}
		if ( !empty ( $font_families ) ) {
			$query_args = array(
				'family' => urlencode( implode( '|', $font_families ) ),
				'subset' => urlencode( 'latin,latin-ext' ),
			);
			$fonts_url = add_query_arg( $query_args, "//fonts.googleapis.com/css?&display=swap" );
		}
		return $fonts_url;
    }
	endif;
