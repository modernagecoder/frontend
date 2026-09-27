/**
 * Global Country Code Selector
 *
 * Renders a polished, searchable country picker (with flag + dial code + name)
 * next to every <input type="tel"> on the site. Theme-aware: detects whether
 * the surrounding form is light or dark and adapts colors accordingly so the
 * widget never feels glued on top of an existing design.
 *
 * Default selection: the visitor's own country from their device timezone,
 * else the page's country (<meta name="mac-lead-country">), else India. See
 * "starting country" below.
 *
 * Also guards every form at submit time; see "at submit time" below.
 *
 * Public API:
 *   window.MACCountryCode.read(input)  → { dial, iso, name, digits, fullPhone }
 *   window.MACCountryCode.rescan(node) → re-attach to newly-injected forms
 */
(function () {
  'use strict';

  // Comprehensive country list (ISO-3166 alpha-2 + ITU dial code).
  var COUNTRIES = [
    { iso: 'AF', name: 'Afghanistan', dial: '+93' },
    { iso: 'AL', name: 'Albania', dial: '+355' },
    { iso: 'DZ', name: 'Algeria', dial: '+213' },
    { iso: 'AS', name: 'American Samoa', dial: '+1684' },
    { iso: 'AD', name: 'Andorra', dial: '+376' },
    { iso: 'AO', name: 'Angola', dial: '+244' },
    { iso: 'AI', name: 'Anguilla', dial: '+1264' },
    { iso: 'AG', name: 'Antigua and Barbuda', dial: '+1268' },
    { iso: 'AR', name: 'Argentina', dial: '+54' },
    { iso: 'AM', name: 'Armenia', dial: '+374' },
    { iso: 'AW', name: 'Aruba', dial: '+297' },
    { iso: 'AU', name: 'Australia', dial: '+61' },
    { iso: 'AT', name: 'Austria', dial: '+43' },
    { iso: 'AZ', name: 'Azerbaijan', dial: '+994' },
    { iso: 'BS', name: 'Bahamas', dial: '+1242' },
    { iso: 'BH', name: 'Bahrain', dial: '+973' },
    { iso: 'BD', name: 'Bangladesh', dial: '+880' },
    { iso: 'BB', name: 'Barbados', dial: '+1246' },
    { iso: 'BY', name: 'Belarus', dial: '+375' },
    { iso: 'BE', name: 'Belgium', dial: '+32' },
    { iso: 'BZ', name: 'Belize', dial: '+501' },
    { iso: 'BJ', name: 'Benin', dial: '+229' },
    { iso: 'BM', name: 'Bermuda', dial: '+1441' },
    { iso: 'BT', name: 'Bhutan', dial: '+975' },
    { iso: 'BO', name: 'Bolivia', dial: '+591' },
    { iso: 'BA', name: 'Bosnia and Herzegovina', dial: '+387' },
    { iso: 'BW', name: 'Botswana', dial: '+267' },
    { iso: 'BR', name: 'Brazil', dial: '+55' },
    { iso: 'IO', name: 'British Indian Ocean Territory', dial: '+246' },
    { iso: 'VG', name: 'British Virgin Islands', dial: '+1284' },
    { iso: 'BN', name: 'Brunei', dial: '+673' },
    { iso: 'BG', name: 'Bulgaria', dial: '+359' },
    { iso: 'BF', name: 'Burkina Faso', dial: '+226' },
    { iso: 'BI', name: 'Burundi', dial: '+257' },
    { iso: 'KH', name: 'Cambodia', dial: '+855' },
    { iso: 'CM', name: 'Cameroon', dial: '+237' },
    { iso: 'CA', name: 'Canada', dial: '+1' },
    { iso: 'CV', name: 'Cape Verde', dial: '+238' },
    { iso: 'KY', name: 'Cayman Islands', dial: '+1345' },
    { iso: 'CF', name: 'Central African Republic', dial: '+236' },
    { iso: 'TD', name: 'Chad', dial: '+235' },
    { iso: 'CL', name: 'Chile', dial: '+56' },
    { iso: 'CN', name: 'China', dial: '+86' },
    { iso: 'CX', name: 'Christmas Island', dial: '+61' },
    { iso: 'CC', name: 'Cocos Islands', dial: '+61' },
    { iso: 'CO', name: 'Colombia', dial: '+57' },
    { iso: 'KM', name: 'Comoros', dial: '+269' },
    { iso: 'CK', name: 'Cook Islands', dial: '+682' },
    { iso: 'CR', name: 'Costa Rica', dial: '+506' },
    { iso: 'HR', name: 'Croatia', dial: '+385' },
    { iso: 'CU', name: 'Cuba', dial: '+53' },
    { iso: 'CW', name: 'Curacao', dial: '+599' },
    { iso: 'CY', name: 'Cyprus', dial: '+357' },
    { iso: 'CZ', name: 'Czech Republic', dial: '+420' },
    { iso: 'CD', name: 'Democratic Republic of the Congo', dial: '+243' },
    { iso: 'DK', name: 'Denmark', dial: '+45' },
    { iso: 'DJ', name: 'Djibouti', dial: '+253' },
    { iso: 'DM', name: 'Dominica', dial: '+1767' },
    { iso: 'DO', name: 'Dominican Republic', dial: '+1' },
    { iso: 'TL', name: 'East Timor', dial: '+670' },
    { iso: 'EC', name: 'Ecuador', dial: '+593' },
    { iso: 'EG', name: 'Egypt', dial: '+20' },
    { iso: 'SV', name: 'El Salvador', dial: '+503' },
    { iso: 'GQ', name: 'Equatorial Guinea', dial: '+240' },
    { iso: 'ER', name: 'Eritrea', dial: '+291' },
    { iso: 'EE', name: 'Estonia', dial: '+372' },
    { iso: 'ET', name: 'Ethiopia', dial: '+251' },
    { iso: 'FK', name: 'Falkland Islands', dial: '+500' },
    { iso: 'FO', name: 'Faroe Islands', dial: '+298' },
    { iso: 'FJ', name: 'Fiji', dial: '+679' },
    { iso: 'FI', name: 'Finland', dial: '+358' },
    { iso: 'FR', name: 'France', dial: '+33' },
    { iso: 'PF', name: 'French Polynesia', dial: '+689' },
    { iso: 'GA', name: 'Gabon', dial: '+241' },
    { iso: 'GM', name: 'Gambia', dial: '+220' },
    { iso: 'GE', name: 'Georgia', dial: '+995' },
    { iso: 'DE', name: 'Germany', dial: '+49' },
    { iso: 'GH', name: 'Ghana', dial: '+233' },
    { iso: 'GI', name: 'Gibraltar', dial: '+350' },
    { iso: 'GR', name: 'Greece', dial: '+30' },
    { iso: 'GL', name: 'Greenland', dial: '+299' },
    { iso: 'GD', name: 'Grenada', dial: '+1473' },
    { iso: 'GU', name: 'Guam', dial: '+1671' },
    { iso: 'GT', name: 'Guatemala', dial: '+502' },
    { iso: 'GG', name: 'Guernsey', dial: '+44' },
    { iso: 'GN', name: 'Guinea', dial: '+224' },
    { iso: 'GW', name: 'Guinea-Bissau', dial: '+245' },
    { iso: 'GY', name: 'Guyana', dial: '+592' },
    { iso: 'HT', name: 'Haiti', dial: '+509' },
    { iso: 'HN', name: 'Honduras', dial: '+504' },
    { iso: 'HK', name: 'Hong Kong', dial: '+852' },
    { iso: 'HU', name: 'Hungary', dial: '+36' },
    { iso: 'IS', name: 'Iceland', dial: '+354' },
    { iso: 'IN', name: 'India', dial: '+91' },
    { iso: 'ID', name: 'Indonesia', dial: '+62' },
    { iso: 'IR', name: 'Iran', dial: '+98' },
    { iso: 'IQ', name: 'Iraq', dial: '+964' },
    { iso: 'IE', name: 'Ireland', dial: '+353' },
    { iso: 'IM', name: 'Isle of Man', dial: '+44' },
    { iso: 'IL', name: 'Israel', dial: '+972' },
    { iso: 'IT', name: 'Italy', dial: '+39' },
    { iso: 'CI', name: 'Ivory Coast', dial: '+225' },
    { iso: 'JM', name: 'Jamaica', dial: '+1876' },
    { iso: 'JP', name: 'Japan', dial: '+81' },
    { iso: 'JE', name: 'Jersey', dial: '+44' },
    { iso: 'JO', name: 'Jordan', dial: '+962' },
    { iso: 'KZ', name: 'Kazakhstan', dial: '+7' },
    { iso: 'KE', name: 'Kenya', dial: '+254' },
    { iso: 'KI', name: 'Kiribati', dial: '+686' },
    { iso: 'XK', name: 'Kosovo', dial: '+383' },
    { iso: 'KW', name: 'Kuwait', dial: '+965' },
    { iso: 'KG', name: 'Kyrgyzstan', dial: '+996' },
    { iso: 'LA', name: 'Laos', dial: '+856' },
    { iso: 'LV', name: 'Latvia', dial: '+371' },
    { iso: 'LB', name: 'Lebanon', dial: '+961' },
    { iso: 'LS', name: 'Lesotho', dial: '+266' },
    { iso: 'LR', name: 'Liberia', dial: '+231' },
    { iso: 'LY', name: 'Libya', dial: '+218' },
    { iso: 'LI', name: 'Liechtenstein', dial: '+423' },
    { iso: 'LT', name: 'Lithuania', dial: '+370' },
    { iso: 'LU', name: 'Luxembourg', dial: '+352' },
    { iso: 'MO', name: 'Macau', dial: '+853' },
    { iso: 'MK', name: 'Macedonia', dial: '+389' },
    { iso: 'MG', name: 'Madagascar', dial: '+261' },
    { iso: 'MW', name: 'Malawi', dial: '+265' },
    { iso: 'MY', name: 'Malaysia', dial: '+60' },
    { iso: 'MV', name: 'Maldives', dial: '+960' },
    { iso: 'ML', name: 'Mali', dial: '+223' },
    { iso: 'MT', name: 'Malta', dial: '+356' },
    { iso: 'MH', name: 'Marshall Islands', dial: '+692' },
    { iso: 'MR', name: 'Mauritania', dial: '+222' },
    { iso: 'MU', name: 'Mauritius', dial: '+230' },
    { iso: 'YT', name: 'Mayotte', dial: '+262' },
    { iso: 'MX', name: 'Mexico', dial: '+52' },
    { iso: 'FM', name: 'Micronesia', dial: '+691' },
    { iso: 'MD', name: 'Moldova', dial: '+373' },
    { iso: 'MC', name: 'Monaco', dial: '+377' },
    { iso: 'MN', name: 'Mongolia', dial: '+976' },
    { iso: 'ME', name: 'Montenegro', dial: '+382' },
    { iso: 'MS', name: 'Montserrat', dial: '+1664' },
    { iso: 'MA', name: 'Morocco', dial: '+212' },
    { iso: 'MZ', name: 'Mozambique', dial: '+258' },
    { iso: 'MM', name: 'Myanmar', dial: '+95' },
    { iso: 'NA', name: 'Namibia', dial: '+264' },
    { iso: 'NR', name: 'Nauru', dial: '+674' },
    { iso: 'NP', name: 'Nepal', dial: '+977' },
    { iso: 'NL', name: 'Netherlands', dial: '+31' },
    { iso: 'NC', name: 'New Caledonia', dial: '+687' },
    { iso: 'NZ', name: 'New Zealand', dial: '+64' },
    { iso: 'NI', name: 'Nicaragua', dial: '+505' },
    { iso: 'NE', name: 'Niger', dial: '+227' },
    { iso: 'NG', name: 'Nigeria', dial: '+234' },
    { iso: 'NU', name: 'Niue', dial: '+683' },
    { iso: 'KP', name: 'North Korea', dial: '+850' },
    { iso: 'MP', name: 'Northern Mariana Islands', dial: '+1670' },
    { iso: 'NO', name: 'Norway', dial: '+47' },
    { iso: 'OM', name: 'Oman', dial: '+968' },
    { iso: 'PK', name: 'Pakistan', dial: '+92' },
    { iso: 'PW', name: 'Palau', dial: '+680' },
    { iso: 'PS', name: 'Palestine', dial: '+970' },
    { iso: 'PA', name: 'Panama', dial: '+507' },
    { iso: 'PG', name: 'Papua New Guinea', dial: '+675' },
    { iso: 'PY', name: 'Paraguay', dial: '+595' },
    { iso: 'PE', name: 'Peru', dial: '+51' },
    { iso: 'PH', name: 'Philippines', dial: '+63' },
    { iso: 'PN', name: 'Pitcairn', dial: '+64' },
    { iso: 'PL', name: 'Poland', dial: '+48' },
    { iso: 'PT', name: 'Portugal', dial: '+351' },
    { iso: 'PR', name: 'Puerto Rico', dial: '+1' },
    { iso: 'QA', name: 'Qatar', dial: '+974' },
    { iso: 'CG', name: 'Republic of the Congo', dial: '+242' },
    { iso: 'RE', name: 'Reunion', dial: '+262' },
    { iso: 'RO', name: 'Romania', dial: '+40' },
    { iso: 'RU', name: 'Russia', dial: '+7' },
    { iso: 'RW', name: 'Rwanda', dial: '+250' },
    { iso: 'BL', name: 'Saint Barthelemy', dial: '+590' },
    { iso: 'SH', name: 'Saint Helena', dial: '+290' },
    { iso: 'KN', name: 'Saint Kitts and Nevis', dial: '+1869' },
    { iso: 'LC', name: 'Saint Lucia', dial: '+1758' },
    { iso: 'MF', name: 'Saint Martin', dial: '+590' },
    { iso: 'PM', name: 'Saint Pierre and Miquelon', dial: '+508' },
    { iso: 'VC', name: 'Saint Vincent and the Grenadines', dial: '+1784' },
    { iso: 'WS', name: 'Samoa', dial: '+685' },
    { iso: 'SM', name: 'San Marino', dial: '+378' },
    { iso: 'ST', name: 'Sao Tome and Principe', dial: '+239' },
    { iso: 'SA', name: 'Saudi Arabia', dial: '+966' },
    { iso: 'SN', name: 'Senegal', dial: '+221' },
    { iso: 'RS', name: 'Serbia', dial: '+381' },
    { iso: 'SC', name: 'Seychelles', dial: '+248' },
    { iso: 'SL', name: 'Sierra Leone', dial: '+232' },
    { iso: 'SG', name: 'Singapore', dial: '+65' },
    { iso: 'SX', name: 'Sint Maarten', dial: '+1721' },
    { iso: 'SK', name: 'Slovakia', dial: '+421' },
    { iso: 'SI', name: 'Slovenia', dial: '+386' },
    { iso: 'SB', name: 'Solomon Islands', dial: '+677' },
    { iso: 'SO', name: 'Somalia', dial: '+252' },
    { iso: 'ZA', name: 'South Africa', dial: '+27' },
    { iso: 'KR', name: 'South Korea', dial: '+82' },
    { iso: 'SS', name: 'South Sudan', dial: '+211' },
    { iso: 'ES', name: 'Spain', dial: '+34' },
    { iso: 'LK', name: 'Sri Lanka', dial: '+94' },
    { iso: 'SD', name: 'Sudan', dial: '+249' },
    { iso: 'SR', name: 'Suriname', dial: '+597' },
    { iso: 'SJ', name: 'Svalbard and Jan Mayen', dial: '+47' },
    { iso: 'SZ', name: 'Swaziland', dial: '+268' },
    { iso: 'SE', name: 'Sweden', dial: '+46' },
    { iso: 'CH', name: 'Switzerland', dial: '+41' },
    { iso: 'SY', name: 'Syria', dial: '+963' },
    { iso: 'TW', name: 'Taiwan', dial: '+886' },
    { iso: 'TJ', name: 'Tajikistan', dial: '+992' },
    { iso: 'TZ', name: 'Tanzania', dial: '+255' },
    { iso: 'TH', name: 'Thailand', dial: '+66' },
    { iso: 'TG', name: 'Togo', dial: '+228' },
    { iso: 'TK', name: 'Tokelau', dial: '+690' },
    { iso: 'TO', name: 'Tonga', dial: '+676' },
    { iso: 'TT', name: 'Trinidad and Tobago', dial: '+1868' },
    { iso: 'TN', name: 'Tunisia', dial: '+216' },
    { iso: 'TR', name: 'Turkey', dial: '+90' },
    { iso: 'TM', name: 'Turkmenistan', dial: '+993' },
    { iso: 'TC', name: 'Turks and Caicos Islands', dial: '+1649' },
    { iso: 'TV', name: 'Tuvalu', dial: '+688' },
    { iso: 'VI', name: 'U.S. Virgin Islands', dial: '+1340' },
    { iso: 'UG', name: 'Uganda', dial: '+256' },
    { iso: 'UA', name: 'Ukraine', dial: '+380' },
    { iso: 'AE', name: 'United Arab Emirates', dial: '+971' },
    { iso: 'GB', name: 'United Kingdom', dial: '+44' },
    { iso: 'US', name: 'United States', dial: '+1' },
    { iso: 'UY', name: 'Uruguay', dial: '+598' },
    { iso: 'UZ', name: 'Uzbekistan', dial: '+998' },
    { iso: 'VU', name: 'Vanuatu', dial: '+678' },
    { iso: 'VA', name: 'Vatican', dial: '+379' },
    { iso: 'VE', name: 'Venezuela', dial: '+58' },
    { iso: 'VN', name: 'Vietnam', dial: '+84' },
    { iso: 'WF', name: 'Wallis and Futuna', dial: '+681' },
    { iso: 'EH', name: 'Western Sahara', dial: '+212' },
    { iso: 'YE', name: 'Yemen', dial: '+967' },
    { iso: 'ZM', name: 'Zambia', dial: '+260' },
    { iso: 'ZW', name: 'Zimbabwe', dial: '+263' }
  ];

  // Pinned at the top of the dropdown for fast access on Indian-first traffic.
  var POPULAR = ['IN', 'US', 'GB', 'AE', 'CA', 'AU', 'SG', 'SA', 'QA', 'KW', 'OM', 'BH', 'NZ', 'DE'];

  var DEFAULT_ISO = 'IN';
  var DEFAULT_DIAL = '+91';

  // Where the visitor's device clock says they are, as a country. Built from
  // IANA zone.tab (plus the legacy names browsers still report, such as
  // Chrome's Asia/Calcutta) by region: 'City:ISO City:ISO ...'.
  // Regenerate from the tzdata package if a new zone ever appears; a missing
  // zone only means no guess, never a wrong one.
  var TZ_COUNTRY = {
    "Africa": 'Abidjan:CI Accra:GH Addis_Ababa:ET Algiers:DZ Asmara:ER Bamako:ML Bangui:CF Banjul:GM Bissau:GW Blantyre:MW Brazzaville:CG Bujumbura:BI Cairo:EG Casablanca:MA Ceuta:ES Conakry:GN Dakar:SN Dar_es_Salaam:TZ Djibouti:DJ Douala:CM El_Aaiun:EH Freetown:SL Gaborone:BW Harare:ZW Johannesburg:ZA Juba:SS Kampala:UG Khartoum:SD Kigali:RW Kinshasa:CD Lagos:NG Libreville:GA Lome:TG Luanda:AO Lubumbashi:CD Lusaka:ZM Malabo:GQ Maputo:MZ Maseru:LS Mbabane:SZ Mogadishu:SO Monrovia:LR Nairobi:KE Ndjamena:TD Niamey:NE Nouakchott:MR Ouagadougou:BF Porto-Novo:BJ Sao_Tome:ST Tripoli:LY Tunis:TN Windhoek:NA',
    "America": 'Adak:US Anchorage:US Anguilla:AI Antigua:AG Araguaina:BR Argentina/Buenos_Aires:AR Argentina/Catamarca:AR Argentina/ComodRivadavia:AR Argentina/Cordoba:AR Argentina/Jujuy:AR Argentina/La_Rioja:AR Argentina/Mendoza:AR Argentina/Rio_Gallegos:AR Argentina/Salta:AR Argentina/San_Juan:AR Argentina/San_Luis:AR Argentina/Tucuman:AR Argentina/Ushuaia:AR Aruba:AW Asuncion:PY Atikokan:CA Atka:US Bahia:BR Bahia_Banderas:MX Barbados:BB Belem:BR Belize:BZ Blanc-Sablon:CA Boa_Vista:BR Bogota:CO Boise:US Buenos_Aires:AR Cambridge_Bay:CA Campo_Grande:BR Cancun:MX Caracas:VE Catamarca:AR Cayenne:GF Cayman:KY Chicago:US Chihuahua:MX Ciudad_Juarez:MX Cordoba:AR Costa_Rica:CR Coyhaique:CL Creston:CA Cuiaba:BR Curacao:CW Danmarkshavn:GL Dawson:CA Dawson_Creek:CA Denver:US Detroit:US Dominica:DM Edmonton:CA Eirunepe:BR El_Salvador:SV Ensenada:MX Fort_Nelson:CA Fort_Wayne:US Fortaleza:BR Glace_Bay:CA Godthab:GL Goose_Bay:CA Grand_Turk:TC Grenada:GD Guadeloupe:GP Guatemala:GT Guayaquil:EC Guyana:GY Halifax:CA Havana:CU Hermosillo:MX Indiana/Indianapolis:US Indiana/Knox:US Indiana/Marengo:US Indiana/Petersburg:US Indiana/Tell_City:US Indiana/Vevay:US Indiana/Vincennes:US Indiana/Winamac:US Indianapolis:US Inuvik:CA Iqaluit:CA Jamaica:JM Jujuy:AR Juneau:US Kentucky/Louisville:US Kentucky/Monticello:US Knox_IN:US Kralendijk:BQ La_Paz:BO Lima:PE Los_Angeles:US Louisville:US Lower_Princes:SX Maceio:BR Managua:NI Manaus:BR Marigot:MF Martinique:MQ Matamoros:MX Mazatlan:MX Mendoza:AR Menominee:US Merida:MX Metlakatla:US Mexico_City:MX Miquelon:PM Moncton:CA Monterrey:MX Montevideo:UY Montserrat:MS Nassau:BS New_York:US Nome:US Noronha:BR North_Dakota/Beulah:US North_Dakota/Center:US North_Dakota/New_Salem:US Nuuk:GL Ojinaga:MX Panama:PA Pangnirtung:CA Paramaribo:SR Phoenix:US Port-au-Prince:HT Port_of_Spain:TT Porto_Acre:BR Porto_Velho:BR Puerto_Rico:PR Punta_Arenas:CL Rainy_River:CA Rankin_Inlet:CA Recife:BR Regina:CA Resolute:CA Rio_Branco:BR Rosario:AR Santa_Isabel:MX Santarem:BR Santiago:CL Santo_Domingo:DO Sao_Paulo:BR Scoresbysund:GL Shiprock:US Sitka:US St_Barthelemy:BL St_Johns:CA St_Kitts:KN St_Lucia:LC St_Thomas:VI St_Vincent:VC Swift_Current:CA Tegucigalpa:HN Thule:GL Tijuana:MX Toronto:CA Tortola:VG Vancouver:CA Whitehorse:CA Winnipeg:CA Yakutat:US Yellowknife:CA',
    "Asia": 'Aden:YE Almaty:KZ Amman:JO Anadyr:RU Aqtau:KZ Aqtobe:KZ Ashgabat:TM Ashkhabad:TM Atyrau:KZ Baghdad:IQ Bahrain:BH Baku:AZ Bangkok:TH Barnaul:RU Beirut:LB Bishkek:KG Brunei:BN Calcutta:IN Chita:RU Choibalsan:MN Chongqing:CN Chungking:CN Colombo:LK Dacca:BD Damascus:SY Dhaka:BD Dili:TL Dubai:AE Dushanbe:TJ Famagusta:CY Gaza:PS Harbin:CN Hebron:PS Ho_Chi_Minh:VN Hong_Kong:HK Hovd:MN Irkutsk:RU Istanbul:TR Jakarta:ID Jayapura:ID Jerusalem:IL Kabul:AF Kamchatka:RU Karachi:PK Kashgar:CN Kathmandu:NP Katmandu:NP Khandyga:RU Kolkata:IN Krasnoyarsk:RU Kuala_Lumpur:MY Kuching:MY Kuwait:KW Macao:MO Macau:MO Magadan:RU Makassar:ID Manila:PH Muscat:OM Nicosia:CY Novokuznetsk:RU Novosibirsk:RU Omsk:RU Oral:KZ Phnom_Penh:KH Pontianak:ID Pyongyang:KP Qatar:QA Qostanay:KZ Qyzylorda:KZ Riyadh:SA Saigon:VN Sakhalin:RU Samarkand:UZ Seoul:KR Shanghai:CN Singapore:SG Srednekolymsk:RU Taipei:TW Tashkent:UZ Tbilisi:GE Tehran:IR Tel_Aviv:IL Thimbu:BT Thimphu:BT Tokyo:JP Tomsk:RU Ujung_Pandang:ID Ulaanbaatar:MN Ulan_Bator:MN Urumqi:CN Ust-Nera:RU Vientiane:LA Vladivostok:RU Yakutsk:RU Yangon:MM Yekaterinburg:RU Yerevan:AM',
    "Atlantic": 'Azores:PT Bermuda:BM Canary:ES Cape_Verde:CV Faeroe:FO Faroe:FO Madeira:PT Reykjavik:IS South_Georgia:GS St_Helena:SH Stanley:FK',
    "Australia": 'ACT:AU Adelaide:AU Brisbane:AU Broken_Hill:AU Canberra:AU Currie:AU Darwin:AU Eucla:AU Hobart:AU LHI:AU Lindeman:AU Lord_Howe:AU Melbourne:AU NSW:AU North:AU Perth:AU Queensland:AU South:AU Sydney:AU Tasmania:AU Victoria:AU West:AU Yancowinna:AU',
    "Brazil": 'Acre:BR DeNoronha:BR East:BR West:BR',
    "Canada": 'Atlantic:CA Central:CA Mountain:CA Newfoundland:CA Pacific:CA Saskatchewan:CA Yukon:CA',
    "Chile": 'Continental:CL EasterIsland:CL',
    "Europe": 'Amsterdam:NL Andorra:AD Astrakhan:RU Athens:GR Belgrade:RS Berlin:DE Bratislava:SK Brussels:BE Bucharest:RO Budapest:HU Busingen:DE Chisinau:MD Copenhagen:DK Dublin:IE Gibraltar:GI Guernsey:GG Helsinki:FI Isle_of_Man:IM Istanbul:TR Jersey:JE Kaliningrad:RU Kiev:UA Kirov:RU Kyiv:UA Lisbon:PT Ljubljana:SI London:GB Luxembourg:LU Madrid:ES Malta:MT Mariehamn:AX Minsk:BY Monaco:MC Moscow:RU Nicosia:CY Oslo:NO Paris:FR Podgorica:ME Prague:CZ Riga:LV Rome:IT Samara:RU San_Marino:SM Sarajevo:BA Saratov:RU Simferopol:UA Skopje:MK Sofia:BG Stockholm:SE Tallinn:EE Tirane:AL Tiraspol:MD Ulyanovsk:RU Uzhgorod:UA Vaduz:LI Vatican:VA Vienna:AT Vilnius:LT Volgograd:RU Warsaw:PL Zagreb:HR Zaporozhye:UA Zurich:CH',
    "Indian": 'Antananarivo:MG Chagos:IO Christmas:CX Cocos:CC Comoro:KM Kerguelen:TF Mahe:SC Maldives:MV Mauritius:MU Mayotte:YT Reunion:RE',
    "Mexico": 'BajaNorte:MX BajaSur:MX General:MX',
    "Pacific": 'Apia:WS Auckland:NZ Bougainville:PG Chatham:NZ Chuuk:FM Easter:CL Efate:VU Enderbury:KI Fakaofo:TK Fiji:FJ Funafuti:TV Galapagos:EC Gambier:PF Guadalcanal:SB Guam:GU Honolulu:US Johnston:US Kanton:KI Kiritimati:KI Kosrae:FM Kwajalein:MH Majuro:MH Marquesas:PF Midway:UM Nauru:NR Niue:NU Norfolk:NF Noumea:NC Pago_Pago:AS Palau:PW Pitcairn:PN Pohnpei:FM Port_Moresby:PG Rarotonga:CK Saipan:MP Tahiti:PF Tarawa:KI Tongatapu:TO Wake:UM Wallis:WF',
    "US": 'Alaska:US Aleutian:US Central:US East-Indiana:US Eastern:US Hawaii:US Indiana-Starke:US Michigan:US Mountain:US Pacific:US'
  };

  var STYLE_ID = 'mac-country-code-selector-styles';
  var PROCESSED_ATTR = 'data-country-injected';

  function isoToFlag(iso) {
    if (!iso || iso.length !== 2) return '🌐';
    return iso.toUpperCase().replace(/./g, function (c) {
      return String.fromCodePoint(0x1F1A5 + c.charCodeAt(0));
    });
  }

  function getCountryByIso(iso) {
    for (var i = 0; i < COUNTRIES.length; i++) {
      if (COUNTRIES[i].iso === iso) return COUNTRIES[i];
    }
    return null;
  }

  // ───────────────────── starting country ─────────────────────
  //
  // Which country the picker starts on. It used to be India for everyone, and
  // the country landing pages did not load the picker at all: they sent their
  // own country (+31 on a Dutch page) whoever was typing. A visitor in North
  // Carolina reading the Netherlands page was filed as "+31 252 222 8345", a
  // number nobody can ring (27 Sep 2026).
  //
  // Best evidence first:
  //   1. the visitor's device timezone, which is where their phone most
  //      likely is (an Indian parent reading the Dutch page stays on +91);
  //   2. the country the page is about, <meta name="mac-lead-country">,
  //      stamped at build time by scripts/inline-components.js;
  //   3. India, the home market.
  function timezoneCountry() {
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      var slash = tz.indexOf('/');
      if (slash < 1) return null;
      var list = TZ_COUNTRY[tz.slice(0, slash)];
      if (!list) return null;
      var city = tz.slice(slash + 1);
      var at = (' ' + list + ' ').indexOf(' ' + city + ':');
      return at === -1 ? null : getCountryByIso(list.substr(at + city.length + 1, 2));
    } catch (e) { return null; }
  }

  function pageCountry() {
    var meta = document.querySelector('meta[name="mac-lead-country"]');
    var iso = meta ? String(meta.getAttribute('content') || '').trim().toUpperCase() : '';
    return iso ? getCountryByIso(iso) : null;
  }

  var startCache = null;
  /** { country, source } - source is 'timezone', 'page' or 'default'. */
  function startCountry() {
    if (startCache) return startCache;
    var tz = timezoneCountry();
    if (tz) return (startCache = { country: tz, source: 'timezone' });
    var page = pageCountry();
    if (page) return (startCache = { country: page, source: 'page' });
    return (startCache = { country: getCountryByIso(DEFAULT_ISO), source: 'default' });
  }

  // Multiple countries share dial codes (+1 = US/Canada/Caribbean, +7 = RU/KZ,
  // +44 = GB/Guernsey/Jersey/Isle of Man, etc). When the user types a bare
  // shared code we pick the largest market by default. They can still open
  // the picker to override.
  var DIAL_PREFERRED_ISO = { '1': 'US', '7': 'RU', '44': 'GB', '61': 'AU', '212': 'MA', '262': 'RE', '590': 'GP', '599': 'CW' };

  // Detect a country from a freshly typed / pasted phone value beginning with
  // "+". Tries the longest possible dial-code prefix first so "+1284" resolves
  // to British Virgin Islands rather than USA. Returns null when no prefix
  // matches or when the value is too short to disambiguate.
  function detectCountryFromValue(value) {
    if (!value || value.charAt(0) !== '+') return null;
    var digits = value.replace(/\D/g, '');
    if (digits.length < 2) return null;
    for (var len = Math.min(4, digits.length); len >= 1; len--) {
      var prefix = digits.substring(0, len);
      // For ambiguous shared codes, return the preferred country directly so
      // we don't pick e.g. Kazakhstan over Russia just because of array order.
      var preferredIso = DIAL_PREFERRED_ISO[prefix];
      if (preferredIso) {
        var preferred = getCountryByIso(preferredIso);
        if (preferred && preferred.dial === '+' + prefix) return preferred;
      }
      for (var i = 0; i < COUNTRIES.length; i++) {
        if (COUNTRIES[i].dial === '+' + prefix) return COUNTRIES[i];
      }
    }
    return null;
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      // Wrapper that keeps the trigger and the input together as one pill.
      // align-items:stretch makes the button match the input's height even
      // when the input has padding/borders defined by the host page.
      '.mac-cc-wrap{position:relative;display:flex;align-items:stretch;width:100%;gap:0;}',
      '.mac-cc-wrap:not(.mac-cc-narrow) > input[type="tel"]{flex:1;min-width:0;border-top-left-radius:0!important;border-bottom-left-radius:0!important;border-left:0!important;}',
      // A column too narrow for button and number side by side (two fields to
      // a row on a phone) stacks them, so the number box is never squeezed to
      // a sliver. The input keeps the page's own border in this layout.
      '.mac-cc-wrap.mac-cc-narrow{flex-direction:column;}',
      '.mac-cc-wrap.mac-cc-narrow > .mac-cc-btn{min-width:0;min-height:38px;border-right:1px solid currentColor;border-bottom:0;border-radius:8px 8px 0 0;}',
      '.mac-cc-wrap.mac-cc-narrow > input[type="tel"]{width:100%;min-width:0;border-top-left-radius:0!important;border-top-right-radius:0!important;}',

      // Trigger button, picks up surrounding border color via currentColor and
      // matches the input height via align-self:stretch + align-items:center.
      '.mac-cc-btn{display:inline-flex;align-items:center;align-self:stretch;gap:8px;border:1px solid currentColor;border-right:0;background:transparent;color:inherit;font:inherit;cursor:pointer;padding:0 12px;border-radius:8px 0 0 8px;min-width:104px;min-height:44px;line-height:1.2;outline:none;white-space:nowrap;opacity:.95;transition:background .15s ease,opacity .15s ease;-webkit-tap-highlight-color:transparent;touch-action:manipulation;}',
      '.mac-cc-btn:hover,.mac-cc-btn:focus-visible{opacity:1;background:rgba(168,85,247,.08);}',
      '.mac-cc-btn:active{background:rgba(168,85,247,.16);}',
      '.mac-cc-btn .mac-cc-flag{font-size:18px;line-height:1;}',
      '.mac-cc-btn .mac-cc-dial{font-weight:600;font-size:.95em;}',
      '.mac-cc-btn .mac-cc-caret{margin-left:auto;width:10px;height:10px;flex-shrink:0;opacity:.7;}',

      // The custom dropdown, fixed positioned so it always escapes overflow.
      '.mac-cc-pop{position:fixed;z-index:2147483647;width:360px;max-width:calc(100vw - 24px);background:var(--mac-cc-pop-bg,#fff);color:var(--mac-cc-pop-fg,#0f172a);border:1px solid var(--mac-cc-pop-border,rgba(15,23,42,.12));border-radius:12px;box-shadow:0 24px 48px rgba(15,23,42,.18),0 4px 12px rgba(15,23,42,.08);overflow:hidden;display:flex;flex-direction:column;animation:mac-cc-fade .14s ease-out;}',
      '@keyframes mac-cc-fade{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:translateY(0);}}',
      '.mac-cc-pop[hidden]{display:none;}',
      '.mac-cc-search{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid var(--mac-cc-pop-border,rgba(15,23,42,.08));}',
      '.mac-cc-search svg{width:16px;height:16px;flex-shrink:0;opacity:.55;}',
      // Forcing 16px font on the search input prevents iOS Safari from auto-zooming.
      '.mac-cc-search input{flex:1;border:0;outline:none;background:transparent;color:inherit;font:inherit;font-size:16px;padding:6px 0;min-width:0;-webkit-appearance:none;}',
      '.mac-cc-search input::placeholder{color:var(--mac-cc-pop-muted,#64748b);}',
      // Smooth, contained scrolling that won't trigger pull-to-refresh or
      // bleed scroll into the page underneath. will-change tells the browser
      // to promote the list to its own layer for jank-free scrolling.
      '.mac-cc-list{list-style:none;margin:0;padding:6px 0;max-height:320px;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;scroll-behavior:smooth;will-change:scroll-position;contain:content;}',
      '.mac-cc-list::-webkit-scrollbar{width:10px;}',
      '.mac-cc-list::-webkit-scrollbar-track{background:transparent;}',
      '.mac-cc-list::-webkit-scrollbar-thumb{background:var(--mac-cc-pop-border,rgba(15,23,42,.18));border-radius:8px;border:2px solid var(--mac-cc-pop-bg,#fff);}',
      '.mac-cc-list::-webkit-scrollbar-thumb:hover{background:var(--mac-cc-pop-muted,rgba(15,23,42,.32));}',
      '.mac-cc-hidden{display:none!important;}',
      // 44-px tap target on touch devices.
      '.mac-cc-item{display:flex;align-items:center;gap:12px;padding:11px 14px;min-height:44px;cursor:pointer;font-size:15px;line-height:1.3;border:0;background:transparent;color:inherit;width:100%;text-align:left;-webkit-tap-highlight-color:transparent;}',
      '.mac-cc-item:hover,.mac-cc-item.is-active{background:var(--mac-cc-pop-hover,rgba(168,85,247,.12));}',
      '.mac-cc-item:active{background:var(--mac-cc-pop-hover,rgba(168,85,247,.22));}',
      '.mac-cc-item .mac-cc-flag{font-size:20px;line-height:1;flex-shrink:0;}',
      '.mac-cc-item .mac-cc-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.mac-cc-item .mac-cc-dial{color:var(--mac-cc-pop-muted,#64748b);font-variant-numeric:tabular-nums;flex-shrink:0;}',
      '.mac-cc-item.is-selected{font-weight:600;}',
      '.mac-cc-item.is-selected .mac-cc-dial{color:inherit;}',
      '.mac-cc-divider{height:1px;background:var(--mac-cc-pop-border,rgba(15,23,42,.08));margin:6px 0;list-style:none;}',
      '.mac-cc-empty{padding:18px 14px;text-align:center;color:var(--mac-cc-pop-muted,#64748b);font-size:14px;}',

      // Backdrop only used in mobile bottom-sheet mode.
      '.mac-cc-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.45);z-index:2147483646;animation:mac-cc-backdrop-in .15s ease-out;}',
      '@keyframes mac-cc-backdrop-in{from{opacity:0;}to{opacity:1;}}',

      // Dark-theme override applied automatically via .mac-cc-pop--dark.
      '.mac-cc-pop--dark{--mac-cc-pop-bg:#0f172a;--mac-cc-pop-fg:#f8fafc;--mac-cc-pop-border:rgba(255,255,255,.10);--mac-cc-pop-muted:#94a3b8;--mac-cc-pop-hover:rgba(168,85,247,.22);}',

      // Mobile bottom-sheet: full-width at the bottom edge with safe-area padding.
      '@media (max-width:560px){',
        '.mac-cc-btn{min-width:88px;padding:0 10px;font-size:14px;}',
        '.mac-cc-btn .mac-cc-flag{font-size:17px;}',
        '.mac-cc-pop{position:fixed;left:0;right:0;bottom:0;top:auto;width:100%;max-width:100%;border-radius:18px 18px 0 0;animation:mac-cc-sheet .22s cubic-bezier(.25,.8,.4,1);padding-bottom:env(safe-area-inset-bottom,0);}',
        '.mac-cc-pop::before{content:"";display:block;width:44px;height:5px;background:var(--mac-cc-pop-border,rgba(15,23,42,.18));border-radius:99px;margin:8px auto 4px;}',
        '.mac-cc-list{max-height:60vh;}',
        '.mac-cc-search{padding:10px 16px 12px;}',
        '.mac-cc-search input{font-size:16px;padding:8px 0;}',
        '.mac-cc-item{font-size:15.5px;padding:13px 16px;}',
      '}',
      '@keyframes mac-cc-sheet{from{transform:translateY(100%);}to{transform:translateY(0);}}',

      // Body scroll lock: JS sets position:fixed + saved scroll offset. We
      // also clamp overflow as a belt-and-braces measure for non-iOS browsers.
      // Critically we do NOT touch touch-action here: scroll inside the
      // popover relies on default touch behaviour to feel native.
      'body.mac-cc-locked{overflow:hidden!important;}',

      // Inline mode: when the input lives in a pre-styled wrapper that already
      // has its own border (e.g. the navbar callback modal). We blend in.
      '.mac-cc-inline .mac-cc-btn{border:0;border-right:2px solid rgba(0,0,0,.08);border-radius:0;min-height:0;padding:0 14px;}',
      '.mac-cc-inline > input[type="tel"]{border-radius:0!important;border:0!important;}',

      // Honour reduced-motion preference.
      '@media (prefers-reduced-motion:reduce){.mac-cc-pop,.mac-cc-backdrop{animation:none;}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // Rough light/dark detection by looking at the closest container's
  // computed background color, keeps the popover legible on dark themes.
  function isDarkContext(node) {
    var el = node;
    while (el && el !== document.documentElement) {
      var bg = getComputedStyle(el).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        var m = bg.match(/rgba?\(([^)]+)\)/);
        if (m) {
          var parts = m[1].split(',').map(function (s) { return parseFloat(s); });
          // If alpha is < 0.2 keep walking up. It's effectively transparent.
          if (parts.length === 4 && parts[3] < 0.2) {
            el = el.parentElement;
            continue;
          }
          var lum = 0.2126 * parts[0] + 0.7152 * parts[1] + 0.0722 * parts[2];
          return lum < 128;
        }
      }
      el = el.parentElement;
    }
    // Fall back to body color.
    var c = getComputedStyle(document.body).color;
    var cm = c.match(/rgba?\(([^)]+)\)/);
    if (cm) {
      var p = cm[1].split(',').map(parseFloat);
      var l = 0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2];
      return l > 160;
    }
    return false;
  }

  // ───────────────────── popover (single, reused) ─────────────────────
  var popover = null;
  var backdrop = null;
  var popoverState = null;

  function isMobileViewport() {
    return window.matchMedia && window.matchMedia('(max-width:560px)').matches;
  }

  // All row buttons keyed by ISO so we can toggle visibility instead of
  // tearing down and rebuilding the DOM on every keystroke.
  var allRows = [];           // [{ iso, dial, name, lower, dialDigits, li, btn }]
  var popularRows = [];       // same shape, references rendered in the popular section
  var dividerEl = null;
  var emptyEl = null;

  function buildPopover() {
    if (popover) return popover;
    popover = document.createElement('div');
    popover.className = 'mac-cc-pop';
    popover.setAttribute('role', 'dialog');
    popover.setAttribute('aria-label', 'Choose country code');
    popover.hidden = true;
    popover.innerHTML =
      '<div class="mac-cc-search">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
        '<input type="text" placeholder="Search country or code…" autocomplete="off" spellcheck="false" inputmode="search" />' +
      '</div>' +
      '<ul class="mac-cc-list" role="listbox"></ul>';
    document.body.appendChild(popover);

    var list = popover.querySelector('.mac-cc-list');

    // Build every country row exactly once and stash references for filtering.
    var frag = document.createDocumentFragment();

    // Popular section, pinned at the top.
    for (var p = 0; p < POPULAR.length; p++) {
      var pc = getCountryByIso(POPULAR[p]);
      if (!pc) continue;
      var pr = createRow(pc, true);
      popularRows.push(pr);
      frag.appendChild(pr.li);
    }
    dividerEl = document.createElement('li');
    dividerEl.className = 'mac-cc-divider';
    dividerEl.setAttribute('role', 'separator');
    frag.appendChild(dividerEl);

    // Full alphabetical list.
    var sorted = COUNTRIES.slice().sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    for (var i = 0; i < sorted.length; i++) {
      var r = createRow(sorted[i], false);
      allRows.push(r);
      frag.appendChild(r.li);
    }

    emptyEl = document.createElement('li');
    emptyEl.className = 'mac-cc-empty mac-cc-hidden';
    emptyEl.textContent = 'No matches';
    frag.appendChild(emptyEl);

    list.appendChild(frag);

    // Single delegated click handler, far cheaper than 240+ listeners.
    list.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.mac-cc-item');
      if (!btn || !list.contains(btn)) return;
      var iso = btn.dataset.iso;
      var picked = getCountryByIso(iso);
      if (popoverState && picked && typeof popoverState.onPick === 'function') {
        popoverState.onPick(picked);
      }
      closePopover();
    });
    list.addEventListener('mouseover', function (e) {
      var btn = e.target.closest && e.target.closest('.mac-cc-item');
      if (!btn) return;
      var prev = list.querySelector('.is-active');
      if (prev && prev !== btn) prev.classList.remove('is-active');
      btn.classList.add('is-active');
    });

    var input = popover.querySelector('.mac-cc-search input');

    // Debounce filtering with rAF so we coalesce rapid keystrokes into one
    // paint, keeps the UI buttery on low-end Android.
    var pendingFrame = null;
    input.addEventListener('input', function () {
      if (pendingFrame) cancelAnimationFrame(pendingFrame);
      pendingFrame = requestAnimationFrame(function () {
        pendingFrame = null;
        applyFilter(input.value.trim().toLowerCase());
      });
    });
    input.addEventListener('keydown', function (e) {
      var visible = getVisibleRows();
      var activeIdx = -1;
      for (var k = 0; k < visible.length; k++) {
        if (visible[k].btn.classList.contains('is-active')) { activeIdx = k; break; }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeIdx >= 0) visible[activeIdx].btn.classList.remove('is-active');
        var next = visible[Math.min(visible.length - 1, activeIdx + 1)];
        if (next) { next.btn.classList.add('is-active'); next.btn.scrollIntoView({ block: 'nearest' }); }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeIdx >= 0) visible[activeIdx].btn.classList.remove('is-active');
        var prev = visible[Math.max(0, activeIdx - 1)];
        if (prev) { prev.btn.classList.add('is-active'); prev.btn.scrollIntoView({ block: 'nearest' }); }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        var pick = activeIdx >= 0 ? visible[activeIdx] : visible[0];
        if (pick) pick.btn.click();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closePopover();
      }
    });

    document.addEventListener('mousedown', function (e) {
      if (!popoverState) return;
      if (popover.contains(e.target)) return;
      if (backdrop && backdrop.contains(e.target)) return;
      if (popoverState.btn.contains(e.target)) return;
      closePopover();
    });
    // iOS sometimes skips synthesised mousedown on tap-outside, so cover
    // both for reliable dismissal.
    document.addEventListener('touchstart', function (e) {
      if (!popoverState) return;
      if (popover.contains(e.target)) return;
      if (backdrop && backdrop.contains(e.target)) return;
      if (popoverState.btn.contains(e.target)) return;
      closePopover();
    }, { passive: true });

    // Close on desktop viewport changes; on mobile the bottom sheet stays in
    // place when the on-screen keyboard appears (resize fires when keyboard
    // shows, which would otherwise dismiss the picker mid-search).
    window.addEventListener('resize', function () {
      if (!isMobileViewport()) closePopover();
    });
    window.addEventListener('scroll', function () {
      if (!isMobileViewport()) closePopover();
    }, true);
    window.addEventListener('orientationchange', closePopover);

    return popover;
  }

  function createRow(country, isPopular) {
    var li = document.createElement('li');
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mac-cc-item';
    btn.dataset.iso = country.iso;
    btn.innerHTML =
      '<span class="mac-cc-flag" aria-hidden="true">' + isoToFlag(country.iso) + '</span>' +
      '<span class="mac-cc-name">' + country.name + '</span>' +
      '<span class="mac-cc-dial">' + country.dial + '</span>';
    li.appendChild(btn);
    return {
      iso: country.iso,
      name: country.name,
      dial: country.dial,
      lower: country.name.toLowerCase(),
      dialDigits: country.dial.replace('+', ''),
      isPopular: !!isPopular,
      li: li,
      btn: btn
    };
  }

  function setRowsHidden(rows, hidden) {
    for (var i = 0; i < rows.length; i++) {
      var li = rows[i].li;
      var isHidden = li.classList.contains('mac-cc-hidden');
      if (hidden && !isHidden) li.classList.add('mac-cc-hidden');
      else if (!hidden && isHidden) li.classList.remove('mac-cc-hidden');
    }
  }

  function applyFilter(query) {
    if (!popover) return;
    var list = popover.querySelector('.mac-cc-list');

    // Clear keyboard highlight whenever the filter changes.
    var prevActive = list.querySelector('.is-active');
    if (prevActive) prevActive.classList.remove('is-active');

    if (!query) {
      // Empty query: show popular section + divider + every country.
      setRowsHidden(popularRows, false);
      dividerEl.classList.remove('mac-cc-hidden');
      setRowsHidden(allRows, false);
      emptyEl.classList.add('mac-cc-hidden');
      list.scrollTop = 0;
      return;
    }

    // Hide popular section + divider while searching to keep the result
    // list deterministic and easy to scan.
    setRowsHidden(popularRows, true);
    dividerEl.classList.add('mac-cc-hidden');

    var noPlus = query.replace(/^\+/, '');
    var anyMatch = false;
    for (var i = 0; i < allRows.length; i++) {
      var r = allRows[i];
      var match =
        r.lower.indexOf(query) !== -1 ||
        r.iso.toLowerCase().indexOf(query) !== -1 ||
        r.dialDigits.indexOf(noPlus) === 0;
      if (match) {
        r.li.classList.remove('mac-cc-hidden');
        anyMatch = true;
      } else {
        r.li.classList.add('mac-cc-hidden');
      }
    }

    if (anyMatch) emptyEl.classList.add('mac-cc-hidden');
    else emptyEl.classList.remove('mac-cc-hidden');

    list.scrollTop = 0;
  }

  function getVisibleRows() {
    var out = [];
    if (!popover) return out;
    var sections = popularRows.concat(allRows);
    for (var i = 0; i < sections.length; i++) {
      if (!sections[i].li.classList.contains('mac-cc-hidden')) out.push(sections[i]);
    }
    return out;
  }

  function markSelected(iso) {
    var rows = popularRows.concat(allRows);
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].iso === iso) rows[i].btn.classList.add('is-selected');
      else rows[i].btn.classList.remove('is-selected');
    }
  }

  // iOS Safari ignores body{overflow:hidden}, so we save the scroll position
  // and pin the body with position:fixed; restore both on close. Done only on
  // mobile where we render the bottom-sheet; desktop relies on the lighter
  // overflow:hidden rule.
  var savedScrollY = 0;
  function lockBodyScroll() {
    savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.classList.add('mac-cc-locked');
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + savedScrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }
  function unlockBodyScroll() {
    if (!document.body.classList.contains('mac-cc-locked')) return;
    document.body.classList.remove('mac-cc-locked');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    if (savedScrollY) window.scrollTo(0, savedScrollY);
    savedScrollY = 0;
  }

  function openPopover(state) {
    buildPopover();
    popoverState = state;

    // Theme based on the surrounding form, not the page.
    if (isDarkContext(state.btn)) popover.classList.add('mac-cc-pop--dark');
    else popover.classList.remove('mac-cc-pop--dark');

    // Refresh the "selected" highlight without rebuilding the list.
    markSelected(state.iso);

    var mobile = isMobileViewport();

    if (mobile) {
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mac-cc-backdrop';
        backdrop.addEventListener('click', closePopover);
      }
      if (!backdrop.parentNode) document.body.appendChild(backdrop);
      lockBodyScroll();
    }

    popover.hidden = false;

    if (mobile) {
      popover.style.top = '';
      popover.style.left = '';
      popover.style.right = '';
      popover.style.bottom = '';
    } else {
      var rect = state.btn.getBoundingClientRect();
      var vw = window.innerWidth, vh = window.innerHeight;
      var popW = popover.offsetWidth, popH = popover.offsetHeight;
      var top = rect.bottom + 6;
      if (top + popH > vh - 8) top = Math.max(8, rect.top - popH - 6);
      var left = rect.left;
      if (left + popW > vw - 8) left = Math.max(8, vw - popW - 8);
      popover.style.top = top + 'px';
      popover.style.left = left + 'px';
      popover.style.right = '';
      popover.style.bottom = '';
    }

    var input = popover.querySelector('.mac-cc-search input');
    input.value = '';
    applyFilter('');

    // Scroll the currently-selected row into view if it's outside the
    // viewport (e.g. user opened the picker after switching to Zambia).
    var list = popover.querySelector('.mac-cc-list');
    var selected = list.querySelector('.mac-cc-item.is-selected');
    if (selected) {
      // Use 'auto' to avoid janky animation on open; we just want it visible.
      var prevBehavior = list.style.scrollBehavior;
      list.style.scrollBehavior = 'auto';
      try { selected.scrollIntoView({ block: 'center' }); } catch (e) {}
      list.style.scrollBehavior = prevBehavior;
    }

    // Don't auto-focus the search on mobile, the keyboard would shove the
    // sheet around. Users can tap into the input if they want to type.
    if (!mobile) setTimeout(function () { input.focus(); }, 0);
  }

  function closePopover() {
    if (!popover || popover.hidden) return;
    popover.hidden = true;
    if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    unlockBodyScroll();
    popoverState = null;
  }

  // ───────────────────── per-input attach ─────────────────────
  function looksLikePhoneField(input) {
    var hay = [
      input.id || '',
      input.name || '',
      input.placeholder || '',
      input.getAttribute('aria-label') || '',
      input.getAttribute('autocomplete') || ''
    ].join(' ').toLowerCase();

    if (/(phone|mobile|whatsapp|contact|callback|tel\b)/.test(hay)) return true;

    var maxLen = parseInt(input.getAttribute('maxlength') || '0', 10);
    if (maxLen >= 10 && maxLen <= 15) return true;

    return false;
  }

  function shouldSkip(input) {
    if (input.getAttribute(PROCESSED_ATTR) === '1') return true;
    if (input.hasAttribute('data-no-country-code')) return true;
    if (input.closest('[data-no-country-code]')) return true;
    if (input.type !== 'tel') return true;
    if (!looksLikePhoneField(input)) return true;
    return false;
  }

  function buildButton(country) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mac-cc-btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-label', 'Country code: ' + country.name + ' ' + country.dial);
    btn.innerHTML =
      '<span class="mac-cc-flag" aria-hidden="true">' + isoToFlag(country.iso) + '</span>' +
      '<span class="mac-cc-dial">' + country.dial + '</span>' +
      '<svg class="mac-cc-caret" viewBox="0 0 12 8" aria-hidden="true"><path fill="currentColor" d="M6 8L0 0h12z"/></svg>';
    return btn;
  }

  function setButtonState(btn, country) {
    btn.querySelector('.mac-cc-flag').textContent = isoToFlag(country.iso);
    btn.querySelector('.mac-cc-dial').textContent = country.dial;
    btn.setAttribute('aria-label', 'Country code: ' + country.name + ' ' + country.dial);
  }

  function ensureHiddenSiblings(input) {
    if (!input.id) input.id = 'mac-tel-' + Math.random().toString(36).slice(2, 9);
    var parent = input.parentNode;
    var dial = parent.querySelector('input[type="hidden"][data-cc-for="' + input.id + '"][name="countryCode"]');
    var iso  = parent.querySelector('input[type="hidden"][data-cc-for="' + input.id + '"][name="countryIso"]');
    var name = parent.querySelector('input[type="hidden"][data-cc-for="' + input.id + '"][name="countryName"]');

    if (!dial) {
      dial = document.createElement('input');
      dial.type = 'hidden';
      dial.name = 'countryCode';
      dial.dataset.ccFor = input.id;
      parent.appendChild(dial);
    }
    if (!iso) {
      iso = document.createElement('input');
      iso.type = 'hidden';
      iso.name = 'countryIso';
      iso.dataset.ccFor = input.id;
      parent.appendChild(iso);
    }
    // countryName is what admin renders as the human-readable label. Without
    // this hidden sibling, FormData-style forms (corporate-training-form.js,
    // business-solutions.html) would post the dial+iso but not the name, // admin would then fall back to the bare ISO code like "SG" instead of
    // "Singapore".
    if (!name) {
      name = document.createElement('input');
      name.type = 'hidden';
      name.name = 'countryName';
      name.dataset.ccFor = input.id;
      parent.appendChild(name);
    }
    return { dial: dial, iso: iso, name: name };
  }

  // source: how we know the country - 'picked' from the list, 'typed' as a
  // +code, or the starting guess ('timezone', 'page', 'default'). Sent with the
  // lead so the backend knows which countries a person actually confirmed.
  function applyCountry(input, btn, country, hidden, source) {
    if (source) input.dataset.countrySource = source;
    input.dataset.countryDial = country.dial;
    input.dataset.countryIso = country.iso;
    input.dataset.countryName = country.name;
    if (hidden) {
      hidden.dial.value = country.dial;
      hidden.iso.value = country.iso;
      if (hidden.name) hidden.name.value = country.name;
    }
    setButtonState(btn, country);

    // Adapt the maxlength so users from other countries aren't capped at India's
    // 10-digit rule. Stash original once so we can put it back if they switch
    // back to India.
    if (input.dataset.macCcOriginalMaxLength === undefined) {
      input.dataset.macCcOriginalMaxLength = input.getAttribute('maxlength') || '';
    }
    if (country.iso === 'IN') {
      var orig = input.dataset.macCcOriginalMaxLength;
      if (orig) input.setAttribute('maxlength', orig);
      else input.setAttribute('maxlength', '10');
    } else {
      input.setAttribute('maxlength', '15');
    }

    // Same trick for `pattern`, many city pages hardcode pattern="[0-9]{10}".
    if (input.dataset.macCcOriginalPattern === undefined) {
      input.dataset.macCcOriginalPattern = input.getAttribute('pattern') || '';
    }
    if (country.iso === 'IN') {
      var origPat = input.dataset.macCcOriginalPattern;
      if (origPat) input.setAttribute('pattern', origPat);
      else input.removeAttribute('pattern');
    } else {
      input.setAttribute('pattern', '[0-9]{7,15}');
    }

    try {
      input.dispatchEvent(new CustomEvent('countrycodechange', {
        bubbles: true,
        detail: { dial: country.dial, iso: country.iso, name: country.name }
      }));
    } catch (e) { /* noop */ }
  }

  // Stack the button above the box when the column is too narrow for both.
  // Width 0 means hidden (a closed modal): decide once it is shown.
  var NARROW_PX = 210;
  function watchWidth(wrap) {
    function check() {
      var w = wrap.clientWidth;
      if (w > 0) wrap.classList.toggle('mac-cc-narrow', w < NARROW_PX);
    }
    check();
    if (typeof ResizeObserver === 'function') {
      try { new ResizeObserver(check).observe(wrap); } catch (e) { /* noop */ }
    }
  }

  function attachToInput(input) {
    if (shouldSkip(input)) return;
    input.setAttribute(PROCESSED_ATTR, '1');

    var parent = input.parentNode;
    if (!parent) return;

    // Some pages hard-code a "+91" prefix span that we should swallow. Look for
    // an inline-styled wrapper whose child span contains a dial code.
    var siblings = parent.children;
    var inlinePrefix = null;
    for (var i = 0; i < siblings.length; i++) {
      var s = siblings[i];
      if (s.tagName === 'SPAN' && /\+\d{1,4}/.test(s.textContent || '') && s !== input) {
        inlinePrefix = s;
        break;
      }
    }

    var start = startCountry();
    var country = start.country;
    var btn = buildButton(country);

    // A placeholder that is nothing but a dial code ("+91") contradicts the
    // picker as soon as it shows another country, and invites typing that
    // code again. The picker now carries the code.
    if (/^\s*\+\d{1,4}\s*$/.test(input.getAttribute('placeholder') || '')) {
      input.setAttribute('placeholder', 'Phone number');
    }

    // Swapping the prefix for the button in place only works when the page
    // lays that wrapper out as a row (the city pages' pill). The country
    // landing pages put "+353" in a plain block, where the swap left the
    // button on a line of its own above a borderless box, so there the old
    // prefix is dropped and the standard wrapper used instead.
    if (inlinePrefix) {
      var parentDisplay = '';
      try { parentDisplay = getComputedStyle(parent).display || ''; } catch (e) { /* noop */ }
      if (!/flex|grid/.test(parentDisplay)) {
        parent.removeChild(inlinePrefix);
        inlinePrefix = null;
      }
    }

    if (inlinePrefix && parent.contains(inlinePrefix)) {
      parent.classList.add('mac-cc-inline');
      parent.replaceChild(btn, inlinePrefix);
    } else {
      var wrap = document.createElement('div');
      wrap.className = 'mac-cc-wrap';
      parent.insertBefore(wrap, input);
      wrap.appendChild(btn);
      wrap.appendChild(input);
      watchWidth(wrap);
    }

    var hidden = ensureHiddenSiblings(input);
    applyCountry(input, btn, country, hidden, start.source);

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openPopover({
        btn: btn,
        iso: input.dataset.countryIso || DEFAULT_ISO,
        onPick: function (picked) {
          applyCountry(input, btn, picked, hidden, 'picked');
        }
      });
    });

    // Auto-detect the country when the user types or pastes a value that
    // begins with "+". Without this, users who paste "+923001234567" into the
    // box (instead of clicking the flag dropdown) silently submit India + the
    // typed digits, which is the original "admin always shows India" bug.
    // After detection we strip the dial prefix from the input so the stored
    // contact value contains only the local digits, the country code lives
    // in its own field.
    function autoDetectFromInput() {
      var v = input.value || '';
      if (v.charAt(0) !== '+') return;
      var detected = detectCountryFromValue(v);
      if (!detected) return;
      // Strip the dial prefix so we don't double-store the country code.
      var dialDigits = detected.dial.substring(1);
      var allDigits = v.replace(/\D/g, '');
      var localPart = allDigits.indexOf(dialDigits) === 0
        ? allDigits.substring(dialDigits.length)
        : allDigits;
      if (input.dataset.countryIso !== detected.iso) {
        applyCountry(input, btn, detected, hidden, 'typed');
      }
      if (input.value !== localPart) {
        input.value = localPart;
      }
    }
    input.addEventListener('input', autoDetectFromInput);

    /**
     * PASTING A WHOLE INTERNATIONAL NUMBER
     *
     * This used to defer one tick and then re-read input.value, which quietly
     * lost data. Most of these boxes carry maxlength="10" for India, and the
     * browser applies maxlength to a paste BEFORE any script sees it. Pasting
     * "+919123366161" left "+919123366" in the field; by the time the deferred
     * handler ran, the last three digits no longer existed anywhere and a
     * seven-digit fragment was submitted as a real number.
     *
     * So the clipboard is read directly from the paste event, which is not
     * subject to maxlength, and the field is filled in with the result.
     *
     * Three shapes are handled, in order of confidence:
     *   +971 50 123 4567  - explicit country code, so switch the picker to it
     *   971501234575      - the selected country's code typed in again
     *   07911 123456      - the domestic trunk zero
     *
     * Anything else is pasted through untouched. Guessing at a number we do
     * not understand is worse than leaving it for the parent to correct.
     */
    input.addEventListener('paste', function (e) {
      var clip = e.clipboardData || window.clipboardData;
      if (!clip || typeof clip.getData !== 'function') {
        setTimeout(autoDetectFromInput, 0);
        return;
      }

      var pasted = String(clip.getData('text') || '').trim();
      if (!pasted) return;

      // "00" is the international prefix in much of the world and means the
      // same thing as "+".
      var normalised = pasted.replace(/^00/, '+');
      var digits = normalised.replace(/\D/g, '');
      if (!digits) return;

      var iso = input.dataset.countryIso || DEFAULT_ISO;
      var national = digits;

      // (1) An explicit "+" tells us the country outright.
      var detected = normalised.charAt(0) === '+' ? detectCountryFromValue(normalised) : null;
      if (detected) {
        var detectedDigits = detected.dial.replace(/\D/g, '');
        if (digits.indexOf(detectedDigits) === 0) {
          national = digits.slice(detectedDigits.length);
        }
        iso = detected.iso;
        if (input.dataset.countryIso !== detected.iso) {
          applyCountry(input, btn, detected, hidden, 'typed');
        }
      } else {
        // (2) The current country's dial code typed in as well as picked.
        //     Length-aware: a ten-digit Indian mobile beginning 91 is a real
        //     number, so it is only stripped when the result is still valid
        //     and the original was not.
        var dialDigits = dialDigitsFor(iso);
        if (dialDigits && !isValidPhone(national, iso) && national.indexOf(dialDigits) === 0
            && isValidPhone(national.slice(dialDigits.length), iso)) {
          national = national.slice(dialDigits.length);
        }
      }

      // (3) The domestic trunk zero, which never belongs in an international
      //     number. Same rule: only when it makes the number valid.
      if (national.charAt(0) === '0' && isValidPhone(national.replace(/^0+/, ''), iso)) {
        national = national.replace(/^0+/, '');
      }

      // Fill the field ourselves, bypassing maxlength entirely. Capped at the
      // E.164 maximum so a pasted essay cannot land in a phone box.
      e.preventDefault();
      input.value = national.slice(0, E164_MAX);

      // Let the page's own validation and character filters see the change,
      // exactly as if it had been typed.
      try {
        input.dispatchEvent(new Event('input', { bubbles: true }));
      } catch (err) { /* very old browsers - the value is set either way */ }
    });

    // When the form submits, refresh hidden values just in case.
    var form = input.closest('form');
    if (form && !form.dataset.macCcBound) {
      form.dataset.macCcBound = '1';
      form.addEventListener('submit', function () {
        var tels = form.querySelectorAll('input[type="tel"]');
        for (var i = 0; i < tels.length; i++) {
          var t = tels[i];
          if (!t.dataset.countryDial) continue;
          var dh = form.querySelector('input[type="hidden"][data-cc-for="' + t.id + '"][name="countryCode"]');
          var ih = form.querySelector('input[type="hidden"][data-cc-for="' + t.id + '"][name="countryIso"]');
          var nh = form.querySelector('input[type="hidden"][data-cc-for="' + t.id + '"][name="countryName"]');
          if (dh) dh.value = t.dataset.countryDial;
          if (ih) ih.value = t.dataset.countryIso;
          if (nh) nh.value = t.dataset.countryName;
        }
      }, true);
    }
  }

  // About five hundred city and country pages build their phone box as a plain
  // text input with inputmode="tel" rather than type="tel", so the picker never
  // attached to them and they had no way to say which country a number was
  // from. They are promoted to type="tel" (same keyboard, same value) so every
  // rule below applies to them too.
  var PHONE_INPUT_SELECTOR = 'input[type="tel"], input[inputmode="tel"], input[autocomplete="tel"], input[autocomplete="tel-national"]';

  function promoteToTel(input) {
    var t = (input.getAttribute('type') || 'text').toLowerCase();
    if (t === 'tel') return;
    if (t !== 'text' && t !== 'number') return;
    try { input.type = 'tel'; } catch (e) { /* very old browsers */ }
  }

  function scan(root) {
    var node = root || document;
    var inputs = node.querySelectorAll ? node.querySelectorAll(PHONE_INPUT_SELECTOR) : [];
    for (var i = 0; i < inputs.length; i++) {
      promoteToTel(inputs[i]);
      attachToInput(inputs[i]);
    }
  }

  // ───────────────────── fetch hook (legacy pages) ─────────────────────
  var PHONE_ENDPOINT_RE = /\/api\/(contact|callback|business[-_]?solution|corporate[-_]?training|payment|enrollment|book[-_]?demo|inquiry|leads?)\b/i;
  var PHONE_FIELD_KEYS = ['contact', 'phone', 'mobile', 'customerPhone', 'customer_phone', 'whatsapp'];

  // The tel input the user most recently touched, either by typing in it,
  // focusing it, or picking a country from its dropdown. We prefer this over
  // "first tel on page" so pages with both a navbar callback widget and a
  // contact form pick the RIGHT country at submit time.
  var lastTouchedTel = null;

  function markTouched(tel) {
    if (tel && tel.dataset && tel.dataset.countryDial) {
      lastTouchedTel = tel;
      // Stamp every form on the page that contains this input so we can
      // resolve back to the right input from a fetch happening seconds later.
      var form = tel.closest && tel.closest('form');
      if (form) form.dataset.macLastTel = tel.id;
    }
  }

  // Track focus + input + country-change anywhere on the page.
  document.addEventListener('focusin', function (e) {
    var t = e.target;
    if (t && t.tagName === 'INPUT' && t.type === 'tel') markTouched(t);
  }, true);
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t && t.tagName === 'INPUT' && t.type === 'tel') markTouched(t);
  }, true);
  document.addEventListener('countrycodechange', function (e) {
    markTouched(e.target);
  }, true);

  function findReferenceTel() {
    // 1) If the submit just happened, prefer a tel input INSIDE that form.
    //    The submit handler sets a flag on the form for ~5 seconds.
    var recent = window.__macRecentSubmitForm;
    if (recent && document.contains(recent)) {
      var formTel = recent.querySelector('input[type="tel"][data-country-dial]');
      if (formTel) return formTel;
    }

    // 2) Use the form containing the active element (e.g. submit button focus).
    var active = document.activeElement;
    if (active && active.closest) {
      var f = active.closest('form');
      if (f) {
        var t = f.querySelector('input[type="tel"][data-country-dial]');
        if (t) return t;
      }
    }

    // 3) Active element is itself the tel input.
    if (active && active.tagName === 'INPUT' && active.type === 'tel' && active.dataset.countryDial) {
      return active;
    }

    // 4) The last input the user actually touched.
    if (lastTouchedTel && document.contains(lastTouchedTel) && lastTouchedTel.dataset.countryDial) {
      return lastTouchedTel;
    }

    // 5) Fall back to the first tel input on the page that's NOT in the
    //    navbar callback widget, the nav widget defaults to India and would
    //    drown out the actual form's choice.
    var tels = document.querySelectorAll('input[type="tel"]');
    for (var i = 0; i < tels.length; i++) {
      var ti = tels[i];
      if (!ti.dataset.countryDial) continue;
      if (ti.id === 'callbackPhoneInput') continue;
      return ti;
    }
    // Last resort: any tel input at all.
    for (var j = 0; j < tels.length; j++) {
      if (tels[j].dataset.countryDial) return tels[j];
    }
    return null;
  }

  // ───────────────────── at submit time ─────────────────────
  //
  // WHY THIS IS HERE AND NOT IN EACH PAGE
  // Around 780 landing pages submit through their own inline script, written
  // in more than a hundred variations, and most of them hard-code the page's
  // country into the request: countryCode '+31' on a Dutch page whatever the
  // visitor picked. Some also check the number against that country's length
  // (the UK 11-plus pages want ten digits), which turned away an Irish parent
  // before any request was made. Rewriting a hundred templates would drift the
  // day a new one is added, so the fix lives here, around every form:
  //
  //   1. This listener runs in the CAPTURE phase on the document, so it sees
  //      every submit before the page's own handler. It reads the number and
  //      the country the visitor actually chose, and records them on the form.
  //   2. A number that does not fit that country gets a clear message beside
  //      the box instead of being sent. Pressing send again with the same
  //      number sends it anyway: a number we do not understand is still a
  //      parent worth ringing, and the backend flags it for a human.
  //   3. The fetch hook below then writes the recorded country and number into
  //      the request, over whatever the page hard-coded.

  function digitsOf(v) { return String(v == null ? '' : v).replace(/\D/g, ''); }

  // Countries whose numbers keep their leading 0 after the country code
  // (+39 06 ... is a Rome landline). Everywhere else a leading 0 is the
  // domestic trunk prefix and must not follow the country code.
  var KEEPS_LEADING_ZERO = { IT: 1, SM: 1, VA: 1, CI: 1 };

  function fitsNational(d, iso) {
    var r = phoneRangeFor(iso);
    return d.length >= r[0] && d.length <= r[1] && (d.charAt(0) !== '0' || !!KEEPS_LEADING_ZERO[iso]);
  }

  /**
   * The number in the box, as a country and a national number. Undoes the two
   * usual mistakes, the country code typed as well as picked and the domestic
   * trunk zero, but only when that leaves a number that fits.
   */
  function readLead(tel) {
    var country = getCountryByIso(tel.dataset.countryIso || '') || startCountry().country;
    var dial = country.dial.replace(/\D/g, '');
    var raw = digitsOf(tel.value);
    var national = raw;
    if (!fitsNational(national, country.iso)) {
      var candidates = [];
      if (national.indexOf('00' + dial) === 0) candidates.push(national.slice(dial.length + 2));
      if (national.indexOf(dial + '0') === 0) candidates.push(national.slice(dial.length + 1));
      if (national.indexOf(dial) === 0) candidates.push(national.slice(dial.length));
      if (national.charAt(0) === '0' && !KEEPS_LEADING_ZERO[country.iso]) candidates.push(national.replace(/^0+/, ''));
      for (var i = 0; i < candidates.length; i++) {
        if (fitsNational(candidates[i], country.iso)) { national = candidates[i]; break; }
      }
    }
    return {
      dial: country.dial,
      iso: country.iso,
      name: country.name,
      national: national,
      raw: raw,
      source: tel.dataset.countrySource || 'default',
      valid: fitsNational(national, country.iso)
    };
  }

  /** The phone box a form is submitting: the first one with anything in it. */
  function leadTelIn(form) {
    var tels = form.querySelectorAll('input[type="tel"][data-country-dial]');
    for (var i = 0; i < tels.length; i++) {
      if (digitsOf(tels[i].value)) return tels[i];
    }
    return null;
  }

  function messageSlot(tel, create) {
    var anchor = tel.closest('.mac-cc-wrap') || tel.closest('.mac-cc-inline') || tel;
    var next = anchor.nextElementSibling;
    if (next && next.classList && next.classList.contains('mac-cc-msg')) return next;
    if (!create) return null;
    var el = document.createElement('div');
    el.className = 'mac-cc-msg';
    el.setAttribute('role', 'alert');
    el.style.cssText = 'font-size:.85rem;line-height:1.4;margin-top:6px;text-align:left;color:'
      + (isDarkContext(tel) ? '#fca5a5' : '#b42318') + ';';
    anchor.parentNode.insertBefore(el, anchor.nextSibling);
    return el;
  }

  function clearProblem(tel) {
    var el = messageSlot(tel, false);
    if (el) el.parentNode.removeChild(el);
  }

  function showProblem(tel, lead) {
    var r = phoneRangeFor(lead.iso);
    var want = r[0] === r[1] ? r[0] + ' digits' : r[0] + ' to ' + r[1] + ' digits';
    var other = ' If your number is from another country, tap '
      + isoToFlag(lead.iso) + ' ' + lead.dial + ' to choose it.';
    var el = messageSlot(tel, true);
    el.textContent = (lead.national.charAt(0) === '0'
      ? 'Please leave out the leading 0 when using the ' + lead.dial + ' country code.' + other
      : 'Phone numbers in ' + lead.name + ' (' + lead.dial + ') have ' + want
        + '; this one has ' + lead.national.length + '.' + other)
      + ' To send it exactly as typed, press the button again.';
    try { tel.focus(); } catch (e) { /* noop */ }
  }

  function forgetWarning(t) {
    if (t && t.dataset && t.dataset.macWarned) {
      delete t.dataset.macWarned;
      clearProblem(t);
    }
  }
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t && t.tagName === 'INPUT' && t.type === 'tel') forgetWarning(t);
  }, true);
  document.addEventListener('countrycodechange', function (e) { forgetWarning(e.target); }, true);

  // Stamp the submitting form so the fetch hook can resolve back to its tel
  // input, check the number, and record what will be sent.
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    window.__macRecentSubmitForm = form;
    // Clear after a generous window so a slow XHR still finds it.
    clearTimeout(window.__macRecentSubmitTimer);
    window.__macRecentSubmitTimer = setTimeout(function () {
      window.__macRecentSubmitForm = null;
    }, 5000);

    form.__macLead = null;
    var tel = leadTelIn(form);
    if (!tel) return;

    var lead = readLead(tel);
    var key = lead.iso + ':' + lead.raw;
    if (!lead.valid && tel.dataset.macWarned !== key) {
      tel.dataset.macWarned = key;
      showProblem(tel, lead);
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
    clearProblem(tel);
    lead.at = Date.now();
    form.__macLead = lead;

    // A page that hard-codes its own country (it carries the meta) checks
    // the number against that country. When the visitor is from somewhere
    // else, hand the page the full international number, which is long
    // enough for any of those checks, and put their typing back once the
    // page's handler has read it. The fetch hook sends the real values.
    var page = pageCountry();
    if (page && page.iso !== lead.iso) {
      var typed = tel.value;
      var intl = '+' + lead.dial.replace(/\D/g, '') + ' ' + lead.national;
      tel.value = intl;
      setTimeout(function () {
        if (document.contains(tel) && tel.value === intl) tel.value = typed;
      }, 0);
    }
  }, true);

  /** What the form being submitted recorded, if it was in the last 8 seconds. */
  function recentLead() {
    var form = window.__macRecentSubmitForm;
    var lead = form && form.__macLead;
    return lead && Date.now() - lead.at < 8000 ? lead : null;
  }

  /**
   * Is this request field the number from the recorded lead? Pages reshape the
   * digits before sending (strip a 44, a 1 or a 0), so a match on the tail of
   * any of the forms the number could take counts.
   */
  function sameNumber(value, lead) {
    var d = digitsOf(value);
    if (d.length < 5) return false;
    var full = lead.dial.replace(/\D/g, '') + lead.national;
    return full.slice(-d.length) === d || lead.raw.slice(-d.length) === d
      || d.slice(-lead.national.length) === lead.national;
  }

  function augmentBody(body) {
    if (typeof body !== 'string') return body;
    var data;
    try { data = JSON.parse(body); } catch (e) { return body; }
    if (!data || typeof data !== 'object' || Array.isArray(data)) return body;

    var hasPhone = false;
    for (var i = 0; i < PHONE_FIELD_KEYS.length; i++) {
      if (data[PHONE_FIELD_KEYS[i]]) { hasPhone = true; break; }
    }
    if (!hasPhone) return body;

    // A form was just submitted and we read its number: what the visitor
    // chose wins over whatever the page's script hard-coded.
    var lead = recentLead();
    if (lead) {
      var matched = false;
      for (var k = 0; k < PHONE_FIELD_KEYS.length; k++) {
        var key = PHONE_FIELD_KEYS[k];
        var v = data[key];
        if ((typeof v === 'string' || typeof v === 'number') && sameNumber(v, lead)) {
          data[key] = lead.national;
          matched = true;
        }
      }
      if (matched) {
        data.countryCode = lead.dial;
        data.countryIso = lead.iso;
        data.countryName = lead.name;
        data.countrySource = lead.source;
        return JSON.stringify(data);
      }
    }

    if (data.countryCode || data.countryIso || data.country_code) return body;

    var ref = findReferenceTel();
    var start = startCountry();
    data.countryCode = ref ? (ref.dataset.countryDial || start.country.dial) : start.country.dial;
    data.countryIso = ref ? (ref.dataset.countryIso || start.country.iso) : start.country.iso;
    data.countryName = ref ? (ref.dataset.countryName || start.country.name) : start.country.name;
    data.countrySource = ref ? (ref.dataset.countrySource || start.source) : start.source;
    return JSON.stringify(data);
  }

  /**
   * Some forms hand the lead to WhatsApp instead of the server: they open
   * wa.me with a prefilled message such as "My number: +91 2522228345", and
   * several stamp +91 onto any number typed without a code. When a form was
   * just submitted, the number in that message is rewritten to the country the
   * visitor actually chose. Anything that is not the submitted number is left
   * exactly as the page wrote it.
   */
  var WHATSAPP_URL_RE = /^(https?:\/\/(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\/[^?#]*\?)([^#]*)(#.*)?$/i;
  var PHONE_IN_TEXT_RE = /\+?\d[\d\s().-]{5,}\d/g;

  function rewriteWhatsAppUrl(url) {
    var lead = recentLead();
    var m = lead && typeof url === 'string' ? WHATSAPP_URL_RE.exec(url) : null;
    if (!m) return url;
    var changed = false;
    var params = m[2].split('&').map(function (pair) {
      if (pair.indexOf('text=') !== 0) return pair;
      var text;
      try { text = decodeURIComponent(pair.slice(5).replace(/\+/g, ' ')); } catch (e) { return pair; }
      var next = text.replace(PHONE_IN_TEXT_RE, function (token) {
        return sameNumber(token, lead) ? lead.dial + ' ' + lead.national : token;
      });
      if (next === text) return pair;
      changed = true;
      return 'text=' + encodeURIComponent(next);
    });
    return changed ? m[1] + params.join('&') + (m[3] || '') : url;
  }

  function installWhatsAppHook() {
    if (typeof window.open !== 'function' || window.__macCcOpenHooked) return;
    window.__macCcOpenHooked = true;
    var origOpen = window.open;
    window.open = function (url) {
      var args = Array.prototype.slice.call(arguments);
      try { args[0] = rewriteWhatsAppUrl(url); } catch (e) { /* never block the page */ }
      return origOpen.apply(window, args);
    };
  }

  function installFetchHook() {
    if (typeof window.fetch !== 'function') return;
    if (window.__macCcFetchHooked) return;
    window.__macCcFetchHooked = true;

    var origFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      try {
        var url = typeof input === 'string' ? input : (input && input.url) || '';
        if (PHONE_ENDPOINT_RE.test(url) && init && init.body) {
          init.body = augmentBody(init.body);
        }
      } catch (e) { /* never break the original request */ }
      return origFetch(input, init);
    };
  }

  // ───────────────────── phone validation ─────────────────────
  //
  // National subscriber numbers are not ten digits everywhere. India is ten,
  // but Norway, Denmark, Singapore and Hong Kong are eight, the UAE is nine,
  // and China is eleven. Every enquiry form on this site used to test
  // /^[0-9]{10}$/ before submitting, so a parent in Dubai or Oslo could not
  // send an enquiry at all, the form refused before any request was made.
  //
  // Lengths below are national significant numbers, excluding the country
  // dial code. Anything not listed falls back to the ITU-E.164 range of 7 to
  // 15 digits, which is deliberately permissive: rejecting a real customer
  // costs far more than accepting a typo that a human will see anyway.
  var PHONE_LENGTHS = {
    IN: [10, 10], US: [10, 10], CA: [10, 10],
    GB: [9, 10],  IE: [7, 9],
    AE: [8, 9],   SA: [8, 9],   OM: [7, 8],   QA: [7, 8],
    KW: [7, 8],   BH: [8, 8],   JO: [8, 9],
    SG: [8, 8],   HK: [8, 8],   MY: [7, 10],  ID: [8, 12],
    PH: [9, 10],  TH: [8, 9],   VN: [9, 10],  JP: [9, 10],
    KR: [9, 10],  CN: [10, 11], TW: [8, 9],
    AU: [9, 9],   NZ: [8, 10],
    DE: [6, 13],  FR: [9, 9],   IT: [6, 11],  ES: [9, 9],
    NL: [9, 9],   BE: [8, 9],   PT: [9, 9],   CH: [9, 9],
    AT: [7, 13],  SE: [7, 13],  NO: [8, 8],   DK: [8, 8],
    FI: [5, 12],  PL: [9, 9],   GR: [10, 10],
    NG: [8, 10], KE: [9, 9],   GH: [9, 9],   ZA: [9, 9],
    EG: [8, 10], MA: [9, 9],   TZ: [9, 9],   UG: [9, 9],
    PK: [9, 10], BD: [8, 10], LK: [9, 9],   NP: [8, 10],
    BR: [10, 11], MX: [10, 10], AR: [10, 11],
    RU: [10, 10], TR: [10, 10], IL: [8, 9],
    SK: [9, 9],   CZ: [9, 9],   HU: [9, 9],   RO: [9, 9],
    CY: [8, 8],   BN: [7, 7],   KZ: [10, 10]
  };
  var E164_MIN = 7, E164_MAX = 15;

  function phoneRangeFor(iso) {
    var r = PHONE_LENGTHS[String(iso || '').toUpperCase()];
    return r || [E164_MIN, E164_MAX];
  }

  /** The dial code for a country, digits only. '91' for India. */
  function dialDigitsFor(iso) {
    var want = String(iso || '').toUpperCase();
    for (var i = 0; i < COUNTRIES.length; i++) {
      if (COUNTRIES[i].iso === want) return COUNTRIES[i].dial.replace(/\D/g, '');
    }
    return null;
  }

  /**
   * Is this a plausible phone number for the given country?
   *
   * Only digits are counted, so spaces, dashes and brackets are fine. People
   * routinely paste a full international number into a field that already has
   * a country selector next to it, so a leading country code is stripped and
   * retried rather than counted twice, "+971 50 123 4567" for the UAE is the
   * same number as "501234567" and must not be refused.
   */
  function isValidPhone(value, iso) {
    var digits = String(value == null ? '' : value).replace(/\D/g, '');
    if (!digits) return false;

    var range = phoneRangeFor(iso);
    if (digits.length >= range[0] && digits.length <= range[1]) return true;

    var dial = dialDigitsFor(iso);
    if (dial && digits.length > dial.length && digits.indexOf(dial) === 0) {
      var national = digits.slice(dial.length);
      if (national.length >= range[0] && national.length <= range[1]) return true;
    }
    return false;
  }

  /** Wording for the error, so a visitor in Oman is not told to enter 10 digits. */
  function phoneHint(iso) {
    var range = phoneRangeFor(iso);
    if (range[0] === range[1]) return 'Enter a valid ' + range[0] + '-digit number';
    return 'Enter a valid phone number (' + range[0] + '–' + range[1] + ' digits)';
  }

  /**
   * Validate straight from the input, taking the country from the selector
   * attached to it. This is what the forms call, so a page never has to know
   * any of the rules above.
   */
  function validateInput(input) {
    var el = (typeof input === 'string') ? document.getElementById(input) : input;
    if (!el) return { valid: false, message: 'Enter a valid phone number' };
    var iso = (el.dataset && el.dataset.countryIso) || DEFAULT_ISO;
    return {
      valid: isValidPhone(el.value, iso),
      message: phoneHint(iso),
      iso: iso
    };
  }

  // Also exposed under its own name so a page can validate without knowing
  // about the country selector at all.
  window.MACPhone = {
    isValid: isValidPhone,
    hint: phoneHint,
    validateInput: validateInput,
    rangeFor: phoneRangeFor
  };

  // ───────────────────── public API ─────────────────────
  window.MACCountryCode = {
    countries: COUNTRIES,
    defaultDial: DEFAULT_DIAL,
    defaultIso: DEFAULT_ISO,
    isValidPhone: isValidPhone,
    phoneHint: phoneHint,
    validatePhoneInput: validateInput,
    read: function (input) {
      if (!input) return { dial: DEFAULT_DIAL, iso: DEFAULT_ISO, name: 'India', digits: '', fullPhone: '' };
      var dial = input.dataset.countryDial || DEFAULT_DIAL;
      var iso  = input.dataset.countryIso  || DEFAULT_ISO;
      var name = input.dataset.countryName || 'India';
      var digits = (input.value || '').replace(/\D/g, '');
      return {
        dial: dial,
        iso: iso,
        name: name,
        digits: digits,
        fullPhone: digits ? (dial + digits) : ''
      };
    },
    rescan: scan
  };

  // ───────────────────── boot ─────────────────────
  function init() {
    injectStyles();
    scan(document);

    if (typeof MutationObserver === 'function') {
      new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          var added = muts[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            var n = added[j];
            if (n.nodeType !== 1) continue;
            if (n.matches && n.matches(PHONE_INPUT_SELECTOR)) { promoteToTel(n); attachToInput(n); }
            else if (n.querySelectorAll) scan(n);
          }
        }
      }).observe(document.body || document.documentElement, { childList: true, subtree: true });
    }
  }

  installFetchHook();
  installWhatsAppHook();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
