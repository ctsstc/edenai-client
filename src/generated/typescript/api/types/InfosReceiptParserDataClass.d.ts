/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as EdenAi from "..";
export interface InfosReceiptParserDataClass {
    invoiceNumber?: string;
    invoiceTotal?: number;
    invoiceSubtotal?: number;
    barcodes?: EdenAi.BarCode[];
    category?: string;
    date?: string;
    dueDate?: string;
    time?: string;
    customerInformation?: EdenAi.CustomerInformation;
    merchantInformation?: EdenAi.MerchantInformation;
    paymentInformation?: EdenAi.PaymentInformation;
    locale?: EdenAi.Locale;
    taxes?: EdenAi.Taxes[];
    receiptInfos?: Record<string, unknown>;
    itemLines?: EdenAi.ItemLines[];
}