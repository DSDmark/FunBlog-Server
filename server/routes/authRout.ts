import express from "express"
import authCtrl from "../controlles/authCtrl"
import { registationValidation } from "../middleware/validation";

const router = express.Router();

router.post("/register", registationValidation, authCtrl.register);
router.post("/active", authCtrl.activeAccount);
router.post("/login", authCtrl.login);


export default router;