/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../..";
import * as EdenAi from "../../../../../api";
import * as core from "../../../../../core";
export declare const ImagesearchdeleteImageDeleteImageRequest: core.serialization.Schema<serializers.ImagesearchdeleteImageDeleteImageRequest.Raw, EdenAi.ImagesearchdeleteImageDeleteImageRequest>;
export declare namespace ImagesearchdeleteImageDeleteImageRequest {
    interface Raw {
        providers: string;
        fallback_providers?: string | null;
        response_as_dict?: boolean | null;
        attributes_as_list?: boolean | null;
        show_original_response?: boolean | null;
        image_name: string;
    }
}