 const upperBox = document.getElementById('upper_box');
        const btns = document.querySelectorAll('.box, .equal_box, #ac');
        let display_expression = "";
        btns.forEach(btn =>{
            btn.addEventListener('click', function(){
                const value = this.innerText;
                if(value === '='){
                    try{
                        display_expression = eval(display_expression);
                        upperBox.innerText=display_expression;

                    }
                    catch(error){
                        upperBox.innerText= "Error";
                        display_expression="";
                    }
                }
                else if(value === 'AC'){
                    display_expression = "";
                    upperBox.innerText=0;
                }
                else{
                    display_expression += value;
                    upperBox.innerText=display_expression;
                }
            })
        })