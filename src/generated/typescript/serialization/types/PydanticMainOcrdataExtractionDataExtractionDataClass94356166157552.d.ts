/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainOcrdataExtractionDataExtractionDataClass94356166157552: core.serialization.ObjectSchema<serializers.PydanticMainOcrdataExtractionDataExtractionDataClass94356166157552.Raw, EdenAi.PydanticMainOcrdataExtractionDataExtractionDataClass94356166157552>;
export declare namespace PydanticMainOcrdataExtractionDataExtractionDataClass94356166157552 {
    interface Raw {
        fields?: serializers.ItemDataExtraction.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}