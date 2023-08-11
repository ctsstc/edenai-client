/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const AsyncVideoAnalysisRequest: core.serialization.ObjectSchema<serializers.AsyncVideoAnalysisRequest.Raw, EdenAi.AsyncVideoAnalysisRequest>;
export declare namespace AsyncVideoAnalysisRequest {
    interface Raw {
        providers: string;
        fallback_providers?: string | null;
        show_original_response?: boolean | null;
        webhook_receiver?: string | null;
        users_webhook_parameters?: Record<string, unknown> | null;
        file?: string | null;
        file_url?: string | null;
    }
}