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


exports.deleteActivityReport = async (req, res)=>{
    let ret = await ActivityReport.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteActivityRequest = async (req, res)=>{
    let ret = await ActivityRequest.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteChapterPersonnel = async (req, res)=>{
    let ret = await ChapterPersonnel.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteChapter = async (req, res)=>{
    let ret = await Chapter.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteCommitteeMembershipForm = async (req, res)=>{
    let ret = await CommitteeMembershipForm.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteCommittee = async (req, res)=>{
    let ret = await Committee.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteCouncilAdvisor = async (req, res)=>{
    let ret = await CouncilAdvisor.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteCouncilMonthlyReport = async (req, res)=>{
    let ret = await CouncilMonthlyReport.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteCouncil = async (req, res)=>{
    let ret = await Council.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteUniformRequest = async (req, res)=>{
    let ret = await UniformRequest.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteDocument = async (req, res)=>{
    let ret = await Document.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteMembershipForm = async (req, res)=>{
    let ret = await MembershipForm.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteOfficer = async (req, res)=>{
    let ret = await Officer.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteOtherOrganizationsAffiliations = async (req, res)=>{
    let ret = await OtherOrganizationsAffiliations.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteTrainingsAttended = async (req, res)=>{
    let ret = await TrainingsAttended.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}

exports.deleteUser = async (req, res)=>{
    let ret = await User.model.destroy({
        where:{
            id: req.body.id,
        }
    })
    return ret;
}