var nav = document.querySelectorAll('#home>.head>.right>.item');
var pages = document.querySelectorAll('section');
var pagination = document.querySelector('#pagination');
var paginationItems = document.querySelectorAll('#pagination>div');
var activeIndex = 0;

init();

function init(){
    paginationItems[activeIndex].classList.add('active');
    pages[activeIndex].classList.add('active');
    if(activeIndex == 0) {
        pagination.style.display = 'none';
    } else {
        pagination.style.display = 'flex';
    }
}

function restStyle(index, oldIndex){
    activeIndex = index;
    pages[activeIndex].classList.add('active');
    pages[oldIndex].classList.remove('active');
    paginationItems[activeIndex].classList.add('active');
    paginationItems[oldIndex].classList.remove('active');
    if(activeIndex == 0) {
        pagination.style.display = 'none';
    } else {
        console.log(123)
        pagination.style.display = 'flex';
    }
}
// 首页导航栏绑定点击事件
Array.prototype.slice.call(nav,0).forEach(function(item, index){
    item.addEventListener('click', function(){
        if(index == activeIndex) return;
        restStyle(index, activeIndex);
    });
});
// 侧边栏分页器绑定点击事件
Array.prototype.slice.call(paginationItems,0).forEach(function(item, index){
    item.addEventListener('click', function(){
        if(index == activeIndex) return;
        restStyle(index, activeIndex);
    });
});


// 页面滚动
document.onmousewheel = function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e.wheelDelta < 0 ){
        if(activeIndex == pages.length-1) return;
        restStyle(activeIndex + 1, activeIndex);
    }
    if(e.wheelDelta > 0 ){
        if(activeIndex == 0) return;
        restStyle(activeIndex - 1, activeIndex);
    }
}
// 方向按键事件
document.onkeydown = function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];

    //上,左
    if(e && e.keyCode==38 || e && e.keyCode==37){
        if(activeIndex == 0) return;
        restStyle(activeIndex - 1, activeIndex);
    }
    //下,右
    if(e && e.keyCode==40 || e && e.keyCode==39){
        if(activeIndex == pages.length-1) return;
        restStyle(activeIndex + 1, activeIndex);
    }
}; 
