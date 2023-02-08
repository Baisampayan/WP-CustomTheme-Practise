<?php
$accent_color = sanitize_hex_color(get_theme_mod( '_themename_accent_color', '#9600AA' ));
$inline_dynamic_color_picker = "
    a, a:active, .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover, .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover {
        color: {$accent_color};
    }

    .c-post.sticky {
        border-left: {$accent_color};
    }

    .c-post.format-quote blockquote, .c-post.format-link .c-post__excerpt p, button, input[type=submit], .c-footer-widget .tagcloud a, .navigation.pagination .nav-links a:hover {
        background-color: {$accent_color};
    }

    :focus {
        outline-color: {$accent_color};
    }

    ::selection, ::-moz-selection {
        background: {$accent_color} !important;
    }

    .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a  {
        background-color: {$accent_color} !important;
    }
";