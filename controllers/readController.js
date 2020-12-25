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
const UniformRequest=require('../models/uniform_request_form');
const User = require('../models/user');

Chapter.model.hasMany(Council.model, {foreignKey: 'chapter_id',sourceKey: 'id'});
Council.model.belongsTo(Chapter.model, {foreignKey: 'chapter_id'});

exports.docsMemForms=async (req,res)=>{
    const memForm = Document.model.hasMany(MembershipForm.model, {foreignKey:'id'});
    let ret=await Document.model.findAll({
        include:memForm,
        where:{
            type: "MEMBERSHIP",            
        }
    })
    
    return ret;
}

exports.getUnifReqs=async (req,res)=>{    
    let ret=await UniformRequest.model.findAll()
    return ret;
}

exports.getAllChapPersonnel=async (req,res)=>{
    const chapPersonnel= ChapterPersonnel.model.belongsTo(User.model, {foreignKey:'user_id'});
    let ret=await ChapterPersonnel.model.findAll({
        include:chapPersonnel,
    })
    return ret;
}

exports.getAllUsers = async (req, res)=>{
    let ret = await User.model.findAll({
        where:{
            type:'Chapter Youth Advisor',
        }
    })
    return ret;
}

exports.getUser = async (req, res) => {
    let ret = await User.model.findOne({
        where: {
            username: req.body.username
        }
    })
    return ret;
}

//Used in creating a council
exports.getAllChapters = async (req, res) => {
    let ret = await Chapter.model.findAll();
    
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // res.send(ret);
    return ret;
}

//so far not used anymore
exports.getCommitteesOfCouncil = async (req, res) => {
    let ret = await Committee.model.findAll({
        where: {
            council_id: council      //get council_id from Session variable
        }
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(ret);
}

//Used in Committee Membership Form
exports.getMembersOfCommittee = async(req, res) => {
    let committee = await Committee.model.findOne({
        where: {
            council_id: req.session.id,     //get council_id from Session variable
            type: req.params.type
        }
    });

    let ret = await MembershipForm.model.findAll({
        where: {
            committee_membership_id: committee.id
        }
    });
    
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //res.setHeader('Access-Control-Allow-Credentials', true);
    //res.send(ret);
}

// Used in Committee Membership Form when adding a member to a committee
exports.getNoneCommitteeMembers = async(req, res) => {
    const Doc = MembershipForm.model.belongsTo(Document.model, {foreignKey:'document_id'});

    let ret = await MembershipForm.model.findAll({
        where: {
            committee_membership_id: null,
        },
        include: [ Doc ]
    });
    
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //res.setHeader('Access-Control-Allow-Credentials', true);
    //res.send(ret);
    return ret;
}


exports.getFilledMemForm = async (req, res) => {
    let ret = await MembershipForm.model.findOne({
        where: {
            id: req.params.id
        }
    })
    return ret;
}

exports.getAllDocs=async(req, res)=>{
    let ret = await Document.model.findAll()
    return ret;
}

exports.getAllFilledMemForms = async (req, res) => {
    let ret = await Document.model.findAll({
        where:{
            type:'MEMBERSHIP'
        }
    })
    
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT PATCH, DELETE');
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //res.setHeader('Access-Control-Allow-Credentials', true);
    //res.send(ret);
    return ret;
}

exports.getMemTrainings = async (req, res) => {
    let ret = await TrainingsAttended.model.findAll({
        where: {
            rcy_id: req.rcy_id
        }
    })
    return ret;
}

exports.getMemOrgs = async (req, res) => {
    let ret = await OtherOrganizationsAffiliations.model.findAll({
        where: {
            rcy_id: req.rcy_id
        }
    })
    return ret;
}