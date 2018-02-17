'use strict';

/* DOM */

var dom = function() {
    return{
        id: (id) => document.getElementById(id)
        ,class: (cl) => document.getElementsByClassName(cl)[0]
        ,classes: (cls) => document.getElementsByClassName(cls)
        ,q: (selector) => document.querySelector(selector)
        ,create:  (tag) => document.createElement(tag)
        ,add: (parent, child) => parent.appendChild(child)
    }
}();


window.onload = function () {

    var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementsByClassName('menu')[0],
        'side': 'right'
    });

    /* Menu */
    var boolMenu = 0;

    var btnMenu = dom.class('btn-menu');
    btnMenu.addEventListener( 'click', iconMenu );

    function iconMenu(){
        var btnImg = dom.class('menusub');
        if(boolMenu % 2 == 0){
            btnImg.classList.add('close');
        }
        if(boolMenu % 2 == 1){
            btnImg.className = 'menusub';
        }
        boolMenu++;
    }

    dom.id('main').addEventListener('touchend', () => {
        if(dom.class('slideout-open')!=null){
            iconMenu();
        }
    });

    //console.log(slideout.isOpen());

    for(var i = 0; i < 4; i++){
        var ptr = dom.classes('text-menu')[i];
        ptr.addEventListener( 'click', iconMenu )
        ptr.addEventListener('click', function () {
            slideout.toggle();
        });
    }

    dom.class('js-slideout-toggle').addEventListener('click', function () {
        slideout.toggle();
    });


    /* Questions */

    var btnStart = dom.class('try');
    btnStart.addEventListener('click', start );

    function start() {
        var textAboveButton = dom.id('txttt');
        textAboveButton.classList.add('disappear-txttt');

        var blankForm = dom.class('blnk');
        blankForm.classList.add('disappear-blank');

        var fourthSection = dom.class('section-four');
        fourthSection.classList.add('recolor-section');
        
        setTimeout(function() {
            var startt = dom.id('txttt');
            startt.style.display = "none";
            var bg = dom.class('section-four');
            bg.style.background = "#012535";
            var ques = dom.id('questions');
            ques.style.display = "block"; 
        }, 300)
    }

    var ans = dom.classes( 'ans' );
    for(var i = 0; i < ans.length; i++)
    {
        ans[i].addEventListener( 'click', questions );
        ans[i].addEventListener( 'click', radioChecked );
    }

    var rad = dom.classes( 'radio-ans' );
    for(var i = 0; i < rad.length; i++)
    {
        rad[i].addEventListener( 'click', questions );
    }

    function radioChecked(){
        dom.id( 'radio-' + this.id + '' ).checked = true;
    }

    /*

    function slide() {
        var prev = dom.class('prev');
        prev.classList.add('disappear-prev');

        var curr = dom.class('current');
        curr.classList.add('slide-up');

        for(let i = 0; i <= curr.children.length; i += 2) {
            curr.children[i].classList.add('recolor-prev');
        }

        setTimeout(function() {
            var prev = dom.class('prev');
            prev.parentNode.removeChild(prev);// prev del

            var newClass = dom.class('new');
            newClass.className = "current";// new del / curr add
            newClass.classList.add('appear-new');
            //newClass.classList.add('slide-up');


            var curr = dom.class('current');
            

            var newDiv = dom.create('div');
            newDiv.className = 'new';
            curr.parentNode.appendChild(newDiv);// new add
        



            
            curr.className = "prev";// curr del / prev add
            curr.classList.add('slide-current');
            for(let i = 0; i <= curr.children.length; i += 2) {
                if(i != 0){
                    curr.children[i].classList.add('transform-width');
                }
            }
        }, 400)
    }
    */

    var questArr = [];
    questArr[0] = dom.class('ask1');
    questArr[1] = dom.class('ask2');
    questArr[2] = dom.class('ask3');


    /********** NEW FUNCTION **********/

    var staticCounter = 0;
/*
    function questions(count){
        // var prev = dom.class('prev');
        // //prev.classList.add('disappear-prev');

        // var curr = dom.class('current');
        // //curr.classList.add('slide-up');

        /* TODO
        1) из прев переносим в делетед (удаляем)
        2) из курр переносим в прев (переставляем)
        3) добавляем новый курр (создаем)
        4) курр ставим на место (ставим)
        */
/*
        setTimeout(function() {

            var prev = dom.class('prev');
            var curr = dom.class('current');

            // удаляем предыдущий вопрос из бланка
            prev.classList.add('displ-none');
            prev.parentNode.removeChild(prev);

            // переставляем классы так, чтобы текущий вопрос стал предыдущим
            // curr.classList.remove('current');
            // curr.classList.add('prev');
            curr.className = 'prev';

            // достаем новый див из ???
            var newDiv = questArr[staticCounter]; // var newDiv = questArr[i];
            // присваиваем текущий класс для нового вопроса
            newDiv.className = 'current';
            
            // // и ставим его рядом с предыдущим
            // curr.parentNode.appendChild(newDiv);

            staticCounter++;
        }, 0)
    }
    */
   function questions(count){
        /* TODO
        1) из прев переносим в делетед (удаляем)
        2) из курр переносим в прев (переставляем)
        3) добавляем новый курр (создаем)
        4) курр ставим на место (ставим)
        */
       var prev = dom.class('prev');
       var curr = dom.class('current');

       //prev переносим в deleted для анимации смахивания
       prev.className = 'deleted';
       var del = dom.class('deleted');
       del.classList.add('deleted-dissappear');
       //curr переносим в prev для анимации поднятия в левый верхний угол
       curr.className = 'prev';
       var prev = dom.class('prev');
       prev.classList.add('prev-up');

        // достаем новый див из ???
        var newDiv = questArr[staticCounter]; // var newDiv = questArr[i];
        // присваиваем текущий класс для нового вопроса
        newDiv.className = 'current';

        setTimeout(function() {


            var del = dom.class('deleted');
            del.parentNode.removeChild(del);
            staticCounter++;
        }, 600)
    }

};