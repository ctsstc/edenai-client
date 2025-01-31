"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceLandmarks = void 0;
const core = __importStar(require("../../core"));
exports.FaceLandmarks = core.serialization.object({
    leftEye: core.serialization.property("left_eye", core.serialization.list(core.serialization.number()).optional()),
    leftEyeTop: core.serialization.property("left_eye_top", core.serialization.list(core.serialization.number()).optional()),
    leftEyeRight: core.serialization.property("left_eye_right", core.serialization.list(core.serialization.number()).optional()),
    leftEyeBottom: core.serialization.property("left_eye_bottom", core.serialization.list(core.serialization.number()).optional()),
    leftEyeLeft: core.serialization.property("left_eye_left", core.serialization.list(core.serialization.number()).optional()),
    rightEye: core.serialization.property("right_eye", core.serialization.list(core.serialization.number()).optional()),
    rightEyeTop: core.serialization.property("right_eye_top", core.serialization.list(core.serialization.number()).optional()),
    rightEyeRight: core.serialization.property("right_eye_right", core.serialization.list(core.serialization.number()).optional()),
    rightEyeBottom: core.serialization.property("right_eye_bottom", core.serialization.list(core.serialization.number()).optional()),
    rightEyeLeft: core.serialization.property("right_eye_left", core.serialization.list(core.serialization.number()).optional()),
    leftEyebrowLeft: core.serialization.property("left_eyebrow_left", core.serialization.list(core.serialization.number()).optional()),
    leftEyebrowRight: core.serialization.property("left_eyebrow_right", core.serialization.list(core.serialization.number()).optional()),
    leftEyebrowTop: core.serialization.property("left_eyebrow_top", core.serialization.list(core.serialization.number()).optional()),
    rightEyebrowLeft: core.serialization.property("right_eyebrow_left", core.serialization.list(core.serialization.number()).optional()),
    rightEyebrowRight: core.serialization.property("right_eyebrow_right", core.serialization.list(core.serialization.number()).optional()),
    leftPupil: core.serialization.property("left_pupil", core.serialization.list(core.serialization.number()).optional()),
    rightPupil: core.serialization.property("right_pupil", core.serialization.list(core.serialization.number()).optional()),
    noseTip: core.serialization.property("nose_tip", core.serialization.list(core.serialization.number()).optional()),
    noseBottomRight: core.serialization.property("nose_bottom_right", core.serialization.list(core.serialization.number()).optional()),
    noseBottomLeft: core.serialization.property("nose_bottom_left", core.serialization.list(core.serialization.number()).optional()),
    mouthLeft: core.serialization.property("mouth_left", core.serialization.list(core.serialization.number()).optional()),
    mouthRight: core.serialization.property("mouth_right", core.serialization.list(core.serialization.number()).optional()),
    rightEyebrowTop: core.serialization.property("right_eyebrow_top", core.serialization.list(core.serialization.number()).optional()),
    midpointBetweenEyes: core.serialization.property("midpoint_between_eyes", core.serialization.list(core.serialization.number()).optional()),
    noseBottomCenter: core.serialization.property("nose_bottom_center", core.serialization.list(core.serialization.number()).optional()),
    noseLeftAlarOutTip: core.serialization.property("nose_left_alar_out_tip", core.serialization.list(core.serialization.number()).optional()),
    noseLeftAlarTop: core.serialization.property("nose_left_alar_top", core.serialization.list(core.serialization.number()).optional()),
    noseRightAlarOutTip: core.serialization.property("nose_right_alar_out_tip", core.serialization.list(core.serialization.number()).optional()),
    noseRightAlarTop: core.serialization.property("nose_right_alar_top", core.serialization.list(core.serialization.number()).optional()),
    noseRootLeft: core.serialization.property("nose_root_left", core.serialization.list(core.serialization.number()).optional()),
    noseRootRight: core.serialization.property("nose_root_right", core.serialization.list(core.serialization.number()).optional()),
    upperLip: core.serialization.property("upper_lip", core.serialization.list(core.serialization.number()).optional()),
    underLip: core.serialization.property("under_lip", core.serialization.list(core.serialization.number()).optional()),
    underLipBottom: core.serialization.property("under_lip_bottom", core.serialization.list(core.serialization.number()).optional()),
    underLipTop: core.serialization.property("under_lip_top", core.serialization.list(core.serialization.number()).optional()),
    upperLipBottom: core.serialization.property("upper_lip_bottom", core.serialization.list(core.serialization.number()).optional()),
    upperLipTop: core.serialization.property("upper_lip_top", core.serialization.list(core.serialization.number()).optional()),
    mouthCenter: core.serialization.property("mouth_center", core.serialization.list(core.serialization.number()).optional()),
    mouthTop: core.serialization.property("mouth_top", core.serialization.list(core.serialization.number()).optional()),
    mouthBottom: core.serialization.property("mouth_bottom", core.serialization.list(core.serialization.number()).optional()),
    leftEarTragion: core.serialization.property("left_ear_tragion", core.serialization.list(core.serialization.number()).optional()),
    rightEarTragion: core.serialization.property("right_ear_tragion", core.serialization.list(core.serialization.number()).optional()),
    foreheadGlabella: core.serialization.property("forehead_glabella", core.serialization.list(core.serialization.number()).optional()),
    chinGnathion: core.serialization.property("chin_gnathion", core.serialization.list(core.serialization.number()).optional()),
    chinLeftGonion: core.serialization.property("chin_left_gonion", core.serialization.list(core.serialization.number()).optional()),
    chinRightGonion: core.serialization.property("chin_right_gonion", core.serialization.list(core.serialization.number()).optional()),
    upperJawlineLeft: core.serialization.property("upper_jawline_left", core.serialization.list(core.serialization.number()).optional()),
    midJawlineLeft: core.serialization.property("mid_jawline_left", core.serialization.list(core.serialization.number()).optional()),
    midJawlineRight: core.serialization.property("mid_jawline_right", core.serialization.list(core.serialization.number()).optional()),
    upperJawlineRight: core.serialization.property("upper_jawline_right", core.serialization.list(core.serialization.number()).optional()),
    leftCheekCenter: core.serialization.property("left_cheek_center", core.serialization.list(core.serialization.number()).optional()),
    rightCheekCenter: core.serialization.property("right_cheek_center", core.serialization.list(core.serialization.number()).optional()),
});
