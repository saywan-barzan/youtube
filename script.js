

document.getElementById('on').addEventListener('click',function(){
    if(document.getElementById('menu').style.display=='block')
        {

        document.getElementById('menu').style.display='none'
        document.querySelector('main').style.width='100%';
        document.querySelector('main').style.marginLeft='0';

        }else{
            document.getElementById('menu').style.display='block';
            document.querySelector('main').style.width='80%';
            document.querySelector('main').style.marginLeft='20%';

  
        }
});




