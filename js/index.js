/**
 * Created by Administrator on 2018/9/16.
 */
//bg图切换
!function(){
    let oBg = document.querySelector('.position-bg'),
        aImg = document.querySelectorAll('.position-bg > img');
    let i=0;
    aImg[0].style.opacity = 1;
    window.setInterval(run,4500);
    function run(){
        i++
        if(i==2){
            i=0;
        }
        for(let j=0;j<aImg.length;j++){
            aImg[j].style.opacity = 0;
        }
        aImg[i].style.opacity = 1;


    }

}();

//轮播图
!function(){
    let banner = document.querySelector('.pic'),
        aImg = document.querySelectorAll('.pic > img'),
        oImgBox = document.querySelector('.pic'),
        aSpan = document.querySelectorAll('.p-btn > span');
    leftRightBanner(banner,aImg,oImgBox,aSpan,'orange')
    function leftRightBanner(banner,aImg,oImgBox,aSpan,hot){
        let index = 0,
            now = 0,
            next = 0,
            t;
        //初始化图片和轮播点
        aSpan[0].classList.add(hot);
        aImg[0].classList.add(hot);
        //移入轮播点时的操作
        for(let i = 0;i<aSpan.length;i++){

            aSpan[i].onmouseover = function(){
                for(let i=0;i<aSpan.length;i++){
                    for(let j=0;j<aSpan.length;j++){
                        // aImg[j].classList.remove('hot');
                        aSpan[j].classList.remove('hot');
                    }
                    // aImg[i].classList.add('hot');
                    aSpan[i].classList.add('hot');
                }
                // oImgBox.style.left =- index * aImg[0].offsetWidth + 'px';
            }
        }
        //定时器
        t = setInterval(move,2000);
        //定时器函数与右边点击时执行的函数
        function move(){
            next++;
            if(next == aImg.length){
                next = 0;
            }
            aImg[now].style.left = 0;
            aImg[next].style.left = aImg[0].offsetWidth + 'px';
            animate(aImg[now],{left:-aImg[0].offsetWidth},function(){
                for(let i=0;i<aImg.length;i++){
                    aSpan[i].classList.remove(hot);
                }
            });
            animate(aImg[next],{left:0},function(){
                aSpan[next].classList.add(hot);
            });
            now = next;
        }
        //左点击时执行的函数
        function moveLeft(){
            next--;
            if(next < 0){
                next = aImg.length-1;
            }

            aImg[now].style.left = 0;
            aImg[next].style.left = -aImg[0].offsetWidth + 'px';
            animate(aImg[now],{left:aImg[0].offsetWidth},function(){
                for(let i=0;i<aImg.length;i++){
                    aSpan[i].classList.remove(hot);
                }
            });
            animate(aImg[next],{left:0},function(){
                aSpan[next].classList.add(hot);
            });

            now = next;
        }
        //右点击
        // oNext.onclick = function(){
        //     move();
        // }
        // //左点击
        // oPrev.onclick = function(){
        //     moveLeft();
        // }
        //移入 清除定时器
        banner.onmouseover = function(){
            clearInterval(t)
        }
        //移出 开启定时器
        banner.onmouseout = function(){
            t = setInterval(move,2000);
        }

    }
}()
