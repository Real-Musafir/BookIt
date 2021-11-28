import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";

// Get all rooms    =>    /api/rooms
const allRooms = catchAsyncErrors(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// Create new room    =>    /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// Get rooom details    =>    /api/room/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id); /// when we use express it will (req.params.is)

  if (!room) {
    return next(new ErrorHandler("Room not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update rooom details    =>    /api/room/:id
const updateRoom = catchAsyncErrors(async (req, res, next) => {
  let room = await Room.findById(req.query.id); /// when we use express it will (req.params.is)

  if (!room) {
    return next(new ErrorHandler("Room not found with this Id", 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    usefindAndModify: false,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete a single room  =>    /api/room/:id
const deleteRoom = catchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id); /// when we use express it will (req.params.is)

  if (!room) {
    return next(new ErrorHandler("Room not found with this Id", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
