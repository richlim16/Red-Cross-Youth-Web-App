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


//Used in creating a council
exports.getAllChapters = async (req, res) => {
    let ret = await Chapter.model.findAll();
    return ret;
}

//so far not used anymore
exports.getCommitteesOfCouncil = async (req, res) => {
    let ret = await Committee.model.findAll({
        where: {
            council_id: 10      //get council_id from Session variable
        }
    });
    return ret;
}

//Used in Committee Membership Form
exports.getMembersOfCommittee = async(req, res) => {
    let committee = await Committee.model.findOne({
        where: {
            council_id: 10,     //get council_id from Session variable
            type: req.params.type
        }
    });

    let ret = await MembershipForm.model.findAll({
        where: {
            committee_membership_id: committee.id
        }
    });
    return ret;
}

// Used in Committee Membership Form when adding a member to a committee
exports.getNoneCommitteeMembers = async(req, res) => {
    const Doc = MembershipForm.model.belongsTo(Document.model, {foreignKey:'document_id'});

    let ret = await MembershipForm.model.findAll({
        where: {
            committee_membership_id: null,
        },
        include: [ Doc ]
    }
    );
    
    return ret;
}


exports.getAllCommitteeMembershipForms = async (req, res) => {
    console.log(req.session.user)
    // let ret = await CommitteeMembershipForm.model.findAll({
    //     where: {

    //     }
    // });
    // return ret;
}