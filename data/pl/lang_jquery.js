/* Polish initialisation for the jQuery UI date picker plugin. */
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['pl'] = {
	closeText: 'Zamknij',
	prevText: '&#x3C;Poprzedni',
	nextText: 'Następny&#x3E;',
	currentText: 'Dziś',
	monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec',
	'Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
	monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
	'Lip','Sie','Wrz','Pa','Lis','Gru'],
	dayNames: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
	dayNamesShort: ['Nie','Pn','Wt','Śr','Czw','Pt','So'],
	dayNamesMin: ['N','Pn','Wt','Śr','Cz','Pt','So'],
	weekHeader: 'Tydz',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['pl']);

return datepicker.regional['pl'];

}));
/* Spanish initialisation for the jQuery UI multiselect plugin. */
/* Written by Tomasz Mazur (contact@tomaszmazur.eu). */

(function ( $ ) {

$.extend($.ech.multiselect.prototype.options, {
	checkAllText: 'Zaznacz wszystkie',
	uncheckAllText: 'Odznacz wszystkie',
	noneSelectedText: 'Wybierz opcje',
	selectedText: 'Zaznaczono #'
});
	
})( jQuery );
/* Polish initialisation for the jQuery UI multiselect plugin. */
/* Written by Tomasz Mazur (contact@tomaszmazur.eu). */

(function ( $ ) {

$.extend($.ech.multiselectfilter.prototype.options, {
	label: "Filtruj:",
	placeholder: "Wprowadź słowa kluczowe"
});

})( jQuery );
/* Polish translation for the jQuery Timepicker Addon */
/* Written by Michał Pena */
(function($) {
	$.timepicker.regional['pl'] = {
		timeOnlyTitle: 'Wybierz godzinę',
		timeText: 'Czas',
		hourText: 'Godzina',
		minuteText: 'Minuta',
		secondText: 'Sekunda',
		millisecText: 'Milisekunda',
		microsecText: 'Mikrosekunda',
		timezoneText: 'Strefa czasowa',
		currentText: 'Teraz',
		closeText: 'Gotowe',
		timeFormat: 'HH:mm',
		timeSuffix: '',
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		isRTL: false
	};
	$.timepicker.setDefaults($.timepicker.regional['pl']);
})(jQuery);
/*
	jQuery Colorbox language configuration
	language: Polski (pl)
	translated by: Tomasz Wasiński
	site: 2bevisible.pl
*/
jQuery.extend(jQuery.colorbox.settings, {
	current: "{current}. obrazek z {total}",
	previous: "Poprzedni",
	next: "Następny",
	close: "Zamknij",
	xhrError: "Nie udało się załadować treści.",
	imgError: "Nie udało się załadować obrazka.",
	slideshowStart: "rozpocznij pokaz slajdów",
	slideshowStop: "zatrzymaj pokaz slajdów"
});// Spectrum Colorpicker
// Polish (pl) localization
// https://github.com/bgrins/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["pl"] = {
        cancelText: "Anuluj",
        chooseText: "Wybierz",
        clearText: "Usuń wybór koloru",
        noColorSelectedText: "Nie wybrano koloru",
        togglePaletteMoreText: "Więcej",
        togglePaletteLessText: "Mniej"
    };

    $.extend($.fn.spectrum.defaults, localization);

})( jQuery );
//! moment.js locale configuration
//! locale : polish (pl)
//! author : Rafal Hirsz : https://github.com/evoL

(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function plural(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural(number) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix  ? 'godzina'  : 'godzinę';
        case 'hh':
            return result + (plural(number) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural(number) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural(number) ? 'lata' : 'lat');
        }
    }

    var pl = moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
        weekdaysMin : 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: '[W] dddd [o] LT',
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : '1 dzień',
            dd : '%d dni',
            M : 'miesiąc',
            MM : translate,
            y : 'rok',
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return pl;

}));