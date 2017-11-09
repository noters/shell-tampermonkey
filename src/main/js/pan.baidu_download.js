// ==UserScript==
// @name         百度网盘
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pan.baidu.com/*
// @grant        none
// ==/UserScript==

//Object.defineProperty(Object.getPrototypeOf(navigator),'platform',{get:function(){return '';}})
Object.defineProperty(this,'navigator',{value:{platform:""}});

(function() {
    'use strict';

    // Your code here...
})();