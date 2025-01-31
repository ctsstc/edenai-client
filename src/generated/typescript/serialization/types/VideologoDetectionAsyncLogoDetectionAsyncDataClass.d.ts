/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const VideologoDetectionAsyncLogoDetectionAsyncDataClass: core.serialization.ObjectSchema<serializers.VideologoDetectionAsyncLogoDetectionAsyncDataClass.Raw, EdenAi.VideologoDetectionAsyncLogoDetectionAsyncDataClass>;
export declare namespace VideologoDetectionAsyncLogoDetectionAsyncDataClass {
    interface Raw {
        logos?: serializers.LogoTrack.Raw[] | null;
        original_response?: unknown | null;
        id: string;
        final_status: serializers.FinalStatusEnum.Raw;
        error?: Record<string, unknown> | null;
    }
}
