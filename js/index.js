/* 导航栏特效 */
var nav = document.querySelector('#nav');
var index = 0;
for(var i = 0; i < nav.children.length; i++){
    nav.children[i].setAttribute('index',i);
    nav.children[i].onmouseover = function(){
        this.children[0].style.color = "skyblue";
        this.children[1].style.width = "80%";
    }
    nav.children[i].onmouseout = function(){
        this.children[0].style.color = "#fff";
        this.children[1].style.width = "0%";
    }
    nav.children[i].onclick = function(){
        sections[index].setAttribute('class','hide');
        links[index].style.backgroundColor = "#d9d9d9";
        index=+this.getAttribute('index');
        sections[index].setAttribute('class','show');
        links[index].style.backgroundColor = "skyblue";
        // console.log(index);
        }
}

var nextPage = document.querySelector('#nextPage');
var sections = document.querySelectorAll('section');
for(var i=0;i<sections.length;i++){
    sections[i].setAttribute("index",i);
}


/* 楼层跳跃功能 */
var pagination = document.querySelector('#pagination');
var nav = document.querySelector('#nav');
var navLinks = nav.querySelectorAll('a');
var navLinksTextArr = [];
// 获取导航，添加到分页器中
for(var i=0;i<navLinks.length;i++){
    navLinksTextArr[i]=navLinks[i].innerHTML; 
}
console.log(navLinksTextArr);
// 根据导航生成分页器
for(var i=0;i<navLinks.length;i++){
    var link = document.createElement('a');
    pagination.appendChild(link);
}
var links = pagination.children;
links[0].style.backgroundColor = "skyblue";
// 生成分页器提示文字
for(var i=0;i<navLinks.length;i++){
    var span = document.createElement('span');
    links[i].appendChild(span);
    links[i].children[0].innerHTML = navLinksTextArr[i];
}

// 设置分页器的位置
pagination.style.marginTop = -pagination.offsetHeight/2 + "px";

// 给分页器注册鼠标移入移出事件和点击事件
for(var i=0;i<links.length;i++){
    links[i].setAttribute('index',i);
    links[i].onclick = function(){
        sections[index].setAttribute('class','hide');
        links[index].style.backgroundColor = "#d9d9d9";
        index=+this.getAttribute('index');
        sections[index].setAttribute('class','show');
        links[index].style.backgroundColor = "skyblue";
        console.log(index);
    }
}

// 点击下一页功能
nextPage.onmouseover = function(){
    this.style.borderColor = 'skyblue';
}
nextPage.onmouseout = function(){
    this.style.borderColor = '#fff';
}
nextPage.onclick = function(){
    if(index == sections.length-1){
        return;
    }
    sections[index].setAttribute('class','hide');
    links[index].style.backgroundColor = "#d9d9d9";
    index++;
    sections[index].setAttribute('class','show');
    links[index].style.backgroundColor = "skyblue";
    console.log(index);
}

// 页面滚动
document.onmousewheel = function(e){
    e = e || event;
    if(e.wheelDelta < 0 ){
        if(index == sections.length-1){
            return;
        }
        sections[index].setAttribute('class','hide');
        links[index].style.backgroundColor = "#d9d9d9";
        index++;
        sections[index].setAttribute('class','show');
        links[index].style.backgroundColor = "skyblue";
        console.log(index);
    }
    if(e.wheelDelta > 0 ){
        if(index == 0){
            return;
        }
        sections[index].setAttribute('class','hide');
        links[index].style.backgroundColor = "#d9d9d9";
        index--;
        sections[index].setAttribute('class','show');
        links[index].style.backgroundColor = "skyblue";
        console.log(index);
    }
}




