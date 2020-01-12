<?php
/**
 * Theme Mods.
 *
 * @package Paper Press
 */

/**
 * Add button class to next/previous post links
 */
function paper_press_posts_link_attributes() {
	return 'class="button"';
}
add_filter( 'next_posts_link_attributes', 'paper_press_posts_link_attributes' );
add_filter( 'previous_posts_link_attributes', 'paper_press_posts_link_attributes' );


/**
 * Add layout style class to body
 */
function paper_press_layout_class( $classes ) {

	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	if( is_single() && has_post_thumbnail() || is_page() && has_post_thumbnail() ) {
		$classes[] = 'has-featured-image';
	}

	$featured_image = get_theme_mod( 'paper_press_featured_image_style', 'wide' );

	if ( $featured_image == 'wide' ) {
		$classes[] = 'featured-image-wide';
	}

	return $classes;
}
add_filter( 'body_class', 'paper_press_layout_class' );


/**
 * Add featured image class to posts
 */
function paper_press_featured_image_class( $classes ) {
	global $post;

	$classes[] = 'post';

	// Check for featured image
	$classes[] = has_post_thumbnail() ? 'with-featured-image' : 'without-featured-image';

	$page_template = get_post_meta( $post->ID, '_wp_page_template', true );

	if ( $page_template == 'templates/template-wide-image.php' ) {
		$classes[] = 'has-wide-image';
	}

	return $classes;
}
add_filter( 'post_class', 'paper_press_featured_image_class' );


/**
 * Adjust the grid excerpt length for portfolio items
 */
function paper_press_search_excerpt_length() {
	return 40;
}

/**
 * Add an ellipsis read more link
 */
function paper_press_excerpt_more( $more ) {
	if( is_admin() ) return $more;

	return ' &hellip;';
}
add_filter( 'excerpt_more', 'paper_press_excerpt_more' );

/**
 * Full size image on attachment pages
 */
function paper_press_attachment_size( $p ) {
	if ( is_attachment() ) {
		return '<p>' . wp_get_attachment_link( 0, 'full-size', false ) . '</p>';
	}
}
add_filter( 'prepend_attachment', 'paper_press_attachment_size' );

/**
 * Add a js class
 */
function paper_press_html_js_class () {
    echo '<script>document.documentElement.className = document.documentElement.className.replace("no-js","js");</script>'. "\n";
}
add_action( 'wp_head', 'paper_press_html_js_class', 1 );


/**
 * Replaces the footer tagline text
 */
function paper_press_filter_footer_text() {

	// Get the footer copyright text
	$footer_copy_text = get_theme_mod( 'paper_press_footer_text' );

	if ( $footer_copy_text ) {
		// If we have footer text, use it
		$footer_text = $footer_copy_text;
	} else {
		// Otherwise show the fallback theme text
		$footer_text = sprintf( esc_html__( ' Theme by %1$s.', 'paper-press' ), '<a href="https://paperplaneco.com/" rel="nofollow">Paper Press</a>' );
	}

	return wp_kses_post( $footer_text );

}
add_filter( 'paper_press_footer_text', 'paper_press_filter_footer_text' );


/**
 * Replaces the footer tagline text
 */
function paper_press_add_search_icon( $items, $args ) {
	$search_icon = get_theme_mod( 'paper_press_search_icon', 'enabled' );

	if ( $args->theme_location == 'primary' && $search_icon == 'enabled' ) {
        $items .= '<li class="menu-item menu-item-search search-toggle"><i class="fa fa-search"></i><i class="fas fa-times"></i></li>';
    }
    return $items;
}
add_filter( 'wp_nav_menu_items', 'paper_press_add_search_icon', 10, 2 );


/**
 * Add fallback menu with search icon
 */
function paper_press_fallback_menu() {
	$search_icon = get_theme_mod( 'paper_press_search_icon', 'enabled' );

	if( $search_icon == 'enabled' ) {
		wp_page_menu( array( 'after' => '<li class="menu-item menu-item-search search-toggle"><i class="fa fa-search"></i><i class="fas fa-times"></i></li></ul>' ) );
	} else {
		wp_page_menu();
	}
}
