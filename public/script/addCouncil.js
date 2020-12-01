$(document).ready(function(){
    $('#addForm').on('submit', function(event){
      event.preventDefault();
      let name = $("#councilName").val();
      let chapterId = $('#chapter').val();
      let category = $('#category').val();
      let entry = {name: name, chapterId:chapterId, category: category};
      
      $.ajax({
        type: 'POST',
        url: '/act/addCouncil',
        data: entry,
        success: function(data){
          //do something with the data via front-end framework
          location.reload()
        }
      });
    });
})