/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as EdenAi from "../../api";
import * as core from "../../core";
export declare const InfosInvoiceParserDataClass: core.serialization.ObjectSchema<serializers.InfosInvoiceParserDataClass.Raw, EdenAi.InfosInvoiceParserDataClass>;
export declare namespace InfosInvoiceParserDataClass {
    interface Raw {
        customer_information?: serializers.CustomerInformationInvoice.Raw | null;
        merchant_information?: serializers.MerchantInformationInvoice.Raw | null;
        invoice_number?: string | null;
        invoice_total?: number | null;
        invoice_subtotal?: number | null;
        gratuity?: number | null;
        amount_due?: number | null;
        previous_unpaid_balance?: number | null;
        discount?: number | null;
        taxes?: serializers.TaxesInvoice.Raw[] | null;
        service_charge?: number | null;
        payment_term?: string | null;
        purchase_order?: string | null;
        date?: string | null;
        due_date?: string | null;
        service_date?: string | null;
        service_due_date?: string | null;
        po_number?: string | null;
        locale?: serializers.LocaleInvoice.Raw | null;
        bank_informations?: serializers.BankInvoice.Raw | null;
        item_lines?: serializers.ItemLinesInvoice.Raw[] | null;
    }
}