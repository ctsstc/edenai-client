/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImagefaceDetectionFaceDetectionDataClass94356166738064: core.serialization.ObjectSchema<serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166738064.Raw, EdenAi.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166738064>;
export declare namespace PydanticMainImagefaceDetectionFaceDetectionDataClass94356166738064 {
    interface Raw {
        items?: serializers.FaceItem.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}