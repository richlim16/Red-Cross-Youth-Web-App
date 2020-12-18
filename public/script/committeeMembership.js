$(document).ready(function(){
    $('#committeeType').on('change', function(event){
        event.preventDefault();
        let type = $(this).val()

        $.ajax({
            type: 'GET',
            url: '/generatedCommitteeMembershipForm/' + type,
            success: function(members){
                getCommitteeMembers(members)
            }
        });
    });

    function getCommitteeMembers(members){
        $('#memberTable').empty()
        for (i in members){
            let index = '<th>' + i+1 + '</th>'
            let sname = '<td>' + members[i].surname + '</td>'
            let fname = '<td>' + members[i].first_name + '</td>'
            let mname = '<td>' + members[i].middle_name + '</td>'
            let nickname = '<td>' + members[i].nickname + '</td>'
            let cel = '<td>' + members[i].contact_no + '</td>'
            let tel = '<td>' + members[i].city_tel + '</td>'
            
            $('#memberTable').append('<tr>' + index + sname + fname + mname + nickname + cel + tel + '</tr>')
        }
    }


    $('#showMembers').click(function(event){
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: '/getNoneCommitteeMembers',
            success: function(members){
                $('#availMemberTable').empty()
                for (i in members){
                    let index = '<th> <button type="button" class="includeMember btn btn-primary" id="' + members[i].id + '">Add</button> </th>'
                    let sname = '<td>' + members[i].surname + '</td>'
                    let fname = '<td>' + members[i].first_name + '</td>'
                    let mname = '<td>' + members[i].middle_name + '</td>'
                    let nickname = '<td>' + members[i].nickname + '</td>'
                    let cel = '<td>' + members[i].contact_no + '</td>'
                    let tel = '<td>' + members[i].city_tel + '</td>'
                    
                    $('#availMemberTable').append('<tr>' + index + sname + fname + mname + nickname + cel + tel + '</tr>')
                }


                $('.includeMember').click(function(){
                    let memberId = $(this).attr('id')
                    let type = $('#committeeType').val()
            
                    $.ajax({
                        type: 'POST',
                        url: '/act/addCommitteeMember',
                        data: {memberId: memberId, type: type},
                        success: function(){
                            let type = $('#committeeType').val()

                            $.ajax({
                                type: 'GET',
                                url: '/generatedCommitteeMembershipForm/' + type,
                                success: function(members){
                                    getCommitteeMembers(members)
                                }
                            });

                            $('#closeModal').click()
                        }
                    });
                });    
            }
        });
    });    

});
