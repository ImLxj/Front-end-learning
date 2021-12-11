$(function () { 
    // 1、监听游戏规则的点击
    $(".footer").click(function(){
        $(".rule").stop().fadeIn(100);
    });
    // 2、监听关闭按钮的点击
    $(".rule>a").click(function () { 
        $(".rule").stop().fadeOut(100);
    });
    // 3、监听开始按钮的点击
    $(".start").click(function () { 
       $(this).stop().fadeOut();
        // 调用处理进度条的方法
        progressHandler();
        // 调用处理灰太狼动画的方法
        wolfAnimation();
    });
    // 4、监听重新开始按钮的点击
    $(".reStart").click(function () { 
        $(".mask").stop().fadeOut(100);
        progressHandler();
        // 处理灰太狼动画的方法
        wolfAnimation();
    });

    // 定义一个专门处理进度条的方法
    function progressHandler(){
        // 重新设置进度条宽度
        $(".progress").css({
            width : 180
        });
        var timer = setInterval(function () { 
            // 拿到进度条当前的宽度
            var progressWidth = $(".progress").width();
            // 减少当前的宽度
            progressWidth -= 5;
            // 重新给进度条复制宽度
            $(".progress").css({
                width : progressWidth
            });
            // 监听进度条是否走完
            if(progressWidth <= 0){
                // 关闭定时器
                clearInterval(timer);
                // 显示重新开始界面
                $(".mask").stop().fadeIn();
                stopWolfAnimation();
            }
        },1000);
    }
    var wolfTimer;
    var wolfIndex;
    var wolfIndexEnd;
    // 定义一个专门处理灰太狼的方法
    function wolfAnimation() { 
        // 将灰太狼和小灰灰的图片放到一个数组里面
        var wolf_1 = ['./imgers/h0.png','./imgers/h1.png','./imgers/h2.png',
        './imgers/h3.png','./imgers/h4.png','./imgers/h5.png','./imgers/h6.png',
        './imgers/h7.png','./imgers/h8.png','./imgers/h9.png'];
        var wolf_2 = ['./imgers/x0.png','./imgers/x1.png','./imgers/x2.png',
        './imgers/x3.png','./imgers/x4.png','./imgers/x5.png','./imgers/x6.png',
        './imgers/x7.png','./imgers/x8.png','./imgers/x9.png'];
        // 定义一个数组保存所有可能出现是位置
        var arrPos = [
            {left:"100px",top:"115px"},
            {left:"20px",top:"160px"},
            {left:"190px",top:"142px"},
            {left:"105px",top:"193px"},
            {left:"19px",top:"221px"},
            {left:"202px",top:"212px"},
            {left:"120px",top:"275px"},
            {left:"30px",top:"295px"},
            {left:"209px",top:"297px"},
        ];
        // 创建一个图片
        var $wolfImage = $("<img src='' class = \"wolfImage\">");
        // 随机获取图面的位置
        var posIndex = Math.round(Math.random() * 8);
        // 设置图片显示的位置
        $wolfImage.css({
            position : "absolute",
            left : arrPos[posIndex].left,
            top : arrPos[posIndex].top
        });
        // 随机获取数组类型
        var wolfType = Math.round(Math.random()) == 0 ? wolf_1 : wolf_2;
        // 设置图片的内容
        wolfIndex = 0;
        wolfIndexEnd = 5;
        wolfTimer = setInterval(function () { 
            if(wolfIndex >= wolfIndexEnd){
                $wolfImage.remove();
                clearInterval(wolfTimer);
                wolfAnimation();
            }
            $wolfImage.attr("src",wolfType[wolfIndex]);
            wolfIndex ++; 
        },200);
        // 将图片添加到界面上
        $(".container").append($wolfImage);

        // 调用处理游戏规则的方法
        ganeRules($wolfImage);
    }

    function ganeRules($wolfImage) { 
        $wolfImage.one("click",function () { 
            wolfIndex = 5;
            wolfIndexEnd = 9;
            // 拿到当前点击图片的地址
            var $src = $(this).attr("src");
            var flag = $src.indexOf("h");
            if(flag >= 0){
                $(".score").text(parseInt($(".score").text()) + 10);
            }else{
                $(".score").text(parseInt($(".score").text()) - 10);
            }
        });
    }

    // 游戏结束关闭灰太狼动画
    function stopWolfAnimation() { 
        $(".wolfImage").remove();
        clearInterval(wolfTimer);
    }

});