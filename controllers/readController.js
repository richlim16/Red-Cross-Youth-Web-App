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
    const memForm = Document.model.hasMany(MembershipForm.model, {foreignKey:'document_id'});
    let ret=await Document.model.findAll({
        include:memForm,
        where:{
            type: "MEMBERSHIP",
            council_id:req.session.council_id
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

exports.getAllCouncils=async(req,res)=>{
    let ret=await Council.model.findAll();
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
    return ret;
}

//so far not used anymore
exports.getCommitteesOfCouncil = async (req, res) => {
    let ret = await Committee.model.findAll({
        where: {
            council_id: req.session.user_id      //get council_id from Session variable
        }
    });

    return ret
}
async function getCouncilId(userId){
    let ret = await Council.model.findOne({
        where: {
            user_id: userId
        }
    })
    return ret
}

exports.getCouncilInstance=async(id)=>{
    let ret = await Council.model.findOne({
        where:{
            id:id
        }
    })
    return ret
}

//Used in Committee Membership Form
exports.getMembersOfCommittee = async(req, res) => {
    let council = await getCouncilId(req.params.userId)
    let committee = await Committee.model.findOne({
        where: {
            council_id: council.id,     //get council_id from Session variable
            type: req.params.type
        }
    });
console.log(req.params.type)
    let ret = await MembershipForm.model.findAll({
        where: {
            committee_membership_id: committee.id
        }
    });
console.log(ret)
    return ret
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

// Used in masterlist
exports.getCouncilPendingMemForms = async(req, res) => {
    let ret = await MembershipForm.model.findAll({
        where: {
            council_pres_sig: 0,
        },
    });

    return ret;
}
exports.getCouncilAdvPendingMemForms = async(req, res) => {
    let ret = await MembershipForm.model.findAll({
        where: {
            council_adv_sig: 0,
        },
    });

    return ret;
};    

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

exports.getAllCouncils = async (req, res) => {
    let ret = await Council.model.findAll();
    return ret;
}

exports.findCouncil=async(req, res)=>{
    let ret = await Council.model.findOne({
        where:{
            name:req.body.councilName,
            category:req.body.category
        }
    });
    return ret;
}

exports.getCouncilUser=async(req,res)=>{        
    const council = User.model.hasOne(Council.model, {foreignKey:'user_id'});
    let ret=await User.model.findOne({
        include:council,
        where:{
            type:'Council',
            id:req.session.user_id
        }
    })
    return ret;
}

exports.getCouncilAdvisorUser=async(req,res)=>{        
    const councilAdvisor = User.model.hasOne(CouncilAdvisor.model, {foreignKey:'user_id'});
    let ret=await User.model.findOne({
        include:councilAdvisor,
        where:{
            type:'Council Advisor',
            id:req.session.user_id
        }
    })
    return ret;
}

exports.getChapterUser=async(req,res)=>{    
    const chap_personnel = User.model.hasOne(ChapterPersonnel.model, {foreignKey:'user_id'});
    let ret=await User.model.findOne({
        include:chap_personnel,
        where:{id:req.session.user_id}
    })
    return ret;
}

exports.getDocsFromCouncils=async(req, res)=>{//should give a better name?
    const doc= Council.model.hasMany(Document.model,{foreignKey:'council_id'});
    let ret = await Council.model.findAll({//make a where clause for when other chapters are involved
        include:doc,
    });
    return ret;
}

exports.getDocsFromACouncil=async(req, res)=>{//should give a better name?    
    let ret = await Document.model.findAll({
        where:{
            council_id:req.body.councilId
        }
    });
    return ret;
}

exports.getAdvisorsFromCouncil=async(req, res)=>{
    let ret = await CouncilAdvisor.model.findAll({
        where:{
            council_id:req.body.councilId
        }
    });
    return ret;
}

exports.docsUnifReqs=async (req,res)=>{    
    const memForm = Document.model.hasMany(UniformRequest.model, {foreignKey:'document_id'});
    let ret=await Document.model.findAll({
        include:memForm,
        where:{
            type: "UNIFORM_REQUEST",
            council_id:req.session.council_id
        }
    })
    return ret;
}

exports.getCouncilActivitiesForMonth = async (req, res) => {
    let ret = await CouncilMonthlyReport.model.findAll({
        where:{
            council_id:req.session.council_id,
            for_the_month_of: req.params.month
        }
    });
    return ret;
}