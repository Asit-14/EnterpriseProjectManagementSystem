import express from "express";
import {
  create,
  read,
  readsingleuser,
  filterthedata,
  updateuserbyid,
  deleteuserbyid
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", create);
router.get("/read", read);
router.get("/readone", readsingleuser);
router.get("/filter", filterthedata);
router.put("/update", updateuserbyid);
router.delete("/delete/:id", deleteuserbyid);

export default router;
