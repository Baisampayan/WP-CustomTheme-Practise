<?php

// Footer Widget
$footer_layout = '3,3,3,3';
$footer_columns = explode(',', $footer_layout);
$footer_bg = 'dark';
// If there is any active footer widget
$is_active_footer_widget = false;
foreach ($footer_columns as $i => $footer_column) {
    if(is_active_sidebar( 'footer-widget-' . ($i+1) )) {
        $is_active_footer_widget = true;
    }
}

if($is_active_footer_widget) { ?>
    <div class="c-footer c-footer--<?php echo $footer_bg; ?>">
        <div class="o-container">
            <div class="o-row">
                <?php foreach($footer_columns as $i => $footer_column) { ?>
                    <div class="o-row__column o-row__column--span-12 o-row__column--span-<?php echo $footer_column; ?>@medium">
                        <?php
                            if(is_active_sidebar( 'footer-widget-' . ($i+1) )) {
                                dynamic_sidebar( 'footer-widget-' . ($i+1) );
                            }
                        ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
<?php } ?>