$(function(){
    // 0、监听输入框实时的动态输入，但是给输入框使用change响应事件的时候需要失去焦点的时候才可以
    // 这样我们就需要事件委托，
    $("body").delegate(".comment","propertychange input",function(){
        // console.log($(this).val());
        // 判断是否输入了内容
        if($(this).val().length > 0){
            $(".send").prop("disabled",false);
        }else{
            $(".send").prop("disabled",true);
        }
    });
    // 1、监听发布按钮的点击事件
    $(".send").click(function(){
        // 拿到用户输入的内容
        var $text = $(".comment").val();
        // 根据输入的内容创建节点
        var $weibo = createEle($text);
        // 插入节点
        $(".messageList").prepend($weibo);
    });

    // 2、监听顶点击
    $("body").delegate(".infoTop","click",function(){
        // alert("我点赞了")
        $(this).text(parseInt($(this).text()) + 1);
    });
    // 3、监听踩点击
    $("body").delegate(".infoDown","click",function(){
        // alert("我踩你")
        $(this).text(parseInt($(this).text()) + 1);
    });
    // 4、监听删除点击
    $("body").delegate(".infoDel","click",function(){
        // alert("我删除")
        $(this).parents(".info").remove();
    });


    // 创建节点方法
    function createEle(text){
        var $weibo = $("<div class=\"info\">"+
                            "<p class=\"infoText\">" + text +"</p>"+
                            "<p class=\"infoOperation\">"+
                            " <span class=\"infoTime\">" + formartDate() + "</span>"+
                                "<span class=\"infoHandle\">"+
                                "<a href=\"javascript:;\" class = \"infoTop\">0</a>"+
                                "<a href=\"javascript:;\" class = \"infoDown\">0</a>"+
                                "<a href=\"javascript:;\" class = \"infoDel\">删除</a>"+
                                "</span>"+
                            "</p>"+
                        "</div>");
        return $weibo;
    }


    // 生成时间的方法
    function formartDate(){
        // 2018-4-3 21:30:23
        var date = new Date(); // new 一个时间对象
        var arr = [date.getFullYear() + "-",
                date.getMonth() + "-",
                date.getDate() + " ",
                date.getHours() + ":",
                date.getMinutes() + ":",
                date.getSeconds()];
        // console.log(arr.join(""));
        return arr.join(""); // 将数组按照join的参数连接起来
    }
    // formartDate();
});