/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const MiscellaneousSubCategoryType: core.serialization.Schema<serializers.MiscellaneousSubCategoryType.Raw, EdenAi.MiscellaneousSubCategoryType>;
export declare namespace MiscellaneousSubCategoryType {
    type Raw = "URL" | "IP" | "MAC" | "VehicleIdentificationNumber" | "LicensePlate" | "VoterNumber" | "AWSKeys" | "AzureKeys" | "Password";
}
