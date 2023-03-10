<?php
$footer_bg = get_theme_mod( '_themename_footer_option', 'dark ' ) ;
$site_info = get_theme_mod( '_themename_site_info', '' );

?>
<?php if($site_info) { ?>
<div class="c-site-info c-site-info--<?php echo _themename_sanitize_footer_option( $footer_bg ); ?>">
    <div class="o-container">
        <div class="o-row">
            <div class="o-row__column o-row__column--span-12 c-site-info__text">
                <?php 
                    $allowed = array('a' => array(
                        'href' => array(),
                        'title' => array(),
                        'style' => array()
                    ));
                    echo wp_kses( $site_info, $allowed ); 
                ?>
            </div>
        </div>
    </div>
</div>
<?php } ?>