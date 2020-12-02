$(document).ready(function(){
    $('#addMemberForm').on('submit', function(event){
        event.preventDefault();
        
        let trainings = [];
        let i=0;
        $( ".training" ).each(function() {
            trainingAttended = $( this ).children(".trainingDiv").children(".trainingAttended").val();
            certNo = $( this ).children(".certDiv").children(".certificateNo").val();
            place = $( this ).children(".placeDiv").children(".place").val();
            startDate = $( this ).children(".startDiv").children(".startDate").val();
            endDate = $( this ).children(".endDiv").children(".endDate").val();

            let entry = {trainingAttended: trainingAttended, certificateNumber: certNo, place: place, startDate: startDate, endDate: endDate}
            trainings[i] = entry;
            i++;
        })

        let organizations = [];
        i=0;
        $( ".organization" ).each(function() {
            org = $( this ).children(".orgDiv").children(".org").val();
            position = $( this ).children(".posDiv").children(".position").val();
            council = $( this ).children(".councilDiv").children(".council").val();
            startDate = $( this ).children(".startDiv").children(".startDate").val();
            endDate = $( this ).children(".endDiv").children(".endDate").val();

            let entry = {organization: org, position: position, council: council, startDate: startDate, endDate: endDate}
            organizations[i] = entry;
            i++;
        })
        console.log(trainings)
        console.log(organizations)


        let entry = {
            bloodType : $("#bloodType").val(),
            rcyId : $("#rcyId").val(),
            committee : $("#committee").val(),
            surname : $("#surname").val(),
            firstname : $('#firstName').val(),
            middlename : $('#middleName').val(),
            nickname : $("#nickname").val(),
            birthdate : $("#birthdate").val(),
            age : $("#age").val(),
            civilStatus : $("#civilStatus").val(),
            height : $("#height").val(),
            weight : $("#weight").val(),
            nationality : $("#nationality").val(),
            religion : $("#religion").val(),
            contactNo : $("#contactNo").val(),
            cityAdd : $("#cityAdd").val(),
            cityTel : $("#cityTel").val(),
            provinceAdd : $("#provinceAdd").val(),
            provinceTel : $("#provinceTel").val(),
            ailments : $("#ailments").val(),
            allergies : $("#allergies").val(),
            hobbies : $("#hobbies").val(),
            specSkills : $("#specSkills").val(),
            fathersName : $("#fathersName").val(),
            fathersOcc : $("#fathersOcc").val(),
            fathersAdd : $("#fathersAdd").val(),
            fathersTel : $("#fathersTel").val(),
            mothersName : $("#mothersName").val(),
            mothersOcc : $("#mothersOcc").val(),
            mothersAdd : $("#mothersAdd").val(),
            mothersTel : $("#mothersTel").val(),
            guardiansName : $("#guardiansName").val(),
            guardiansOcc : $("#guardiansOcc").val(),
            guardiansAdd : $("#guardiansAdd").val(),
            guardiansTel : $("#guardiansTel").val(),
            presentSchool : $("#presentSchool").val(),
            course : $("#course").val(),
            year : $("#year").val(),
            schoolAdd : $("#schoolAdd").val(),
            elemSchool : $("#elemSchool").val(),
            elemDate : $("#elemDate").val(),
            secondarySchool : $("#secondarySchool").val(),
            secondaryDate : $("#secondaryDate").val(),
            collegeSchool : $("#collegeSchool").val(),
            collegeDate : $("#collegeDate").val(),
            vocSchool : $("#vocSchool").val(),
            vocDate : $("#vocDate").val(),
            trainings: JSON.stringify(trainings),
            organizations: JSON.stringify(organizations)
        }
        
  
        $.ajax({
          type: 'POST',
          url: '/act/addMemberForm',
          data: entry,
          success: function(data){
            //do something with the data via front-end framework
            location.reload()
          }
        });
    });


    $('#addTraining').on('click', function(){
        let training = $( ".training" ).first().clone();
        training.children(".trainingDiv").children(".trainingAttended").val("");
        training.children(".certDiv").children(".certificateNo").val("");
        training.children(".placeDiv").children(".place").val("");
        training.appendTo( "#trainingsList" ); 
    });

    $('#addOrg').on('click', function(){
        let org = $( ".organization" ).first().clone()
        org.children(".orgDiv").children(".org").val("");
        org.children(".posDiv").children(".position").val("");
        org.children(".councilDiv").children(".council").val("");
        org.appendTo( "#organizations" ); 
    });

    // $('#addCommittee').on('click', function(){
    //     $( "#committee" ).clone().appendTo( "#committeesList" ); 
    // });
})