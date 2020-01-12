<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package Paper Press
 */

// Get the sidebar widgets
if ( is_active_sidebar( 'sidebar' ) ) { ?>
	<aside id="secondary" class="widget-area">
		<?php do_action( 'paper_press_above_sidebar' );

		dynamic_sidebar( 'sidebar' );

		do_action( 'paper_press_below_sidebar' ); ?>
	</aside><!-- #secondary .widget-area -->
<?php }
