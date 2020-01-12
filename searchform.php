<?php
/**
 * This template displays the search form.
 *
 * @package Paper Press
 */
?>

<form role="search" method="get" class="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<div>
		<label class="screen-reader-text"><?php esc_html_e( 'Search for:', 'paper-press' ); ?></label>

		<input type="text" value="<?php echo get_search_query(); ?>" name="s" class="search-input" placeholder="<?php esc_attr_e( 'Search here...', 'paper-press' ); ?>" />

		<button class="searchsubmit" type="submit">
			<i class="fa fa-search"></i> <span><?php esc_html_e( 'Search', 'paper-press' ); ?></span>
		</button>
	</div>
</form>
