const Sequelize=require('sequelize');
const Op=Sequelize.Op;
const ActivityReport=require('../models/activity_report_form');
const ActivityRequest=require('../models/activity_request_form');
const ChapterPersonnel=require('../models/chapter_personnel');
const Chapter=require('../models/chapter');
const CommitteeMembershipForm=require('../models/committee_membership_form');
const Committee=require('../models/committee');
const CouncilAdvisor=require('../models/council_advisor');
const CouncilMonthlyReport=require('../models/council_monthly_report');
const Council=require('../models/council');
const UniformRequest=require('../models/uniform_request_form');
const Document=require('../models/document');
const MembershipForm=require('../models/membership_form');
const Officer=require('../models/officer');
const OtherOrganizationsAffiliations=require('../models/other_organizations_affiliations');
const TrainingsAttended=require('../models/trainings_attended');
const User=require('../models/user');

const bcrypt = require("bcrypt");
const saltR = 10;

Chapter.model.hasMany(Council.model, {foreignKey: 'chapter_id',sourceKey: 'id'});
Council.model.belongsTo(Chapter.model, {foreignKey: 'chapter_id'});

exports.signUp = async (req, res) => {
    let salt= bcrypt.genSaltSync(saltR);
    let pass= bcrypt.hashSync(req.body.pass, salt);
    await User.model.create({
        username: req.body.username,
        password: pass
    })
}

//get council id from session variable 'user'
async function getCouncilId(userId){
    let ret = await Council.model.findOne({
        where: {
            user_id: userId
        }
    })
    return ret
}

//For adding a council

exports.addCouncil=async(req, res)=>{
    console.log(req.session)
    console.log(req.body)
    let salt= bcrypt.genSaltSync(saltR);
    let pass= bcrypt.hashSync(req.body.secret, salt);

    User.model.hasMany(Council.model,{foreignKey:'user_id',sourceKey:'id'})
    Council.model.hasMany(Committee.model, {foreignKey: 'council_id',sourceKey: 'id'});
    await User.model.create({
        username: req.body.newName,//from the derek magic
        password: pass,
        type:'Council',        
        councils:{
            chapter_id: req.session.chapter_id,
            category: req.body.category,
            name: req.body.councilName,
            committees:[
                {type: 'DRRM', no_of_members:0},
                {type: 'Pledge 25', no_of_members:0},
                {type: 'Trainings', no_of_members:0},
                {type: 'Council Dev', no_of_members:0},
                {type: 'YAPE', no_of_members:0},
                {type: 'YPE', no_of_members:0},
                {type: 'Health Services', no_of_members:0},
                {type: 'Welfare', no_of_members:0},
                {type: 'Awards and Recognition', no_of_members:0},
                {type: 'Safety', no_of_members:0}
            ],
            include:[Committee.model]
        },
    },{
        include:[Council.model]
    })
    console.log(User.model)
    console.log("addCouncil function finished!");
}

//For adding a member in Membership Form

exports.addMemberForm = async (req, res) => {
    const Doc = MembershipForm.model.belongsTo(Document.model, {foreignKey:'document_id'});
    console.log(req.body)
    let council = await getCouncilId(req.session.user_id)

    await MembershipForm.model.create({
        blood_type: req.body.bloodType,
        rcy_id: req.body.rcyId,
        surname: req.body.surname,
        first_name: req.body.firstname,
        middle_name: req.body.middlename,
        nickname: req.body.nickname,
        birthdate: req.body.birthdate,
        age: req.body.age,
        civil_status: req.body.civilStatus,
        height: req.body.height,
        weight: req.body.weight,
        nationality: req.body.nationality,
        religion: req.body.religion,
        contact_no: req.body.contactNo,
        city_address: req.body.cityAdd,
        city_tel: req.body.cityTel,
        provincial_address: req.body.provinceAdd,
        provincial_tel: req.body.provinceTel,
        ailments: req.body.ailments,
        allergies: req.body.allergies,
        hobbies: req.body.hobbies,
        special_skills: req.body.specSkills,
        fathers_name: req.body.fathersName,
        fathers_occupation: req.body.fathersOcc,
        fathers_address: req.body.fathersAdd,
        fathers_tel: req.body.fathersTel,
        mothers_name: req.body.mothersName,
        mothers_occupation: req.body.mothersOcc,
        mothers_address: req.body.mothersAdd,
        mothers_tel: req.body.mothersTel,
        guardians_name: req.body.guardiansName,
        guardians_occupation: req.body.guardiansOcc,
        guardians_address: req.body.guardiansAdd,
        guardians_tel: req.body.guardiansTel,
        present_school: req.body.presentSchool,
        course: req.body.course,
        year: req.body.year,
        school_address: req.body.schoolAdd,
        elementary_school: req.body.elemSchool,
        elementary_attainment: req.body.elemDate,
        secondary_school: req.body.secondarySchool,
        secondary_attainment: req.body.secondaryDate,
        college_school: req.body.collegeSchool,
        college_attainment: req.body.collegeDate,
        vocational_school: req.body.vocSchool,
        vocational_attainment: req.body.vocDate,
        member_sig: false,
        council_pres_sig: false,
        council_adv_sig: false,
        document:{
            type: 'MEMBERSHIP',
            chapter_id: council.chapter_id,    //council.chapter_id,  //get from Session variable
            council_id: council.id    //council.id  //get from Session variable
        }
    }, {
        include: [ Doc ]
    })

    // Adding the member's trainings attended
    let trainings = JSON.parse(req.body.trainings)
    let organizations = JSON.parse(req.body.organizations)
    for(t in trainings) {
        await TrainingsAttended.model.create({
            rcy_id: req.body.rcyId,
            certificate_no: trainings[t].certificateNumber,
            training_attended: trainings[t].trainingAttended,
            place: trainings[t].place,
            start_date: trainings[t].startDate,
            end_date: trainings[t].endDate
        })
    };
    // Adding the member's other organizations affiliations
    for(o in organizations) {
        await OtherOrganizationsAffiliations.model.create({
            rcy_id: req.body.rcyId,
            organization: organizations[o].organization,
            position: organizations[o].position,
            council: organizations[o].council,
            start_date: organizations[o].startDate,
            end_date: organizations[o].endDate
        })
    };

}

//For adding a member to a committee
exports.addCommitteeMember = async (req, res) => {
    let council = await getCouncilId(req.body.sessionUserId)
    let committee = await Committee.model.findOne({
        where: {
            council_id: council.id,     //get council_id from Session variable
            type: req.body.type
        }
    });

    await MembershipForm.model.update({ 
        committee_membership_id: committee.id, 
    },  {
        where: {
            id: req.body.memberId
          }
    });
}

//For uniform request form
exports.addUniformRequest = async (req, res) => {
    const Doc = UniformRequest.model.belongsTo(Document.model, {foreignKey:'document_id'});
    let council = await getCouncilId(req.session.user)
    //insert more code here
    await UniformRequest.model.create({
        id:0,        
        uniform_type: req.body.type,
        date_requested: Sequelize.fn('NOW'),
        volunteer: 3,
        quantity: req.body.qty,
        receipt_no: null,
        date: Sequelize.fn('NOW'),
        or_number: null,
        document:{
            type: 'UNIFORM_REQUEST',
            chapter_id: council.chapter_id,  //get from Session variable
            council_id: council.id  //get from Session variable
        }
    },{
        include: [ Doc ]
    })
}