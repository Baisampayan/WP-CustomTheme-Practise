<!DOCTYPE html>
<html <?php language_attributes(); ?> >
<head>
    <meta charset="<?php bloginfo('charset'); ?>" >
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head( ); ?>
    <!-- Getting the Site Title & Tagline from WordPress Admin -->
    <!-- <title><?php /*bloginfo('name'); ?> - <?php bloginfo( 'description' ); */?></title> -->
</head>
<body <?php body_class(''); ?>>
    <a href="#content" class="u-skip-link"><?php esc_attr_e( 'Skip to content', '_themename' ) ?></a>
    <header role="banner" class="u-margin-bottom-40">
        <div class="c-header">
            <div class="o-container u-flex u-align-justify u-align-middle">
                <div class="c-header__logo">
                    <!-- If Custom Logo to Site Name to display -->
                    <?php if(has_custom_logo( )) {
                        the_custom_logo( );
                    } else { ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="c-header__blogname"><?php esc_html( bloginfo('name') ); ?></a>
                    <?php } ?>
                </div>
                <?php get_search_form( true ); ?>
            </div>
        </div>
        <div class="c-navigation">
            <div class="o-container">
                <nav class="header-nav" role="navigation" aria-label="<?php esc_html_e( 'Main Navigation', '_themename' ) ?>">
                    <?php 
                        // If the specific menu (main_menu), has any menu assigned
                        if(has_nav_menu( 'main_menu' )) {
                            wp_nav_menu( array(
                                'theme_location' => 'main_menu'
                            ));
                        } 
                    ?>
                </nav>
            </div>
        </div>
    </header>

    <div id="content">