<?php
/**
 * Theme Setup
 *
 * @package Paper Press
 */

if ( ! function_exists( 'paper_press_setup' ) ) :
    /**
     * Sets up Paper Press's defaults and registers support for various WordPress features
     */
    function paper_press_setup() {
        /*
         * Make theme available for translation
         */
        load_theme_textdomain( 'paper-press', get_template_directory() . '/languages' );
    
        /**
         * Add default posts and comments RSS feed links to head
         */
        add_theme_support( 'automatic-feed-links' );
    
        /*
         * Post thumbnail support and image sizes
         */
        add_theme_support( 'post-thumbnails' );
    
        /*
         * Add title output
         */
        add_theme_support( 'title-tag' );
    
        /**
         * Custom Background support
         */
        $defaults = array(
            'default-color' => 'ffffff'
        );
        add_theme_support( 'custom-background', $defaults );
    
        /**
         * Add wide image support
         */
        add_theme_support( 'align-wide' );

        /**
         * Editor Styles
         */
        add_theme_support( 'editor-styles' );
    
        /**
         * Selective Refresh for Customizer
         */
        add_theme_support( 'customize-selective-refresh-widgets' );
    
        // Featured image
        add_image_size( 'paper-press-featured-image', 1200 );
    
        // Wide featured image
        add_image_size( 'paper-press-featured-image-wide', 1400 );
    
        // Logo size
        add_image_size( 'paper-press-logo', 300 );
    
        /**
         * Register Navigation menu
         */
        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Menu', 'paper-press' ),
            'social'  => esc_html__( 'Social Icon Menu', 'paper-press' ),
        ) );
    
        /**
         * Add Site Logo feature
         */
        add_theme_support( 'custom-logo', array(
            'header-text' => array( 'titles-wrap' ),
            'size'        => 'paper-press-logo',
        ) );
    
        /**
         * Enable HTML5 markup
         */
        add_theme_support( 'html5', array(
            'comment-form',
            'gallery',
        ) );

        // Color Palette
        add_theme_support( 'editor-color-palette', array(
            [
                'name'  => __( 'Primary', 'paper-press' ),
                'slug'  => 'primary',
                'color' => '#57c9fc',
            ],
            [
                'name'  => __( 'Secondary', 'paper-press' ),
                'slug'  => 'secondary',
                'color' => '#54f2a2',
            ],
            [
                'name'  => __( 'Accent', 'paper-press' ),
                'slug'  => 'accent',
                'color' => '#5de0e6'
            ],
            [
                'name'  => __( 'Foreground', 'paper-press' ),
                'slug'  => 'foreground',
                'color' => '#55f2a2',
            ],
            [
                'name'  => __( 'Background', 'paper-press' ),
                'slug'  => 'background',
                'color' => '#8ed1fc',
            ],
            [
                'name'  => __( 'Text', 'paper-press' ),
                'slug'  => 'text-color',
                'color' => '#444',
            ]
        ) );
    }
    endif; // paper_press_setup
    add_action( 'after_setup_theme', 'paper_press_setup' );

/**
 * Set the content width based on the theme's design and stylesheet
 */
function paper_press_content_width() {
	if ( has_post_format( 'gallery' ) ) {
		$GLOBALS['content_width'] = apply_filters( 'paper_press_content_width', 1400 );
	} else {
		$GLOBALS['content_width'] = apply_filters( 'paper_press_content_width', 905 );
	}
}
add_action( 'after_setup_theme', 'paper_press_content_width', 0 );
