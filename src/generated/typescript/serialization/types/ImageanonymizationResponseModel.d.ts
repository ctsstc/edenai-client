/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ImageanonymizationResponseModel: core.serialization.ObjectSchema<serializers.ImageanonymizationResponseModel.Raw, EdenAi.ImageanonymizationResponseModel>;
export declare namespace ImageanonymizationResponseModel {
    interface Raw {
        api4ai?: serializers.ImageanonymizationAnonymizationDataClass.Raw | null;
    }
}