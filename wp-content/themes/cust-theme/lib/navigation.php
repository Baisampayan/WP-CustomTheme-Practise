<?php

// Registering menus
function _themename_register_menus() {
    register_nav_menus( array(
        'main_menu' => esc_html__('Main Header Menu', '_themename'),
        'footer_menu' => esc_html__('Footer Menu', '_themename')
    ) );
}
add_action( 'init', '_themename_register_menus' );

function _themename_submenu_button($dir, $title) {
    $button = '<button class="menu-button">';
    $button .= '<span class="u-screen-reader-text menu-button-show">' . sprintf(esc_html__( 'Expand %s submenu', '_themename' ), $title) . '</span>';
    $button .= '<span aria-hidden="true" class="u-screen-reader-text menu-button-hide">' . sprintf(esc_html__( 'Collapse %s submenu', '_themename' ), $title) . '</span>';
    $button .= '<i class="fas fa-angle-' . $dir . '" aria-hidden="true"></i>';
    $button .= '</button>';
    return $button;
}

// Adding the icon for the child menu 
function _themename_dropdown_icon($title, $item, $args, $depth) {
    if($args->theme_location == 'main_menu') {
        if(in_array('menu-item-has-children', $item->classes)) {
            if($depth == 0) {
                // $title .= '<i class="fas fa-angle-down" aria-hidden="true"></i>';
                $title .= _themename_submenu_button('down', $title);
            } else {
                // $title .= '<i class="fas fa-angle-right" aria-hidden="true"></i>';
                $title .= _themename_submenu_button('right', $title);
            }
        }
    }
    return $title;
}
add_filter( 'nav_menu_item_title', '_themename_dropdown_icon', 10, 4 );

// For accessing the menu from keyboard
function _themename_aria_hasdropdown($att, $item, $args) {
    if($args->theme_location == 'main_menu') {
        if(in_array('menu-item-has-children', $item->classes)) {
            $att['aria-haspopup'] = 'true';
            $att['aria-expanded'] = 'false';
        }
    }
    return $att;
}
add_filter( 'nav_menu_link_attributes', '_themename_aria_hasdropdown', 10, 3 );