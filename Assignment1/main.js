 var app = new Vue({
            el: '#app',
            data: {
                list: ["Hi"],
                inputValue:''
            },
            methods: {
                handleBtnClick: function(){        
                 this.list.push(this.inputValue);
           
                 this.inputValue='';
                
                     
                }
            }
            
        })
        
        var dom = document.getElementById('text');
        let i = 0;
        var j = 0;
         
        function doSetTimeout(i){
            setTimeout(function(){dom.innerHTML = app.$data.list[i];
                                 console.log("print");}, 100);
        }

        setInterval(function(){
            if (i > (app.$data.list.length-1)){ i = 0;};
            if (app.$data.list.length > 0){dom.innerHTML = app.$data.list[i];
            console.log(i);}
            i = i+1;
        },2000); 
        