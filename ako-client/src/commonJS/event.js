const event = {
    dragX : function(target, ...callback){
        let startPoint = 0;
        let endPoint = 0;
        

        // 마우스 드래그
        target.addEventListener('mousedown', (e)=>{
            startPoint = e.pageX;
        });

        target.addEventListener('mouseup', (e)=>{
            endPoint = e.pageX;

            if (endPoint < startPoint){
                // (<--) 왼쪽 밀기
                callback[0]();
            } else if(endPoint > startPoint){
                // (-->) 오른쪽 밀기
                callback[1]();
            }

        });

        // 모바일 터치 드래그
        target.addEventListener('touchstart', (e)=>{
            // e.touches[0].pageX
            startPoint = e.touches[0].pageX;
        });

        target.addEventListener('touchend', (e)=>{
            // e.changedTouches[0].pageX
            endPoint = e.changedTouches[0].pageX;

            if (endPoint < startPoint){
                // (<--) 왼쪽 밀기
                callback[0]();
            } else if(endPoint > startPoint){
                // (-->) 오른쪽 밀기
                callback[1]();
            }
        });
    }
}

module.exports = event;