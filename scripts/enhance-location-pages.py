#!/usr/bin/env python3
"""
enhance-location-pages.py
=========================
Adds unique, location-specific SEO-rich sections to every
`coding-classes-near-<slug>.html` page so Google stops treating
them as duplicates ("Crawled - currently not indexed").

For each page, it performs FOUR anchored edits:

  1. Replace the generic meta description with a richer one.
  2. Insert a "Live Online Classes - What Parents Should Know"
     section right before the existing "NEARBY SCHOOLS" section.
  3. Insert FOUR new sections (Neighbourhoods, Class Schedule,
     Curriculum Snapshot, Online vs Offline) right before the
     existing "HOW IT WORKS" section.
  4. Append 8 new FAQs to the existing FAQ accordion AND to the
     FAQPage JSON-LD schema.

Two pages already received this treatment manually and are skipped:
  - coding-classes-near-jadavpur-kolkata.html
  - coding-classes-near-ballygunge-kolkata.html

Run from the repo root:
    python scripts/enhance-location-pages.py
"""

from __future__ import annotations
import re
import sys
from pathlib import Path

PAGES_DIR = Path(__file__).parent.parent / "src" / "pages"

SKIP_SLUGS = {
    "jadavpur-kolkata",
    "ballygunge-kolkata",
}

# ---------------------------------------------------------------------------
# PER-LOCATION DATA
# ---------------------------------------------------------------------------
# Each entry's keys are interpolated into the section templates below.
# Keep facts conservative but specific - we want each page to feel
# genuinely about THIS locality, not a generic Kolkata page.
# ---------------------------------------------------------------------------

LOCATIONS: dict[str, dict[str, object]] = {
    # ============================ KOLKATA - SOUTH ============================
    "alipore-kolkata": {
        "name": "Alipore", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700027</strong> (Alipore core, Belvedere Estate), <strong style=\"color:#fff;\">700053</strong> (New Alipore edge), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700020</strong> (Elgin Road, Maidan side), <strong style=\"color:#fff;\">700026</strong> (Lake Market edge), <strong style=\"color:#fff;\">700034</strong> (Khidirpore touch), <strong style=\"color:#fff;\">700017</strong> (Park Street zone)",
        "localities": ["Alipore", "Belvedere Estate", "Judges Court", "Alipore Park Road", "Burdwan Road", "New Alipore", "Khidirpore", "Diamond Harbour Road", "Hastings", "Race Course", "Zoo Garden Area", "Bhowanipore", "Elgin Road", "Chetla", "Kalighat"],
        "schools_kids": "St. Thomas' Boys' School, La Martiniere for Boys, M.P. Birla Foundation",
        "schools_cbse": "M.P. Birla Foundation, Bhavan's Gangabux Kanoria Vidyamandir, Ashok Hall",
        "schools_icse": "St. Thomas' Boys' School, La Martiniere, St. Lawrence",
        "schools_general_text": "St. Thomas' Boys' School, La Martiniere, M.P. Birla Foundation and other Alipore schools",
        "traffic_ref": "Alipore Road and Diamond Harbour Road traffic",
        "traffic_short": "Alipore signal",
        "centres_intro": "Alipore and nearby Bhowanipore have a few private tuition centres.",
        "near_landmarks": "Belvedere Estate, Judges Court Road, and Alipore Zoo area",
    },
    "ajc-bose-road-kolkata": {
        "name": "AJC Bose Road", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700020</strong> (AJC Bose Road, Maidan side), <strong style=\"color:#fff;\">700017</strong> (Park Street, Camac Street), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700016</strong> (Esplanade side), <strong style=\"color:#fff;\">700014</strong> (Sealdah touch), <strong style=\"color:#fff;\">700022</strong> (Entally edge)",
        "localities": ["AJC Bose Road", "Park Street", "Camac Street", "Russell Street", "Theatre Road", "Loudon Street", "Elgin Road", "Lower Circular Road", "Wood Street", "Rawdon Street", "Bhowanipore", "Hazra", "Maidan", "Esplanade", "Entally"],
        "schools_kids": "La Martiniere for Boys, La Martiniere for Girls, Loreto House",
        "schools_cbse": "La Martiniere, Future Foundation, M.P. Birla Foundation",
        "schools_icse": "La Martiniere, Loreto House, St. James' School, Calcutta Boys' School",
        "schools_general_text": "La Martiniere, Loreto House, Calcutta Boys' School and other central Kolkata schools",
        "traffic_ref": "AJC Bose Road and Park Street evening traffic",
        "traffic_short": "AJC Bose flyover",
        "centres_intro": "Central Kolkata has several private tuition centres around Park Street and Loudon Street.",
        "near_landmarks": "AJC Bose flyover, Park Street, and the Lower Circular Road junction",
    },
    "baguiati-kolkata": {
        "name": "Baguiati", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700059</strong> (Baguiati, Jagatpur), <strong style=\"color:#fff;\">700101</strong> (Kestopur side), <strong style=\"color:#fff;\">700157</strong> (New Town border), <strong style=\"color:#fff;\">700055</strong> (Lake Town edge), <strong style=\"color:#fff;\">700052</strong> (VIP Road touch), <strong style=\"color:#fff;\">700089</strong> (Lake Town extended), <strong style=\"color:#fff;\">700102</strong> (Krishnapur, Kestopur)",
        "localities": ["Baguiati", "Jagatpur", "Aswini Nagar", "Deshbandhu Nagar", "Tegharia", "Rajarhat Road", "Krishnapur", "Kestopur", "Lake Town border", "VIP Road", "Hatiara", "Narayanpur", "Sreebhumi", "Salt Lake border", "New Town fringe"],
        "schools_kids": "Hariyana Vidya Mandir, Mahadevi Birla Shishu Vihar (close), Apeejay School",
        "schools_cbse": "Hariyana Vidya Mandir, Apeejay School Salt Lake, Bidya Bharati",
        "schools_icse": "St. Stephen's School, Tegharia Hindu School, Holy Child Institution",
        "schools_general_text": "Hariyana Vidya Mandir, Apeejay School, St. Stephen's and other North East Kolkata schools",
        "traffic_ref": "VIP Road and Baguiati crossing traffic",
        "traffic_short": "Baguiati crossing",
        "centres_intro": "Baguiati and Tegharia have a handful of small tuition rooms scattered along VIP Road.",
        "near_landmarks": "Baguiati crossing, Aswini Nagar Bazar, and the VIP Road-Krishnapur junction",
    },
    "baranagar-kolkata": {
        "name": "Baranagar", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700036</strong> (Baranagar core, Bonhooghly), <strong style=\"color:#fff;\">700090</strong> (Sinthee, Tobin Road), <strong style=\"color:#fff;\">700035</strong> (Belgharia border), <strong style=\"color:#fff;\">700050</strong> (Belgachia), <strong style=\"color:#fff;\">700108</strong> (B.T. Road, ISI side), <strong style=\"color:#fff;\">700002</strong> (Cossipore touch), <strong style=\"color:#fff;\">700056</strong> (Dakshineswar side)",
        "localities": ["Baranagar", "Bonhooghly", "Sinthee", "Tobin Road", "B.T. Road", "Dakshineswar", "Belgachia", "Cossipore", "Belgharia border", "Alambazar", "Northern Avenue", "Kashipur", "Paikpara", "Tala Park", "Khardah border"],
        "schools_kids": "Sailendra Sircar Vidyalaya, Indian Institute of Cerebral Palsy school, St. Xavier's Collegiate (nearby)",
        "schools_cbse": "Kendriya Vidyalaya Cossipore, DAV Public School, Adamas International",
        "schools_icse": "Holy Child Institution, St. Theresa's, Mahesh Bhattacharya Memorial",
        "schools_general_text": "Sailendra Sircar Vidyalaya, KV Cossipore, Adamas International and other North Kolkata schools",
        "traffic_ref": "B.T. Road and Baranagar junction traffic",
        "traffic_short": "Baranagar crossing",
        "centres_intro": "Baranagar and Sinthee have neighbourhood-style tuition rooms along B.T. Road.",
        "near_landmarks": "B.T. Road, Tobin Road, and the Baranagar Metro junction",
    },
    "bhowanipore-kolkata": {
        "name": "Bhowanipore", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700020</strong> (Bhowanipore, Elgin Road), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore core, Padmapukur), <strong style=\"color:#fff;\">700026</strong> (Lake Market, Hazra), <strong style=\"color:#fff;\">700027</strong> (Alipore edge), <strong style=\"color:#fff;\">700017</strong> (Park Street touch), <strong style=\"color:#fff;\">700029</strong> (Lansdowne border), <strong style=\"color:#fff;\">700034</strong> (Khidirpore touch)",
        "localities": ["Bhowanipore", "Padmapukur", "Hazra", "Elgin Road", "Sarat Bose Road", "Harish Mukherjee Road", "Chakraberia", "Jadu Babu Bazaar", "Lansdowne border", "Kalighat", "Lake Market", "Sreepally", "Northern Park", "Alipore edge", "Chetla"],
        "schools_kids": "Bhavan's Gangabux Kanoria Vidyamandir, Ashok Hall, South Point primary",
        "schools_cbse": "Bhavan's Gangabux Kanoria, M.P. Birla Foundation, Future Foundation",
        "schools_icse": "Ashok Hall, St. James', Future Foundation, Mitra Institution",
        "schools_general_text": "Bhavan's Gangabux Kanoria, Ashok Hall, Mitra Institution and other Bhowanipore schools",
        "traffic_ref": "Hazra crossing and Harish Mukherjee Road traffic",
        "traffic_short": "Hazra crossing",
        "centres_intro": "Bhowanipore has a long tradition of neighbourhood tuition rooms around Hazra and Sarat Bose Road.",
        "near_landmarks": "Hazra crossing, Sarat Bose Road, and the Bhowanipore Police Court area",
    },
    "camac-street-kolkata": {
        "name": "Camac Street", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700017</strong> (Camac Street, Russell Street, Theatre Road), <strong style=\"color:#fff;\">700016</strong> (Park Street, Free School Street), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700020</strong> (Elgin Road, AJC Bose), <strong style=\"color:#fff;\">700071</strong> (Chowringhee touch), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore side), <strong style=\"color:#fff;\">700013</strong> (Esplanade edge)",
        "localities": ["Camac Street", "Russell Street", "Theatre Road", "Wood Street", "Park Street", "Loudon Street", "Free School Street", "Chowringhee", "Outram Street", "Rawdon Street", "Mirza Ghalib Street", "Elgin Road", "AJC Bose Road", "Shakespeare Sarani", "Park Mansions"],
        "schools_kids": "La Martiniere for Boys, La Martiniere for Girls, Modern High School",
        "schools_cbse": "Modern High School, Future Foundation, M.P. Birla Foundation",
        "schools_icse": "La Martiniere, St. James' School, Loreto House, Modern High School",
        "schools_general_text": "La Martiniere, Loreto House, Modern High School and other central Kolkata schools",
        "traffic_ref": "Camac Street and Park Street office-hour traffic",
        "traffic_short": "Camac Street crossing",
        "centres_intro": "The Camac Street and Park Street belt has premium tuition centres at premium prices.",
        "near_landmarks": "Camac Street, Russell Street, and the Park Street junction",
    },
    "deshapriya-park-kolkata": {
        "name": "Deshapriya Park", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700026</strong> (Deshapriya Park, Lake Market), <strong style=\"color:#fff;\">700029</strong> (Lansdowne, Rashbehari border), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700031</strong> (Dhakuria side), <strong style=\"color:#fff;\">700068</strong> (Jodhpur Park border), <strong style=\"color:#fff;\">700045</strong> (Lake Gardens edge)",
        "localities": ["Deshapriya Park", "Lake Market", "Rashbehari Avenue", "Lansdowne", "Hindustan Park edge", "Jatin Das Park", "Sarat Bose Road", "Triangular Park", "Southern Avenue", "Gariahat", "Hazra side", "Dhakuria edge", "Jodhpur Park edge", "Tollygunge fringe", "Ballygunge Phari"],
        "schools_kids": "South Point High School primary, Modern High School, Ashok Hall",
        "schools_cbse": "South Point, Modern High School, M.P. Birla Foundation",
        "schools_icse": "South Point High School, St. Lawrence, Modern High School",
        "schools_general_text": "South Point, Modern High School, Ashok Hall and other South Kolkata schools",
        "traffic_ref": "Rashbehari Avenue and Lansdowne traffic",
        "traffic_short": "Rashbehari crossing",
        "centres_intro": "Deshapriya Park, Lake Market and Lansdowne have several private tuition rooms.",
        "near_landmarks": "Deshapriya Park, Rashbehari Avenue, and the Lake Market junction",
    },
    "dhakuria-kolkata": {
        "name": "Dhakuria", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700031</strong> (Dhakuria core, Selimpur), <strong style=\"color:#fff;\">700068</strong> (Jodhpur Park, Bansdroni edge), <strong style=\"color:#fff;\">700075</strong> (Bagha Jatin, Patuli), <strong style=\"color:#fff;\">700045</strong> (Lake Gardens), <strong style=\"color:#fff;\">700029</strong> (Lake Mall side), <strong style=\"color:#fff;\">700033</strong> (Tollygunge touch), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge)",
        "localities": ["Dhakuria", "Selimpur", "Jodhpur Park", "Lake Gardens", "South End Park", "Lake Mall area", "Dhakuria Bridge", "Surjasen Nagar", "Hindustan Park edge", "Gariahat side", "Jadavpur edge", "Tollygunge edge", "Bagha Jatin border", "Patuli edge", "Kasba border"],
        "schools_kids": "Birla High School, South Point primary, Modern High School",
        "schools_cbse": "Birla High School, South Point, DPS Ruby Park",
        "schools_icse": "South Point High School, Modern High School, Lakshmipat Singhania Academy",
        "schools_general_text": "Birla High, South Point, Modern High and other South Kolkata schools",
        "traffic_ref": "Dhakuria Bridge and Selimpur Road traffic",
        "traffic_short": "Dhakuria Bridge",
        "centres_intro": "Dhakuria and Selimpur have several private tuition rooms around the bridge area.",
        "near_landmarks": "Dhakuria Bridge, Lake Mall, and the Selimpur junction",
    },
    "dum-dum-kolkata": {
        "name": "Dum Dum", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700028</strong> (Dum Dum, Nager Bazar), <strong style=\"color:#fff;\">700055</strong> (Dum Dum Park, Bangur Avenue), <strong style=\"color:#fff;\">700030</strong> (Sinthee, Dum Dum Cantonment), <strong style=\"color:#fff;\">700074</strong> (Birati side), <strong style=\"color:#fff;\">700089</strong> (Lake Town edge), <strong style=\"color:#fff;\">700081</strong> (Belgharia edge), <strong style=\"color:#fff;\">700048</strong> (Sreebhumi side)",
        "localities": ["Dum Dum", "Nager Bazar", "Dum Dum Park", "Bangur Avenue", "Motijheel", "Dum Dum Cantonment", "Birati", "Belgharia border", "Lake Town side", "Sreebhumi side", "Patipukur", "Northern Avenue", "Airport Gate 1 side", "Jessore Road", "South Dum Dum"],
        "schools_kids": "St. Xavier's Collegiate primary (nearby), Air Force School (Dum Dum), Hariyana Vidya Mandir",
        "schools_cbse": "Air Force Bal Bharati, Hariyana Vidya Mandir Dum Dum, Adamas International",
        "schools_icse": "Hariyana Vidya Mandir, Sudhir Memorial Institute, Holy Cross",
        "schools_general_text": "Air Force Bal Bharati, Hariyana Vidya Mandir, Holy Cross and other North Kolkata schools",
        "traffic_ref": "Nager Bazar and Jessore Road traffic",
        "traffic_short": "Nager Bazar crossing",
        "centres_intro": "Dum Dum and Nager Bazar have several neighbourhood tuition rooms along Jessore Road.",
        "near_landmarks": "Nager Bazar crossing, Dum Dum Cantonment Station, and Jessore Road",
    },
    "elgin-road-kolkata": {
        "name": "Elgin Road", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700020</strong> (Elgin Road core, AJC Bose), <strong style=\"color:#fff;\">700017</strong> (Park Street, Camac Street), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700026</strong> (Lansdowne edge), <strong style=\"color:#fff;\">700016</strong> (Park Street side), <strong style=\"color:#fff;\">700027</strong> (Alipore touch), <strong style=\"color:#fff;\">700029</strong> (Ballygunge edge)",
        "localities": ["Elgin Road", "Mullick Bari side", "Hazra side", "AJC Bose Road", "Forum area", "Bhowanipore", "Sarat Bose Road", "Camac Street side", "Lala Lajpat Rai Sarani", "Park Mansions area", "Rawdon Street", "Loudon Street", "Beck Bagan", "Alipore edge", "Calcutta Club area"],
        "schools_kids": "M.P. Birla Foundation, Ashok Hall, Modern High School",
        "schools_cbse": "M.P. Birla Foundation, Modern High School, Future Foundation",
        "schools_icse": "Modern High School, Loreto House, Ashok Hall",
        "schools_general_text": "Modern High School, M.P. Birla Foundation, Loreto House and other central Kolkata schools",
        "traffic_ref": "Elgin Road and Forum Mall traffic",
        "traffic_short": "Elgin Road crossing",
        "centres_intro": "Elgin Road and Bhowanipore have a number of premium tuition centres around Forum.",
        "near_landmarks": "Forum Mall, Mullick Bari, and the Elgin Road-AJC Bose junction",
    },
    "gariahat-kolkata": {
        "name": "Gariahat", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700019</strong> (Gariahat, Ballygunge core), <strong style=\"color:#fff;\">700029</strong> (Gariahat Mall, Triangular Park), <strong style=\"color:#fff;\">700026</strong> (Rashbehari, Lake Market), <strong style=\"color:#fff;\">700068</strong> (Jodhpur Park edge), <strong style=\"color:#fff;\">700031</strong> (Dhakuria touch), <strong style=\"color:#fff;\">700017</strong> (Camac Street side), <strong style=\"color:#fff;\">700020</strong> (Elgin Road touch)",
        "localities": ["Gariahat", "Ballygunge Phari", "Hindustan Park", "Ekdalia", "Bondel Road", "Mandeville Gardens", "Sarat Bose Road", "Lake Market", "Triangular Park", "Rashbehari", "Southern Avenue", "Dover Lane", "Hindusthan Road", "Kankulia Road", "Selimpur"],
        "schools_kids": "Modern High School, La Martiniere, Pratt Memorial",
        "schools_cbse": "Birla High School, Modern High, La Martiniere for Girls",
        "schools_icse": "South Point High School, Modern High School, St. Lawrence",
        "schools_general_text": "South Point, Modern High, Birla High and other Gariahat-area schools",
        "traffic_ref": "Gariahat Junction and Rashbehari Avenue traffic",
        "traffic_short": "Gariahat Junction",
        "centres_intro": "Gariahat is one of the densest tuition belts in South Kolkata around Hindustan Park and Ekdalia.",
        "near_landmarks": "Gariahat Junction, Gariahat Mall, and Triangular Park",
    },
    "golpark-kolkata": {
        "name": "Golpark", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700029</strong> (Golpark, Rashbehari, Southern Avenue), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700026</strong> (Lake Market touch), <strong style=\"color:#fff;\">700068</strong> (Jodhpur Park edge), <strong style=\"color:#fff;\">700031</strong> (Dhakuria touch), <strong style=\"color:#fff;\">700045</strong> (Lake Gardens), <strong style=\"color:#fff;\">700033</strong> (Tollygunge edge)",
        "localities": ["Golpark", "Southern Avenue", "Lake Gardens", "Hindustan Park", "Ballygunge Phari", "Dhakuria side", "Jodhpur Park edge", "Rashbehari", "Lake Market", "Ramakrishna Mission area", "Dover Lane", "Selimpur side", "Kalighat side", "Tollygunge edge", "Garcha Road"],
        "schools_kids": "South Point primary, Modern High School, La Martiniere",
        "schools_cbse": "South Point, Modern High School, DPS",
        "schools_icse": "South Point High School, Modern High School, La Martiniere",
        "schools_general_text": "South Point, Modern High and other South Kolkata schools",
        "traffic_ref": "Golpark-Southern Avenue traffic",
        "traffic_short": "Golpark crossing",
        "centres_intro": "Golpark and Southern Avenue have several private tuition rooms in the residential lanes.",
        "near_landmarks": "Ramakrishna Mission Institute of Culture, Golpark roundabout, and Southern Avenue",
    },
    "hazra-kolkata": {
        "name": "Hazra", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700026</strong> (Hazra, Kalighat), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700020</strong> (Elgin Road touch), <strong style=\"color:#fff;\">700029</strong> (Lansdowne edge), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700027</strong> (Alipore touch), <strong style=\"color:#fff;\">700033</strong> (Tollygunge side)",
        "localities": ["Hazra", "Kalighat", "Bhowanipore", "Hazra Crossing", "Padmapukur", "Sarat Bose Road", "Asutosh Mukherjee Road", "Lansdowne Road", "Harish Mukherjee Road", "Chakraberia", "Bhowanipore Market", "Northern Park", "South Park Street side", "Elgin Road", "Mahim Halder Street"],
        "schools_kids": "Bhavan's Gangabux Kanoria, Ashok Hall, M.P. Birla Foundation",
        "schools_cbse": "Bhavan's Gangabux Kanoria, M.P. Birla Foundation, Future Foundation",
        "schools_icse": "Ashok Hall, Mitra Institution, St. James'",
        "schools_general_text": "Bhavan's, Ashok Hall, Mitra Institution and other Hazra-area schools",
        "traffic_ref": "Hazra crossing and Asutosh Mukherjee Road traffic",
        "traffic_short": "Hazra crossing",
        "centres_intro": "Hazra and Bhowanipore have generations-old tuition rooms in the residential lanes.",
        "near_landmarks": "Hazra crossing, Bhowanipore Market, and Asutosh Mukherjee Road",
    },
    "jodhpur-park-kolkata": {
        "name": "Jodhpur Park", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700068</strong> (Jodhpur Park, Bansdroni edge), <strong style=\"color:#fff;\">700031</strong> (Dhakuria touch), <strong style=\"color:#fff;\">700075</strong> (Bagha Jatin, Patuli), <strong style=\"color:#fff;\">700045</strong> (Lake Gardens), <strong style=\"color:#fff;\">700033</strong> (Tollygunge edge), <strong style=\"color:#fff;\">700040</strong> (Naktala side), <strong style=\"color:#fff;\">700099</strong> (Garia side)",
        "localities": ["Jodhpur Park", "Lake Gardens", "Dhakuria edge", "Jadavpur edge", "Bagha Jatin border", "Bansdroni", "Naktala", "Patuli edge", "Tollygunge fringe", "South End Park", "Selimpur side", "Lake Mall area", "8B Bus Stand side", "Garia edge", "Kasba edge"],
        "schools_kids": "South Point primary, Birla High School, Modern High",
        "schools_cbse": "South Point, Birla High School, DPS Ruby Park",
        "schools_icse": "South Point High School, Modern High School, La Martiniere",
        "schools_general_text": "South Point, Birla High, DPS Ruby Park and other South Kolkata schools",
        "traffic_ref": "Jodhpur Park signal and Lake Mall traffic",
        "traffic_short": "Jodhpur Park signal",
        "centres_intro": "Jodhpur Park and Lake Gardens have many small tuition rooms in residential lanes.",
        "near_landmarks": "Lake Mall, Jodhpur Park signal, and the Dhakuria Bridge approach",
    },
    "kalighat-kolkata": {
        "name": "Kalighat", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700026</strong> (Kalighat, Lake Market), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700029</strong> (Rashbehari edge), <strong style=\"color:#fff;\">700020</strong> (Elgin Road touch), <strong style=\"color:#fff;\">700033</strong> (Tollygunge edge), <strong style=\"color:#fff;\">700027</strong> (Alipore touch), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge)",
        "localities": ["Kalighat", "Hazra", "Bhowanipore", "Lake Market", "Rashbehari Avenue", "Lansdowne", "Asutosh Mukherjee Road", "Padmapukur", "Sarat Bose Road", "Chetla", "Adi Ganga area", "Northern Park", "Mahim Halder Street", "Kalighat Temple area", "Tollygunge Phari"],
        "schools_kids": "Bhavan's Gangabux Kanoria, Ashok Hall, Mitra Institution",
        "schools_cbse": "Bhavan's, M.P. Birla Foundation, Future Foundation",
        "schools_icse": "Ashok Hall, Mitra Institution, St. James'",
        "schools_general_text": "Bhavan's, Ashok Hall, Mitra Institution and other South Kolkata schools",
        "traffic_ref": "Kalighat Metro and Rashbehari Avenue traffic",
        "traffic_short": "Kalighat crossing",
        "centres_intro": "Kalighat and Bhowanipore are tuition-dense neighbourhoods with several private rooms.",
        "near_landmarks": "Kalighat Temple, Kalighat Metro, and Rashbehari Avenue",
    },
    "kasba-kolkata": {
        "name": "Kasba", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700042</strong> (Kasba, Acropolis area), <strong style=\"color:#fff;\">700078</strong> (Santoshpur edge), <strong style=\"color:#fff;\">700107</strong> (Kasba New Market side), <strong style=\"color:#fff;\">700039</strong> (Tangra edge), <strong style=\"color:#fff;\">700100</strong> (Anandapur), <strong style=\"color:#fff;\">700075</strong> (Bagha Jatin border), <strong style=\"color:#fff;\">700019</strong> (Ballygunge fringe)",
        "localities": ["Kasba", "Acropolis area", "Anandapur", "Rajdanga", "Bosepukur", "Santoshpur edge", "Tiljala border", "Ruby crossing", "Park Circus edge", "Beck Bagan touch", "Tangra edge", "Bagha Jatin edge", "Kasba Golpark", "EM Bypass", "Mukundapur side"],
        "schools_kids": "DPS Ruby Park, Hariyana Vidya Mandir, Don Bosco",
        "schools_cbse": "DPS Ruby Park, Birla High School, Future Foundation",
        "schools_icse": "DPS Ruby Park, St. James', Don Bosco Park Circus",
        "schools_general_text": "DPS Ruby Park, Don Bosco, Birla High and other EM Bypass schools",
        "traffic_ref": "Ruby crossing and Kasba Golpark traffic",
        "traffic_short": "Ruby crossing",
        "centres_intro": "Kasba and Ruby area have tuition centres concentrated around DPS Ruby Park and Acropolis.",
        "near_landmarks": "Acropolis Mall, Ruby crossing, and the Kasba Golpark junction",
    },
    "kestopur-kolkata": {
        "name": "Kestopur", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700101</strong> (Kestopur core), <strong style=\"color:#fff;\">700102</strong> (Kestopur, Krishnapur), <strong style=\"color:#fff;\">700059</strong> (Baguiati edge), <strong style=\"color:#fff;\">700157</strong> (New Town edge), <strong style=\"color:#fff;\">700156</strong> (Action Area New Town), <strong style=\"color:#fff;\">700089</strong> (Lake Town side), <strong style=\"color:#fff;\">700052</strong> (VIP Road side)",
        "localities": ["Kestopur", "Krishnapur", "Tegharia edge", "Baguiati side", "Prafulla Kanan", "New Town fringe", "Hatiara", "Jagatpur", "Salt Lake Sector V side", "VIP Road", "Lake Town border", "Sukanta Nagar", "Deshbandhu Nagar", "Saraswati Apartments area", "Rajarhat Road"],
        "schools_kids": "Apeejay School Salt Lake, Hariyana Vidya Mandir, Bidya Bharati",
        "schools_cbse": "Apeejay School, Hariyana Vidya Mandir, Aryan Public School",
        "schools_icse": "Holy Child Institution, Apeejay School, St. Stephen's",
        "schools_general_text": "Apeejay, Hariyana Vidya Mandir, Holy Child and other North East Kolkata schools",
        "traffic_ref": "VIP Road and Kestopur Bridge traffic",
        "traffic_short": "Kestopur crossing",
        "centres_intro": "Kestopur and Krishnapur have a growing tuition cluster along VIP Road.",
        "near_landmarks": "Kestopur Bridge, Saraswati Apartments, and the Krishnapur junction",
    },
    "lake-gardens-kolkata": {
        "name": "Lake Gardens", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700045</strong> (Lake Gardens core), <strong style=\"color:#fff;\">700033</strong> (Tollygunge edge), <strong style=\"color:#fff;\">700031</strong> (Dhakuria touch), <strong style=\"color:#fff;\">700068</strong> (Jodhpur Park edge), <strong style=\"color:#fff;\">700026</strong> (Lake Market edge), <strong style=\"color:#fff;\">700029</strong> (Southern Avenue edge), <strong style=\"color:#fff;\">700040</strong> (Naktala side)",
        "localities": ["Lake Gardens", "Jodhpur Park", "Dhakuria edge", "Tollygunge edge", "South End Park", "Lake Mall side", "Naktala border", "Bansdroni edge", "Selimpur", "Prince Anwar Shah Road", "Lake Mall", "Tollygunge Phari", "8B Bus Stand side", "Karunamoyee Tollygunge", "Anwar Shah Road"],
        "schools_kids": "South Point primary, Birla High, Modern High",
        "schools_cbse": "South Point, Birla High, DPS Ruby Park",
        "schools_icse": "South Point High School, Modern High School, La Martiniere",
        "schools_general_text": "South Point, Birla High, Modern High and other South Kolkata schools",
        "traffic_ref": "Prince Anwar Shah Road and Lake Gardens traffic",
        "traffic_short": "Lake Gardens signal",
        "centres_intro": "Lake Gardens and surrounding lanes have many small private tuition rooms.",
        "near_landmarks": "Lake Mall, Prince Anwar Shah Road, and the Lake Gardens Railway Station",
    },
    "lake-town-kolkata": {
        "name": "Lake Town", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700089</strong> (Lake Town core), <strong style=\"color:#fff;\">700055</strong> (Bangur Avenue, Dum Dum Park), <strong style=\"color:#fff;\">700048</strong> (Sreebhumi), <strong style=\"color:#fff;\">700028</strong> (Dum Dum edge), <strong style=\"color:#fff;\">700101</strong> (Kestopur edge), <strong style=\"color:#fff;\">700059</strong> (Baguiati edge), <strong style=\"color:#fff;\">700052</strong> (VIP Road)",
        "localities": ["Lake Town", "Bangur Avenue", "Dum Dum Park", "Sreebhumi", "Patipukur", "Jessore Road side", "VIP Road touch", "Kestopur edge", "Baguiati edge", "Tegharia side", "Yatragachi", "Northern Avenue", "Ultadanga side", "Khanna More side", "Phoolbagan side"],
        "schools_kids": "Hariyana Vidya Mandir, Lake Town Govt Sponsored, Sudhir Memorial",
        "schools_cbse": "Hariyana Vidya Mandir, KV Cossipore, Apeejay School",
        "schools_icse": "Hariyana Vidya Mandir, Sudhir Memorial, Holy Cross",
        "schools_general_text": "Hariyana Vidya Mandir, Sudhir Memorial, Holy Cross and other North Kolkata schools",
        "traffic_ref": "Lake Town crossing and Bangur Avenue traffic",
        "traffic_short": "Lake Town crossing",
        "centres_intro": "Lake Town and Bangur Avenue have a number of private tuition rooms.",
        "near_landmarks": "Lake Town clock tower, Bangur Avenue, and the Sreebhumi VIP Road junction",
    },
    "lansdowne-kolkata": {
        "name": "Lansdowne", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700020</strong> (Lansdowne core, AJC Bose), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700026</strong> (Lake Market edge), <strong style=\"color:#fff;\">700029</strong> (Rashbehari edge), <strong style=\"color:#fff;\">700017</strong> (Camac Street touch), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700027</strong> (Alipore touch)",
        "localities": ["Lansdowne", "Sarat Bose Road", "Bhowanipore touch", "Hazra", "Elgin Road", "Camac Street side", "AJC Bose Road", "Hindustan Park", "Mandeville Gardens edge", "Rashbehari edge", "Triangular Park", "Northern Park", "Lake Market", "Padmapukur", "Mullick Bari side"],
        "schools_kids": "M.P. Birla Foundation, Modern High School, Ashok Hall",
        "schools_cbse": "M.P. Birla Foundation, Modern High, Bhavan's Gangabux Kanoria",
        "schools_icse": "Modern High School, Ashok Hall, La Martiniere",
        "schools_general_text": "Modern High, M.P. Birla Foundation, Ashok Hall and other central Kolkata schools",
        "traffic_ref": "Lansdowne crossing and Sarat Bose Road traffic",
        "traffic_short": "Lansdowne crossing",
        "centres_intro": "Lansdowne and Sarat Bose Road have premium private tuition centres in residential homes.",
        "near_landmarks": "Lansdowne crossing, Sarat Bose Road, and the Bhowanipore-Lansdowne junction",
    },
    "loudon-street-kolkata": {
        "name": "Loudon Street", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700017</strong> (Loudon Street, Camac Street, Park Street), <strong style=\"color:#fff;\">700020</strong> (Elgin Road, AJC Bose), <strong style=\"color:#fff;\">700016</strong> (Park Street side), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700071</strong> (Chowringhee touch), <strong style=\"color:#fff;\">700013</strong> (Esplanade edge)",
        "localities": ["Loudon Street", "Camac Street", "Russell Street", "Theatre Road", "Park Street", "Outram Street", "Rawdon Street", "AJC Bose Road", "Wood Street", "Mirza Ghalib Street", "Free School Street", "Park Mansions", "Park Circus border", "Elgin Road", "Shakespeare Sarani"],
        "schools_kids": "La Martiniere, Modern High School, Loreto House",
        "schools_cbse": "Modern High School, Future Foundation, M.P. Birla Foundation",
        "schools_icse": "La Martiniere for Boys, La Martiniere for Girls, Loreto House, St. James'",
        "schools_general_text": "La Martiniere, Loreto House, Modern High and other central Kolkata schools",
        "traffic_ref": "Loudon Street and Park Street office-hour traffic",
        "traffic_short": "Loudon Street junction",
        "centres_intro": "The Loudon Street belt has high-priced premium tuition centres in residential buildings.",
        "near_landmarks": "Loudon Street, Camac Street, and the Park Street junction",
    },
    "nager-bazar-kolkata": {
        "name": "Nager Bazar", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700028</strong> (Nager Bazar, Dum Dum), <strong style=\"color:#fff;\">700055</strong> (Bangur Avenue, Dum Dum Park), <strong style=\"color:#fff;\">700030</strong> (Sinthee, Dum Dum Cantonment), <strong style=\"color:#fff;\">700048</strong> (Sreebhumi), <strong style=\"color:#fff;\">700089</strong> (Lake Town edge), <strong style=\"color:#fff;\">700074</strong> (Birati side), <strong style=\"color:#fff;\">700081</strong> (Belgharia edge)",
        "localities": ["Nager Bazar", "Dum Dum Park", "Bangur Avenue", "Patipukur", "Motijheel", "Sreebhumi", "Lake Town side", "Belgharia border", "Sinthee", "Jessore Road", "Northern Avenue", "Dum Dum Cantonment side", "Dum Dum core", "Birati side", "Khanna More side"],
        "schools_kids": "Hariyana Vidya Mandir, Air Force Bal Bharati, Sudhir Memorial",
        "schools_cbse": "Air Force Bal Bharati, Hariyana Vidya Mandir, Adamas International",
        "schools_icse": "Hariyana Vidya Mandir, Sudhir Memorial, Holy Cross",
        "schools_general_text": "Air Force Bal Bharati, Hariyana Vidya Mandir, Holy Cross and other Dum Dum schools",
        "traffic_ref": "Nager Bazar crossing and Jessore Road traffic",
        "traffic_short": "Nager Bazar crossing",
        "centres_intro": "Nager Bazar is a tuition-dense neighbourhood with many private rooms along the bazaar lanes.",
        "near_landmarks": "Nager Bazar crossing, Patipukur Bridge, and Jessore Road",
    },
    "new-alipore-kolkata": {
        "name": "New Alipore", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700053</strong> (New Alipore core), <strong style=\"color:#fff;\">700027</strong> (Alipore touch), <strong style=\"color:#fff;\">700034</strong> (Khidirpore, Behala edge), <strong style=\"color:#fff;\">700038</strong> (Behala edge), <strong style=\"color:#fff;\">700033</strong> (Tollygunge), <strong style=\"color:#fff;\">700040</strong> (Naktala edge), <strong style=\"color:#fff;\">700060</strong> (Behala edge)",
        "localities": ["New Alipore", "Alipore Park Road touch", "Sahapur", "Behala edge", "Khidirpore touch", "Taratala Road", "Diamond Harbour Road touch", "Block A New Alipore", "Block L New Alipore", "Tollygunge edge", "Sakher Bazar side", "Mahatma Gandhi Road area", "Suhasini Ganguly Sarani", "James Long Sarani", "Buroshibtala"],
        "schools_kids": "DPS New Alipore (where applicable), South Point primary, Ashok Hall",
        "schools_cbse": "DPS, M.P. Birla Foundation, Mahadevi Birla World Academy",
        "schools_icse": "South Point, Lakshmipat Singhania Academy, Modern High School",
        "schools_general_text": "South Point, M.P. Birla Foundation, Mahadevi Birla and other South Kolkata schools",
        "traffic_ref": "New Alipore crossing and Diamond Harbour Road traffic",
        "traffic_short": "New Alipore crossing",
        "centres_intro": "New Alipore has private tuition rooms in residential homes scattered across the blocks.",
        "near_landmarks": "New Alipore Police Court, Sahapur, and the Taratala Road approach",
    },
    "new-town-kolkata": {
        "name": "New Town", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700156</strong> (Action Area I New Town), <strong style=\"color:#fff;\">700157</strong> (Action Area II New Town), <strong style=\"color:#fff;\">700135</strong> (Action Area III), <strong style=\"color:#fff;\">700161</strong> (New Town extension), <strong style=\"color:#fff;\">700159</strong> (New Town extension), <strong style=\"color:#fff;\">700102</strong> (Kestopur edge), <strong style=\"color:#fff;\">700064</strong> (Salt Lake Sector V side)",
        "localities": ["Action Area I", "Action Area II", "Action Area III", "Eco Park area", "DLF IT Park", "Tata Medical side", "Chinar Park", "Sapoorji", "Kestopur edge", "Rajarhat fringe", "Mahishbathan", "Rajarhat Newtown", "City Centre 2", "Axis Mall area", "Coal India side"],
        "schools_kids": "Delhi Public School Megacity, The Newtown School, Aditya Birla World Academy",
        "schools_cbse": "DPS Megacity, Delhi Public School Newtown, The Heritage School",
        "schools_icse": "The Newtown School, Garden High School, Pailan World School",
        "schools_general_text": "DPS Megacity, Newtown School, Aditya Birla World Academy and other New Town schools",
        "traffic_ref": "Major Arterial Road and Action Area junction traffic",
        "traffic_short": "Action Area II crossing",
        "centres_intro": "New Town has fewer offline tuition centres than older Kolkata neighbourhoods; most options are home-based.",
        "near_landmarks": "Eco Park, DLF IT Park, and the City Centre 2 junction",
    },
    "park-circus-kolkata": {
        "name": "Park Circus", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700017</strong> (Park Circus, Lower Circular Road), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700014</strong> (Sealdah edge), <strong style=\"color:#fff;\">700039</strong> (Tangra side), <strong style=\"color:#fff;\">700016</strong> (Esplanade touch), <strong style=\"color:#fff;\">700022</strong> (Entally), <strong style=\"color:#fff;\">700020</strong> (AJC Bose touch)",
        "localities": ["Park Circus", "Topsia", "Beck Bagan", "Karaya", "Lower Circular Road", "AJC Bose Road touch", "Tiljala", "Beniapukur", "Mullick Bazar", "Convent Road", "Darga Road", "Tangra edge", "Theatre Road touch", "Park Street side", "Sealdah border"],
        "schools_kids": "Don Bosco Park Circus, La Martiniere, Calcutta Boys' School",
        "schools_cbse": "Don Bosco, La Martiniere, Future Foundation",
        "schools_icse": "Don Bosco Park Circus, La Martiniere, Calcutta Boys' School, St. James'",
        "schools_general_text": "Don Bosco, La Martiniere, Calcutta Boys' and other central Kolkata schools",
        "traffic_ref": "Park Circus 7-Point crossing traffic",
        "traffic_short": "Park Circus 7-point",
        "centres_intro": "Park Circus has a dense network of private tuition rooms in residential lanes.",
        "near_landmarks": "Park Circus 7-Point crossing, Quest Mall (nearby), and Mullick Bazar",
    },
    "park-street-kolkata": {
        "name": "Park Street", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700016</strong> (Park Street core, Free School Street), <strong style=\"color:#fff;\">700017</strong> (Camac Street, Loudon Street, Russell Street), <strong style=\"color:#fff;\">700071</strong> (Chowringhee side), <strong style=\"color:#fff;\">700020</strong> (Elgin Road touch), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700013</strong> (Esplanade edge), <strong style=\"color:#fff;\">700014</strong> (Sealdah edge)",
        "localities": ["Park Street", "Camac Street", "Russell Street", "Theatre Road", "Loudon Street", "Wood Street", "Outram Street", "Free School Street", "Mirza Ghalib Street", "Park Mansions", "Chowringhee", "Esplanade side", "Elgin Road", "AJC Bose Road", "Maidan area"],
        "schools_kids": "La Martiniere, Modern High School, Loreto House",
        "schools_cbse": "Modern High School, Future Foundation, M.P. Birla Foundation",
        "schools_icse": "La Martiniere, Loreto House, St. James' School, Calcutta Boys'",
        "schools_general_text": "La Martiniere, Loreto House, Modern High and other central Kolkata schools",
        "traffic_ref": "Park Street and Camac Street office-hour traffic",
        "traffic_short": "Park Street crossing",
        "centres_intro": "Park Street has premium private tuition centres at premium prices.",
        "near_landmarks": "Park Street, Park Mansions, and the Camac Street junction",
    },
    "rashbehari-kolkata": {
        "name": "Rashbehari", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700026</strong> (Rashbehari, Lake Market), <strong style=\"color:#fff;\">700029</strong> (Lansdowne, Triangular Park), <strong style=\"color:#fff;\">700019</strong> (Ballygunge, Gariahat), <strong style=\"color:#fff;\">700025</strong> (Hazra side), <strong style=\"color:#fff;\">700068</strong> (Jodhpur Park edge), <strong style=\"color:#fff;\">700031</strong> (Dhakuria touch), <strong style=\"color:#fff;\">700020</strong> (Elgin Road edge)",
        "localities": ["Rashbehari Avenue", "Lake Market", "Deshapriya Park", "Lansdowne", "Triangular Park", "Hindustan Park", "Ballygunge Phari", "Gariahat", "Jatin Das Park", "Sarat Bose Road", "Hazra side", "Kalighat side", "Bhowanipore touch", "Southern Avenue", "Dover Lane"],
        "schools_kids": "South Point primary, Modern High, M.P. Birla Foundation",
        "schools_cbse": "South Point, Modern High, Birla High",
        "schools_icse": "South Point High School, Modern High School, La Martiniere",
        "schools_general_text": "South Point, Modern High, Birla High and other South Kolkata schools",
        "traffic_ref": "Rashbehari crossing and Lansdowne traffic",
        "traffic_short": "Rashbehari crossing",
        "centres_intro": "Rashbehari and Lake Market are tuition-dense, with rooms in residential lanes.",
        "near_landmarks": "Rashbehari crossing, Lake Market, and Deshapriya Park",
    },
    "salt-lake-kolkata": {
        "name": "Salt Lake", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700064</strong> (Salt Lake Sector I), <strong style=\"color:#fff;\">700091</strong> (Sector II, Sector III), <strong style=\"color:#fff;\">700106</strong> (Sector V IT belt), <strong style=\"color:#fff;\">700102</strong> (Karunamoyee side), <strong style=\"color:#fff;\">700156</strong> (New Town edge), <strong style=\"color:#fff;\">700101</strong> (Kestopur edge), <strong style=\"color:#fff;\">700089</strong> (Lake Town side)",
        "localities": ["Salt Lake Sector I", "Sector II", "Sector III", "Sector IV", "Sector V", "Karunamoyee", "City Centre I", "Bidhannagar", "FD Block", "DD Block", "BB Block", "AA Block", "Eastern Drainage Canal", "Salt Lake Stadium area", "Yuva Bharati Krirangan side"],
        "schools_kids": "DPS Megacity, Hariyana Vidya Mandir Salt Lake, Apeejay School Salt Lake",
        "schools_cbse": "DPS Megacity, Apeejay School Salt Lake, Aryan Public School",
        "schools_icse": "St. Joan's School, Holy Child Institution, Apeejay School",
        "schools_general_text": "DPS Megacity, Apeejay, St. Joan's and other Salt Lake schools",
        "traffic_ref": "Karunamoyee crossing and Sector V office traffic",
        "traffic_short": "Karunamoyee crossing",
        "centres_intro": "Salt Lake has private tuition rooms in residential blocks across all sectors.",
        "near_landmarks": "Karunamoyee crossing, City Centre I, and the Sector V Tech Hub",
    },
    "shakespeare-sarani-kolkata": {
        "name": "Shakespeare Sarani", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700017</strong> (Shakespeare Sarani, Camac Street), <strong style=\"color:#fff;\">700020</strong> (AJC Bose, Elgin Road), <strong style=\"color:#fff;\">700016</strong> (Park Street), <strong style=\"color:#fff;\">700071</strong> (Chowringhee), <strong style=\"color:#fff;\">700019</strong> (Ballygunge edge), <strong style=\"color:#fff;\">700025</strong> (Bhowanipore touch), <strong style=\"color:#fff;\">700013</strong> (Esplanade edge)",
        "localities": ["Shakespeare Sarani", "Camac Street", "Russell Street", "Theatre Road", "Park Street", "Wood Street", "Loudon Street", "AJC Bose Road", "Elgin Road", "Chowringhee", "Rawdon Street", "Park Mansions", "Mirza Ghalib Street", "Hungerford Street", "Ho Chi Minh Sarani"],
        "schools_kids": "La Martiniere, Modern High, Loreto House",
        "schools_cbse": "Modern High School, M.P. Birla Foundation, Future Foundation",
        "schools_icse": "La Martiniere, Loreto House, St. James'",
        "schools_general_text": "La Martiniere, Loreto House, Modern High and other central Kolkata schools",
        "traffic_ref": "Shakespeare Sarani and Camac Street traffic",
        "traffic_short": "Shakespeare Sarani crossing",
        "centres_intro": "The Shakespeare Sarani belt has premium tuition centres at premium prices.",
        "near_landmarks": "Shakespeare Sarani, Camac Street, and the AJC Bose junction",
    },
    "shyambazar-kolkata": {
        "name": "Shyambazar", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700004</strong> (Shyambazar, Bagbazar, Kumartuli), <strong style=\"color:#fff;\">700005</strong> (Hatibagan), <strong style=\"color:#fff;\">700006</strong> (Manicktala), <strong style=\"color:#fff;\">700003</strong> (Bagbazar side), <strong style=\"color:#fff;\">700009</strong> (College Street side), <strong style=\"color:#fff;\">700036</strong> (Baranagar edge), <strong style=\"color:#fff;\">700050</strong> (Belgachia)",
        "localities": ["Shyambazar 5-point", "Bagbazar", "Hatibagan", "Manicktala", "Kumartuli", "Sovabazar", "Bidhan Sarani", "Maniktala", "College Street side", "Belgachia edge", "RG Kar Road", "Narikeldanga", "Phoolbagan side", "Tala Park", "Cossipore touch"],
        "schools_kids": "Scottish Church Collegiate, Hare School (close), Hindu School (close)",
        "schools_cbse": "Khalsa English High School, KV Cossipore, Apeejay School",
        "schools_icse": "Scottish Church Collegiate, La Martiniere (nearby), St. Paul's Cathedral Mission",
        "schools_general_text": "Scottish Church Collegiate, Hindu School, Hare School and other North Kolkata schools",
        "traffic_ref": "Shyambazar 5-point crossing traffic",
        "traffic_short": "Shyambazar 5-point",
        "centres_intro": "Shyambazar has generations-old tuition rooms in residential homes around Hatibagan.",
        "near_landmarks": "Shyambazar 5-point crossing, Hatibagan, and the Bagbazar approach",
    },
    "southern-avenue-kolkata": {
        "name": "Southern Avenue", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700029</strong> (Southern Avenue, Lansdowne, Triangular Park), <strong style=\"color:#fff;\">700026</strong> (Lake Market, Rashbehari), <strong style=\"color:#fff;\">700045</strong> (Lake Gardens edge), <strong style=\"color:#fff;\">700019</strong> (Ballygunge), <strong style=\"color:#fff;\">700068</strong> (Jodhpur Park), <strong style=\"color:#fff;\">700031</strong> (Dhakuria), <strong style=\"color:#fff;\">700020</strong> (Elgin Road touch)",
        "localities": ["Southern Avenue", "Lansdowne", "Hindustan Park", "Dover Lane", "Ballygunge Phari", "Lake Market", "Deshapriya Park", "Jodhpur Park edge", "Golpark", "Selimpur side", "Rashbehari", "Dhakuria side", "Lake Gardens edge", "Triangular Park", "Sarat Bose Road"],
        "schools_kids": "South Point primary, Modern High, La Martiniere",
        "schools_cbse": "South Point, Modern High School, Birla High",
        "schools_icse": "South Point High School, Modern High School, La Martiniere",
        "schools_general_text": "South Point, Modern High, La Martiniere and other South Kolkata schools",
        "traffic_ref": "Southern Avenue and Lansdowne traffic",
        "traffic_short": "Southern Avenue signal",
        "centres_intro": "Southern Avenue and surrounding lanes have several premium tuition centres.",
        "near_landmarks": "Southern Avenue, Triangular Park, and Dover Lane",
    },
    "sreebhumi-kolkata": {
        "name": "Sreebhumi", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700048</strong> (Sreebhumi, Ultadanga), <strong style=\"color:#fff;\">700089</strong> (Lake Town edge), <strong style=\"color:#fff;\">700055</strong> (Bangur Avenue, Dum Dum Park), <strong style=\"color:#fff;\">700067</strong> (Phoolbagan), <strong style=\"color:#fff;\">700054</strong> (Maniktala side), <strong style=\"color:#fff;\">700028</strong> (Dum Dum edge), <strong style=\"color:#fff;\">700052</strong> (VIP Road touch)",
        "localities": ["Sreebhumi", "Lake Town", "Ultadanga", "Bangur Avenue", "VIP Road", "Phoolbagan", "Maniktala edge", "Patipukur", "Jessore Road touch", "Salt Lake border", "Dum Dum Park", "Khanna More", "Northern Avenue", "Kankurgachi side", "Karunamoyee edge"],
        "schools_kids": "Hariyana Vidya Mandir, Sudhir Memorial, Holy Child",
        "schools_cbse": "Hariyana Vidya Mandir, Apeejay School, Aryan Public School",
        "schools_icse": "Hariyana Vidya Mandir, Sudhir Memorial, Holy Cross",
        "schools_general_text": "Hariyana Vidya Mandir, Sudhir Memorial, Holy Cross and other North Kolkata schools",
        "traffic_ref": "Sreebhumi VIP Road junction traffic",
        "traffic_short": "Sreebhumi crossing",
        "centres_intro": "Sreebhumi and Lake Town have several neighbourhood tuition rooms.",
        "near_landmarks": "Sreebhumi VIP Road crossing, Lake Town clock tower, and Ultadanga junction",
    },
    "tollygunge-kolkata": {
        "name": "Tollygunge", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700033</strong> (Tollygunge, Charu Market), <strong style=\"color:#fff;\">700040</strong> (Naktala, Bansdroni edge), <strong style=\"color:#fff;\">700045</strong> (Lake Gardens edge), <strong style=\"color:#fff;\">700068</strong> (Bansdroni), <strong style=\"color:#fff;\">700026</strong> (Kalighat edge), <strong style=\"color:#fff;\">700053</strong> (New Alipore edge), <strong style=\"color:#fff;\">700038</strong> (Behala edge)",
        "localities": ["Tollygunge", "Tollygunge Phari", "Charu Market", "Bansdroni", "Naktala", "Kudghat", "Lake Gardens edge", "Prince Anwar Shah Road", "Mahanirvan Road", "NSC Bose Road", "Karunamoyee Tollygunge", "Tollygunge Metro", "Mahishbathan side", "Ballygunge edge", "Jadavpur edge"],
        "schools_kids": "South Point primary, Mahadevi Birla Shishu Vihar, Birla High",
        "schools_cbse": "South Point, Birla High, DPS Ruby Park",
        "schools_icse": "South Point High School, Modern High, Mahadevi Birla World Academy",
        "schools_general_text": "South Point, Birla High, Mahadevi Birla and other Tollygunge-area schools",
        "traffic_ref": "Tollygunge Phari and Prince Anwar Shah Road traffic",
        "traffic_short": "Tollygunge Phari",
        "centres_intro": "Tollygunge and Bansdroni have many small tuition rooms along Mahanirvan Road and Charu Market.",
        "near_landmarks": "Tollygunge Phari, Tollygunge Metro, and Prince Anwar Shah Road",
    },
    "vip-road-kolkata": {
        "name": "VIP Road", "city": "Kolkata",
        "pin_codes": "<strong style=\"color:#fff;\">700052</strong> (VIP Road, Lake Town side), <strong style=\"color:#fff;\">700059</strong> (Baguiati edge), <strong style=\"color:#fff;\">700101</strong> (Kestopur edge), <strong style=\"color:#fff;\">700089</strong> (Lake Town), <strong style=\"color:#fff;\">700048</strong> (Sreebhumi side), <strong style=\"color:#fff;\">700157</strong> (New Town edge), <strong style=\"color:#fff;\">700055</strong> (Bangur Avenue side)",
        "localities": ["VIP Road", "Baguiati", "Kestopur", "Lake Town", "Sreebhumi", "Tegharia", "Hatiara", "Krishnapur", "Aswini Nagar", "Deshbandhu Nagar", "Bangur Avenue", "Airport Gate 1 side", "Raghunathpur", "Joramandir", "Jagatpur"],
        "schools_kids": "Hariyana Vidya Mandir, Apeejay School Salt Lake, Holy Child",
        "schools_cbse": "Apeejay School, Hariyana Vidya Mandir, Aryan Public",
        "schools_icse": "Hariyana Vidya Mandir, Holy Child Institution, St. Stephen's",
        "schools_general_text": "Hariyana Vidya Mandir, Apeejay, Holy Child and other VIP Road-area schools",
        "traffic_ref": "VIP Road and Kestopur Bridge traffic",
        "traffic_short": "Baguiati VIP Road crossing",
        "centres_intro": "VIP Road has a growing belt of tuition centres serving North East Kolkata.",
        "near_landmarks": "Baguiati crossing, Kestopur Bridge, and the Sreebhumi VIP Road junction",
    },
    # ============================ HOWRAH ============================
    "andul-howrah": {
        "name": "Andul", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711302</strong> (Andul, Andul Mouri), <strong style=\"color:#fff;\">711310</strong> (Mahiari side), <strong style=\"color:#fff;\">711301</strong> (Sankrail edge), <strong style=\"color:#fff;\">711315</strong> (Uluberia approach), <strong style=\"color:#fff;\">711313</strong> (Bauria side), <strong style=\"color:#fff;\">711227</strong> (Bally edge), <strong style=\"color:#fff;\">711104</strong> (Howrah city side)",
        "localities": ["Andul", "Andul Mouri", "Sankrail edge", "Mahiari", "Pancharul", "Argori", "Maju", "Jala Dhulagori", "NH-16 corridor", "Andul Road", "Domjur edge", "Bauria side", "Uluberia approach", "Mourigram", "Sapuipara side"],
        "schools_kids": "Andul Mahiary B.M. Institution, Andul Kasundia Tarasundari, Bauria Bohu Bazar",
        "schools_cbse": "Adamas International, Sushila Birla Girls' (nearby), DPS Howrah (where applicable)",
        "schools_icse": "Howrah Vivekananda Institution, Andul Kasundia Tarasundari, MC Kejriwal Vidyapeeth",
        "schools_general_text": "Andul Mahiary B.M. Institution, Howrah Vivekananda and other Howrah-area schools",
        "traffic_ref": "Andul Road and NH-16 traffic",
        "traffic_short": "Andul Mouri",
        "centres_intro": "Andul and Mourigram have a handful of small private tuition rooms.",
        "near_landmarks": "Andul Mouri, the Andul Railway Station, and the NH-16 corridor",
    },
    "bally-howrah": {
        "name": "Bally", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711201</strong> (Bally core, Bally Halt), <strong style=\"color:#fff;\">711227</strong> (Bally Ghoshpara, Belur Math side), <strong style=\"color:#fff;\">711202</strong> (Bally Nimtala), <strong style=\"color:#fff;\">711203</strong> (Bally Dewangazi side), <strong style=\"color:#fff;\">711204</strong> (Liluah edge), <strong style=\"color:#fff;\">711205</strong> (Bally Beleghata edge), <strong style=\"color:#fff;\">711101</strong> (Howrah city side)",
        "localities": ["Bally", "Belur Math side", "Bally Halt", "Bally Ghoshpara", "Nischinda", "Bally Nimtala", "Bally Khal", "Dewangazi", "Liluah edge", "Dakshineswar approach", "Bally Bridge area", "Bally Court", "Hindmotor side", "GT Road Bally", "Belur"],
        "schools_kids": "St. Thomas' Church School, Bally Vidyapith, Don Bosco Liluah (nearby)",
        "schools_cbse": "Don Bosco Liluah, KV Belur, Adamas International",
        "schools_icse": "Don Bosco Liluah, MC Kejriwal Vidyapeeth, St. Thomas' Church School",
        "schools_general_text": "Don Bosco Liluah, St. Thomas' Church School and other Bally-area schools",
        "traffic_ref": "Bally Bridge and GT Road traffic",
        "traffic_short": "Bally Bridge",
        "centres_intro": "Bally has private tuition rooms along GT Road and around Belur Math.",
        "near_landmarks": "Bally Bridge, Belur Math, and the Bally Halt railway station",
    },
    "domjur-howrah": {
        "name": "Domjur", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711405</strong> (Domjur core), <strong style=\"color:#fff;\">711409</strong> (Bankra side), <strong style=\"color:#fff;\">711411</strong> (Salap, NH-16), <strong style=\"color:#fff;\">711403</strong> (Mahiyari, Salap junction), <strong style=\"color:#fff;\">711313</strong> (Bauria approach), <strong style=\"color:#fff;\">711302</strong> (Andul edge), <strong style=\"color:#fff;\">711104</strong> (Howrah city side)",
        "localities": ["Domjur", "Bankra", "Salap", "Mahiyari", "Nibra", "Tisha", "Kulai", "Begri", "Jhorhat", "Sapuipara", "Makardah", "Andul Road edge", "NH-16 corridor", "Bagnan approach", "Sankrail edge"],
        "schools_kids": "Domjur High School, Bankra Sri Sri Sitaram, Makardah Bahu Mukhi",
        "schools_cbse": "DPS Joka (nearby), Sushila Birla, Adamas International",
        "schools_icse": "Howrah Vivekananda Institution, MC Kejriwal, St. Thomas'",
        "schools_general_text": "Domjur High School, Howrah Vivekananda and other Howrah-area schools",
        "traffic_ref": "Domjur and Salap NH-16 traffic",
        "traffic_short": "Salap crossing",
        "centres_intro": "Domjur has a handful of small private tuition rooms in the bazaar lanes.",
        "near_landmarks": "Domjur bazaar, Salap More, and the NH-16 Salap junction",
    },
    "howrah-city-howrah": {
        "name": "Howrah City", "heading_name": "Howrah", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711101</strong> (Howrah Station, Pilkhana, Salkia), <strong style=\"color:#fff;\">711102</strong> (Shibpur, Howrah Maidan), <strong style=\"color:#fff;\">711103</strong> (Kadamtala, Shibpur edge), <strong style=\"color:#fff;\">711104</strong> (Mandirtala, Santragachi side), <strong style=\"color:#fff;\">711105</strong> (Belur side), <strong style=\"color:#fff;\">711106</strong> (Bandhaghat), <strong style=\"color:#fff;\">711108</strong> (Liluah edge)",
        "localities": ["Howrah Maidan", "Howrah Station area", "Pilkhana", "Salkia", "Shibpur", "Kadamtala", "Mandirtala", "Santragachi side", "Bandhaghat", "Liluah edge", "Belilious Road", "GT Road Howrah", "Hooghly riverside", "Foreshore Road", "Howrah Bridge approach"],
        "schools_kids": "Howrah Vivekananda Institution, St. Thomas' Day School Howrah, Don Bosco Liluah",
        "schools_cbse": "Don Bosco Liluah, KV Howrah, Adamas International",
        "schools_icse": "Howrah Vivekananda Institution, St. Thomas' Day School, MC Kejriwal Vidyapeeth",
        "schools_general_text": "Howrah Vivekananda, St. Thomas', Don Bosco Liluah and other Howrah city schools",
        "traffic_ref": "Howrah Bridge approach and GT Road traffic",
        "traffic_short": "Howrah Maidan",
        "centres_intro": "Howrah city has many private tuition rooms scattered across Shibpur, Salkia, and Kadamtala.",
        "near_landmarks": "Howrah Maidan, Howrah Station, and the Howrah Bridge approach",
    },
    "kadamtala-howrah": {
        "name": "Kadamtala", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711103</strong> (Kadamtala, Shibpur edge), <strong style=\"color:#fff;\">711102</strong> (Shibpur, Howrah Maidan), <strong style=\"color:#fff;\">711101</strong> (Howrah Station side), <strong style=\"color:#fff;\">711104</strong> (Mandirtala), <strong style=\"color:#fff;\">711106</strong> (Bandhaghat), <strong style=\"color:#fff;\">711108</strong> (Liluah edge), <strong style=\"color:#fff;\">711204</strong> (Liluah)",
        "localities": ["Kadamtala", "Shibpur edge", "Howrah Maidan", "Pilkhana", "Salkia", "Mandirtala side", "Bandhaghat", "Belilious Road", "G.T. Road Howrah", "Foreshore Road", "Hooghly riverside", "Howrah Station approach", "Liluah edge", "Bally edge", "Kona Expressway side"],
        "schools_kids": "Howrah Vivekananda, St. Thomas' Day School, Don Bosco Liluah",
        "schools_cbse": "KV Howrah, Don Bosco Liluah, Adamas International",
        "schools_icse": "Howrah Vivekananda Institution, St. Thomas', MC Kejriwal Vidyapeeth",
        "schools_general_text": "Howrah Vivekananda, St. Thomas', Don Bosco Liluah and other Howrah schools",
        "traffic_ref": "Kadamtala bazaar and GT Road Howrah traffic",
        "traffic_short": "Kadamtala crossing",
        "centres_intro": "Kadamtala has neighbourhood tuition rooms along GT Road and the inner lanes.",
        "near_landmarks": "Kadamtala bazaar, Howrah Maidan, and the Howrah Station approach",
    },
    "liluah-howrah": {
        "name": "Liluah", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711204</strong> (Liluah core, Don Bosco area), <strong style=\"color:#fff;\">711201</strong> (Bally edge), <strong style=\"color:#fff;\">711108</strong> (Belur edge), <strong style=\"color:#fff;\">711227</strong> (Belur Math side), <strong style=\"color:#fff;\">711205</strong> (Liluah Beleghata side), <strong style=\"color:#fff;\">711101</strong> (Howrah city side), <strong style=\"color:#fff;\">711203</strong> (Dewangazi side)",
        "localities": ["Liluah", "Don Bosco Liluah area", "Bally edge", "Belur edge", "Belur Math approach", "GT Road Liluah", "Liluah Beleghata", "Dewangazi", "Bally Halt side", "Hindmotor side", "Bandhaghat side", "Liluah Bazaar", "Liluah Workshop", "Liluah Station", "Belilious Road approach"],
        "schools_kids": "Don Bosco Liluah, Auxilium Convent School, St. Aloysius",
        "schools_cbse": "Don Bosco Liluah, KV Howrah, Adamas International",
        "schools_icse": "Don Bosco Liluah, Auxilium Convent, MC Kejriwal Vidyapeeth",
        "schools_general_text": "Don Bosco Liluah, Auxilium Convent, MC Kejriwal and other Liluah-area schools",
        "traffic_ref": "Liluah crossing and GT Road traffic",
        "traffic_short": "Liluah crossing",
        "centres_intro": "Liluah has a number of private tuition rooms around Don Bosco and the railway colony.",
        "near_landmarks": "Don Bosco School, Liluah railway station, and the Bally-Liluah junction",
    },
    "mandirtala-howrah": {
        "name": "Mandirtala", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711104</strong> (Mandirtala, Santragachi side), <strong style=\"color:#fff;\">711102</strong> (Shibpur edge), <strong style=\"color:#fff;\">711103</strong> (Kadamtala side), <strong style=\"color:#fff;\">711101</strong> (Howrah city), <strong style=\"color:#fff;\">711106</strong> (Bandhaghat), <strong style=\"color:#fff;\">711108</strong> (Liluah edge), <strong style=\"color:#fff;\">711302</strong> (Andul edge)",
        "localities": ["Mandirtala", "Santragachi side", "Shibpur edge", "Kadamtala edge", "Belilious Road", "Howrah Maidan", "GT Road Howrah", "Hooghly riverside", "Foreshore Road", "Howrah Station approach", "Bandhaghat", "Kona Expressway approach", "Pilkhana side", "Mourigram side", "Botanical Garden side"],
        "schools_kids": "Howrah Vivekananda Institution, St. Thomas' Day School, Don Bosco Liluah",
        "schools_cbse": "KV Howrah, Don Bosco Liluah, Adamas International",
        "schools_icse": "Howrah Vivekananda Institution, St. Thomas', MC Kejriwal",
        "schools_general_text": "Howrah Vivekananda, St. Thomas', Don Bosco Liluah and other Howrah schools",
        "traffic_ref": "Mandirtala and Belilious Road traffic",
        "traffic_short": "Mandirtala crossing",
        "centres_intro": "Mandirtala has neighbourhood tuition rooms along Belilious Road.",
        "near_landmarks": "Mandirtala crossing, Belilious Road, and the Howrah Maidan approach",
    },
    "ramrajatala-howrah": {
        "name": "Ramrajatala", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711104</strong> (Ramrajatala, Santragachi side), <strong style=\"color:#fff;\">711102</strong> (Shibpur edge), <strong style=\"color:#fff;\">711103</strong> (Kadamtala edge), <strong style=\"color:#fff;\">711101</strong> (Howrah city), <strong style=\"color:#fff;\">711106</strong> (Bandhaghat), <strong style=\"color:#fff;\">711302</strong> (Andul edge), <strong style=\"color:#fff;\">711108</strong> (Liluah edge)",
        "localities": ["Ramrajatala", "Santragachi", "Shibpur edge", "Mandirtala edge", "Howrah Maidan", "GT Road Howrah", "Belilious Road", "Andul Road approach", "Foreshore Road", "Kona Expressway", "Pilkhana side", "Mourigram side", "Botanical Garden side", "Sapuipara approach", "Bagnan approach"],
        "schools_kids": "Howrah Vivekananda Institution, St. Thomas' Day School, Don Bosco Liluah",
        "schools_cbse": "KV Howrah, Don Bosco Liluah, Adamas International",
        "schools_icse": "Howrah Vivekananda Institution, St. Thomas', MC Kejriwal Vidyapeeth",
        "schools_general_text": "Howrah Vivekananda, St. Thomas', Don Bosco Liluah and other Howrah schools",
        "traffic_ref": "Ramrajatala and Andul Road traffic",
        "traffic_short": "Ramrajatala crossing",
        "centres_intro": "Ramrajatala has small tuition rooms in the bazaar lanes.",
        "near_landmarks": "Ramrajatala Station, Andul Road, and the Santragachi approach",
    },
    "santragachi-howrah": {
        "name": "Santragachi", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711104</strong> (Santragachi core, Mandirtala), <strong style=\"color:#fff;\">711102</strong> (Shibpur edge), <strong style=\"color:#fff;\">711101</strong> (Howrah city), <strong style=\"color:#fff;\">711103</strong> (Kadamtala), <strong style=\"color:#fff;\">711302</strong> (Andul edge), <strong style=\"color:#fff;\">711108</strong> (Liluah edge), <strong style=\"color:#fff;\">711106</strong> (Bandhaghat)",
        "localities": ["Santragachi", "Mandirtala", "Ramrajatala", "Shibpur edge", "Kadamtala edge", "Howrah Maidan", "Belilious Road", "Andul Road approach", "Foreshore Road", "Kona Expressway", "GT Road Howrah", "Bagnan approach", "Sapuipara side", "Howrah Station approach", "Bandhaghat"],
        "schools_kids": "Howrah Vivekananda Institution, St. Thomas' Day School, Don Bosco Liluah",
        "schools_cbse": "KV Howrah, Don Bosco Liluah, Adamas International",
        "schools_icse": "Howrah Vivekananda Institution, St. Thomas', MC Kejriwal",
        "schools_general_text": "Howrah Vivekananda, St. Thomas', Don Bosco Liluah and other Howrah schools",
        "traffic_ref": "Santragachi Bridge and Kona Expressway traffic",
        "traffic_short": "Santragachi crossing",
        "centres_intro": "Santragachi has neighbourhood tuition rooms near the Junction Station.",
        "near_landmarks": "Santragachi Junction Station, Kona Expressway, and the Mandirtala approach",
    },
    "shibpur-howrah": {
        "name": "Shibpur", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711102</strong> (Shibpur, Howrah Maidan), <strong style=\"color:#fff;\">711103</strong> (Shibpur Botanical, Kadamtala edge), <strong style=\"color:#fff;\">711104</strong> (Mandirtala side), <strong style=\"color:#fff;\">711101</strong> (Howrah city), <strong style=\"color:#fff;\">711106</strong> (Bandhaghat), <strong style=\"color:#fff;\">711108</strong> (Liluah edge), <strong style=\"color:#fff;\">711302</strong> (Andul edge)",
        "localities": ["Shibpur", "Botanical Garden area", "IIEST Shibpur side", "Howrah Maidan", "Kadamtala edge", "Mandirtala side", "Belilious Road", "GT Road Howrah", "Andul Road approach", "Hooghly riverside", "Foreshore Road", "Pilkhana side", "Salkia", "Bandhaghat", "Kona Expressway approach"],
        "schools_kids": "Howrah Vivekananda Institution, St. Thomas' Day School, Don Bosco Liluah",
        "schools_cbse": "KV Howrah, Don Bosco Liluah, Adamas International",
        "schools_icse": "Howrah Vivekananda Institution, St. Thomas', MC Kejriwal Vidyapeeth",
        "schools_general_text": "Howrah Vivekananda, St. Thomas', Don Bosco Liluah and other Howrah schools",
        "traffic_ref": "Shibpur and Andul Road traffic",
        "traffic_short": "Shibpur crossing",
        "centres_intro": "Shibpur has private tuition rooms in residential lanes around the Botanical Garden.",
        "near_landmarks": "Shibpur Botanical Garden, IIEST Shibpur, and the Mandirtala approach",
    },
    "uluberia-howrah": {
        "name": "Uluberia", "city": "Howrah",
        "pin_codes": "<strong style=\"color:#fff;\">711315</strong> (Uluberia core), <strong style=\"color:#fff;\">711316</strong> (Uluberia approach), <strong style=\"color:#fff;\">711314</strong> (Bauria), <strong style=\"color:#fff;\">711313</strong> (Bauria, Birshibpur side), <strong style=\"color:#fff;\">711302</strong> (Andul edge), <strong style=\"color:#fff;\">711308</strong> (Bagnan side), <strong style=\"color:#fff;\">711309</strong> (Mahisrekha)",
        "localities": ["Uluberia", "Bauria", "Birshibpur", "Mahisrekha", "Bagnan approach", "NH-16 corridor", "Andul edge", "Sankrail approach", "Khalisani side", "Kalighat (Uluberia)", "Khalore", "Joypur", "Garu side", "Tatu side", "Boitar"],
        "schools_kids": "Uluberia Yogesh Chandra Vidyalaya, Bauria Bohu Bazar, Khalisani Vidyamandir",
        "schools_cbse": "KV Uluberia (where applicable), Adamas International, DAV Public School",
        "schools_icse": "Uluberia Vivekananda Institution, MC Kejriwal Vidyapeeth, Howrah Vivekananda",
        "schools_general_text": "Uluberia Vivekananda, Yogesh Chandra Vidyalaya and other Uluberia-area schools",
        "traffic_ref": "Uluberia NH-16 and Bauria Road traffic",
        "traffic_short": "Uluberia bus stand",
        "centres_intro": "Uluberia has a handful of small private tuition rooms in the town bazaar.",
        "near_landmarks": "Uluberia bus stand, Bauria, and the NH-16 corridor",
    },
}

# ---------------------------------------------------------------------------
# TEMPLATES
# ---------------------------------------------------------------------------


META_DESC_TEMPLATE = (
    'Live online coding classes near {name}, {city} for kids, teens & college students. '
    'Python, Java, Scratch, AI/ML + Maths tuition. ICSE/CBSE board prep for '
    '{schools_general_short} students. Small live batches (max 6-8). '
    'From ₹1,499/mo. Free demo today.'
)

LIVE_ONLINE_SECTION = """    <!-- ============================================
         LIVE ONLINE FORMAT — PARENT EXPLAINER
         ============================================ -->
    <section class="loc-section" id="how-live-online-works">
        <div class="inner-narrow">
            <div class="accent-bar"></div>
            <h2 class="section-heading gradient-text-static">
                Live Online Coding Classes near {name} &mdash; What Parents Should Know
            </h2>
            <p style="text-align: center; color: #94a3b8; max-width: 720px; margin: 0 auto 40px; line-height: 1.85; font-size: 15.5px;">
                {name} parents have heard every coding pitch in the city. Most "online" courses are actually pre-recorded videos pretending to be classes &mdash; the kind that get abandoned in week three. <strong style="color:#e9d5ff;">Modern Age Coders is different.</strong> Every single class near {name} is taught <strong style="color:#fff;">100% live</strong> by a real instructor on Zoom or Google Meet, with your child's screen visible, hand-raised questions answered in real time, and feedback delivered the moment a bug appears. Parents from {schools_general_short} consistently tell us this is the single biggest reason they switched from local tuition rooms.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; margin-top: 32px;">
                <div class="glass" style="padding: 28px 26px;">
                    <div style="font-size: 1.8rem; margin-bottom: 12px;">&#128250;</div>
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#fff; margin:0 0 10px;">100% Live, Not Pre-Recorded</h3>
                    <p style="color:#9aa6b8; font-size:14.5px; line-height:1.8; margin:0;">Every class is delivered live by an instructor who can see your child's screen, debug in real time, and adjust pace based on the room. No "playlist of videos" trickery sold as a course.</p>
                </div>
                <div class="glass" style="padding: 28px 26px;">
                    <div style="font-size: 1.8rem; margin-bottom: 12px;">&#128104;&#8205;&#128105;&#8205;&#128103;&#8205;&#128102;</div>
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#fff; margin:0 0 10px;">Max 6&ndash;8 Students per Live Batch</h3>
                    <p style="color:#9aa6b8; font-size:14.5px; line-height:1.8; margin:0;">Smaller than any {name}-area tuition class you'll find. Your child gets called on, asked questions, corrected, mentored &mdash; not lost in a crowd of 30+.</p>
                </div>
                <div class="glass" style="padding: 28px 26px;">
                    <div style="font-size: 1.8rem; margin-bottom: 12px;">&#127968;</div>
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#fff; margin:0 0 10px;">Zero Travel through {traffic_short_short} Traffic</h3>
                    <p style="color:#9aa6b8; font-size:14.5px; line-height:1.8; margin:0;">No fighting evening {traffic_ref}, no auto-changing at busy crossings. Your child logs in from home; you save 90 minutes of commute each class day.</p>
                </div>
                <div class="glass" style="padding: 28px 26px;">
                    <div style="font-size: 1.8rem; margin-bottom: 12px;">&#128221;</div>
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#fff; margin:0 0 10px;">Recordings + Notes After Each Class</h3>
                    <p style="color:#9aa6b8; font-size:14.5px; line-height:1.8; margin:0;">Missed a class because of school exams, a family visit, or a Saraswati Pujo holiday? Get the recording, instructor's notes, and the code repository the same evening.</p>
                </div>
                <div class="glass" style="padding: 28px 26px;">
                    <div style="font-size: 1.8rem; margin-bottom: 12px;">&#128187;</div>
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#fff; margin:0 0 10px;">Project-Based, Not Theory-Heavy</h3>
                    <p style="color:#9aa6b8; font-size:14.5px; line-height:1.8; margin:0;">Your child builds &mdash; a game, a website, a Python script, a maths solver. By the end of each module they have a real project they can show off to family and friends.</p>
                </div>
                <div class="glass" style="padding: 28px 26px;">
                    <div style="font-size: 1.8rem; margin-bottom: 12px;">&#128104;&#8205;&#127979;</div>
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#fff; margin:0 0 10px;">Parent Updates Every Month</h3>
                    <p style="color:#9aa6b8; font-size:14.5px; line-height:1.8; margin:0;">You receive a written progress report each month: what your child built, where they're struggling, what's next. You're never wondering whether the fees are working.</p>
                </div>
            </div>

            <p style="text-align: center; color: #64748b; margin-top: 36px; font-size: 14px; line-height: 1.85;">
                Want to see it before paying anything? <a href="/contact" style="color:#a855f7; font-weight: 600;">Book a free live demo class</a> &mdash; no payment, no commitment, just sit beside your child and watch one full session.
            </p>
        </div>
    </section>


    <!-- ============================================
         NEARBY SCHOOLS
         ============================================ -->
    <section class="loc-section">
        <div class="inner-narrow">
            <div class="accent-bar"></div>
            <h2 class="section-heading gradient-text-static">
                Schools near {name} Whose Students Learn with Us
            </h2>"""


FOUR_NEW_SECTIONS_TEMPLATE = """    <!-- ============================================
         NEIGHBOURHOODS NEAR {NAME_UPPER} WE SERVE
         ============================================ -->
    <section class="loc-section" id="neighbourhoods-served">
        <div class="inner-narrow">
            <div class="accent-bar"></div>
            <h2 class="section-heading gradient-text-static">
                Neighbourhoods near {name} We Serve
            </h2>
            <p style="text-align: center; color: #94a3b8; max-width: 720px; margin: 0 auto 36px; line-height: 1.85; font-size: 15.5px;">
                Because every class is live online, we serve students across the entire {name} belt and adjoining {city} localities. If you live anywhere in the pin code range below, you're a Modern Age Coders student in waiting.
            </p>

            <div class="glass" style="padding: 32px; margin-top: 24px;">
                <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#c4b5fd; margin:0 0 14px;">Pin codes we actively teach in</h3>
                <p style="color:#cbd5e1; font-size:15px; line-height:2; margin:0 0 20px;">
                    {pin_codes}.
                </p>

                <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#67e8f9; margin:24px 0 14px;">Localities our students log in from</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
{locality_pills}
                </div>

                <p style="color:#94a3b8; font-size:14.5px; line-height:1.9; margin:24px 0 0;">
                    Live somewhere not listed? It doesn't matter &mdash; <a href="/contact" style="color:#a855f7; font-weight: 600;">book a free demo</a> and we'll teach your child wherever they are, as long as there's internet and a laptop or desktop in the house.
                </p>
            </div>
        </div>
    </section>


    <!-- ============================================
         CLASS TIMINGS & WEEKLY SCHEDULE
         ============================================ -->
    <section class="loc-section" id="class-schedule">
        <div class="inner">
            <div class="accent-bar"></div>
            <h2 class="section-heading gradient-text-static">
                Class Timings &amp; Weekly Schedule for Students near {name}
            </h2>
            <p style="text-align: center; color: #94a3b8; max-width: 720px; margin: 0 auto 44px; line-height: 1.85; font-size: 15.5px;">
                Most {city} schools dismiss between 1:30 PM and 4:00 PM. Our schedule is built around that &mdash; with after-school evening slots and dedicated weekend batches for students juggling school, school tuition, and our coding/maths classes.
            </p>

            <div class="offer-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <div class="offer-card purple">
                    <span class="card-emoji">&#9728;&#65039;</span>
                    <h3>Morning Slot &mdash; 9:00 to 11:00 AM</h3>
                    <p class="card-desc">Best for: kindergarten kids, working professionals, college students in evening jobs, or weekend learners.</p>
                    <ul>
                        <li>Saturday &amp; Sunday batches available</li>
                        <li>Adults &amp; corporate upskilling track</li>
                        <li>Weekday morning &mdash; on request</li>
                    </ul>
                </div>

                <div class="offer-card cyan">
                    <span class="card-emoji">&#127979;</span>
                    <h3>After-School Slot &mdash; 4:30 to 7:30 PM</h3>
                    <p class="card-desc">The most popular slot for kids and teens near {name}. School ends, snack, log in. Two classes a week, 60 minutes each.</p>
                    <ul>
                        <li>Monday/Wednesday or Tuesday/Thursday</li>
                        <li>Kids (6&ndash;12), Teens (13&ndash;18)</li>
                        <li>ICSE / CBSE / WBBSE board students</li>
                    </ul>
                </div>

                <div class="offer-card amber">
                    <span class="card-emoji">&#127770;</span>
                    <h3>Evening Slot &mdash; 7:30 to 9:30 PM</h3>
                    <p class="card-desc">For senior students balancing school tuition. Late-evening slot leaves room for school work and family dinner.</p>
                    <ul>
                        <li>Class 9&ndash;12 board prep</li>
                        <li>JEE/Olympiad maths track</li>
                        <li>College students &amp; working learners</li>
                    </ul>
                </div>

                <div class="offer-card green">
                    <span class="card-emoji">&#128197;</span>
                    <h3>Weekend Intensive &mdash; Sat/Sun</h3>
                    <p class="card-desc">For families with packed weekday tuition schedules. Two longer sessions on the weekend cover the same syllabus.</p>
                    <ul>
                        <li>2 &times; 90-minute sessions/week</li>
                        <li>Same curriculum, fewer interruptions</li>
                        <li>Recordings sent for revision</li>
                    </ul>
                </div>
            </div>

            <p style="text-align: center; color: #64748b; margin-top: 36px; font-size: 14.5px; line-height: 1.85;">
                Holidays during school exams or Durga Pujo, Saraswati Pujo, Christmas? Tell us in advance &mdash; we adjust your batch schedule and never charge for paused weeks.
            </p>
        </div>
    </section>


    <!-- ============================================
         CURRICULUM SNAPSHOT
         ============================================ -->
    <section class="loc-section" id="curriculum-snapshot">
        <div class="inner">
            <div class="accent-bar"></div>
            <h2 class="section-heading gradient-text-static">
                What's Actually Taught &mdash; Curriculum Snapshot
            </h2>
            <p style="text-align: center; color: #94a3b8; max-width: 720px; margin: 0 auto 44px; line-height: 1.85; font-size: 15.5px;">
                {name} parents ask hard questions about what their child is actually going to learn. Here's a clean breakdown of three of our most-requested live online tracks.
            </p>

            <div style="display: grid; gap: 22px;">

                <div class="glass" style="padding: 32px;">
                    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px; flex-wrap: wrap;">
                        <span class="pill pill-purple">Kids Track</span>
                        <h3 style="font-family:'Syne',sans-serif; font-weight:800; font-size:1.25rem; color:#fff; margin:0;">Scratch &amp; Block Coding &mdash; Ages 6 to 10</h3>
                    </div>
                    <p style="color:#cbd5e1; line-height:1.9; font-size:15px; margin:0 0 14px;">A 12&ndash;16 week module that takes a complete beginner from "what is a computer" to building their own animated stories, simple games, and interactive birthday cards. Ideal first step for kids at {schools_kids} and similar {name}-area primary sections.</p>
                    <p style="color:#a1afc4; line-height:1.85; font-size:14.5px; margin:0;"><strong style="color:#c4b5fd;">You'll learn:</strong> sequencing, loops, events, conditionals, variables, sprites, costumes, parallel scripts, simple maths in code, debugging. <strong style="color:#c4b5fd;">You'll build:</strong> animated story project, maze game, quiz app, drawing tool, and a final showcase project of the child's choice.</p>
                </div>

                <div class="glass" style="padding: 32px;">
                    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px; flex-wrap: wrap;">
                        <span class="pill pill-cyan">Teens Track</span>
                        <h3 style="font-family:'Syne',sans-serif; font-weight:800; font-size:1.25rem; color:#fff; margin:0;">Python Programming &mdash; Ages 12 to 17</h3>
                    </div>
                    <p style="color:#cbd5e1; line-height:1.9; font-size:15px; margin:0 0 14px;">A 24&ndash;30 week deep-dive covering everything CBSE Class 11&ndash;12 Informatics Practices needs, plus genuine programming maturity. Built for students at {schools_cbse} and other CBSE-track {name}-area schools.</p>
                    <p style="color:#a1afc4; line-height:1.85; font-size:14.5px; margin:0;"><strong style="color:#67e8f9;">You'll learn:</strong> variables, data types, control flow, functions, lists, dictionaries, file I/O, OOP, exception handling, modules, pandas/numpy basics, plotting, MySQL connectivity, project planning. <strong style="color:#67e8f9;">You'll build:</strong> calculator, hangman, expense tracker, mini library system, data visualisation dashboard, board-exam style projects.</p>
                </div>

                <div class="glass" style="padding: 32px;">
                    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px; flex-wrap: wrap;">
                        <span class="pill pill-amber">ICSE Board Track</span>
                        <h3 style="font-family:'Syne',sans-serif; font-weight:800; font-size:1.25rem; color:#fff; margin:0;">Java for Class 9&ndash;10 ICSE Computer Applications</h3>
                    </div>
                    <p style="color:#cbd5e1; line-height:1.9; font-size:15px; margin:0 0 14px;">Built specifically for the ICSE Java syllabus that {schools_icse} and other ICSE-track {name}-area schools follow. Covers theory + every practical that shows up in the Class 10 BlueJ paper.</p>
                    <p style="color:#a1afc4; line-height:1.85; font-size:14.5px; margin:0;"><strong style="color:#fcd34d;">You'll learn:</strong> Java syntax, primitive types, operators, control structures, functions, arrays, strings, classes, objects, constructors, inheritance, BlueJ environment, ISC-level standard library, project documentation. <strong style="color:#fcd34d;">You'll build:</strong> 25+ board-style programs, full mock practical exams, viva voce preparation, project file ready to submit.</p>
                </div>

            </div>

            <p style="text-align: center; color: #64748b; margin-top: 32px; font-size: 14.5px; line-height: 1.85;">
                Looking for Maths, Web Development, AI/ML, DSA, or MERN Stack? <a href="/courses" style="color:#06b6d4; font-weight: 600;">See all courses</a> &mdash; every track has the same depth as the three above.
            </p>
        </div>
    </section>


    <!-- ============================================
         ONLINE vs OFFLINE TUITION COMPARISON
         ============================================ -->
    <section class="loc-section" id="online-vs-offline">
        <div class="inner-narrow">
            <div class="accent-bar"></div>
            <h2 class="section-heading gradient-text-static">
                Live Online vs. Offline Coding Tuition near {name} &mdash; Honest Comparison
            </h2>
            <p style="text-align: center; color: #94a3b8; max-width: 720px; margin: 0 auto 36px; line-height: 1.85; font-size: 15.5px;">
                {centres_intro} We don't pretend otherwise. But there are real reasons our live online format works better for serious coding and maths learning &mdash; and a couple of honest cases where offline still wins. Read both sides before you decide.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 24px;">
                <div class="glass" style="padding: 28px; border-color: rgba(168,85,247,0.25);">
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#c4b5fd; margin:0 0 14px;">&#10003; Where Live Online Wins</h3>
                    <ul style="list-style: none; padding: 0; margin: 0; color:#cbd5e1; font-size:14.5px; line-height:1.9;">
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#a855f7;">&#9656;</span> Smaller batch (6&ndash;8) than the average {name} centre (20&ndash;40)</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#a855f7;">&#9656;</span> Instructors are full-time coders, not part-time tutors</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#a855f7;">&#9656;</span> Recorded sessions for revision &mdash; impossible offline</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#a855f7;">&#9656;</span> Zero commute through {traffic_short} traffic</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#a855f7;">&#9656;</span> Make-up class for missed sessions, free of charge</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#a855f7;">&#9656;</span> Pause batch during board exams or Pujo holidays</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#a855f7;">&#9656;</span> Real industry curriculum &mdash; not just board syllabus</li>
                    </ul>
                </div>

                <div class="glass" style="padding: 28px; border-color: rgba(245,158,11,0.2);">
                    <h3 style="font-family:'Syne',sans-serif; font-weight:700; font-size:1.05rem; color:#fcd34d; margin:0 0 14px;">When Offline Still Wins</h3>
                    <ul style="list-style: none; padding: 0; margin: 0; color:#cbd5e1; font-size:14.5px; line-height:1.9;">
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#f59e0b;">&#9656;</span> If the child genuinely cannot focus without a teacher in the room</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#f59e0b;">&#9656;</span> If there's no laptop/desktop available at home in {name}</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#f59e0b;">&#9656;</span> If internet bandwidth is consistently below 5 Mbps</li>
                        <li style="padding: 6px 0 6px 22px; position: relative;"><span style="position:absolute; left:0; color:#f59e0b;">&#9656;</span> If parent wants in-person, in-the-room supervision of the child</li>
                    </ul>
                    <p style="color:#94a3b8; font-size:13.5px; line-height:1.85; margin:18px 0 0; font-style: italic;">
                        For everything else &mdash; especially serious skills that grow with the child &mdash; live online with a small batch beats offline coaching consistently.
                    </p>
                </div>
            </div>
        </div>
    </section>


    <!-- ============================================
         HOW IT WORKS
         ============================================ -->
    <section class="loc-section">
        <div class="inner" style="max-width: 1000px;">
            <div class="accent-bar"></div>
            <h2 class="section-heading gradient-text-static">
                How to Start Coding &amp; Maths Classes from {name}
            </h2>"""


NEW_FAQS_HTML = """

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        How are your live online classes different from coaching centres near {near_landmark_1} or {near_landmark_2}?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">Three big differences. <strong>First</strong>, batch size: most {name} tuition rooms have 20&ndash;40 children; ours never exceed 6&ndash;8. <strong>Second</strong>, instructor profile: we hire full-time software engineers and maths graduates, not part-time tutors moonlighting after their day jobs. <strong>Third</strong>, format: every class is project-based and your child writes real code every session &mdash; not just copies notes from a whiteboard. Plus, you save the daily commute through {traffic_ref}.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        What if my child misses a class because of school exams or a Pujo holiday?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">No problem at all. You get the full recording of the missed class, the instructor's notes, the code repository, and a free 30-minute doubt-clearing session before the next live class. During Durga Pujo, Saraswati Pujo, Christmas or board exam weeks, just tell us in advance and we pause your batch &mdash; you never pay for paused weeks.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        What laptop and internet speed does my child need at home in {name}?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">A basic laptop or desktop with 4 GB RAM and Windows 10/11, macOS, or Ubuntu works fine. Chromebooks also work for younger kids on Scratch and web design. Internet speed of <strong>5 Mbps or higher</strong> is comfortable; most Jio Fiber, Airtel Xstream, and ACT connections in the {name} belt are 100+ Mbps. We send a checklist before the first class so you can verify everything in 5 minutes.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        Do you give homework and projects, or just live class time?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">Both. Every live class includes hands-on coding inside the session, plus a short take-home task (15&ndash;30 minutes for kids, 30&ndash;60 minutes for teens). Each module ends with a real project that goes into your child's personal portfolio &mdash; useful later for college applications, top engineering programmes, or just showing off to family.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        Will my child interact with other students in your live online classes near {name}?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">Yes &mdash; that's the whole point of a 6&ndash;8 student live batch. Students share screens, debug each other's code, present mini-projects to the group, and build social-coding habits that matter later in college and at work. It's the opposite of a lonely YouTube tutorial experience.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        My child is from a Bengali-medium school near {name}. Will language be a problem?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">Not at all. Several students from Bengali-medium and Hindi-medium schools enrol every batch. Programming itself is in English (it has to be &mdash; that's how Python and Java work), but our instructors patiently explain concepts in simple English and switch to Bangla or Hindi when helpful. Within 3&ndash;4 weeks, children are comfortable with the technical vocabulary.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        Can I sit in the room while my child takes the class?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">Yes &mdash; in fact, we encourage it for the first 2&ndash;3 classes, especially for kids under 12. You see exactly what is being taught, how the instructor handles your child, and what's expected as homework. After that, most parents step away because the class becomes a natural flow your child enjoys independently.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-q" onclick="toggleFaq(this)">
                        Will my child get a certificate after completing the course?
                        <span class="faq-icon">+</span>
                    </div>
                    <div class="faq-a">Yes. At the end of every course, students get a Modern Age Coders completion certificate, plus the project portfolio they built. For ICSE/CBSE board students at {schools_general_short} and other {name}-area schools, we also help compile the syllabus-mandated project files in the format your school accepts.</div>
                </div>"""


NEW_FAQS_SCHEMA = """,
            {{ "@type": "Question", "name": "How are your live online classes different from coaching centres near {near_landmark_1} or {near_landmark_2}, {name}?", "acceptedAnswer": {{ "@type": "Answer", "text": "Three differences: batch size (6-8 vs 20-40 at most {name} tuition centres), instructor profile (full-time software engineers and maths graduates, not part-time tutors), and format (project-based live coding every class, not whiteboard notes). Plus zero commute through {traffic_ref}." }} }},
            {{ "@type": "Question", "name": "What if my child misses a class because of school exams or a Pujo holiday near {name}?", "acceptedAnswer": {{ "@type": "Answer", "text": "You receive the full class recording, instructor's notes, code repository, and a free 30-minute doubt-clearing session before the next live class. During Durga Pujo, Saraswati Pujo, Christmas, or board exam weeks, batches can be paused on request with no charge for paused weeks." }} }},
            {{ "@type": "Question", "name": "What laptop and internet speed does my child need at home in {name}?", "acceptedAnswer": {{ "@type": "Answer", "text": "A basic laptop or desktop with 4 GB RAM and Windows 10/11, macOS, or Ubuntu is sufficient. Chromebooks work for Scratch and web design. Internet speed of 5 Mbps or higher is comfortable; most Jio Fiber, Airtel Xstream, and ACT connections in {name} are far above this." }} }},
            {{ "@type": "Question", "name": "Do you give homework and projects after each live coding class?", "acceptedAnswer": {{ "@type": "Answer", "text": "Yes. Every class includes hands-on coding inside the session plus a short take-home task: 15-30 minutes for kids, 30-60 minutes for teens. Each module ends with a portfolio project useful for college applications and engineering programme interviews." }} }},
            {{ "@type": "Question", "name": "Will my child interact with other students in your live online classes near {name}?", "acceptedAnswer": {{ "@type": "Answer", "text": "Yes. In a 6-8 student live batch, students share screens, debug each other's code, present mini-projects to the group, and build social coding habits that pay off later in college and at work. Very different from a lonely YouTube tutorial." }} }},
            {{ "@type": "Question", "name": "My child is from a Bengali-medium school near {name}. Will language be a problem in coding classes?", "acceptedAnswer": {{ "@type": "Answer", "text": "No. Several students from Bengali-medium and Hindi-medium schools enrol every batch. Programming syntax is in English, but instructors explain concepts in simple English and switch to Bangla or Hindi when helpful. Most students adapt to the technical vocabulary within 3-4 weeks." }} }},
            {{ "@type": "Question", "name": "Can a parent sit in the room while the child takes the live coding class?", "acceptedAnswer": {{ "@type": "Answer", "text": "Yes, and we encourage it for the first 2-3 classes, especially for children under 12. Parents see what is taught, how the instructor handles the child, and what is expected as homework. Most parents step away after that as the child grows comfortable." }} }},
            {{ "@type": "Question", "name": "Will my child get a coding certificate after completing the course near {name}?", "acceptedAnswer": {{ "@type": "Answer", "text": "Yes. Every course ends with a Modern Age Coders completion certificate plus the project portfolio built during the course. For ICSE and CBSE board students at {schools_general_short} and other {name}-area schools, project files are compiled in the format the school accepts for board project submission." }} }}"""


# ---------------------------------------------------------------------------
# HELPERS
# ---------------------------------------------------------------------------

# A small palette cycle for locality pills, matching the manual reference pages.
PILL_COLORS = ["pill-purple", "pill-cyan", "pill-amber", "pill-pink", "pill-green"]


def render_locality_pills(localities: list[str]) -> str:
    lines = []
    for i, loc in enumerate(localities):
        color = PILL_COLORS[i % len(PILL_COLORS)]
        lines.append(f'                    <span class="pill {color}">{loc}</span>')
    return "\n".join(lines)


def short_schools(general_text: str) -> str:
    """Trim to 3 school names for the meta description and tagline."""
    parts = [p.strip() for p in general_text.split(",")]
    return ", ".join(parts[:3])


def derive_traffic_short_short(traffic_short: str) -> str:
    """Trim the traffic_short into a CSS-friendly word for the third card heading."""
    return traffic_short.replace("crossing", "").replace("Crossing", "").strip() or traffic_short


# ---------------------------------------------------------------------------
# CORE EDITS
# ---------------------------------------------------------------------------


def replace_meta_description(html: str, data: dict) -> str:
    new_desc = META_DESC_TEMPLATE.format(
        name=data["name"],
        city=data["city"],
        schools_general_short=short_schools(data["schools_general_text"]),
    )
    pattern = re.compile(
        r'(<meta name="description" content=")[^"]*(">)'
    )
    return pattern.sub(lambda m: f'{m.group(1)}{new_desc}{m.group(2)}', html, count=1)


def insert_live_online_section(html: str, data: dict) -> str:
    name = data["name"]
    # Anchor: the existing NEARBY SCHOOLS section heading
    anchor = (
        '    <!-- ============================================\n'
        '         NEARBY SCHOOLS\n'
        '         ============================================ -->\n'
        '    <section class="loc-section">\n'
        '        <div class="inner-narrow">\n'
        '            <div class="accent-bar"></div>\n'
        '            <h2 class="section-heading gradient-text-static">\n'
        f'                Schools near {name} Whose Students Learn with Us\n'
        '            </h2>'
    )
    if anchor not in html:
        raise RuntimeError(f"Anchor for NEARBY SCHOOLS not found for {name}")

    replacement = LIVE_ONLINE_SECTION.format(
        name=name,
        schools_general_short=short_schools(data["schools_general_text"]),
        traffic_ref=data["traffic_ref"],
        traffic_short_short=derive_traffic_short_short(data["traffic_short"]),
    )
    return html.replace(anchor, replacement, 1)


def insert_four_new_sections(html: str, data: dict) -> str:
    name = data["name"]
    # Some pages use a shortened heading (e.g. "Howrah" instead of "Howrah City").
    heading_name = data.get("heading_name", name)
    anchor = (
        '    <!-- ============================================\n'
        '         HOW IT WORKS\n'
        '         ============================================ -->\n'
        '    <section class="loc-section">\n'
        '        <div class="inner" style="max-width: 1000px;">\n'
        '            <div class="accent-bar"></div>\n'
        '            <h2 class="section-heading gradient-text-static">\n'
        f'                How to Start Coding &amp; Maths Classes from {heading_name}\n'
        '            </h2>'
    )
    if anchor not in html:
        raise RuntimeError(f"Anchor for HOW IT WORKS not found for {name}")

    replacement = FOUR_NEW_SECTIONS_TEMPLATE.format(
        name=name,
        NAME_UPPER=name.upper(),
        city=data["city"],
        pin_codes=data["pin_codes"],
        locality_pills=render_locality_pills(data["localities"]),
        schools_kids=data["schools_kids"],
        schools_cbse=data["schools_cbse"],
        schools_icse=data["schools_icse"],
        centres_intro=data["centres_intro"],
        traffic_short=data["traffic_short"],
    )
    # Need the template's final H2 text to match the original page's heading text.
    # Replace the {name} placeholder in the template's trailing H2 with heading_name.
    replacement = replacement.replace(
        f"How to Start Coding &amp; Maths Classes from {name}",
        f"How to Start Coding &amp; Maths Classes from {heading_name}",
    )
    return html.replace(anchor, replacement, 1)


# Match the FAQ container's closing sequence: the very last </div> of the last
# .faq-item, followed by the </div> closing the wrapper, the section's </div>,
# and the </section>. This appears once per page at the end of the FAQ block,
# regardless of how the LAST FAQ question is worded.
FAQ_HTML_TAIL_RE = re.compile(
    r'(                </div>)\s*\n'
    r'(            </div>\s*\n'
    r'        </div>\s*\n'
    r'    </section>\s*\n\s*\n\s*\n'
    r'    <!-- ============================================\s*\n'
    r'         CTA SECTION)'
)


def insert_new_faq_html(html: str, data: dict) -> str:
    """Insert 8 new FAQs after the last existing FAQ in the accordion."""
    m = FAQ_HTML_TAIL_RE.search(html)
    if not m:
        raise RuntimeError(f"FAQ HTML tail anchor not found for {data['name']}")
    name = data["name"]
    extra = NEW_FAQS_HTML.format(
        name=name,
        near_landmark_1=data["localities"][1] if len(data["localities"]) > 1 else data["name"],
        near_landmark_2=data["localities"][2] if len(data["localities"]) > 2 else data["name"],
        traffic_ref=data["traffic_ref"],
        schools_general_short=short_schools(data["schools_general_text"]),
    )
    full = m.group(0)
    # Insert the extra FAQs after the last </div> of the final faq-item,
    # before the wrapping container divs close.
    replacement = m.group(1) + extra + "\n" + m.group(2)
    return html.replace(full, replacement, 1)


# Match the FAQPage's mainEntity array closer. The pattern below targets:
#   ...<last FAQ object> } \n          ]\n        },\n        {\n          "@type": "BreadcrumbList"
# We split it so we can keep the trailing portion intact and insert
# our 8 new question objects immediately before the `]` of mainEntity.
FAQ_SCHEMA_TAIL_RE = re.compile(
    r'(\}\s*)\n(\s*\]\s*\n\s*\},\s*\n\s*\{\s*\n\s*"@type":\s*"BreadcrumbList")'
)


def insert_new_faq_schema(html: str, data: dict) -> str:
    m = FAQ_SCHEMA_TAIL_RE.search(html)
    if not m:
        raise RuntimeError(f"FAQ schema tail anchor not found for {data['name']}")
    name = data["name"]
    new_entries = NEW_FAQS_SCHEMA.format(
        name=name,
        near_landmark_1=data["localities"][1] if len(data["localities"]) > 1 else data["name"],
        near_landmark_2=data["localities"][2] if len(data["localities"]) > 2 else data["name"],
        traffic_ref=data["traffic_ref"],
        schools_general_short=short_schools(data["schools_general_text"]),
    )
    # group(1) = closing brace + whitespace of last question
    # group(2) = the array/object closing scaffold plus next BreadcrumbList opening
    replacement = m.group(1) + new_entries + "\n" + m.group(2)
    return html.replace(m.group(0), replacement, 1)


# ---------------------------------------------------------------------------
# DRIVER
# ---------------------------------------------------------------------------


def enhance_page(path: Path, data: dict) -> tuple[bool, str]:
    original = path.read_text(encoding="utf-8")
    if "id=\"how-live-online-works\"" in original:
        return False, "already enhanced"
    try:
        out = replace_meta_description(original, data)
        out = insert_live_online_section(out, data)
        out = insert_four_new_sections(out, data)
        out = insert_new_faq_html(out, data)
        out = insert_new_faq_schema(out, data)
    except RuntimeError as e:
        return False, f"ERROR: {e}"
    path.write_text(out, encoding="utf-8")
    return True, "ok"


def main() -> int:
    if not PAGES_DIR.exists():
        print(f"Pages dir not found: {PAGES_DIR}", file=sys.stderr)
        return 1

    paths = sorted(PAGES_DIR.glob("coding-classes-near-*.html"))
    enhanced = 0
    skipped = 0
    errors = 0

    for path in paths:
        slug = path.stem.replace("coding-classes-near-", "")
        if slug in SKIP_SLUGS:
            print(f"  SKIP (already manual)   {slug}")
            skipped += 1
            continue
        data = LOCATIONS.get(slug)
        if data is None:
            print(f"  SKIP (no data)          {slug}")
            skipped += 1
            continue
        ok, msg = enhance_page(path, data)
        if not ok and msg != "already enhanced":
            print(f"  FAIL   {slug:<40} {msg}")
            errors += 1
        elif msg == "already enhanced":
            print(f"  SKIP (already enhanced) {slug}")
            skipped += 1
        else:
            print(f"  OK     {slug}")
            enhanced += 1

    print()
    print(f"Done. enhanced={enhanced}, skipped={skipped}, errors={errors}")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
