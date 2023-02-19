<?php
// Making a function for the post Meta
function _themename_post_Meta() {
    /*
    echo 'Posted On: ';
    echo '<a href="' . esc_url( get_permalink( ) ) . '">';
    echo '<time datetime="' . esc_attr( get_the_date('c') ) . '">';
    echo esc_html( the_date('j F, Y') );
    echo '</time>';
    echo '</a>';
    echo '| Posted By: ';
    echo '<a href="' . esc_url( get_author_posts_url(get_the_author_meta('ID') ) ) . '">' . esc_html( get_the_author( ) ) . '</a>';
    */

    /** Updated version of the above code */
    printf(
        /** translator: %s for Post Date */
        esc_html__('Posted On: %s ', '_themename'),
        '<a href="' . esc_url( get_permalink( ) ) . '"><time datetime="' . esc_attr( get_the_date('c') ) . '">' . esc_html( get_the_date('j F, Y') ) . '</time></a>'
    );

    printf(
        /** translator: %s for Post Author */
        esc_html__('| Posted By: %s', '_themename'),
        '<a href="' . esc_url( get_author_posts_url(get_the_author_meta('ID') ) ) . '">' . esc_html( get_the_author( ) ) . '</a>'
    );
}

function _themename_post_ReadMore_Link() {
    /* 
    echo '<a href="' . esc_url( get_permalink( ) ) . '" title="' . the_title_attribute(['echo' => false]) . '">';
    echo 'Read More <span class="u-screen-reader-text">Read More about ' . get_the_title() . '</span>';
    echo '</a>'; 
    */

    /** Updated version of the above code */
    echo '<a class="c-post__readmore" href="' . esc_url( get_permalink( ) ) . '" title="' . the_title_attribute(['echo' => false]) . '">';
    printf(
        wp_kses(
            /** translator: %s for Post Title */
            __('Read More <span class="u-screen-reader-text">Read More about %s</span>', '_themename'),
            [
                'span' => [
                    'class' => []
                ]
            ]
        ), get_the_title()
    );
    echo '</a>';
}

// delete a post 
function _themename_delete_post() {
    $url = add_query_arg([
        'action' => '_themename_delete_post',
        'post' => get_the_ID(),
        'nonce' => wp_create_nonce( '_themename_delete_post' . get_the_ID() )
    ], home_url());
    return "<a href='" . esc_url( $url ) . "'>" . esc_html__( 'Delete Post', '_themename' ) . "</a>";
}