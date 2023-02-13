<?php
function _themename_assets() {
    wp_enqueue_style( '_themename-stylesheet', get_template_directory_uri( ) . '/dist/assets/css/bundle.css', array(), '1.0.0', 'all' );
    wp_enqueue_script( '_themename-script', get_template_directory_uri(  ) . '/dist/assets/js/bundle.js', array('jquery'), '1.0.0', true );

    // Adding inline CSS or Style for Color Picker
    include(get_template_directory(  ) . '/lib/inline-css.php');
    wp_add_inline_style( '_themename-stylesheet', $inline_dynamic_color_picker );
}
add_action( 'wp_enqueue_scripts', '_themename_assets' );

function _themename_admin_assets() {
    wp_enqueue_style( '_themename-admin_stylesheet', get_template_directory_uri( ) . '/dist/assets/css/admin.css', array(), '1.0.0', 'all' );
    wp_enqueue_script( '_themename-admin-script', get_template_directory_uri(  ) . '/dist/assets/js/admin.js', array(), '1.0.0', true );
}
add_action( 'admin_enqueue_scripts', '_themename_admin_assets' );

function _themename_customize_preview_js() {
    wp_enqueue_script( '_themename-customize-preview', get_template_directory_uri(  ) . '/dist/assets/js/customize-preview.js', array('customize-preview', 'jquery'), '1.0.0', true );

    include(get_template_directory(  ) . '/lib/inline-css.php');
    wp_localize_script( '_themename-customize-preview', '_themename', array('inline-css' => $inline_style_selector) );
}
add_action( 'customize_preview_init', '_themename_customize_preview_js' );