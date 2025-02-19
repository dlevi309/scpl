import { ShortcutsActionParameterClass } from "./Strings/ShortcutsActionParameterClass";
import { ShortcutsParameterTextContentType } from "./Strings/ShortcutsParameterTextContentType";

import { ShortcutsResourceSpec } from "./ShortcutsResourceSpec";
import { CoercionTypeClass } from "../../WFTypes/Types";

type ShortcutsVariableType = "Ask" | "Variable" | "ActionOutput" | "Clipboard";

export type ShortcutsBaseParameterSpec = {
	Class: ShortcutsActionParameterClass;
	Key: string;
	Label?: string;
	DisallowedVariableTypes?: ShortcutsVariableType[];
	Hidden?: boolean;
	RequiredResources?: ShortcutsResourceSpec[];
	Description?: string;
	IntentSlotName?: string;
	DoNotLocalizeValues?: boolean;
};

export type ShortcutsIntentAppPickerParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue?: string;
	IntentName: string;
};

export type ShortcutsEnumerationParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue?: string;
	Items: string[];
	ActionKeywords?: string[]; // I think this isn't supposed to be here... getitemfromlist uses it though
};

export type ShortcutsSwitchParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue?: boolean;
};
export type ShortcutsExpandingParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsUberProductPickerParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsUberSeatCountPickerParameterSpec = ShortcutsEnumerationParameterSpec;

export type ShortcutsCountryFieldParameterSpec = ShortcutsInputParameterSpec;

export type ShortcutsLocationFieldParameterSpec = ShortcutsInputParameterSpec & {
	HintDisplayMode?: "WhileProcessing" | "Always" | "Never";
};

export type ShortcutsVariablePickerParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsDynamicEnumerationParameterSpec = ShortcutsBaseParameterSpec & {
	NoneLabel?: string;
	AlwaysShowsButton?: boolean;
};

export type ShortcutsInputParameterSpec = ShortcutsBaseParameterSpec & {
	TextAlignment?: "Left" | "Right";
	DefaultValue?: number | string;
	Placeholder?: number | string;
	AutocapitalizationType?: "Words" | "None";
	DisableAutocorrection?: boolean;
	DisableSmartDashes?: boolean;
	DisableSmartQuotes?: boolean;
	SyntaxHighlightingType?: "JavaScript"; // Javascript*
	SecureTextInput?: boolean;
	KeyboardType?:
		| "DecimalPad"
		| "EmailAddress"
		| "NumberPad"
		| "NumbersAndPunctuation"
		| "URL"
		| "WebSearch";
};

export type ShortcutsDateFieldParameterSpec = ShortcutsInputParameterSpec & {
	HintDisplayMode?: "WhileProcessing" | "Always" | "Never";
	HintDateMode?: "Time" | "Date" | "Date";
	ReactiveParameterKey?: "WFCalendarItemEndDate";
};

export type ShortcutsVariableFieldParameterSpec = ShortcutsInputParameterSpec;

export type ShortcutsTextInputParameterSpec = ShortcutsInputParameterSpec & {
	Multiline?: boolean;
	TextContentType?: ShortcutsParameterTextContentType;
	Prefix?: string;
};

/*
{
	Class: "WFCalendarPickerParameter",
	Description: "The calendar to add this event to.",
	EventKitEntityType: "Event",
	Key: "WFCalendarItemCalendar",
	Label: "Calendar"
}
*/

export type ShortcutsCalendarPickerParameterSpec = ShortcutsBaseParameterSpec & {
	EventKitEntityType: "Event" | "Reminder";
	AllowsAllCalendars?: boolean;
};

export type ShortcutsDictionaryParameterSpec = ShortcutsBaseParameterSpec & {
	AllowedValueTypes?: (0 | 1 | 2 | 3 | 4 | 5)[];
	ItemTypeName?: string;
};

export type ShortcutsNumberFieldParameterSpec = ShortcutsInputParameterSpec & {
	TextAlignment?: "Left" | "Right";
	DefaultValue?: number;
	Placeholder?: number | string;
	AllowsDecimalNumbers?: boolean;
};

export type ShortcutsPlaylistPickerParameterSpec = ShortcutsBaseParameterSpec & {
	ShowLibrary?: boolean;
};
export type ShortcutsArrayParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue: string[];
};

export type ShortcutsContactFieldParameterSpec = ShortcutsInputParameterSpec & {
	AllowsTextEntry: boolean;
};

export type ShortcutsStepperParameterSpec = ShortcutsNumberFieldParameterSpec & {
	StepperDescription?: string;
	StepperNoun?: string;
	StepperPluralNoun?: string;
	StepperPrefix?: string;
	Pefix?: string; // seems like a duplicate... also misspelled
	MinimumValue?: number;
	MaximumValue?: number;
};

export type ShortcutsAlarmFrequencyPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsAlarmPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
0;
export type ShortcutsEvernoteNotebookPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsDictateTextLanguagePickerSpec = ShortcutsDynamicEnumerationParameterSpec & {
	Items: [];
};
export type ShortcutsStorageServicePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AlwaysShowsButton: boolean;
	AlwaysRequiresServiceResource?: true;
};
export type ShortcutsEmailAddressFieldParameterSpec = ShortcutsTextInputParameterSpec;

export type ShortcutsTimeOffsetParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsEvernoteTagsTagFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsFilterParameterSpec = ShortcutsBaseParameterSpec & {
	ContentItemClass: CoercionTypeClass;
};

export type ShortcutsSliderParameterSpec = ShortcutsNumberFieldParameterSpec;
export type ShortcutsCustomDateFormatParameterSpec = ShortcutsInputParameterSpec;

export type ShortcutsMapsAppPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	SupportedApps: (
		| "Baidu Maps"
		| "Citymapper"
		| "Google Maps"
		| "Maps"
		| "Transit"
		| "Waze")[];
};

export type ShortcutsGetDistanceUnitPickerParameterSpec = ShortcutsEnumerationParameterSpec;
export type ShortcutsNetworkPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsQuantityTypePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	QuantityTypeKey?: "WFQuantitySampleType";
};

export type ShortcutsHealthQuantityFieldParameterSpec = ShortcutsTextInputParameterSpec & {
	QuantityTypeKey?: "WFQuantitySampleType";
	QuantityType?: "Active Calories" | "Walking + Running Distance";
};

export type ShortcutsHealthQuantityAdditionalFieldParameterSpec = ShortcutsHealthQuantityFieldParameterSpec;
export type ShortcutsHealthQuantityAdditionalPickerParameterSpec = ShortcutsQuantityTypePickerParameterSpec;
export type ShortcutsHealthCategoryPickerParameterSpec = ShortcutsQuantityTypePickerParameterSpec;
export type ShortcutsHealthCategoryAdditionalPickerParameterSpec = ShortcutsHealthCategoryPickerParameterSpec;
export type ShortcutsHealthCategoryStartDateFieldParameterSpec = ShortcutsHealthQuantityFieldParameterSpec;
export type ShortcutsHealthCategoryEndDateFieldParameterSpec = ShortcutsHealthQuantityFieldParameterSpec;

export type ShortcutsWorkoutTypePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsDurationQuantityFieldParameterSpec = ShortcutsNumberFieldParameterSpec;

export type ShortcutsIFTTTTriggerNameParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsIFTTTAddRecipeParameterSpec = ShortcutsBaseParameterSpec & {
	TriggerNameKey: string;
};

export type ShortcutsImageFormatPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;

export type ShortcutsLightroomPresetPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	PresetGroupKey: "presetGroup";
};

export type ShortcutsContentArrayParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue: string[];
};

export type ShortcutsMeasurementUnitPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	WFMeasurementUnitTypeKey: string;
};

export type ShortcutsArchiveFormatParameterSpec = ShortcutsDynamicEnumerationParameterSpec;

export type ShortcutsUnitTypePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsUnitPickerParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsAppPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AppSearchType?: "OpenApp" | "OpenIn";
};

export type ShortcutsPhoneNumberFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsTimeIntervalParameterSpec = ShortcutsTextInputParameterSpec;

export type ShortcutsUndefinedCoercionParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsHomePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsHomeScenePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsWorkflowPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsPhotoAlbumPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsiTunesStoreCountryPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsEmailAccountPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsContactHandleFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsSpeakTextRatePickerParameterSpec = ShortcutsBaseParameterSpec;
export type ShortcutsSpeakTextLanguagePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsTodoistProjectPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsTumblrBlogPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsTumblrComposeInAppParameterSpec = ShortcutsSwitchParameterSpec;
export type ShortcutsDynamicTagFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsWunderlistListPickerParameterSpec = ShortcutsDynamicTagFieldParameterSpec;

export type ShortcutsTrelloBoardPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	BoardKey?: string;
};
export type ShortcutsTrelloListPickerParameterSpec = ShortcutsTrelloBoardPickerParameterSpec;

export type ShortcutsTranslateTextLanguagePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	LanguageDetection?: boolean;
};

export type ShortcutsSpeakTextVoicePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	WFSpeakTextLanguageKey?: string;
};

export type ShortcutsSlackChannelPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AccountParameterKey: string;
};

export type ShortcutsAccountPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AccountClass: "WFSlackAccount" | "WFWordPressAccount";
};

type _pc<N extends string> = { Class: N };

export type ShortcutsParameterSpec =
	| (ShortcutsIntentAppPickerParameterSpec &
			_pc<"WFIntentAppPickerParameter">)
	| (ShortcutsEnumerationParameterSpec & _pc<"WFEnumerationParameter">)
	| (ShortcutsSwitchParameterSpec & _pc<"WFSwitchParameter">)
	| (ShortcutsUberProductPickerParameterSpec &
			_pc<"WFUberProductPickerParameter">)
	| (ShortcutsUberSeatCountPickerParameterSpec &
			_pc<"WFUberSeatCountPickerParameter">)
	| (ShortcutsLocationFieldParameterSpec & _pc<"WFLocationFieldParameter">)
	| (ShortcutsVariablePickerParameterSpec & _pc<"WFVariablePickerParameter">)
	| (ShortcutsNumberFieldParameterSpec & _pc<"WFNumberFieldParameter">)
	| (ShortcutsTextInputParameterSpec & _pc<"WFTextInputParameter">)
	| (ShortcutsDateFieldParameterSpec & _pc<"WFDateFieldParameter">)
	| (ShortcutsCalendarPickerParameterSpec & _pc<"WFCalendarPickerParameter">)
	| (ShortcutsExpandingParameterSpec & _pc<"WFExpandingParameter">)
	| (ShortcutsCountryFieldParameterSpec & _pc<"WFCountryFieldParameter">)
	| (ShortcutsPlaylistPickerParameterSpec & _pc<"WFPlaylistPickerParameter">)
	| (ShortcutsTimeOffsetParameterSpec & _pc<"WFTimeOffsetParameter">)
	| (ShortcutsUndefinedCoercionParameterSpec & _pc<"_UndefinedCoercionClass">)
	| (ShortcutsDynamicEnumerationParameterSpec &
			_pc<"WFDynamicEnumerationParameter">)
	| (ShortcutsAlarmFrequencyPickerParameterSpec &
			_pc<"WFAlarmFrequencyPickerParameter">)
	| (ShortcutsAlarmPickerParameterSpec & _pc<"WFAlarmPickerParameter">)
	| (ShortcutsVariableFieldParameterSpec & _pc<"WFVariableFieldParameter">)
	| (ShortcutsArrayParameterSpec & _pc<"WFArrayParameter">)
	| (ShortcutsContactFieldParameterSpec & _pc<"WFContactFieldParameter">)
	| (ShortcutsDictionaryParameterSpec & _pc<"WFDictionaryParameter">)
	| (ShortcutsDictateTextLanguagePickerSpec &
			_pc<"WFDictateTextLanguagePickerParameter">)
	| (ShortcutsStepperParameterSpec & _pc<"WFStepperParameter">)
	| (ShortcutsStorageServicePickerParameterSpec &
			_pc<"WFStorageServicePickerParameter">)
	| (ShortcutsEmailAddressFieldParameterSpec &
			_pc<"WFEmailAddressFieldParameter">)
	| (ShortcutsEvernoteNotebookPickerParameterSpec &
			_pc<"WFEvernoteNotebookPickerParameter">)
	| (ShortcutsEvernoteTagsTagFieldParameterSpec &
			_pc<"WFEvernoteTagsTagFieldParameter">)
	| (ShortcutsFilterParameterSpec & _pc<"WFFilterParameter">)
	| (ShortcutsSliderParameterSpec & _pc<"WFSliderParameter">)
	| (ShortcutsCustomDateFormatParameterSpec &
			_pc<"WFCustomDateFormatParameter">)
	| (ShortcutsMapsAppPickerParameterSpec & _pc<"WFMapsAppPickerParameter">)
	| (ShortcutsGetDistanceUnitPickerParameterSpec &
			_pc<"WFGetDistanceUnitPickerParameter">)
	| (ShortcutsNetworkPickerParameterSpec & _pc<"WFNetworkPickerParameter">)
	| (ShortcutsQuantityTypePickerParameterSpec &
			_pc<"WFQuantityTypePickerParameter">)
	| (ShortcutsHealthQuantityFieldParameterSpec & // why is this even necessary
			_pc<"WFHealthQuantityFieldParameter">)
	| (ShortcutsHealthQuantityAdditionalFieldParameterSpec &
			_pc<"WFHealthQuantityAdditionalFieldParameter">)
	| (ShortcutsHealthQuantityAdditionalPickerParameterSpec &
			_pc<"WFHealthQuantityAdditionalPickerParameter">)
	| (ShortcutsHealthCategoryPickerParameterSpec &
			_pc<"WFHealthCategoryPickerParameter">)
	| (ShortcutsHealthCategoryAdditionalPickerParameterSpec &
			_pc<"WFHealthCategoryAdditionalPickerParameter">)
	| (ShortcutsHealthCategoryStartDateFieldParameterSpec &
			_pc<"WFHealthCategoryStartDateFieldParameter">)
	| (ShortcutsHealthCategoryEndDateFieldParameterSpec & // there are 7 of these
			_pc<"WFHealthCategoryEndDateFieldParameter">)
	| (ShortcutsWorkoutTypePickerParameterSpec &
			_pc<"WFWorkoutTypePickerParameter">)
	| (ShortcutsDurationQuantityFieldParameterSpec &
			_pc<"WFDurationQuantityFieldParameter">) // 9
	| (ShortcutsIFTTTTriggerNameParameterSpec &
			_pc<"WFIFTTTTriggerNameParameter">)
	| (ShortcutsIFTTTAddRecipeParameterSpec & _pc<"WFIFTTTAddRecipeParameter">)
	| (ShortcutsImageFormatPickerParameterSpec &
			_pc<"WFImageConvertFormatPickerParameter">)
	| (ShortcutsLightroomPresetPickerParameterSpec &
			_pc<"WFLightroomPresetPickerParameter">)
	| (ShortcutsContentArrayParameterSpec & _pc<"WFContentArrayParameter">)
	| (ShortcutsArchiveFormatParameterSpec & _pc<"WFArchiveFormatParameter">)
	| (ShortcutsUnitTypePickerParameterSpec & _pc<"WFUnitTypePickerParameter">)
	| (ShortcutsMeasurementUnitPickerParameterSpec &
			_pc<"WFMeasurementUnitPickerParameter">)
	| (ShortcutsUnitPickerParameterSpec & _pc<"WFUnitPickerParameter">)
	| (ShortcutsAppPickerParameterSpec & _pc<"WFAppPickerParameter">)
	| (ShortcutsPhoneNumberFieldParameterSpec &
			_pc<"WFPhoneNumberFieldParameter">)
	| (ShortcutsTimeIntervalParameterSpec & _pc<"WFTimeIntervalParameter">)
	| (ShortcutsHomePickerParameterSpec & _pc<"WFHomePickerParameter">)
	| (ShortcutsHomeScenePickerParameterSpec &
			_pc<"WFHomeScenePickerParameter">)
	| (ShortcutsWorkflowPickerParameterSpec & _pc<"WFWorkflowPickerParameter">)
	| (ShortcutsPhotoAlbumPickerParameterSpec &
			_pc<"WFPhotoAlbumPickerParameter">)
	| (ShortcutsiTunesStoreCountryPickerParameterSpec &
			_pc<"WFiTunesStoreCountryPickerParameter">)
	| (ShortcutsEmailAccountPickerParameterSpec &
			_pc<"WFEmailAccountPickerParameter">)
	| (ShortcutsContactHandleFieldParameterSpec &
			_pc<"WFContactHandleFieldParameter">)
	| (ShortcutsAccountPickerParameterSpec & _pc<"WFAccountPickerParameter">)
	| (ShortcutsSlackChannelPickerParameterSpec &
			_pc<"WFSlackChannelPickerParameter">)
	| (ShortcutsSpeakTextVoicePickerParameterSpec &
			_pc<"WFSpeakTextVoicePickerParameter">)
	| (ShortcutsSpeakTextRatePickerParameterSpec &
			_pc<"WFSpeakTextRateParameter">)
	| (ShortcutsSpeakTextLanguagePickerParameterSpec &
			_pc<"WFSpeakTextLanguagePickerParameter">)
	| (ShortcutsTranslateTextLanguagePickerParameterSpec &
			_pc<"WFTranslateTextLanguagePickerParameter">)
	| (ShortcutsTodoistProjectPickerParameterSpec &
			_pc<"WFTodoistProjectPickerParameter">)
	| (ShortcutsTrelloBoardPickerParameterSpec &
			_pc<"WFTrelloBoardPickerParameter">)
	| (ShortcutsTrelloListPickerParameterSpec &
			_pc<"WFTrelloListPickerParameter">)
	| (ShortcutsTumblrComposeInAppParameterSpec &
			_pc<"WFTumblrComposeInAppParameter">)
	| (ShortcutsTumblrBlogPickerParameterSpec &
			_pc<"WFTumblrBlogPickerParameter">)
	| (ShortcutsDynamicTagFieldParameterSpec &
			_pc<"WFDynamicTagFieldParameter">)
	| (ShortcutsWunderlistListPickerParameterSpec &
			_pc<"WFWunderlistListPickerParameter">);
