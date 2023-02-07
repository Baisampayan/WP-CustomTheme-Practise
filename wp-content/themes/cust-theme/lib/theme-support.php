<?php

function _themename_theme_support () {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array(
        'search-form', 'comment-list', 'comment-form', 'gallery', 'caption'
    ) );
    // Selective Refresh for Widget
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Option for Custom Logo
    add_theme_support( 'custom-logo', array(
        'height' => 150,
        'width' => 600,
        'flex-height' => true,
        'flex-width' => true
    ) );
}

add_action( 'after_setup_theme', '_themename_theme_support' );