 const express = require('express');
const router = express.Router();
const Create = require('../controllers/createController');
const Read = require('../controllers/readController');


router.post('/act/addCouncil', Create.addCouncil)
router.post('/act/addMemberForm', Create.addMemberForm)
router.post('/act/addCommitteeMember', Create.addCommitteeMember)