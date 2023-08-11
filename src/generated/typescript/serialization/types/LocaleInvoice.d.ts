/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const LocaleInvoice: core.serialization.ObjectSchema<serializers.LocaleInvoice.Raw, EdenAi.LocaleInvoice>;
export declare namespace LocaleInvoice {
    interface Raw {
        currency: string;
        language: string;
    }
}