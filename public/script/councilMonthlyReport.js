$(document).ready(function(){
  $('#month').on('change', function(event){
    event.preventDefault();
    let month = $(this).val()

    $.ajax({
        type: 'GET',
        url: '/generateCouncilMonthlyReport/' + month,
        success: function(activities){
            getCouncilMonthlyReports(activities)
        }
    });
  });

  function getCouncilMonthlyReports(activities){
    $('#activityTable').empty()
    for (i in activities){
        let name = '<td>' + activities[i].name_of_activity + '</td>'
        let nature = '<td>' + activities[i].nature_of_activity + '</td>'
        let acc = '<td>' + activities[i].accomplishments + '</td>'
        let obj = '<td>' + activities[i].objective + '</td>'
        let num = '<td>' + activities[i].no_of_rcy_participants + '</td>'
        let remarks = '<td>' + activities[i].remarks + '</td>'
        
        $('#activityTable').append('<tr>' + name + nature + acc + obj + num + remarks + '</tr>')
    }
}

  $('#monthlyReportForm').on('submit', function(event){
      event.preventDefault();
      if ($('#month').val() == null){
        alert("Please select a month")
      }
      else{
        let entry = {
          month: $("#month").val(),
          name_of_activity : $("#actName").val(),
          nature_of_activity : $("#actNature").val(),
          accomplishments : $("#accomplishments").val(),
          objective : $("#objectives").val(),
          num_of_participants : $('#numParticipants').val(),
          remarks : $('#remarks').val(),
        }
        
        $.ajax({
          type: 'POST',
          url: '/act/addCouncilMonthlyReport',
          data: entry,
          success: function(data){
            let month = $('#month').val()

            $('#month').trigger('change')
            $('#month').val(month)

            $('#closeModal').click()
            $("#actName").val('')
            $("#actNature").val('')
            $("#accomplishments").val('')
            $("#objectives").val('')
            $('#numParticipants').val('')
            $('#remarks').val('')
          }
        });
      }
  })
});
