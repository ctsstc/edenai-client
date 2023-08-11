/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const ProviderSubfeatureLanguagesItem: core.serialization.ObjectSchema<serializers.ProviderSubfeatureLanguagesItem.Raw, EdenAi.ProviderSubfeatureLanguagesItem>;
export declare namespace ProviderSubfeatureLanguagesItem {
    interface Raw {
        language_name?: string | null;
        language_code?: string | null;
    }
}