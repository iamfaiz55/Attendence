const {
  getBatch,
  addBatch,
  updateBatch,
  deleteBatch,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
  getAttendence,
  addAttendence,
  updateAttendence,
  deleteAttendence,
  getStudentByBatch,
} = require("../controller/adminController");

const router = require("express").Router();

router
  .get("/batch", getBatch)
  .post("/batch-add", addBatch)
  .put("/batch-update/:batchId", updateBatch)
  .delete("/batch-delete/:batchId", deleteBatch)

  .get("/student", getStudent)
  .get("/studentByBatch/:batchId", getStudentByBatch)
  .post("/student-add", addStudent)
  .put("/student-update/:studentId", updateStudent)
  .delete("/student-delete/:studentId", deleteStudent)

  .get("/attendence/:studId", getAttendence)
  .post("/attendence-add", addAttendence)
  .put("/attendence-update/:attendenceId", updateAttendence)
  .delete("/attendence-delete", deleteAttendence);

module.exports = router;
