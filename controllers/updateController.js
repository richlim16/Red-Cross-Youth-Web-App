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


exports.memFormPresApprove = async (req, res) => {
    await MembershipForm.model.update({
        council_pres_sig: 1,
    }, {
        where: {
            id: req.params.id
        }
    })
}

exports.memFormPresReject = async (req, res) => {
    await MembershipForm.model.update({
        council_pres_sig: 2,
    }, {
        where: {
            id: req.params.id
        }
    })
}

exports.memFormMemApprove = async (req, res) => {
    await MembershipForm.model.update({
        member_sig: 1,
    }, {
        where: {
            id: req.params.id
        }
    })
}

exports.memFormMemReject = async (req, res) => {
    await MembershipForm.model.update({
        member_sig: 2,
    }, {
        where: {
            id: req.params.id
        }
    })
}

exports.memFormAdvApprove = async (req, res) => {
    await MembershipForm.model.update({
        council_adv_sig: 1,
    }, {
        where: {
            id: req.params.id
        }
    })
}

exports.memFormAdvReject = async (req, res) => {
    await MembershipForm.model.update({
        council_adv_sig: 2,
    }, {
        where: {
            id: req.params.id
        }
    })
}
