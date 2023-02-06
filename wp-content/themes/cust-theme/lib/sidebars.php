<?php

function _themename_sidebar_widget() {
    register_sidebar(array(
        'id' => 'primary-sidebar',
        'name' => esc_html__( 'Primary Sidebar', '_themename' ),
        'description' => esc_html__('This is the description for the Primary Sidebar'),
        'before_widget' => '<section id="%1$s" class="c-sidebar-widget u-margin-bottom-20 %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h5>',
        'after_title' => '</h5>'
    ));
}

add_action( 'widgets_init', '_themename_sidebar_widget' );

// Footer Widget
$footer_layout = '3,3,3,3';
$footer_columns = explode(',', $footer_layout);
// Manual Setting of Footer Background
// $footer_bg = 'dark';

// Fetching the Footer Background from the Customize Panel
$footer_bg = _themename_sanitize_footer_option(get_theme_mod( '_themename_footer_option', 'dark ' )) ;
$footer_widget_bg_color = '';
if($footer_bg = 'light') {
    $footer_widget_bg_color = 'c-footer-widget--dark';
} else {
    $footer_widget_bg_color = 'c-footer-widget--light';
}

foreach($footer_columns as $i => $footer_column) {
    register_sidebar(array(
        'id' => 'footer-widget-' . ($i+1),
        'name' => sprintf(esc_html__( 'Footer Widget Column %s', '_themename' ), $i+1),
        'description' => esc_html__('This is the description for the Footer Widget', '_themename'),
        'before_widget' => '<section id="%1$s" class="c-footer-widget ' . $footer_widget_bg_color . ' %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h5>',
        'after_title' => '</h5>'
    ));
}