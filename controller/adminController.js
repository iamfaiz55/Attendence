const asyncHandler = require("express-async-handler");
const Batch = require("../modals/Batch");
const Students = require("../modals/Students");
const Attendence = require("../modals/Attendence");

exports.getBatch = asyncHandler(async (req, res) => {
  const result = await Batch.find();
  res.status(200).json({ message: "Batch Fetch Success", result });
});
exports.addBatch = asyncHandler(async (req, res) => {
  await Batch.create(req.body);
  res.status(201).json({ message: "Batch Add Success" });
});
exports.updateBatch = asyncHandler(async (req, res) => {
  const { batchId } = req.params;
  await Batch.findByIdAndUpdate(batchId, req.body, { runValidators: true });
  res.status(200).json({ message: "Batch Update Success" });
});
exports.deleteBatch = asyncHandler(async (req, res) => {
  const { batchId } = req.params;
  await Batch.findByIdAndDelete(batchId);
  res.status(200).json({ message: "Batch Delete Success" });
});

// students
exports.getStudent = asyncHandler(async (req, res) => {
  const result = await Students.find();
  res.status(200).json({ message: "Batch Fetch Success", result });
});
exports.getStudentByBatch = asyncHandler(async (req, res) => {
  const { batchId } = req.params;
  const result = await Students.find({ batchId });
  res.status(200).json({ message: "Batch Wise Student Fetch Success", result });
});
exports.addStudent = asyncHandler(async (req, res) => {
  await Students.create(req.body);
  res.status(201).json({ message: "Students Add Success" });
});
exports.updateStudent = asyncHandler(async (req, res) => {
  const { studentId } = req.params;
  await Students.findByIdAndUpdate(studentId, req.body, {
    runValidators: true,
  });
  res.status(200).json({ message: "Students Update Success" });
});
exports.deleteStudent = asyncHandler(async (req, res) => {
  const { studentId } = req.params;
  await Students.findByIdAndDelete(studentId);
  res.status(200).json({ message: "Students Delete Success" });
});

// Attendence
exports.getAttendence = asyncHandler(async (req, res) => {
  const { studId } = req.params;
  const result = await Attendence.find({ studId });
  res.status(200).json({ message: "Attendence Fetch Success", result });
});
exports.addAttendence = asyncHandler(async (req, res) => {
  const x = req.body.map((item) => {
    return { studId: item.studId, date: item.date, isPresent: item.isPresent };
  });
  const result = await Attendence.findOne({
    studId: x[0].studId,
    date: x[0].date,
  });
  if (result) {
    return res.status(400).json({ message: "Dupelicate Date" });
  }
  await Attendence.create(x);
  res.status(201).json({ message: "Attendence Add Success" });
});
exports.updateAttendence = asyncHandler(async (req, res) => {
  const { attendenceId } = req.params;
  await Attendence.findByIdAndUpdate(attendenceId, req.body, {
    runValidators: true,
  });
  res.status(200).json({ message: "Attendence Update Success" });
});
// exports.deleteAttendence = asyncHandler(async (req, res) => {
//   const { attendenceId } = req.params;
//   await Attendence.findByIdAndDelete(attendenceId);
//   res.status(200).json({ message: "Attendence Delete Success" });
// });

exports.deleteAttendence = asyncHandler(async (req, res) => {
  const { attendenceId } = req.params;
  await Attendence.deleteMany();
  res.status(200).json({ message: "All Attendence Delete Success" });
});
