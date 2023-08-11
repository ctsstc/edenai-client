/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ResumeEducation: core.serialization.ObjectSchema<serializers.ResumeEducation.Raw, EdenAi.ResumeEducation>;
export declare namespace ResumeEducation {
    interface Raw {
        total_years_education: number;
        entries?: serializers.ResumeEducationEntry.Raw[] | null;
    }
}