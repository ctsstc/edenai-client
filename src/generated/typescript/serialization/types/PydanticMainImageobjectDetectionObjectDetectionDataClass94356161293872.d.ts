/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImageobjectDetectionObjectDetectionDataClass94356161293872: core.serialization.ObjectSchema<serializers.PydanticMainImageobjectDetectionObjectDetectionDataClass94356161293872.Raw, EdenAi.PydanticMainImageobjectDetectionObjectDetectionDataClass94356161293872>;
export declare namespace PydanticMainImageobjectDetectionObjectDetectionDataClass94356161293872 {
    interface Raw {
        items?: serializers.ObjectItem.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}