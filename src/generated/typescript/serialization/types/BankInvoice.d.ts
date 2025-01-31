/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const BankInvoice: core.serialization.ObjectSchema<serializers.BankInvoice.Raw, EdenAi.BankInvoice>;
export declare namespace BankInvoice {
    interface Raw {
        account_number: string;
        iban: string;
        bsb: string;
        sort_code: string;
        vat_number: string;
        rooting_number: string;
        swift: string;
    }
}
