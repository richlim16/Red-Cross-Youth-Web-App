$(document).ready(function(){
    $('#addTraining').on('click', function(){
        $( "#training" ).clone().appendTo( "#trainingsList" ); 
    });

    $('#addOrg').on('click', function(){
        $( "#organization" ).clone().appendTo( "#organizations" ); 
    });

    $('#addCommittee').on('click', function(){
        $( "#committee" ).clone().appendTo( "#committeesList" ); 
    });
})