const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const Order = require('../models/orderModel');
const Ticket = require('../models/ticketModel');
const ErrorHandler = require('../utils/errorHandler');


exports.getAllTickets = catchAsyncErrors(async (req, res, next) => {
    const total = await Ticket.countDocuments();
    const allTickets = await Ticket.find();
    res.status(200).json({
        success: true,
        allTickets,
        total,
    })
})

exports.getSingleTicket = catchAsyncErrors(async (req, res, next) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
        return next(
            new ErrorHandler(`Ticket does not exist with id: ${req.params.id}`)
        );
    }
    res.status(200).json({
        success: true,
        ticket,
    })
})

exports.createTicket = catchAsyncErrors(async (req, res, next) => {
    const { concern, subject, details } = req.body;
    const ticket = await Ticket.create({
        concern,
        subject,
        details
    });
    res.status(201).json({
        success: true,
        ticket,
    })
})

exports.deleteTicket = catchAsyncErrors(async (req, res, next) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        return next(new ErrorHandler(`Ticket does not exhist with id: ${req.params.id}`));
    }

    await ticket.remove();
    res.status(200).json({
        success: true,
        message: "Ticket removed successfully",
    })
})