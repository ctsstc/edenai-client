/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const PydanticMainImagefaceCompareFaceCompareDataClass94356164995584: core.serialization.ObjectSchema<serializers.PydanticMainImagefaceCompareFaceCompareDataClass94356164995584.Raw, EdenAi.PydanticMainImagefaceCompareFaceCompareDataClass94356164995584>;
export declare namespace PydanticMainImagefaceCompareFaceCompareDataClass94356164995584 {
    interface Raw {
        items?: serializers.FaceMatch.Raw[] | null;
        original_response?: unknown | null;
        status: serializers.StatusF43Enum.Raw;
    }
}
