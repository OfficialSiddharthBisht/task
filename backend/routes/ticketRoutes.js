const express = require('express');
const { getAllTickets, getSingleTicket, createTicket, deleteTicket } = require('../controllers/ticketController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();


router.route("/admin/tickets").get(isAuthenticatedUser, authorizeRoles("admin"), getAllTickets);
router.route("/admin/ticket/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleTicket)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTicket)

router.route("/newticket").post(createTicket);

module.exports = router;