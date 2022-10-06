import express from "express"
import authCtrl from "../controlles/authCtrl"


const router = express.Router();

router.post("/register",authCtrl.register);

export default router;