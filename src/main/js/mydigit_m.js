// ==UserScript==
// @name         mydigit的m币
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://bbs.mydigit.cn/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

var urlHead = "http://bbs.mydigit.cn/";
var junkLink = "thread.php?fid=73";
var signInLink = "u.php";
var tableId = "threadlist";
var nameId = "readlink";
var classId = "s2";
var textValue = "[回帖奖励0]";

function signIn() {
    var nowLink = window.location.href;
    window.location.href = urlHead + signInLink;

}

function goJunk() {
    window.location.href = urlHead + home;
}

// 获取所有有效的标题及链接
function getInfoList() {
    var result = [];
    $("#" + tableId).find("tr").each(function(){
        var info = {"title" : "", "href" : "", "text" : ""};
        var a;
        var span;
        var tdList = $(this).children();
        var td = tdList.eq(1); //第二个单元格
        var list = $(td).children();
        // 查找所有a元素，且name是readlink的
        $(list).each(function(index, element){
            var name = $(element).attr("name");
            if (nameId == name) {
                a = element;
            }
            // 最后一个class是s2的span
            if ($(element).hasClass(classId)) {
                span = element;
            }
        });
        if (a) {
            var font = getEndChild(a);
            var title = $(font).html();
            var href = $(a).attr("href");
            var text = $(span).html();
            if (text.length > 0 && textValue != text) {
                info.title = title;
                info.href = href;
                info.text = text;
                result.push(info);
            }
        }
    });
    return result;
}

// 获取最终子元素
function getEndChild(element) {
    var result = element;
    if ($(element).children().length > 0) {
        result = getEndChild($(element).children().first());
    }
    return result;
}

(function() {
    'use strict';

    // Your code here...
    var result = getInfoList();
    for (var i = 0; i < result.length; i ++) {
        console.log(result[i].title + " " + result[i].href + " " + result[i].text);
    }
})();