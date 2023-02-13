import $ from 'jquery';
import strip_tags from './helpers/strip-tags';

// console.log(wp);
wp.customize('_themename_site_info', (value) => {
    value.bind((to) => {
        // console.log(to);
        $('.c-site-info__text').html(strip_tags(to, '<a>'));
    })
})

wp.customize('_themename_accent_color', (value) => {
    value.bind((to) => {
        let inline_css = ``;
        let inline_css_obj = _themename['inline-css'];
        for(let selectors in inline_css) {
            inline_css += `${selectors} {`;
                for(let properties in inline_css_obj[selectors]) {
                    let value = inline_css_obj[selectors][properties]; 
                    inline_css += `${properties}: ${wp.customize(value).get()}`
                }
            inline_css += `}`;
        }
        $('#_themename-stylesheet-inline-css').html(
            
        );
    })
})