/**
 * Created by HanJingYi on 2017/6/18.
 */
(function(){//������������
    var oSmallPic = document.getElementById("small-pic");
    var aSmallImgs = oSmallPic.getElementsByTagName("img");
    var oBigPic = document.getElementById("big-pic");
    var oBigImg = oBigPic.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowIndex = 0;
    for(var i=0; i<aSmallImgs.length; i++){
        aSmallImgs[i].index = i;//�Զ�������
        aSmallImgs[i].onclick = function(){
            nowIndex = this.index;
            changeImg();
        };
    }
    oLeft.onclick = oRight.onclick = function(){
        if(this === oRight){
            nowIndex++;//0 1 2 3
            if(nowIndex == aSmallImgs.length){
                nowIndex = 0;
            }
        }else{
            nowIndex--;
            if(nowIndex == -1){
                nowIndex = aSmallImgs.length - 1;
            }
        }
        changeImg();
    };

    function changeImg(){
        oBigImg.src = aSmallImgs[nowIndex].src;
        for(var i=0; i<aSmallImgs.length; i++){
            aSmallImgs[i].className = "";
        }
        aSmallImgs[nowIndex].className = "selected";
        //СͼƬ�ƶ�
        var left = 0;
        if(nowIndex == 0){
            //oSmallPic.style.left = 0;
            left = 0;
            //animate(oSmallPic, {
            //    left: 0
            //});
        }else{
            //oSmallPic.style.left = -(aSmallImgs[0].offsetWidth + 10) + "px";
            left = 1;
            /*animate(oSmallPic, {
             left: -(aSmallImgs[0].offsetWidth + 10)
             });*/
        }
        animate(oSmallPic, {
            left: -(aSmallImgs[0].offsetWidth + 10) * left
        });
    }

    /*
     * СͼƬ�ƶ�����:
     * �±�     �ƶ�����
     *   0       0
     *   1       1*width
     *   2       1*width
     *   3       1*width
     *
     *
     * */



})();

