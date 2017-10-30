import '../css/normalize.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'Swiper/dist/css/swiper.css';
import  Swiper from 'Swiper/dist/js/swiper.js';

import '../css/index.css';
import './picturefill.js';
// banner轮播
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    pagination:'.swiper-pagination',
    paginationClickable:true,
    speed:1000,
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
})       



