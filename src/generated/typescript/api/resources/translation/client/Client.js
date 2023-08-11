"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translation = void 0;
const environments = __importStar(require("../../../../environments"));
const core = __importStar(require("../../../../core"));
const EdenAi = __importStar(require("../../.."));
const serializers = __importStar(require("../../../../serialization"));
const url_join_1 = __importDefault(require("url-join"));
const errors = __importStar(require("../../../../errors"));
const form_data_1 = __importDefault(require("form-data"));
class Translation {
    constructor(_options) {
        this._options = _options;
    }
    /**
     * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available Providers</strong></summary>
     *
     *
     *
     * |Name|Version|Price|Billing unit|
     * |----|-------|-----|------------|
     * |**amazon**|`boto3 (v1.15.18)`|15.0 (per 1000000 char)|1 char
     * |**google**|`v3`|20.0 (per 1000000 char)|1 char
     * |**ibm**|`v3 (2018-05-01)`|20.0 (per 1000000 char)|1000 char
     * |**microsoft**|`v3.0`|10.0 (per 1000000 char)|1 char
     * |**neuralspace**|`v1`|7.0 (per 1000 request)|1 request
     * |**phedone**|`-`|4.0 (per 1000000 char)|1000 char
     * |**deepl**|`v2`|20.0 (per 1000000 char)|1 char
     * |**modernmt**|`1.2.8`|8.0 (per 1000000 char)|1 char
     * |**openai**|`v1`|20.0 (per 1000000 token)|1 token
     *
     *
     * </details>
     *
     * <details><summary>Supported Languages</summary>
     *
     *
     *
     *
     *
     * |Name|Value|
     * |----|-----|
     * |**Abkhazian**|`ab`|
     * |**Acoli**|`ach`|
     * |**Afar**|`aa`|
     * |**Afrikaans**|`af`|
     * |**Akan**|`ak`|
     * |**Albanian**|`sq`|
     * |**American Sign Language**|`ase`|
     * |**Amharic**|`am`|
     * |**Arabic**|`ar`|
     * |**Aragonese**|`an`|
     * |**Argentine Sign Language**|`aed`|
     * |**Armenian**|`hy`|
     * |**Assamese**|`as`|
     * |**Avaric**|`av`|
     * |**Avestan**|`ae`|
     * |**Aymara**|`ay`|
     * |**Azerbaijani**|`az`|
     * |**Bambara**|`bm`|
     * |**Bashkir**|`ba`|
     * |**Basque**|`eu`|
     * |**Belarusian**|`be`|
     * |**Bemba (Zambia)**|`bem`|
     * |**Bengali**|`bn`|
     * |**Berber languages**|`ber`|
     * |**Bihari languages**|`bh`|
     * |**Bislama**|`bi`|
     * |**Bosnian**|`bs`|
     * |**Brazilian Sign Language**|`bzs`|
     * |**Breton**|`br`|
     * |**Bulgarian**|`bg`|
     * |**Burmese**|`my`|
     * |**Catalan**|`ca`|
     * |**Cebuano**|`ceb`|
     * |**Celtic languages**|`cel`|
     * |**Central Bikol**|`bcl`|
     * |**Central Khmer**|`km`|
     * |**Chamorro**|`ch`|
     * |**Chechen**|`ce`|
     * |**Chilean Sign Language**|`csg`|
     * |**Chinese**|`zh`|
     * |**Church Slavic**|`cu`|
     * |**Chuukese**|`chk`|
     * |**Chuvash**|`cv`|
     * |**Colombian Sign Language**|`csn`|
     * |**Congo Swahili**|`swc`|
     * |**Cornish**|`kw`|
     * |**Corsican**|`co`|
     * |**Cree**|`cr`|
     * |**Croatian**|`hr`|
     * |**Czech**|`cs`|
     * |**Danish**|`da`|
     * |**Dari**|`prs`|
     * |**Dhivehi**|`dv`|
     * |**Dutch**|`nl`|
     * |**Dzongkha**|`dz`|
     * |**Efik**|`efi`|
     * |**English**|`en`|
     * |**Esperanto**|`eo`|
     * |**Estonian**|`et`|
     * |**Ewe**|`ee`|
     * |**Faroese**|`fo`|
     * |**Fijian**|`fj`|
     * |**Filipino**|`fil`|
     * |**Finnish**|`fi`|
     * |**Finnish Sign Language**|`fse`|
     * |**Fon**|`fon`|
     * |**French**|`fr`|
     * |**Fulah**|`ff`|
     * |**Ga**|`gaa`|
     * |**Galician**|`gl`|
     * |**Ganda**|`lg`|
     * |**Georgian**|`ka`|
     * |**German**|`de`|
     * |**Gilbertese**|`gil`|
     * |**Guarani**|`gn`|
     * |**Gujarati**|`gu`|
     * |**Gun**|`guw`|
     * |**Haitian**|`ht`|
     * |**Hausa**|`ha`|
     * |**Hawaiian**|`haw`|
     * |**Hebrew**|`he`|
     * |**Herero**|`hz`|
     * |**Hiligaynon**|`hil`|
     * |**Hindi**|`hi`|
     * |**Hiri Motu**|`ho`|
     * |**Hmong**|`hmn`|
     * |**Hmong Daw**|`mww`|
     * |**Hungarian**|`hu`|
     * |**Icelandic**|`is`|
     * |**Ido**|`io`|
     * |**Igbo**|`ig`|
     * |**Iloko**|`ilo`|
     * |**Indonesian**|`id`|
     * |**Interlingua (International Auxiliary Language Association)**|`ia`|
     * |**Interlingue**|`ie`|
     * |**Inuinnaqtun**|`ikt`|
     * |**Inuktitut**|`iu`|
     * |**Inupiaq**|`ik`|
     * |**Irish**|`ga`|
     * |**Isoko**|`iso`|
     * |**Isthmus Zapotec**|`zai`|
     * |**Italian**|`it`|
     * |**Japanese**|`ja`|
     * |**Javanese**|`jv`|
     * |**Kabyle**|`kab`|
     * |**Kalaallisut**|`kl`|
     * |**Kannada**|`kn`|
     * |**Kanuri**|`kr`|
     * |**Kaonde**|`kqn`|
     * |**Kashmiri**|`ks`|
     * |**Kazakh**|`kk`|
     * |**Kikuyu**|`ki`|
     * |**Kinyarwanda**|`rw`|
     * |**Kirghiz**|`ky`|
     * |**Klingon**|`tlh`|
     * |**Komi**|`kv`|
     * |**Kongo**|`kg`|
     * |**Korean**|`ko`|
     * |**Kuanyama**|`kj`|
     * |**Kurdish**|`ku`|
     * |**Kwangali**|`kwn`|
     * |**Lao**|`lo`|
     * |**Latin**|`la`|
     * |**Latvian**|`lv`|
     * |**Limburgan**|`li`|
     * |**Lingala**|`ln`|
     * |**Literary Chinese**|`lzh`|
     * |**Lithuanian**|`lt`|
     * |**Lozi**|`loz`|
     * |**Luba-Katanga**|`lu`|
     * |**Luba-Lulua**|`lua`|
     * |**Lunda**|`lun`|
     * |**Luo (Kenya and Tanzania)**|`luo`|
     * |**Lushai**|`lus`|
     * |**Luvale**|`lue`|
     * |**Luxembourgish**|`lb`|
     * |**Macedonian**|`mk`|
     * |**Malagasy**|`mg`|
     * |**Malay (macrolanguage)**|`ms`|
     * |**Malayalam**|`ml`|
     * |**Maltese**|`mt`|
     * |**Manx**|`gv`|
     * |**Maori**|`mi`|
     * |**Marathi**|`mr`|
     * |**Marshallese**|`mh`|
     * |**Mexican Sign Language**|`mfs`|
     * |**Modern Greek (1453-)**|`el`|
     * |**Mongolian**|`mn`|
     * |**Morisyen**|`mfe`|
     * |**Mossi**|`mos`|
     * |**Nauru**|`na`|
     * |**Navajo**|`nv`|
     * |**Ndonga**|`ng`|
     * |**Nepali (macrolanguage)**|`ne`|
     * |**Niuean**|`niu`|
     * |**North Ndebele**|`nd`|
     * |**Northern Kurdish**|`kmr`|
     * |**Northern Sami**|`se`|
     * |**Norwegian**|`no`|
     * |**Norwegian Bokmål**|`nb`|
     * |**Norwegian Nynorsk**|`nn`|
     * |**Nyaneka**|`nyk`|
     * |**Nyanja**|`ny`|
     * |**Occitan (post 1500)**|`oc`|
     * |**Ojibwa**|`oj`|
     * |**Oriya (macrolanguage)**|`or`|
     * |**Oromo**|`om`|
     * |**Ossetian**|`os`|
     * |**Pali**|`pi`|
     * |**Pangasinan**|`pag`|
     * |**Panjabi**|`pa`|
     * |**Papiamento**|`pap`|
     * |**Pedi**|`nso`|
     * |**Persian**|`fa`|
     * |**Peruvian Sign Language**|`prl`|
     * |**Pijin**|`pis`|
     * |**Pohnpeian**|`pon`|
     * |**Polish**|`pl`|
     * |**Portuguese**|`pt`|
     * |**Pushto**|`ps`|
     * |**Quechua**|`qu`|
     * |**Querétaro Otomi**|`otq`|
     * |**Romance languages**|`roa`|
     * |**Romanian**|`ro`|
     * |**Romansh**|`rm`|
     * |**Rundi**|`rn`|
     * |**Russian**|`ru`|
     * |**Ruund**|`rnd`|
     * |**Samoan**|`sm`|
     * |**San Salvador Kongo**|`kwy`|
     * |**Sango**|`sg`|
     * |**Sanskrit**|`sa`|
     * |**Sardinian**|`sc`|
     * |**Scottish Gaelic**|`gd`|
     * |**Serbian**|`sr`|
     * |**Serbo-Croatian**|`sh`|
     * |**Seselwa Creole French**|`crs`|
     * |**Shona**|`sn`|
     * |**Sichuan Yi**|`ii`|
     * |**Sindhi**|`sd`|
     * |**Sinhala**|`si`|
     * |**Slovak**|`sk`|
     * |**Slovenian**|`sl`|
     * |**Somali**|`so`|
     * |**South Ndebele**|`nr`|
     * |**Southern Sotho**|`st`|
     * |**Spanish**|`es`|
     * |**Spanish Sign Language**|`ssp`|
     * |**Sranan Tongo**|`srn`|
     * |**Sundanese**|`su`|
     * |**Swahili (macrolanguage)**|`sw`|
     * |**Swati**|`ss`|
     * |**Swedish**|`sv`|
     * |**Tagalog**|`tl`|
     * |**Tahitian**|`ty`|
     * |**Tajik**|`tg`|
     * |**Tamil**|`ta`|
     * |**Tatar**|`tt`|
     * |**Telugu**|`te`|
     * |**Tetela**|`tll`|
     * |**Tetun Dili**|`tdt`|
     * |**Thai**|`th`|
     * |**Tibetan**|`bo`|
     * |**Tigrinya**|`ti`|
     * |**Tiv**|`tiv`|
     * |**Tok Pisin**|`tpi`|
     * |**Tonga (Tonga Islands)**|`to`|
     * |**Tonga (Zambia)**|`toi`|
     * |**Tsonga**|`ts`|
     * |**Tswana**|`tn`|
     * |**Tumbuka**|`tum`|
     * |**Turkish**|`tr`|
     * |**Turkmen**|`tk`|
     * |**Tuvalu**|`tvl`|
     * |**Twi**|`tw`|
     * |**Tzotzil**|`tzo`|
     * |**Uighur**|`ug`|
     * |**Ukrainian**|`uk`|
     * |**Umbundu**|`umb`|
     * |**Upper Sorbian**|`hsb`|
     * |**Urdu**|`ur`|
     * |**Uzbek**|`uz`|
     * |**Venda**|`ve`|
     * |**Venezuelan Sign Language**|`vsl`|
     * |**Vietnamese**|`vi`|
     * |**Volapük**|`vo`|
     * |**Wallisian**|`wls`|
     * |**Walloon**|`wa`|
     * |**Waray (Philippines)**|`war`|
     * |**Welsh**|`cy`|
     * |**Western Frisian**|`fy`|
     * |**Wolaytta**|`wal`|
     * |**Wolof**|`wo`|
     * |**Xhosa**|`xh`|
     * |**Yapese**|`yap`|
     * |**Yiddish**|`yi`|
     * |**Yoruba**|`yo`|
     * |**Yucateco**|`yua`|
     * |**Yue Chinese**|`yue`|
     * |**Zande (individual language)**|`zne`|
     * |**Zhuang**|`za`|
     * |**Zulu**|`zu`|
     *
     * </details><details><summary>Supported Detailed Languages</summary>
     *
     *
     *
     *
     *
     * |Name|Value|
     * |----|-----|
     * |**Auto detection**|`auto-detect`|
     * |**Arabic (Argentina)**|`ar-AR`|
     * |**Bangla (Bangladesh)**|`bn-BD`|
     * |**Basque (Spain)**|`eu-ES`|
     * |**Bosnian (Bosnia & Herzegovina)**|`bs-BA`|
     * |**Bulgarian (Bulgaria)**|`bg-BG`|
     * |**Catalan (Spain)**|`ca-ES`|
     * |**Chinese (China)**|`zh-CN`|
     * |**Chinese (Simplified)**|`zh-Hans`|
     * |**Chinese (Taiwan)**|`zh-TW`|
     * |**Chinese (Traditional)**|`zh-Hant`|
     * |**Croatian (Croatia)**|`hr-HR`|
     * |**Czech (Czechia)**|`cs-CZ`|
     * |**Danish (Denmark)**|`da-DK`|
     * |**Dutch (Netherlands)**|`nl-NL`|
     * |**English (United Kingdom)**|`en-GB`|
     * |**English (United States)**|`en-US`|
     * |**Estonian (Estonia)**|`et-EE`|
     * |**Finnish (Finland)**|`fi-FI`|
     * |**French (Canada)**|`fr-CA`|
     * |**French (France)**|`fr-FR`|
     * |**German (Germany)**|`de-DE`|
     * |**Greek (Greece)**|`el-GR`|
     * |**Gujarati (India)**|`gu-IN`|
     * |**Hebrew (Israel)**|`he-IL`|
     * |**Hindi (India)**|`hi-IN`|
     * |**Hungarian (Hungary)**|`hu-HU`|
     * |**Indonesian (Indonesia)**|`id-ID`|
     * |**Inuktitut (Latin)**|`iu-Latn`|
     * |**Irish (Ireland)**|`ga-IE`|
     * |**Italian (Italy)**|`it-IT`|
     * |**Japanese (Japan)**|`ja-JP`|
     * |**Kannada (India)**|`kn-IN`|
     * |**Klingon (Klingon (KLI pIqaD))**|`tlh-Piqd`|
     * |**Klingon (Latin)**|`tlh-Latn`|
     * |**Korean (South Korea)**|`ko-KR`|
     * |**Latvian (Latvia)**|`lv-LV`|
     * |**Lithuanian (Lithuania)**|`lt-LT`|
     * |**Malay (Malaysia)**|`ms-MY`|
     * |**Malayalam (India)**|`ml-IN`|
     * |**Maltese (Malta)**|`mt-MT`|
     * |**Marathi (India)**|`mr-IN`|
     * |**Mongolian (Cyrillic)**|`mn-Cyrl`|
     * |**Mongolian (Mongolian)**|`mn-Mong`|
     * |**Nepali (Nepal)**|`ne-NP`|
     * |**Norwegian Bokmål (Norway)**|`nb-NO`|
     * |**Persian (Afghanistan)**|`fa-AF`|
     * |**Polish (Poland)**|`pl-PL`|
     * |**Portuguese (Brazil)**|`pt-BR`|
     * |**Portuguese (Portugal)**|`pt-PT`|
     * |**Punjabi (India)**|`pa-IN`|
     * |**Romanian (Romania)**|`ro-RO`|
     * |**Russian (Russia)**|`ru-RU`|
     * |**Serbian (Cyrillic)**|`sr-Cyrl`|
     * |**Serbian (Latin)**|`sr-Latn`|
     * |**Serbian (Montenegro)**|`sr-ME`|
     * |**Serbian (Serbia)**|`sr-RS`|
     * |**Sinhala (Sri Lanka)**|`si-LK`|
     * |**Slovak (Slovakia)**|`sk-SK`|
     * |**Slovenian (Slovenia)**|`sl-SI`|
     * |**Spanish (Latin America)**|`es-419`|
     * |**Spanish (Mexico)**|`es-MX`|
     * |**Spanish (Spain)**|`es-ES`|
     * |**Swedish (Sweden)**|`sv-SE`|
     * |**Tamil (India)**|`ta-IN`|
     * |**Telugu (India)**|`te-IN`|
     * |**Thai (Thailand)**|`th-TH`|
     * |**Turkish (Turkey)**|`tr-TR`|
     * |**Ukrainian (Ukraine)**|`uk-UA`|
     * |**Urdu (Pakistan)**|`ur-PK`|
     * |**Vietnamese (Vietnam)**|`vi-VN`|
     * |**Welsh (United Kingdom)**|`cy-GB`|
     *
     * </details>
     * @throws {@link EdenAi.BadRequestError}
     * @throws {@link EdenAi.ForbiddenError}
     * @throws {@link EdenAi.NotFoundError}
     * @throws {@link EdenAi.InternalServerError}
     */
    automaticTranslationCreate(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.EdenAiEnvironment.Default, "translation/automatic_translation"),
                method: "POST",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                body: yield serializers.TranslationautomaticTranslationAutomaticTranslationRequest.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.TranslationautomaticTranslationResponseModel.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new EdenAi.BadRequestError(yield serializers.BadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 403:
                        throw new EdenAi.ForbiddenError(yield serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 404:
                        throw new EdenAi.NotFoundError(yield serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 500:
                        throw new EdenAi.InternalServerError(yield serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    default:
                        throw new errors.EdenAiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.EdenAiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.EdenAiTimeoutError();
                case "unknown":
                    throw new errors.EdenAiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available Providers</strong></summary>
     *
     *
     *
     * |Name|Version|Price|Billing unit|
     * |----|-------|-----|------------|
     * |**deepl**|`v2`|2.0 (per 20 page)|20 page
     * |**google**|`v3`|0.08 (per 1 page)|1 page
     *
     *
     * </details>
     *
     * <details><summary>Supported Languages</summary>
     *
     *
     *
     *
     *
     * |Name|Value|
     * |----|-----|
     * |**Afrikaans**|`af`|
     * |**Albanian**|`sq`|
     * |**Amharic**|`am`|
     * |**Arabic**|`ar`|
     * |**Armenian**|`hy`|
     * |**Azerbaijani**|`az`|
     * |**Basque**|`eu`|
     * |**Belarusian**|`be`|
     * |**Bengali**|`bn`|
     * |**Bosnian**|`bs`|
     * |**Bulgarian**|`bg`|
     * |**Burmese**|`my`|
     * |**Catalan**|`ca`|
     * |**Cebuano**|`ceb`|
     * |**Central Khmer**|`km`|
     * |**Chinese**|`zh`|
     * |**Corsican**|`co`|
     * |**Croatian**|`hr`|
     * |**Czech**|`cs`|
     * |**Danish**|`da`|
     * |**Dutch**|`nl`|
     * |**English**|`en`|
     * |**Esperanto**|`eo`|
     * |**Estonian**|`et`|
     * |**Finnish**|`fi`|
     * |**French**|`fr`|
     * |**Galician**|`gl`|
     * |**Georgian**|`ka`|
     * |**German**|`de`|
     * |**Gujarati**|`gu`|
     * |**Haitian**|`ht`|
     * |**Hausa**|`ha`|
     * |**Hawaiian**|`haw`|
     * |**Hebrew**|`he`|
     * |**Hindi**|`hi`|
     * |**Hmong**|`hmn`|
     * |**Hungarian**|`hu`|
     * |**Icelandic**|`is`|
     * |**Igbo**|`ig`|
     * |**Indonesian**|`id`|
     * |**Irish**|`ga`|
     * |**Italian**|`it`|
     * |**Japanese**|`ja`|
     * |**Javanese**|`jv`|
     * |**Kannada**|`kn`|
     * |**Kazakh**|`kk`|
     * |**Kinyarwanda**|`rw`|
     * |**Kirghiz**|`ky`|
     * |**Korean**|`ko`|
     * |**Kurdish**|`ku`|
     * |**Lao**|`lo`|
     * |**Latin**|`la`|
     * |**Latvian**|`lv`|
     * |**Lithuanian**|`lt`|
     * |**Luxembourgish**|`lb`|
     * |**Macedonian**|`mk`|
     * |**Malagasy**|`mg`|
     * |**Malay (macrolanguage)**|`ms`|
     * |**Malayalam**|`ml`|
     * |**Maltese**|`mt`|
     * |**Maori**|`mi`|
     * |**Marathi**|`mr`|
     * |**Modern Greek (1453-)**|`el`|
     * |**Mongolian**|`mn`|
     * |**Nepali (macrolanguage)**|`ne`|
     * |**Norwegian**|`no`|
     * |**Nyanja**|`ny`|
     * |**Oriya (macrolanguage)**|`or`|
     * |**Panjabi**|`pa`|
     * |**Persian**|`fa`|
     * |**Polish**|`pl`|
     * |**Portuguese**|`pt`|
     * |**Pushto**|`ps`|
     * |**Romanian**|`ro`|
     * |**Russian**|`ru`|
     * |**Samoan**|`sm`|
     * |**Scottish Gaelic**|`gd`|
     * |**Serbian**|`sr`|
     * |**Shona**|`sn`|
     * |**Sindhi**|`sd`|
     * |**Sinhala**|`si`|
     * |**Slovak**|`sk`|
     * |**Slovenian**|`sl`|
     * |**Somali**|`so`|
     * |**Southern Sotho**|`st`|
     * |**Spanish**|`es`|
     * |**Sundanese**|`su`|
     * |**Swahili (macrolanguage)**|`sw`|
     * |**Swedish**|`sv`|
     * |**Tagalog**|`tl`|
     * |**Tajik**|`tg`|
     * |**Tamil**|`ta`|
     * |**Tatar**|`tt`|
     * |**Telugu**|`te`|
     * |**Thai**|`th`|
     * |**Turkish**|`tr`|
     * |**Turkmen**|`tk`|
     * |**Uighur**|`ug`|
     * |**Ukrainian**|`uk`|
     * |**Urdu**|`ur`|
     * |**Uzbek**|`uz`|
     * |**Vietnamese**|`vi`|
     * |**Welsh**|`cy`|
     * |**Western Frisian**|`fy`|
     * |**Xhosa**|`xh`|
     * |**Yiddish**|`yi`|
     * |**Yoruba**|`yo`|
     * |**Zulu**|`zu`|
     *
     * </details><details><summary>Supported Detailed Languages</summary>
     *
     *
     *
     *
     *
     * |Name|Value|
     * |----|-----|
     * |**Auto detection**|`auto-detect`|
     * |**Chinese (China)**|`zh-CN`|
     * |**Chinese (Taiwan)**|`zh-TW`|
     *
     * </details>
     * @throws {@link EdenAi.BadRequestError}
     * @throws {@link EdenAi.ForbiddenError}
     * @throws {@link EdenAi.NotFoundError}
     * @throws {@link EdenAi.InternalServerError}
     */
    documentTranslationCreate(file, request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _request = new form_data_1.default();
            _request.append("providers", request.providers);
            _request.append("fallback_providers", request.fallbackProviders);
            _request.append("response_as_dict", request.responseAsDict.toString());
            _request.append("attributes_as_list", request.attributesAsList.toString());
            _request.append("show_original_response", request.showOriginalResponse.toString());
            _request.append("file", file);
            if (request.fileUrl != null) {
                _request.append("file_url", request.fileUrl);
            }
            if (request.sourceLanguage != null) {
                _request.append("source_language", request.sourceLanguage);
            }
            _request.append("target_language", request.targetLanguage);
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.EdenAiEnvironment.Default, "translation/document_translation"),
                method: "POST",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                    "Content-Length": (yield core.getFormDataContentLength(_request)).toString(),
                },
                contentType: "multipart/form-data; boundary=" + _request.getBoundary(),
                body: _request,
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.TranslationdocumentTranslationResponseModel.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new EdenAi.BadRequestError(yield serializers.BadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 403:
                        throw new EdenAi.ForbiddenError(yield serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 404:
                        throw new EdenAi.NotFoundError(yield serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 500:
                        throw new EdenAi.InternalServerError(yield serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    default:
                        throw new errors.EdenAiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.EdenAiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.EdenAiTimeoutError();
                case "unknown":
                    throw new errors.EdenAiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    /**
     * <details><summary><strong style='color: #0072a3; cursor: pointer'>Available Providers</strong></summary>
     *
     *
     *
     * |Name|Version|Price|Billing unit|
     * |----|-------|-----|------------|
     * |**amazon**|`boto3 (v1.15.18)`|1.0 (per 1000000 char)|300 char
     * |**google**|`v1`|20.0 (per 1000000 char)|1 char
     * |**ibm**|`v1 (2021-08-01)`|20.0 (per 1000000 char)|1000 char
     * |**microsoft**|`v3.1`|1.0 (per 1000000 char)|1000 char
     * |**neuralspace**|`v1`|7.0 (per 1000 request)|1 request
     * |**oneai**|`v0`|2.14 (per 1000000 char)|1 char
     * |**modernmt**|`1.1.0`|8.0 (per 1000000 char)|1 char
     * |**openai**|`v1`|20.0 (per 1000000 token)|1 token
     *
     *
     * </details>
     *
     *
     * @throws {@link EdenAi.BadRequestError}
     * @throws {@link EdenAi.ForbiddenError}
     * @throws {@link EdenAi.NotFoundError}
     * @throws {@link EdenAi.InternalServerError}
     */
    languageDetectionCreate(request, requestOptions) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _response = yield core.fetcher({
                url: (0, url_join_1.default)((_a = (yield core.Supplier.get(this._options.environment))) !== null && _a !== void 0 ? _a : environments.EdenAiEnvironment.Default, "translation/language_detection"),
                method: "POST",
                headers: {
                    Authorization: yield this._getAuthorizationHeader(),
                    "X-Fern-Language": "JavaScript",
                },
                contentType: "application/json",
                body: yield serializers.TranslationlanguageDetectionLanguageDetectionRequest.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                }),
                timeoutMs: (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeoutInSeconds) != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            });
            if (_response.ok) {
                return yield serializers.TranslationlanguageDetectionResponseModel.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                });
            }
            if (_response.error.reason === "status-code") {
                switch (_response.error.statusCode) {
                    case 400:
                        throw new EdenAi.BadRequestError(yield serializers.BadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 403:
                        throw new EdenAi.ForbiddenError(yield serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 404:
                        throw new EdenAi.NotFoundError(yield serializers.NotFoundResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    case 500:
                        throw new EdenAi.InternalServerError(yield serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }));
                    default:
                        throw new errors.EdenAiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.body,
                        });
                }
            }
            switch (_response.error.reason) {
                case "non-json":
                    throw new errors.EdenAiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.rawBody,
                    });
                case "timeout":
                    throw new errors.EdenAiTimeoutError();
                case "unknown":
                    throw new errors.EdenAiError({
                        message: _response.error.errorMessage,
                    });
            }
        });
    }
    _getAuthorizationHeader() {
        return __awaiter(this, void 0, void 0, function* () {
            const bearer = yield core.Supplier.get(this._options.token);
            if (bearer != null) {
                return `Bearer ${bearer}`;
            }
            return undefined;
        });
    }
}
exports.Translation = Translation;