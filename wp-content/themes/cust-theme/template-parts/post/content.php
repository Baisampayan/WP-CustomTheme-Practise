<article <?php post_class('c-post u-margin-bottom-20'); ?> >
    <h2 class="c-post__title">
        <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute( ); ?>">
            <?php the_title( ); ?>
        </a>
    </h2>
    <div class="c-post__meta">
        <!-- Getting the code as php function from lib/helpers.php-->
        <?php _themename_post_Meta(); ?>
    </div>
    <div class="c-post__excerpt">
        <?php the_excerpt(); ?>
    </div>
    <?php _themename_post_ReadMore_Link();?>
    <?php echo _themename_delete_post(); ?>
</article>