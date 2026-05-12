# BIZUSIZO native-speaker review — siSwati

**Language:** siSwati (code: `ss`)
**Generated:** 2026-05-04 (from live source code)
**Reviewer instructions:** For each entry below, please mark ✅ (correct and natural), ❌ (wrong — suggest fix), or ➕ (add missing phrasing). For any ❌ or ➕, please provide the correct/additional phrasing in the notes column.

**What you are reviewing:** all siSwati content that a patient might read (Part 1 — WhatsApp messages) or that the system scans patient text for (Part 2 — clinical safety keywords).

---

## PART 1 — Patient-facing WhatsApp messages (51 entries)

Each row shows the English source text (for reference) and the current siSwati translation. If siSwati is marked **[MISSING — PLEASE TRANSLATE]**, the translation has not been written yet and we need you to provide it.

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

**siSwati:**
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

**siSwati:**
```
✅ Lulwimi lubekwe ku-*siSwati*.
Bhala "lulwimi" nanoma nini kushintja.
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

**siSwati:**
```
Wemukelekile ku-BIZUSIZO. 🏥

Lesevisi likusita kucondza kusheshiswa kwetimphawu takho futsi likunqophisa lapho ungacinga lusito khona.

Lobubalulekile:
• Lesevisi liniketa teluleko yempilo kuphela.
• Alihlongi timo tetemphilo.
• Alintsintsi indawo yedokotela noma yanesi.

Singakubuza imibuzo mayelana netimphawu takho kukusita kukucondzisa. Tiphendvulo takho tingagcinwa ngokokhuselo kutfutfukisa kuphepha nekusebenta kahle kwalesevisi. Nawutfunyelwa emtfolamphilo noma esibhedlela, lwati lwakho lwempilo lungabelwa nendzawo lekwemukelako kutsi utfole lusito lolufanele. Lwati lwakho luyawuphathwa ngemitsetfo yabucala yaseNingizimu Afrika (POPIA).

Uyavuma kusebentisa lesevisi?

1 — Yebo, ngiyavuma futsi ngifuna kuchubeka
2 — Cha, phuma
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.4 `consent_yes` *(lib/messages.js)*

**English source:**
```
✅ Thank you. Let's get you to the right care.
```

**siSwati:**
```
✅ Siyabonga. Ake sikucondzise ekunakekelweni lokufanele.
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

**siSwati:**
```
Kulungile. Seshini yakho iphelile futsi akukho lwati lolugciniwe.

Nawugucula umcondvo noma udzinga lusito ngesikhatsi lesizako, tfumela "Hi" kucala futsi. Ungavakashela umtfolamphilo losedvute nawe.

Tinakekele. 🙏
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

**siSwati:**
```
Yini inkinga yakho lenkhulu lamuhla?

1. 🫁 Kuphefumula / Kuva buhlungu esifubeni
2. 🤕 Kulimala kwenhloko / Inhloko lebuhlungu
3. 🤰 Lokuphatselene nekukhulelwa
4. 🩸 Kopha / Intsandza
5. 🤒 Imfiva / Umkhuhlane / Kukhwehlela
6. 🤢 Sisu / Kuhlanta
7. 👶 Kugula kwemntfwana
8. 💊 Umutsi / Sifo lesingapheli
9. 🦴 Litsambo / Kuva buhlungu kwemhlane
10. 🧠 Imphilo yengcondvo
11. 🤧 I-aletshe / Kudumba kwesikhunba
12. ✏️ Lokunye — bhala timphawu takho
13. 👤 Khuluma nemuntfu
14. 🩺 Imphilo yebafati (kuhlela umndeni)
15. 🔬 Kuhlolwa kwemphilo (HIV, BP, shukela)
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

**siSwati:**
```
🔴 *LOKUSHESHISAKO*

Shayela *10177* ucele i-ambulensi NYALO.
Yangasese: ER24 *084 124*.

⚠️ *UNGALINDZI i-ambulensi* — hamba uye esibhedlela leseduze masinyane. Cela umuntfu akushayele noma utfatse lithekisi.
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

**siSwati:**
```
🟠 *KUSHESHISA KAKHULU*
Udzinga lusito masinyane.
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

**siSwati:**
```
Ngidzinga lwati lolunye kuhlola timphawu takho ngebuciko.

Ungachaza lokuzwako ngemininingwane?

- Kuphi ngempela buhlungu noma lokungaphili kahle?
- Ubunesimpawu lesi sikhashana lesingakanani?
- Siba sibi, siba ngcono, noma sihlala njalo?
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

**siSwati:**
```
ℹ️ Sihlole timphawu takho, kodvwa kuciniseka kwetfu kuphansi kunalokujwayelekile. Umphumela wakho usaboniswa ngenhla.

Njengesivikelo:
- Nangabe timphawu takho tishintja noma tiba timbi, wota emtfolamphilo *lamuhla*
- Umhlengikati utshelwe kutsi abuyekete indaba yakho
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

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.12 `triage_orange_hospital` *(lib/messages.js)*

**English source:**
```
The clinic is closed now. Go to your nearest hospital emergency unit immediately.
```

**siSwati:**
```
Ikliniki ivaliwe nyalo. Ya esibhedlela leseduze — endlini yekusheshisa.
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

**siSwati:**
```
Ungaya endzaweni yelatjhwa ngekuphepha?

1 — Yebo, ngingaya ngedvwa noma umuntfu angihambisa
2 — Cha, ngigula kakhulu kuhamba ngekuphepha
3 — Anginayo indlela yekuhamba
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.14 `transport_safe` *(lib/messages.js)*

**English source:**
```
Good. Please leave now — do not delay.
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
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

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
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

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
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

**siSwati:**
```
🟡 *KUYASHESHISA*
Vakashela ikliniki lamuhla. Ungalibali.
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

**siSwati:**
```
⏰ Tikliniki tivaliwe nyalo. Naku lokufanele ukwente:

1. *Nangabe timphawu takho tiyabeketeleka* — phumula ekhaya uye ekliniki ekuseni kusasa (ngaphambi kwa-08:00)

2. *Nangabe timphawu tiba timbi ebusuku* — ya esibhedlela leseduze noma ushayele *10177*

Sitakutfumelela sikhumbuzo kusasa ekuseni.
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

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
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

**siSwati:**
```
🟢 *KWEKUVAMILE — Akuphutfumi*

Timphawu takho akusiko simo lesiphutfumako. Emacebo nawucabanga ngesinyatselo lesilandzelako:
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

**siSwati:**
```
📍 Indzawo yaseduze: *[name]* ([dist] km).

Ungafika kalula?
1 — Yebo
2 — Cha, ngikhombise letinye
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

**siSwati:**
```
✅ Hamba uye ku-*[name]*.

📋 *Nawufika:*
1. Ya ku-reception
2. Batjele: "Ngisebentise i-BIZUSIZO"
3. Bakhombise inombolo yakho (bhala *code*)
4. Sebe nemininingwane yakho

Uhambe kahle. Sitakubutsa emvakwema-awa langu-48.
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

**siSwati:**
```
Nati letinye tindzawo letisetfuze:
[facilities]

0 — Buyela esiphakamisweni sekucala (*[firstName]*)

Phendvula ngenombolo yalokukhetsa kwakho.
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

**siSwati:**
```
Sawubona, usitsintsile eBIZUSIZO emalangeni la-2 langetulu. Tinjani timphawu takho?
1. Tincono ✅
2. Tiyafana ➡️
3. Timbi kakhulu ⚠️
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.25 `follow_up_better` *(lib/messages.js)*

**English source:**
```
✅ Glad you are feeling better. No further action needed. Stay well!
```

**siSwati:**
```
✅ Siyajabula kutsi utiva uncono. Akukho lokunye lokufunekako. Hlala kahle!
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.26 `follow_up_same` *(lib/messages.js)*

**English source:**
```
🟡 Please continue monitoring your symptoms. Visit a clinic if they do not improve in the next 24 hours.
```

**siSwati:**
```
🟡 Chubeka ucaphelisise timphawu takho. Vakashela ikliniki uma tingabi ncono ngema-awa langu-24.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.27 `follow_up_worse` *(lib/messages.js)*

**English source:**
```
⚠️ Your symptoms may be worsening. A nurse has been notified and will review your case. If it is an emergency, call *10177* now.
```

**siSwati:**
```
⚠️ Timphawu takho tingaba timbi. Nesi watiwe. Uma kuyinto lesheshisako, shayela *10177* nyalo.
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

**siSwati:**
```
Umbuzo munye — ngabe uvakashele ikliniki ngemuva kwekuhloliwa?

1 — Yebo, ngiye ekliniki ✅
2 — Cha, angiyanga ❌
3 — Ngiye esibhedlela esikhundleni 🏥
4 — Ngiye kodwa ngabuyiselwa ⛔
5 — Ngiye kodwa bekungekho umutsi 💊
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.29 `follow_up_clinic_thanks` *(lib/messages.js)*

**English source:**
```
Thank you. Your response helps us improve BIZUSIZO for everyone. Stay well. 🙏
```

**siSwati:**
```
Ngiyabonga. Impendulo yakho isisita kutfutfukisa BIZUSIZO. Hlala kahle. 🙏
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

**siSwati:**
```
📍 Sicela wabelane ngendzawo yakho sitewutfola indzawo yelatjhwa lesesedvuze.

Cindzetela inkinobho ye-📎 → Indzawo → Tfumela indzawo yakho yamanje.
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

**siSwati:**
```
Ngaphambi kwekutsi sichubeke, uyawanata yini emitsi yaletifo? (Phendvula ngetinombolo, sib. "1,3" noma "0" uma kungekho)

0. Kute
1. 💊 HIV / Ema-ARV
2. 🩸 Ingati lephakeme
3. 🍬 Sifo seswikili
4. ❤️ Sifo senhlitiyo
5. 🫁 Sifuba / Timphaphu
6. 🧠 Sifo sekuwa
7. 💊 Leminye imitsi yetifo letingapheli
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.32 `chronic_screening_saved` *(lib/messages.js)*

**English source:**
```
✅ Thank you. This helps us give you better guidance.
```

**siSwati:**
```
✅ Siyabonga. Loku kusisita sikunikete teluleko lencono.
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

**siSwati:**
```
Ngubani libito lakho? (Njengoba libhaliwe ku-ID yakho)

Bhala libito lakho:
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

**siSwati:**
```
Siyabonga, *[firstName]*.

Sibongo sakho ngubani?

Bhala sibongo sakho:
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

**siSwati:**
```
Lusuku lwakho lwekutalwa luyini?

Bhala kanje: *DD-MM-YYYY*
Sibonelo: *15-03-1992*
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

**siSwati:**
```
Bulili bakho buyini?

1 — Lomdvuna
2 — Lomfati
3 — Intersex
4 — Angitsandzi kusho
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.37 `identity_confirmed` *(lib/messages.js)*

**English source:**
```
✅ Thank you, *[name] [surname]*. This helps the clinic prepare your file before you arrive.
```

**siSwati:**
```
✅ Siyabonga, *[name] [surname]*. Loku kusita ikliniki ilungise ifayili yakho ungakefiki.
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

**siSwati:**
```
Sewuke waya ku-*[facilityName]* ngaphambilini?

1 — Yebo, nginefayili lapho
2 — Cha, kuvakashela kwami kwekucala
3 — Angikacini
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.39 `returning_yes` *(lib/messages.js)*

**English source:**
```
📁 Good — the clinic will look for your file before you arrive.
```

**siSwati:**
```
📁 Kuhle — ikliniki itawufuna ifayili yakho ungakefiki.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.40 `returning_new` *(lib/messages.js)*

**English source:**
```
🆕 No problem — the clinic will create a new file for you. This saves time when you arrive.
```

**siSwati:**
```
🆕 Kute inkinga — ikliniki itakwenta ifayili lensha. Loku kongela sikhatsi nawufika.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.41 `returning_unsure` *(lib/messages.js)*

**English source:**
```
📋 No problem. The clinic will check when you arrive. Your name and date of birth will help them find your file quickly.
```

**siSwati:**
```
📋 Kute inkinga. Ikliniki itahlola nawufika. Libito lakho nelusuku lwekutalwa kutawubasita batfole ifayili yakho masinyane.
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

**siSwati:**
```
Uyahlanganyela yini kulucwaningo lwe-BIZUSIZO ekliniki?

1 — Yebo, ngingumhlanganyeli welucwaningo
2 — Cha, ngisebentisa i-BIZUSIZO nje
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

**siSwati:**
```
🔢 Ikhodi yakho yekucwaninga itsi: *[code]*

Sicela ukhombise lekhodi kumcwaningi nawufika ekliniki. Isisita sihlanganise i-triage yakho ye-BIZUSIZO nekuvakashela kwakho ekliniki.

Ungabhala "code" nanoma nini kubona ikhodi yakho futsi.
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

**siSwati:**
```
Ukhetse: *[category]*

Kumbi kangakanani?
1 — Kancane (ngingenta imisebenti yami yemalanga onkhe)
2 — Emkhatsini (iyangiphazamisa)
3 — Kakhulu (angikwati kutenta lutfo)

Noma uchaze timphawu takho ngamagama akho.
Ungathuma voice note 🎤
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

**siSwati:**
```
🎤 Ungathuma voice note uchaza timphawu takho. Khuluma kahle usitjele:

• Kwentekani
• Kuchale nini
• Kumbi kangakanani

Sitalilalela umyalezo wakho sikusite.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.46 `voice_note_received` *(lib/messages.js)*

**English source:**
```
🎤 Voice note received. Let me process your message...
```

**siSwati:**
```
🎤 Voice note itfolakele. Angisebente umlayezo wakho...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.47 `thinking` *(lib/messages.js)*

**English source:**
```
🔍 Assessing your symptoms...
```

**siSwati:**
```
🔍 Sihlola timphawu takho...
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

**siSwati:**
```

💡 *Ema-thiphu:*
Bhala *0* — ingcoco lensha
Bhala *lulwimi* — shintja lulwimi
Bhala *code* — khombisa inombolo yakho
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

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
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

**siSwati:**
```
⚠️ Sinenkinga yebuchwepheshe futsi asikwati kusebenta umlayezo wakho nyalo.

🚨 *Uma kusheshisa:*
• Shayela *10177* (i-ambulensi) noma *084 124* (ER24)
• Hamba uye ekliniki noma esibhedlela leseduze NYALO — ungalindzi i-ambulensi

Sitawutama kuphendvula uma luhlelo selubuyile. Siyacolisa ngekuphazamisa.
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

**siSwati:**
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

**siSwati:**
```
Ulapha kutawutfola imitsi yakho yesikhashana?\n1 — Yebo, ngidzinga imitsi yami yejwayelekile\n2 — Cha, nginetimphawu letinsha noma letimbi
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

**siSwati:**
```
Uphuza imitsi yini? (Khetsa konkhe lokufanele)\n1 — Ema-ARV (HIV)\n2 — Ingati lephakeme\n3 — Shukela (Diabetes)\n4 — Inhlitiyo / Angina\n5 — Sifuba / Emaphaphu\n6 — Sifo sekuwa (Epilepsy)\n7 — Imitsi lenye yesikhashana
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.54 `ccmdd_route` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Your nearest medication pickup point is:\n*${name}* (${dist} km)\n\nYou can collect your chronic medication there without queuing at a clinic.\n\nCan you get there?\n1 — Yes\n2 — No, show alternatives
```

**siSwati:**
```
💊 Indzawo yakho yaseduze yekutfola imitsi itsi:\n*${name}* (${dist} km)\n\nUngatfola imitsi yakho yesikhashana khona ngaphandle kokulindza emtfolamphilo.\n\nUngafika?\n1 — Yebo\n2 — Cha, ngikhombise letinye
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.55 `ccmdd_confirmed` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
✅ Go to *${name}* to collect your medication.\n\nRemember to bring your ID and prescription/clinic card.\n\nWe will remind you when your next collection is due.
```

**siSwati:**
```
✅ Hamba uye ku-*${name}* kutawutfola imitsi yakho.\n\nKhumbula kuletsa i-ID yakho nelikhadi lemtfolamphilo.\n\nSitakukhumbuza uma sikhatsi sekutfola lesilandzelako sesifikile.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.56 `ccmdd_not_available` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 CCMDD pickup is not yet available in your area. Please visit your nearest clinic for your medication refill.
```

**siSwati:**
```
💊 Kutfola imitsi akukabi khona endzaweni yakho. Sicela uvakashele emtfolamphilo loseduze kutawutfola imitsi.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.57 `reminder_24h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Reminder: Your medication is ready for collection at *${name}*.\n\nPlease collect today if possible. Your health depends on taking your medication consistently.
```

**siSwati:**
```
💊 Sikhumbuto: Imitsi yakho ilungele kutfotjwa ku-*${name}*.\n\nSicela uyitfole lamuhla nawukwenta. Imphilo yakho incike ekutfoleni imitsi njalo.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.58 `reminder_48h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Your medication at *${name}* has not been collected yet.\n\nMissing your medication can cause your condition to worsen. Please collect as soon as possible.\n\nHaving trouble getting there?\n1 — I will collect today\n2 — I cannot get to this location\n3 — I have a problem (tell us)
```

**siSwati:**
```
⚠️ Imitsi yakho ku-*${name}* ayikatsatfwa.\n\nKungayitfoli imitsi kungenta simo sakho sibe sibi. Sicela uyitfole ngekushesha.\n\nUnenkinga yekufika?\n1 — Ngitayitfola lamuhla\n2 — Angikwati kufika endzaweni le\n3 — Nginenkinga (sitjele)
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.59 `reminder_72h_escalation` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
🔴 You have not collected your medication for 3 days.\n\nMissing medication puts your health at serious risk. A healthcare worker has been notified.\n\nPlease tell us what is preventing you from collecting:\n1 — Transport / distance problem\n2 — Cannot take time off work\n3 — Pickup point was closed when I went\n4 — Medication was not available\n5 — Side effects — I stopped taking medication\n6 — Other reason
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.60 `missed_transport` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
We understand. Let us find a closer pickup point for your next collection. Please share your location.
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.61 `missed_work` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
We understand. We are working on extended collection hours and weekend options. For now, you can ask someone you trust to collect on your behalf with your ID and clinic card.
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.62 `missed_closed` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Thank you for telling us. We have logged this issue and will follow up with the pickup point. Please try again tomorrow, or we can suggest an alternative location.
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.63 `missed_no_stock` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Thank you for telling us. We have reported this stock issue. We will notify you as soon as your medication is available. We are sorry for the inconvenience.
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.64 `missed_side_effects` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Please do not stop taking your medication without speaking to a healthcare worker first. Stopping suddenly can be dangerous.\n\nA nurse has been notified and will contact you to discuss your side effects and explore alternatives.\n\nIf you feel very unwell, call *10177* or visit your nearest clinic.
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.65 `reengagement` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Hello from BIZUSIZO 💊\n\nWe noticed you haven't collected your chronic medication recently. We know life gets busy and collecting can be difficult.\n\nWe want to help you get back on track. Your health matters.\n\nWould you like help finding a convenient pickup point?\n1 — Yes, help me collect my medication\n2 — I am collecting elsewhere now\n3 — I need to speak to someone
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.66 `multimorbidity_warning` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Important: You collect medication for *${conditions}*. Missing your medication affects ALL of these conditions. Please collect as soon as possible.
```

**siSwati:**
```
⚠️ [MISSING — PLEASE TRANSLATE]
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

**siSwati:**
```
📱 Kubonisana nge-video kungaba khona ngesimo sakho.\n\nUngakhuluma nenesi nge-video call esikhundleni sekuya emtfolamphilo.\n\nUngatsandza:\n1 — Kubhukhela kubonisana nge-video\n2 — Cha ngiyabonga, ngitawuya emtfolamphilo
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.68 `booking_api` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
✅ Your virtual consultation has been booked. You will receive a confirmation message with the date, time, and video link.
```

**siSwati:**
```
✅ Kubonisana kwakho nge-video kubhukiwe. Utawutfola umlayeto wekucinisekisa nelusuku, sikhatsi, nelinki ye-video.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.69 `booking_whatsapp` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 To book your virtual consultation, please message this number on WhatsApp:\n\n*${phone}*\n\nTell them BIZUSIZO referred you and describe your symptoms.
```

**siSwati:**
```
📱 Kubhukhela kubonisana kwakho nge-video, sicela utfumele umlayeto ku nomboro le nge-WhatsApp:\n\n*${phone}*\n\nBatjele kutsi BIZUSIZO ikurhumele futsi uchaze timphawu takho.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.70 `not_available` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 Virtual consultations are not yet available in your area. Please visit your nearest clinic.
```

**siSwati:**
```
📱 Kubonisana nge-video akukabi khona endzaweni yakho. Sicela uvakashele emtfolamphilo loseduze.
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

**siSwati:**
```
📋 Imiphumela yakho ye-*${testType}* isilungile.\n\nSicela uvakashele emtfolamphilo wakho kutsi ucoca ngemiphumela nenesi.\n\nNangabe ubuyiselwe emtfolamphilo, loku AKUSHO kutsi kukhona lokungalungi — imiphumela leminyenti yekuhlolwa kwejwayelekile.\n\nImibuto? Phendvula "imiphumela" noma ushayele emtfolamphilo wakho.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.72 `result_action_required` *(index.js → LAB_MESSAGES)*

**English source:**
```
📋 Your *${testType}* results are ready and your healthcare provider would like to see you.\n\nPlease visit your clinic within the next 7 days. This is important for your ongoing care.\n\nIf you cannot get to the clinic, reply "help" and we will assist you.
```

**siSwati:**
```
📋 Imiphumela yakho ye-*${testType}* isilungile futsi unesi wakho ufuna kukubona.\n\nSicela uvakashele emtfolamphilo wakho emalangeni la-7 latako. Loku kubalulekile ekunakekelweni kwakho.\n\nNawungakwati kufika emtfolamphilo, phendvula "lusito" futsi sitakusita.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.73 `result_normal` *(index.js → LAB_MESSAGES)*

**English source:**
```
✅ Good news! Your *${testType}* results are back and everything looks normal.\n\nKeep taking your medication as prescribed. Your next check-up will be scheduled as usual.\n\nStay well! 💚
```

**siSwati:**
```
✅ Tindzaba letimnandzi! Imiphumela yakho ye-*${testType}* ibuyile futsi konkhe kubonakala kujwayelekile.\n\nChubeka utfola imitsi yakho njengoba unikwe. Kuhlolwa kwakho lokulandzelako kutawuhlelwa njengokwejwayelekile.\n\nHlala kahle! 💚
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.74 `check_status` *(index.js → LAB_MESSAGES)*

**English source:**
```
Let me check your lab results. One moment please...
```

**siSwati:**
```
Ase ngihlole imiphumela yakho yasekhemisi. Umzuzwana munye sicela...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.75 `no_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
We do not have any lab results on file for you at the moment. If you are expecting results, please check with your clinic.\n\nResults typically take 3-7 working days depending on the test type.
```

**siSwati:**
```
Asina miphumela yasekhemisi ngawe kwanyalo. Nawulindze imiphumela, hlola nemtfolamphilo wakho.\n\nImiphumela ngekwejwayelekile itfatsa emalanga la-3 kuya ku la-7 emsebentini kuya ngeluhlobo lwekuhlolwa.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.76 `pending_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
Your *${testType}* test from *${testDate}* is still being processed. We will notify you on WhatsApp as soon as results are available.\n\nYou do not need to visit the clinic to check — we will come to you.
```

**siSwati:**
```
Kuhlolwa kwakho kwe-*${testType}* kwe-*${testDate}* kusentiwa. Sitakwatisa ku-WhatsApp uma imiphumela itfolakala.\n\nAwudzingi kuvakashela emtfolamphilo kuhlola — siteta kuwe.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---


## PART 2 — Clinical safety keywords (58 rules)

The system scans patient text for keyword combinations and assigns a triage level (RED = emergency, ORANGE = very urgent, YELLOW = urgent) **independent of the AI**. Each rule below shows the English trigger phrases (so you know what the rule is for) and the current siSwati keywords the system recognises. These are natural patient phrasings, not clinical terminology.

**For each rule, please:**
1. Confirm the listed siSwati keywords are correct and natural for how a patient would type on WhatsApp.
2. Add any common phrasings a patient might use for this symptom that are **not** currently listed.
3. Flag any keyword that sounds unnatural, overly formal, or potentially misleading.

**Priority:** ✨ high (RED rules, life-threatening) · important (ORANGE) · ⚪ lower priority (YELLOW)

### RED discriminators

#### RED 1. `respiratory_cardiac_arrest`
*── RED DISCRIMINATORS ── | ════════════════════════════════════════════════════════════════ | RED 1: RESPIRATORY / CARDIAC ARREST — not breathing, heart stopped | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `inhlitiyo yeme`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a a hefemuli` — _is this siSwati? ☐ yes  ☐ no_
- `a a phefumolohe` — _is this siSwati? ☐ yes  ☐ no_
- `awaphefumuli` — _is this siSwati? ☐ yes  ☐ no_
- `cardiac arrest` — _is this siSwati? ☐ yes  ☐ no_
- `ga go na go hema` — _is this siSwati? ☐ yes  ☐ no_
- `heart stopped` — _is this siSwati? ☐ yes  ☐ no_
- `inhliziyo yama` — _is this siSwati? ☐ yes  ☐ no_
- `inhliziyo yema` — _is this siSwati? ☐ yes  ☐ no_
- `no breathing` — _is this siSwati? ☐ yes  ☐ no_
- `not breathing` — _is this siSwati? ☐ yes  ☐ no_
- `o emisitse go hema` — _is this siSwati? ☐ yes  ☐ no_
- `o tlogetse go hema` — _is this siSwati? ☐ yes  ☐ no_
- `stopped breathing` — _is this siSwati? ☐ yes  ☐ no_
- `wehlil' emzimbeni` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 2. `unconscious`
*════════════════════════════════════════════════════════════════ | RED 2: UNCONSCIOUS — unresponsive, not waking, collapsed | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `akaphaphami`
- `udzakiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a a hlamuli` — _is this siSwati? ☐ yes  ☐ no_
- `abuyi` — _is this siSwati? ☐ yes  ☐ no_
- `akanyakazi` — _is this siSwati? ☐ yes  ☐ no_
- `alawuli` — _is this siSwati? ☐ yes  ☐ no_
- `alibeki` — _is this siSwati? ☐ yes  ☐ no_
- `angaphaphami` — _is this siSwati? ☐ yes  ☐ no_
- `aziphaphami` — _is this siSwati? ☐ yes  ☐ no_
- `collapsed and not moving` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tsoge` — _is this siSwati? ☐ yes  ☐ no_
- `ha a arabe` — _is this siSwati? ☐ yes  ☐ no_
- `limp and not moving` — _is this siSwati? ☐ yes  ☐ no_
- `not waking` — _is this siSwati? ☐ yes  ☐ no_
- `o wele fase` — _is this siSwati? ☐ yes  ☐ no_
- `passed out` — _is this siSwati? ☐ yes  ☐ no_
- `unconscious` — _is this siSwati? ☐ yes  ☐ no_
- `unresponsive` — _is this siSwati? ☐ yes  ☐ no_
- `uwele phansi` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 3. `active_seizure`
*════════════════════════════════════════════════════════════════ | RED 3: ACTIVE SEIZURE — currently fitting, convulsing | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `umtimba uyadzikita`
- `uyabanjwa nyalo`
- `uyatfutfumela`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `body shaking uncontrolled` — _is this siSwati? ☐ yes  ☐ no_
- `convulsing now` — _is this siSwati? ☐ yes  ☐ no_
- `currently fitting` — _is this siSwati? ☐ yes  ☐ no_
- `fitting now` — _is this siSwati? ☐ yes  ☐ no_
- `having a fit` — _is this siSwati? ☐ yes  ☐ no_
- `isidina manje` — _is this siSwati? ☐ yes  ☐ no_
- `jaanong o tshwarwa ke sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `jaanong o tshwerwe ke sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa jaanong` — _is this siSwati? ☐ yes  ☐ no_
- `o tshwerwe ke bolwetse` — _is this siSwati? ☐ yes  ☐ no_
- `seizure now` — _is this siSwati? ☐ yes  ☐ no_
- `shaking and not stopping` — _is this siSwati? ☐ yes  ☐ no_
- `u swiwa nga vhulwadze` — _is this siSwati? ☐ yes  ☐ no_
- `unamaxhala ngoku` — _is this siSwati? ☐ yes  ☐ no_
- `unyikinyeka ngoku` — _is this siSwati? ☐ yes  ☐ no_
- `val nou` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 4. `cardiac_emergency`
*════════════════════════════════════════════════════════════════ | RED 4: CARDIAC EMERGENCY — chest pain + breathing difficulty | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a ndzi hefemuli` — _is this siSwati? ☐ yes  ☐ no_
- `a thi fembi` — _is this siSwati? ☐ yes  ☐ no_
- `asem` — _is this siSwati? ☐ yes  ☐ no_
- `asemhaling` — _is this siSwati? ☐ yes  ☐ no_
- `can't breathe` — _is this siSwati? ☐ yes  ☐ no_
- `chest pain` — _is this siSwati? ☐ yes  ☐ no_
- `difficulty breathing` — _is this siSwati? ☐ yes  ☐ no_
- `ga ke heme` — _is this siSwati? ☐ yes  ☐ no_
- `go hema` — _is this siSwati? ☐ yes  ☐ no_
- `go hema go thata` — _is this siSwati? ☐ yes  ☐ no_
- `ho phefumoloha` — _is this siSwati? ☐ yes  ☐ no_
- `ku hefemula` — _is this siSwati? ☐ yes  ☐ no_
- `ku hefemula ku tika` — _is this siSwati? ☐ yes  ☐ no_
- `kuphefumula` — _is this siSwati? ☐ yes  ☐ no_
- `kuphefumula kumatima` — _is this siSwati? ☐ yes  ☐ no_
- `phefumla` — _is this siSwati? ☐ yes  ☐ no_
- `phefumula` — _is this siSwati? ☐ yes  ☐ no_
- `short of breath` — _is this siSwati? ☐ yes  ☐ no_
- `shortness of breath` — _is this siSwati? ☐ yes  ☐ no_
- `sifuba` — _is this siSwati? ☐ yes  ☐ no_
- `struggling to breathe` — _is this siSwati? ☐ yes  ☐ no_
- `tshifuva` — _is this siSwati? ☐ yes  ☐ no_
- `u femba` — _is this siSwati? ☐ yes  ☐ no_
- `u femba hu a onda` — _is this siSwati? ☐ yes  ☐ no_
- `uphefumula kanzima` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 5. `cardiac_emergency_radiation`
*Complements the chest+breathing rule above. Surfaced by eval P01: chest + arm | heaviness + sweating had no deterministic net; LLM caught it at 95% confidence | but no fallback existed. Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr | pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `sifuba sibanjiwe`
- `sifuba sibuhlungu`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a opela` — _is this siSwati? ☐ yes  ☐ no_
- `a tsidifala` — _is this siSwati? ☐ yes  ☐ no_
- `anamela` — _is this siSwati? ☐ yes  ☐ no_
- `arm aching` — _is this siSwati? ☐ yes  ☐ no_
- `arm feels heavy` — _is this siSwati? ☐ yes  ☐ no_
- `arm feels numb` — _is this siSwati? ☐ yes  ☐ no_
- `arm heavy` — _is this siSwati? ☐ yes  ☐ no_
- `arm is dof` — _is this siSwati? ☐ yes  ☐ no_
- `arm is heavy` — _is this siSwati? ☐ yes  ☐ no_
- `arm is numb` — _is this siSwati? ☐ yes  ☐ no_
- `arm numb` — _is this siSwati? ☐ yes  ☐ no_
- `arm tingling` — _is this siSwati? ☐ yes  ☐ no_
- `bo anamela` — _is this siSwati? ☐ yes  ☐ no_
- `bo fologela` — _is this siSwati? ☐ yes  ☐ no_
- `boima` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `chest discomfort` — _is this siSwati? ☐ yes  ☐ no_
- `chest heaviness` — _is this siSwati? ☐ yes  ☐ no_
- `chest hurts` — _is this siSwati? ☐ yes  ☐ no_
- `chest is heavy` — _is this siSwati? ☐ yes  ☐ no_
- `chest pain` — _is this siSwati? ☐ yes  ☐ no_
- `chest pressure` — _is this siSwati? ☐ yes  ☐ no_
- `chest tight` — _is this siSwati? ☐ yes  ☐ no_
- `chest tightness` — _is this siSwati? ☐ yes  ☐ no_
- `clammy` — _is this siSwati? ☐ yes  ☐ no_
- `cold sweat` — _is this siSwati? ☐ yes  ☐ no_
- `cold sweats` — _is this siSwati? ☐ yes  ☐ no_
- `diaphoresis` — _is this siSwati? ☐ yes  ☐ no_
- `fologela` — _is this siSwati? ☐ yes  ☐ no_
- `go pitlagana` — _is this siSwati? ☐ yes  ☐ no_
- `go sa phuthologa` — _is this siSwati? ☐ yes  ☐ no_
- `in my arm` — _is this siSwati? ☐ yes  ☐ no_
- `ingalo ibuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `ingalo inzima` — _is this siSwati? ☐ yes  ☐ no_
- `jaw ache` — _is this siSwati? ☐ yes  ☐ no_
- `jaw hurts` — _is this siSwati? ☐ yes  ☐ no_
- `jaw pain` — _is this siSwati? ☐ yes  ☐ no_
- `kgatelelo` — _is this siSwati? ☐ yes  ☐ no_
- `kolobile` — _is this siSwati? ☐ yes  ☐ no_
- `le a opela` — _is this siSwati? ☐ yes  ☐ no_
- `le a tonya` — _is this siSwati? ☐ yes  ☐ no_
- `le ikutlwa le le boima` — _is this siSwati? ☐ yes  ☐ no_
- `le ikutlwa le sule` — _is this siSwati? ☐ yes  ☐ no_
- `le le boima` — _is this siSwati? ☐ yes  ☐ no_
- `le sule` — _is this siSwati? ☐ yes  ☐ no_
- `left arm` — _is this siSwati? ☐ yes  ☐ no_
- `left shoulder` — _is this siSwati? ☐ yes  ☐ no_
- `legare` — _is this siSwati? ☐ yes  ☐ no_
- `legare la molema` — _is this siSwati? ☐ yes  ☐ no_
- `letlalo` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo la me` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo la moja` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo la molema` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo le boima` — _is this siSwati? ☐ yes  ☐ no_
- `letsoho le boima` — _is this siSwati? ☐ yes  ☐ no_
- `mofufutsho o tsididi` — _is this siSwati? ☐ yes  ☐ no_
- `mohonga u vhavha` — _is this siSwati? ☐ yes  ☐ no_
- `motlhala` — _is this siSwati? ☐ yes  ☐ no_
- `motlhala wa me` — _is this siSwati? ☐ yes  ☐ no_
- `mouoane` — _is this siSwati? ☐ yes  ☐ no_
- `muheme wa tsunda` — _is this siSwati? ☐ yes  ☐ no_
- `muheme wu vava` — _is this siSwati? ☐ yes  ☐ no_
- `my arm` — _is this siSwati? ☐ yes  ☐ no_
- `o a opela` — _is this siSwati? ☐ yes  ☐ no_
- `o fufuleha mofufutsho o batang` — _is this siSwati? ☐ yes  ☐ no_
- `o fufulela phefo e tonyago` — _is this siSwati? ☐ yes  ☐ no_
- `o montsi` — _is this siSwati? ☐ yes  ☐ no_
- `o tsididi` — _is this siSwati? ☐ yes  ☐ no_
- `opela` — _is this siSwati? ☐ yes  ☐ no_
- `pain down my shoulder` — _is this siSwati? ☐ yes  ☐ no_
- `pain in jaw` — _is this siSwati? ☐ yes  ☐ no_
- `pain in my jaw` — _is this siSwati? ☐ yes  ☐ no_
- `pain to shoulder` — _is this siSwati? ☐ yes  ☐ no_
- `pitlagana` — _is this siSwati? ☐ yes  ☐ no_
- `pitlagane` — _is this siSwati? ☐ yes  ☐ no_
- `radiating` — _is this siSwati? ☐ yes  ☐ no_
- `right arm` — _is this siSwati? ☐ yes  ☐ no_
- `se a opela` — _is this siSwati? ☐ yes  ☐ no_
- `se pitlagane` — _is this siSwati? ☐ yes  ☐ no_
- `seledu se bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `shoulder pain` — _is this siSwati? ☐ yes  ☐ no_
- `spreading to` — _is this siSwati? ☐ yes  ☐ no_
- `spreads to` — _is this siSwati? ☐ yes  ☐ no_
- `sule` — _is this siSwati? ☐ yes  ☐ no_
- `sweating` — _is this siSwati? ☐ yes  ☐ no_
- `sweaty` — _is this siSwati? ☐ yes  ☐ no_
- `sweet bars` — _is this siSwati? ☐ yes  ☐ no_
- `tonya` — _is this siSwati? ☐ yes  ☐ no_
- `tshanḓa tsho lemala` — _is this siSwati? ☐ yes  ☐ no_
- `tsididi` — _is this siSwati? ☐ yes  ☐ no_
- `tsidifala` — _is this siSwati? ☐ yes  ☐ no_
- `tsikinyega` — _is this siSwati? ☐ yes  ☐ no_
- `u suka ngoho` — _is this siSwati? ☐ yes  ☐ no_
- `umjuluk' obandayo` — _is this siSwati? ☐ yes  ☐ no_
- `uyabila` — _is this siSwati? ☐ yes  ☐ no_
- `voko ri tika` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 6. `acs_radiation`
*════════════════════════════════════════════════════════════════ | RED 5: ACS RADIATION — chest pain + arm/jaw pain + sweating | Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `sifuba sibuhlungu`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `arm` — _is this siSwati? ☐ yes  ☐ no_
- `arm pain` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `chest hurts` — _is this siSwati? ☐ yes  ☐ no_
- `chest pain` — _is this siSwati? ☐ yes  ☐ no_
- `chest tight` — _is this siSwati? ☐ yes  ☐ no_
- `feels like something sitting on my chest` — _is this siSwati? ☐ yes  ☐ no_
- `fhungo` — _is this siSwati? ☐ yes  ☐ no_
- `go fufulelwa` — _is this siSwati? ☐ yes  ☐ no_
- `go utlwalega e kete go na le sengwe se se ntseng mo sehubeng` — _is this siSwati? ☐ yes  ☐ no_
- `ihlombe` — _is this siSwati? ☐ yes  ☐ no_
- `ingalo` — _is this siSwati? ☐ yes  ☐ no_
- `iqatha` — _is this siSwati? ☐ yes  ☐ no_
- `jaw pain` — _is this siSwati? ☐ yes  ☐ no_
- `khana` — _is this siSwati? ☐ yes  ☐ no_
- `left arm` — _is this siSwati? ☐ yes  ☐ no_
- `legare` — _is this siSwati? ☐ yes  ☐ no_
- `legetla` — _is this siSwati? ☐ yes  ☐ no_
- `lehetla` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo la molema` — _is this siSwati? ☐ yes  ☐ no_
- `letsoho` — _is this siSwati? ☐ yes  ☐ no_
- `lihlombe` — _is this siSwati? ☐ yes  ☐ no_
- `mofufutšo` — _is this siSwati? ☐ yes  ☐ no_
- `motlhala` — _is this siSwati? ☐ yes  ☐ no_
- `mouoane` — _is this siSwati? ☐ yes  ☐ no_
- `o a fufuleha` — _is this siSwati? ☐ yes  ☐ no_
- `o a fufulela` — _is this siSwati? ☐ yes  ☐ no_
- `opela` — _is this siSwati? ☐ yes  ☐ no_
- `pitlagane` — _is this siSwati? ☐ yes  ☐ no_
- `rikatla` — _is this siSwati? ☐ yes  ☐ no_
- `se a opela` — _is this siSwati? ☐ yes  ☐ no_
- `se pitlagane` — _is this siSwati? ☐ yes  ☐ no_
- `shoulder pain` — _is this siSwati? ☐ yes  ☐ no_
- `sifuba` — _is this siSwati? ☐ yes  ☐ no_
- `skouer` — _is this siSwati? ☐ yes  ☐ no_
- `sweating` — _is this siSwati? ☐ yes  ☐ no_
- `sweet` — _is this siSwati? ☐ yes  ☐ no_
- `sweetvogtig` — _is this siSwati? ☐ yes  ☐ no_
- `tshanḓa` — _is this siSwati? ☐ yes  ☐ no_
- `u a suka` — _is this siSwati? ☐ yes  ☐ no_
- `u a suza` — _is this siSwati? ☐ yes  ☐ no_
- `uyabila` — _is this siSwati? ☐ yes  ☐ no_
- `voko` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 7. `obstetric_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 6: OBSTETRIC HAEMORRHAGE — pregnant + bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `emita`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a mantsi` — _is this siSwati? ☐ yes  ☐ no_
- `bleeding` — _is this siSwati? ☐ yes  ☐ no_
- `bleeding heavily` — _is this siSwati? ☐ yes  ☐ no_
- `blood` — _is this siSwati? ☐ yes  ☐ no_
- `boimana` — _is this siSwati? ☐ yes  ☐ no_
- `dutla` — _is this siSwati? ☐ yes  ☐ no_
- `go dutla madi` — _is this siSwati? ☐ yes  ☐ no_
- `go dutla madi a mantsi thata` — _is this siSwati? ☐ yes  ☐ no_
- `go dutla madi go go masisi` — _is this siSwati? ☐ yes  ☐ no_
- `go dutla madi thata` — _is this siSwati? ☐ yes  ☐ no_
- `go lahlegelwa ke madi thata` — _is this siSwati? ☐ yes  ☐ no_
- `haemorrhage` — _is this siSwati? ☐ yes  ☐ no_
- `hemorrhage` — _is this siSwati? ☐ yes  ☐ no_
- `imile` — _is this siSwati? ☐ yes  ☐ no_
- `ingati` — _is this siSwati? ☐ yes  ☐ no_
- `ke ipaakanyeditse` — _is this siSwati? ☐ yes  ☐ no_
- `madi` — _is this siSwati? ☐ yes  ☐ no_
- `massive bleeding` — _is this siSwati? ☐ yes  ☐ no_
- `ngati` — _is this siSwati? ☐ yes  ☐ no_
- `o imile` — _is this siSwati? ☐ yes  ☐ no_
- `opha` — _is this siSwati? ☐ yes  ☐ no_
- `pregnancy` — _is this siSwati? ☐ yes  ☐ no_
- `pregnant` — _is this siSwati? ☐ yes  ☐ no_
- `swangari` — _is this siSwati? ☐ yes  ☐ no_
- `uyopha` — _is this siSwati? ☐ yes  ☐ no_
- `zwigolo` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 8. `obstetric_cord_or_fetal`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 7: OBSTETRIC CORD / FETAL EMERGENCY | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `inkhaba yinyatseleka`
- `umntfwana akanyakazi`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `baba beweeg nie` — _is this siSwati? ☐ yes  ☐ no_
- `baby not moving` — _is this siSwati? ☐ yes  ☐ no_
- `baby stopped moving` — _is this siSwati? ☐ yes  ☐ no_
- `cord came out` — _is this siSwati? ☐ yes  ☐ no_
- `cord is out` — _is this siSwati? ☐ yes  ☐ no_
- `mhahla wu humile` — _is this siSwati? ☐ yes  ☐ no_
- `mohara o tsoile` — _is this siSwati? ☐ yes  ☐ no_
- `mohara o tswile` — _is this siSwati? ☐ yes  ☐ no_
- `mohara o tšwile` — _is this siSwati? ☐ yes  ☐ no_
- `mohlola wo bva` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana ga a šikinyege` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana ha a tshikinyege` — _is this siSwati? ☐ yes  ☐ no_
- `no fetal movement` — _is this siSwati? ☐ yes  ☐ no_
- `nwana a a tshikinyeki` — _is this siSwati? ☐ yes  ☐ no_
- `prolapsed cord` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 9. `envenomation`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 8: SNAKE BITE — all 11 languages | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `bit by snake` — _is this siSwati? ☐ yes  ☐ no_
- `bitten by snake` — _is this siSwati? ☐ yes  ☐ no_
- `go longwa ke noga` — _is this siSwati? ☐ yes  ☐ no_
- `noga e a loma` — _is this siSwati? ☐ yes  ☐ no_
- `noga e nkometse` — _is this siSwati? ☐ yes  ☐ no_
- `nyoka yi n'wi lumile` — _is this siSwati? ☐ yes  ☐ no_
- `o lomilwe ke noga` — _is this siSwati? ☐ yes  ☐ no_
- `snake bit` — _is this siSwati? ☐ yes  ☐ no_
- `snake bite` — _is this siSwati? ☐ yes  ☐ no_
- `snakebite` — _is this siSwati? ☐ yes  ☐ no_
- `ṋowa` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 10. `severe_burns`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `emanti lashisako`
- `ushile`
- `ushile emzimbeni`
- `ushiselwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `body on fire` — _is this siSwati? ☐ yes  ☐ no_
- `burn from explosion` — _is this siSwati? ☐ yes  ☐ no_
- `burning all over` — _is this siSwati? ☐ yes  ☐ no_
- `burns to face and hands` — _is this siSwati? ☐ yes  ☐ no_
- `burnt all over` — _is this siSwati? ☐ yes  ☐ no_
- `izandla nobuso kushisile` — _is this siSwati? ☐ yes  ☐ no_
- `izandla nobuso zitshisiwe` — _is this siSwati? ☐ yes  ☐ no_
- `large burn` — _is this siSwati? ☐ yes  ☐ no_
- `meetse a go fisha` — _is this siSwati? ☐ yes  ☐ no_
- `metsi a chesang` — _is this siSwati? ☐ yes  ☐ no_
- `o cheswe` — _is this siSwati? ☐ yes  ☐ no_
- `o tshiwa` — _is this siSwati? ☐ yes  ☐ no_
- `severe burn` — _is this siSwati? ☐ yes  ☐ no_
- `u pfile` — _is this siSwati? ☐ yes  ☐ no_
- `ushiswe kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `vuur oor liggaam` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 11. `severe_burns_context`
*════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `emanti lashisako etikwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `back` — _is this siSwati? ☐ yes  ☐ no_
- `bene` — _is this siSwati? ☐ yes  ☐ no_
- `boiling water on` — _is this siSwati? ☐ yes  ☐ no_
- `bors` — _is this siSwati? ☐ yes  ☐ no_
- `buso` — _is this siSwati? ☐ yes  ☐ no_
- `chest` — _is this siSwati? ☐ yes  ☐ no_
- `face` — _is this siSwati? ☐ yes  ☐ no_
- `gesig` — _is this siSwati? ☐ yes  ☐ no_
- `imilente` — _is this siSwati? ☐ yes  ☐ no_
- `imilenze` — _is this siSwati? ☐ yes  ☐ no_
- `isisu` — _is this siSwati? ☐ yes  ☐ no_
- `khana` — _is this siSwati? ☐ yes  ☐ no_
- `khwiri` — _is this siSwati? ☐ yes  ☐ no_
- `legs` — _is this siSwati? ☐ yes  ☐ no_
- `lumbu` — _is this siSwati? ☐ yes  ☐ no_
- `maag` — _is this siSwati? ☐ yes  ☐ no_
- `maoto` — _is this siSwati? ☐ yes  ☐ no_
- `milenge` — _is this siSwati? ☐ yes  ☐ no_
- `milenzhe` — _is this siSwati? ☐ yes  ☐ no_
- `mokokotlo` — _is this siSwati? ☐ yes  ☐ no_
- `mokwatla` — _is this siSwati? ☐ yes  ☐ no_
- `mpa` — _is this siSwati? ☐ yes  ☐ no_
- `muṱana` — _is this siSwati? ☐ yes  ☐ no_
- `ngalati` — _is this siSwati? ☐ yes  ☐ no_
- `nkolo` — _is this siSwati? ☐ yes  ☐ no_
- `rug` — _is this siSwati? ☐ yes  ☐ no_
- `sefahlego` — _is this siSwati? ☐ yes  ☐ no_
- `sefahleho` — _is this siSwati? ☐ yes  ☐ no_
- `sifuba` — _is this siSwati? ☐ yes  ☐ no_
- `sisu` — _is this siSwati? ☐ yes  ☐ no_
- `stomach` — _is this siSwati? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this siSwati? ☐ yes  ☐ no_
- `umhlana` — _is this siSwati? ☐ yes  ☐ no_
- `umhlane` — _is this siSwati? ☐ yes  ☐ no_
- `xikandza` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 12. `neonatal_apnoea`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `baby not breathing` — _is this siSwati? ☐ yes  ☐ no_
- `baby stopped breathing` — _is this siSwati? ☐ yes  ☐ no_
- `infant not breathing` — _is this siSwati? ☐ yes  ☐ no_
- `newborn not breathing` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana o emisitse go hema` — _is this siSwati? ☐ yes  ☐ no_
- `nwana a a hefemuli` — _is this siSwati? ☐ yes  ☐ no_
- `nwana lontsongo a nga hefemuli` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 13. `paediatric_unconscious`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `umntfwana udzakiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `baby unconscious` — _is this siSwati? ☐ yes  ☐ no_
- `child unconscious` — _is this siSwati? ☐ yes  ☐ no_
- `infant unconscious` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana ga a itse sepe` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana o phutlhame` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana o wele fa fatshe` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana o wetse` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana o wetse fatshe` — _is this siSwati? ☐ yes  ☐ no_
- `nwana a nga vuki` — _is this siSwati? ☐ yes  ☐ no_
- `toddler collapsed` — _is this siSwati? ☐ yes  ☐ no_
- `umntwana oqulekile` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 14. `meningococcal_rash`
*════════════════════════════════════════════════════════════════ | RED 11: MENINGOCOCCAL RASH — purple/non-blanching | Extended to all 11 languages (nso/tn/st/ts/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `emapethwane lamnyama`
- `emapethwane langapheli`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `amabala amnyama` — _is this siSwati? ☐ yes  ☐ no_
- `amabala aphuzi` — _is this siSwati? ☐ yes  ☐ no_
- `blood rash` — _is this siSwati? ☐ yes  ☐ no_
- `dark rash` — _is this siSwati? ☐ yes  ☐ no_
- `ga le nyelele` — _is this siSwati? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a lefifi` — _is this siSwati? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a pherese` — _is this siSwati? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a sa nyeleleng fa o le tobetsa` — _is this siSwati? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a madi` — _is this siSwati? ☐ yes  ☐ no_
- `matheba a sa nyeleleng fa o tobetsa ka galase` — _is this siSwati? ☐ yes  ☐ no_
- `nie-verbleekende uitslag` — _is this siSwati? ☐ yes  ☐ no_
- `non-blanching rash` — _is this siSwati? ☐ yes  ☐ no_
- `purple rash` — _is this siSwati? ☐ yes  ☐ no_
- `rash pressing glass` — _is this siSwati? ☐ yes  ☐ no_
- `rash that doesn't fade` — _is this siSwati? ☐ yes  ☐ no_
- `rash won't disappear` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 15. `anaphylaxis`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 12: ANAPHYLAXIS — throat/face swelling after sting/food | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `buso buyavuvuka`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `allegi` — _is this siSwati? ☐ yes  ☐ no_
- `allegi ya dijo` — _is this siSwati? ☐ yes  ☐ no_
- `bee` — _is this siSwati? ☐ yes  ☐ no_
- `bye` — _is this siSwati? ☐ yes  ☐ no_
- `can't swallow` — _is this siSwati? ☐ yes  ☐ no_
- `dijo` — _is this siSwati? ☐ yes  ☐ no_
- `e rurugile` — _is this siSwati? ☐ yes  ☐ no_
- `face swelling` — _is this siSwati? ☐ yes  ☐ no_
- `food allergy` — _is this siSwati? ☐ yes  ☐ no_
- `go loma` — _is this siSwati? ☐ yes  ☐ no_
- `go sa amogelege` — _is this siSwati? ☐ yes  ☐ no_
- `go sa amogelege ga dijo` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhaba` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhaba moento` — _is this siSwati? ☐ yes  ☐ no_
- `imbumba` — _is this siSwati? ☐ yes  ☐ no_
- `injection` — _is this siSwati? ☐ yes  ☐ no_
- `inspuiting` — _is this siSwati? ☐ yes  ☐ no_
- `kos` — _is this siSwati? ☐ yes  ☐ no_
- `lips swelling` — _is this siSwati? ☐ yes  ☐ no_
- `medication` — _is this siSwati? ☐ yes  ☐ no_
- `melemo` — _is this siSwati? ☐ yes  ☐ no_
- `melomo` — _is this siSwati? ☐ yes  ☐ no_
- `moento` — _is this siSwati? ☐ yes  ☐ no_
- `mokololo` — _is this siSwati? ☐ yes  ☐ no_
- `mpfundla` — _is this siSwati? ☐ yes  ☐ no_
- `nko` — _is this siSwati? ☐ yes  ☐ no_
- `nonyane` — _is this siSwati? ☐ yes  ☐ no_
- `nose` — _is this siSwati? ☐ yes  ☐ no_
- `nosi` — _is this siSwati? ☐ yes  ☐ no_
- `notši` — _is this siSwati? ☐ yes  ☐ no_
- `nut` — _is this siSwati? ☐ yes  ☐ no_
- `nyosi` — _is this siSwati? ☐ yes  ☐ no_
- `o a tswalega` — _is this siSwati? ☐ yes  ☐ no_
- `rurugile` — _is this siSwati? ☐ yes  ☐ no_
- `se rurugile` — _is this siSwati? ☐ yes  ☐ no_
- `sting` — _is this siSwati? ☐ yes  ☐ no_
- `swakudya` — _is this siSwati? ☐ yes  ☐ no_
- `throat closing` — _is this siSwati? ☐ yes  ☐ no_
- `throat swelling` — _is this siSwati? ☐ yes  ☐ no_
- `tswalega` — _is this siSwati? ☐ yes  ☐ no_
- `umjovo` — _is this siSwati? ☐ yes  ☐ no_
- `zwiliwa` — _is this siSwati? ☐ yes  ☐ no_
- `ṋovhela` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 16. `traumatic_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `blood everywhere` — _is this siSwati? ☐ yes  ☐ no_
- `blood pouring` — _is this siSwati? ☐ yes  ☐ no_
- `can't stop bleeding` — _is this siSwati? ☐ yes  ☐ no_
- `ingati ayinqamuki` — _is this siSwati? ☐ yes  ☐ no_
- `ingati iyampompoza` — _is this siSwati? ☐ yes  ☐ no_
- `madi a a elela` — _is this siSwati? ☐ yes  ☐ no_
- `madi a elela` — _is this siSwati? ☐ yes  ☐ no_
- `madi a elela thata` — _is this siSwati? ☐ yes  ☐ no_
- `madi a phatloga a tswa` — _is this siSwati? ☐ yes  ☐ no_
- `madi ga a eme` — _is this siSwati? ☐ yes  ☐ no_
- `madi go tletse gongwe le gongwe` — _is this siSwati? ☐ yes  ☐ no_
- `madi ha a eme` — _is this siSwati? ☐ yes  ☐ no_
- `ngati a yi yimi` — _is this siSwati? ☐ yes  ☐ no_
- `ngati yi humesa` — _is this siSwati? ☐ yes  ☐ no_
- `o hlabilwe` — _is this siSwati? ☐ yes  ☐ no_
- `o thuntswe e bile o dutla madi` — _is this siSwati? ☐ yes  ☐ no_
- `o tlhabilwe mme o dutla madi` — _is this siSwati? ☐ yes  ☐ no_
- `o ṱhavhiwa` — _is this siSwati? ☐ yes  ☐ no_
- `shot and bleeding` — _is this siSwati? ☐ yes  ☐ no_
- `spurting blood` — _is this siSwati? ☐ yes  ☐ no_
- `stabbed and bleeding` — _is this siSwati? ☐ yes  ☐ no_
- `u tlhabiwe` — _is this siSwati? ☐ yes  ☐ no_
- `udutshulwe` — _is this siSwati? ☐ yes  ☐ no_
- `udutyulwe` — _is this siSwati? ☐ yes  ☐ no_
- `ugwaziwe` — _is this siSwati? ☐ yes  ☐ no_
- `ugwazwe` — _is this siSwati? ☐ yes  ☐ no_
- `uhlabwe` — _is this siSwati? ☐ yes  ☐ no_
- `ukopha okunganqamuki` — _is this siSwati? ☐ yes  ☐ no_
- `uyopha kakhulu` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### ORANGE discriminators

#### ORANGE 1. `stroke_facial_droop`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `buso buyehla` — _is this siSwati? ☐ yes  ☐ no_
- `face drooping` — _is this siSwati? ☐ yes  ☐ no_
- `face dropped` — _is this siSwati? ☐ yes  ☐ no_
- `facial droop` — _is this siSwati? ☐ yes  ☐ no_
- `gesig hang` — _is this siSwati? ☐ yes  ☐ no_
- `gesig laat sak` — _is this siSwati? ☐ yes  ☐ no_
- `molomo o kgopame` — _is this siSwati? ☐ yes  ☐ no_
- `molomo o kgopiše` — _is this siSwati? ☐ yes  ☐ no_
- `molomo o kobegile` — _is this siSwati? ☐ yes  ☐ no_
- `mond skeef` — _is this siSwati? ☐ yes  ☐ no_
- `mouth twisted` — _is this siSwati? ☐ yes  ☐ no_
- `mulomo wo goba` — _is this siSwati? ☐ yes  ☐ no_
- `nomo wu gombile` — _is this siSwati? ☐ yes  ☐ no_
- `one side face` — _is this siSwati? ☐ yes  ☐ no_
- `skewe glimlag` — _is this siSwati? ☐ yes  ☐ no_
- `smile crooked` — _is this siSwati? ☐ yes  ☐ no_
- `tshifhaṱuwo tsho thela` — _is this siSwati? ☐ yes  ☐ no_
- `uneven face` — _is this siSwati? ☐ yes  ☐ no_
- `xikandza xi rhelerile` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 2. `stroke_arm_weakness`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `arm dropping` — _is this siSwati? ☐ yes  ☐ no_
- `arm gevoelloos` — _is this siSwati? ☐ yes  ☐ no_
- `arm is swak` — _is this siSwati? ☐ yes  ☐ no_
- `arm numb` — _is this siSwati? ☐ yes  ☐ no_
- `arm wat sak` — _is this siSwati? ☐ yes  ☐ no_
- `arm weakness` — _is this siSwati? ☐ yes  ☐ no_
- `armswakheid` — _is this siSwati? ☐ yes  ☐ no_
- `can't lift arm` — _is this siSwati? ☐ yes  ☐ no_
- `een arm is swak` — _is this siSwati? ☐ yes  ☐ no_
- `hand swak` — _is this siSwati? ☐ yes  ☐ no_
- `hand weak` — _is this siSwati? ☐ yes  ☐ no_
- `ingalo ayinyakazi` — _is this siSwati? ☐ yes  ☐ no_
- `ingalo ibhudlana` — _is this siSwati? ☐ yes  ☐ no_
- `ingalo ibuthathaka` — _is this siSwati? ☐ yes  ☐ no_
- `kan nie arm oplig` — _is this siSwati? ☐ yes  ☐ no_
- `left side weak` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo ga le tshikinyege` — _is this siSwati? ☐ yes  ☐ no_
- `letsogo ga le šikinyege` — _is this siSwati? ☐ yes  ☐ no_
- `letsoho ha le tshikinyehe` — _is this siSwati? ☐ yes  ☐ no_
- `one arm weak` — _is this siSwati? ☐ yes  ☐ no_
- `right side weak` — _is this siSwati? ☐ yes  ☐ no_
- `tshanḓa a tshi tshikinyei` — _is this siSwati? ☐ yes  ☐ no_
- `uhlangothi lubuthakathaka` — _is this siSwati? ☐ yes  ☐ no_
- `voko a ri tshikinyeki` — _is this siSwati? ☐ yes  ☐ no_
- `weakness one side` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 3. `stroke_speech`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `akukhulumeki` — _is this siSwati? ☐ yes  ☐ no_
- `amazwi akaphumi kakuhle` — _is this siSwati? ☐ yes  ☐ no_
- `amazwi awaphumi kahle` — _is this siSwati? ☐ yes  ☐ no_
- `can't find words` — _is this siSwati? ☐ yes  ☐ no_
- `can't speak properly` — _is this siSwati? ☐ yes  ☐ no_
- `confused talking` — _is this siSwati? ☐ yes  ☐ no_
- `emagama akaphumi kahle` — _is this siSwati? ☐ yes  ☐ no_
- `maipfi ha a ḓi bvi zwavhuḓi` — _is this siSwati? ☐ yes  ☐ no_
- `o bua ka tsela e e gakgamatsang` — _is this siSwati? ☐ yes  ☐ no_
- `o bua ka tsela e e sa tlwaelegang` — _is this siSwati? ☐ yes  ☐ no_
- `puo e a kgopama` — _is this siSwati? ☐ yes  ☐ no_
- `slurred speech` — _is this siSwati? ☐ yes  ☐ no_
- `speech slurred` — _is this siSwati? ☐ yes  ☐ no_
- `talking funny` — _is this siSwati? ☐ yes  ☐ no_
- `ukhuluma kanzima` — _is this siSwati? ☐ yes  ☐ no_
- `woorde kom nie uit` — _is this siSwati? ☐ yes  ☐ no_
- `words wrong` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 4. `thunderclap_headache`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `botlhoko jo bogolo thata jwa tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo sa tshwane le jo nkileng ka bo nna le jone` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso le ka bogale` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso mme bo le bogale` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo tlhaselang ka bonako jaaka ledimo` — _is this siSwati? ☐ yes  ☐ no_
- `explosive headache` — _is this siSwati? ☐ yes  ☐ no_
- `headache like never before` — _is this siSwati? ☐ yes  ☐ no_
- `ke botlhoko jo bogolo thata jwa tlhogo mo botshelong jwa me` — _is this siSwati? ☐ yes  ☐ no_
- `sudden severe headache` — _is this siSwati? ☐ yes  ☐ no_
- `thunderclap` — _is this siSwati? ☐ yes  ☐ no_
- `worst headache` — _is this siSwati? ☐ yes  ☐ no_
- `worst headache of my life` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 5. `post_ictal`
*STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages | POST-ICTAL — had a fit, now confused/drowsy — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `kutfutfumela kuphele`
- `ubanjwe`
- `udzakiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `akavuki` — _is this siSwati? ☐ yes  ☐ no_
- `confused` — _is this siSwati? ☐ yes  ☐ no_
- `drowsy` — _is this siSwati? ☐ yes  ☐ no_
- `finished fitting` — _is this siSwati? ☐ yes  ☐ no_
- `fit` — _is this siSwati? ☐ yes  ☐ no_
- `fit e emisitse` — _is this siSwati? ☐ yes  ☐ no_
- `fit stopped` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tlhapisiwa tsotlhe` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tsoge` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tsoge sentle` — _is this siSwati? ☐ yes  ☐ no_
- `go rotha go fedile` — _is this siSwati? ☐ yes  ☐ no_
- `had a seizure` — _is this siSwati? ☐ yes  ☐ no_
- `ho ratha ho fedile` — _is this siSwati? ☐ yes  ☐ no_
- `just fitted` — _is this siSwati? ☐ yes  ☐ no_
- `just had a fit` — _is this siSwati? ☐ yes  ☐ no_
- `ku rhurhumela ku hele` — _is this siSwati? ☐ yes  ☐ no_
- `not fully awake` — _is this siSwati? ☐ yes  ☐ no_
- `o a otsela` — _is this siSwati? ☐ yes  ☐ no_
- `o dzhendzhele` — _is this siSwati? ☐ yes  ☐ no_
- `o eḓela` — _is this siSwati? ☐ yes  ☐ no_
- `o fetsa go nna le sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `o kile a ratha` — _is this siSwati? ☐ yes  ☐ no_
- `o nnile le sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `o otsela` — _is this siSwati? ☐ yes  ☐ no_
- `o qetile go rotha` — _is this siSwati? ☐ yes  ☐ no_
- `o robetse` — _is this siSwati? ☐ yes  ☐ no_
- `o robetše` — _is this siSwati? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this siSwati? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `o tsogile morago ga sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `seizure stopped` — _is this siSwati? ☐ yes  ☐ no_
- `sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `sethoathoa se emisitse` — _is this siSwati? ☐ yes  ☐ no_
- `slaperig` — _is this siSwati? ☐ yes  ☐ no_
- `sleepy` — _is this siSwati? ☐ yes  ☐ no_
- `u dzhendzela ho fhela` — _is this siSwati? ☐ yes  ☐ no_
- `u rhurhumele` — _is this siSwati? ☐ yes  ☐ no_
- `undwazile` — _is this siSwati? ☐ yes  ☐ no_
- `uyozela` — _is this siSwati? ☐ yes  ☐ no_
- `verward` — _is this siSwati? ☐ yes  ☐ no_
- `woke up after fit` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 6. `severe_asthma`
*SEVERE ASTHMA — inhaler not working, can't speak*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `ayisebenzi`
- `ayisiti`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a i shumi` — _is this siSwati? ☐ yes  ☐ no_
- `a i thusi` — _is this siSwati? ☐ yes  ☐ no_
- `a yi pfuni` — _is this siSwati? ☐ yes  ☐ no_
- `a yi tirhi` — _is this siSwati? ☐ yes  ☐ no_
- `asma` — _is this siSwati? ☐ yes  ☐ no_
- `asthma` — _is this siSwati? ☐ yes  ☐ no_
- `ayincedi` — _is this siSwati? ☐ yes  ☐ no_
- `ayisizi` — _is this siSwati? ☐ yes  ☐ no_
- `can't speak` — _is this siSwati? ☐ yes  ☐ no_
- `can't talk` — _is this siSwati? ☐ yes  ☐ no_
- `can't walk` — _is this siSwati? ☐ yes  ☐ no_
- `exhausted` — _is this siSwati? ☐ yes  ☐ no_
- `ga e bereke` — _is this siSwati? ☐ yes  ☐ no_
- `ga e dire` — _is this siSwati? ☐ yes  ☐ no_
- `ga e thuse` — _is this siSwati? ☐ yes  ☐ no_
- `ga e thuše` — _is this siSwati? ☐ yes  ☐ no_
- `ga e šome` — _is this siSwati? ☐ yes  ☐ no_
- `getting worse` — _is this siSwati? ☐ yes  ☐ no_
- `go ntse go oketsega go maswe` — _is this siSwati? ☐ yes  ☐ no_
- `go ya go nna maswe le go feta` — _is this siSwati? ☐ yes  ☐ no_
- `ha e sebetse` — _is this siSwati? ☐ yes  ☐ no_
- `ha e thuse` — _is this siSwati? ☐ yes  ☐ no_
- `help nie` — _is this siSwati? ☐ yes  ☐ no_
- `inhaler` — _is this siSwati? ☐ yes  ☐ no_
- `inheila` — _is this siSwati? ☐ yes  ☐ no_
- `iphampu` — _is this siSwati? ☐ yes  ☐ no_
- `kan nie praat` — _is this siSwati? ☐ yes  ☐ no_
- `lips blue` — _is this siSwati? ☐ yes  ☐ no_
- `melomo e fetogile tala putswa` — _is this siSwati? ☐ yes  ☐ no_
- `nebulaisa` — _is this siSwati? ☐ yes  ☐ no_
- `nebuliser` — _is this siSwati? ☐ yes  ☐ no_
- `not helping` — _is this siSwati? ☐ yes  ☐ no_
- `not working` — _is this siSwati? ☐ yes  ☐ no_
- `o fetoga tala putswa` — _is this siSwati? ☐ yes  ☐ no_
- `o lapile thata` — _is this siSwati? ☐ yes  ☐ no_
- `pampu` — _is this siSwati? ☐ yes  ☐ no_
- `pompi` — _is this siSwati? ☐ yes  ☐ no_
- `pompo` — _is this siSwati? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this siSwati? ☐ yes  ☐ no_
- `pump` — _is this siSwati? ☐ yes  ☐ no_
- `sedirisiwa sa go thusa go hema` — _is this siSwati? ☐ yes  ☐ no_
- `tala putswa` — _is this siSwati? ☐ yes  ☐ no_
- `turning blue` — _is this siSwati? ☐ yes  ☐ no_
- `werk nie` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 7. `pre_eclampsia`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `buso buyavuvuka`
- `emehlo ayafifiyala`
- `emita`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `amehlo ayafifiala` — _is this siSwati? ☐ yes  ☐ no_
- `amehlo ayafifiyela` — _is this siSwati? ☐ yes  ☐ no_
- `blurred vision` — _is this siSwati? ☐ yes  ☐ no_
- `face swollen` — _is this siSwati? ☐ yes  ☐ no_
- `feet very swollen` — _is this siSwati? ☐ yes  ☐ no_
- `gesig geswel` — _is this siSwati? ☐ yes  ☐ no_
- `hands swollen` — _is this siSwati? ☐ yes  ☐ no_
- `headache` — _is this siSwati? ☐ yes  ☐ no_
- `hlogo` — _is this siSwati? ☐ yes  ☐ no_
- `hloho` — _is this siSwati? ☐ yes  ☐ no_
- `mahlo a fifala` — _is this siSwati? ☐ yes  ☐ no_
- `matlho a fifala` — _is this siSwati? ☐ yes  ☐ no_
- `ndo vhifha` — _is this siSwati? ☐ yes  ☐ no_
- `no urine` — _is this siSwati? ☐ yes  ☐ no_
- `o imile` — _is this siSwati? ☐ yes  ☐ no_
- `pain under ribs` — _is this siSwati? ☐ yes  ☐ no_
- `pregnant` — _is this siSwati? ☐ yes  ☐ no_
- `seeing stars` — _is this siSwati? ☐ yes  ☐ no_
- `swangari` — _is this siSwati? ☐ yes  ☐ no_
- `tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `ṱhoho` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 8. `ectopic_pregnancy`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a ka tswa a imile` — _is this siSwati? ☐ yes  ☐ no_
- `bogale` — _is this siSwati? ☐ yes  ☐ no_
- `bogolo thata` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko ba lehetla` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko bja legetla` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko bjo bogolo ka lehlakoreng le tee` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko bo boholo ka lehlakoreng le le leng` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko jo bogolo mo letlhakoreng le lengwe` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko jwa legetla` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogale` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa mojeng` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa molemeng` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa mojeng` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa molemeng` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka letlhakore le lengwe` — _is this siSwati? ☐ yes  ☐ no_
- `buhlungu lobukhulu ngelinye lihlangotsi` — _is this siSwati? ☐ yes  ☐ no_
- `could be pregnant` — _is this siSwati? ☐ yes  ☐ no_
- `erge pyn aan een kant` — _is this siSwati? ☐ yes  ☐ no_
- `fhungo ḽi vhavha` — _is this siSwati? ☐ yes  ☐ no_
- `ihlombe libuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `iperiod ilate` — _is this siSwati? ☐ yes  ☐ no_
- `iqatha libuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `isikhathi asifikanga` — _is this siSwati? ☐ yes  ☐ no_
- `kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `kgwedi ga e fihla` — _is this siSwati? ☐ yes  ☐ no_
- `kgwedi ga e tle` — _is this siSwati? ☐ yes  ☐ no_
- `kgwedi ha e fihle` — _is this siSwati? ☐ yes  ☐ no_
- `ku vava ka matimba hi tlhelo rin'we` — _is this siSwati? ☐ yes  ☐ no_
- `left side severe` — _is this siSwati? ☐ yes  ☐ no_
- `legare` — _is this siSwati? ☐ yes  ☐ no_
- `letlhakore` — _is this siSwati? ☐ yes  ☐ no_
- `lihlombe libuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `masiku a wu fiki` — _is this siSwati? ☐ yes  ☐ no_
- `missed period` — _is this siSwati? ☐ yes  ☐ no_
- `nako ga e fihla` — _is this siSwati? ☐ yes  ☐ no_
- `nako ga e tle` — _is this siSwati? ☐ yes  ☐ no_
- `nako ha e fihle` — _is this siSwati? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `nako ya kgwedi e diegile` — _is this siSwati? ☐ yes  ☐ no_
- `ngakwesobunxele ibuhlungu kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `nkarhi a wu fiki` — _is this siSwati? ☐ yes  ☐ no_
- `o fositse nako ya kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `period late` — _is this siSwati? ☐ yes  ☐ no_
- `pregnancy test positive` — _is this siSwati? ☐ yes  ☐ no_
- `right side severe` — _is this siSwati? ☐ yes  ☐ no_
- `rikatla ri vava` — _is this siSwati? ☐ yes  ☐ no_
- `severe pain one side` — _is this siSwati? ☐ yes  ☐ no_
- `sharp pain left side` — _is this siSwati? ☐ yes  ☐ no_
- `sharp pain right side` — _is this siSwati? ☐ yes  ☐ no_
- `shoulder pain` — _is this siSwati? ☐ yes  ☐ no_
- `shoulder tip pain` — _is this siSwati? ☐ yes  ☐ no_
- `sikhatsi asifikanga` — _is this siSwati? ☐ yes  ☐ no_
- `skerp pyn links` — _is this siSwati? ☐ yes  ☐ no_
- `skerp pyn regs` — _is this siSwati? ☐ yes  ☐ no_
- `skouer pyn` — _is this siSwati? ☐ yes  ☐ no_
- `teko ya boimana e bontsha gore o imile` — _is this siSwati? ☐ yes  ☐ no_
- `tip of shoulder` — _is this siSwati? ☐ yes  ☐ no_
- `tshifhinga a tshi ḓi` — _is this siSwati? ☐ yes  ☐ no_
- `vhutungu vhuhulu tshipiḓa tshithihi` — _is this siSwati? ☐ yes  ☐ no_
- `ṅwedzi a u ḓi` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 9. `febrile_seizure`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `umntfwana`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `baba` — _is this siSwati? ☐ yes  ☐ no_
- `baby` — _is this siSwati? ☐ yes  ☐ no_
- `banjwa` — _is this siSwati? ☐ yes  ☐ no_
- `child` — _is this siSwati? ☐ yes  ☐ no_
- `convulsion` — _is this siSwati? ☐ yes  ☐ no_
- `dzhendzela` — _is this siSwati? ☐ yes  ☐ no_
- `fever` — _is this siSwati? ☐ yes  ☐ no_
- `fit` — _is this siSwati? ☐ yes  ☐ no_
- `fitting` — _is this siSwati? ☐ yes  ☐ no_
- `go thothomela` — _is this siSwati? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this siSwati? ☐ yes  ☐ no_
- `hot` — _is this siSwati? ☐ yes  ☐ no_
- `infant` — _is this siSwati? ☐ yes  ☐ no_
- `kind` — _is this siSwati? ☐ yes  ☐ no_
- `kleuter` — _is this siSwati? ☐ yes  ☐ no_
- `mofikela` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this siSwati? ☐ yes  ☐ no_
- `nhanga` — _is this siSwati? ☐ yes  ☐ no_
- `nwana` — _is this siSwati? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `phoholo` — _is this siSwati? ☐ yes  ☐ no_
- `rhurhumela` — _is this siSwati? ☐ yes  ☐ no_
- `rotha` — _is this siSwati? ☐ yes  ☐ no_
- `seizure` — _is this siSwati? ☐ yes  ☐ no_
- `sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `shaking` — _is this siSwati? ☐ yes  ☐ no_
- `temperature` — _is this siSwati? ☐ yes  ☐ no_
- `temperatuur` — _is this siSwati? ☐ yes  ☐ no_
- `themperetšha` — _is this siSwati? ☐ yes  ☐ no_
- `thothomela` — _is this siSwati? ☐ yes  ☐ no_
- `thuthumela` — _is this siSwati? ☐ yes  ☐ no_
- `toddler` — _is this siSwati? ☐ yes  ☐ no_
- `umkhuhlane` — _is this siSwati? ☐ yes  ☐ no_
- `umntwana` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 10. `infant_sepsis_screen`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `imfiva`
- `umntfwana`
- `umntfwana lomncane`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `1 month old` — _is this siSwati? ☐ yes  ☐ no_
- `1 week old` — _is this siSwati? ☐ yes  ☐ no_
- `10 month` — _is this siSwati? ☐ yes  ☐ no_
- `11 month` — _is this siSwati? ☐ yes  ☐ no_
- `12 month` — _is this siSwati? ☐ yes  ☐ no_
- `13 month` — _is this siSwati? ☐ yes  ☐ no_
- `14 month` — _is this siSwati? ☐ yes  ☐ no_
- `15 month` — _is this siSwati? ☐ yes  ☐ no_
- `16 month` — _is this siSwati? ☐ yes  ☐ no_
- `17 month` — _is this siSwati? ☐ yes  ☐ no_
- `18 month` — _is this siSwati? ☐ yes  ☐ no_
- `19 month` — _is this siSwati? ☐ yes  ☐ no_
- `2 month` — _is this siSwati? ☐ yes  ☐ no_
- `2 week old` — _is this siSwati? ☐ yes  ☐ no_
- `20 month` — _is this siSwati? ☐ yes  ☐ no_
- `21 month` — _is this siSwati? ☐ yes  ☐ no_
- `22 month` — _is this siSwati? ☐ yes  ☐ no_
- `23 month` — _is this siSwati? ☐ yes  ☐ no_
- `3 month` — _is this siSwati? ☐ yes  ☐ no_
- `3 week old` — _is this siSwati? ☐ yes  ☐ no_
- `4 month` — _is this siSwati? ☐ yes  ☐ no_
- `4 week old` — _is this siSwati? ☐ yes  ☐ no_
- `5 month` — _is this siSwati? ☐ yes  ☐ no_
- `5 week old` — _is this siSwati? ☐ yes  ☐ no_
- `6 month` — _is this siSwati? ☐ yes  ☐ no_
- `6 week old` — _is this siSwati? ☐ yes  ☐ no_
- `7 month` — _is this siSwati? ☐ yes  ☐ no_
- `7 week old` — _is this siSwati? ☐ yes  ☐ no_
- `8 month` — _is this siSwati? ☐ yes  ☐ no_
- `8 week old` — _is this siSwati? ☐ yes  ☐ no_
- `9 month` — _is this siSwati? ☐ yes  ☐ no_
- `a nga dyi` — _is this siSwati? ☐ yes  ☐ no_
- `a nga fani na yena` — _is this siSwati? ☐ yes  ☐ no_
- `a nga nwi` — _is this siSwati? ☐ yes  ☐ no_
- `akafuni ubisi` — _is this siSwati? ☐ yes  ☐ no_
- `akasadli` — _is this siSwati? ☐ yes  ☐ no_
- `akasaphuzi` — _is this siSwati? ☐ yes  ☐ no_
- `akasayena` — _is this siSwati? ☐ yes  ☐ no_
- `akaziphilele` — _is this siSwati? ☐ yes  ☐ no_
- `altered behavior` — _is this siSwati? ☐ yes  ☐ no_
- `altered behaviour` — _is this siSwati? ☐ yes  ☐ no_
- `baba` — _is this siSwati? ☐ yes  ☐ no_
- `baby` — _is this siSwati? ☐ yes  ☐ no_
- `baie slaperig` — _is this siSwati? ☐ yes  ☐ no_
- `baie warm` — _is this siSwati? ☐ yes  ☐ no_
- `banjwa` — _is this siSwati? ☐ yes  ☐ no_
- `burning up` — _is this siSwati? ☐ yes  ☐ no_
- `child` — _is this siSwati? ☐ yes  ☐ no_
- `convulsion` — _is this siSwati? ☐ yes  ☐ no_
- `couple of months` — _is this siSwati? ☐ yes  ☐ no_
- `drink nie` — _is this siSwati? ☐ yes  ☐ no_
- `drowsy` — _is this siSwati? ☐ yes  ☐ no_
- `dzhendzela` — _is this siSwati? ☐ yes  ☐ no_
- `febrile_seizure` — _is this siSwati? ☐ yes  ☐ no_
- `fever` — _is this siSwati? ☐ yes  ☐ no_
- `few months old` — _is this siSwati? ☐ yes  ☐ no_
- `few weeks old` — _is this siSwati? ☐ yes  ☐ no_
- `fisa` — _is this siSwati? ☐ yes  ☐ no_
- `fit` — _is this siSwati? ☐ yes  ☐ no_
- `fitting` — _is this siSwati? ☐ yes  ☐ no_
- `floppy` — _is this siSwati? ☐ yes  ☐ no_
- `ga a je` — _is this siSwati? ☐ yes  ☐ no_
- `ga a nwe` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tshwane` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tshwane le ena` — _is this siSwati? ☐ yes  ☐ no_
- `go thothomela` — _is this siSwati? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this siSwati? ☐ yes  ☐ no_
- `ha a je` — _is this siSwati? ☐ yes  ☐ no_
- `ha a noe` — _is this siSwati? ☐ yes  ☐ no_
- `ha a nwa` — _is this siSwati? ☐ yes  ☐ no_
- `ha a tshwane le eena` — _is this siSwati? ☐ yes  ☐ no_
- `ha a ḽi` — _is this siSwati? ☐ yes  ☐ no_
- `ha fani na ene` — _is this siSwati? ☐ yes  ☐ no_
- `hard to wake` — _is this siSwati? ☐ yes  ☐ no_
- `high temperature` — _is this siSwati? ☐ yes  ☐ no_
- `ho fisa` — _is this siSwati? ☐ yes  ☐ no_
- `hot` — _is this siSwati? ☐ yes  ☐ no_
- `infant` — _is this siSwati? ☐ yes  ☐ no_
- `insana` — _is this siSwati? ☐ yes  ☐ no_
- `just lying there` — _is this siSwati? ☐ yes  ☐ no_
- `kind` — _is this siSwati? ☐ yes  ☐ no_
- `kleuter` — _is this siSwati? ☐ yes  ☐ no_
- `ku hisa` — _is this siSwati? ☐ yes  ☐ no_
- `lethargic` — _is this siSwati? ☐ yes  ☐ no_
- `limp` — _is this siSwati? ☐ yes  ☐ no_
- `mofikela` — _is this siSwati? ☐ yes  ☐ no_
- `my baby` — _is this siSwati? ☐ yes  ☐ no_
- `my infant` — _is this siSwati? ☐ yes  ☐ no_
- `my newborn` — _is this siSwati? ☐ yes  ☐ no_
- `newborn` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this siSwati? ☐ yes  ☐ no_
- `nhanga` — _is this siSwati? ☐ yes  ☐ no_
- `nie soos homself nie` — _is this siSwati? ☐ yes  ☐ no_
- `nie wakker te kry nie` — _is this siSwati? ☐ yes  ☐ no_
- `not breastfeeding` — _is this siSwati? ☐ yes  ☐ no_
- `not drinking` — _is this siSwati? ☐ yes  ☐ no_
- `not eating` — _is this siSwati? ☐ yes  ☐ no_
- `not feeding` — _is this siSwati? ☐ yes  ☐ no_
- `not herself` — _is this siSwati? ☐ yes  ☐ no_
- `not himself` — _is this siSwati? ☐ yes  ☐ no_
- `not latching` — _is this siSwati? ☐ yes  ☐ no_
- `not like her` — _is this siSwati? ☐ yes  ☐ no_
- `not like him` — _is this siSwati? ☐ yes  ☐ no_
- `not responsive` — _is this siSwati? ☐ yes  ☐ no_
- `nwana` — _is this siSwati? ☐ yes  ☐ no_
- `nwana lontsongo` — _is this siSwati? ☐ yes  ☐ no_
- `o robetse haholo` — _is this siSwati? ☐ yes  ☐ no_
- `o robetse thata` — _is this siSwati? ☐ yes  ☐ no_
- `o robile thata` — _is this siSwati? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `phoholo` — _is this siSwati? ☐ yes  ☐ no_
- `poor feeding` — _is this siSwati? ☐ yes  ☐ no_
- `refusing food` — _is this siSwati? ☐ yes  ☐ no_
- `refusing milk` — _is this siSwati? ☐ yes  ☐ no_
- `rhurhumela` — _is this siSwati? ☐ yes  ☐ no_
- `rotha` — _is this siSwati? ☐ yes  ☐ no_
- `seizure` — _is this siSwati? ☐ yes  ☐ no_
- `sethoathoa` — _is this siSwati? ☐ yes  ☐ no_
- `shaking` — _is this siSwati? ☐ yes  ☐ no_
- `slap` — _is this siSwati? ☐ yes  ☐ no_
- `sleepy` — _is this siSwati? ☐ yes  ☐ no_
- `temperature` — _is this siSwati? ☐ yes  ☐ no_
- `temperatuur` — _is this siSwati? ☐ yes  ☐ no_
- `themperetšha` — _is this siSwati? ☐ yes  ☐ no_
- `thothomela` — _is this siSwati? ☐ yes  ☐ no_
- `thuthumela` — _is this siSwati? ☐ yes  ☐ no_
- `toddler` — _is this siSwati? ☐ yes  ☐ no_
- `u etlela ngopfu` — _is this siSwati? ☐ yes  ☐ no_
- `u fhisa` — _is this siSwati? ☐ yes  ☐ no_
- `ufudumele` — _is this siSwati? ☐ yes  ☐ no_
- `umkhuhlane` — _is this siSwati? ☐ yes  ☐ no_
- `umntwana` — _is this siSwati? ☐ yes  ☐ no_
- `under 1 year` — _is this siSwati? ☐ yes  ☐ no_
- `under a year` — _is this siSwati? ☐ yes  ☐ no_
- `under one year` — _is this siSwati? ☐ yes  ☐ no_
- `unresponsive` — _is this siSwati? ☐ yes  ☐ no_
- `ushisa` — _is this siSwati? ☐ yes  ☐ no_
- `uyashisa` — _is this siSwati? ☐ yes  ☐ no_
- `very hot` — _is this siSwati? ☐ yes  ☐ no_
- `very sleepy` — _is this siSwati? ☐ yes  ☐ no_
- `wil nie drink nie` — _is this siSwati? ☐ yes  ☐ no_
- `wil nie eet nie` — _is this siSwati? ☐ yes  ☐ no_
- `won't breastfeed` — _is this siSwati? ☐ yes  ☐ no_
- `won't drink` — _is this siSwati? ☐ yes  ☐ no_
- `won't eat` — _is this siSwati? ☐ yes  ☐ no_
- `won't latch` — _is this siSwati? ☐ yes  ☐ no_
- `wont eat` — _is this siSwati? ☐ yes  ☐ no_
- `xitsongwana` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 11. `acute_confusion_chronic`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `ingati lephakeme`
- `sifo seshugela`
- `udzakiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a a tivi` — _is this siSwati? ☐ yes  ☐ no_
- `akati` — _is this siSwati? ☐ yes  ☐ no_
- `akazi` — _is this siSwati? ☐ yes  ☐ no_
- `arv` — _is this siSwati? ☐ yes  ☐ no_
- `confused` — _is this siSwati? ☐ yes  ☐ no_
- `deurmekaar` — _is this siSwati? ☐ yes  ☐ no_
- `diabetes` — _is this siSwati? ☐ yes  ☐ no_
- `diabetic` — _is this siSwati? ☐ yes  ☐ no_
- `doesn't know` — _is this siSwati? ☐ yes  ☐ no_
- `doesn't recognise` — _is this siSwati? ☐ yes  ☐ no_
- `ga a bue sentle` — _is this siSwati? ☐ yes  ☐ no_
- `ga a itse` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tlhaloganyege` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tsebe` — _is this siSwati? ☐ yes  ☐ no_
- `ha a tsebe` — _is this siSwati? ☐ yes  ☐ no_
- `ha a ḓivhi` — _is this siSwati? ☐ yes  ☐ no_
- `high blood` — _is this siSwati? ☐ yes  ☐ no_
- `hiv` — _is this siSwati? ☐ yes  ☐ no_
- `hypertension` — _is this siSwati? ☐ yes  ☐ no_
- `kgatelelo e e kwa godimo ya madi` — _is this siSwati? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this siSwati? ☐ yes  ☐ no_
- `maak nie sin` — _is this siSwati? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this siSwati? ☐ yes  ☐ no_
- `not making sense` — _is this siSwati? ☐ yes  ☐ no_
- `o bua dilo tse di sa utlwaleng` — _is this siSwati? ☐ yes  ☐ no_
- `o bua tsotlhe tsotlhe` — _is this siSwati? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this siSwati? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `sugar` — _is this siSwati? ☐ yes  ☐ no_
- `suiker` — _is this siSwati? ☐ yes  ☐ no_
- `sukiri` — _is this siSwati? ☐ yes  ☐ no_
- `talking nonsense` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 12. `head_trauma_loc`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages | HEAD TRAUMA + LOC — head injury + loss of consciousness or altered state. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a ndzi tsundzuki` — _is this siSwati? ☐ yes  ☐ no_
- `a thi humbuli` — _is this siSwati? ☐ yes  ☐ no_
- `andikhumbuli` — _is this siSwati? ☐ yes  ☐ no_
- `blacked out` — _is this siSwati? ☐ yes  ☐ no_
- `bump to head` — _is this siSwati? ☐ yes  ☐ no_
- `confused after` — _is this siSwati? ☐ yes  ☐ no_
- `deurmekaar na val` — _is this siSwati? ☐ yes  ☐ no_
- `fell and hit head` — _is this siSwati? ☐ yes  ☐ no_
- `ga ke gakologelwe` — _is this siSwati? ☐ yes  ☐ no_
- `ga ke gopole` — _is this siSwati? ☐ yes  ☐ no_
- `geheueverlies` — _is this siSwati? ☐ yes  ☐ no_
- `ha ke hopole` — _is this siSwati? ☐ yes  ☐ no_
- `head injury` — _is this siSwati? ☐ yes  ☐ no_
- `head trauma` — _is this siSwati? ☐ yes  ☐ no_
- `hit head` — _is this siSwati? ☐ yes  ☐ no_
- `ke didimatse morago` — _is this siSwati? ☐ yes  ☐ no_
- `ke didimetse ka morao` — _is this siSwati? ☐ yes  ☐ no_
- `ke didimetse morago` — _is this siSwati? ☐ yes  ☐ no_
- `ke idibetse` — _is this siSwati? ☐ yes  ☐ no_
- `ke itshedisitse` — _is this siSwati? ☐ yes  ☐ no_
- `ke ngwele ka hlogo` — _is this siSwati? ☐ yes  ☐ no_
- `ke oele hlohong` — _is this siSwati? ☐ yes  ☐ no_
- `ke ole ka tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `knocked head` — _is this siSwati? ☐ yes  ☐ no_
- `knocked out` — _is this siSwati? ☐ yes  ☐ no_
- `lost consciousness` — _is this siSwati? ☐ yes  ☐ no_
- `memory loss` — _is this siSwati? ☐ yes  ☐ no_
- `ndidideke emva` — _is this siSwati? ☐ yes  ☐ no_
- `ndiquleke` — _is this siSwati? ☐ yes  ☐ no_
- `ndiwe phantsi` — _is this siSwati? ☐ yes  ☐ no_
- `ndo wa nda vhaisa ṱhoho` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi didimele endzhaku` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi wile ndzi dumba nhloko` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi wisile` — _is this siSwati? ☐ yes  ☐ no_
- `ngashona` — _is this siSwati? ☐ yes  ☐ no_
- `passed out` — _is this siSwati? ☐ yes  ☐ no_
- `unconscious` — _is this siSwati? ☐ yes  ☐ no_
- `vomiting after` — _is this siSwati? ☐ yes  ☐ no_
- `woke up confused` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 13. `open_fracture`
*OPEN FRACTURE — bone visible through skin. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `libhanti liphuma esikhumbeni`
- `libhanti liyabonakala`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `been uit vel` — _is this siSwati? ☐ yes  ☐ no_
- `bone sticking out` — _is this siSwati? ☐ yes  ☐ no_
- `bone through skin` — _is this siSwati? ☐ yes  ☐ no_
- `bone visible` — _is this siSwati? ☐ yes  ☐ no_
- `can see bone` — _is this siSwati? ☐ yes  ☐ no_
- `ithambo liphukile liphumele ngaphandle` — _is this siSwati? ☐ yes  ☐ no_
- `lerapo le robegile le tswa` — _is this siSwati? ☐ yes  ☐ no_
- `lerapo le robegile le tšwa` — _is this siSwati? ☐ yes  ☐ no_
- `lesapo le robehile le tsoa` — _is this siSwati? ☐ yes  ☐ no_
- `open fracture` — _is this siSwati? ☐ yes  ☐ no_
- `rhambu ri tshovekile ri huma` — _is this siSwati? ☐ yes  ☐ no_
- `ḽitambo ḽo ṱhukhukana ḽi bva` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 14. `high_energy_mechanism`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `car accident` — _is this siSwati? ☐ yes  ☐ no_
- `crush injury` — _is this siSwati? ☐ yes  ☐ no_
- `fell from height` — _is this siSwati? ☐ yes  ☐ no_
- `fell from ladder` — _is this siSwati? ☐ yes  ☐ no_
- `fell from roof` — _is this siSwati? ☐ yes  ☐ no_
- `geval van leer` — _is this siSwati? ☐ yes  ☐ no_
- `hit by car` — _is this siSwati? ☐ yes  ☐ no_
- `industrial accident` — _is this siSwati? ☐ yes  ☐ no_
- `ke oele le lereng` — _is this siSwati? ☐ yes  ☐ no_
- `ke wele le lereng` — _is this siSwati? ☐ yes  ☐ no_
- `motor accident` — _is this siSwati? ☐ yes  ☐ no_
- `motorcycle accident` — _is this siSwati? ☐ yes  ☐ no_
- `mvc` — _is this siSwati? ☐ yes  ☐ no_
- `ndiwe eluphahleni` — _is this siSwati? ☐ yes  ☐ no_
- `ndiwile phezulu` — _is this siSwati? ☐ yes  ☐ no_
- `ndo wa kha lere` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi wile eka lere` — _is this siSwati? ☐ yes  ☐ no_
- `ngwele le lereng` — _is this siSwati? ☐ yes  ☐ no_
- `raakgery deur motor` — _is this siSwati? ☐ yes  ☐ no_
- `struck by vehicle` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 15. `burns_significant`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `ushile`
- `ushiselwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `airways` — _is this siSwati? ☐ yes  ☐ no_
- `around neck` — _is this siSwati? ☐ yes  ☐ no_
- `asemweë` — _is this siSwati? ☐ yes  ☐ no_
- `breathing problems` — _is this siSwati? ☐ yes  ☐ no_
- `burn` — _is this siSwati? ☐ yes  ☐ no_
- `burned` — _is this siSwati? ☐ yes  ☐ no_
- `burnt` — _is this siSwati? ☐ yes  ☐ no_
- `buso` — _is this siSwati? ☐ yes  ☐ no_
- `diatla le matsogo` — _is this siSwati? ☐ yes  ☐ no_
- `emqaleni` — _is this siSwati? ☐ yes  ☐ no_
- `entanyeni` — _is this siSwati? ☐ yes  ☐ no_
- `face` — _is this siSwati? ☐ yes  ☐ no_
- `gesig` — _is this siSwati? ☐ yes  ☐ no_
- `go hema` — _is this siSwati? ☐ yes  ☐ no_
- `groot area` — _is this siSwati? ☐ yes  ☐ no_
- `hande en arms` — _is this siSwati? ☐ yes  ☐ no_
- `hands and arms` — _is this siSwati? ☐ yes  ☐ no_
- `ho hema` — _is this siSwati? ☐ yes  ☐ no_
- `indawo enkhulu` — _is this siSwati? ☐ yes  ☐ no_
- `indawo enkulu` — _is this siSwati? ☐ yes  ☐ no_
- `indzawo lenkhulu` — _is this siSwati? ☐ yes  ☐ no_
- `inhaled smoke` — _is this siSwati? ☐ yes  ☐ no_
- `intamo` — _is this siSwati? ☐ yes  ☐ no_
- `intsamo` — _is this siSwati? ☐ yes  ☐ no_
- `intsizi` — _is this siSwati? ☐ yes  ☐ no_
- `izandla nezingalo` — _is this siSwati? ☐ yes  ☐ no_
- `ku hefemula` — _is this siSwati? ☐ yes  ☐ no_
- `large area` — _is this siSwati? ☐ yes  ☐ no_
- `matsoho le maoto` — _is this siSwati? ☐ yes  ☐ no_
- `mavoko ni marhambu` — _is this siSwati? ☐ yes  ☐ no_
- `molaleng` — _is this siSwati? ☐ yes  ☐ no_
- `mosi o hemetsweng` — _is this siSwati? ☐ yes  ☐ no_
- `musi o hemelwago` — _is this siSwati? ☐ yes  ☐ no_
- `ndhawu yo kula` — _is this siSwati? ☐ yes  ☐ no_
- `nkolo` — _is this siSwati? ☐ yes  ☐ no_
- `o chesitse` — _is this siSwati? ☐ yes  ☐ no_
- `o fisitswe` — _is this siSwati? ☐ yes  ☐ no_
- `o tshiwa` — _is this siSwati? ☐ yes  ☐ no_
- `o tsholetsoe` — _is this siSwati? ☐ yes  ☐ no_
- `om nek` — _is this siSwati? ☐ yes  ☐ no_
- `rook ingeasem` — _is this siSwati? ☐ yes  ☐ no_
- `scald` — _is this siSwati? ☐ yes  ☐ no_
- `sebaka se segolo` — _is this siSwati? ☐ yes  ☐ no_
- `sebaka se seholo` — _is this siSwati? ☐ yes  ☐ no_
- `sefahlego` — _is this siSwati? ☐ yes  ☐ no_
- `sefahleho` — _is this siSwati? ☐ yes  ☐ no_
- `shango ḽihulu` — _is this siSwati? ☐ yes  ☐ no_
- `singed eyebrows` — _is this siSwati? ☐ yes  ☐ no_
- `singed hair` — _is this siSwati? ☐ yes  ☐ no_
- `tandla nemigalo` — _is this siSwati? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this siSwati? ☐ yes  ☐ no_
- `u femba` — _is this siSwati? ☐ yes  ☐ no_
- `u hisile` — _is this siSwati? ☐ yes  ☐ no_
- `u pfile` — _is this siSwati? ☐ yes  ☐ no_
- `umqala` — _is this siSwati? ☐ yes  ☐ no_
- `ushisiwe` — _is this siSwati? ☐ yes  ☐ no_
- `ushiswe` — _is this siSwati? ☐ yes  ☐ no_
- `utshile` — _is this siSwati? ☐ yes  ☐ no_
- `utshisiwe` — _is this siSwati? ☐ yes  ☐ no_
- `vhunga ho funzeleaho` — _is this siSwati? ☐ yes  ☐ no_
- `xikandza` — _is this siSwati? ☐ yes  ☐ no_
- `zwanda na zwanḓa` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 16. `burns`
*HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `amanzi ashisayo` — _is this siSwati? ☐ yes  ☐ no_
- `isikhumba` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 17. `acute_abdomen`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `sisu asiphatseki`
- `sisu sishibalala njengelibhodi`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `buhlungu besisu lobukhulu` — _is this siSwati? ☐ yes  ☐ no_
- `can't touch stomach` — _is this siSwati? ☐ yes  ☐ no_
- `ha ke tshwarelle mpa` — _is this siSwati? ☐ yes  ☐ no_
- `iintlungu zesisu ezinkulu` — _is this siSwati? ☐ yes  ☐ no_
- `kan nie maag raak nie` — _is this siSwati? ☐ yes  ☐ no_
- `khwiri a ri kombetelekiki` — _is this siSwati? ☐ yes  ☐ no_
- `lumbu ḽa sa fara` — _is this siSwati? ☐ yes  ☐ no_
- `mpa e sa swarega` — _is this siSwati? ☐ yes  ☐ no_
- `mpa ga e swarege` — _is this siSwati? ☐ yes  ☐ no_
- `rigid stomach` — _is this siSwati? ☐ yes  ☐ no_
- `severe stomach pain can't move` — _is this siSwati? ☐ yes  ☐ no_
- `stomach hard as a board` — _is this siSwati? ☐ yes  ☐ no_
- `worst stomach pain ever` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 18. `psychiatric_emergency_imminent`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `about to hurt myself` — _is this siSwati? ☐ yes  ☐ no_
- `gesny aan polse` — _is this siSwati? ☐ yes  ☐ no_
- `going to kill myself` — _is this siSwati? ☐ yes  ☐ no_
- `ke ikgokile ka thapo` — _is this siSwati? ☐ yes  ☐ no_
- `ke ipofile ka thapo` — _is this siSwati? ☐ yes  ☐ no_
- `ke ithekeletse ka thapo` — _is this siSwati? ☐ yes  ☐ no_
- `ndiyazibulala ngoku` — _is this siSwati? ☐ yes  ☐ no_
- `ndizikhokele intambo` — _is this siSwati? ☐ yes  ☐ no_
- `ndizisikile ezihlakaleni` — _is this siSwati? ☐ yes  ☐ no_
- `ndo ḓirwa nga thambo` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi tipfalile hi tintambo` — _is this siSwati? ☐ yes  ☐ no_
- `overdosed` — _is this siSwati? ☐ yes  ☐ no_
- `swallowed pills on purpose` — _is this siSwati? ☐ yes  ☐ no_
- `taking tablets now` — _is this siSwati? ☐ yes  ☐ no_
- `te veel pille gedrink` — _is this siSwati? ☐ yes  ☐ no_
- `took pills to die` — _is this siSwati? ☐ yes  ☐ no_
- `tried to cut wrists` — _is this siSwati? ☐ yes  ☐ no_
- `tried to hang` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 19. `severe_hypoglycaemia`
*(nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages. | SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `shukela iphantsi kakhulu`
- `shukela iwile`
- `udzakiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `aggressief` — _is this siSwati? ☐ yes  ☐ no_
- `aggressive` — _is this siSwati? ☐ yes  ☐ no_
- `akaphenduli` — _is this siSwati? ☐ yes  ☐ no_
- `akavuki` — _is this siSwati? ☐ yes  ☐ no_
- `bjalwa bja dipilisi bo wele` — _is this siSwati? ☐ yes  ☐ no_
- `blood sugar crashed` — _is this siSwati? ☐ yes  ☐ no_
- `collapsed` — _is this siSwati? ☐ yes  ☐ no_
- `confused` — _is this siSwati? ☐ yes  ☐ no_
- `deurmekaar` — _is this siSwati? ☐ yes  ☐ no_
- `fitting` — _is this siSwati? ☐ yes  ☐ no_
- `glucose very low` — _is this siSwati? ☐ yes  ☐ no_
- `ha a arabe` — _is this siSwati? ☐ yes  ☐ no_
- `hypo` — _is this siSwati? ☐ yes  ☐ no_
- `iglucose iphansi` — _is this siSwati? ☐ yes  ☐ no_
- `not responding` — _is this siSwati? ☐ yes  ☐ no_
- `o a ratha` — _is this siSwati? ☐ yes  ☐ no_
- `o wa` — _is this siSwati? ☐ yes  ☐ no_
- `o wele` — _is this siSwati? ☐ yes  ☐ no_
- `sugar dropped` — _is this siSwati? ☐ yes  ☐ no_
- `sugar very low` — _is this siSwati? ☐ yes  ☐ no_
- `suiker het geval` — _is this siSwati? ☐ yes  ☐ no_
- `swigiri tsho wela` — _is this siSwati? ☐ yes  ☐ no_
- `swikiri swi wile` — _is this siSwati? ☐ yes  ☐ no_
- `tsoekere e wele` — _is this siSwati? ☐ yes  ☐ no_
- `u wile` — _is this siSwati? ☐ yes  ☐ no_
- `unconscious` — _is this siSwati? ☐ yes  ☐ no_
- `uquleke` — _is this siSwati? ☐ yes  ☐ no_
- `uyabanjwa` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 20. `preterm_labour`
*SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `emita`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `28 weeks` — _is this siSwati? ☐ yes  ☐ no_
- `30 weeks` — _is this siSwati? ☐ yes  ☐ no_
- `32 weeks` — _is this siSwati? ☐ yes  ☐ no_
- `34 weeks` — _is this siSwati? ☐ yes  ☐ no_
- `5 months` — _is this siSwati? ☐ yes  ☐ no_
- `6 months` — _is this siSwati? ☐ yes  ☐ no_
- `7 months` — _is this siSwati? ☐ yes  ☐ no_
- `bag of water broke` — _is this siSwati? ☐ yes  ☐ no_
- `boimana` — _is this siSwati? ☐ yes  ☐ no_
- `contractions` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this siSwati? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this siSwati? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this siSwati? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this siSwati? ☐ yes  ☐ no_
- `ditlhabi` — _is this siSwati? ☐ yes  ☐ no_
- `ditlhabi tsa go belega` — _is this siSwati? ☐ yes  ☐ no_
- `early` — _is this siSwati? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this siSwati? ☐ yes  ☐ no_
- `go belega` — _is this siSwati? ☐ yes  ☐ no_
- `labour` — _is this siSwati? ☐ yes  ☐ no_
- `maande` — _is this siSwati? ☐ yes  ☐ no_
- `metsi a popelo` — _is this siSwati? ☐ yes  ☐ no_
- `metsi a popelo a phatlogile` — _is this siSwati? ☐ yes  ☐ no_
- `not due yet` — _is this siSwati? ☐ yes  ☐ no_
- `o imile` — _is this siSwati? ☐ yes  ☐ no_
- `pains` — _is this siSwati? ☐ yes  ☐ no_
- `pele ga nako` — _is this siSwati? ☐ yes  ☐ no_
- `phatlogile` — _is this siSwati? ☐ yes  ☐ no_
- `pregnant` — _is this siSwati? ☐ yes  ☐ no_
- `premature` — _is this siSwati? ☐ yes  ☐ no_
- `swangari` — _is this siSwati? ☐ yes  ☐ no_
- `too early` — _is this siSwati? ☐ yes  ☐ no_
- `waters broke` — _is this siSwati? ☐ yes  ☐ no_
- `weke` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 21. `hiv_meningism`
*hiv_meningism*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `ayisebenzi`
- `imfiva`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `ache` — _is this siSwati? ☐ yes  ☐ no_
- `arv` — _is this siSwati? ☐ yes  ☐ no_
- `asma` — _is this siSwati? ☐ yes  ☐ no_
- `asthma` — _is this siSwati? ☐ yes  ☐ no_
- `asthma_inhaler_failure` — _is this siSwati? ☐ yes  ☐ no_
- `ayisizi` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `can't bend` — _is this siSwati? ☐ yes  ☐ no_
- `can't move` — _is this siSwati? ☐ yes  ☐ no_
- `cannot bend` — _is this siSwati? ☐ yes  ☐ no_
- `cant bend` — _is this siSwati? ☐ yes  ☐ no_
- `cant move` — _is this siSwati? ☐ yes  ☐ no_
- `eqinileyo` — _is this siSwati? ☐ yes  ☐ no_
- `fever` — _is this siSwati? ☐ yes  ☐ no_
- `fisa` — _is this siSwati? ☐ yes  ☐ no_
- `ga e dire` — _is this siSwati? ☐ yes  ☐ no_
- `ga e thuse` — _is this siSwati? ☐ yes  ☐ no_
- `go hema` — _is this siSwati? ☐ yes  ☐ no_
- `high temperature` — _is this siSwati? ☐ yes  ☐ no_
- `hiv disease` — _is this siSwati? ☐ yes  ☐ no_
- `hiv positive` — _is this siSwati? ☐ yes  ☐ no_
- `hiv+` — _is this siSwati? ☐ yes  ☐ no_
- `ho fisa` — _is this siSwati? ☐ yes  ☐ no_
- `hot` — _is this siSwati? ☐ yes  ☐ no_
- `hurts` — _is this siSwati? ☐ yes  ☐ no_
- `ibuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `icinile` — _is this siSwati? ☐ yes  ☐ no_
- `inhaler` — _is this siSwati? ☐ yes  ☐ no_
- `intamo` — _is this siSwati? ☐ yes  ☐ no_
- `intsamo` — _is this siSwati? ☐ yes  ☐ no_
- `isifo sofuba` — _is this siSwati? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this siSwati? ☐ yes  ☐ no_
- `molala` — _is this siSwati? ☐ yes  ☐ no_
- `mulala` — _is this siSwati? ☐ yes  ☐ no_
- `neck` — _is this siSwati? ☐ yes  ☐ no_
- `need more puffs` — _is this siSwati? ☐ yes  ☐ no_
- `nek` — _is this siSwati? ☐ yes  ☐ no_
- `nkulo` — _is this siSwati? ☐ yes  ☐ no_
- `not helping` — _is this siSwati? ☐ yes  ☐ no_
- `not working` — _is this siSwati? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this siSwati? ☐ yes  ☐ no_
- `omela` — _is this siSwati? ☐ yes  ☐ no_
- `on arvs` — _is this siSwati? ☐ yes  ☐ no_
- `pain` — _is this siSwati? ☐ yes  ☐ no_
- `pompo` — _is this siSwati? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this siSwati? ☐ yes  ☐ no_
- `pump` — _is this siSwati? ☐ yes  ☐ no_
- `qinile` — _is this siSwati? ☐ yes  ☐ no_
- `rigid` — _is this siSwati? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this siSwati? ☐ yes  ☐ no_
- `shivering` — _is this siSwati? ☐ yes  ☐ no_
- `sore` — _is this siSwati? ☐ yes  ☐ no_
- `stiff` — _is this siSwati? ☐ yes  ☐ no_
- `still struggling` — _is this siSwati? ☐ yes  ☐ no_
- `styf` — _is this siSwati? ☐ yes  ☐ no_
- `stywe` — _is this siSwati? ☐ yes  ☐ no_
- `taking arvs` — _is this siSwati? ☐ yes  ☐ no_
- `temperature` — _is this siSwati? ☐ yes  ☐ no_
- `thata` — _is this siSwati? ☐ yes  ☐ no_
- `tiyile` — _is this siSwati? ☐ yes  ☐ no_
- `ufuba` — _is this siSwati? ☐ yes  ☐ no_
- `ufudumele` — _is this siSwati? ☐ yes  ☐ no_
- `umkhuhlane` — _is this siSwati? ☐ yes  ☐ no_
- `umnqala` — _is this siSwati? ☐ yes  ☐ no_
- `uyashisa` — _is this siSwati? ☐ yes  ☐ no_
- `vava` — _is this siSwati? ☐ yes  ☐ no_
- `vuvha` — _is this siSwati? ☐ yes  ☐ no_
- `womelele` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 22. `acute_confusion_dm`
*Afrikaans-only inline check to cover Zulu via DCSL arrays | (review batch 2026-04-29). Closes a coverage gap for the | largest SA language group on a clinically-important rule | (DKA/severe hypoglycaemia presents with confusion).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `deurmekaar` — _is this siSwati? ☐ yes  ☐ no_
- `diabete` — _is this siSwati? ☐ yes  ☐ no_
- `ga go tlhaloganyege` — _is this siSwati? ☐ yes  ☐ no_
- `isifo seswekile` — _is this siSwati? ☐ yes  ☐ no_
- `maak nie sin` — _is this siSwati? ☐ yes  ☐ no_
- `suiker` — _is this siSwati? ☐ yes  ☐ no_
- `sukiri` — _is this siSwati? ☐ yes  ☐ no_
- `tlhakatlhakane` — _is this siSwati? ☐ yes  ☐ no_
- `tswakane` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### YELLOW discriminators

#### YELLOW 1. `severe_pain`
*── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `bohloko bo bogolo` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko bo boholo` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko bo montsi thata` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bo masisi (10/10` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata go feta tsotlhe` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bo sa itshokelweng` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jo bogolo` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko ke 10` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko ke 8` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko ke 9` — _is this siSwati? ☐ yes  ☐ no_
- `can't stand the pain` — _is this siSwati? ☐ yes  ☐ no_
- `excruciating` — _is this siSwati? ☐ yes  ☐ no_
- `go goa ka ntlha ya botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `ke a lela ka botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `ke a lla ka bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `ndi na vuvha vuhulu` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi le vuhlungwini lebyi kuleke` — _is this siSwati? ☐ yes  ☐ no_
- `pain 10/10` — _is this siSwati? ☐ yes  ☐ no_
- `pain 8/10` — _is this siSwati? ☐ yes  ☐ no_
- `pain 9/10` — _is this siSwati? ☐ yes  ☐ no_
- `pain is 10` — _is this siSwati? ☐ yes  ☐ no_
- `pain is 8` — _is this siSwati? ☐ yes  ☐ no_
- `pain is 9` — _is this siSwati? ☐ yes  ☐ no_
- `pain too much` — _is this siSwati? ☐ yes  ☐ no_
- `screaming in pain` — _is this siSwati? ☐ yes  ☐ no_
- `seer baie` — _is this siSwati? ☐ yes  ☐ no_
- `severe pain` — _is this siSwati? ☐ yes  ☐ no_
- `unbearable pain` — _is this siSwati? ☐ yes  ☐ no_
- `vuhlungu lebyi kuleke` — _is this siSwati? ☐ yes  ☐ no_
- `vuvha vuhulu` — _is this siSwati? ☐ yes  ☐ no_
- `worst pain` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 2. `suicidal_ideation`
*nr | ── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `a ndzi sa lavi ku hanya` — _is this siSwati? ☐ yes  ☐ no_
- `a thi tsha ṱoḓa u tshila` — _is this siSwati? ☐ yes  ☐ no_
- `andisafuni kuphila` — _is this siSwati? ☐ yes  ☐ no_
- `cutting myself` — _is this siSwati? ☐ yes  ☐ no_
- `don't want to live` — _is this siSwati? ☐ yes  ☐ no_
- `ga ke sa batle go tshela` — _is this siSwati? ☐ yes  ☐ no_
- `ga ke sa nyake go phela` — _is this siSwati? ☐ yes  ☐ no_
- `go akanya ka go fedisa botshelo` — _is this siSwati? ☐ yes  ☐ no_
- `go intsha kotsi ka boomo` — _is this siSwati? ☐ yes  ☐ no_
- `ha ke sa batle ho phela` — _is this siSwati? ☐ yes  ☐ no_
- `hurting myself` — _is this siSwati? ☐ yes  ☐ no_
- `ke batla go ipolaya` — _is this siSwati? ☐ yes  ☐ no_
- `ke batla ho ipolaya` — _is this siSwati? ☐ yes  ☐ no_
- `ke nyaka go ipolaya` — _is this siSwati? ☐ yes  ☐ no_
- `na le megopolo ya go ipolaya` — _is this siSwati? ☐ yes  ☐ no_
- `ndi ṱoḓa u ḓivhulaha` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi lava ku tirhisa` — _is this siSwati? ☐ yes  ☐ no_
- `no reason to live` — _is this siSwati? ☐ yes  ☐ no_
- `self-harm` — _is this siSwati? ☐ yes  ☐ no_
- `suicidal` — _is this siSwati? ☐ yes  ☐ no_
- `suicide` — _is this siSwati? ☐ yes  ☐ no_
- `thinking of ending` — _is this siSwati? ☐ yes  ☐ no_
- `want to kill myself` — _is this siSwati? ☐ yes  ☐ no_
- `wil doodgaan` — _is this siSwati? ☐ yes  ☐ no_
- `wil nie meer leef` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 3. `abuse_assault`
*nr | GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `abused` — _is this siSwati? ☐ yes  ☐ no_
- `assaulted` — _is this siSwati? ☐ yes  ☐ no_
- `attacked` — _is this siSwati? ☐ yes  ☐ no_
- `beaten badly` — _is this siSwati? ☐ yes  ☐ no_
- `child abuse` — _is this siSwati? ☐ yes  ☐ no_
- `domestic violence` — _is this siSwati? ☐ yes  ☐ no_
- `go itewa thata` — _is this siSwati? ☐ yes  ☐ no_
- `go sotliwa` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhaselwa` — _is this siSwati? ☐ yes  ☐ no_
- `go tshwarwa makgwakgwa` — _is this siSwati? ☐ yes  ☐ no_
- `huishoudelike geweld` — _is this siSwati? ☐ yes  ☐ no_
- `husband beat me` — _is this siSwati? ☐ yes  ☐ no_
- `indoda yam indibethile` — _is this siSwati? ☐ yes  ☐ no_
- `ke betilwe` — _is this siSwati? ☐ yes  ☐ no_
- `ke otlilwe` — _is this siSwati? ☐ yes  ☐ no_
- `ke otloilwe` — _is this siSwati? ☐ yes  ☐ no_
- `monna wa ka o ntlhabile` — _is this siSwati? ☐ yes  ☐ no_
- `monna wa ka o ntshabile` — _is this siSwati? ☐ yes  ☐ no_
- `monna wa me o ntlhabile` — _is this siSwati? ☐ yes  ☐ no_
- `munna wanga o nrwa` — _is this siSwati? ☐ yes  ☐ no_
- `ndo rwiwa` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi bitiwe` — _is this siSwati? ☐ yes  ☐ no_
- `nuna wa mina u ndzi bile` — _is this siSwati? ☐ yes  ☐ no_
- `o nteetse` — _is this siSwati? ☐ yes  ☐ no_
- `partner hit me` — _is this siSwati? ☐ yes  ☐ no_
- `tirisodikgoka` — _is this siSwati? ☐ yes  ☐ no_
- `tirisodikgoka mo lelapeng` — _is this siSwati? ☐ yes  ☐ no_
- `tshotlego ya bana` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 4. `pyelonephritis`
*GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `back pain` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko emhamben` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko mmogong` — _is this siSwati? ☐ yes  ☐ no_
- `bohloko mokokotlong` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa diphio` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa mokwatla` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko mo lethekeng` — _is this siSwati? ☐ yes  ☐ no_
- `burning urine` — _is this siSwati? ☐ yes  ☐ no_
- `chills` — _is this siSwati? ☐ yes  ☐ no_
- `diphio` — _is this siSwati? ☐ yes  ☐ no_
- `fa o rota` — _is this siSwati? ☐ yes  ☐ no_
- `feberu` — _is this siSwati? ☐ yes  ☐ no_
- `fever` — _is this siSwati? ☐ yes  ☐ no_
- `frequency` — _is this siSwati? ☐ yes  ☐ no_
- `go rota kgapetsakgapetsa` — _is this siSwati? ☐ yes  ☐ no_
- `go sha fa ke ntsha metsi` — _is this siSwati? ☐ yes  ☐ no_
- `go sha ge ke ntsha meetse` — _is this siSwati? ☐ yes  ☐ no_
- `go swela ge ke ntsha meetse` — _is this siSwati? ☐ yes  ☐ no_
- `go thothomela` — _is this siSwati? ☐ yes  ☐ no_
- `go thothomela ka ntlha ya feberu` — _is this siSwati? ☐ yes  ☐ no_
- `go thothomela thata` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhatsa` — _is this siSwati? ☐ yes  ☐ no_
- `go tshwara go bohloko loko ke ntsha meetse` — _is this siSwati? ☐ yes  ☐ no_
- `go tsidifala` — _is this siSwati? ☐ yes  ☐ no_
- `ho bohloko ha ke ntsha metsi` — _is this siSwati? ☐ yes  ☐ no_
- `ho sha ha ke ntsha metsi` — _is this siSwati? ☐ yes  ☐ no_
- `kidney pain` — _is this siSwati? ☐ yes  ☐ no_
- `ku bohloko loko ndzi sila` — _is this siSwati? ☐ yes  ☐ no_
- `ku hisa loko ndzi sila manzi` — _is this siSwati? ☐ yes  ☐ no_
- `kusha emchamweni` — _is this siSwati? ☐ yes  ☐ no_
- `kushisa emchamweni` — _is this siSwati? ☐ yes  ☐ no_
- `kushisa umchamo` — _is this siSwati? ☐ yes  ☐ no_
- `letheka` — _is this siSwati? ☐ yes  ☐ no_
- `loin pain` — _is this siSwati? ☐ yes  ☐ no_
- `mahlakore a mokwatla` — _is this siSwati? ☐ yes  ☐ no_
- `mela ya moroto` — _is this siSwati? ☐ yes  ☐ no_
- `mhamba wo bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `mmogo o bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `mokokotlo o bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `mokwatla` — _is this siSwati? ☐ yes  ☐ no_
- `moroto` — _is this siSwati? ☐ yes  ☐ no_
- `moroto o o tukang` — _is this siSwati? ☐ yes  ☐ no_
- `murahu u rema` — _is this siSwati? ☐ yes  ☐ no_
- `muvhili wa murahu u rema` — _is this siSwati? ☐ yes  ☐ no_
- `o o botlhoko fa o rota` — _is this siSwati? ☐ yes  ☐ no_
- `o tukang` — _is this siSwati? ☐ yes  ☐ no_
- `pain when urinating` — _is this siSwati? ☐ yes  ☐ no_
- `pyn as ek urineer` — _is this siSwati? ☐ yes  ☐ no_
- `rigors` — _is this siSwati? ☐ yes  ☐ no_
- `rug is seer` — _is this siSwati? ☐ yes  ☐ no_
- `rugpyn` — _is this siSwati? ☐ yes  ☐ no_
- `shivering` — _is this siSwati? ☐ yes  ☐ no_
- `temperature` — _is this siSwati? ☐ yes  ☐ no_
- `tshwaetso ya mela ya moroto` — _is this siSwati? ☐ yes  ☐ no_
- `u fhisa hune ndi a china` — _is this siSwati? ☐ yes  ☐ no_
- `u rema hune ndi a china` — _is this siSwati? ☐ yes  ☐ no_
- `urinary tract` — _is this siSwati? ☐ yes  ☐ no_
- `uti` — _is this siSwati? ☐ yes  ☐ no_
- `vomiting` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 5. `dka`
*GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `sifo seshugela`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `abdominal pain` — _is this siSwati? ☐ yes  ☐ no_
- `blood sugar very high` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa mala` — _is this siSwati? ☐ yes  ☐ no_
- `braak` — _is this siSwati? ☐ yes  ☐ no_
- `breath smells sweet` — _is this siSwati? ☐ yes  ☐ no_
- `diabeet` — _is this siSwati? ☐ yes  ☐ no_
- `diabetes` — _is this siSwati? ☐ yes  ☐ no_
- `diabetic` — _is this siSwati? ☐ yes  ☐ no_
- `fruity breath` — _is this siSwati? ☐ yes  ☐ no_
- `glucose` — _is this siSwati? ☐ yes  ☐ no_
- `glucose 20` — _is this siSwati? ☐ yes  ☐ no_
- `glucose e feta 15` — _is this siSwati? ☐ yes  ☐ no_
- `glucose e feta 20` — _is this siSwati? ☐ yes  ☐ no_
- `glucose over 15` — _is this siSwati? ☐ yes  ☐ no_
- `glucose over 20` — _is this siSwati? ☐ yes  ☐ no_
- `go hlanza` — _is this siSwati? ☐ yes  ☐ no_
- `go ikutlwa o batla go tlhatsa` — _is this siSwati? ☐ yes  ☐ no_
- `go nyorilwe ke pelo` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhaka` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhatsa` — _is this siSwati? ☐ yes  ☐ no_
- `gooi op` — _is this siSwati? ☐ yes  ☐ no_
- `ho hlantsa` — _is this siSwati? ☐ yes  ☐ no_
- `insulin` — _is this siSwati? ☐ yes  ☐ no_
- `ishugela` — _is this siSwati? ☐ yes  ☐ no_
- `ishugela liphakeme kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `ishukela` — _is this siSwati? ☐ yes  ☐ no_
- `ishukela liphezulu kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `isisu sibuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `ke a hlantsa` — _is this siSwati? ☐ yes  ☐ no_
- `ke a hlanza` — _is this siSwati? ☐ yes  ☐ no_
- `ke a tlhaka` — _is this siSwati? ☐ yes  ☐ no_
- `ketone breath` — _is this siSwati? ☐ yes  ☐ no_
- `ku hlanza` — _is this siSwati? ☐ yes  ☐ no_
- `kuhlanza` — _is this siSwati? ☐ yes  ☐ no_
- `maag pyn` — _is this siSwati? ☐ yes  ☐ no_
- `mowa o o nang le diketone` — _is this siSwati? ☐ yes  ☐ no_
- `mowa o o nkgang jaaka maungo` — _is this siSwati? ☐ yes  ☐ no_
- `mowa o o tswang mo molomong o nkgang monate` — _is this siSwati? ☐ yes  ☐ no_
- `mpa e bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `mpa e botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `nauseous` — _is this siSwati? ☐ yes  ☐ no_
- `ndi a sema` — _is this siSwati? ☐ yes  ☐ no_
- `ndinesifo seswekile` — _is this siSwati? ☐ yes  ☐ no_
- `ndiyahlanza` — _is this siSwati? ☐ yes  ☐ no_
- `ndzayo wu vava` — _is this siSwati? ☐ yes  ☐ no_
- `ndzi a hlanza` — _is this siSwati? ☐ yes  ☐ no_
- `o dirisa insulin` — _is this siSwati? ☐ yes  ☐ no_
- `on insulin` — _is this siSwati? ☐ yes  ☐ no_
- `sisu sibuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `stomach pain` — _is this siSwati? ☐ yes  ☐ no_
- `sugar` — _is this siSwati? ☐ yes  ☐ no_
- `sugar very high` — _is this siSwati? ☐ yes  ☐ no_
- `suiker` — _is this siSwati? ☐ yes  ☐ no_
- `suiker baie hoog` — _is this siSwati? ☐ yes  ☐ no_
- `suikersiekte` — _is this siSwati? ☐ yes  ☐ no_
- `sukiri` — _is this siSwati? ☐ yes  ☐ no_
- `sukiri e kwa godimo thata` — _is this siSwati? ☐ yes  ☐ no_
- `sukiri mo mading e kwa godimo thata` — _is this siSwati? ☐ yes  ☐ no_
- `swigiri` — _is this siSwati? ☐ yes  ☐ no_
- `swigiri dzi ḓiimisela ngopfu` — _is this siSwati? ☐ yes  ☐ no_
- `swikiri` — _is this siSwati? ☐ yes  ☐ no_
- `swikiri e phagameng kudu` — _is this siSwati? ☐ yes  ☐ no_
- `swikiri yi tlakukile ngopfu` — _is this siSwati? ☐ yes  ☐ no_
- `thumbu i na vuvha` — _is this siSwati? ☐ yes  ☐ no_
- `tsoekere` — _is this siSwati? ☐ yes  ☐ no_
- `tsoekere e phagameng haholo` — _is this siSwati? ☐ yes  ☐ no_
- `tswekere` — _is this siSwati? ☐ yes  ☐ no_
- `tswekere e kwa godimo` — _is this siSwati? ☐ yes  ☐ no_
- `u sema` — _is this siSwati? ☐ yes  ☐ no_
- `vomiting` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 6. `tb_triad`
*tb_triad*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `bosigo` — _is this siSwati? ☐ yes  ☐ no_
- `cough` — _is this siSwati? ☐ yes  ☐ no_
- `fufulelwa bosigo` — _is this siSwati? ☐ yes  ☐ no_
- `gewig verloor` — _is this siSwati? ☐ yes  ☐ no_
- `go fufulelwa bosigo` — _is this siSwati? ☐ yes  ☐ no_
- `go khohlela` — _is this siSwati? ☐ yes  ☐ no_
- `go latlhegelwa ke boima` — _is this siSwati? ☐ yes  ☐ no_
- `gohlola` — _is this siSwati? ☐ yes  ☐ no_
- `hehela` — _is this siSwati? ☐ yes  ☐ no_
- `hoes` — _is this siSwati? ☐ yes  ☐ no_
- `hovelela` — _is this siSwati? ☐ yes  ☐ no_
- `khalutshela` — _is this siSwati? ☐ yes  ☐ no_
- `khohlela` — _is this siSwati? ☐ yes  ☐ no_
- `khomokile ncilo` — _is this siSwati? ☐ yes  ☐ no_
- `khwehlela` — _is this siSwati? ☐ yes  ☐ no_
- `laha vhuimo` — _is this siSwati? ☐ yes  ☐ no_
- `lahlegetšwe ke boima` — _is this siSwati? ☐ yes  ☐ no_
- `lahlehetse boima` — _is this siSwati? ☐ yes  ☐ no_
- `lahlekelwe isisindo` — _is this siSwati? ☐ yes  ☐ no_
- `lahlekelwe sisixa` — _is this siSwati? ☐ yes  ☐ no_
- `latlhile boima` — _is this siSwati? ☐ yes  ☐ no_
- `losing weight` — _is this siSwati? ☐ yes  ☐ no_
- `lost weight` — _is this siSwati? ☐ yes  ☐ no_
- `mavhungo usiku` — _is this siSwati? ☐ yes  ☐ no_
- `nagsweet` — _is this siSwati? ☐ yes  ☐ no_
- `nciphile isisindo` — _is this siSwati? ☐ yes  ☐ no_
- `ncokolele lisindo` — _is this siSwati? ☐ yes  ☐ no_
- `ndikhohla` — _is this siSwati? ☐ yes  ☐ no_
- `ndikhwehlela` — _is this siSwati? ☐ yes  ☐ no_
- `night sweats` — _is this siSwati? ☐ yes  ☐ no_
- `o latlhegetswe ke boima` — _is this siSwati? ☐ yes  ☐ no_
- `phulukane nesixa` — _is this siSwati? ☐ yes  ☐ no_
- `phwa bosigo` — _is this siSwati? ☐ yes  ☐ no_
- `sweat at night` — _is this siSwati? ☐ yes  ☐ no_
- `sweating at night` — _is this siSwati? ☐ yes  ☐ no_
- `sweet snags` — _is this siSwati? ☐ yes  ☐ no_
- `tatlhegelo ya boima` — _is this siSwati? ☐ yes  ☐ no_
- `tswa marothodi bosigo` — _is this siSwati? ☐ yes  ☐ no_
- `tswa molapo bosiu` — _is this siSwati? ☐ yes  ☐ no_
- `weight loss` — _is this siSwati? ☐ yes  ☐ no_
- `xurha usiku` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 7. `possible_fracture`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `can't bear weight` — _is this siSwati? ☐ yes  ☐ no_
- `can't move it` — _is this siSwati? ☐ yes  ☐ no_
- `can't walk` — _is this siSwati? ☐ yes  ☐ no_
- `crooked` — _is this siSwati? ☐ yes  ☐ no_
- `deformed` — _is this siSwati? ☐ yes  ☐ no_
- `fell` — _is this siSwati? ☐ yes  ☐ no_
- `fell down` — _is this siSwati? ☐ yes  ☐ no_
- `injury` — _is this siSwati? ☐ yes  ☐ no_
- `kotsi` — _is this siSwati? ☐ yes  ☐ no_
- `kotsi e kgolo` — _is this siSwati? ☐ yes  ☐ no_
- `kugobekile` — _is this siSwati? ☐ yes  ☐ no_
- `ligwegwile` — _is this siSwati? ☐ yes  ☐ no_
- `looks bent` — _is this siSwati? ☐ yes  ☐ no_
- `o wele` — _is this siSwati? ☐ yes  ☐ no_
- `o wele fatshe` — _is this siSwati? ☐ yes  ☐ no_
- `se botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `se kobegile` — _is this siSwati? ☐ yes  ☐ no_
- `se lebega se kobegile` — _is this siSwati? ☐ yes  ☐ no_
- `se nang le sebopego se se sa tlwaelegang` — _is this siSwati? ☐ yes  ☐ no_
- `se rurugile` — _is this siSwati? ☐ yes  ☐ no_
- `se rurugile mme se botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `se sa tlhamalala` — _is this siSwati? ☐ yes  ☐ no_
- `se sothegile` — _is this siSwati? ☐ yes  ☐ no_
- `skewe` — _is this siSwati? ☐ yes  ☐ no_
- `swollen and painful` — _is this siSwati? ☐ yes  ☐ no_
- `trauma` — _is this siSwati? ☐ yes  ☐ no_
- `twisted` — _is this siSwati? ☐ yes  ☐ no_
- `ukwethuka kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `uphazamisekile` — _is this siSwati? ☐ yes  ☐ no_
- `uphukile` — _is this siSwati? ☐ yes  ☐ no_
- `uvuvukile` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 8. `hypertensive_urgency`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `ingati lephakeme`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `blood pressure high` — _is this siSwati? ☐ yes  ☐ no_
- `blurred vision` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `bp` — _is this siSwati? ☐ yes  ☐ no_
- `bp e kwa godimo` — _is this siSwati? ☐ yes  ☐ no_
- `bp high` — _is this siSwati? ☐ yes  ☐ no_
- `confused` — _is this siSwati? ☐ yes  ☐ no_
- `dizzy` — _is this siSwati? ☐ yes  ☐ no_
- `duiselig` — _is this siSwati? ☐ yes  ☐ no_
- `fifetseng` — _is this siSwati? ☐ yes  ☐ no_
- `ga a tlhaloganye` — _is this siSwati? ☐ yes  ☐ no_
- `go dutla madi mo nko` — _is this siSwati? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `headache` — _is this siSwati? ☐ yes  ☐ no_
- `high blood` — _is this siSwati? ☐ yes  ☐ no_
- `hlogo` — _is this siSwati? ☐ yes  ☐ no_
- `hloho` — _is this siSwati? ☐ yes  ☐ no_
- `hypertension` — _is this siSwati? ☐ yes  ☐ no_
- `isiyezi` — _is this siSwati? ☐ yes  ☐ no_
- `iyesuka` — _is this siSwati? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this siSwati? ☐ yes  ☐ no_
- `kgatelelo ya madi e e kwa godimo` — _is this siSwati? ☐ yes  ☐ no_
- `kgatelelo ya madi e godimo` — _is this siSwati? ☐ yes  ☐ no_
- `kgatelelo ya madi e kwa godimo` — _is this siSwati? ☐ yes  ☐ no_
- `kgatello ya madi e phahameng` — _is this siSwati? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this siSwati? ☐ yes  ☐ no_
- `madi a kgatelelo a kwa godimo` — _is this siSwati? ☐ yes  ☐ no_
- `nko` — _is this siSwati? ☐ yes  ☐ no_
- `nosebleed` — _is this siSwati? ☐ yes  ☐ no_
- `nsinya wa ngati wu tlakukile` — _is this siSwati? ☐ yes  ☐ no_
- `o a tekateka` — _is this siSwati? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this siSwati? ☐ yes  ☐ no_
- `phuvhelo ya madi i phanda` — _is this siSwati? ☐ yes  ☐ no_
- `pono` — _is this siSwati? ☐ yes  ☐ no_
- `pono e e fifetseng` — _is this siSwati? ☐ yes  ☐ no_
- `pono e sa bonalang sentle` — _is this siSwati? ☐ yes  ☐ no_
- `tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `u a tekateka` — _is this siSwati? ☐ yes  ☐ no_
- `u a ṱavhanya` — _is this siSwati? ☐ yes  ☐ no_
- `umfutho wegazi uphakeme` — _is this siSwati? ☐ yes  ☐ no_
- `umfutho wegazi uphezulu` — _is this siSwati? ☐ yes  ☐ no_
- `uxinzelelo lwegazi luphezulu` — _is this siSwati? ☐ yes  ☐ no_
- `uyesuka` — _is this siSwati? ☐ yes  ☐ no_
- `ṱhoho` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 9. `hypertensive_urgency_reading`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `botlhoko jwa tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `bp 170` — _is this siSwati? ☐ yes  ☐ no_
- `bp 180` — _is this siSwati? ☐ yes  ☐ no_
- `bp 190` — _is this siSwati? ☐ yes  ☐ no_
- `bp 200` — _is this siSwati? ☐ yes  ☐ no_
- `dizzy` — _is this siSwati? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `headache` — _is this siSwati? ☐ yes  ☐ no_
- `kop pyn` — _is this siSwati? ☐ yes  ☐ no_
- `pono` — _is this siSwati? ☐ yes  ☐ no_
- `umfutho wegazi` — _is this siSwati? ☐ yes  ☐ no_
- `uyadidizela` — _is this siSwati? ☐ yes  ☐ no_
- `uyadiyazela` — _is this siSwati? ☐ yes  ☐ no_
- `vision` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 10. `appendicitis_pattern`
*appendicitis_pattern*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `appendix` — _is this siSwati? ☐ yes  ☐ no_
- `appendix pain` — _is this siSwati? ☐ yes  ☐ no_
- `bo nna maswe fa o iketla` — _is this siSwati? ☐ yes  ☐ no_
- `bo nna maswe fa o tsamaya` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa appendix` — _is this siSwati? ☐ yes  ☐ no_
- `can't straighten up` — _is this siSwati? ☐ yes  ☐ no_
- `fever` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhatsa` — _is this siSwati? ☐ yes  ☐ no_
- `ka fa mojeng wa mala` — _is this siSwati? ☐ yes  ☐ no_
- `ka fa mojeng wa mpa` — _is this siSwati? ☐ yes  ☐ no_
- `karolo e e kwa tlase ka fa mojeng` — _is this siSwati? ☐ yes  ☐ no_
- `lower right pain` — _is this siSwati? ☐ yes  ☐ no_
- `maagpyn` — _is this siSwati? ☐ yes  ☐ no_
- `mala` — _is this siSwati? ☐ yes  ☐ no_
- `mo tlase ka fa mojeng` — _is this siSwati? ☐ yes  ☐ no_
- `mpa` — _is this siSwati? ☐ yes  ☐ no_
- `pain right side stomach` — _is this siSwati? ☐ yes  ☐ no_
- `right abdo pain` — _is this siSwati? ☐ yes  ☐ no_
- `right lower quadrant` — _is this siSwati? ☐ yes  ☐ no_
- `vomiting` — _is this siSwati? ☐ yes  ☐ no_
- `worse when moving` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 11. `asthma_inhaler_failure`
*asthma_inhaler_failure*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `ayisebenzi`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `asma` — _is this siSwati? ☐ yes  ☐ no_
- `asthma` — _is this siSwati? ☐ yes  ☐ no_
- `ayisizi` — _is this siSwati? ☐ yes  ☐ no_
- `ga e dire` — _is this siSwati? ☐ yes  ☐ no_
- `ga e thuse` — _is this siSwati? ☐ yes  ☐ no_
- `go hema` — _is this siSwati? ☐ yes  ☐ no_
- `inhaler` — _is this siSwati? ☐ yes  ☐ no_
- `isifo sofuba` — _is this siSwati? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this siSwati? ☐ yes  ☐ no_
- `need more puffs` — _is this siSwati? ☐ yes  ☐ no_
- `not helping` — _is this siSwati? ☐ yes  ☐ no_
- `not working` — _is this siSwati? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this siSwati? ☐ yes  ☐ no_
- `pompo` — _is this siSwati? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this siSwati? ☐ yes  ☐ no_
- `pump` — _is this siSwati? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this siSwati? ☐ yes  ☐ no_
- `still struggling` — _is this siSwati? ☐ yes  ☐ no_
- `ufuba` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 12. `meningism`
*same-day review is the safety-correct default.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `botlhoko jwa molala` — _is this siSwati? ☐ yes  ☐ no_
- `can't bend neck` — _is this siSwati? ☐ yes  ☐ no_
- `feberu` — _is this siSwati? ☐ yes  ☐ no_
- `fever` — _is this siSwati? ☐ yes  ☐ no_
- `intamo eqinileyo` — _is this siSwati? ☐ yes  ☐ no_
- `intamo ibuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `intamo iqinile` — _is this siSwati? ☐ yes  ☐ no_
- `intsamo ibuhlungu` — _is this siSwati? ☐ yes  ☐ no_
- `intsamo icinile` — _is this siSwati? ☐ yes  ☐ no_
- `molala` — _is this siSwati? ☐ yes  ☐ no_
- `molala o bohloko` — _is this siSwati? ☐ yes  ☐ no_
- `molala o botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `molala o o thata` — _is this siSwati? ☐ yes  ☐ no_
- `molala o thata` — _is this siSwati? ☐ yes  ☐ no_
- `mulala u na vuvha` — _is this siSwati? ☐ yes  ☐ no_
- `mulala wo omela` — _is this siSwati? ☐ yes  ☐ no_
- `neck is stiff` — _is this siSwati? ☐ yes  ☐ no_
- `neck pain` — _is this siSwati? ☐ yes  ☐ no_
- `neck stiff` — _is this siSwati? ☐ yes  ☐ no_
- `nek is styf` — _is this siSwati? ☐ yes  ☐ no_
- `nkulo wu tiyile` — _is this siSwati? ☐ yes  ☐ no_
- `nkulo wu vava` — _is this siSwati? ☐ yes  ☐ no_
- `o thata` — _is this siSwati? ☐ yes  ☐ no_
- `stiff neck` — _is this siSwati? ☐ yes  ☐ no_
- `stywe nek` — _is this siSwati? ☐ yes  ☐ no_
- `thata` — _is this siSwati? ☐ yes  ☐ no_
- `umkhuhlane` — _is this siSwati? ☐ yes  ☐ no_
- `umnqala womelele` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 13. `hiv_fever`
*HIV + fever: risk-UPGRADE signal. Enforce YELLOW as a floor, preserve any | higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `arv` — _is this siSwati? ☐ yes  ☐ no_
- `di-arv` — _is this siSwati? ☐ yes  ☐ no_
- `fever` — _is this siSwati? ☐ yes  ☐ no_
- `high temperature` — _is this siSwati? ☐ yes  ☐ no_
- `hiv` — _is this siSwati? ☐ yes  ☐ no_
- `hiv positive` — _is this siSwati? ☐ yes  ☐ no_
- `hiv+` — _is this siSwati? ☐ yes  ☐ no_
- `hiv_fever` — _is this siSwati? ☐ yes  ☐ no_
- `ingculaza` — _is this siSwati? ☐ yes  ☐ no_
- `o a lwala` — _is this siSwati? ☐ yes  ☐ no_
- `o dirisa di-arv` — _is this siSwati? ☐ yes  ☐ no_
- `o na le bolwetse` — _is this siSwati? ☐ yes  ☐ no_
- `o na le hiv` — _is this siSwati? ☐ yes  ☐ no_
- `o tsaya di-arv` — _is this siSwati? ☐ yes  ☐ no_
- `on arvs` — _is this siSwati? ☐ yes  ☐ no_
- `positive` — _is this siSwati? ☐ yes  ☐ no_
- `shisa kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `sick` — _is this siSwati? ☐ yes  ☐ no_
- `taking arvs` — _is this siSwati? ☐ yes  ☐ no_
- `temperature` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 14. `lower_abdo_missed_period`
*higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `botlase jwa mpa` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko mo pelviking` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mala` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mpa` — _is this siSwati? ☐ yes  ☐ no_
- `diegile` — _is this siSwati? ☐ yes  ☐ no_
- `ga go na kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `go diega ga nako ya go tla ga kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `go se tle ga kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `kgwedi e diegile` — _is this siSwati? ☐ yes  ☐ no_
- `late period` — _is this siSwati? ☐ yes  ☐ no_
- `lower abdominal pain` — _is this siSwati? ☐ yes  ☐ no_
- `lower belly pain` — _is this siSwati? ☐ yes  ☐ no_
- `lower tummy pain` — _is this siSwati? ☐ yes  ☐ no_
- `maagpyn` — _is this siSwati? ☐ yes  ☐ no_
- `mala` — _is this siSwati? ☐ yes  ☐ no_
- `missed period` — _is this siSwati? ☐ yes  ☐ no_
- `mpa` — _is this siSwati? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this siSwati? ☐ yes  ☐ no_
- `no period` — _is this siSwati? ☐ yes  ☐ no_
- `pelvic pain` — _is this siSwati? ☐ yes  ☐ no_
- `pelviki` — _is this siSwati? ☐ yes  ☐ no_
- `period late` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 15. `pregnancy_complication`
*pregnancy_complication*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- `emita`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `baby hasn't moved` — _is this siSwati? ☐ yes  ☐ no_
- `bleeding` — _is this siSwati? ☐ yes  ☐ no_
- `boimana` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this siSwati? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this siSwati? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this siSwati? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this siSwati? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this siSwati? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this siSwati? ☐ yes  ☐ no_
- `headache` — _is this siSwati? ☐ yes  ☐ no_
- `motsamao o fokotsehile` — _is this siSwati? ☐ yes  ☐ no_
- `movement reduced` — _is this siSwati? ☐ yes  ☐ no_
- `no movement` — _is this siSwati? ☐ yes  ☐ no_
- `o imile` — _is this siSwati? ☐ yes  ☐ no_
- `pain` — _is this siSwati? ☐ yes  ☐ no_
- `pele ga nako` — _is this siSwati? ☐ yes  ☐ no_
- `pregnant` — _is this siSwati? ☐ yes  ☐ no_
- `swangari` — _is this siSwati? ☐ yes  ☐ no_
- `swelling` — _is this siSwati? ☐ yes  ☐ no_
- `vision` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 16. `gi_bleeding`
*gi_bleeding*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `black tarry stool` — _is this siSwati? ☐ yes  ☐ no_
- `blood in poo` — _is this siSwati? ☐ yes  ☐ no_
- `blood in stool` — _is this siSwati? ☐ yes  ☐ no_
- `blood in vomit` — _is this siSwati? ☐ yes  ☐ no_
- `bloody diarrhoea` — _is this siSwati? ☐ yes  ☐ no_
- `ingati esitweni` — _is this siSwati? ☐ yes  ☐ no_
- `ingati iyaphumela ngemlomeni` — _is this siSwati? ☐ yes  ☐ no_
- `letshololo le le nang le madi` — _is this siSwati? ☐ yes  ☐ no_
- `madi a tswa ka ganong` — _is this siSwati? ☐ yes  ☐ no_
- `madi a tšwa ka ganong` — _is this siSwati? ☐ yes  ☐ no_
- `madi leetšong` — _is this siSwati? ☐ yes  ☐ no_
- `madi mantšwing` — _is this siSwati? ☐ yes  ☐ no_
- `madi mo mantswing` — _is this siSwati? ☐ yes  ☐ no_
- `mantlwana a mantsho a a tshwanang le sekgoa` — _is this siSwati? ☐ yes  ☐ no_
- `ngati enyangweni` — _is this siSwati? ☐ yes  ☐ no_
- `ngati yi huma hi nomo` — _is this siSwati? ☐ yes  ☐ no_
- `rectal bleeding` — _is this siSwati? ☐ yes  ☐ no_
- `throwing up blood` — _is this siSwati? ☐ yes  ☐ no_
- `vomiting blood` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 17. `deep_wound`
*deep_wound*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `animal bite` — _is this siSwati? ☐ yes  ☐ no_
- `bite wound` — _is this siSwati? ☐ yes  ☐ no_
- `can't stop` — _is this siSwati? ☐ yes  ☐ no_
- `deep cut` — _is this siSwati? ☐ yes  ☐ no_
- `deep wound` — _is this siSwati? ☐ yes  ☐ no_
- `dierbyt` — _is this siSwati? ☐ yes  ☐ no_
- `galase` — _is this siSwati? ☐ yes  ☐ no_
- `galase mo nthong` — _is this siSwati? ☐ yes  ☐ no_
- `glass in wound` — _is this siSwati? ☐ yes  ☐ no_
- `go elela` — _is this siSwati? ☐ yes  ☐ no_
- `go elela ka bontsi` — _is this siSwati? ☐ yes  ☐ no_
- `go elela ka maatla` — _is this siSwati? ☐ yes  ☐ no_
- `go longwa ke phologolo` — _is this siSwati? ☐ yes  ☐ no_
- `inxeba` — _is this siSwati? ☐ yes  ☐ no_
- `ka bontsi` — _is this siSwati? ☐ yes  ☐ no_
- `ka maatla` — _is this siSwati? ☐ yes  ☐ no_
- `kgagogo` — _is this siSwati? ☐ yes  ☐ no_
- `kgagogo e e tseneletseng` — _is this siSwati? ☐ yes  ☐ no_
- `lenala` — _is this siSwati? ☐ yes  ☐ no_
- `lenala le le rusetse` — _is this siSwati? ☐ yes  ☐ no_
- `ntho` — _is this siSwati? ☐ yes  ☐ no_
- `ntho e e tseneletseng` — _is this siSwati? ☐ yes  ☐ no_
- `ntho ya go longwa` — _is this siSwati? ☐ yes  ☐ no_
- `ntho ya go phunyediwa` — _is this siSwati? ☐ yes  ☐ no_
- `ntho ya go tlhabiwa` — _is this siSwati? ☐ yes  ☐ no_
- `phologolo` — _is this siSwati? ☐ yes  ☐ no_
- `pouring` — _is this siSwati? ☐ yes  ☐ no_
- `puncture wound` — _is this siSwati? ☐ yes  ☐ no_
- `rusty nail` — _is this siSwati? ☐ yes  ☐ no_
- `spurting` — _is this siSwati? ☐ yes  ☐ no_
- `stab wound` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 18. `severe_dehydration_vulnerable`
*severe_dehydration_vulnerable*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `akakaze achame isikhathi eside` — _is this siSwati? ☐ yes  ☐ no_
- `baby` — _is this siSwati? ☐ yes  ☐ no_
- `bagolo` — _is this siSwati? ☐ yes  ☐ no_
- `can't keep fluids down` — _is this siSwati? ☐ yes  ☐ no_
- `child` — _is this siSwati? ☐ yes  ☐ no_
- `diabetic` — _is this siSwati? ☐ yes  ☐ no_
- `diarrhoea and vomiting together` — _is this siSwati? ☐ yes  ☐ no_
- `elderly` — _is this siSwati? ☐ yes  ☐ no_
- `ga a ise a rote` — _is this siSwati? ☐ yes  ☐ no_
- `ga a ise a rote diura tsotlhe` — _is this siSwati? ☐ yes  ☐ no_
- `go tlhatsa` — _is this siSwati? ☐ yes  ☐ no_
- `hiv` — _is this siSwati? ☐ yes  ☐ no_
- `infant` — _is this siSwati? ☐ yes  ☐ no_
- `letshololo` — _is this siSwati? ☐ yes  ☐ no_
- `letshololo le go tlhatsa ka nako e le nngwe` — _is this siSwati? ☐ yes  ☐ no_
- `mogolo` — _is this siSwati? ☐ yes  ☐ no_
- `molomo o omile thata` — _is this siSwati? ☐ yes  ☐ no_
- `mouth very dry` — _is this siSwati? ☐ yes  ☐ no_
- `ngwana` — _is this siSwati? ☐ yes  ☐ no_
- `no urine for hours` — _is this siSwati? ☐ yes  ☐ no_
- `not passed urine` — _is this siSwati? ☐ yes  ☐ no_
- `o potologa tlhogo thata` — _is this siSwati? ☐ yes  ☐ no_
- `o tlhatsa tsotlhe` — _is this siSwati? ☐ yes  ☐ no_
- `okukhulu` — _is this siSwati? ☐ yes  ☐ no_
- `omile` — _is this siSwati? ☐ yes  ☐ no_
- `ukoma kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `umchamo awuphumi` — _is this siSwati? ☐ yes  ☐ no_
- `uyahlanza` — _is this siSwati? ☐ yes  ☐ no_
- `very dizzy` — _is this siSwati? ☐ yes  ☐ no_
- `vomiting everything` — _is this siSwati? ☐ yes  ☐ no_
- `wome kakhulu` — _is this siSwati? ☐ yes  ☐ no_
- `womile` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 19. `eye_emergency`
*eye_emergency*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `akaboni kahle` — _is this siSwati? ☐ yes  ☐ no_
- `blur suddenly` — _is this siSwati? ☐ yes  ☐ no_
- `can't see` — _is this siSwati? ☐ yes  ☐ no_
- `chemical in eye` — _is this siSwati? ☐ yes  ☐ no_
- `eye injury` — _is this siSwati? ☐ yes  ☐ no_
- `fifala` — _is this siSwati? ☐ yes  ☐ no_
- `foufetse` — _is this siSwati? ☐ yes  ☐ no_
- `go na le sengwe mo leitlhong` — _is this siSwati? ☐ yes  ☐ no_
- `hit in eye` — _is this siSwati? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this siSwati? ☐ yes  ☐ no_
- `khemikhale` — _is this siSwati? ☐ yes  ☐ no_
- `khemikhale mo leitlhong` — _is this siSwati? ☐ yes  ☐ no_
- `kotsi ya leitlho` — _is this siSwati? ☐ yes  ☐ no_
- `leitlho` — _is this siSwati? ☐ yes  ☐ no_
- `o foufetse` — _is this siSwati? ☐ yes  ☐ no_
- `o iteilwe mo leitlhong` — _is this siSwati? ☐ yes  ☐ no_
- `oogbesering` — _is this siSwati? ☐ yes  ☐ no_
- `pono` — _is this siSwati? ☐ yes  ☐ no_
- `pono e fifala ka tshoganyetso` — _is this siSwati? ☐ yes  ☐ no_
- `sengwe mo leitlhong` — _is this siSwati? ☐ yes  ☐ no_
- `something in eye` — _is this siSwati? ☐ yes  ☐ no_
- `sudden` — _is this siSwati? ☐ yes  ☐ no_
- `suddenly` — _is this siSwati? ☐ yes  ☐ no_
- `tshoganyetso` — _is this siSwati? ☐ yes  ☐ no_
- `ungenwe okuthile ehlweni` — _is this siSwati? ☐ yes  ☐ no_
- `uxhophekile` — _is this siSwati? ☐ yes  ☐ no_
- `uxhoshiwe` — _is this siSwati? ☐ yes  ☐ no_
- `vision` — _is this siSwati? ☐ yes  ☐ no_
- `went blind` — _is this siSwati? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 20. `testicular_torsion`
*testicular_torsion*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current siSwati keywords** (what the rule recognises in siSwati):
- **⚠️ NONE — please provide keywords for this symptom in siSwati**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in siSwati:
- `amasende avuvukile` — _is this siSwati? ☐ yes  ☐ no_
- `bo masisi thata` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa ditesticle` — _is this siSwati? ☐ yes  ☐ no_
- `botlhoko jwa scrotum` — _is this siSwati? ☐ yes  ☐ no_
- `can't walk` — _is this siSwati? ☐ yes  ☐ no_
- `ditesticle` — _is this siSwati? ☐ yes  ☐ no_
- `e rurugile` — _is this siSwati? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this siSwati? ☐ yes  ☐ no_
- `masisi` — _is this siSwati? ☐ yes  ☐ no_
- `rurugile` — _is this siSwati? ☐ yes  ☐ no_
- `scrotum` — _is this siSwati? ☐ yes  ☐ no_
- `scrotum pain` — _is this siSwati? ☐ yes  ☐ no_
- `severe` — _is this siSwati? ☐ yes  ☐ no_
- `sudden` — _is this siSwati? ☐ yes  ☐ no_
- `swollen testicle` — _is this siSwati? ☐ yes  ☐ no_
- `testicle` — _is this siSwati? ☐ yes  ☐ no_
- `testicle pain` — _is this siSwati? ☐ yes  ☐ no_
- `testicular pain` — _is this siSwati? ☐ yes  ☐ no_
- `tshoganyetso` — _is this siSwati? ☐ yes  ☐ no_

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
