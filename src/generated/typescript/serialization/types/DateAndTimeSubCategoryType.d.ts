/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const DateAndTimeSubCategoryType: core.serialization.Schema<serializers.DateAndTimeSubCategoryType.Raw, EdenAi.DateAndTimeSubCategoryType>;
export declare namespace DateAndTimeSubCategoryType {
    type Raw = "Date" | "Time" | "DateTime" | "Duration";
}