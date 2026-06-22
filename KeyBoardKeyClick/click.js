 const insert=document.getElementById('inner_box');
        window.addEventListener('keydown', function(e){
            insert.innerHTML=`
            <div class="run_time">
                <table border="1">
                    <tr>
                        <th>Key</th>
                        <th>KeyCode</th>
                        <th>Code</th>
                    </tr>
                    <tr>
                        <th>${e.key===' ' ? 'Space' : e.key}</th>
                        <th>${e.keyCode}</th>
                        <th>${e.code}</th>
                    </tr>
                    
                    </table>
                </div>
         `   
        })