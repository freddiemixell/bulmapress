<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Paper Press
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js paperpress-has-navbar-fixed-top">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header id="masthead" class="site-header">
		<nav id="site-navigation" class="paperpress-navbar paperpress-is-fixed-top" role="navigation" aria-label="main navigation">
			<div class="paperpress-container">
				<div class="paperpress-navbar-brand">
					<?= paper_press_title_logo(); ?>
				</div>
				<div class="paperpress-navbar-menu">
					<div class="paperpress-navbar-start">
						<?= paper_press_menu( 'primary' );?>
					</div>
					<div class="paperpress-navbar-end">
						<div class="paperpress-navbar-item">
							<div class="paperpress-buttons">
							<a class="paperpress-button">
								Log in
							</a>
							<a class="paperpress-button paperpress-is-primary">
								<span>Get Started</span>
								<span class="paperpress-icon">
									<i class="fas fa-arrow-right"></i>
								</span>
							</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
</header><!-- .site-header -->

<div id="page" class="paperpress-hfeed paperpress-site">
	<div id="content" class="paperpress-site-content">
