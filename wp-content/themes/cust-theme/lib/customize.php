<?php

function _themename_customize_register($wp_customize) {
    $wp_customize -> add_setting('_themename_site_info', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field'
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