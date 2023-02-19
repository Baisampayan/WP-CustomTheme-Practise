<?php

require_once('lib/helpers.php');
require_once('lib/assets.php');
require_once('lib/customize.php');
require_once('lib/sidebars.php');
require_once('lib/navigation.php');
require_once('lib/theme-support.php');

// Function for deleting the post from front-end
function _themename_handle_delete_post() {
    if(isset($_GET['action']) && $_GET['action'] === '_themename_delete_post') {
        if(!isset($_GET('nonce')) || !wp_verify_nonce( $_GET('nonce'), '_themename_delete_post' . $_GET['post'] ) ) {
            return;
        }
        $post_id = isset($_GET['post']) ? $_GET['post'] : null;
        $post = get_post( (int) $post_id );
        if(empty($post)) {
            return;
        }
        if(!current_user_can( 'delete_post', $post_id )) {
            return;
        }
        wp_trash_post( $post_id );
        wp_safe_redirect( home_url( ) );
        die();
    }
}
add_action( 'init', '_themename_handle_delete_post' );

// function after_pagination() {
//     echo "This is after pagination";
// }

// function after_pagination2() {
//     echo "This is after pagination Text";
// }

// add_action( '_themename_after_pagination', 'after_pagination', 2 );
// add_action( '_themename_after_pagination', 'after_pagination2', 1 );

// Adding Code to WordPress Default Hooks & Action
//add_action( 'wp_head', 'function_to_add_in_wp_head' );

// function function_to_add_in_wp_head() {
//     echo "<style>body{background-color: #fff !important;}</style>";
// }