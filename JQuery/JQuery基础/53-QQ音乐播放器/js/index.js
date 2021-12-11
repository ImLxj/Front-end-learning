$(function () { 
    // 1、自定义滚动条
    $(".content_list").mCustomScrollbar();

    var $audio = $("audio");
    // 4、加载歌曲列表
    function getPlayerList() { 
        $.ajax({
            url: "./source/musiclist.json",
            dataType: "json",
            success: function (data) {
                var $musiclist = $(".content_list ul");
                $.each(data,function (index,ele) { 
                    
                    var $item = createMusicItem(index,ele);
                    
                    $musiclist.append($item);
                });
            },
            error: function(e){
                console.log(e);
            }
        });
    }
    // 初始化事件监听
    initEvents();
    function initEvents(){
        // 2、监听歌曲的移入移出事件
        $(".content_list").delegate(".list_music","mouseenter",function () { 
            // over
            // 显示子菜单
            $(this).find(".list_menu").stop().fadeIn(200);
            // 隐藏时长
            $(this).find(".list_time>span").stop().fadeOut(100);
            // 显示删除icon
            $(this).find(".list_time>a").stop().fadeIn(300);
        });
        $(".content_list").delegate(".list_music","mouseleave",function () { 
            // out
            // 隐藏子菜单
            $(this).find(".list_menu").stop().fadeOut(200);
            // 显示时长
            $(this).find(".list_time>span").stop().fadeIn(300);
            // 隐藏删除icon
            $(this).find(".list_time>a").stop().fadeOut(100);
        });
        // 3、监听复选框的点击事件
        $(".content_list").delegate(".list_check","click",function () { 
            $(this).toggleClass("list_checked");
        });

        // 添加子菜单播放按钮的监听
        var $musicPlay = $(".music_play");
        $(".content_list").delegate(".list_menu_play","click",function () { 
            var $items = $(this).parents(".list_music");

            $(this).toggleClass("list_menu_play2");
            // 复原其他的播放图标
            $items.siblings().find(".list_menu_play").removeClass("list_menu_play2");
            // 同步底部的播放按钮
            if($(this).attr("class").indexOf("list_menu_play2") != -1){
                // 当前子菜单的播放按钮是播放状态
                $musicPlay.addClass("music_play2");
                // 让文字高亮
                $items.find("div").css("color","#fff");
                // 排除其他的文字高亮
                $items.siblings().find("div").css("color","rgba(255, 255, 255, 0.5)")
            }else{
                // 当前子菜单的播放按钮bu 是播放状态
                $musicPlay.removeClass("music_play2");
                // 取消文字高亮
                $items.find("div").css("color","rgba(255, 255, 255, 0.5)");
            }
            // 显示音乐播放动画
            $items.find(".list_number").toggleClass("list_number2");
            // 排除其他的没点击的音乐播放动画
            $items.siblings().find(".list_number").removeClass("list_number2");
        });
    }


    
    // 定义一个方法穿件一条音乐
    function createMusicItem(index,music) { 
        var $item = ("<li class=\"list_music\">" + 
                    "<div class=\"list_check\"><i></i></div>" +
                    "<div class=\"list_number\">" +(index + 1)+ "</div>" + 
                    "<div class=\"list_name\">" + music.name +
                        "<div class=\"list_menu\">" + 
                            "<a href=\"javascript:;\" title=\"播放\" class=\"list_menu_play\"></a>" +
                            "<a href=\"javascript:;\" title=\"添加\"></a>" +
                            "<a href=\"javascript:;\" title=\"下载\"></a>" +
                            "<a href=\"javascript:;\" title=\"分享\"></a>" +
                        "</div>" +
                    "</div>" +
                    "<div class=\"list_singer\">" + music.singer + "</div>" +
                    "<div class=\"list_time\">" +
                        "<span>" + music.time + "</span>" +
                        "<a href=\"javascript:;\" title=\"删除\"></a>" +
                    "</div>" +
                    "</li>");
        return $item;
    }
    getPlayerList();
});