<?php

function _themename_customize_register($wp_customize) {
    // Using default Text Sanitization
    // $wp_customize -> add_setting('_themename_site_info', array(
    //     'default' => '',
    //     'sanitize_callback' => 'sanitize_text_field'
    // ));

    // Selective Refresh with Ajax for header (Logo)
    $wp_customize -> get_setting( 'blogname' ) -> transport = 'postMessage';

    $wp_customize -> selective_refresh -> add_partial('blogname', array(
        // 'setting' => array('blogname')
        'selector' => 'c-header__blogname',
        'container_inclusive' => false,
        'render_callback' => function() {
            bloginfo('name');
        }
    ));

    // Selective Refresh with Ajax for Footer Option
    $wp_customize -> selective_refresh -> add_partial('_themename_footer_partial', array(
        'settings' => array('_themename_footer_option', '_themename_footer_layout'),
        'selector' => '#footer',
        'container_inclusive' => false,
        'render_callback' => function() {
            get_template_part( 'template-parts/footer/footer-widgets' );
            get_template_part( 'template-parts/footer/copyright-footer' );
        }
    ));

    // Using default Custom Sanitization (Text + href)
    $wp_customize -> add_setting('_themename_site_info', array(
        'default' => '',
        'sanitize_callback' => '_themename_sanitize_site_info',
        'transport' => 'postMessage'
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
        'section' => '_themename_footer_option'
    ));

    // Creating Footer options
    $wp_customize -> add_setting('_themename_footer_option', array(
        'default' => 'dark',
        'transport' => 'postMessage',
        'sanitize_callback' => '_themename_sanitize_footer_option'
    ));

    $wp_customize -> add_control('_themename_footer_option', array(
        'type' => 'select',
        'label' => esc_html__( 'Footer Background Option', '_themename' ),
        'choices' => array(
            'light' => esc_html__( 'Light', '_themename' ),
            'dark' => esc_html__( 'Dark', '_themename' )
        ),
        'section' => '_themename_footer_option'
    ));

    // Creating Footer Layout
    $wp_customize -> add_setting('_themename_footer_layout', array(
        'default' => '3,3,3,3',
        'transport' => 'postMessage',
        'sanitize_callback' => 'sanitize_text_field',
        'validate_callback' => '_themename_validate_footer_layout'
    ));

    $wp_customize -> add_control('_themename_footer_layout', array(
        'type' => 'textarea',
        'label' => esc_html__( 'Footer Site Layout', '_themename' ),
        'section' => '_themename_footer_option'
    ));

    // For Color Picker
    $wp_customize -> add_section('_themename_general_option', array(
        'title' => esc_html__( 'Theme General Option', '_themename' ),
        'description' => esc_html__( 'This section is to change General Option of the website', '_themename' ),
        // Arranging the position 
        //'priority' => 40
    ));

    $wp_customize->add_setting('_themename_accent_color', array(
        'default' => '#9600AA',
        'transport' => 'postMessage',
        'sanitize_callback' => 'sanitize_hex_color'
    ));

    $wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, '_themename_accent_color', array(
        'label' => __( 'Accent Color', '_themename' ),
        'section' => '_themename_general_option'
    )));
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

// Creating Custom Sanitize option for Footer Background Option
function _themename_sanitize_footer_option($input) {
    $validOption = array('dark', 'light');
    if(in_array($input, $validOption, true)) {
        return $input;
    }
    return 'dark';
}

// Validating Footer Layout input for number only and sum not greater than 12
function _themename_validate_footer_layout($validity, $value) {
    if(!preg_match('/^([1-9]|1[012])(,([1-9]|1[012]))*$/', $value)) {
        $validity -> add('invalid_footer_layout', esc_html__( 'Please Enter a Valid Input - "3,3,3,3" or "4,4,4" or "6,6" or "12"', '_themename' ));
    }
    return $validity;
}