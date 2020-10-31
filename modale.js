$( init );

function init() {
    
    $('.modaleOn').on('click', function(e){
                $('#modaleCredit').css('display','block').css('pointer-events','auto');
            });
    $('.modale').on('click', function(e){
                $('#modaleCredit').css('display','none').css('pointer-events','none');
                });
    
    }