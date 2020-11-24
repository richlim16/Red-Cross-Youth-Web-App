const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const ActivityReport = require('../models/activity_report_form');
const ActivityRequest = require('../models/activity_request_form');
const ChapterPersonnel = require('../models/chapter_personnel');
const Chapter = require('../models/chapter');
const CommitteeMembershipForm = require('../models/committee_membership_form');
const Committee = require('../models/committee');
const CouncilAdvisor = require('../models/council_advisor');
const CouncilMonthlyReport = require('../models/council_monthly_report');
const Council = require('../models/council');
const Document = require('../models/document');
const MembershipForm = require('../models/membership_form');
const Officer = require('../models/officer');
const OtherOrganizationsAffiliations = require('../models/other_organizations_affiliations');
const TrainingsAttended = require('../models/trainings_attended');
const User = require('../models/user');

Chapter.model.hasMany(Council.model, {foreignKey: 'chapter_id',sourceKey: 'id'});
Council.model.belongsTo(Chapter.model, {foreignKey: 'chapter_id'});


exports.addCouncil = async (req, res) => {
    Council.model.hasMany(Committee.model, {foreignKey: 'council_id',sourceKey: 'id'});

    await Council.model.create({
        chapter_id: req.body.chapterId,
        category: req.body.category,
        name: req.body.name,
        committees: [
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
        ]
    }, {
        include: [Committee.model]
    })
}


exports.addMemberForm = async (req, res) => {
    const Doc = MembershipForm.model.belongsTo(Document.model, {foreignKey:'document_id'});

    await MembershipForm.model.create({
        blood_type: req.body.bloodType,
        rcy_id: req.body.rcyId,
        committee_membership_id: req.body.committee,
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
        guardians_tel: req.body.guaridansTel,
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
        vocationsal_school: req.body.vocSchool,
        vocational_attainment: req.body.vocDate,
        member_sig: false,
        council_pres_sig: false,
        council_adv_sig: false,
        document:{
            type: 'MEMBERSHIP',
            chapter_id: 1,  //get from Session variable
            council_id: 8  //get from Session variable
        }
    }, {
        include: [ Doc ]
    })

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