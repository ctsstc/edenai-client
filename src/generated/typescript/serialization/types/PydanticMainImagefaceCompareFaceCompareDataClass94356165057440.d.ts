/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImagefaceCompareFaceCompareDataClass94356165057440: core.serialization.ObjectSchema<serializers.PydanticMainImagefaceCompareFaceCompareDataClass94356165057440.Raw, EdenAi.PydanticMainImagefaceCompareFaceCompareDataClass94356165057440>;
export declare namespace PydanticMainImagefaceCompareFaceCompareDataClass94356165057440 {
    interface Raw {
        items?: serializers.FaceMatch.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
