<?php if(have_posts( )) { 
    while(have_posts( )) { 
        the_post( ); ?>
        <?php get_template_part( 'template-parts/post/content' ); ?>
    <?php
    }
    /** Putting Pagination */
    the_posts_pagination( );
    do_action( '_themename_after_pagination' );
} else { ?>
<!-- <p>Sorry, no post available!!!</p> -->

<?php 
    get_template_part( 'template-parts/post/content-none' );
} ?>