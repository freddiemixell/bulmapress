<?php
/**
 * Enqueue Assets
 *
 * @package Paper Press
 */

if ( ! function_exists( 'paperpress_enqueue' ) ) {
	// Require the composer autoload for getting conflict-free access to enqueue
    require_once( get_template_directory() . '/vendor/autoload.php' );

	/**
	 * Enqueue Paperpress Assets
	 */
	function paperpress_enqueue() {
		// Instantiate
		$enqueue = new \WPackio\Enqueue(
			// Name of the project, same as `appName` in wpackio.project.js
			'paperPress',
			// Output directory, same as `outputPath` in wpackio.project.js
			'dist',
			// Version of your plugin
			'1.0.0',
			// Type of your project, same as `type` in wpackio.project.js
			'theme',
			// Plugin location, pass false in case of theme.
			false
		);
		// Example of how to localize php in js.
		// $assets = $enqueue->enqueue( 'theme', 'main', [
		// 	'js' => true,
		// 	'css' => true,
		// 	'js_dep' => [],
		// 	'css_dep' => [],
		// 	'in_footer' => true,
		// 	'media' => 'all',
		// ] );

		// $entry_point = array_pop( $assets['js'] );

		// wp_localize_script( $entry_point['handle'], 'paper_press_js_vars', [
		// 	'ajaxurl' => esc_url ( admin_url( 'admin-ajax.php' ) )
		// ] );

		/**
		 * Load fonts from Google
		 */
		wp_enqueue_style( 'paperpress-fonts', paper_press_fonts_url(), array(), null );	

		/**
		 * FontAwesome Icons stylesheet
		 */
		wp_enqueue_style( 'font-awesome', get_template_directory_uri() . "/inc/fontawesome/css/fontawesome-all.css", array(), '5.0.12', 'screen' );

		/**
		 * Load the comment reply script
		 */
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		$enqueue->enqueue( 'theme', 'main', [] );
		$enqueue->enqueue(
            'theme',
            'hero',
            [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ]
		);
		$enqueue->enqueue(
            'theme',
            'textControls',
            [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ]
        );
	}

	add_action( 'wp_enqueue_scripts', 'paperpress_enqueue' );
	add_action( 'enqueue_block_editor_assets', 'paperpress_enqueue' );
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
			$frank = esc_html_x( 'on', 'Frank Ruhl Libre font: on or off', 'paper-press' );
			if ( 'off' !== $frank ) {
				$font_families = array();
				if ( 'off' !== $frank )
					$font_families[] = 'Frank Ruhl Libre:400,700';
			}
		} else {
			$roboto_mono = esc_html_x( 'on', 'Roboto Mono font: on or off', 'paper-press' );
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
