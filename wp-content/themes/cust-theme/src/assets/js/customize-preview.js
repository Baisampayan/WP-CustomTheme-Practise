import $ from 'jquery';
import strip_tags from './helpers/strip-tags';

// console.log(wp);
wp.customize('_themename_site_info', (value) => {
    value.bind((to) => {
        // console.log(to);
        $('.c-site-info__text').html(strip_tags(to, '<a>'));
    })
}) 