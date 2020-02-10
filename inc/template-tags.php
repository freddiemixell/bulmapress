<?php
/**
 * Functions used throughout the theme
 *
 * @package BulmaPress
 */


/**
 * Display the author description on author archive
 */
function the_author_archive_description( $before = '', $after = '' ) {

	$author_description  = get_the_author_meta( 'description' );

	if ( ! empty( $author_description ) ) {
		/**
		 * Get the author bio
		 */
		echo wpautop( $author_description );
	}
}


/**
 * Site title and logo
 */
if ( ! function_exists( 'paper_press_title_logo' ) ) :
function paper_press_title_logo() { ?>
		<!-- Use the Site Logo feature, if supported -->
		<?php
			$custom_logo_id = get_theme_mod( 'custom_logo' );
						
			// We have a logo. Logo is go.
			if ( $custom_logo_id ) {
					$custom_logo_attr = [
						'class' => 'paperpress-custom-logo',
					];
	
					/*
						* If the logo alt attribute is empty, get the site title and explicitly
						* pass it to the attributes used by wp_get_attachment_image().
						*/
					$image_alt = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
					if ( empty( $image_alt ) ) {
						$custom_logo_attr['alt'] = get_bloginfo( 'name', 'display' );
					}
	
					/*
						* If the alt attribute is not empty, there's no need to explicitly pass
						* it because wp_get_attachment_image() already adds the alt attribute.
						*/
					return sprintf(
							'<a href="%1$s" class="paperpress-navbar-item" rel="home">%2$s</a>',
							esc_url( home_url( '/' ) ),
							wp_get_attachment_image( $custom_logo_id, 'full', false, $custom_logo_attr )
					);
			} elseif ( is_customize_preview() ) {
					// If no logo is set but we're in the Customizer, leave a placeholder (needed for the live preview).
					return sprintf(
							'<a href="%1$s" class="paperpress-navbar-item" style="display:none;"><img class="paperpress-custom-logo"/></a>',
							esc_url( home_url( '/' ) )
					);
			}
		?>
<?php } endif;


/**
 * Output paeg titles, subtitles and archive descriptions
 */
if ( ! function_exists( 'paper_press_page_titles' ) ) :
function paper_press_page_titles() { ?>
	<div class="page-titles">
		<h1><?php the_archive_title(); ?></h1>

		<?php
		// Get the page excerpt or archive description for a subtitle
		$archive_description = get_the_archive_description();

		if ( is_archive() && $archive_description ) {
			$subtitle = get_the_archive_description();
		}

		// Show the subtitle
		if ( ! empty( $subtitle ) && ! is_singular( 'post' ) ) { ?>
			<div class="entry-subtitle">
				<?php echo $subtitle; ?>
			</div>
		<?php } ?>

	</div>

	<?php 
} endif;

if ( ! function_exists( 'paper_press_menu' ) ) :
	function paper_press_menu( $theme_location ) {
		if ( ($theme_location) && ($locations = get_nav_menu_locations()) && isset($locations[$theme_location]) ) {
			$menu = get_term( $locations[$theme_location], 'nav_menu' );
			$menu_items = wp_get_nav_menu_items($menu->term_id);
	
			$menu_list  = '';
	
			$count = 0;
			$submenu = false;
			
			foreach( $menu_items as $menu_item ) {
				
				$link = $menu_item->url;
				$title = $menu_item->title;
				
				if ( !$menu_item->menu_item_parent ) {
					$parent_id = $menu_item->ID;
					
					$menu_list .= '<a href="'.$link.'" class="paperpress-navbar-item">'.$title.'</a>' ."\n";
				}
	
				$count++;
			}
	
		} else {
			$menu_list = '<!-- no menu defined in location "'.$theme_location.'" -->';
		}
		return $menu_list;
	}
endif;


/**
 * Filter the page title for certain pages
 */
function paper_press_change_archive_title( $title ) {
    if( is_search() ) {
		$title = sprintf( __( 'Search Results for: %s', 'bulma-press' ), '<span>' . get_search_query() . '</span>' );
    } elseif ( is_404() ) {
		$title = _e( 'Page Not Found', 'bulma-press' );
	}

    return $title;
}
add_filter( 'get_the_archive_title', 'paper_press_change_archive_title' );


/**
 * Custom comment output
 */
function paper_press_comment( $comment, $args, $depth ) { ?>
<li <?php comment_class( 'clearfix' ); ?> id="li-comment-<?php comment_ID(); ?>">

	<div class="comment-block" id="comment-<?php comment_ID(); ?>">

		<div class="comment-wrap">
			<?php echo get_avatar( $comment, 75 ); ?>

			<div class="comment-info">
				<cite class="comment-cite">
				    <?php comment_author_link() ?>
				</cite>

				<a class="comment-time" href="<?php echo esc_url( get_comment_link( comment_ID() ) ) ?>"><?php printf( esc_html__( '%1$s at %2$s', 'bulma-press' ), get_comment_date(),  get_comment_time() ); ?></a><?php edit_comment_link( esc_html__( '(Edit)', 'bulma-press' ), '&nbsp;', '' ); ?>
			</div>

			<div class="comment-content">
				<?php comment_text() ?>
				<p class="reply">
					<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ) ?>
				</p>
			</div>

			<?php if ( $comment->comment_approved == '0' ) : ?>
				<em class="comment-awaiting-moderation"><?php esc_html_e( 'Your comment is awaiting moderation.', 'bulma-press' ) ?></em>
			<?php endif; ?>
		</div>
	</div>
<?php
}


/**
 * Displays post next/previous navigations
 *
 * @since BulmaPress 1.0
 */
 if ( ! function_exists( 'paper_press_post_navs' ) ) :
 function paper_press_post_navs( $query = false ) {
 	// Previous/next post navigation.
 	$next_post = get_next_post();
 	$previous_post = get_previous_post();

 	the_post_navigation( array(
 		'next_text' => '<span class="meta-nav-text meta-title">' . esc_html__( 'Next:', 'bulma-press' ) . '</span> ' .
 		'<span class="screen-reader-text">' . esc_html__( 'Next post:', 'bulma-press' ) . '</span> ' .
 		'<span class="post-title">%title</span>',
 		'prev_text' => '<span class="meta-nav-text meta-title">' . esc_html__( 'Previous:', 'bulma-press' ) . '</span> ' .
 		'<span class="screen-reader-text">' . esc_html__( 'Previous post:', 'bulma-press' ) . '</span> ' .
 		'<span class="post-title">%title</span>',
 	) );
 } endif;


/**
 * Author post widget
 *
 * @since 1.0
 */
if ( ! function_exists( 'paper_press_author_box' ) ) :
function paper_press_author_box() {
	global $post, $current_user;
	$author = get_userdata( $post->post_author );
	if ( $author && ! empty( $author->description ) ) {
	?>
	<div class="author-profile">

		<a class="author-profile-avatar" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" title="<?php echo esc_attr( sprintf( esc_html__( 'Posts by %s', 'bulma-press' ), get_the_author() ) ); ?>"><?php echo get_avatar( get_the_author_meta( 'user_email' ), apply_filters( 'paper_press_author_bio_avatar_size', 65 ) ); ?></a>

		<div class="author-profile-info">
			<h3 class="author-profile-title">
				<?php if ( is_archive() ) { ?>
					<?php echo esc_html( sprintf( esc_html__( 'All posts by %s', 'bulma-press' ), get_the_author() ) ); ?>
				<?php } else { ?>
					<?php echo esc_html( sprintf( esc_html__( 'Posted by %s', 'bulma-press' ), get_the_author() ) ); ?>
				<?php } ?>
			</h3>

			<div class="author-description">
				<p><?php the_author_meta( 'description' ); ?></p>
			</div>

			<div class="author-profile-links">
				<a href="<?php echo esc_url( get_author_posts_url( $author->ID ) ); ?>"><i class="fa fa-pencil-square-o"></i> <?php esc_html_e( 'All Posts', 'bulma-press' ); ?></a>

				<?php if ( $author->user_url ) { ?>
					<?php printf( '<a href="%1$s"><i class="fa fa-external-link"></i> %2$s</a>', esc_url( $author->user_url ), 'Website', 'bulma-press' ); ?>
				<?php } ?>
			</div>
		</div><!-- .author-drawer-text -->
	</div><!-- .author-profile -->

<?php } } endif;


/**
 * Post byline
 */
if ( ! function_exists( 'paper_press_post_byline' ) ) :
function paper_press_post_byline() { ?>
	<?php
		// Get the post author
		global $post;
		$author_id = $post->post_author;
	?>
	<p class="entry-byline">
		<!-- Create an avatar link -->
		<a href="<?php echo esc_url( get_author_posts_url( $author_id ) ); ?>" title="<?php echo esc_attr( sprintf( __( 'Posts by %s', 'bulma-press' ), get_the_author() ) ); ?>">
			<?php echo get_avatar( $author_id, apply_filters( 'paper_press_author_bio_avatar', 44 ) ); ?>
		</a>

		<!-- Create an author post link -->
		<a class="entry-byline-author" href="<?php echo esc_url( get_author_posts_url( $author_id ) ); ?>">
			<?php echo esc_html( get_the_author_meta( 'display_name', $author_id ) ); ?>
		</a>
		<span class="entry-byline-on"><?php esc_html_e( 'on', 'bulma-press' ); ?></span>
		<span class="entry-byline-date"><?php echo get_the_date(); ?></span>
	</p>
<?php } endif;


/**
 * Modify the archive title prefix
 */
if ( ! function_exists( 'paper_press_modify_archive_title' ) ) :
 function paper_press_modify_archive_title( $title ) {
	// Skip if the site isn't LTR, this is visual, not functional.
	if ( is_rtl() || is_search() || is_404() ) {
		return $title;
	}

	// Split the title into parts so we can wrap them with spans.
	$title_parts = explode( ': ', $title, 2 );

	// Glue it back together again.
	if ( ! empty( $title_parts[1] ) ) {
		$title = wp_kses(
			$title_parts[1],
			array(
				'span' => array(
					'class' => array(),
				),
			)
		);
		$title = '<span class="screen-reader-text">' . esc_html( $title_parts[0] ) . ': </span>' . $title;
	}
	return $title;
} endif;
add_filter( 'get_the_archive_title', 'paper_press_modify_archive_title' );
