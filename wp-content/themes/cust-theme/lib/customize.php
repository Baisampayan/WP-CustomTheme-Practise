<?php

function _themename_customize_register($wp_customize) {
    // Using default Text Sanitization
    // $wp_customize -> add_setting('_themename_site_info', array(
    //     'default' => '',
    //     'sanitize_callback' => 'sanitize_text_field'
    // ));

    // Using default Custom Sanitization (Text + href)
    $wp_customize -> add_setting('_themename_site_info', array(
        'default' => '',
        'sanitize_callback' => '_themename_sanitize_site_info'
    ));

    // Adding the option under the Site Title & Tagline
    // $wp_customize -> add_control('_themename_site_info', array(
    //     'type' => 'text',
    //     'label' => esc_html__( 'Footer Site Info', '_themename' ),
    //     'section' => 'title_tagline'
    // ));

    // Adding the option within a new Section
    $wp_customize -> add_section('_themename_footer_option', array(
        'title' => esc_html__( 'Website Footer Setting', '_themename' ),
        'description' => esc_html__( 'This section is to change setting of the footer', '_themename' ),
        // Arranging the position 
        'priority' => 30
    ));

    $wp_customize -> add_control('_themename_site_info', array(
        'type' => 'textarea',
        'label' => esc_html__( 'Footer Site Info', '_themename' ),
        'section' => '_themename_footer_option',
    ));
}
add_action( 'customize_register', '_themename_customize_register' );

// Creating Custom Sanitize Function for Footer SiteInfo with <a href>
function _themename_sanitize_site_info($input) {
    $allowed = array('a' => array(
        'href' => array(),
        'title' => array(),
        'style' => array()
    ));
    return wp_kses( $input, $allowed );
}