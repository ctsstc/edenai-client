/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImagefaceRecognitionFaceRecognitionAddFaceDataClass94356164944656: core.serialization.ObjectSchema<serializers.PydanticMainImagefaceRecognitionFaceRecognitionAddFaceDataClass94356164944656.Raw, EdenAi.PydanticMainImagefaceRecognitionFaceRecognitionAddFaceDataClass94356164944656>;
export declare namespace PydanticMainImagefaceRecognitionFaceRecognitionAddFaceDataClass94356164944656 {
    interface Raw {
        face_ids: string[];
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
