// ==UserScript==
// @name         闲鱼搜索框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://2.taobao.com/*
// @match        https://s.2.taobao.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

var divId = "J_IdleHeader";

/*<div class="idle-search">
  <form method="get" action="//s.2.taobao.com/list/list.htm" name="search" target="_top">
    <input class="input-search" id="J_HeaderSearchQuery" name="q" type="text" value="" placeholder="搜闲鱼" />
    <input type="hidden" name="search_type" value="item" autocomplete="off" />
    <input type="hidden" name="app" value="shopsearch" autocomplete="off" />
    <button class="btn-search" type="submit"><i class="iconfont">&#xe602;</i><span class="search-img"></span></button>
  </form>
</div>*/

(function() {
    'use strict';

    var div = $("#" + divId);
    var divSearch = $('<div class="idle-search"></div>');
    var formObject = $('<form method="get" action="//s.2.taobao.com/list/list.htm" name="search" target="_top"></form>');
    var inputSearch = $('<input class="input-search" id="J_HeaderSearchQuery" name="q" type="text" value="" placeholder="搜闲鱼" />');
    var inputSearchType = $('<input type="hidden" name="search_type" value="item" autocomplete="off" />');
    var inputSearchApp = $('<input type="hidden" name="app" value="shopsearch" autocomplete="off" />');
    var button = $('<button class="btn-search" type="submit"></button>');
    var iconFont = $('<i class="iconfont">&#xe602;</i>');
    var span = $('<span class="search-img"></span>');

    $(button).append($(iconFont));
    $(button).append($(span));
    $(formObject).append($(inputSearch));
    $(formObject).append($(inputSearchType));
    $(formObject).append($(inputSearchApp));
    $(formObject).append($(button));
    $(divSearch).append($(formObject));
    $(div).append($(divSearch));
})();