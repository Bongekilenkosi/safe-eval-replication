# BIZUSIZO native-speaker review — isiXhosa

**Language:** isiXhosa (code: `xh`)
**Generated:** 2026-05-04 (from live source code)
**Reviewer instructions:** For each entry below, please mark ✅ (correct and natural), ❌ (wrong — suggest fix), or ➕ (add missing phrasing). For any ❌ or ➕, please provide the correct/additional phrasing in the notes column.

**What you are reviewing:** all isiXhosa content that a patient might read (Part 1 — WhatsApp messages) or that the system scans patient text for (Part 2 — clinical safety keywords).

---

## PART 1 — Patient-facing WhatsApp messages (51 entries)

Each row shows the English source text (for reference) and the current isiXhosa translation. If isiXhosa is marked **[MISSING — PLEASE TRANSLATE]**, the translation has not been written yet and we need you to provide it.

### 1A. Core messages (lib/messages.js)

### 1.1 `language_menu` *(lib/messages.js)*

**English source:**
```
Welcome to BIZUSIZO 🏥

Choose your language / Khetha ulimi lwakho:

1. English
2. isiZulu
3. isiXhosa
4. Afrikaans
5. Sepedi
6. Setswana
7. Sesotho
8. Xitsonga
9. siSwati
10. Tshivenda
11. isiNdebele

Reply with the number.
```

**isiXhosa:**
*(Not language-specific — shown in all languages at once.)*

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.2 `language_set` *(lib/messages.js)*

**English source:**
```
✅ Language set to *English*.
Type "language" anytime to change.
```

**isiXhosa:**
```
✅ Ulwimi lusetelwe kwisi-*Xhosa*.
Bhala "ulwimi" nanini na ukutshintsha.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.3 `consent` *(lib/messages.js)*

**English source:**
```
Welcome to BIZUSIZO. 🏥

This service helps you understand the urgency of your symptoms and guides you on where to seek care.

How it works:
• Health guidance only — does not diagnose medical conditions
• Does not replace a doctor or nurse
• AI-based triage classifies your symptoms; a nurse reviews and may override

What we collect:
• Your symptoms and answers to triage questions
• Your phone number (hashed — never stored as plain text)
• Your language and session state

Where it's stored and shared:
• Stored on Supabase servers in Stockholm, EU (POPIA s72(1)(a) — EU has GDPR adequacy)
• Shared with your clinic or hospital if you are referred there, so they can give you the right care
• Shared with the doctor you are referred to
• Anonymised symptom text only is sent to our AI provider (Anthropic) — no identifiers

How long we keep it:
• Active session: deleted within 90 days, or immediately if you withdraw
• Consent log: 5 years (POPIA s14)
• Clinical records: 5 years (National Health Act)

Your rights under POPIA:
• Send STOP at any time to withdraw consent and delete your data
• To access, correct, or delete your data outside of STOP, WhatsApp: +27 71 508 0518

Your information is handled as Sensitive Data (health data, POPIA s26) under South African privacy law.

Do you consent to using this service?

1 — Yes, I consent and want to continue
2 — No, exit
```

**isiXhosa:**
```
Wamkelekile ku-BIZUSIZO. 🏥

Le sevisi ikunceda ukuqonda ubungxamineko beempawu zakho kwaye ikuqondise apho unokufuna uncedo khona.

Okubalulekileyo:
• Le sevisi inika ingcebiso yezempilo kuphela.
• Ayixilongi iimeko zempilo.
• Ayithethi endaweni yagqirha okanye nomongikazi.

Singanikubuza imibuzo malunga neempawu zakho ukuze sikuqondise. Iimpendulo zakho zinganakanywa ngokokhuselo ukuphucula ukhuseleko nokuphila kakuhle kwenkonzo. Ukuba uthunyelwa ekliniki okanye esibhedlele, ulwazi lwakho lwezempilo lunokwabelana nendawo ekwamkelayo ukuqinisekisa ukuba ufumana unyango olufanelekileyo. Ulwazi lwakho luya kuphunyezwa ngokwemithetho yabucala yoMzantsi Afrika (POPIA).

Uyavuma ukusebenzisa le nkonzo?

1 — Ewe, ndiyavuma kwaye ndifuna ukuqhubeka
2 — Hayi, phuma
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.4 `consent_yes` *(lib/messages.js)*

**English source:**
```
✅ Thank you. Let's get you to the right care.
```

**isiXhosa:**
```
✅ Enkosi. Masikuqondise kulo nyango.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.5 `consent_no` *(lib/messages.js)*

**English source:**
```
That's okay. Your session has ended and no information has been stored.

If you change your mind or need help in future, send "Hi" to start again. You can also visit your nearest clinic directly.

Take care. 🙏
```

**isiXhosa:**
```
Kulungile. Iseshoni yakho iphelile kwaye akukho lwazi lugciniwayo.

Ukuba utshintshe ingqondo okanye udinga uncedo kwixesha elizayo, thumela "Hi" ukuqala kwakhona. Ungatyelela ikliniki yakho ekufutshane nawe.

Zinakekele. 🙏
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.6 `category_menu` *(lib/messages.js)*

**English source:**
```
What is your main problem today?

1. 🫁 Breathing / Chest pain
2. 🤕 Head injury / Headache
3. 🤰 Pregnancy related
4. 🩸 Bleeding / Wound
5. 🤒 Fever / Flu / Cough
6. 🤢 Stomach / Vomiting
7. 👶 Child illness
8. 💊 Medication / Chronic
9. 🦴 Bone / Joint / Back pain
10. 🧠 Mental health
11. 🤧 Allergy / Rash
12. ✏️ Other — type your symptoms
13. 👤 Speak to a human
14. 🩺 Women's health (family planning)
15. 🔬 Health screening (HIV, BP, diabetes)
```

**isiXhosa:**
```
Yintoni ingxaki yakho enkulu namhlanje?

1. 🫁 Ukuphefumla / Intlungu yesifuba
2. 🤕 Ukonzakala kwentloko / Intloko ebuhlungu
3. 🤰 Okuphathelene nokukhulelwa
4. 🩸 Ukopha / Inxeba
5. 🤒 Ifiva / Umkhuhlane / Ukukhohlela
6. 🤢 Isisu / Ukugabha
7. 👶 Ukugula komntwana
8. 💊 Amayeza / Isifo esinganyangekiyo
9. 🦴 Ithambo / Amalungu / Umqolo obuhlungu
10. 🧠 Impilo yengqondo
11. 🤧 I-aloji / Ukuvuvukala kwesikhumba
12. ✏️ Okunye — bhala iimpawu zakho
13. 👤 Thetha nomntu
14. 🩺 Impilo yabafazi (ukucwangcisa usapho)
15. 🔬 Ukuhlolwa kwempilo (HIV, BP, iswekile)
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.7 `triage_red` *(lib/messages.js)*

**English source:**
```
🔴 *EMERGENCY*

Call *10177* for an ambulance NOW.
If private: ER24 *084 124*.

⚠️ *Do NOT wait for the ambulance* — go to your nearest hospital emergency unit immediately. Ask someone to drive you or take a taxi.
```

**isiXhosa:**
```
🔴 *INGXAKEKO ENGXAMISEKILEYO*

Tsalela *10177* ucele i-ambulensi NGOKU.
Yabucala: ER24 *084 124*.

⚠️ *MUSA UKULINDA i-ambulensi* — yiya esibhedlele esikufutshane nawe ngokukhawuleza. Cela umntu akuqhubele okanye uthathe iteksi.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.8 `triage_orange` *(lib/messages.js)*

**English source:**
```
🟠 *VERY URGENT*
You need care quickly.
```

**isiXhosa:**
```
🟠 *KUNGXAMISEKE KAKHULU*
Ufuna inkathalo ngokukhawuleza.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.9 `clarify_symptoms` *(lib/messages.js)*

**English source:**
```
I need a little more information to assess your symptoms accurately.

Could you describe what you are feeling in more detail?

- Where exactly is the pain or discomfort?
- How long have you had this symptom?
- Is it getting worse, better, or staying the same?
```

**isiXhosa:**
```
Ndifuna ulwazi olungakumbi ukuhlola iimpawu zakho ngokuchanekileyo.

Ngaba ungachaza oko uziva kuko ngokunzulu?

- Uphi ngqo ubuhlungu okanye ukungakhululeki?
- Ube nale mpawu ixesha elingakanani?
- Iyonakala, iyalunga, okanye ihlala njalo?
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.10 `low_confidence_safety` *(lib/messages.js)*

**English source:**
```
ℹ️ We have assessed your symptoms, but our confidence is lower than usual. Your triage result is still shown above.

As a precaution:
- If your symptoms change or get worse, please come to the clinic *today*
- A nurse has been flagged to review your case
```

**isiXhosa:**
```
ℹ️ Sihlole iimpawu zakho, kodwa ukuqiniseka kwethu kuphantsi kunokwesiqhelo. Isiphumo sakho sokuhlolwa sisaboniswa ngentla.

Njengesikhuseleko:
- Ukuba iimpawu zakho zitshintsha okanye ziba mbi, nceda uze ekliniki *namhlanje*
- Umongikazi uxelelwe ukuba ahlole ityala lakho
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.11 `triage_orange_clinic` *(lib/messages.js)*

**English source:**
```
🏥 Go to *[name]* ([dist] km) NOW.

Tell reception you were triaged as *VERY URGENT* by BIZUSIZO. You will be fast-tracked.

Do not wait at home.
```

**isiXhosa:**
```
🏥 Yiya ku-*[name]* ([dist] km) NGOKU.

Xelela i-reception ukuba uhlolwe njenge-*KUNGXAMISEKE KAKHULU* yi-BIZUSIZO. Uza kukhawuleziswa.

Musa ukulinda ekhaya.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.12 `triage_orange_hospital` *(lib/messages.js)*

**English source:**
```
The clinic is closed now. Go to your nearest hospital emergency unit immediately.
```

**isiXhosa:**
```
Ikliniki ivaliwe ngoku. Yiya esibhedlele esikufutshane — kwicandelo lezongxamiseko.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.13 `ask_transport_safety` *(lib/messages.js)*

**English source:**
```
Can you travel to the facility safely?

1 — Yes, I can get there myself or someone can take me
2 — No, I am too unwell to travel safely
3 — I have no transport
```

**isiXhosa:**
```
Ungahamba uye kwindawo yokugula ngokukhuselekileyo?

1 — Ewe, ndingaya ndodwa okanye umntu angandisa
2 — Hayi, ndigula kakhulu ukuhamba ngokukhuselekileyo
3 — Andinayo indlela yokuhamba
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.14 `transport_safe` *(lib/messages.js)*

**English source:**
```
Good. Please leave now — do not delay.
```

**isiXhosa:**
```
Kulungile. Nceda uhambe ngoku — musa ukulibazisa.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.15 `transport_unsafe` *(lib/messages.js)*

**English source:**
```
🚑 Call an ambulance NOW:
*10177* (public) or *084 124* (ER24)

Tell them your symptoms and location.

If the ambulance is slow, ask someone nearby to drive you to the nearest hospital emergency unit. Do not wait at home.
```

**isiXhosa:**
```
🚑 Tsalela i-ambulensi NGOKU:
*10177* (karhulumente) okanye *084 124* (ER24)

Baxelele iimpawu zakho nendawo yakho.

Ukuba i-ambulensi ilibele, cela umntu okufutshane akuqhubele esibhedlele. Musa ukulinda ekhaya.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.16 `transport_none` *(lib/messages.js)*

**English source:**
```
🚑 Call an ambulance: *10177* or *084 124* (ER24)

Alternatively, ask a neighbour, family member, or community member to take you. If you can reach a taxi rank, take a taxi to the nearest clinic or hospital.

Do not stay at home — you need care today.
```

**isiXhosa:**
```
🚑 Tsalela i-ambulensi: *10177* okanye *084 124* (ER24)

Okanye cela ummelwane, ilungu losapho, okanye ilungu lasekuhlaleni likuse. Ukuba ungafikelela kwindawo yamateksi, thatha iteksi uye ekliniki okanye esibhedlele.

Musa ukuhlala ekhaya — ufuna inkathalo namhlanje.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.17 `triage_yellow` *(lib/messages.js)*

**English source:**
```
🟡 *URGENT*
Visit a clinic today. Do not delay.
```

**isiXhosa:**
```
🟡 *KUNGXAMISEKILE*
Tyelela ikliniki namhlanje. Musa ukulibazisa.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.18 `triage_yellow_after_hours` *(lib/messages.js)*

**English source:**
```
⏰ Clinics are closed now. Here is what to do:

1. *If your symptoms are manageable* — rest at home and go to the clinic first thing tomorrow morning (before 08:00 for the shortest wait)

2. *If symptoms worsen tonight* — go to your nearest hospital emergency unit or call *10177*

We will send you a reminder tomorrow morning.
```

**isiXhosa:**
```
⏰ Iikliniki zivaliwe ngoku. Nantsi into omawuyenze:

1. *Ukuba iimpawu zakho zinokumelana nazo* — phumla ekhaya uze uye ekliniki kwangethuba ngomso ekuseni (phambi kwe-08:00)

2. *Ukuba iimpawu ziba mbi ebusuku* — yiya esibhedlele esikufutshane okanye utsalele *10177*

Siza kukuthumela isikhumbuzo ngomso ekuseni.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.19 `queue_called` *(lib/messages.js)*

**English source:**
```
📢 *You are being called!*

Please go to *[assignedTo]* now.

Have your ID and clinic card ready.
```

**isiXhosa:**
```
📢 *Uyabizwa!*

Nceda uye ku-*[assignedTo]* ngoku.

Lungisa i-ID nekhadi lakho lasekliniki.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.20 `triage_green` *(lib/messages.js)*

**English source:**
```
🟢 *ROUTINE — Non-urgent*

Your symptoms are not an emergency. Here is some advice while you decide your next step:
```

**isiXhosa:**
```
🟢 *OKUQHELEKILEYO — Akungxamisekanga*

Iimpawu zakho aziyongxaki engxamisekileyo. Nantsi ingcebiso ngelixa usenza isigqibo:
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.21 `facility_suggest` *(lib/messages.js)*

**English source:**
```
📍 Nearest facility: *[name]* ([dist] km away).

Can you get there easily?
1 — Yes, take me there
2 — No, show me other options
```

**isiXhosa:**
```
📍 Indawo ekufutshane: *[name]* ([dist] km).

Ungafikelela lula?
1 — Ewe
2 — Hayi, ndibonise ezinye
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.22 `facility_confirmed` *(lib/messages.js)*

**English source:**
```
✅ Go to *[name]*.

📋 *When you arrive:*
1. Go to reception
2. Tell them: "I used BIZUSIZO"
3. Show your reference number (type *code* to see it)
4. They already have your details

Safe travels. We will check in with you in 48 hours.
```

**isiXhosa:**
```
✅ Yiya ku-*[name]*.

📋 *Xa ufika:*
1. Yiya e-reception
2. Baxelele: "Ndisebenzise i-BIZUSIZO"
3. Babonise inombolo yakho (bhala *code*)
4. Banayo inkcazelo yakho

Uhambe kakuhle. Siza kukubuza emva kweeyure ezingama-48.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.23 `facility_alternatives` *(lib/messages.js)*

**English source:**
```
Here are other options nearby:
[facilities]

0 — Go back to the first suggestion (*[firstName]*)

Reply with the number of your choice.
```

**isiXhosa:**
```
Nazi ezinye iindawo ezikufutshane:
[facilities]

0 — Buyela kwisiphakamiso sokuqala (*[firstName]*)

Phendula ngenombolo oyikhethayo.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.24 `follow_up` *(lib/messages.js)*

**English source:**
```
Hi, you contacted BIZUSIZO 2 days ago. How are your symptoms?
1. Better ✅
2. The same ➡️
3. Worse ⚠️
```

**isiXhosa:**
```
Molo, uqhagamshelane neBIZUSIZO kwiintsuku ezi-2 ezidlulileyo. Zinjani iimpawu zakho?
1. Zibhetele ✅
2. Ziyafana ➡️
3. Zimbi ngakumbi ⚠️
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.25 `follow_up_better` *(lib/messages.js)*

**English source:**
```
✅ Glad you are feeling better. No further action needed. Stay well!
```

**isiXhosa:**
```
✅ Siyavuya ukuba uziva ngcono. Akukho nto yimbi efunekayo. Hlala kakuhle!
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.26 `follow_up_same` *(lib/messages.js)*

**English source:**
```
🟡 Please continue monitoring your symptoms. Visit a clinic if they do not improve in the next 24 hours.
```

**isiXhosa:**
```
🟡 Qhubeka ujonga iimpawu zakho. Tyelela ikliniki ukuba azibhetele kwiiyure ezingama-24.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.27 `follow_up_worse` *(lib/messages.js)*

**English source:**
```
⚠️ Your symptoms may be worsening. A nurse has been notified and will review your case. If it is an emergency, call *10177* now.
```

**isiXhosa:**
```
⚠️ Iimpawu zakho zisenokuba zimbi. Umongikazi wazisiwe kwaye uza kuhlola udaba lwakho. Ukuba yingxakeko, tsalela *10177* ngoku.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.28 `follow_up_clinic_visit` *(lib/messages.js)*

**English source:**
```
One more question — did you visit the clinic after your triage?

1 — Yes, I went to the clinic ✅
2 — No, I did not go ❌
3 — I went to a hospital instead 🏥
4 — I went but was turned away ⛔
5 — I went but there was no medicine 💊
```

**isiXhosa:**
```
Umbuzo omnye — ngaba utyelele ikliniki emva kokuhloliwa?

1 — Ewe, ndiye ekliniki ✅
2 — Hayi, andihambanga ❌
3 — Ndiye esibhedlele kunye 🏥
4 — Ndiye kodwa ndabuyiselwa ⛔
5 — Ndiye kodwa kwakungekho amayeza 💊
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.29 `follow_up_clinic_thanks` *(lib/messages.js)*

**English source:**
```
Thank you. Your response helps us improve BIZUSIZO for everyone. Stay well. 🙏
```

**isiXhosa:**
```
Enkosi. Impendulo yakho isinceda ukuphucula i-BIZUSIZO. Hlala kakuhle. 🙏
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.30 `request_location` *(lib/messages.js)*

**English source:**
```
📍 Please share your location so we can find the nearest facility.

Tap the 📎 (attachment) button → Location → Send your current location.
```

**isiXhosa:**
```
📍 Nceda wabelane ngendawo yakho ukuze sifumane indawo yokugula ekufutshane.

Cofa iqhosha le-📎 → Indawo → Thumela indawo yakho yangoku.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.31 `chronic_screening` *(lib/messages.js)*

**English source:**
```
Before we continue, do you take medication for any of these conditions? (Reply with the numbers, e.g. "1,3" or "0" for none)

0. None
1. 💊 HIV / ARVs
2. 🩸 High blood pressure
3. 🍬 Diabetes (sugar)
4. ❤️ Heart condition
5. 🫁 Asthma / Lung condition
6. 🧠 Epilepsy
7. 💊 Other chronic medication
```

**isiXhosa:**
```
Phambi kokuba siqhubeke, ingaba uthatha amayeza ezi zifo? (Phendula ngenombolo, umz. "1,3" okanye "0" ukuba akukho)

0. Akukho
1. 💊 HIV / Ii-ARV
2. 🩸 Uxinzelelo lwegazi
3. 🍬 Iswekile (Diabetes)
4. ❤️ Isifo sentliziyo
5. 🫁 Isifuba / Imiphunga
6. 🧠 Isifo sokuwa (Epilepsy)
7. 💊 Esinye isigulo esinganyangekiyo
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.32 `chronic_screening_saved` *(lib/messages.js)*

**English source:**
```
✅ Thank you. This helps us give you better guidance.
```

**isiXhosa:**
```
✅ Enkosi. Oku kusinceda sikunike iingcebiso ezingcono.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.33 `ask_first_name` *(lib/messages.js)*

**English source:**
```
What is your first name? (As it appears on your ID)

Type your name:
```

**isiXhosa:**
```
Ngubani igama lakho? (Njengoko libhalwe kwi-ID yakho)

Bhala igama lakho:
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.34 `ask_surname` *(lib/messages.js)*

**English source:**
```
Thank you, *[firstName]*.

What is your surname / family name?

Type your surname:
```

**isiXhosa:**
```
Enkosi, *[firstName]*.

Fani yakho ngubani?

Bhala ifani yakho:
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.35 `ask_dob` *(lib/messages.js)*

**English source:**
```
What is your date of birth?

Type it like this: *DD-MM-YYYY*
Example: *15-03-1992*
```

**isiXhosa:**
```
Umhla wakho wokuzalwa ngowuphi?

Bhala ngolu hlobo: *DD-MM-YYYY*
Umzekelo: *15-03-1992*
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.36 `ask_sex` *(lib/messages.js)*

**English source:**
```
What is your sex?

1 — Male
2 — Female
3 — Intersex
4 — Prefer not to say
```

**isiXhosa:**
```
Isini sakho siyintoni?

1 — Indoda
2 — Ibhinqa
3 — Intersex
4 — Andifuni ukutsho
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.37 `identity_confirmed` *(lib/messages.js)*

**English source:**
```
✅ Thank you, *[name] [surname]*. This helps the clinic prepare your file before you arrive.
```

**isiXhosa:**
```
✅ Enkosi, *[name] [surname]*. Oku kunceda ikliniki ilungise ifayile yakho phambi kokuba ufike.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.38 `ask_returning` *(lib/messages.js)*

**English source:**
```
Have you been to *[facilityName]* before?

1 — Yes, I have a file there
2 — No, this is my first visit
3 — I'm not sure
```

**isiXhosa:**
```
Ingaba ukhe waya ku-*[facilityName]* ngaphambili?

1 — Ewe, ndinefayile apho
2 — Hayi, yindwendwelo yam yokuqala
3 — Andiqinisekanga
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.39 `returning_yes` *(lib/messages.js)*

**English source:**
```
📁 Good — the clinic will look for your file before you arrive.
```

**isiXhosa:**
```
📁 Kulungile — ikliniki iza kukhangela ifayile yakho phambi kokuba ufike.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.40 `returning_new` *(lib/messages.js)*

**English source:**
```
🆕 No problem — the clinic will create a new file for you. This saves time when you arrive.
```

**isiXhosa:**
```
🆕 Akukho ngxaki — ikliniki iza kwenza ifayile entsha. Oku kongela ixesha xa ufika.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.41 `returning_unsure` *(lib/messages.js)*

**English source:**
```
📋 No problem. The clinic will check when you arrive. Your name and date of birth will help them find your file quickly.
```

**isiXhosa:**
```
📋 Akukho ngxaki. Ikliniki iza kukhangela xa ufika. Igama lakho nomhla wokuzalwa kuya kunceda bafumane ifayile ngokukhawuleza.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.42 `study_participation` *(lib/messages.js)*

**English source:**
```
Are you taking part in the BIZUSIZO research study at a clinic?

1 — Yes, I am a study participant
2 — No, I am just using BIZUSIZO for myself
```

**isiXhosa:**
```
Ingaba uthatha inxaxheba kuphando lwe-BIZUSIZO ekliniki?

1 — Ewe, ndingumthathi-nxaxheba wophando
2 — Hayi, ndisebenzisa i-BIZUSIZO nje
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.43 `study_code` *(lib/messages.js)*

**English source:**
```
🔢 Your study code is: *[code]*

Please show this code to the research assistant when you arrive at the clinic. It helps us link your BIZUSIZO triage to your clinic visit.

You can also type "code" at any time to see your code again.
```

**isiXhosa:**
```
🔢 Ikhowudi yakho yophando ithi: *[code]*

Nceda ubonise le khowudi kumphandi xa ufika ekliniki. Isinceda sidibanise i-triage yakho ye-BIZUSIZO notyelelo lwakho ekliniki.

Ungabhala "code" nanini na ukubona ikhowudi yakho kwakhona.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.44 `category_detail_prompt` *(lib/messages.js)*

**English source:**
```
You selected: *[category]*

How bad is it?
1 — Mild (I can do my daily activities)
2 — Moderate (it's affecting my daily activities)
3 — Severe (I can barely function)

Or type your symptoms in your own words.
You can also send a voice note 🎤
```

**isiXhosa:**
```
Ukhethe: *[category]*

Kumbi kangakanani?
1 — Kancinane (ndingenza imisebenzi yam yemihla ngemihla)
2 — Maphakathi (kuchaphazela imisebenzi yam)
3 — Kakhulu (andikwazi kwaphela)

Okanye uchaze iimpawu zakho ngamazwi akho.
Ungathuma ivoice note 🎤
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.45 `voice_note_prompt` *(lib/messages.js)*

**English source:**
```
🎤 You can send a voice note describing your symptoms. Speak clearly and tell us:

• What is wrong
• When it started
• How bad it is

We will listen to your message and help you.
```

**isiXhosa:**
```
🎤 Ungathumela ivoice note uchaze iimpawu zakho. Thetha ngokucacileyo usixelele:

• Kwenzeka ntoni
• Kuqale nini
• Kumbi kangakanani

Siya kuwumamela umyalezo wakho sikuncede.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.46 `voice_note_received` *(lib/messages.js)*

**English source:**
```
🎤 Voice note received. Let me process your message...
```

**isiXhosa:**
```
🎤 Ivoice note ifunyenwe. Mandiqwalasele umyalezo wakho...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.47 `thinking` *(lib/messages.js)*

**English source:**
```
🔍 Assessing your symptoms...
```

**isiXhosa:**
```
🔍 Sihlola iimpawu zakho...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.48 `tips` *(lib/messages.js)*

**English source:**
```

💡 *Tips:*
Type *0* — new consultation
Type *language* — change language
Type *code* — show your reference number
```

**isiXhosa:**
```

💡 *Amathiphu:*
Bhala *0* — incoko entsha
Bhala *ulwimi* — tshintsha ulwimi
Bhala *code* — bonisa inombolo yakho
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.49 `rate_limited` *(lib/messages.js)*

**English source:**
```
⏳ You've sent a lot of messages in a short time. Please wait a few minutes before trying again.

🚨 *If this is an emergency:*
• Call *10177* (ambulance) or *084 124* (ER24)
• Go to your nearest clinic or hospital immediately
```

**isiXhosa:**
```
⏳ Uthumele imiyalezo emininzi ngexesha elifutshane. Nceda linda imizuzu embalwa uze uzame kwakhona.

🚨 *Ukuba yingxakeko:*
• Tsalela *10177* (i-ambulensi) okanye *084 124* (ER24)
• Yiya ekliniki okanye esibhedlele esikufutshane
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.50 `system_timeout` *(lib/messages.js)*

**English source:**
```
⚠️ We are experiencing technical difficulties and cannot process your message right now.

🚨 *If this is an emergency:*
• Call *10177* (ambulance) or *084 124* (ER24)
• Go to your nearest clinic or hospital immediately — do not wait for an ambulance

We will try to respond as soon as the system is back. We apologise for the inconvenience.
```

**isiXhosa:**
```
⚠️ Sinengxaki yobuchwepheshe kwaye asikwazi ukucubungula umyalezo wakho okwangoku.

🚨 *Ukuba yingxakeko:*
• Tsalela *10177* (i-ambulensi) okanye *084 124* (ER24)
• Yiya ekliniki okanye esibhedlele esikufutshane NGOKU — musa ukulinda i-ambulensi

Siza kuzama ukuphendula xa inkqubo ibuyile. Siyaxolisa ngokuphazamisa.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.51 `development_notice` *(lib/messages.js)*

**English source:**
```
Thank you for contacting BIZUSIZO 🏥

This system is currently under development and is not yet available for public use.

🚨 *If you are experiencing a medical emergency:*
• Call *10177* (ambulance) or *084 124* (ER24)
• Go to your nearest clinic or hospital IMMEDIATELY

For more information, visit bizusizo.co.za

Siyabonga / Enkosi / Dankie / Re a leboga / Re a leboha
```

**isiXhosa:**
*(Not language-specific — shown in all languages at once.)*

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1B. Chronic medication (CCMDD) messages (index.js)

### 1.52 `chronic_check` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Are you here for a chronic medication refill?\n1 — Yes, I need my regular medication\n2 — No, I have new or worsening symptoms
```

**isiXhosa:**
```
Ingaba ulapha ukuza kuthatha amayeza akho aqhelekileyo?\n1 — Ewe, ndifuna amayeza am aqhelekileyo\n2 — Hayi, ndineempawu ezintsha okanye ezimbi ngakumbi
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.53 `condition_check` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
What medication do you collect? (Select all that apply)
1 — ARVs (HIV)
2 — Blood pressure / Hypertension
3 — Diabetes (sugar)
4 — Heart / Angina
5 — Asthma / Lung
6 — Epilepsy
7 — Other chronic medication
```

**isiXhosa:**
```
Yiyiphi imiyalelo oyithatayo? (Khetha konke okufanelekileyo)
1 — Ii-ARV (HIV)
2 — Uxinzelelo lwegazi
3 — Iswekile (Diabetes)
4 — Intliziyo / I-Angina
5 — Isifuba / Imiphunga
6 — Isifo sokuwa (Epilepsy)
7 — Esinye isigulo esinganyangekiyo
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.54 `ccmdd_route` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Your nearest medication pickup point is:\n*${name}* (${dist} km)\n\nYou can collect your chronic medication there without queuing at a clinic.\n\nCan you get there?\n1 — Yes\n2 — No, show alternatives
```

**isiXhosa:**
```
💊 Indawo yakho ekufutshane yokuthatha amayeza:\n*${name}* (${dist} km)\n\nUngathatha amayeza akho aqhelekileyo apho ngaphandle kokulinda ekliniki.\n\nUngafikelela?\n1 — Ewe\n2 — Hayi, ndibonise ezinye
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.55 `ccmdd_confirmed` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
✅ Go to *${name}* to collect your medication.\n\nRemember to bring your ID and prescription/clinic card.\n\nWe will remind you when your next collection is due.
```

**isiXhosa:**
```
✅ Yiya ku-*${name}* ukuthatha amayeza akho.\n\nKhumbula ukuzisa i-ID yakho nekhadi lakho lasekliniki.\n\nSiza kukukhumbuza xa ixesha lokuthatha okulandelayo lifikile.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.56 `ccmdd_not_available` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 CCMDD pickup is not yet available in your area. Please visit your nearest clinic for your medication refill.
```

**isiXhosa:**
```
💊 Indawo yokuthatha amayeza ayikafumaneki kwindawo yakho okwangoku. Nceda utyelele ikliniki ekufutshane.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.57 `reminder_24h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Reminder: Your medication is ready for collection at *${name}*.\n\nPlease collect today if possible. Your health depends on taking your medication consistently.
```

**isiXhosa:**
```
💊 Isikhumbuzo: Amayeza akho alungile ukuthathwa ku-*${name}*.\n\nNceda uwathathe namhlanje ukuba kunokwenzeka. Impilo yakho ixhomekeke ekuthatheni amayeza rhoqo.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.58 `reminder_48h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Your medication at *${name}* has not been collected yet.\n\nMissing your medication can cause your condition to worsen. Please collect as soon as possible.\n\nHaving trouble getting there?\n1 — I will collect today\n2 — I cannot get to this location\n3 — I have a problem (tell us)
```

**isiXhosa:**
```
⚠️ Amayeza akho ku-*${name}* awakathathwa.\n\nUkungawathathi amayeza kunokubangela imeko yakho ibe mbi. Nceda uwathathe ngokukhawuleza.\n\nUnengxaki yokufika?\n1 — Ndiza kuwathatha namhlanje\n2 — Andikwazi ukufikelela kule ndawo\n3 — Ndinengxaki (sixelele)
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.59 `reminder_72h_escalation` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
🔴 You have not collected your medication for 3 days.\n\nMissing medication puts your health at serious risk. A healthcare worker has been notified.\n\nPlease tell us what is preventing you from collecting:\n1 — Transport / distance problem\n2 — Cannot take time off work\n3 — Pickup point was closed when I went\n4 — Medication was not available\n5 — Side effects — I stopped taking medication\n6 — Other reason
```

**isiXhosa:**
```
🔴 Awukawathathi amayeza akho iintsuku ezi-3.\n\nUkungawathathi amayeza kubeka impilo yakho emngciphekweni omkhulu. Umsebenzi wezempilo wazisiwe.\n\nNceda usixelele okukuthintelayo:\n1 — Ingxaki yothutho / umgama\n2 — Andikwazi ukufumana ixesha emsebenzini\n3 — Indawo yokuthatha ibivaliwe xa ndifika\n4 — Amayeza ebengatholakalanga\n5 — Imiphumo emibi — ndiyekile ukuthatha amayeza\n6 — Esinye isizathu
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.60 `missed_transport` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
We understand. Let us find a closer pickup point for your next collection. Please share your location.
```

**isiXhosa:**
```
Siyaqonda. Masifumane indawo ekufutshane ngakumbi yokuthatha amayeza akho alandelayo. Nceda uthumele indawo yakho.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.61 `missed_work` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
We understand. We are working on extended collection hours and weekend options. For now, you can ask someone you trust to collect on your behalf with your ID and clinic card.
```

**isiXhosa:**
```
Siyaqonda. Sisebenza ngeeyure ezongezelelweyo zokuthatha nangempelaveki. Okwangoku, ungacela umntu omthembayo ukuba akuthathele nge-ID yakho nekhadi lakho.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.62 `missed_closed` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Thank you for telling us. We have logged this issue and will follow up with the pickup point. Please try again tomorrow, or we can suggest an alternative location.
```

**isiXhosa:**
```
Enkosi ngokusixelela. Sibhale le ngxaki kwaye siza kulandela nendawo yokuthatha. Nceda uzame kwakhona ngomso, okanye sinokuphakamisa enye indawo.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.63 `missed_no_stock` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Thank you for telling us. We have reported this stock issue. We will notify you as soon as your medication is available. We are sorry for the inconvenience.
```

**isiXhosa:**
```
Enkosi ngokusixelela. Siyixele le ngxaki yesitoko. Siza kukwazisa xa amayeza akho efumaneka. Siyaxolisa ngokuphazamisa.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.64 `missed_side_effects` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Please do not stop taking your medication without speaking to a healthcare worker first. Stopping suddenly can be dangerous.\n\nA nurse has been notified and will contact you to discuss your side effects and explore alternatives.\n\nIf you feel very unwell, call *10177* or visit your nearest clinic.
```

**isiXhosa:**
```
⚠️ Nceda musa ukuyeka ukuthatha amayeza akho ngaphandle kokuthetha nomsebenzi wezempilo kuqala. Ukuyeka ngequbuliso kunobungozi.\n\nUmongikazi wazisiwe kwaye uya kuqhagamshelana nawe ukuxoxa ngemiphumo emibi nokuphonononga ezinye iindlela.\n\nUkuba uziva ungaphilanga kakhulu, tsalela *10177* okanye utyelele ikliniki ekufutshane.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.65 `reengagement` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Hello from BIZUSIZO 💊\n\nWe noticed you haven't collected your chronic medication recently. We know life gets busy and collecting can be difficult.\n\nWe want to help you get back on track. Your health matters.\n\nWould you like help finding a convenient pickup point?\n1 — Yes, help me collect my medication\n2 — I am collecting elsewhere now\n3 — I need to speak to someone
```

**isiXhosa:**
```
Molo ukusuka ku-BIZUSIZO 💊\n\nSiqaphele ukuba awukawathathanga amayeza akho aqhelekileyo kutshanje. Siyazi ukuba ubomi buxakekile kwaye ukuthatha kunokuba nzima.\n\nSifuna ukukunceda ubuyele endleleni. Impilo yakho ibalulekile.\n\nUngathanda uncedo lokufumana indawo elula yokuthatha?\n1 — Ewe, ndincede ndifumane amayeza\n2 — Ndithatha kwenye indawo ngoku\n3 — Ndifuna ukuthetha nomntu
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.66 `multimorbidity_warning` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Important: You collect medication for *${conditions}*. Missing your medication affects ALL of these conditions. Please collect as soon as possible.
```

**isiXhosa:**
```
⚠️ Okubalulekileyo: Uthatha amayeza e-*${conditions}*. Ukungawathathi amayeza kuchaphazela ZONKE ezi zifo. Nceda uwathathe ngokukhawuleza.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1C. Virtual consult messages (index.js)

### 1.67 `offer` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 A virtual consultation may be available for your condition.\n\nYou can speak to a healthcare worker by video call instead of travelling to a clinic.\n\nWould you like to:\n1 — Book a virtual consultation\n2 — No thanks, I'll visit a clinic in person
```

**isiXhosa:**
```
📱 Ukubonisana nge-video kunokufumaneka ngemeko yakho.\n\nUngathetha nesisebenza sezempilo nge-video call endaweni yokuya ekliniki.\n\nUngathanda:\n1 — Bhukisha ukubonisana nge-video\n2 — Hayi enkosi, ndiza kundwendwela ikliniki
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.68 `booking_api` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
✅ Your virtual consultation has been booked. You will receive a confirmation message with the date, time, and video link.
```

**isiXhosa:**
```
✅ Ukubonisana kwakho nge-video kubhukishiwe. Uya kufumana umyalezo wokuqinisekisa onosuku, ixesha, nelinki yevidiyo.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.69 `booking_whatsapp` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 To book your virtual consultation, please message this number on WhatsApp:\n\n*${phone}*\n\nTell them BIZUSIZO referred you and describe your symptoms.
```

**isiXhosa:**
```
📱 Ukubhukisha ukubonisana kwakho nge-video, nceda uthumele umyalezo ku:\n\n*${phone}*\n\nBaxelele ukuba uthunyelwe yi-BIZUSIZO kwaye uchaze iimpawu zakho.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.70 `not_available` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 Virtual consultations are not yet available in your area. Please visit your nearest clinic.
```

**isiXhosa:**
```
📱 Ukubonisana nge-video akukafumaneki kwindawo yakho okwangoku. Nceda utyelele ikliniki ekufutshane.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1D. Lab result messages (index.js)

### 1.71 `result_ready` *(index.js → LAB_MESSAGES)*

**English source:**
```
📋 Your *${testType}* results are ready.\n\nPlease visit your clinic to discuss the results with your healthcare provider.\n\nIf you have been referred back to the clinic, this does NOT mean something is wrong — many results are routine check-ups.\n\nQuestions? Reply "results" or call your clinic.
```

**isiXhosa:**
```
📋 Iziphumo zakho ze-*${testType}* zilungile.\n\nNceda utyelele ikliniki yakho ukuxoxa ngeziphumo nomsebenzi wezempilo.\n\nUkuba ubuyiselwe ekliniki, oku AKUTHETHI ukuba kukho into engalunganga — iziphumo ezininzi zezokuhlolwa okuqhelekileyo.\n\nImibuzo? Phendula "iziphumo" okanye utsalele ikliniki yakho.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.72 `result_action_required` *(index.js → LAB_MESSAGES)*

**English source:**
```
📋 Your *${testType}* results are ready and your healthcare provider would like to see you.\n\nPlease visit your clinic within the next 7 days. This is important for your ongoing care.\n\nIf you cannot get to the clinic, reply "help" and we will assist you.
```

**isiXhosa:**
```
📋 Iziphumo zakho ze-*${testType}* zilungile kwaye umsebenzi wakho wezempilo ufuna ukukubona.\n\nNceda utyelele ikliniki yakho kwiintsuku ezi-7 ezizayo. Oku kubalulekile kwinkathalelo yakho eqhubekayo.\n\nUkuba awukwazi ukufika ekliniki, phendula "uncedo" kwaye siza kukunceda.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.73 `result_normal` *(index.js → LAB_MESSAGES)*

**English source:**
```
✅ Good news! Your *${testType}* results are back and everything looks normal.\n\nKeep taking your medication as prescribed. Your next check-up will be scheduled as usual.\n\nStay well! 💚
```

**isiXhosa:**
```
✅ Iindaba ezimnandi! Iziphumo zakho ze-*${testType}* zibuyile kwaye yonke into ibonakala iqhelekile.\n\nQhubeka uthatha amayeza akho njengoko unikeziwe. Ukuhlolwa kwakho okulandelayo kuya kucwangciswa njengokuqhelekileyo.\n\nHlala kakuhle! 💚
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.74 `check_status` *(index.js → LAB_MESSAGES)*

**English source:**
```
Let me check your lab results. One moment please...
```

**isiXhosa:**
```
Mandibheke iziphumo zakho zasekhemisti. Umzuzwana omnye nceda...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.75 `no_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
We do not have any lab results on file for you at the moment. If you are expecting results, please check with your clinic.\n\nResults typically take 3-7 working days depending on the test type.
```

**isiXhosa:**
```
Asina ziphumo zasekhemisti ngawe okwangoku. Ukuba ulindele iziphumo, nceda uhlole nekliniki yakho.\n\nIziphumo zihlala zithatha iintsuku ezi-3 ukuya kwezi-7 zomsebenzi ngokuxhomekeke kuhlobo lwesivavanyelo.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.76 `pending_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
Your *${testType}* test from *${testDate}* is still being processed. We will notify you on WhatsApp as soon as results are available.\n\nYou do not need to visit the clinic to check — we will come to you.
```

**isiXhosa:**
```
Uvavanyo lwakho lwe-*${testType}* lwe-*${testDate}* lusaqhutyelwa. Siza kukwazisa kuWhatsApp xa iziphumo zifumaneka.\n\nAwudingi ukutyelela ikliniki ukuhlola — siza kuza kuwe.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---


## PART 2 — Clinical safety keywords (58 rules)

The system scans patient text for keyword combinations and assigns a triage level (RED = emergency, ORANGE = very urgent, YELLOW = urgent) **independent of the AI**. Each rule below shows the English trigger phrases (so you know what the rule is for) and the current isiXhosa keywords the system recognises. These are natural patient phrasings, not clinical terminology.

**For each rule, please:**
1. Confirm the listed isiXhosa keywords are correct and natural for how a patient would type on WhatsApp.
2. Add any common phrasings a patient might use for this symptom that are **not** currently listed.
3. Flag any keyword that sounds unnatural, overly formal, or potentially misleading.

**Priority:** ✨ high (RED rules, life-threatening) · important (ORANGE) · ⚪ lower priority (YELLOW)

### RED discriminators

#### RED 1. `respiratory_cardiac_arrest`
*── RED DISCRIMINATORS ── | ════════════════════════════════════════════════════════════════ | RED 1: RESPIRATORY / CARDIAC ARREST — not breathing, heart stopped | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `aaphefumli`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a a hefemuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `a a phefumolohe` — _is this isiXhosa? ☐ yes  ☐ no_
- `awaphefumuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `cardiac arrest` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga go na go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `heart stopped` — _is this isiXhosa? ☐ yes  ☐ no_
- `inhliziyo yama` — _is this isiXhosa? ☐ yes  ☐ no_
- `inhliziyo yema` — _is this isiXhosa? ☐ yes  ☐ no_
- `no breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `not breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `o emisitse go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tlogetse go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `stopped breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `wehlil' emzimbeni` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 2. `unconscious`
*════════════════════════════════════════════════════════════════ | RED 2: UNCONSCIOUS — unresponsive, not waking, collapsed | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `uwe phantsi`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a a hlamuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `abuyi` — _is this isiXhosa? ☐ yes  ☐ no_
- `akanyakazi` — _is this isiXhosa? ☐ yes  ☐ no_
- `alawuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `alibeki` — _is this isiXhosa? ☐ yes  ☐ no_
- `angaphaphami` — _is this isiXhosa? ☐ yes  ☐ no_
- `aziphaphami` — _is this isiXhosa? ☐ yes  ☐ no_
- `collapsed and not moving` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tsoge` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a arabe` — _is this isiXhosa? ☐ yes  ☐ no_
- `limp and not moving` — _is this isiXhosa? ☐ yes  ☐ no_
- `not waking` — _is this isiXhosa? ☐ yes  ☐ no_
- `o wele fase` — _is this isiXhosa? ☐ yes  ☐ no_
- `passed out` — _is this isiXhosa? ☐ yes  ☐ no_
- `unconscious` — _is this isiXhosa? ☐ yes  ☐ no_
- `unresponsive` — _is this isiXhosa? ☐ yes  ☐ no_
- `uwele phansi` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 3. `active_seizure`
*════════════════════════════════════════════════════════════════ | RED 3: ACTIVE SEIZURE — currently fitting, convulsing | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `body shaking uncontrolled` — _is this isiXhosa? ☐ yes  ☐ no_
- `convulsing now` — _is this isiXhosa? ☐ yes  ☐ no_
- `currently fitting` — _is this isiXhosa? ☐ yes  ☐ no_
- `fitting now` — _is this isiXhosa? ☐ yes  ☐ no_
- `having a fit` — _is this isiXhosa? ☐ yes  ☐ no_
- `isidina manje` — _is this isiXhosa? ☐ yes  ☐ no_
- `jaanong o tshwarwa ke sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `jaanong o tshwerwe ke sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa jaanong` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tshwerwe ke bolwetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `seizure now` — _is this isiXhosa? ☐ yes  ☐ no_
- `shaking and not stopping` — _is this isiXhosa? ☐ yes  ☐ no_
- `u swiwa nga vhulwadze` — _is this isiXhosa? ☐ yes  ☐ no_
- `unamaxhala ngoku` — _is this isiXhosa? ☐ yes  ☐ no_
- `unyikinyeka ngoku` — _is this isiXhosa? ☐ yes  ☐ no_
- `val nou` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 4. `cardiac_emergency`
*════════════════════════════════════════════════════════════════ | RED 4: CARDIAC EMERGENCY — chest pain + breathing difficulty | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `andiphefumli`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a ndzi hefemuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `a thi fembi` — _is this isiXhosa? ☐ yes  ☐ no_
- `asem` — _is this isiXhosa? ☐ yes  ☐ no_
- `asemhaling` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't breathe` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `difficulty breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga ke heme` — _is this isiXhosa? ☐ yes  ☐ no_
- `go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `go hema go thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho phefumoloha` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku hefemula` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku hefemula ku tika` — _is this isiXhosa? ☐ yes  ☐ no_
- `kuphefumula` — _is this isiXhosa? ☐ yes  ☐ no_
- `kuphefumula kumatima` — _is this isiXhosa? ☐ yes  ☐ no_
- `phefumla` — _is this isiXhosa? ☐ yes  ☐ no_
- `phefumula` — _is this isiXhosa? ☐ yes  ☐ no_
- `short of breath` — _is this isiXhosa? ☐ yes  ☐ no_
- `shortness of breath` — _is this isiXhosa? ☐ yes  ☐ no_
- `sifuba` — _is this isiXhosa? ☐ yes  ☐ no_
- `struggling to breathe` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshifuva` — _is this isiXhosa? ☐ yes  ☐ no_
- `u femba` — _is this isiXhosa? ☐ yes  ☐ no_
- `u femba hu a onda` — _is this isiXhosa? ☐ yes  ☐ no_
- `uphefumula kanzima` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 5. `cardiac_emergency_radiation`
*Complements the chest+breathing rule above. Surfaced by eval P01: chest + arm | heaviness + sweating had no deterministic net; LLM caught it at 95% confidence | but no fallback existed. Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr | pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a opela` — _is this isiXhosa? ☐ yes  ☐ no_
- `a tsidifala` — _is this isiXhosa? ☐ yes  ☐ no_
- `anamela` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm aching` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm feels heavy` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm feels numb` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm heavy` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm is dof` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm is heavy` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm is numb` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm numb` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm tingling` — _is this isiXhosa? ☐ yes  ☐ no_
- `bo anamela` — _is this isiXhosa? ☐ yes  ☐ no_
- `bo fologela` — _is this isiXhosa? ☐ yes  ☐ no_
- `boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest discomfort` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest heaviness` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest hurts` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest is heavy` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest pressure` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest tight` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest tightness` — _is this isiXhosa? ☐ yes  ☐ no_
- `clammy` — _is this isiXhosa? ☐ yes  ☐ no_
- `cold sweat` — _is this isiXhosa? ☐ yes  ☐ no_
- `cold sweats` — _is this isiXhosa? ☐ yes  ☐ no_
- `diaphoresis` — _is this isiXhosa? ☐ yes  ☐ no_
- `fologela` — _is this isiXhosa? ☐ yes  ☐ no_
- `go pitlagana` — _is this isiXhosa? ☐ yes  ☐ no_
- `go sa phuthologa` — _is this isiXhosa? ☐ yes  ☐ no_
- `in my arm` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingalo ibuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingalo inzima` — _is this isiXhosa? ☐ yes  ☐ no_
- `jaw ache` — _is this isiXhosa? ☐ yes  ☐ no_
- `jaw hurts` — _is this isiXhosa? ☐ yes  ☐ no_
- `jaw pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatelelo` — _is this isiXhosa? ☐ yes  ☐ no_
- `kolobile` — _is this isiXhosa? ☐ yes  ☐ no_
- `le a opela` — _is this isiXhosa? ☐ yes  ☐ no_
- `le a tonya` — _is this isiXhosa? ☐ yes  ☐ no_
- `le ikutlwa le le boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `le ikutlwa le sule` — _is this isiXhosa? ☐ yes  ☐ no_
- `le le boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `le sule` — _is this isiXhosa? ☐ yes  ☐ no_
- `left arm` — _is this isiXhosa? ☐ yes  ☐ no_
- `left shoulder` — _is this isiXhosa? ☐ yes  ☐ no_
- `legare` — _is this isiXhosa? ☐ yes  ☐ no_
- `legare la molema` — _is this isiXhosa? ☐ yes  ☐ no_
- `letlalo` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo la me` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo la moja` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo la molema` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo le boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsoho le boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `mofufutsho o tsididi` — _is this isiXhosa? ☐ yes  ☐ no_
- `mohonga u vhavha` — _is this isiXhosa? ☐ yes  ☐ no_
- `motlhala` — _is this isiXhosa? ☐ yes  ☐ no_
- `motlhala wa me` — _is this isiXhosa? ☐ yes  ☐ no_
- `mouoane` — _is this isiXhosa? ☐ yes  ☐ no_
- `muheme wa tsunda` — _is this isiXhosa? ☐ yes  ☐ no_
- `muheme wu vava` — _is this isiXhosa? ☐ yes  ☐ no_
- `my arm` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a opela` — _is this isiXhosa? ☐ yes  ☐ no_
- `o fufuleha mofufutsho o batang` — _is this isiXhosa? ☐ yes  ☐ no_
- `o fufulela phefo e tonyago` — _is this isiXhosa? ☐ yes  ☐ no_
- `o montsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tsididi` — _is this isiXhosa? ☐ yes  ☐ no_
- `opela` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain down my shoulder` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain in jaw` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain in my jaw` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain to shoulder` — _is this isiXhosa? ☐ yes  ☐ no_
- `pitlagana` — _is this isiXhosa? ☐ yes  ☐ no_
- `pitlagane` — _is this isiXhosa? ☐ yes  ☐ no_
- `radiating` — _is this isiXhosa? ☐ yes  ☐ no_
- `right arm` — _is this isiXhosa? ☐ yes  ☐ no_
- `se a opela` — _is this isiXhosa? ☐ yes  ☐ no_
- `se pitlagane` — _is this isiXhosa? ☐ yes  ☐ no_
- `seledu se bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `shoulder pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `spreading to` — _is this isiXhosa? ☐ yes  ☐ no_
- `spreads to` — _is this isiXhosa? ☐ yes  ☐ no_
- `sule` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweating` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweaty` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweet bars` — _is this isiXhosa? ☐ yes  ☐ no_
- `tonya` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshanḓa tsho lemala` — _is this isiXhosa? ☐ yes  ☐ no_
- `tsididi` — _is this isiXhosa? ☐ yes  ☐ no_
- `tsidifala` — _is this isiXhosa? ☐ yes  ☐ no_
- `tsikinyega` — _is this isiXhosa? ☐ yes  ☐ no_
- `u suka ngoho` — _is this isiXhosa? ☐ yes  ☐ no_
- `umjuluk' obandayo` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyabila` — _is this isiXhosa? ☐ yes  ☐ no_
- `voko ri tika` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 6. `acs_radiation`
*════════════════════════════════════════════════════════════════ | RED 5: ACS RADIATION — chest pain + arm/jaw pain + sweating | Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `arm` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest hurts` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest tight` — _is this isiXhosa? ☐ yes  ☐ no_
- `feels like something sitting on my chest` — _is this isiXhosa? ☐ yes  ☐ no_
- `fhungo` — _is this isiXhosa? ☐ yes  ☐ no_
- `go fufulelwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `go utlwalega e kete go na le sengwe se se ntseng mo sehubeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `ihlombe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingalo` — _is this isiXhosa? ☐ yes  ☐ no_
- `iqatha` — _is this isiXhosa? ☐ yes  ☐ no_
- `jaw pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `khana` — _is this isiXhosa? ☐ yes  ☐ no_
- `left arm` — _is this isiXhosa? ☐ yes  ☐ no_
- `legare` — _is this isiXhosa? ☐ yes  ☐ no_
- `legetla` — _is this isiXhosa? ☐ yes  ☐ no_
- `lehetla` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo la molema` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsoho` — _is this isiXhosa? ☐ yes  ☐ no_
- `lihlombe` — _is this isiXhosa? ☐ yes  ☐ no_
- `mofufutšo` — _is this isiXhosa? ☐ yes  ☐ no_
- `motlhala` — _is this isiXhosa? ☐ yes  ☐ no_
- `mouoane` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a fufuleha` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a fufulela` — _is this isiXhosa? ☐ yes  ☐ no_
- `opela` — _is this isiXhosa? ☐ yes  ☐ no_
- `pitlagane` — _is this isiXhosa? ☐ yes  ☐ no_
- `rikatla` — _is this isiXhosa? ☐ yes  ☐ no_
- `se a opela` — _is this isiXhosa? ☐ yes  ☐ no_
- `se pitlagane` — _is this isiXhosa? ☐ yes  ☐ no_
- `shoulder pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `sifuba` — _is this isiXhosa? ☐ yes  ☐ no_
- `skouer` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweating` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweet` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweetvogtig` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshanḓa` — _is this isiXhosa? ☐ yes  ☐ no_
- `u a suka` — _is this isiXhosa? ☐ yes  ☐ no_
- `u a suza` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyabila` — _is this isiXhosa? ☐ yes  ☐ no_
- `voko` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 7. `obstetric_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 6: OBSTETRIC HAEMORRHAGE — pregnant + bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a mantsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `bleeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `bleeding heavily` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood` — _is this isiXhosa? ☐ yes  ☐ no_
- `boimana` — _is this isiXhosa? ☐ yes  ☐ no_
- `dutla` — _is this isiXhosa? ☐ yes  ☐ no_
- `go dutla madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `go dutla madi a mantsi thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `go dutla madi go go masisi` — _is this isiXhosa? ☐ yes  ☐ no_
- `go dutla madi thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `go lahlegelwa ke madi thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `haemorrhage` — _is this isiXhosa? ☐ yes  ☐ no_
- `hemorrhage` — _is this isiXhosa? ☐ yes  ☐ no_
- `imile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingati` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke ipaakanyeditse` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `massive bleeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngati` — _is this isiXhosa? ☐ yes  ☐ no_
- `o imile` — _is this isiXhosa? ☐ yes  ☐ no_
- `opha` — _is this isiXhosa? ☐ yes  ☐ no_
- `pregnancy` — _is this isiXhosa? ☐ yes  ☐ no_
- `pregnant` — _is this isiXhosa? ☐ yes  ☐ no_
- `swangari` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyopha` — _is this isiXhosa? ☐ yes  ☐ no_
- `zwigolo` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 8. `obstetric_cord_or_fetal`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 7: OBSTETRIC CORD / FETAL EMERGENCY | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `umntwana akanyakazi`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `baba beweeg nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `baby not moving` — _is this isiXhosa? ☐ yes  ☐ no_
- `baby stopped moving` — _is this isiXhosa? ☐ yes  ☐ no_
- `cord came out` — _is this isiXhosa? ☐ yes  ☐ no_
- `cord is out` — _is this isiXhosa? ☐ yes  ☐ no_
- `mhahla wu humile` — _is this isiXhosa? ☐ yes  ☐ no_
- `mohara o tsoile` — _is this isiXhosa? ☐ yes  ☐ no_
- `mohara o tswile` — _is this isiXhosa? ☐ yes  ☐ no_
- `mohara o tšwile` — _is this isiXhosa? ☐ yes  ☐ no_
- `mohlola wo bva` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana ga a šikinyege` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana ha a tshikinyege` — _is this isiXhosa? ☐ yes  ☐ no_
- `no fetal movement` — _is this isiXhosa? ☐ yes  ☐ no_
- `nwana a a tshikinyeki` — _is this isiXhosa? ☐ yes  ☐ no_
- `prolapsed cord` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 9. `envenomation`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 8: SNAKE BITE — all 11 languages | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `bit by snake` — _is this isiXhosa? ☐ yes  ☐ no_
- `bitten by snake` — _is this isiXhosa? ☐ yes  ☐ no_
- `go longwa ke noga` — _is this isiXhosa? ☐ yes  ☐ no_
- `noga e a loma` — _is this isiXhosa? ☐ yes  ☐ no_
- `noga e nkometse` — _is this isiXhosa? ☐ yes  ☐ no_
- `nyoka yi n'wi lumile` — _is this isiXhosa? ☐ yes  ☐ no_
- `o lomilwe ke noga` — _is this isiXhosa? ☐ yes  ☐ no_
- `snake bit` — _is this isiXhosa? ☐ yes  ☐ no_
- `snake bite` — _is this isiXhosa? ☐ yes  ☐ no_
- `snakebite` — _is this isiXhosa? ☐ yes  ☐ no_
- `ṋowa` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 10. `severe_burns`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `utshiswe kakhulu`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `body on fire` — _is this isiXhosa? ☐ yes  ☐ no_
- `burn from explosion` — _is this isiXhosa? ☐ yes  ☐ no_
- `burning all over` — _is this isiXhosa? ☐ yes  ☐ no_
- `burns to face and hands` — _is this isiXhosa? ☐ yes  ☐ no_
- `burnt all over` — _is this isiXhosa? ☐ yes  ☐ no_
- `izandla nobuso kushisile` — _is this isiXhosa? ☐ yes  ☐ no_
- `izandla nobuso zitshisiwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `large burn` — _is this isiXhosa? ☐ yes  ☐ no_
- `meetse a go fisha` — _is this isiXhosa? ☐ yes  ☐ no_
- `metsi a chesang` — _is this isiXhosa? ☐ yes  ☐ no_
- `o cheswe` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tshiwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `severe burn` — _is this isiXhosa? ☐ yes  ☐ no_
- `u pfile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ushiswe kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `vuur oor liggaam` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 11. `severe_burns_context`
*════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `umqolo`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `back` — _is this isiXhosa? ☐ yes  ☐ no_
- `bene` — _is this isiXhosa? ☐ yes  ☐ no_
- `boiling water on` — _is this isiXhosa? ☐ yes  ☐ no_
- `bors` — _is this isiXhosa? ☐ yes  ☐ no_
- `buso` — _is this isiXhosa? ☐ yes  ☐ no_
- `chest` — _is this isiXhosa? ☐ yes  ☐ no_
- `face` — _is this isiXhosa? ☐ yes  ☐ no_
- `gesig` — _is this isiXhosa? ☐ yes  ☐ no_
- `imilente` — _is this isiXhosa? ☐ yes  ☐ no_
- `imilenze` — _is this isiXhosa? ☐ yes  ☐ no_
- `isisu` — _is this isiXhosa? ☐ yes  ☐ no_
- `khana` — _is this isiXhosa? ☐ yes  ☐ no_
- `khwiri` — _is this isiXhosa? ☐ yes  ☐ no_
- `legs` — _is this isiXhosa? ☐ yes  ☐ no_
- `lumbu` — _is this isiXhosa? ☐ yes  ☐ no_
- `maag` — _is this isiXhosa? ☐ yes  ☐ no_
- `maoto` — _is this isiXhosa? ☐ yes  ☐ no_
- `milenge` — _is this isiXhosa? ☐ yes  ☐ no_
- `milenzhe` — _is this isiXhosa? ☐ yes  ☐ no_
- `mokokotlo` — _is this isiXhosa? ☐ yes  ☐ no_
- `mokwatla` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpa` — _is this isiXhosa? ☐ yes  ☐ no_
- `muṱana` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngalati` — _is this isiXhosa? ☐ yes  ☐ no_
- `nkolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `rug` — _is this isiXhosa? ☐ yes  ☐ no_
- `sefahlego` — _is this isiXhosa? ☐ yes  ☐ no_
- `sefahleho` — _is this isiXhosa? ☐ yes  ☐ no_
- `sifuba` — _is this isiXhosa? ☐ yes  ☐ no_
- `sisu` — _is this isiXhosa? ☐ yes  ☐ no_
- `stomach` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this isiXhosa? ☐ yes  ☐ no_
- `umhlana` — _is this isiXhosa? ☐ yes  ☐ no_
- `umhlane` — _is this isiXhosa? ☐ yes  ☐ no_
- `xikandza` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 12. `neonatal_apnoea`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `ibhabhu aliphefumli`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `baby not breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `baby stopped breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `infant not breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `newborn not breathing` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana o emisitse go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `nwana a a hefemuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `nwana lontsongo a nga hefemuli` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 13. `paediatric_unconscious`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `baby unconscious` — _is this isiXhosa? ☐ yes  ☐ no_
- `child unconscious` — _is this isiXhosa? ☐ yes  ☐ no_
- `infant unconscious` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana ga a itse sepe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana o phutlhame` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana o wele fa fatshe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana o wetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana o wetse fatshe` — _is this isiXhosa? ☐ yes  ☐ no_
- `nwana a nga vuki` — _is this isiXhosa? ☐ yes  ☐ no_
- `toddler collapsed` — _is this isiXhosa? ☐ yes  ☐ no_
- `umntwana oqulekile` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 14. `meningococcal_rash`
*════════════════════════════════════════════════════════════════ | RED 11: MENINGOCOCCAL RASH — purple/non-blanching | Extended to all 11 languages (nso/tn/st/ts/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `amabala amnyama` — _is this isiXhosa? ☐ yes  ☐ no_
- `amabala aphuzi` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood rash` — _is this isiXhosa? ☐ yes  ☐ no_
- `dark rash` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga le nyelele` — _is this isiXhosa? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a lefifi` — _is this isiXhosa? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a pherese` — _is this isiXhosa? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a sa nyeleleng fa o le tobetsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `matheba a sa nyeleleng fa o tobetsa ka galase` — _is this isiXhosa? ☐ yes  ☐ no_
- `nie-verbleekende uitslag` — _is this isiXhosa? ☐ yes  ☐ no_
- `non-blanching rash` — _is this isiXhosa? ☐ yes  ☐ no_
- `purple rash` — _is this isiXhosa? ☐ yes  ☐ no_
- `rash pressing glass` — _is this isiXhosa? ☐ yes  ☐ no_
- `rash that doesn't fade` — _is this isiXhosa? ☐ yes  ☐ no_
- `rash won't disappear` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 15. `anaphylaxis`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 12: ANAPHYLAXIS — throat/face swelling after sting/food | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `allegi` — _is this isiXhosa? ☐ yes  ☐ no_
- `allegi ya dijo` — _is this isiXhosa? ☐ yes  ☐ no_
- `bee` — _is this isiXhosa? ☐ yes  ☐ no_
- `bye` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't swallow` — _is this isiXhosa? ☐ yes  ☐ no_
- `dijo` — _is this isiXhosa? ☐ yes  ☐ no_
- `e rurugile` — _is this isiXhosa? ☐ yes  ☐ no_
- `face swelling` — _is this isiXhosa? ☐ yes  ☐ no_
- `food allergy` — _is this isiXhosa? ☐ yes  ☐ no_
- `go loma` — _is this isiXhosa? ☐ yes  ☐ no_
- `go sa amogelege` — _is this isiXhosa? ☐ yes  ☐ no_
- `go sa amogelege ga dijo` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhaba` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhaba moento` — _is this isiXhosa? ☐ yes  ☐ no_
- `imbumba` — _is this isiXhosa? ☐ yes  ☐ no_
- `injection` — _is this isiXhosa? ☐ yes  ☐ no_
- `inspuiting` — _is this isiXhosa? ☐ yes  ☐ no_
- `kos` — _is this isiXhosa? ☐ yes  ☐ no_
- `lips swelling` — _is this isiXhosa? ☐ yes  ☐ no_
- `medication` — _is this isiXhosa? ☐ yes  ☐ no_
- `melemo` — _is this isiXhosa? ☐ yes  ☐ no_
- `melomo` — _is this isiXhosa? ☐ yes  ☐ no_
- `moento` — _is this isiXhosa? ☐ yes  ☐ no_
- `mokololo` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpfundla` — _is this isiXhosa? ☐ yes  ☐ no_
- `nko` — _is this isiXhosa? ☐ yes  ☐ no_
- `nonyane` — _is this isiXhosa? ☐ yes  ☐ no_
- `nose` — _is this isiXhosa? ☐ yes  ☐ no_
- `nosi` — _is this isiXhosa? ☐ yes  ☐ no_
- `notši` — _is this isiXhosa? ☐ yes  ☐ no_
- `nut` — _is this isiXhosa? ☐ yes  ☐ no_
- `nyosi` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a tswalega` — _is this isiXhosa? ☐ yes  ☐ no_
- `rurugile` — _is this isiXhosa? ☐ yes  ☐ no_
- `se rurugile` — _is this isiXhosa? ☐ yes  ☐ no_
- `sting` — _is this isiXhosa? ☐ yes  ☐ no_
- `swakudya` — _is this isiXhosa? ☐ yes  ☐ no_
- `throat closing` — _is this isiXhosa? ☐ yes  ☐ no_
- `throat swelling` — _is this isiXhosa? ☐ yes  ☐ no_
- `tswalega` — _is this isiXhosa? ☐ yes  ☐ no_
- `umjovo` — _is this isiXhosa? ☐ yes  ☐ no_
- `zwiliwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ṋovhela` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 16. `traumatic_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `blood everywhere` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood pouring` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't stop bleeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingati ayinqamuki` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingati iyampompoza` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a a elela` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a elela` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a elela thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a phatloga a tswa` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi ga a eme` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi go tletse gongwe le gongwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi ha a eme` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngati a yi yimi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngati yi humesa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o hlabilwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `o thuntswe e bile o dutla madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tlhabilwe mme o dutla madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `o ṱhavhiwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `shot and bleeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `spurting blood` — _is this isiXhosa? ☐ yes  ☐ no_
- `stabbed and bleeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `u tlhabiwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `udutshulwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `udutyulwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ugwaziwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ugwazwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `uhlabwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ukopha okunganqamuki` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyopha kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### ORANGE discriminators

#### ORANGE 1. `stroke_facial_droop`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `buso buyehla` — _is this isiXhosa? ☐ yes  ☐ no_
- `face drooping` — _is this isiXhosa? ☐ yes  ☐ no_
- `face dropped` — _is this isiXhosa? ☐ yes  ☐ no_
- `facial droop` — _is this isiXhosa? ☐ yes  ☐ no_
- `gesig hang` — _is this isiXhosa? ☐ yes  ☐ no_
- `gesig laat sak` — _is this isiXhosa? ☐ yes  ☐ no_
- `molomo o kgopame` — _is this isiXhosa? ☐ yes  ☐ no_
- `molomo o kgopiše` — _is this isiXhosa? ☐ yes  ☐ no_
- `molomo o kobegile` — _is this isiXhosa? ☐ yes  ☐ no_
- `mond skeef` — _is this isiXhosa? ☐ yes  ☐ no_
- `mouth twisted` — _is this isiXhosa? ☐ yes  ☐ no_
- `mulomo wo goba` — _is this isiXhosa? ☐ yes  ☐ no_
- `nomo wu gombile` — _is this isiXhosa? ☐ yes  ☐ no_
- `one side face` — _is this isiXhosa? ☐ yes  ☐ no_
- `skewe glimlag` — _is this isiXhosa? ☐ yes  ☐ no_
- `smile crooked` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshifhaṱuwo tsho thela` — _is this isiXhosa? ☐ yes  ☐ no_
- `uneven face` — _is this isiXhosa? ☐ yes  ☐ no_
- `xikandza xi rhelerile` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 2. `stroke_arm_weakness`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `arm dropping` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm gevoelloos` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm is swak` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm numb` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm wat sak` — _is this isiXhosa? ☐ yes  ☐ no_
- `arm weakness` — _is this isiXhosa? ☐ yes  ☐ no_
- `armswakheid` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't lift arm` — _is this isiXhosa? ☐ yes  ☐ no_
- `een arm is swak` — _is this isiXhosa? ☐ yes  ☐ no_
- `hand swak` — _is this isiXhosa? ☐ yes  ☐ no_
- `hand weak` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingalo ayinyakazi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingalo ibhudlana` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingalo ibuthathaka` — _is this isiXhosa? ☐ yes  ☐ no_
- `kan nie arm oplig` — _is this isiXhosa? ☐ yes  ☐ no_
- `left side weak` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo ga le tshikinyege` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsogo ga le šikinyege` — _is this isiXhosa? ☐ yes  ☐ no_
- `letsoho ha le tshikinyehe` — _is this isiXhosa? ☐ yes  ☐ no_
- `one arm weak` — _is this isiXhosa? ☐ yes  ☐ no_
- `right side weak` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshanḓa a tshi tshikinyei` — _is this isiXhosa? ☐ yes  ☐ no_
- `uhlangothi lubuthakathaka` — _is this isiXhosa? ☐ yes  ☐ no_
- `voko a ri tshikinyeki` — _is this isiXhosa? ☐ yes  ☐ no_
- `weakness one side` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 3. `stroke_speech`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `uthetha nzima`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `akukhulumeki` — _is this isiXhosa? ☐ yes  ☐ no_
- `amazwi akaphumi kakuhle` — _is this isiXhosa? ☐ yes  ☐ no_
- `amazwi awaphumi kahle` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't find words` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't speak properly` — _is this isiXhosa? ☐ yes  ☐ no_
- `confused talking` — _is this isiXhosa? ☐ yes  ☐ no_
- `emagama akaphumi kahle` — _is this isiXhosa? ☐ yes  ☐ no_
- `maipfi ha a ḓi bvi zwavhuḓi` — _is this isiXhosa? ☐ yes  ☐ no_
- `o bua ka tsela e e gakgamatsang` — _is this isiXhosa? ☐ yes  ☐ no_
- `o bua ka tsela e e sa tlwaelegang` — _is this isiXhosa? ☐ yes  ☐ no_
- `puo e a kgopama` — _is this isiXhosa? ☐ yes  ☐ no_
- `slurred speech` — _is this isiXhosa? ☐ yes  ☐ no_
- `speech slurred` — _is this isiXhosa? ☐ yes  ☐ no_
- `talking funny` — _is this isiXhosa? ☐ yes  ☐ no_
- `ukhuluma kanzima` — _is this isiXhosa? ☐ yes  ☐ no_
- `woorde kom nie uit` — _is this isiXhosa? ☐ yes  ☐ no_
- `words wrong` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 4. `thunderclap_headache`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `intloko ebuhlungu kakhulu ngequbuliso`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `botlhoko jo bogolo thata jwa tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo sa tshwane le jo nkileng ka bo nna le jone` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso le ka bogale` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso mme bo le bogale` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo tlhaselang ka bonako jaaka ledimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `explosive headache` — _is this isiXhosa? ☐ yes  ☐ no_
- `headache like never before` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke botlhoko jo bogolo thata jwa tlhogo mo botshelong jwa me` — _is this isiXhosa? ☐ yes  ☐ no_
- `sudden severe headache` — _is this isiXhosa? ☐ yes  ☐ no_
- `thunderclap` — _is this isiXhosa? ☐ yes  ☐ no_
- `worst headache` — _is this isiXhosa? ☐ yes  ☐ no_
- `worst headache of my life` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 5. `post_ictal`
*STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages | POST-ICTAL — had a fit, now confused/drowsy — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `akavuki` — _is this isiXhosa? ☐ yes  ☐ no_
- `confused` — _is this isiXhosa? ☐ yes  ☐ no_
- `drowsy` — _is this isiXhosa? ☐ yes  ☐ no_
- `finished fitting` — _is this isiXhosa? ☐ yes  ☐ no_
- `fit` — _is this isiXhosa? ☐ yes  ☐ no_
- `fit e emisitse` — _is this isiXhosa? ☐ yes  ☐ no_
- `fit stopped` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tlhapisiwa tsotlhe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tsoge` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tsoge sentle` — _is this isiXhosa? ☐ yes  ☐ no_
- `go rotha go fedile` — _is this isiXhosa? ☐ yes  ☐ no_
- `had a seizure` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho ratha ho fedile` — _is this isiXhosa? ☐ yes  ☐ no_
- `just fitted` — _is this isiXhosa? ☐ yes  ☐ no_
- `just had a fit` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku rhurhumela ku hele` — _is this isiXhosa? ☐ yes  ☐ no_
- `not fully awake` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a otsela` — _is this isiXhosa? ☐ yes  ☐ no_
- `o dzhendzhele` — _is this isiXhosa? ☐ yes  ☐ no_
- `o eḓela` — _is this isiXhosa? ☐ yes  ☐ no_
- `o fetsa go nna le sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o kile a ratha` — _is this isiXhosa? ☐ yes  ☐ no_
- `o nnile le sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o otsela` — _is this isiXhosa? ☐ yes  ☐ no_
- `o qetile go rotha` — _is this isiXhosa? ☐ yes  ☐ no_
- `o robetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `o robetše` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tsogile morago ga sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `seizure stopped` — _is this isiXhosa? ☐ yes  ☐ no_
- `sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `sethoathoa se emisitse` — _is this isiXhosa? ☐ yes  ☐ no_
- `slaperig` — _is this isiXhosa? ☐ yes  ☐ no_
- `sleepy` — _is this isiXhosa? ☐ yes  ☐ no_
- `u dzhendzela ho fhela` — _is this isiXhosa? ☐ yes  ☐ no_
- `u rhurhumele` — _is this isiXhosa? ☐ yes  ☐ no_
- `undwazile` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyozela` — _is this isiXhosa? ☐ yes  ☐ no_
- `verward` — _is this isiXhosa? ☐ yes  ☐ no_
- `woke up after fit` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 6. `severe_asthma`
*SEVERE ASTHMA — inhaler not working, can't speak*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a i shumi` — _is this isiXhosa? ☐ yes  ☐ no_
- `a i thusi` — _is this isiXhosa? ☐ yes  ☐ no_
- `a yi pfuni` — _is this isiXhosa? ☐ yes  ☐ no_
- `a yi tirhi` — _is this isiXhosa? ☐ yes  ☐ no_
- `asma` — _is this isiXhosa? ☐ yes  ☐ no_
- `asthma` — _is this isiXhosa? ☐ yes  ☐ no_
- `ayincedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ayisizi` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't speak` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't talk` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't walk` — _is this isiXhosa? ☐ yes  ☐ no_
- `exhausted` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e bereke` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e dire` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e thuse` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e thuše` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e šome` — _is this isiXhosa? ☐ yes  ☐ no_
- `getting worse` — _is this isiXhosa? ☐ yes  ☐ no_
- `go ntse go oketsega go maswe` — _is this isiXhosa? ☐ yes  ☐ no_
- `go ya go nna maswe le go feta` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha e sebetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha e thuse` — _is this isiXhosa? ☐ yes  ☐ no_
- `help nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `inhaler` — _is this isiXhosa? ☐ yes  ☐ no_
- `inheila` — _is this isiXhosa? ☐ yes  ☐ no_
- `iphampu` — _is this isiXhosa? ☐ yes  ☐ no_
- `kan nie praat` — _is this isiXhosa? ☐ yes  ☐ no_
- `lips blue` — _is this isiXhosa? ☐ yes  ☐ no_
- `melomo e fetogile tala putswa` — _is this isiXhosa? ☐ yes  ☐ no_
- `nebulaisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `nebuliser` — _is this isiXhosa? ☐ yes  ☐ no_
- `not helping` — _is this isiXhosa? ☐ yes  ☐ no_
- `not working` — _is this isiXhosa? ☐ yes  ☐ no_
- `o fetoga tala putswa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o lapile thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `pampu` — _is this isiXhosa? ☐ yes  ☐ no_
- `pompi` — _is this isiXhosa? ☐ yes  ☐ no_
- `pompo` — _is this isiXhosa? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `pump` — _is this isiXhosa? ☐ yes  ☐ no_
- `sedirisiwa sa go thusa go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `tala putswa` — _is this isiXhosa? ☐ yes  ☐ no_
- `turning blue` — _is this isiXhosa? ☐ yes  ☐ no_
- `werk nie` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 7. `pre_eclampsia`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `intloko`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `amehlo ayafifiala` — _is this isiXhosa? ☐ yes  ☐ no_
- `amehlo ayafifiyela` — _is this isiXhosa? ☐ yes  ☐ no_
- `blurred vision` — _is this isiXhosa? ☐ yes  ☐ no_
- `face swollen` — _is this isiXhosa? ☐ yes  ☐ no_
- `feet very swollen` — _is this isiXhosa? ☐ yes  ☐ no_
- `gesig geswel` — _is this isiXhosa? ☐ yes  ☐ no_
- `hands swollen` — _is this isiXhosa? ☐ yes  ☐ no_
- `headache` — _is this isiXhosa? ☐ yes  ☐ no_
- `hlogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `hloho` — _is this isiXhosa? ☐ yes  ☐ no_
- `mahlo a fifala` — _is this isiXhosa? ☐ yes  ☐ no_
- `matlho a fifala` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndo vhifha` — _is this isiXhosa? ☐ yes  ☐ no_
- `no urine` — _is this isiXhosa? ☐ yes  ☐ no_
- `o imile` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain under ribs` — _is this isiXhosa? ☐ yes  ☐ no_
- `pregnant` — _is this isiXhosa? ☐ yes  ☐ no_
- `seeing stars` — _is this isiXhosa? ☐ yes  ☐ no_
- `swangari` — _is this isiXhosa? ☐ yes  ☐ no_
- `tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ṱhoho` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 8. `ectopic_pregnancy`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `iintlungu ezinkulu kwicala elinye`
- `ixesha alifiki`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a ka tswa a imile` — _is this isiXhosa? ☐ yes  ☐ no_
- `bogale` — _is this isiXhosa? ☐ yes  ☐ no_
- `bogolo thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko ba lehetla` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko bja legetla` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko bjo bogolo ka lehlakoreng le tee` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko bo boholo ka lehlakoreng le le leng` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko jo bogolo mo letlhakoreng le lengwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko jwa legetla` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogale` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa mojeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa molemeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa mojeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa molemeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka letlhakore le lengwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `buhlungu lobukhulu ngelinye lihlangotsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `could be pregnant` — _is this isiXhosa? ☐ yes  ☐ no_
- `erge pyn aan een kant` — _is this isiXhosa? ☐ yes  ☐ no_
- `fhungo ḽi vhavha` — _is this isiXhosa? ☐ yes  ☐ no_
- `ihlombe libuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `iperiod ilate` — _is this isiXhosa? ☐ yes  ☐ no_
- `iqatha libuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `isikhathi asifikanga` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgwedi ga e fihla` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgwedi ga e tle` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgwedi ha e fihle` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku vava ka matimba hi tlhelo rin'we` — _is this isiXhosa? ☐ yes  ☐ no_
- `left side severe` — _is this isiXhosa? ☐ yes  ☐ no_
- `legare` — _is this isiXhosa? ☐ yes  ☐ no_
- `letlhakore` — _is this isiXhosa? ☐ yes  ☐ no_
- `lihlombe libuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `masiku a wu fiki` — _is this isiXhosa? ☐ yes  ☐ no_
- `missed period` — _is this isiXhosa? ☐ yes  ☐ no_
- `nako ga e fihla` — _is this isiXhosa? ☐ yes  ☐ no_
- `nako ga e tle` — _is this isiXhosa? ☐ yes  ☐ no_
- `nako ha e fihle` — _is this isiXhosa? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `nako ya kgwedi e diegile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngakwesobunxele ibuhlungu kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `nkarhi a wu fiki` — _is this isiXhosa? ☐ yes  ☐ no_
- `o fositse nako ya kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `period late` — _is this isiXhosa? ☐ yes  ☐ no_
- `pregnancy test positive` — _is this isiXhosa? ☐ yes  ☐ no_
- `right side severe` — _is this isiXhosa? ☐ yes  ☐ no_
- `rikatla ri vava` — _is this isiXhosa? ☐ yes  ☐ no_
- `severe pain one side` — _is this isiXhosa? ☐ yes  ☐ no_
- `sharp pain left side` — _is this isiXhosa? ☐ yes  ☐ no_
- `sharp pain right side` — _is this isiXhosa? ☐ yes  ☐ no_
- `shoulder pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `shoulder tip pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `sikhatsi asifikanga` — _is this isiXhosa? ☐ yes  ☐ no_
- `skerp pyn links` — _is this isiXhosa? ☐ yes  ☐ no_
- `skerp pyn regs` — _is this isiXhosa? ☐ yes  ☐ no_
- `skouer pyn` — _is this isiXhosa? ☐ yes  ☐ no_
- `teko ya boimana e bontsha gore o imile` — _is this isiXhosa? ☐ yes  ☐ no_
- `tip of shoulder` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshifhinga a tshi ḓi` — _is this isiXhosa? ☐ yes  ☐ no_
- `vhutungu vhuhulu tshipiḓa tshithihi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ṅwedzi a u ḓi` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 9. `febrile_seizure`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `baba` — _is this isiXhosa? ☐ yes  ☐ no_
- `baby` — _is this isiXhosa? ☐ yes  ☐ no_
- `banjwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `child` — _is this isiXhosa? ☐ yes  ☐ no_
- `convulsion` — _is this isiXhosa? ☐ yes  ☐ no_
- `dzhendzela` — _is this isiXhosa? ☐ yes  ☐ no_
- `fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `fit` — _is this isiXhosa? ☐ yes  ☐ no_
- `fitting` — _is this isiXhosa? ☐ yes  ☐ no_
- `go thothomela` — _is this isiXhosa? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this isiXhosa? ☐ yes  ☐ no_
- `hot` — _is this isiXhosa? ☐ yes  ☐ no_
- `infant` — _is this isiXhosa? ☐ yes  ☐ no_
- `kind` — _is this isiXhosa? ☐ yes  ☐ no_
- `kleuter` — _is this isiXhosa? ☐ yes  ☐ no_
- `mofikela` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this isiXhosa? ☐ yes  ☐ no_
- `nhanga` — _is this isiXhosa? ☐ yes  ☐ no_
- `nwana` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `phoholo` — _is this isiXhosa? ☐ yes  ☐ no_
- `rhurhumela` — _is this isiXhosa? ☐ yes  ☐ no_
- `rotha` — _is this isiXhosa? ☐ yes  ☐ no_
- `seizure` — _is this isiXhosa? ☐ yes  ☐ no_
- `sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `shaking` — _is this isiXhosa? ☐ yes  ☐ no_
- `temperature` — _is this isiXhosa? ☐ yes  ☐ no_
- `temperatuur` — _is this isiXhosa? ☐ yes  ☐ no_
- `themperetšha` — _is this isiXhosa? ☐ yes  ☐ no_
- `thothomela` — _is this isiXhosa? ☐ yes  ☐ no_
- `thuthumela` — _is this isiXhosa? ☐ yes  ☐ no_
- `toddler` — _is this isiXhosa? ☐ yes  ☐ no_
- `umkhuhlane` — _is this isiXhosa? ☐ yes  ☐ no_
- `umntwana` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 10. `infant_sepsis_screen`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `1 month old` — _is this isiXhosa? ☐ yes  ☐ no_
- `1 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `10 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `11 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `12 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `13 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `14 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `15 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `16 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `17 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `18 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `19 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `2 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `2 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `20 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `21 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `22 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `23 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `3 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `3 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `4 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `4 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `5 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `5 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `6 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `6 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `7 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `7 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `8 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `8 week old` — _is this isiXhosa? ☐ yes  ☐ no_
- `9 month` — _is this isiXhosa? ☐ yes  ☐ no_
- `a nga dyi` — _is this isiXhosa? ☐ yes  ☐ no_
- `a nga fani na yena` — _is this isiXhosa? ☐ yes  ☐ no_
- `a nga nwi` — _is this isiXhosa? ☐ yes  ☐ no_
- `akafuni ubisi` — _is this isiXhosa? ☐ yes  ☐ no_
- `akasadli` — _is this isiXhosa? ☐ yes  ☐ no_
- `akasaphuzi` — _is this isiXhosa? ☐ yes  ☐ no_
- `akasayena` — _is this isiXhosa? ☐ yes  ☐ no_
- `akaziphilele` — _is this isiXhosa? ☐ yes  ☐ no_
- `altered behavior` — _is this isiXhosa? ☐ yes  ☐ no_
- `altered behaviour` — _is this isiXhosa? ☐ yes  ☐ no_
- `baba` — _is this isiXhosa? ☐ yes  ☐ no_
- `baby` — _is this isiXhosa? ☐ yes  ☐ no_
- `baie slaperig` — _is this isiXhosa? ☐ yes  ☐ no_
- `baie warm` — _is this isiXhosa? ☐ yes  ☐ no_
- `banjwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `burning up` — _is this isiXhosa? ☐ yes  ☐ no_
- `child` — _is this isiXhosa? ☐ yes  ☐ no_
- `convulsion` — _is this isiXhosa? ☐ yes  ☐ no_
- `couple of months` — _is this isiXhosa? ☐ yes  ☐ no_
- `drink nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `drowsy` — _is this isiXhosa? ☐ yes  ☐ no_
- `dzhendzela` — _is this isiXhosa? ☐ yes  ☐ no_
- `febrile_seizure` — _is this isiXhosa? ☐ yes  ☐ no_
- `fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `few months old` — _is this isiXhosa? ☐ yes  ☐ no_
- `few weeks old` — _is this isiXhosa? ☐ yes  ☐ no_
- `fisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `fit` — _is this isiXhosa? ☐ yes  ☐ no_
- `fitting` — _is this isiXhosa? ☐ yes  ☐ no_
- `floppy` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a je` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a nwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tshwane` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tshwane le ena` — _is this isiXhosa? ☐ yes  ☐ no_
- `go thothomela` — _is this isiXhosa? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a je` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a noe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a nwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a tshwane le eena` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a ḽi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha fani na ene` — _is this isiXhosa? ☐ yes  ☐ no_
- `hard to wake` — _is this isiXhosa? ☐ yes  ☐ no_
- `high temperature` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho fisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `hot` — _is this isiXhosa? ☐ yes  ☐ no_
- `infant` — _is this isiXhosa? ☐ yes  ☐ no_
- `insana` — _is this isiXhosa? ☐ yes  ☐ no_
- `just lying there` — _is this isiXhosa? ☐ yes  ☐ no_
- `kind` — _is this isiXhosa? ☐ yes  ☐ no_
- `kleuter` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku hisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `lethargic` — _is this isiXhosa? ☐ yes  ☐ no_
- `limp` — _is this isiXhosa? ☐ yes  ☐ no_
- `mofikela` — _is this isiXhosa? ☐ yes  ☐ no_
- `my baby` — _is this isiXhosa? ☐ yes  ☐ no_
- `my infant` — _is this isiXhosa? ☐ yes  ☐ no_
- `my newborn` — _is this isiXhosa? ☐ yes  ☐ no_
- `newborn` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this isiXhosa? ☐ yes  ☐ no_
- `nhanga` — _is this isiXhosa? ☐ yes  ☐ no_
- `nie soos homself nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `nie wakker te kry nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `not breastfeeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `not drinking` — _is this isiXhosa? ☐ yes  ☐ no_
- `not eating` — _is this isiXhosa? ☐ yes  ☐ no_
- `not feeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `not herself` — _is this isiXhosa? ☐ yes  ☐ no_
- `not himself` — _is this isiXhosa? ☐ yes  ☐ no_
- `not latching` — _is this isiXhosa? ☐ yes  ☐ no_
- `not like her` — _is this isiXhosa? ☐ yes  ☐ no_
- `not like him` — _is this isiXhosa? ☐ yes  ☐ no_
- `not responsive` — _is this isiXhosa? ☐ yes  ☐ no_
- `nwana` — _is this isiXhosa? ☐ yes  ☐ no_
- `nwana lontsongo` — _is this isiXhosa? ☐ yes  ☐ no_
- `o robetse haholo` — _is this isiXhosa? ☐ yes  ☐ no_
- `o robetse thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `o robile thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `phoholo` — _is this isiXhosa? ☐ yes  ☐ no_
- `poor feeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `refusing food` — _is this isiXhosa? ☐ yes  ☐ no_
- `refusing milk` — _is this isiXhosa? ☐ yes  ☐ no_
- `rhurhumela` — _is this isiXhosa? ☐ yes  ☐ no_
- `rotha` — _is this isiXhosa? ☐ yes  ☐ no_
- `seizure` — _is this isiXhosa? ☐ yes  ☐ no_
- `sethoathoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `shaking` — _is this isiXhosa? ☐ yes  ☐ no_
- `slap` — _is this isiXhosa? ☐ yes  ☐ no_
- `sleepy` — _is this isiXhosa? ☐ yes  ☐ no_
- `temperature` — _is this isiXhosa? ☐ yes  ☐ no_
- `temperatuur` — _is this isiXhosa? ☐ yes  ☐ no_
- `themperetšha` — _is this isiXhosa? ☐ yes  ☐ no_
- `thothomela` — _is this isiXhosa? ☐ yes  ☐ no_
- `thuthumela` — _is this isiXhosa? ☐ yes  ☐ no_
- `toddler` — _is this isiXhosa? ☐ yes  ☐ no_
- `u etlela ngopfu` — _is this isiXhosa? ☐ yes  ☐ no_
- `u fhisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ufudumele` — _is this isiXhosa? ☐ yes  ☐ no_
- `umkhuhlane` — _is this isiXhosa? ☐ yes  ☐ no_
- `umntwana` — _is this isiXhosa? ☐ yes  ☐ no_
- `under 1 year` — _is this isiXhosa? ☐ yes  ☐ no_
- `under a year` — _is this isiXhosa? ☐ yes  ☐ no_
- `under one year` — _is this isiXhosa? ☐ yes  ☐ no_
- `unresponsive` — _is this isiXhosa? ☐ yes  ☐ no_
- `ushisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyashisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `very hot` — _is this isiXhosa? ☐ yes  ☐ no_
- `very sleepy` — _is this isiXhosa? ☐ yes  ☐ no_
- `wil nie drink nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `wil nie eet nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `won't breastfeed` — _is this isiXhosa? ☐ yes  ☐ no_
- `won't drink` — _is this isiXhosa? ☐ yes  ☐ no_
- `won't eat` — _is this isiXhosa? ☐ yes  ☐ no_
- `won't latch` — _is this isiXhosa? ☐ yes  ☐ no_
- `wont eat` — _is this isiXhosa? ☐ yes  ☐ no_
- `xitsongwana` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 11. `acute_confusion_chronic`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a a tivi` — _is this isiXhosa? ☐ yes  ☐ no_
- `akati` — _is this isiXhosa? ☐ yes  ☐ no_
- `akazi` — _is this isiXhosa? ☐ yes  ☐ no_
- `arv` — _is this isiXhosa? ☐ yes  ☐ no_
- `confused` — _is this isiXhosa? ☐ yes  ☐ no_
- `deurmekaar` — _is this isiXhosa? ☐ yes  ☐ no_
- `diabetes` — _is this isiXhosa? ☐ yes  ☐ no_
- `diabetic` — _is this isiXhosa? ☐ yes  ☐ no_
- `doesn't know` — _is this isiXhosa? ☐ yes  ☐ no_
- `doesn't recognise` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a bue sentle` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a itse` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tlhaloganyege` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tsebe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a tsebe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a ḓivhi` — _is this isiXhosa? ☐ yes  ☐ no_
- `high blood` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv` — _is this isiXhosa? ☐ yes  ☐ no_
- `hypertension` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatelelo e e kwa godimo ya madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `maak nie sin` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this isiXhosa? ☐ yes  ☐ no_
- `not making sense` — _is this isiXhosa? ☐ yes  ☐ no_
- `o bua dilo tse di sa utlwaleng` — _is this isiXhosa? ☐ yes  ☐ no_
- `o bua tsotlhe tsotlhe` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `sugar` — _is this isiXhosa? ☐ yes  ☐ no_
- `suiker` — _is this isiXhosa? ☐ yes  ☐ no_
- `sukiri` — _is this isiXhosa? ☐ yes  ☐ no_
- `talking nonsense` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 12. `head_trauma_loc`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages | HEAD TRAUMA + LOC — head injury + loss of consciousness or altered state. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `intloko ibethiwe`
- `ndibethiwe entloko`
- `ndiwile ndabetha intloko`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a ndzi tsundzuki` — _is this isiXhosa? ☐ yes  ☐ no_
- `a thi humbuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `andikhumbuli` — _is this isiXhosa? ☐ yes  ☐ no_
- `blacked out` — _is this isiXhosa? ☐ yes  ☐ no_
- `bump to head` — _is this isiXhosa? ☐ yes  ☐ no_
- `confused after` — _is this isiXhosa? ☐ yes  ☐ no_
- `deurmekaar na val` — _is this isiXhosa? ☐ yes  ☐ no_
- `fell and hit head` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga ke gakologelwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga ke gopole` — _is this isiXhosa? ☐ yes  ☐ no_
- `geheueverlies` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha ke hopole` — _is this isiXhosa? ☐ yes  ☐ no_
- `head injury` — _is this isiXhosa? ☐ yes  ☐ no_
- `head trauma` — _is this isiXhosa? ☐ yes  ☐ no_
- `hit head` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke didimatse morago` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke didimetse ka morao` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke didimetse morago` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke idibetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke itshedisitse` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke ngwele ka hlogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke oele hlohong` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke ole ka tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `knocked head` — _is this isiXhosa? ☐ yes  ☐ no_
- `knocked out` — _is this isiXhosa? ☐ yes  ☐ no_
- `lost consciousness` — _is this isiXhosa? ☐ yes  ☐ no_
- `memory loss` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndidideke emva` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndiquleke` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndiwe phantsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndo wa nda vhaisa ṱhoho` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi didimele endzhaku` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi wile ndzi dumba nhloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi wisile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngashona` — _is this isiXhosa? ☐ yes  ☐ no_
- `passed out` — _is this isiXhosa? ☐ yes  ☐ no_
- `unconscious` — _is this isiXhosa? ☐ yes  ☐ no_
- `vomiting after` — _is this isiXhosa? ☐ yes  ☐ no_
- `woke up confused` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 13. `open_fracture`
*OPEN FRACTURE — bone visible through skin. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `been uit vel` — _is this isiXhosa? ☐ yes  ☐ no_
- `bone sticking out` — _is this isiXhosa? ☐ yes  ☐ no_
- `bone through skin` — _is this isiXhosa? ☐ yes  ☐ no_
- `bone visible` — _is this isiXhosa? ☐ yes  ☐ no_
- `can see bone` — _is this isiXhosa? ☐ yes  ☐ no_
- `ithambo liphukile liphumele ngaphandle` — _is this isiXhosa? ☐ yes  ☐ no_
- `lerapo le robegile le tswa` — _is this isiXhosa? ☐ yes  ☐ no_
- `lerapo le robegile le tšwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `lesapo le robehile le tsoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `open fracture` — _is this isiXhosa? ☐ yes  ☐ no_
- `rhambu ri tshovekile ri huma` — _is this isiXhosa? ☐ yes  ☐ no_
- `ḽitambo ḽo ṱhukhukana ḽi bva` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 14. `high_energy_mechanism`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `ndibethwe yimoto`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `car accident` — _is this isiXhosa? ☐ yes  ☐ no_
- `crush injury` — _is this isiXhosa? ☐ yes  ☐ no_
- `fell from height` — _is this isiXhosa? ☐ yes  ☐ no_
- `fell from ladder` — _is this isiXhosa? ☐ yes  ☐ no_
- `fell from roof` — _is this isiXhosa? ☐ yes  ☐ no_
- `geval van leer` — _is this isiXhosa? ☐ yes  ☐ no_
- `hit by car` — _is this isiXhosa? ☐ yes  ☐ no_
- `industrial accident` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke oele le lereng` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke wele le lereng` — _is this isiXhosa? ☐ yes  ☐ no_
- `motor accident` — _is this isiXhosa? ☐ yes  ☐ no_
- `motorcycle accident` — _is this isiXhosa? ☐ yes  ☐ no_
- `mvc` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndiwe eluphahleni` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndiwile phezulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndo wa kha lere` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi wile eka lere` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwele le lereng` — _is this isiXhosa? ☐ yes  ☐ no_
- `raakgery deur motor` — _is this isiXhosa? ☐ yes  ☐ no_
- `struck by vehicle` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 15. `burns_significant`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `izandla neengalo`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `airways` — _is this isiXhosa? ☐ yes  ☐ no_
- `around neck` — _is this isiXhosa? ☐ yes  ☐ no_
- `asemweë` — _is this isiXhosa? ☐ yes  ☐ no_
- `breathing problems` — _is this isiXhosa? ☐ yes  ☐ no_
- `burn` — _is this isiXhosa? ☐ yes  ☐ no_
- `burned` — _is this isiXhosa? ☐ yes  ☐ no_
- `burnt` — _is this isiXhosa? ☐ yes  ☐ no_
- `buso` — _is this isiXhosa? ☐ yes  ☐ no_
- `diatla le matsogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `emqaleni` — _is this isiXhosa? ☐ yes  ☐ no_
- `entanyeni` — _is this isiXhosa? ☐ yes  ☐ no_
- `face` — _is this isiXhosa? ☐ yes  ☐ no_
- `gesig` — _is this isiXhosa? ☐ yes  ☐ no_
- `go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `groot area` — _is this isiXhosa? ☐ yes  ☐ no_
- `hande en arms` — _is this isiXhosa? ☐ yes  ☐ no_
- `hands and arms` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `indawo enkhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `indawo enkulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `indzawo lenkhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `inhaled smoke` — _is this isiXhosa? ☐ yes  ☐ no_
- `intamo` — _is this isiXhosa? ☐ yes  ☐ no_
- `intsamo` — _is this isiXhosa? ☐ yes  ☐ no_
- `intsizi` — _is this isiXhosa? ☐ yes  ☐ no_
- `izandla nezingalo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku hefemula` — _is this isiXhosa? ☐ yes  ☐ no_
- `large area` — _is this isiXhosa? ☐ yes  ☐ no_
- `matsoho le maoto` — _is this isiXhosa? ☐ yes  ☐ no_
- `mavoko ni marhambu` — _is this isiXhosa? ☐ yes  ☐ no_
- `molaleng` — _is this isiXhosa? ☐ yes  ☐ no_
- `mosi o hemetsweng` — _is this isiXhosa? ☐ yes  ☐ no_
- `musi o hemelwago` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndhawu yo kula` — _is this isiXhosa? ☐ yes  ☐ no_
- `nkolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `o chesitse` — _is this isiXhosa? ☐ yes  ☐ no_
- `o fisitswe` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tshiwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tsholetsoe` — _is this isiXhosa? ☐ yes  ☐ no_
- `om nek` — _is this isiXhosa? ☐ yes  ☐ no_
- `rook ingeasem` — _is this isiXhosa? ☐ yes  ☐ no_
- `scald` — _is this isiXhosa? ☐ yes  ☐ no_
- `sebaka se segolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `sebaka se seholo` — _is this isiXhosa? ☐ yes  ☐ no_
- `sefahlego` — _is this isiXhosa? ☐ yes  ☐ no_
- `sefahleho` — _is this isiXhosa? ☐ yes  ☐ no_
- `shango ḽihulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `singed eyebrows` — _is this isiXhosa? ☐ yes  ☐ no_
- `singed hair` — _is this isiXhosa? ☐ yes  ☐ no_
- `tandla nemigalo` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this isiXhosa? ☐ yes  ☐ no_
- `u femba` — _is this isiXhosa? ☐ yes  ☐ no_
- `u hisile` — _is this isiXhosa? ☐ yes  ☐ no_
- `u pfile` — _is this isiXhosa? ☐ yes  ☐ no_
- `umqala` — _is this isiXhosa? ☐ yes  ☐ no_
- `ushisiwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ushiswe` — _is this isiXhosa? ☐ yes  ☐ no_
- `utshile` — _is this isiXhosa? ☐ yes  ☐ no_
- `utshisiwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `vhunga ho funzeleaho` — _is this isiXhosa? ☐ yes  ☐ no_
- `xikandza` — _is this isiXhosa? ☐ yes  ☐ no_
- `zwanda na zwanḓa` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 16. `burns`
*HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `amanzi ashisayo` — _is this isiXhosa? ☐ yes  ☐ no_
- `isikhumba` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 17. `acute_abdomen`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `buhlungu besisu lobukhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't touch stomach` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha ke tshwarelle mpa` — _is this isiXhosa? ☐ yes  ☐ no_
- `iintlungu zesisu ezinkulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `kan nie maag raak nie` — _is this isiXhosa? ☐ yes  ☐ no_
- `khwiri a ri kombetelekiki` — _is this isiXhosa? ☐ yes  ☐ no_
- `lumbu ḽa sa fara` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpa e sa swarega` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpa ga e swarege` — _is this isiXhosa? ☐ yes  ☐ no_
- `rigid stomach` — _is this isiXhosa? ☐ yes  ☐ no_
- `severe stomach pain can't move` — _is this isiXhosa? ☐ yes  ☐ no_
- `stomach hard as a board` — _is this isiXhosa? ☐ yes  ☐ no_
- `worst stomach pain ever` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 18. `psychiatric_emergency_imminent`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `about to hurt myself` — _is this isiXhosa? ☐ yes  ☐ no_
- `gesny aan polse` — _is this isiXhosa? ☐ yes  ☐ no_
- `going to kill myself` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke ikgokile ka thapo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke ipofile ka thapo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke ithekeletse ka thapo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndiyazibulala ngoku` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndizikhokele intambo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndizisikile ezihlakaleni` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndo ḓirwa nga thambo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi tipfalile hi tintambo` — _is this isiXhosa? ☐ yes  ☐ no_
- `overdosed` — _is this isiXhosa? ☐ yes  ☐ no_
- `swallowed pills on purpose` — _is this isiXhosa? ☐ yes  ☐ no_
- `taking tablets now` — _is this isiXhosa? ☐ yes  ☐ no_
- `te veel pille gedrink` — _is this isiXhosa? ☐ yes  ☐ no_
- `took pills to die` — _is this isiXhosa? ☐ yes  ☐ no_
- `tried to cut wrists` — _is this isiXhosa? ☐ yes  ☐ no_
- `tried to hang` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 19. `severe_hypoglycaemia`
*(nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages. | SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `aggressief` — _is this isiXhosa? ☐ yes  ☐ no_
- `aggressive` — _is this isiXhosa? ☐ yes  ☐ no_
- `akaphenduli` — _is this isiXhosa? ☐ yes  ☐ no_
- `akavuki` — _is this isiXhosa? ☐ yes  ☐ no_
- `bjalwa bja dipilisi bo wele` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood sugar crashed` — _is this isiXhosa? ☐ yes  ☐ no_
- `collapsed` — _is this isiXhosa? ☐ yes  ☐ no_
- `confused` — _is this isiXhosa? ☐ yes  ☐ no_
- `deurmekaar` — _is this isiXhosa? ☐ yes  ☐ no_
- `fitting` — _is this isiXhosa? ☐ yes  ☐ no_
- `glucose very low` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha a arabe` — _is this isiXhosa? ☐ yes  ☐ no_
- `hypo` — _is this isiXhosa? ☐ yes  ☐ no_
- `iglucose iphansi` — _is this isiXhosa? ☐ yes  ☐ no_
- `not responding` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a ratha` — _is this isiXhosa? ☐ yes  ☐ no_
- `o wa` — _is this isiXhosa? ☐ yes  ☐ no_
- `o wele` — _is this isiXhosa? ☐ yes  ☐ no_
- `sugar dropped` — _is this isiXhosa? ☐ yes  ☐ no_
- `sugar very low` — _is this isiXhosa? ☐ yes  ☐ no_
- `suiker het geval` — _is this isiXhosa? ☐ yes  ☐ no_
- `swigiri tsho wela` — _is this isiXhosa? ☐ yes  ☐ no_
- `swikiri swi wile` — _is this isiXhosa? ☐ yes  ☐ no_
- `tsoekere e wele` — _is this isiXhosa? ☐ yes  ☐ no_
- `u wile` — _is this isiXhosa? ☐ yes  ☐ no_
- `unconscious` — _is this isiXhosa? ☐ yes  ☐ no_
- `uquleke` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyabanjwa` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 20. `preterm_labour`
*SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `28 weeks` — _is this isiXhosa? ☐ yes  ☐ no_
- `30 weeks` — _is this isiXhosa? ☐ yes  ☐ no_
- `32 weeks` — _is this isiXhosa? ☐ yes  ☐ no_
- `34 weeks` — _is this isiXhosa? ☐ yes  ☐ no_
- `5 months` — _is this isiXhosa? ☐ yes  ☐ no_
- `6 months` — _is this isiXhosa? ☐ yes  ☐ no_
- `7 months` — _is this isiXhosa? ☐ yes  ☐ no_
- `bag of water broke` — _is this isiXhosa? ☐ yes  ☐ no_
- `boimana` — _is this isiXhosa? ☐ yes  ☐ no_
- `contractions` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this isiXhosa? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this isiXhosa? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this isiXhosa? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this isiXhosa? ☐ yes  ☐ no_
- `ditlhabi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ditlhabi tsa go belega` — _is this isiXhosa? ☐ yes  ☐ no_
- `early` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this isiXhosa? ☐ yes  ☐ no_
- `go belega` — _is this isiXhosa? ☐ yes  ☐ no_
- `labour` — _is this isiXhosa? ☐ yes  ☐ no_
- `maande` — _is this isiXhosa? ☐ yes  ☐ no_
- `metsi a popelo` — _is this isiXhosa? ☐ yes  ☐ no_
- `metsi a popelo a phatlogile` — _is this isiXhosa? ☐ yes  ☐ no_
- `not due yet` — _is this isiXhosa? ☐ yes  ☐ no_
- `o imile` — _is this isiXhosa? ☐ yes  ☐ no_
- `pains` — _is this isiXhosa? ☐ yes  ☐ no_
- `pele ga nako` — _is this isiXhosa? ☐ yes  ☐ no_
- `phatlogile` — _is this isiXhosa? ☐ yes  ☐ no_
- `pregnant` — _is this isiXhosa? ☐ yes  ☐ no_
- `premature` — _is this isiXhosa? ☐ yes  ☐ no_
- `swangari` — _is this isiXhosa? ☐ yes  ☐ no_
- `too early` — _is this isiXhosa? ☐ yes  ☐ no_
- `waters broke` — _is this isiXhosa? ☐ yes  ☐ no_
- `weke` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 21. `hiv_meningism`
*hiv_meningism*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `ache` — _is this isiXhosa? ☐ yes  ☐ no_
- `arv` — _is this isiXhosa? ☐ yes  ☐ no_
- `asma` — _is this isiXhosa? ☐ yes  ☐ no_
- `asthma` — _is this isiXhosa? ☐ yes  ☐ no_
- `asthma_inhaler_failure` — _is this isiXhosa? ☐ yes  ☐ no_
- `ayisizi` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't bend` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't move` — _is this isiXhosa? ☐ yes  ☐ no_
- `cannot bend` — _is this isiXhosa? ☐ yes  ☐ no_
- `cant bend` — _is this isiXhosa? ☐ yes  ☐ no_
- `cant move` — _is this isiXhosa? ☐ yes  ☐ no_
- `eqinileyo` — _is this isiXhosa? ☐ yes  ☐ no_
- `fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `fisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e dire` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e thuse` — _is this isiXhosa? ☐ yes  ☐ no_
- `go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `high temperature` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv disease` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv positive` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv+` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho fisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `hot` — _is this isiXhosa? ☐ yes  ☐ no_
- `hurts` — _is this isiXhosa? ☐ yes  ☐ no_
- `ibuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `icinile` — _is this isiXhosa? ☐ yes  ☐ no_
- `inhaler` — _is this isiXhosa? ☐ yes  ☐ no_
- `intamo` — _is this isiXhosa? ☐ yes  ☐ no_
- `intsamo` — _is this isiXhosa? ☐ yes  ☐ no_
- `isifo sofuba` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this isiXhosa? ☐ yes  ☐ no_
- `molala` — _is this isiXhosa? ☐ yes  ☐ no_
- `mulala` — _is this isiXhosa? ☐ yes  ☐ no_
- `neck` — _is this isiXhosa? ☐ yes  ☐ no_
- `need more puffs` — _is this isiXhosa? ☐ yes  ☐ no_
- `nek` — _is this isiXhosa? ☐ yes  ☐ no_
- `nkulo` — _is this isiXhosa? ☐ yes  ☐ no_
- `not helping` — _is this isiXhosa? ☐ yes  ☐ no_
- `not working` — _is this isiXhosa? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `omela` — _is this isiXhosa? ☐ yes  ☐ no_
- `on arvs` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `pompo` — _is this isiXhosa? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `pump` — _is this isiXhosa? ☐ yes  ☐ no_
- `qinile` — _is this isiXhosa? ☐ yes  ☐ no_
- `rigid` — _is this isiXhosa? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `shivering` — _is this isiXhosa? ☐ yes  ☐ no_
- `sore` — _is this isiXhosa? ☐ yes  ☐ no_
- `stiff` — _is this isiXhosa? ☐ yes  ☐ no_
- `still struggling` — _is this isiXhosa? ☐ yes  ☐ no_
- `styf` — _is this isiXhosa? ☐ yes  ☐ no_
- `stywe` — _is this isiXhosa? ☐ yes  ☐ no_
- `taking arvs` — _is this isiXhosa? ☐ yes  ☐ no_
- `temperature` — _is this isiXhosa? ☐ yes  ☐ no_
- `thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `tiyile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ufuba` — _is this isiXhosa? ☐ yes  ☐ no_
- `ufudumele` — _is this isiXhosa? ☐ yes  ☐ no_
- `umkhuhlane` — _is this isiXhosa? ☐ yes  ☐ no_
- `umnqala` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyashisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `vava` — _is this isiXhosa? ☐ yes  ☐ no_
- `vuvha` — _is this isiXhosa? ☐ yes  ☐ no_
- `womelele` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 22. `acute_confusion_dm`
*Afrikaans-only inline check to cover Zulu via DCSL arrays | (review batch 2026-04-29). Closes a coverage gap for the | largest SA language group on a clinically-important rule | (DKA/severe hypoglycaemia presents with confusion).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `deurmekaar` — _is this isiXhosa? ☐ yes  ☐ no_
- `diabete` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga go tlhaloganyege` — _is this isiXhosa? ☐ yes  ☐ no_
- `isifo seswekile` — _is this isiXhosa? ☐ yes  ☐ no_
- `maak nie sin` — _is this isiXhosa? ☐ yes  ☐ no_
- `suiker` — _is this isiXhosa? ☐ yes  ☐ no_
- `sukiri` — _is this isiXhosa? ☐ yes  ☐ no_
- `tlhakatlhakane` — _is this isiXhosa? ☐ yes  ☐ no_
- `tswakane` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### YELLOW discriminators

#### YELLOW 1. `severe_pain`
*── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `iintlungu ezimbi kakhulu`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `bohloko bo bogolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko bo boholo` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko bo montsi thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bo masisi (10/10` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata go feta tsotlhe` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bo sa itshokelweng` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jo bogolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko ke 10` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko ke 8` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko ke 9` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't stand the pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `excruciating` — _is this isiXhosa? ☐ yes  ☐ no_
- `go goa ka ntlha ya botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke a lela ka botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke a lla ka bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndi na vuvha vuhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi le vuhlungwini lebyi kuleke` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain 10/10` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain 8/10` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain 9/10` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain is 10` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain is 8` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain is 9` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain too much` — _is this isiXhosa? ☐ yes  ☐ no_
- `screaming in pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `seer baie` — _is this isiXhosa? ☐ yes  ☐ no_
- `severe pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `unbearable pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `vuhlungu lebyi kuleke` — _is this isiXhosa? ☐ yes  ☐ no_
- `vuvha vuhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `worst pain` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 2. `suicidal_ideation`
*nr | ── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `a ndzi sa lavi ku hanya` — _is this isiXhosa? ☐ yes  ☐ no_
- `a thi tsha ṱoḓa u tshila` — _is this isiXhosa? ☐ yes  ☐ no_
- `andisafuni kuphila` — _is this isiXhosa? ☐ yes  ☐ no_
- `cutting myself` — _is this isiXhosa? ☐ yes  ☐ no_
- `don't want to live` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga ke sa batle go tshela` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga ke sa nyake go phela` — _is this isiXhosa? ☐ yes  ☐ no_
- `go akanya ka go fedisa botshelo` — _is this isiXhosa? ☐ yes  ☐ no_
- `go intsha kotsi ka boomo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ha ke sa batle ho phela` — _is this isiXhosa? ☐ yes  ☐ no_
- `hurting myself` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke batla go ipolaya` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke batla ho ipolaya` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke nyaka go ipolaya` — _is this isiXhosa? ☐ yes  ☐ no_
- `na le megopolo ya go ipolaya` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndi ṱoḓa u ḓivhulaha` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi lava ku tirhisa` — _is this isiXhosa? ☐ yes  ☐ no_
- `no reason to live` — _is this isiXhosa? ☐ yes  ☐ no_
- `self-harm` — _is this isiXhosa? ☐ yes  ☐ no_
- `suicidal` — _is this isiXhosa? ☐ yes  ☐ no_
- `suicide` — _is this isiXhosa? ☐ yes  ☐ no_
- `thinking of ending` — _is this isiXhosa? ☐ yes  ☐ no_
- `want to kill myself` — _is this isiXhosa? ☐ yes  ☐ no_
- `wil doodgaan` — _is this isiXhosa? ☐ yes  ☐ no_
- `wil nie meer leef` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 3. `abuse_assault`
*nr | GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `ndibethiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `abused` — _is this isiXhosa? ☐ yes  ☐ no_
- `assaulted` — _is this isiXhosa? ☐ yes  ☐ no_
- `attacked` — _is this isiXhosa? ☐ yes  ☐ no_
- `beaten badly` — _is this isiXhosa? ☐ yes  ☐ no_
- `child abuse` — _is this isiXhosa? ☐ yes  ☐ no_
- `domestic violence` — _is this isiXhosa? ☐ yes  ☐ no_
- `go itewa thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `go sotliwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhaselwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tshwarwa makgwakgwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `huishoudelike geweld` — _is this isiXhosa? ☐ yes  ☐ no_
- `husband beat me` — _is this isiXhosa? ☐ yes  ☐ no_
- `indoda yam indibethile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke betilwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke otlilwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke otloilwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `monna wa ka o ntlhabile` — _is this isiXhosa? ☐ yes  ☐ no_
- `monna wa ka o ntshabile` — _is this isiXhosa? ☐ yes  ☐ no_
- `monna wa me o ntlhabile` — _is this isiXhosa? ☐ yes  ☐ no_
- `munna wanga o nrwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndo rwiwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi bitiwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `nuna wa mina u ndzi bile` — _is this isiXhosa? ☐ yes  ☐ no_
- `o nteetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `partner hit me` — _is this isiXhosa? ☐ yes  ☐ no_
- `tirisodikgoka` — _is this isiXhosa? ☐ yes  ☐ no_
- `tirisodikgoka mo lelapeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshotlego ya bana` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 4. `pyelonephritis`
*GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `back pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko emhamben` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko mmogong` — _is this isiXhosa? ☐ yes  ☐ no_
- `bohloko mokokotlong` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa diphio` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa mokwatla` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko mo lethekeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `burning urine` — _is this isiXhosa? ☐ yes  ☐ no_
- `chills` — _is this isiXhosa? ☐ yes  ☐ no_
- `diphio` — _is this isiXhosa? ☐ yes  ☐ no_
- `fa o rota` — _is this isiXhosa? ☐ yes  ☐ no_
- `feberu` — _is this isiXhosa? ☐ yes  ☐ no_
- `fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `frequency` — _is this isiXhosa? ☐ yes  ☐ no_
- `go rota kgapetsakgapetsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `go sha fa ke ntsha metsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `go sha ge ke ntsha meetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `go swela ge ke ntsha meetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `go thothomela` — _is this isiXhosa? ☐ yes  ☐ no_
- `go thothomela ka ntlha ya feberu` — _is this isiXhosa? ☐ yes  ☐ no_
- `go thothomela thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhatsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tshwara go bohloko loko ke ntsha meetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tsidifala` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho bohloko ha ke ntsha metsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho sha ha ke ntsha metsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kidney pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku bohloko loko ndzi sila` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku hisa loko ndzi sila manzi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kusha emchamweni` — _is this isiXhosa? ☐ yes  ☐ no_
- `kushisa emchamweni` — _is this isiXhosa? ☐ yes  ☐ no_
- `kushisa umchamo` — _is this isiXhosa? ☐ yes  ☐ no_
- `letheka` — _is this isiXhosa? ☐ yes  ☐ no_
- `loin pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `mahlakore a mokwatla` — _is this isiXhosa? ☐ yes  ☐ no_
- `mela ya moroto` — _is this isiXhosa? ☐ yes  ☐ no_
- `mhamba wo bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `mmogo o bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `mokokotlo o bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `mokwatla` — _is this isiXhosa? ☐ yes  ☐ no_
- `moroto` — _is this isiXhosa? ☐ yes  ☐ no_
- `moroto o o tukang` — _is this isiXhosa? ☐ yes  ☐ no_
- `murahu u rema` — _is this isiXhosa? ☐ yes  ☐ no_
- `muvhili wa murahu u rema` — _is this isiXhosa? ☐ yes  ☐ no_
- `o o botlhoko fa o rota` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tukang` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain when urinating` — _is this isiXhosa? ☐ yes  ☐ no_
- `pyn as ek urineer` — _is this isiXhosa? ☐ yes  ☐ no_
- `rigors` — _is this isiXhosa? ☐ yes  ☐ no_
- `rug is seer` — _is this isiXhosa? ☐ yes  ☐ no_
- `rugpyn` — _is this isiXhosa? ☐ yes  ☐ no_
- `shivering` — _is this isiXhosa? ☐ yes  ☐ no_
- `temperature` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshwaetso ya mela ya moroto` — _is this isiXhosa? ☐ yes  ☐ no_
- `u fhisa hune ndi a china` — _is this isiXhosa? ☐ yes  ☐ no_
- `u rema hune ndi a china` — _is this isiXhosa? ☐ yes  ☐ no_
- `urinary tract` — _is this isiXhosa? ☐ yes  ☐ no_
- `uti` — _is this isiXhosa? ☐ yes  ☐ no_
- `vomiting` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 5. `dka`
*GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `abdominal pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood sugar very high` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa mala` — _is this isiXhosa? ☐ yes  ☐ no_
- `braak` — _is this isiXhosa? ☐ yes  ☐ no_
- `breath smells sweet` — _is this isiXhosa? ☐ yes  ☐ no_
- `diabeet` — _is this isiXhosa? ☐ yes  ☐ no_
- `diabetes` — _is this isiXhosa? ☐ yes  ☐ no_
- `diabetic` — _is this isiXhosa? ☐ yes  ☐ no_
- `fruity breath` — _is this isiXhosa? ☐ yes  ☐ no_
- `glucose` — _is this isiXhosa? ☐ yes  ☐ no_
- `glucose 20` — _is this isiXhosa? ☐ yes  ☐ no_
- `glucose e feta 15` — _is this isiXhosa? ☐ yes  ☐ no_
- `glucose e feta 20` — _is this isiXhosa? ☐ yes  ☐ no_
- `glucose over 15` — _is this isiXhosa? ☐ yes  ☐ no_
- `glucose over 20` — _is this isiXhosa? ☐ yes  ☐ no_
- `go hlanza` — _is this isiXhosa? ☐ yes  ☐ no_
- `go ikutlwa o batla go tlhatsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `go nyorilwe ke pelo` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhaka` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhatsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `gooi op` — _is this isiXhosa? ☐ yes  ☐ no_
- `ho hlantsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `insulin` — _is this isiXhosa? ☐ yes  ☐ no_
- `ishugela` — _is this isiXhosa? ☐ yes  ☐ no_
- `ishugela liphakeme kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `ishukela` — _is this isiXhosa? ☐ yes  ☐ no_
- `ishukela liphezulu kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `isisu sibuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke a hlantsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke a hlanza` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke a tlhaka` — _is this isiXhosa? ☐ yes  ☐ no_
- `ketone breath` — _is this isiXhosa? ☐ yes  ☐ no_
- `ku hlanza` — _is this isiXhosa? ☐ yes  ☐ no_
- `kuhlanza` — _is this isiXhosa? ☐ yes  ☐ no_
- `maag pyn` — _is this isiXhosa? ☐ yes  ☐ no_
- `mowa o o nang le diketone` — _is this isiXhosa? ☐ yes  ☐ no_
- `mowa o o nkgang jaaka maungo` — _is this isiXhosa? ☐ yes  ☐ no_
- `mowa o o tswang mo molomong o nkgang monate` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpa e bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpa e botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `nauseous` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndi a sema` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndinesifo seswekile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndiyahlanza` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzayo wu vava` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndzi a hlanza` — _is this isiXhosa? ☐ yes  ☐ no_
- `o dirisa insulin` — _is this isiXhosa? ☐ yes  ☐ no_
- `on insulin` — _is this isiXhosa? ☐ yes  ☐ no_
- `sisu sibuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `stomach pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `sugar` — _is this isiXhosa? ☐ yes  ☐ no_
- `sugar very high` — _is this isiXhosa? ☐ yes  ☐ no_
- `suiker` — _is this isiXhosa? ☐ yes  ☐ no_
- `suiker baie hoog` — _is this isiXhosa? ☐ yes  ☐ no_
- `suikersiekte` — _is this isiXhosa? ☐ yes  ☐ no_
- `sukiri` — _is this isiXhosa? ☐ yes  ☐ no_
- `sukiri e kwa godimo thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `sukiri mo mading e kwa godimo thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `swigiri` — _is this isiXhosa? ☐ yes  ☐ no_
- `swigiri dzi ḓiimisela ngopfu` — _is this isiXhosa? ☐ yes  ☐ no_
- `swikiri` — _is this isiXhosa? ☐ yes  ☐ no_
- `swikiri e phagameng kudu` — _is this isiXhosa? ☐ yes  ☐ no_
- `swikiri yi tlakukile ngopfu` — _is this isiXhosa? ☐ yes  ☐ no_
- `thumbu i na vuvha` — _is this isiXhosa? ☐ yes  ☐ no_
- `tsoekere` — _is this isiXhosa? ☐ yes  ☐ no_
- `tsoekere e phagameng haholo` — _is this isiXhosa? ☐ yes  ☐ no_
- `tswekere` — _is this isiXhosa? ☐ yes  ☐ no_
- `tswekere e kwa godimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `u sema` — _is this isiXhosa? ☐ yes  ☐ no_
- `vomiting` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 6. `tb_triad`
*tb_triad*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `bosigo` — _is this isiXhosa? ☐ yes  ☐ no_
- `cough` — _is this isiXhosa? ☐ yes  ☐ no_
- `fufulelwa bosigo` — _is this isiXhosa? ☐ yes  ☐ no_
- `gewig verloor` — _is this isiXhosa? ☐ yes  ☐ no_
- `go fufulelwa bosigo` — _is this isiXhosa? ☐ yes  ☐ no_
- `go khohlela` — _is this isiXhosa? ☐ yes  ☐ no_
- `go latlhegelwa ke boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `gohlola` — _is this isiXhosa? ☐ yes  ☐ no_
- `hehela` — _is this isiXhosa? ☐ yes  ☐ no_
- `hoes` — _is this isiXhosa? ☐ yes  ☐ no_
- `hovelela` — _is this isiXhosa? ☐ yes  ☐ no_
- `khalutshela` — _is this isiXhosa? ☐ yes  ☐ no_
- `khohlela` — _is this isiXhosa? ☐ yes  ☐ no_
- `khomokile ncilo` — _is this isiXhosa? ☐ yes  ☐ no_
- `khwehlela` — _is this isiXhosa? ☐ yes  ☐ no_
- `laha vhuimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `lahlegetšwe ke boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `lahlehetse boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `lahlekelwe isisindo` — _is this isiXhosa? ☐ yes  ☐ no_
- `lahlekelwe sisixa` — _is this isiXhosa? ☐ yes  ☐ no_
- `latlhile boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `losing weight` — _is this isiXhosa? ☐ yes  ☐ no_
- `lost weight` — _is this isiXhosa? ☐ yes  ☐ no_
- `mavhungo usiku` — _is this isiXhosa? ☐ yes  ☐ no_
- `nagsweet` — _is this isiXhosa? ☐ yes  ☐ no_
- `nciphile isisindo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ncokolele lisindo` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndikhohla` — _is this isiXhosa? ☐ yes  ☐ no_
- `ndikhwehlela` — _is this isiXhosa? ☐ yes  ☐ no_
- `night sweats` — _is this isiXhosa? ☐ yes  ☐ no_
- `o latlhegetswe ke boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `phulukane nesixa` — _is this isiXhosa? ☐ yes  ☐ no_
- `phwa bosigo` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweat at night` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweating at night` — _is this isiXhosa? ☐ yes  ☐ no_
- `sweet snags` — _is this isiXhosa? ☐ yes  ☐ no_
- `tatlhegelo ya boima` — _is this isiXhosa? ☐ yes  ☐ no_
- `tswa marothodi bosigo` — _is this isiXhosa? ☐ yes  ☐ no_
- `tswa molapo bosiu` — _is this isiXhosa? ☐ yes  ☐ no_
- `weight loss` — _is this isiXhosa? ☐ yes  ☐ no_
- `xurha usiku` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 7. `possible_fracture`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `can't bear weight` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't move it` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't walk` — _is this isiXhosa? ☐ yes  ☐ no_
- `crooked` — _is this isiXhosa? ☐ yes  ☐ no_
- `deformed` — _is this isiXhosa? ☐ yes  ☐ no_
- `fell` — _is this isiXhosa? ☐ yes  ☐ no_
- `fell down` — _is this isiXhosa? ☐ yes  ☐ no_
- `injury` — _is this isiXhosa? ☐ yes  ☐ no_
- `kotsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kotsi e kgolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `kugobekile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ligwegwile` — _is this isiXhosa? ☐ yes  ☐ no_
- `looks bent` — _is this isiXhosa? ☐ yes  ☐ no_
- `o wele` — _is this isiXhosa? ☐ yes  ☐ no_
- `o wele fatshe` — _is this isiXhosa? ☐ yes  ☐ no_
- `se botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `se kobegile` — _is this isiXhosa? ☐ yes  ☐ no_
- `se lebega se kobegile` — _is this isiXhosa? ☐ yes  ☐ no_
- `se nang le sebopego se se sa tlwaelegang` — _is this isiXhosa? ☐ yes  ☐ no_
- `se rurugile` — _is this isiXhosa? ☐ yes  ☐ no_
- `se rurugile mme se botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `se sa tlhamalala` — _is this isiXhosa? ☐ yes  ☐ no_
- `se sothegile` — _is this isiXhosa? ☐ yes  ☐ no_
- `skewe` — _is this isiXhosa? ☐ yes  ☐ no_
- `swollen and painful` — _is this isiXhosa? ☐ yes  ☐ no_
- `trauma` — _is this isiXhosa? ☐ yes  ☐ no_
- `twisted` — _is this isiXhosa? ☐ yes  ☐ no_
- `ukwethuka kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `uphazamisekile` — _is this isiXhosa? ☐ yes  ☐ no_
- `uphukile` — _is this isiXhosa? ☐ yes  ☐ no_
- `uvuvukile` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 8. `hypertensive_urgency`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- `intloko`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `blood pressure high` — _is this isiXhosa? ☐ yes  ☐ no_
- `blurred vision` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `bp` — _is this isiXhosa? ☐ yes  ☐ no_
- `bp e kwa godimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `bp high` — _is this isiXhosa? ☐ yes  ☐ no_
- `confused` — _is this isiXhosa? ☐ yes  ☐ no_
- `dizzy` — _is this isiXhosa? ☐ yes  ☐ no_
- `duiselig` — _is this isiXhosa? ☐ yes  ☐ no_
- `fifetseng` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a tlhaloganye` — _is this isiXhosa? ☐ yes  ☐ no_
- `go dutla madi mo nko` — _is this isiXhosa? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `headache` — _is this isiXhosa? ☐ yes  ☐ no_
- `high blood` — _is this isiXhosa? ☐ yes  ☐ no_
- `hlogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `hloho` — _is this isiXhosa? ☐ yes  ☐ no_
- `hypertension` — _is this isiXhosa? ☐ yes  ☐ no_
- `isiyezi` — _is this isiXhosa? ☐ yes  ☐ no_
- `iyesuka` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatelelo ya madi e e kwa godimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatelelo ya madi e godimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatelelo ya madi e kwa godimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgatello ya madi e phahameng` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a kgatelelo a kwa godimo` — _is this isiXhosa? ☐ yes  ☐ no_
- `nko` — _is this isiXhosa? ☐ yes  ☐ no_
- `nosebleed` — _is this isiXhosa? ☐ yes  ☐ no_
- `nsinya wa ngati wu tlakukile` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a tekateka` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this isiXhosa? ☐ yes  ☐ no_
- `phuvhelo ya madi i phanda` — _is this isiXhosa? ☐ yes  ☐ no_
- `pono` — _is this isiXhosa? ☐ yes  ☐ no_
- `pono e e fifetseng` — _is this isiXhosa? ☐ yes  ☐ no_
- `pono e sa bonalang sentle` — _is this isiXhosa? ☐ yes  ☐ no_
- `tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `u a tekateka` — _is this isiXhosa? ☐ yes  ☐ no_
- `u a ṱavhanya` — _is this isiXhosa? ☐ yes  ☐ no_
- `umfutho wegazi uphakeme` — _is this isiXhosa? ☐ yes  ☐ no_
- `umfutho wegazi uphezulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `uxinzelelo lwegazi luphezulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyesuka` — _is this isiXhosa? ☐ yes  ☐ no_
- `ṱhoho` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 9. `hypertensive_urgency_reading`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `botlhoko jwa tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `bp 170` — _is this isiXhosa? ☐ yes  ☐ no_
- `bp 180` — _is this isiXhosa? ☐ yes  ☐ no_
- `bp 190` — _is this isiXhosa? ☐ yes  ☐ no_
- `bp 200` — _is this isiXhosa? ☐ yes  ☐ no_
- `dizzy` — _is this isiXhosa? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `headache` — _is this isiXhosa? ☐ yes  ☐ no_
- `kop pyn` — _is this isiXhosa? ☐ yes  ☐ no_
- `pono` — _is this isiXhosa? ☐ yes  ☐ no_
- `umfutho wegazi` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyadidizela` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyadiyazela` — _is this isiXhosa? ☐ yes  ☐ no_
- `vision` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 10. `appendicitis_pattern`
*appendicitis_pattern*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `appendix` — _is this isiXhosa? ☐ yes  ☐ no_
- `appendix pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `bo nna maswe fa o iketla` — _is this isiXhosa? ☐ yes  ☐ no_
- `bo nna maswe fa o tsamaya` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa appendix` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't straighten up` — _is this isiXhosa? ☐ yes  ☐ no_
- `fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhatsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ka fa mojeng wa mala` — _is this isiXhosa? ☐ yes  ☐ no_
- `ka fa mojeng wa mpa` — _is this isiXhosa? ☐ yes  ☐ no_
- `karolo e e kwa tlase ka fa mojeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `lower right pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `maagpyn` — _is this isiXhosa? ☐ yes  ☐ no_
- `mala` — _is this isiXhosa? ☐ yes  ☐ no_
- `mo tlase ka fa mojeng` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpa` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain right side stomach` — _is this isiXhosa? ☐ yes  ☐ no_
- `right abdo pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `right lower quadrant` — _is this isiXhosa? ☐ yes  ☐ no_
- `vomiting` — _is this isiXhosa? ☐ yes  ☐ no_
- `worse when moving` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 11. `asthma_inhaler_failure`
*asthma_inhaler_failure*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `asma` — _is this isiXhosa? ☐ yes  ☐ no_
- `asthma` — _is this isiXhosa? ☐ yes  ☐ no_
- `ayisizi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e dire` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e thuse` — _is this isiXhosa? ☐ yes  ☐ no_
- `go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `inhaler` — _is this isiXhosa? ☐ yes  ☐ no_
- `isifo sofuba` — _is this isiXhosa? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this isiXhosa? ☐ yes  ☐ no_
- `need more puffs` — _is this isiXhosa? ☐ yes  ☐ no_
- `not helping` — _is this isiXhosa? ☐ yes  ☐ no_
- `not working` — _is this isiXhosa? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `pompo` — _is this isiXhosa? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `pump` — _is this isiXhosa? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this isiXhosa? ☐ yes  ☐ no_
- `still struggling` — _is this isiXhosa? ☐ yes  ☐ no_
- `ufuba` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 12. `meningism`
*same-day review is the safety-correct default.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `botlhoko jwa molala` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't bend neck` — _is this isiXhosa? ☐ yes  ☐ no_
- `feberu` — _is this isiXhosa? ☐ yes  ☐ no_
- `fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `intamo eqinileyo` — _is this isiXhosa? ☐ yes  ☐ no_
- `intamo ibuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `intamo iqinile` — _is this isiXhosa? ☐ yes  ☐ no_
- `intsamo ibuhlungu` — _is this isiXhosa? ☐ yes  ☐ no_
- `intsamo icinile` — _is this isiXhosa? ☐ yes  ☐ no_
- `molala` — _is this isiXhosa? ☐ yes  ☐ no_
- `molala o bohloko` — _is this isiXhosa? ☐ yes  ☐ no_
- `molala o botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `molala o o thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `molala o thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `mulala u na vuvha` — _is this isiXhosa? ☐ yes  ☐ no_
- `mulala wo omela` — _is this isiXhosa? ☐ yes  ☐ no_
- `neck is stiff` — _is this isiXhosa? ☐ yes  ☐ no_
- `neck pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `neck stiff` — _is this isiXhosa? ☐ yes  ☐ no_
- `nek is styf` — _is this isiXhosa? ☐ yes  ☐ no_
- `nkulo wu tiyile` — _is this isiXhosa? ☐ yes  ☐ no_
- `nkulo wu vava` — _is this isiXhosa? ☐ yes  ☐ no_
- `o thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `stiff neck` — _is this isiXhosa? ☐ yes  ☐ no_
- `stywe nek` — _is this isiXhosa? ☐ yes  ☐ no_
- `thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `umkhuhlane` — _is this isiXhosa? ☐ yes  ☐ no_
- `umnqala womelele` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 13. `hiv_fever`
*HIV + fever: risk-UPGRADE signal. Enforce YELLOW as a floor, preserve any | higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `arv` — _is this isiXhosa? ☐ yes  ☐ no_
- `di-arv` — _is this isiXhosa? ☐ yes  ☐ no_
- `fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `high temperature` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv positive` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv+` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv_fever` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingculaza` — _is this isiXhosa? ☐ yes  ☐ no_
- `o a lwala` — _is this isiXhosa? ☐ yes  ☐ no_
- `o dirisa di-arv` — _is this isiXhosa? ☐ yes  ☐ no_
- `o na le bolwetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `o na le hiv` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tsaya di-arv` — _is this isiXhosa? ☐ yes  ☐ no_
- `on arvs` — _is this isiXhosa? ☐ yes  ☐ no_
- `positive` — _is this isiXhosa? ☐ yes  ☐ no_
- `shisa kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `sick` — _is this isiXhosa? ☐ yes  ☐ no_
- `taking arvs` — _is this isiXhosa? ☐ yes  ☐ no_
- `temperature` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 14. `lower_abdo_missed_period`
*higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `botlase jwa mpa` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko mo pelviking` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mala` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mpa` — _is this isiXhosa? ☐ yes  ☐ no_
- `diegile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga go na kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `go diega ga nako ya go tla ga kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `go se tle ga kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgwedi e diegile` — _is this isiXhosa? ☐ yes  ☐ no_
- `late period` — _is this isiXhosa? ☐ yes  ☐ no_
- `lower abdominal pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `lower belly pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `lower tummy pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `maagpyn` — _is this isiXhosa? ☐ yes  ☐ no_
- `mala` — _is this isiXhosa? ☐ yes  ☐ no_
- `missed period` — _is this isiXhosa? ☐ yes  ☐ no_
- `mpa` — _is this isiXhosa? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this isiXhosa? ☐ yes  ☐ no_
- `no period` — _is this isiXhosa? ☐ yes  ☐ no_
- `pelvic pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `pelviki` — _is this isiXhosa? ☐ yes  ☐ no_
- `period late` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 15. `pregnancy_complication`
*pregnancy_complication*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `baby hasn't moved` — _is this isiXhosa? ☐ yes  ☐ no_
- `bleeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `boimana` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this isiXhosa? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this isiXhosa? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this isiXhosa? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this isiXhosa? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this isiXhosa? ☐ yes  ☐ no_
- `headache` — _is this isiXhosa? ☐ yes  ☐ no_
- `motsamao o fokotsehile` — _is this isiXhosa? ☐ yes  ☐ no_
- `movement reduced` — _is this isiXhosa? ☐ yes  ☐ no_
- `no movement` — _is this isiXhosa? ☐ yes  ☐ no_
- `o imile` — _is this isiXhosa? ☐ yes  ☐ no_
- `pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `pele ga nako` — _is this isiXhosa? ☐ yes  ☐ no_
- `pregnant` — _is this isiXhosa? ☐ yes  ☐ no_
- `swangari` — _is this isiXhosa? ☐ yes  ☐ no_
- `swelling` — _is this isiXhosa? ☐ yes  ☐ no_
- `vision` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 16. `gi_bleeding`
*gi_bleeding*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `black tarry stool` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood in poo` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood in stool` — _is this isiXhosa? ☐ yes  ☐ no_
- `blood in vomit` — _is this isiXhosa? ☐ yes  ☐ no_
- `bloody diarrhoea` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingati esitweni` — _is this isiXhosa? ☐ yes  ☐ no_
- `ingati iyaphumela ngemlomeni` — _is this isiXhosa? ☐ yes  ☐ no_
- `letshololo le le nang le madi` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a tswa ka ganong` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi a tšwa ka ganong` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi leetšong` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi mantšwing` — _is this isiXhosa? ☐ yes  ☐ no_
- `madi mo mantswing` — _is this isiXhosa? ☐ yes  ☐ no_
- `mantlwana a mantsho a a tshwanang le sekgoa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngati enyangweni` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngati yi huma hi nomo` — _is this isiXhosa? ☐ yes  ☐ no_
- `rectal bleeding` — _is this isiXhosa? ☐ yes  ☐ no_
- `throwing up blood` — _is this isiXhosa? ☐ yes  ☐ no_
- `vomiting blood` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 17. `deep_wound`
*deep_wound*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `animal bite` — _is this isiXhosa? ☐ yes  ☐ no_
- `bite wound` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't stop` — _is this isiXhosa? ☐ yes  ☐ no_
- `deep cut` — _is this isiXhosa? ☐ yes  ☐ no_
- `deep wound` — _is this isiXhosa? ☐ yes  ☐ no_
- `dierbyt` — _is this isiXhosa? ☐ yes  ☐ no_
- `galase` — _is this isiXhosa? ☐ yes  ☐ no_
- `galase mo nthong` — _is this isiXhosa? ☐ yes  ☐ no_
- `glass in wound` — _is this isiXhosa? ☐ yes  ☐ no_
- `go elela` — _is this isiXhosa? ☐ yes  ☐ no_
- `go elela ka bontsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `go elela ka maatla` — _is this isiXhosa? ☐ yes  ☐ no_
- `go longwa ke phologolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `inxeba` — _is this isiXhosa? ☐ yes  ☐ no_
- `ka bontsi` — _is this isiXhosa? ☐ yes  ☐ no_
- `ka maatla` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgagogo` — _is this isiXhosa? ☐ yes  ☐ no_
- `kgagogo e e tseneletseng` — _is this isiXhosa? ☐ yes  ☐ no_
- `lenala` — _is this isiXhosa? ☐ yes  ☐ no_
- `lenala le le rusetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `ntho` — _is this isiXhosa? ☐ yes  ☐ no_
- `ntho e e tseneletseng` — _is this isiXhosa? ☐ yes  ☐ no_
- `ntho ya go longwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ntho ya go phunyediwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `ntho ya go tlhabiwa` — _is this isiXhosa? ☐ yes  ☐ no_
- `phologolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `pouring` — _is this isiXhosa? ☐ yes  ☐ no_
- `puncture wound` — _is this isiXhosa? ☐ yes  ☐ no_
- `rusty nail` — _is this isiXhosa? ☐ yes  ☐ no_
- `spurting` — _is this isiXhosa? ☐ yes  ☐ no_
- `stab wound` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 18. `severe_dehydration_vulnerable`
*severe_dehydration_vulnerable*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `akakaze achame isikhathi eside` — _is this isiXhosa? ☐ yes  ☐ no_
- `baby` — _is this isiXhosa? ☐ yes  ☐ no_
- `bagolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't keep fluids down` — _is this isiXhosa? ☐ yes  ☐ no_
- `child` — _is this isiXhosa? ☐ yes  ☐ no_
- `diabetic` — _is this isiXhosa? ☐ yes  ☐ no_
- `diarrhoea and vomiting together` — _is this isiXhosa? ☐ yes  ☐ no_
- `elderly` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a ise a rote` — _is this isiXhosa? ☐ yes  ☐ no_
- `ga a ise a rote diura tsotlhe` — _is this isiXhosa? ☐ yes  ☐ no_
- `go tlhatsa` — _is this isiXhosa? ☐ yes  ☐ no_
- `hiv` — _is this isiXhosa? ☐ yes  ☐ no_
- `infant` — _is this isiXhosa? ☐ yes  ☐ no_
- `letshololo` — _is this isiXhosa? ☐ yes  ☐ no_
- `letshololo le go tlhatsa ka nako e le nngwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `mogolo` — _is this isiXhosa? ☐ yes  ☐ no_
- `molomo o omile thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `mouth very dry` — _is this isiXhosa? ☐ yes  ☐ no_
- `ngwana` — _is this isiXhosa? ☐ yes  ☐ no_
- `no urine for hours` — _is this isiXhosa? ☐ yes  ☐ no_
- `not passed urine` — _is this isiXhosa? ☐ yes  ☐ no_
- `o potologa tlhogo thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `o tlhatsa tsotlhe` — _is this isiXhosa? ☐ yes  ☐ no_
- `okukhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `omile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ukoma kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `umchamo awuphumi` — _is this isiXhosa? ☐ yes  ☐ no_
- `uyahlanza` — _is this isiXhosa? ☐ yes  ☐ no_
- `very dizzy` — _is this isiXhosa? ☐ yes  ☐ no_
- `vomiting everything` — _is this isiXhosa? ☐ yes  ☐ no_
- `wome kakhulu` — _is this isiXhosa? ☐ yes  ☐ no_
- `womile` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 19. `eye_emergency`
*eye_emergency*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `akaboni kahle` — _is this isiXhosa? ☐ yes  ☐ no_
- `blur suddenly` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't see` — _is this isiXhosa? ☐ yes  ☐ no_
- `chemical in eye` — _is this isiXhosa? ☐ yes  ☐ no_
- `eye injury` — _is this isiXhosa? ☐ yes  ☐ no_
- `fifala` — _is this isiXhosa? ☐ yes  ☐ no_
- `foufetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `go na le sengwe mo leitlhong` — _is this isiXhosa? ☐ yes  ☐ no_
- `hit in eye` — _is this isiXhosa? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this isiXhosa? ☐ yes  ☐ no_
- `khemikhale` — _is this isiXhosa? ☐ yes  ☐ no_
- `khemikhale mo leitlhong` — _is this isiXhosa? ☐ yes  ☐ no_
- `kotsi ya leitlho` — _is this isiXhosa? ☐ yes  ☐ no_
- `leitlho` — _is this isiXhosa? ☐ yes  ☐ no_
- `o foufetse` — _is this isiXhosa? ☐ yes  ☐ no_
- `o iteilwe mo leitlhong` — _is this isiXhosa? ☐ yes  ☐ no_
- `oogbesering` — _is this isiXhosa? ☐ yes  ☐ no_
- `pono` — _is this isiXhosa? ☐ yes  ☐ no_
- `pono e fifala ka tshoganyetso` — _is this isiXhosa? ☐ yes  ☐ no_
- `sengwe mo leitlhong` — _is this isiXhosa? ☐ yes  ☐ no_
- `something in eye` — _is this isiXhosa? ☐ yes  ☐ no_
- `sudden` — _is this isiXhosa? ☐ yes  ☐ no_
- `suddenly` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshoganyetso` — _is this isiXhosa? ☐ yes  ☐ no_
- `ungenwe okuthile ehlweni` — _is this isiXhosa? ☐ yes  ☐ no_
- `uxhophekile` — _is this isiXhosa? ☐ yes  ☐ no_
- `uxhoshiwe` — _is this isiXhosa? ☐ yes  ☐ no_
- `vision` — _is this isiXhosa? ☐ yes  ☐ no_
- `went blind` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 20. `testicular_torsion`
*testicular_torsion*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current isiXhosa keywords** (what the rule recognises in isiXhosa):
- **⚠️ NONE — please provide keywords for this symptom in isiXhosa**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in isiXhosa:
- `amasende avuvukile` — _is this isiXhosa? ☐ yes  ☐ no_
- `bo masisi thata` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa ditesticle` — _is this isiXhosa? ☐ yes  ☐ no_
- `botlhoko jwa scrotum` — _is this isiXhosa? ☐ yes  ☐ no_
- `can't walk` — _is this isiXhosa? ☐ yes  ☐ no_
- `ditesticle` — _is this isiXhosa? ☐ yes  ☐ no_
- `e rurugile` — _is this isiXhosa? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this isiXhosa? ☐ yes  ☐ no_
- `masisi` — _is this isiXhosa? ☐ yes  ☐ no_
- `rurugile` — _is this isiXhosa? ☐ yes  ☐ no_
- `scrotum` — _is this isiXhosa? ☐ yes  ☐ no_
- `scrotum pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `severe` — _is this isiXhosa? ☐ yes  ☐ no_
- `sudden` — _is this isiXhosa? ☐ yes  ☐ no_
- `swollen testicle` — _is this isiXhosa? ☐ yes  ☐ no_
- `testicle` — _is this isiXhosa? ☐ yes  ☐ no_
- `testicle pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `testicular pain` — _is this isiXhosa? ☐ yes  ☐ no_
- `tshoganyetso` — _is this isiXhosa? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---


## Reviewer sign-off

**Reviewer name:** ________________________________

**Reviewer qualifications** (native speaker / clinical background / both):

**Date completed:** ________________

**Overall assessment** (tick one):
- ☐ All content is correct and natural. No changes needed.
- ☐ Most content is correct. Specific corrections/additions noted above.
- ☐ Substantial corrections needed. See notes above.

**Signature / confirmation:** ________________________________
