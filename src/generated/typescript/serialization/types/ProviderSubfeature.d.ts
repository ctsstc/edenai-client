/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ProviderSubfeature: core.serialization.ObjectSchema<serializers.ProviderSubfeature.Raw, EdenAi.ProviderSubfeature>;
export declare namespace ProviderSubfeature {
    interface Raw {
        name: string;
        version: string;
        pricings: serializers.PricingSerialzier.Raw[];
        is_working?: boolean | null;
        description_title?: string | null;
        description_content?: string | null;
        provider: serializers.Provider.Raw;
        feature: serializers.Feature.Raw;
        subfeature: serializers.Subfeature.Raw;
        constraints: Record<string, unknown>;
        models: Record<string, unknown>;
        languages: serializers.ProviderSubfeatureLanguagesItem.Raw[];
        phase: string;
    }
}
