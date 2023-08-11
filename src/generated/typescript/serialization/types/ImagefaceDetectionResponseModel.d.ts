/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ImagefaceDetectionResponseModel: core.serialization.ObjectSchema<serializers.ImagefaceDetectionResponseModel.Raw, EdenAi.ImagefaceDetectionResponseModel>;
export declare namespace ImagefaceDetectionResponseModel {
    interface Raw {
        clarifai?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166995024.Raw | null;
        picpurify?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166449728.Raw | null;
        microsoft?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166419776.Raw | null;
        api4ai?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166738064.Raw | null;
        google?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166754288.Raw | null;
        skybiometry?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166369440.Raw | null;
        amazon?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166959152.Raw | null;
        "eden-ai"?: serializers.PydanticMainImagefaceDetectionFaceDetectionDataClass94356166976432.Raw | null;
    }
}