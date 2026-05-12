# BIZUSIZO native-speaker review — Setswana

**Language:** Setswana (code: `tn`)
**Generated:** 2026-05-04 (from live source code)
**Reviewer instructions:** For each entry below, please mark ✅ (correct and natural), ❌ (wrong — suggest fix), or ➕ (add missing phrasing). For any ❌ or ➕, please provide the correct/additional phrasing in the notes column.

**What you are reviewing:** all Setswana content that a patient might read (Part 1 — WhatsApp messages) or that the system scans patient text for (Part 2 — clinical safety keywords).

---

## PART 1 — Patient-facing WhatsApp messages (51 entries)

Each row shows the English source text (for reference) and the current Setswana translation. If Setswana is marked **[MISSING — PLEASE TRANSLATE]**, the translation has not been written yet and we need you to provide it.

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

**Setswana:**
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

**Setswana:**
```
✅ Puo e beilwe go *Setswana*.
Kwala "puo" nako nngwe go fetola.
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

**Setswana:**
```
O amogelwa go BIZUSIZO. 🏥

Tirelo eno e go thusa go tlhaloganya go tshoganyetsa ga matshwenyego a gago mme e go kaele gore o batla thuso kae.

Go botlhokwa:
• Tirelo eno e fa tataiso ya boitekanelo fela.
• Ga e hlahlobe maemo a bongaka.
• Ga e nke sebaka sa ngaka kgotsa mooki.

Re ka botsa dipotso ka matshwenyego a gago go go thusa. Dikarabo tsa gago di ka bolokelwa ka polokeho go tokafatsa polokego le boleng jwa tirelo. Tshedimosetso ya gago e tla tshwariwa go ya ka melao ya sephiri ya Afrika Borwa (POPIA).

A o dumela go dirisa tirelo eno?

1 — Ee, ke a dumela mme ke batla go tswelela
2 — Nnyaa, tswa
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.4 `consent_yes` *(lib/messages.js)*

**English source:**
```
✅ Thank you. Let's get you to the right care.
```

**Setswana:**
```
✅ Re a leboga. A re go ise kwa tlhokomelong e siameng.
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

**Setswana:**
```
Go siame. Kopano ya gago e fedile mme ga go na tshedimosetso e e bolokilweng.

Ga o ka fetola mogopolo kgotsa o tlhoka thuso mo isagong, romela "Hi" go simolola gape. O ka etela kliniking ya gago e e gaufi.

O itlhokomele. 🙏
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

**Setswana:**
```
Ke eng bothata jwa gago jo bogolo gompieno?

1. 🫁 Mathata a go phefumola / Botlhoko jwa sehuba
2. 🤕 Go gobala tlhogo / Tlhogo e botlhoko
3. 🤰 Go ima
4. 🩸 Go opela / Ntho
5. 🤒 Fefo / Mokakatso / Go kgohlela
6. 🤢 Mpa / Go baba mpa
7. 👶 Bolwetsi jwa ngwana
8. 💊 Molemo / Bolwetsi jo bo sa feleleng
9. 🦴 Lesapo / Letswele / Mokokotlo
10. 🧠 Boitekanelo jwa mogopolo
11. 🤧 Aleji / Letswatswati
12. ✏️ Tse dingwe — kwala matshwenyego a gago
13. 👤 Bua le motho
14. 🩺 Boitekanelo jwa basadi (go rulaganya lapa)
15. 🔬 Tlhahlobo ya boitekanelo (HIV, BP, tshukere)
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

**Setswana:**
```
🔴 *TSHOGANYETSO*

Leletsa *10177* go kopa ambulense JAANONG.
Praebete: ER24 *084 124*.

⚠️ *O SE KA WA EMELA ambulense* — e ya kwa bookelong jo bo gaufi ka bonako. Kopa motho go go isa kgotsa o tseye thekisi.
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

**Setswana:**
```
🟠 *GO TSHOGANYETSO THATA*
O tlhoka tlhokomelo ka bonako.
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

**Setswana:**
```
Ke tlhoka tshedimosetso e nngwe go sekaseka matshwao a gago ka nepagalo.

A o ka tlhalosa se o ikutlwang ka botlalo?

- Ke kae go nepa botlhoko kgotsa go se itekanele?
- O na le seeme se nako e kae?
- Se a mpefala, se a tokafala, kgotsa se dula jalo?
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

**Setswana:**
```
ℹ️ Re sekasekile matshwao a gago, mme boitshepo jwa rona bo kwa tlase go feta ka tlwaelo. Maduo a gago a sa bontshiwa fa godimo.

Jaaka tshireletso:
- Fa matshwao a gago a fetoga kgotsa a mpefala, tla kliniki *gompieno*
- Mooki o itsisiwe go sekaseka taba ya gago
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

**Setswana:**
```
🏥 Ya kwa *[name]* ([dist] km) GONA JAANA.

Bolelela ba reception gore o neilwe maemo a potlako a go tlhokomelwa *KA POTLAKO* ke BIZUSIZO. O tla tlhokomelwa ka pela.

O seka wa EMA/LETA kwa gae.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.12 `triage_orange_hospital` *(lib/messages.js)*

**English source:**
```
The clinic is closed now. Go to your nearest hospital emergency unit immediately.
```

**Setswana:**
```
Kliniki e tswaletswe jaanong. Ya bookelong jo bo gaufi — ka karolong ya tshoganyetso.
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

**Setswana:**
```
O ka ya lefelong la kalafi ka polokesego?

1 — Ee, nka ya ka bonna kgotsa motho a ka ntisa
2 — Nnyaa, ke lwala thata go tsamaya ka polokesego
3 — Ga ke na sefata
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.14 `transport_safe` *(lib/messages.js)*

**English source:**
```
Good. Please leave now — do not delay.
```

**Setswana:**
```
Go siame. Tswelela pele jaanong — o se ke wa diega.
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

**Setswana:**
```
🚑 Letsa ambulense JAANONG:
*10177* (mmuso) kgotsa *084 124* (ER24)

Babuisa ka matshwenyego a gago le lefelo la gago.

Fa ambulense e diega, kopa motho yo o gaufi go go isa bookelong. O se ka wa ema gae.
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

**Setswana:**
```
🚑 Bitsa ambulense: *10177* kgotsa *084 124* (ER24)

Mo godimo ga moo, kopa moagisani, leloko la lolwapa, kgotsa mongwe wa mo setšhabeng go go isa. Fa o ka kgona go fitlha kwa lefelong la dibese/taxi, tsaya taxi o ye kwa kliniking kgotsa sepetlele se se gaufi.

O seka wa sala kwa gae — o tlhoka tlhokomelo gompieno.
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

**Setswana:**
```
🟡 *GO A TSHOGANYETSA*
Etela kliniki gompieno. O se ka wa diega.
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

**Setswana:**
```
⏰ Dikliniki di tswaletswe jaanong. Se o tshwanetseng go se dira ke se:

1. *Fa matshwao a gago a kgotlelega* — ikhutsa kwa gae o ye kliniki mo mosong ka bonako (pele ga 08:00)

2. *Fa matshwao a maswe bosigo* — ya bookelong jo bo gaufi kgotsa o leletse *10177*

Re tla go romela sekgopotso kamoso mo mosong.
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

**Setswana:**
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

**Setswana:**
```
🟢 *TSA TLWAELO — Ga se tshoganyetso*

Matshwao a gago ga se tshoganyetso. Dikeletso fa o akanya ka kgato e e latelang:
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

**Setswana:**
```
📍 Lefelo le le gaufi: *[name]* ([dist] km).

O ka fitlha motlhofo?
1 — Ee
2 — Nnyaa, mpontshee tse dingwe
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

**Setswana:**
```
✅ Ya go *[name]*.

📋 *Fa o goroga:*
1. Ya kwa go reception
2. Ba bolelele: "Ke dirisitse BIZUSIZO"
3. Ba bontshe nomoro ya gago (kwala *code*)
4. Ba na le tshedimosetso ya gago

O tsamae sentle. Re tla go botsa morago ga diura di le 48.
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

**Setswana:**
```
Ke mafelo a mangwe a gaufi:
[facilities]

0 — Boela kwa kgakololong ya ntlha (*[firstName]*)

Araba ka nomoro ya kgetho ya gago.
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

**Setswana:**
```
Dumela, o ikgolagantse le BIZUSIZO malatsi a 2 a a fetileng. Matshwao a gago a ntse jang?
1. A botoka ✅
2. A tshwana ➡️
3. A maswe go feta ⚠️
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.25 `follow_up_better` *(lib/messages.js)*

**English source:**
```
✅ Glad you are feeling better. No further action needed. Stay well!
```

**Setswana:**
```
✅ Re itumetse fa o ikutlwa botoka. Ga go tlhokege sepe gape. Nna sentle!
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.26 `follow_up_same` *(lib/messages.js)*

**English source:**
```
🟡 Please continue monitoring your symptoms. Visit a clinic if they do not improve in the next 24 hours.
```

**Setswana:**
```
🟡 Tswelela o ela tlhoko matshwao a gago. Etela kliniki fa a sa tokafale ka diura di le 24.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.27 `follow_up_worse` *(lib/messages.js)*

**English source:**
```
⚠️ Your symptoms may be worsening. A nurse has been notified and will review your case. If it is an emergency, call *10177* now.
```

**Setswana:**
```
⚠️ Matshwao a gago a ka nna a maswe. Mooki o itsisiwe. Fa e le tshoganyetso, leletsa *10177* jaanong.
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

**Setswana:**
```
Potso e nngwe — a o ile kliniki morago ga go hlahlobiwa?

1 — Ee, ke ile kliniki ✅
2 — Nnyaa, ga ke ya ❌
3 — Ke ile bookelong esikhundleni 🏥
4 — Ke ile mme ka boelediwa ⛔
5 — Ke ile mme ga go na didirisiwa tsa kalafi 💊
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.29 `follow_up_clinic_thanks` *(lib/messages.js)*

**English source:**
```
Thank you. Your response helps us improve BIZUSIZO for everyone. Stay well. 🙏
```

**Setswana:**
```
Ke a leboga. Karabo ya gago e re thusa go tokafatsa BIZUSIZO. Nna sentle. 🙏
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

**Setswana:**
```
📍 Tswee-tswee abelana lefelo la gago gore re bone lefelo la kalafi le le gaufi.

Tobetsa konopo ya 📎 → Lefelo → Romela lefelo la gago la jaanong.
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

**Setswana:**
```
Pele re tswelela, a o nwa melemo ya malwetse a? (Araba ka dinomoro, sk. "1,3" kgotsa "0" fa go sena)

0. Ga go na
1. 💊 HIV / Melemo ya ARV
2. 🩸 Madi a kwa godimo
3. 🍬 Bolwetse jwa sukiri
4. ❤️ Bolwetse jwa pelo
5. 🫁 Sefuba / Matshwafo
6. 🧠 Bolwetse jwa go wa
7. 💊 Melemo e mengwe ya go sa fole
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.32 `chronic_screening_saved` *(lib/messages.js)*

**English source:**
```
✅ Thank you. This helps us give you better guidance.
```

**Setswana:**
```
✅ Re a leboga. Se se re thusa go go fa kgakololo e e botoka.
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

**Setswana:**
```
Leina la gago ke mang? (Jaaka le kwadilwe mo go ID ya gago)

Kwala leina la gago:
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

**Setswana:**
```
Re a leboga, *[firstName]*.

Sefane sa gago ke mang?

Kwala sefane sa gago:
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

**Setswana:**
```
Letsatsi la gago la matsalo ke lefe?

Kwala ka tsela e: *DD-MM-YYYY*
Sekai: *15-03-1992*
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

**Setswana:**
```
Bong jwa gago ke eng?

1 — Monna
2 — Mosadi
3 — Intersex
4 — Ga ke batle go bolela
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.37 `identity_confirmed` *(lib/messages.js)*

**English source:**
```
✅ Thank you, *[name] [surname]*. This helps the clinic prepare your file before you arrive.
```

**Setswana:**
```
✅ Re a leboga, *[name] [surname]*. Se se thusa kliniki go baakanya faele ya gago pele o goroga.
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

**Setswana:**
```
A o kile wa ya kwa *[facilityName]* pele?

1 — Ee, ke na le faele koo
2 — Nnyaa, ke ketelo ya me ya ntlha
3 — Ga ke na bonnete
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.39 `returning_yes` *(lib/messages.js)*

**English source:**
```
📁 Good — the clinic will look for your file before you arrive.
```

**Setswana:**
```
📁 Go siame — kliniki e tla batla faele ya gago pele o goroga.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.40 `returning_new` *(lib/messages.js)*

**English source:**
```
🆕 No problem — the clinic will create a new file for you. This saves time when you arrive.
```

**Setswana:**
```
🆕 Ga go bothata — kliniki e tla dira faele e ntšhwa. Se se boloka nako fa o goroga.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.41 `returning_unsure` *(lib/messages.js)*

**English source:**
```
📋 No problem. The clinic will check when you arrive. Your name and date of birth will help them find your file quickly.
```

**Setswana:**
```
📋 Ga go bothata. Kliniki e tla tlhola fa o goroga. Leina la gago le letsatsi la matsalo di tla ba thusa go bona faele ya gago ka bonako.
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

**Setswana:**
```
A o tsaya karolo mo patlisisong ya BIZUSIZO kwa kliniki?

1 — Ee, ke motsayakarolo wa patlisiso
2 — Nnyaa, ke dirisa BIZUSIZO fela
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

**Setswana:**
```
🔢 Khoutu ya gago ya patlisiso ke: *[code]*

Tswee-tswee bontsha khoutu e go mmatlisisi fa o goroga kliniki. E re thusa go golaganya triage ya gago ya BIZUSIZO le go etela ga gago kliniki.

O ka kwala "code" nako nngwe le nngwe go bona khoutu ya gago gape.
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

**Setswana:**
```
O tlhophile: *[category]*

Go maswe go le kana kang?
1 — Bonnye (nka dira ditiro tsa ka tsa letsatsi le letsatsi)
2 — Magareng (go ama ditiro tsa ka)
3 — Thata (nka se kgone gotlhelele)

Kgotsa tlhalosa matshwao a gago ka mafoko a gago.
O ka romela voice note 🎤
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

**Setswana:**
```
🎤 O ka romela voice note o tlhalosa matshwao a gago. Bua sentle o re bolelele:

• Go diragala eng
• Go simolotse leng
• Go maswe go le kana kang

Re tla reetsa molaetsa wa gago re go thuse.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.46 `voice_note_received` *(lib/messages.js)*

**English source:**
```
🎤 Voice note received. Let me process your message...
```

**Setswana:**
```
🎤 Voice note e amogetšwe. A ke dire molaetsa wa gago...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.47 `thinking` *(lib/messages.js)*

**English source:**
```
🔍 Assessing your symptoms...
```

**Setswana:**
```
🔍 Re sekaseka matshwao a gago...
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

**Setswana:**
```

💡 *Maele:*
Kwala *0* — puisano e ntšhwa
Kwala *puo* — fetola puo
Kwala *code* — bontsha nomoro ya gago
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

**Setswana:**
```
⏳ O rometse melaetsa e mentši ka nako e khutshwane. Tsweetswee leta metsotso e le mmalwa pele o leka gape.

🚨 *Fa e le maemo a tšhoganetso:*
• Leletsa *10177* (ambulense) kgotsa *084 124* (ER24)
• Ya kwa kliniking kgotsa kwa bookelong jo bo gaufi le wena ka bonako
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

**Setswana:**
```
⚠️ Re itemogela mathata a thekenoloji mme re ka se kgone go dira molaetsa wa gago jaanong.

🚨 *Fa e le tshoganyetso:*
• Leletsa *10177* (ambulense) kgotsa *084 124* (ER24)
• Ya kliniki kgotsa bookelong jo bo gaufi JAANONG — o se ka wa ema ambulense

Re tla leka go araba fa tshedimosetso e boetse. Re kopa maitshwarelo.
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

**Setswana:**
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

**Setswana:**
```
A o fano bakeng sa go tlatsa dimelemo tsa go nnela ruri?\n1 — Ee, ke tlhoka dimelemo tsa me tsa ka metlha\n2 — Nnyaa, ke na le matshwao a masha kgotsa a maswe
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

**Setswana:**
```
O tsaya dimelemo dife? (Kgetha tsotlhe tse di amanang)\n1 — Di-ARV (HIV)\n2 — Madi a kwa godimo\n3 — Sukiri (Diabetes)\n4 — Pelo / Angina\n5 — Sehuba / Mafahla\n6 — Bolwetse jwa go wa (Epilepsy)\n7 — Dimelemo tse dingwe tsa go nnela ruri
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.54 `ccmdd_route` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Your nearest medication pickup point is:\n*${name}* (${dist} km)\n\nYou can collect your chronic medication there without queuing at a clinic.\n\nCan you get there?\n1 — Yes\n2 — No, show alternatives
```

**Setswana:**
```
💊 Lefelo la gago la gaufi la go tsaya dimelemo ke:\n*${name}* (${dist} km)\n\nO ka tsaya dimelemo tsa gago tsa go nnela ruri gone go sa eme molelwaneng kwa kliniki.\n\nA o ka fitlha?\n1 — Ee\n2 — Nnyaa, mpontsha tse dingwe
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.55 `ccmdd_confirmed` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
✅ Go to *${name}* to collect your medication.\n\nRemember to bring your ID and prescription/clinic card.\n\nWe will remind you when your next collection is due.
```

**Setswana:**
```
✅ Ya kwa go *${name}* go tsaya dimelemo tsa gago.\n\nGopola go tlisa ID ya gago le karata ya kliniki.\n\nRe tla go gopotsa fa nako ya go tsaya e e latelang e fitlhile.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.56 `ccmdd_not_available` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 CCMDD pickup is not yet available in your area. Please visit your nearest clinic for your medication refill.
```

**Setswana:**
```
💊 Go tsaya dimelemo ga go eso nne gone mo lefelong la gago. Etela kliniki e e gaufi go tlatsa dimelemo.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.57 `reminder_24h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Reminder: Your medication is ready for collection at *${name}*.\n\nPlease collect today if possible. Your health depends on taking your medication consistently.
```

**Setswana:**
```
💊 Kgopotso: Dimelemo tsa gago di lokile go tsewa kwa *${name}*.\n\nDi tseye gompieno fa go kgonagala. Boitekanelo jwa gago bo ikaegile ka go nwa dimelemo ka metlha.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.58 `reminder_48h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Your medication at *${name}* has not been collected yet.\n\nMissing your medication can cause your condition to worsen. Please collect as soon as possible.\n\nHaving trouble getting there?\n1 — I will collect today\n2 — I cannot get to this location\n3 — I have a problem (tell us)
```

**Setswana:**
```
⚠️ Dimelemo tsa gago kwa *${name}* ga di eso tsewa.\n\nGo palelwa ke go tsaya dimelemo go ka dira maemo a gago a nne maswe. Di tseye ka bonako.\n\nA o na le bothata jwa go fitlha?\n1 — Ke tla di tsaya gompieno\n2 — Ga ke kgone go fitlha lefelong le\n3 — Ke na le bothata (re bolelele)
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.59 `reminder_72h_escalation` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
🔴 You have not collected your medication for 3 days.\n\nMissing medication puts your health at serious risk. A healthcare worker has been notified.\n\nPlease tell us what is preventing you from collecting:\n1 — Transport / distance problem\n2 — Cannot take time off work\n3 — Pickup point was closed when I went\n4 — Medication was not available\n5 — Side effects — I stopped taking medication\n6 — Other reason
```

**Setswana:**
```
🔴 Ga o ise o tseye meriana ya gago malatsi a le 3.\n\nGo fosa go nwa meriana go baya botsogo jwa gago mo kotsing e kgolo. Mopegatokomelo ya botsogo o setse o itsisiwe.\n\nTsweetswee re bolelele gore ke eng se se go thibelang go tla go tsaya:\n1 — Bothata jwa dipalangwa / kgakala\n2 — Ga ke kgone go itshola nako mo tirong\n3 — Lefelo la go tsaya le ne le tswetswe fa ke fitlha\n4 — Meriana e ne e seyo\n5 — Ditlamorago — ke ne ka emisa go nwa meriana\n6 — Lebaka le lengwe
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.60 `missed_transport` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
We understand. Let us find a closer pickup point for your next collection. Please share your location.
```

**Setswana:**
```
Re a tlhaloganya. A re boneng lefelo la go tsaya le le gaufi le wena bakeng sa go tla go tsaya mo nakong e e tlang. Tsweetswee abelana le rona lefelo la gago.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.61 `missed_work` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
We understand. We are working on extended collection hours and weekend options. For now, you can ask someone you trust to collect on your behalf with your ID and clinic card.
```

**Setswana:**
```
Re a tlhaloganya. Re dira mo go atolosa nako ya go tsaya le dikgetho tsa mafelobeke. Mo nakong eno, o ka kopa mongwe yo o mo tshepang gore a go tseyele meriana ka ID ya gago le karata ya kliniki.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.62 `missed_closed` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Thank you for telling us. We have logged this issue and will follow up with the pickup point. Please try again tomorrow, or we can suggest an alternative location.
```

**Setswana:**
```
Re a leboga go re itsise. Re setse re ngwadisitse bothata jono mme re tla sala morago le lefelo la go tsaya. Tsweetswee leka gape kamoso, kgotsa re ka go tlhagisetsa lefelo le lengwe le le farologaneng.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.63 `missed_no_stock` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Thank you for telling us. We have reported this stock issue. We will notify you as soon as your medication is available. We are sorry for the inconvenience.
```

**Setswana:**
```
Re a leboga go re itsise. Re setse re begile bothata jono jwa go tlhoka meriana. Re tla go itsise ka bonako fela fa meriana ya gago e setse e le teng. Re kopa maitshwarelo ka tshitiso eno.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.64 `missed_side_effects` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Please do not stop taking your medication without speaking to a healthcare worker first. Stopping suddenly can be dangerous.\n\nA nurse has been notified and will contact you to discuss your side effects and explore alternatives.\n\nIf you feel very unwell, call *10177* or visit your nearest clinic.
```

**Setswana:**
```
⚠️ Tsweetswee se emise go nwa meriana ya gago o sa bua pele le mopegatokomelo ya botsogo. Go emisa ka tshoganyetso go ka nna kotsi.\n\nMooki o setse a itsisiwe mme o tla ikgolaganya le wena go buisana ka ditlamorago tsa meriana le go sekaseka ditsela tse dingwe.\n\nFa o ikutlwa o sa itekanela thata, leletsa *10177* kgotsa etela kliniki e e gaufi le wena.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.65 `reengagement` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
Hello from BIZUSIZO 💊\n\nWe noticed you haven't collected your chronic medication recently. We know life gets busy and collecting can be difficult.\n\nWe want to help you get back on track. Your health matters.\n\nWould you like help finding a convenient pickup point?\n1 — Yes, help me collect my medication\n2 — I am collecting elsewhere now\n3 — I need to speak to someone
```

**Setswana:**
```
Dumelang go tswa kwa BIZUSIZO 💊\n\nRe lemogile gore ga o ise o tseye meriana ya gago ya malwetse a a sa foleng bosheng jaana. Re itse gore botshelo bo ka nna pitlagano mme go tla go tsaya meriana ga se ka tsotlhe.\n\nRe batla go go thusa gore o boele mo tseleng. Botsogo jwa gago bo botlhokwa.\n\nA o ka rata re go thuse go bona lefelo le le go siametseng la go tsaya meriana?\n1 — Ee, nthuse go tsaya meriana ya me\n2 — Ke setse ke tsaya kwa lefelong le lengwe\n3 — Ke tlhoka go bua le mongwe
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.66 `multimorbidity_warning` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Important: You collect medication for *${conditions}*. Missing your medication affects ALL of these conditions. Please collect as soon as possible.
```

**Setswana:**
```
⚠️ Botlhokwa: O tsaya meriana ya *${conditions}*. Go sa tseye meriana go ama otlhe malwetse ano. Tsweetswee tla o tsee meriana ya gago ka bonako jo bo ka kgonegang.
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

**Setswana:**
```
📱 Go bonana ka video go ka nna gone bakeng sa maemo a gago.\n\nO ka bua le mooki ka video call go na le go ya kliniki.\n\nA o ka rata:\n1 — Go beya go bonana ka video\n2 — Nnyaa ke a leboga, ke tla etela kliniki
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.68 `booking_api` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
✅ Your virtual consultation has been booked. You will receive a confirmation message with the date, time, and video link.
```

**Setswana:**
```
✅ Go bonana ga gago ka video go beilwe. O tla amogela molaetsa wa go tiisa ka letsatsi, nako, le linki ya video.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.69 `booking_whatsapp` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 To book your virtual consultation, please message this number on WhatsApp:\n\n*${phone}*\n\nTell them BIZUSIZO referred you and describe your symptoms.
```

**Setswana:**
```
📱 Go buka go bonana ga gago ka video, romela molaetsa go nomoro e ka WhatsApp:\n\n*${phone}*\n\nBa bolelele gore BIZUSIZO e go romeleng mme o tlhalose matshwao a gago.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.70 `not_available` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 Virtual consultations are not yet available in your area. Please visit your nearest clinic.
```

**Setswana:**
```
📱 Go bonana ka video ga go eso nne gone mo lefelong la gago. Etela kliniki e e gaufi.
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

**Setswana:**
```
📋 Dipholo tsa gago tsa *${testType}* di lokile.\n\nEtela kliniki ya gago go buisana le mooki ka dipholo.\n\nFa o buseditswe kliniki, se GA SE reye gore go na le bothata — dipholo tse dintsi ke tsa go tlhatlhoba ka tlwaelo.\n\nDipotso? Araba "dipholo" kgotsa leletsa kliniki ya gago.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.72 `result_action_required` *(index.js → LAB_MESSAGES)*

**English source:**
```
📋 Your *${testType}* results are ready and your healthcare provider would like to see you.\n\nPlease visit your clinic within the next 7 days. This is important for your ongoing care.\n\nIf you cannot get to the clinic, reply "help" and we will assist you.
```

**Setswana:**
```
📋 Dipholo tsa gago tsa *${testType}* di lokile mme mooki wa gago o batla go go bona.\n\nEtela kliniki ya gago mo malatsing a 7 a a tlang. Se se botlhokwa bakeng sa tlhokomelo ya gago.\n\nFa o sa kgone go fitlha kliniki, araba "thuso" mme re tla go thusa.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.73 `result_normal` *(index.js → LAB_MESSAGES)*

**English source:**
```
✅ Good news! Your *${testType}* results are back and everything looks normal.\n\nKeep taking your medication as prescribed. Your next check-up will be scheduled as usual.\n\nStay well! 💚
```

**Setswana:**
```
✅ Dikgang tse di monate! Dipholo tsa gago tsa *${testType}* di boile mme tsotlhe di bonala di siame.\n\nTswela pele go nwa dimelemo tsa gago jaaka o laetswe. Go tlhatlhoba ga gago go go latelang go tla rulaganngwa ka tlwaelo.\n\nNna sentle! 💚
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.74 `check_status` *(index.js → LAB_MESSAGES)*

**English source:**
```
Let me check your lab results. One moment please...
```

**Setswana:**
```
A ke tlhatlhobe dipholo tsa gago tsa laborathori. Motsotswana o le mongwe...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.75 `no_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
We do not have any lab results on file for you at the moment. If you are expecting results, please check with your clinic.\n\nResults typically take 3-7 working days depending on the test type.
```

**Setswana:**
```
Ga re na dipholo tsa laborathori ka wena ka nako e. Fa o letetse dipholo, botsa kliniki ya gago.\n\nDipholo ka tlwaelo di tsaya malatsi a 3-7 a tiro go ya ka mofuta wa teko.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.76 `pending_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
Your *${testType}* test from *${testDate}* is still being processed. We will notify you on WhatsApp as soon as results are available.\n\nYou do not need to visit the clinic to check — we will come to you.
```

**Setswana:**
```
Teko ya gago ya *${testType}* ya *${testDate}* e sa ntse e dirwa. Re tla go itsise ka WhatsApp fa dipholo di le teng.\n\nGa o tlhoke go etela kliniki go tlhatlhoba — re tla tla go wena.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---


## PART 2 — Clinical safety keywords (58 rules)

The system scans patient text for keyword combinations and assigns a triage level (RED = emergency, ORANGE = very urgent, YELLOW = urgent) **independent of the AI**. Each rule below shows the English trigger phrases (so you know what the rule is for) and the current Setswana keywords the system recognises. These are natural patient phrasings, not clinical terminology.

**For each rule, please:**
1. Confirm the listed Setswana keywords are correct and natural for how a patient would type on WhatsApp.
2. Add any common phrasings a patient might use for this symptom that are **not** currently listed.
3. Flag any keyword that sounds unnatural, overly formal, or potentially misleading.

**Priority:** ✨ high (RED rules, life-threatening) · important (ORANGE) · ⚪ lower priority (YELLOW)

### RED discriminators

#### RED 1. `respiratory_cardiac_arrest`
*── RED DISCRIMINATORS ── | ════════════════════════════════════════════════════════════════ | RED 1: RESPIRATORY / CARDIAC ARREST — not breathing, heart stopped | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a a hefemuli` — _is this Setswana? ☐ yes  ☐ no_
- `a a phefumolohe` — _is this Setswana? ☐ yes  ☐ no_
- `awaphefumuli` — _is this Setswana? ☐ yes  ☐ no_
- `cardiac arrest` — _is this Setswana? ☐ yes  ☐ no_
- `ga go na go hema` — _is this Setswana? ☐ yes  ☐ no_
- `heart stopped` — _is this Setswana? ☐ yes  ☐ no_
- `inhliziyo yama` — _is this Setswana? ☐ yes  ☐ no_
- `inhliziyo yema` — _is this Setswana? ☐ yes  ☐ no_
- `no breathing` — _is this Setswana? ☐ yes  ☐ no_
- `not breathing` — _is this Setswana? ☐ yes  ☐ no_
- `o emisitse go hema` — _is this Setswana? ☐ yes  ☐ no_
- `o tlogetse go hema` — _is this Setswana? ☐ yes  ☐ no_
- `stopped breathing` — _is this Setswana? ☐ yes  ☐ no_
- `wehlil' emzimbeni` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 2. `unconscious`
*════════════════════════════════════════════════════════════════ | RED 2: UNCONSCIOUS — unresponsive, not waking, collapsed | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `ga a arabe`
- `o wetse fa fatshe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a a hlamuli` — _is this Setswana? ☐ yes  ☐ no_
- `abuyi` — _is this Setswana? ☐ yes  ☐ no_
- `akanyakazi` — _is this Setswana? ☐ yes  ☐ no_
- `alawuli` — _is this Setswana? ☐ yes  ☐ no_
- `alibeki` — _is this Setswana? ☐ yes  ☐ no_
- `angaphaphami` — _is this Setswana? ☐ yes  ☐ no_
- `aziphaphami` — _is this Setswana? ☐ yes  ☐ no_
- `collapsed and not moving` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tsoge` — _is this Setswana? ☐ yes  ☐ no_
- `ha a arabe` — _is this Setswana? ☐ yes  ☐ no_
- `limp and not moving` — _is this Setswana? ☐ yes  ☐ no_
- `not waking` — _is this Setswana? ☐ yes  ☐ no_
- `o wele fase` — _is this Setswana? ☐ yes  ☐ no_
- `passed out` — _is this Setswana? ☐ yes  ☐ no_
- `unconscious` — _is this Setswana? ☐ yes  ☐ no_
- `unresponsive` — _is this Setswana? ☐ yes  ☐ no_
- `uwele phansi` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 3. `active_seizure`
*════════════════════════════════════════════════════════════════ | RED 3: ACTIVE SEIZURE — currently fitting, convulsing | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `body shaking uncontrolled` — _is this Setswana? ☐ yes  ☐ no_
- `convulsing now` — _is this Setswana? ☐ yes  ☐ no_
- `currently fitting` — _is this Setswana? ☐ yes  ☐ no_
- `fitting now` — _is this Setswana? ☐ yes  ☐ no_
- `having a fit` — _is this Setswana? ☐ yes  ☐ no_
- `isidina manje` — _is this Setswana? ☐ yes  ☐ no_
- `jaanong o tshwarwa ke sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `jaanong o tshwerwe ke sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa jaanong` — _is this Setswana? ☐ yes  ☐ no_
- `o tshwerwe ke bolwetse` — _is this Setswana? ☐ yes  ☐ no_
- `seizure now` — _is this Setswana? ☐ yes  ☐ no_
- `shaking and not stopping` — _is this Setswana? ☐ yes  ☐ no_
- `u swiwa nga vhulwadze` — _is this Setswana? ☐ yes  ☐ no_
- `unamaxhala ngoku` — _is this Setswana? ☐ yes  ☐ no_
- `unyikinyeka ngoku` — _is this Setswana? ☐ yes  ☐ no_
- `val nou` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 4. `cardiac_emergency`
*════════════════════════════════════════════════════════════════ | RED 4: CARDIAC EMERGENCY — chest pain + breathing difficulty | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a ndzi hefemuli` — _is this Setswana? ☐ yes  ☐ no_
- `a thi fembi` — _is this Setswana? ☐ yes  ☐ no_
- `asem` — _is this Setswana? ☐ yes  ☐ no_
- `asemhaling` — _is this Setswana? ☐ yes  ☐ no_
- `can't breathe` — _is this Setswana? ☐ yes  ☐ no_
- `chest pain` — _is this Setswana? ☐ yes  ☐ no_
- `difficulty breathing` — _is this Setswana? ☐ yes  ☐ no_
- `ga ke heme` — _is this Setswana? ☐ yes  ☐ no_
- `go hema` — _is this Setswana? ☐ yes  ☐ no_
- `go hema go thata` — _is this Setswana? ☐ yes  ☐ no_
- `ho phefumoloha` — _is this Setswana? ☐ yes  ☐ no_
- `ku hefemula` — _is this Setswana? ☐ yes  ☐ no_
- `ku hefemula ku tika` — _is this Setswana? ☐ yes  ☐ no_
- `kuphefumula` — _is this Setswana? ☐ yes  ☐ no_
- `kuphefumula kumatima` — _is this Setswana? ☐ yes  ☐ no_
- `phefumla` — _is this Setswana? ☐ yes  ☐ no_
- `phefumula` — _is this Setswana? ☐ yes  ☐ no_
- `short of breath` — _is this Setswana? ☐ yes  ☐ no_
- `shortness of breath` — _is this Setswana? ☐ yes  ☐ no_
- `sifuba` — _is this Setswana? ☐ yes  ☐ no_
- `struggling to breathe` — _is this Setswana? ☐ yes  ☐ no_
- `tshifuva` — _is this Setswana? ☐ yes  ☐ no_
- `u femba` — _is this Setswana? ☐ yes  ☐ no_
- `u femba hu a onda` — _is this Setswana? ☐ yes  ☐ no_
- `uphefumula kanzima` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 5. `cardiac_emergency_radiation`
*Complements the chest+breathing rule above. Surfaced by eval P01: chest + arm | heaviness + sweating had no deterministic net; LLM caught it at 95% confidence | but no fallback existed. Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr | pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a opela` — _is this Setswana? ☐ yes  ☐ no_
- `a tsidifala` — _is this Setswana? ☐ yes  ☐ no_
- `anamela` — _is this Setswana? ☐ yes  ☐ no_
- `arm aching` — _is this Setswana? ☐ yes  ☐ no_
- `arm feels heavy` — _is this Setswana? ☐ yes  ☐ no_
- `arm feels numb` — _is this Setswana? ☐ yes  ☐ no_
- `arm heavy` — _is this Setswana? ☐ yes  ☐ no_
- `arm is dof` — _is this Setswana? ☐ yes  ☐ no_
- `arm is heavy` — _is this Setswana? ☐ yes  ☐ no_
- `arm is numb` — _is this Setswana? ☐ yes  ☐ no_
- `arm numb` — _is this Setswana? ☐ yes  ☐ no_
- `arm tingling` — _is this Setswana? ☐ yes  ☐ no_
- `bo anamela` — _is this Setswana? ☐ yes  ☐ no_
- `bo fologela` — _is this Setswana? ☐ yes  ☐ no_
- `boima` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `chest discomfort` — _is this Setswana? ☐ yes  ☐ no_
- `chest heaviness` — _is this Setswana? ☐ yes  ☐ no_
- `chest hurts` — _is this Setswana? ☐ yes  ☐ no_
- `chest is heavy` — _is this Setswana? ☐ yes  ☐ no_
- `chest pain` — _is this Setswana? ☐ yes  ☐ no_
- `chest pressure` — _is this Setswana? ☐ yes  ☐ no_
- `chest tight` — _is this Setswana? ☐ yes  ☐ no_
- `chest tightness` — _is this Setswana? ☐ yes  ☐ no_
- `clammy` — _is this Setswana? ☐ yes  ☐ no_
- `cold sweat` — _is this Setswana? ☐ yes  ☐ no_
- `cold sweats` — _is this Setswana? ☐ yes  ☐ no_
- `diaphoresis` — _is this Setswana? ☐ yes  ☐ no_
- `fologela` — _is this Setswana? ☐ yes  ☐ no_
- `go pitlagana` — _is this Setswana? ☐ yes  ☐ no_
- `go sa phuthologa` — _is this Setswana? ☐ yes  ☐ no_
- `in my arm` — _is this Setswana? ☐ yes  ☐ no_
- `ingalo ibuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `ingalo inzima` — _is this Setswana? ☐ yes  ☐ no_
- `jaw ache` — _is this Setswana? ☐ yes  ☐ no_
- `jaw hurts` — _is this Setswana? ☐ yes  ☐ no_
- `jaw pain` — _is this Setswana? ☐ yes  ☐ no_
- `kgatelelo` — _is this Setswana? ☐ yes  ☐ no_
- `kolobile` — _is this Setswana? ☐ yes  ☐ no_
- `le a opela` — _is this Setswana? ☐ yes  ☐ no_
- `le a tonya` — _is this Setswana? ☐ yes  ☐ no_
- `le ikutlwa le le boima` — _is this Setswana? ☐ yes  ☐ no_
- `le ikutlwa le sule` — _is this Setswana? ☐ yes  ☐ no_
- `le le boima` — _is this Setswana? ☐ yes  ☐ no_
- `le sule` — _is this Setswana? ☐ yes  ☐ no_
- `left arm` — _is this Setswana? ☐ yes  ☐ no_
- `left shoulder` — _is this Setswana? ☐ yes  ☐ no_
- `legare` — _is this Setswana? ☐ yes  ☐ no_
- `legare la molema` — _is this Setswana? ☐ yes  ☐ no_
- `letlalo` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo la me` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo la moja` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo la molema` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo le boima` — _is this Setswana? ☐ yes  ☐ no_
- `letsoho le boima` — _is this Setswana? ☐ yes  ☐ no_
- `mofufutsho o tsididi` — _is this Setswana? ☐ yes  ☐ no_
- `mohonga u vhavha` — _is this Setswana? ☐ yes  ☐ no_
- `motlhala` — _is this Setswana? ☐ yes  ☐ no_
- `motlhala wa me` — _is this Setswana? ☐ yes  ☐ no_
- `mouoane` — _is this Setswana? ☐ yes  ☐ no_
- `muheme wa tsunda` — _is this Setswana? ☐ yes  ☐ no_
- `muheme wu vava` — _is this Setswana? ☐ yes  ☐ no_
- `my arm` — _is this Setswana? ☐ yes  ☐ no_
- `o a opela` — _is this Setswana? ☐ yes  ☐ no_
- `o fufuleha mofufutsho o batang` — _is this Setswana? ☐ yes  ☐ no_
- `o fufulela phefo e tonyago` — _is this Setswana? ☐ yes  ☐ no_
- `o montsi` — _is this Setswana? ☐ yes  ☐ no_
- `o tsididi` — _is this Setswana? ☐ yes  ☐ no_
- `opela` — _is this Setswana? ☐ yes  ☐ no_
- `pain down my shoulder` — _is this Setswana? ☐ yes  ☐ no_
- `pain in jaw` — _is this Setswana? ☐ yes  ☐ no_
- `pain in my jaw` — _is this Setswana? ☐ yes  ☐ no_
- `pain to shoulder` — _is this Setswana? ☐ yes  ☐ no_
- `pitlagana` — _is this Setswana? ☐ yes  ☐ no_
- `pitlagane` — _is this Setswana? ☐ yes  ☐ no_
- `radiating` — _is this Setswana? ☐ yes  ☐ no_
- `right arm` — _is this Setswana? ☐ yes  ☐ no_
- `se a opela` — _is this Setswana? ☐ yes  ☐ no_
- `se pitlagane` — _is this Setswana? ☐ yes  ☐ no_
- `seledu se bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `shoulder pain` — _is this Setswana? ☐ yes  ☐ no_
- `spreading to` — _is this Setswana? ☐ yes  ☐ no_
- `spreads to` — _is this Setswana? ☐ yes  ☐ no_
- `sule` — _is this Setswana? ☐ yes  ☐ no_
- `sweating` — _is this Setswana? ☐ yes  ☐ no_
- `sweaty` — _is this Setswana? ☐ yes  ☐ no_
- `sweet bars` — _is this Setswana? ☐ yes  ☐ no_
- `tonya` — _is this Setswana? ☐ yes  ☐ no_
- `tshanḓa tsho lemala` — _is this Setswana? ☐ yes  ☐ no_
- `tsididi` — _is this Setswana? ☐ yes  ☐ no_
- `tsidifala` — _is this Setswana? ☐ yes  ☐ no_
- `tsikinyega` — _is this Setswana? ☐ yes  ☐ no_
- `u suka ngoho` — _is this Setswana? ☐ yes  ☐ no_
- `umjuluk' obandayo` — _is this Setswana? ☐ yes  ☐ no_
- `uyabila` — _is this Setswana? ☐ yes  ☐ no_
- `voko ri tika` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 6. `acs_radiation`
*════════════════════════════════════════════════════════════════ | RED 5: ACS RADIATION — chest pain + arm/jaw pain + sweating | Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `arm` — _is this Setswana? ☐ yes  ☐ no_
- `arm pain` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `chest hurts` — _is this Setswana? ☐ yes  ☐ no_
- `chest pain` — _is this Setswana? ☐ yes  ☐ no_
- `chest tight` — _is this Setswana? ☐ yes  ☐ no_
- `feels like something sitting on my chest` — _is this Setswana? ☐ yes  ☐ no_
- `fhungo` — _is this Setswana? ☐ yes  ☐ no_
- `go fufulelwa` — _is this Setswana? ☐ yes  ☐ no_
- `go utlwalega e kete go na le sengwe se se ntseng mo sehubeng` — _is this Setswana? ☐ yes  ☐ no_
- `ihlombe` — _is this Setswana? ☐ yes  ☐ no_
- `ingalo` — _is this Setswana? ☐ yes  ☐ no_
- `iqatha` — _is this Setswana? ☐ yes  ☐ no_
- `jaw pain` — _is this Setswana? ☐ yes  ☐ no_
- `khana` — _is this Setswana? ☐ yes  ☐ no_
- `left arm` — _is this Setswana? ☐ yes  ☐ no_
- `legare` — _is this Setswana? ☐ yes  ☐ no_
- `legetla` — _is this Setswana? ☐ yes  ☐ no_
- `lehetla` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo la molema` — _is this Setswana? ☐ yes  ☐ no_
- `letsoho` — _is this Setswana? ☐ yes  ☐ no_
- `lihlombe` — _is this Setswana? ☐ yes  ☐ no_
- `mofufutšo` — _is this Setswana? ☐ yes  ☐ no_
- `motlhala` — _is this Setswana? ☐ yes  ☐ no_
- `mouoane` — _is this Setswana? ☐ yes  ☐ no_
- `o a fufuleha` — _is this Setswana? ☐ yes  ☐ no_
- `o a fufulela` — _is this Setswana? ☐ yes  ☐ no_
- `opela` — _is this Setswana? ☐ yes  ☐ no_
- `pitlagane` — _is this Setswana? ☐ yes  ☐ no_
- `rikatla` — _is this Setswana? ☐ yes  ☐ no_
- `se a opela` — _is this Setswana? ☐ yes  ☐ no_
- `se pitlagane` — _is this Setswana? ☐ yes  ☐ no_
- `shoulder pain` — _is this Setswana? ☐ yes  ☐ no_
- `sifuba` — _is this Setswana? ☐ yes  ☐ no_
- `skouer` — _is this Setswana? ☐ yes  ☐ no_
- `sweating` — _is this Setswana? ☐ yes  ☐ no_
- `sweet` — _is this Setswana? ☐ yes  ☐ no_
- `sweetvogtig` — _is this Setswana? ☐ yes  ☐ no_
- `tshanḓa` — _is this Setswana? ☐ yes  ☐ no_
- `u a suka` — _is this Setswana? ☐ yes  ☐ no_
- `u a suza` — _is this Setswana? ☐ yes  ☐ no_
- `uyabila` — _is this Setswana? ☐ yes  ☐ no_
- `voko` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 7. `obstetric_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 6: OBSTETRIC HAEMORRHAGE — pregnant + bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a mantsi` — _is this Setswana? ☐ yes  ☐ no_
- `bleeding` — _is this Setswana? ☐ yes  ☐ no_
- `bleeding heavily` — _is this Setswana? ☐ yes  ☐ no_
- `blood` — _is this Setswana? ☐ yes  ☐ no_
- `boimana` — _is this Setswana? ☐ yes  ☐ no_
- `dutla` — _is this Setswana? ☐ yes  ☐ no_
- `go dutla madi` — _is this Setswana? ☐ yes  ☐ no_
- `go dutla madi a mantsi thata` — _is this Setswana? ☐ yes  ☐ no_
- `go dutla madi go go masisi` — _is this Setswana? ☐ yes  ☐ no_
- `go dutla madi thata` — _is this Setswana? ☐ yes  ☐ no_
- `go lahlegelwa ke madi thata` — _is this Setswana? ☐ yes  ☐ no_
- `haemorrhage` — _is this Setswana? ☐ yes  ☐ no_
- `hemorrhage` — _is this Setswana? ☐ yes  ☐ no_
- `imile` — _is this Setswana? ☐ yes  ☐ no_
- `ingati` — _is this Setswana? ☐ yes  ☐ no_
- `ke ipaakanyeditse` — _is this Setswana? ☐ yes  ☐ no_
- `madi` — _is this Setswana? ☐ yes  ☐ no_
- `massive bleeding` — _is this Setswana? ☐ yes  ☐ no_
- `ngati` — _is this Setswana? ☐ yes  ☐ no_
- `o imile` — _is this Setswana? ☐ yes  ☐ no_
- `opha` — _is this Setswana? ☐ yes  ☐ no_
- `pregnancy` — _is this Setswana? ☐ yes  ☐ no_
- `pregnant` — _is this Setswana? ☐ yes  ☐ no_
- `swangari` — _is this Setswana? ☐ yes  ☐ no_
- `uyopha` — _is this Setswana? ☐ yes  ☐ no_
- `zwigolo` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 8. `obstetric_cord_or_fetal`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 7: OBSTETRIC CORD / FETAL EMERGENCY | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `ngwana ga a tshikinyege`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `baba beweeg nie` — _is this Setswana? ☐ yes  ☐ no_
- `baby not moving` — _is this Setswana? ☐ yes  ☐ no_
- `baby stopped moving` — _is this Setswana? ☐ yes  ☐ no_
- `cord came out` — _is this Setswana? ☐ yes  ☐ no_
- `cord is out` — _is this Setswana? ☐ yes  ☐ no_
- `mhahla wu humile` — _is this Setswana? ☐ yes  ☐ no_
- `mohara o tsoile` — _is this Setswana? ☐ yes  ☐ no_
- `mohara o tswile` — _is this Setswana? ☐ yes  ☐ no_
- `mohara o tšwile` — _is this Setswana? ☐ yes  ☐ no_
- `mohlola wo bva` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana ga a šikinyege` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana ha a tshikinyege` — _is this Setswana? ☐ yes  ☐ no_
- `no fetal movement` — _is this Setswana? ☐ yes  ☐ no_
- `nwana a a tshikinyeki` — _is this Setswana? ☐ yes  ☐ no_
- `prolapsed cord` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 9. `envenomation`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 8: SNAKE BITE — all 11 languages | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `bit by snake` — _is this Setswana? ☐ yes  ☐ no_
- `bitten by snake` — _is this Setswana? ☐ yes  ☐ no_
- `go longwa ke noga` — _is this Setswana? ☐ yes  ☐ no_
- `noga e a loma` — _is this Setswana? ☐ yes  ☐ no_
- `noga e nkometse` — _is this Setswana? ☐ yes  ☐ no_
- `nyoka yi n'wi lumile` — _is this Setswana? ☐ yes  ☐ no_
- `o lomilwe ke noga` — _is this Setswana? ☐ yes  ☐ no_
- `snake bit` — _is this Setswana? ☐ yes  ☐ no_
- `snake bite` — _is this Setswana? ☐ yes  ☐ no_
- `snakebite` — _is this Setswana? ☐ yes  ☐ no_
- `ṋowa` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 10. `severe_burns`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `metsi a a fisang`
- `o tšhutse`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `body on fire` — _is this Setswana? ☐ yes  ☐ no_
- `burn from explosion` — _is this Setswana? ☐ yes  ☐ no_
- `burning all over` — _is this Setswana? ☐ yes  ☐ no_
- `burns to face and hands` — _is this Setswana? ☐ yes  ☐ no_
- `burnt all over` — _is this Setswana? ☐ yes  ☐ no_
- `izandla nobuso kushisile` — _is this Setswana? ☐ yes  ☐ no_
- `izandla nobuso zitshisiwe` — _is this Setswana? ☐ yes  ☐ no_
- `large burn` — _is this Setswana? ☐ yes  ☐ no_
- `meetse a go fisha` — _is this Setswana? ☐ yes  ☐ no_
- `metsi a chesang` — _is this Setswana? ☐ yes  ☐ no_
- `o cheswe` — _is this Setswana? ☐ yes  ☐ no_
- `o tshiwa` — _is this Setswana? ☐ yes  ☐ no_
- `severe burn` — _is this Setswana? ☐ yes  ☐ no_
- `u pfile` — _is this Setswana? ☐ yes  ☐ no_
- `ushiswe kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `vuur oor liggaam` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 11. `severe_burns_context`
*════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `metsi a a fisang godimo ga`
- `sefatlhego`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `back` — _is this Setswana? ☐ yes  ☐ no_
- `bene` — _is this Setswana? ☐ yes  ☐ no_
- `boiling water on` — _is this Setswana? ☐ yes  ☐ no_
- `bors` — _is this Setswana? ☐ yes  ☐ no_
- `buso` — _is this Setswana? ☐ yes  ☐ no_
- `chest` — _is this Setswana? ☐ yes  ☐ no_
- `face` — _is this Setswana? ☐ yes  ☐ no_
- `gesig` — _is this Setswana? ☐ yes  ☐ no_
- `imilente` — _is this Setswana? ☐ yes  ☐ no_
- `imilenze` — _is this Setswana? ☐ yes  ☐ no_
- `isisu` — _is this Setswana? ☐ yes  ☐ no_
- `khana` — _is this Setswana? ☐ yes  ☐ no_
- `khwiri` — _is this Setswana? ☐ yes  ☐ no_
- `legs` — _is this Setswana? ☐ yes  ☐ no_
- `lumbu` — _is this Setswana? ☐ yes  ☐ no_
- `maag` — _is this Setswana? ☐ yes  ☐ no_
- `maoto` — _is this Setswana? ☐ yes  ☐ no_
- `milenge` — _is this Setswana? ☐ yes  ☐ no_
- `milenzhe` — _is this Setswana? ☐ yes  ☐ no_
- `mokokotlo` — _is this Setswana? ☐ yes  ☐ no_
- `mokwatla` — _is this Setswana? ☐ yes  ☐ no_
- `mpa` — _is this Setswana? ☐ yes  ☐ no_
- `muṱana` — _is this Setswana? ☐ yes  ☐ no_
- `ngalati` — _is this Setswana? ☐ yes  ☐ no_
- `nkolo` — _is this Setswana? ☐ yes  ☐ no_
- `rug` — _is this Setswana? ☐ yes  ☐ no_
- `sefahlego` — _is this Setswana? ☐ yes  ☐ no_
- `sefahleho` — _is this Setswana? ☐ yes  ☐ no_
- `sifuba` — _is this Setswana? ☐ yes  ☐ no_
- `sisu` — _is this Setswana? ☐ yes  ☐ no_
- `stomach` — _is this Setswana? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this Setswana? ☐ yes  ☐ no_
- `umhlana` — _is this Setswana? ☐ yes  ☐ no_
- `umhlane` — _is this Setswana? ☐ yes  ☐ no_
- `xikandza` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 12. `neonatal_apnoea`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `baby not breathing` — _is this Setswana? ☐ yes  ☐ no_
- `baby stopped breathing` — _is this Setswana? ☐ yes  ☐ no_
- `infant not breathing` — _is this Setswana? ☐ yes  ☐ no_
- `newborn not breathing` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana o emisitse go hema` — _is this Setswana? ☐ yes  ☐ no_
- `nwana a a hefemuli` — _is this Setswana? ☐ yes  ☐ no_
- `nwana lontsongo a nga hefemuli` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 13. `paediatric_unconscious`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `baby unconscious` — _is this Setswana? ☐ yes  ☐ no_
- `child unconscious` — _is this Setswana? ☐ yes  ☐ no_
- `infant unconscious` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana ga a itse sepe` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana o phutlhame` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana o wele fa fatshe` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana o wetse` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana o wetse fatshe` — _is this Setswana? ☐ yes  ☐ no_
- `nwana a nga vuki` — _is this Setswana? ☐ yes  ☐ no_
- `toddler collapsed` — _is this Setswana? ☐ yes  ☐ no_
- `umntwana oqulekile` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 14. `meningococcal_rash`
*════════════════════════════════════════════════════════════════ | RED 11: MENINGOCOCCAL RASH — purple/non-blanching | Extended to all 11 languages (nso/tn/st/ts/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `amabala amnyama` — _is this Setswana? ☐ yes  ☐ no_
- `amabala aphuzi` — _is this Setswana? ☐ yes  ☐ no_
- `blood rash` — _is this Setswana? ☐ yes  ☐ no_
- `dark rash` — _is this Setswana? ☐ yes  ☐ no_
- `ga le nyelele` — _is this Setswana? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a lefifi` — _is this Setswana? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a pherese` — _is this Setswana? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a sa nyeleleng fa o le tobetsa` — _is this Setswana? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a madi` — _is this Setswana? ☐ yes  ☐ no_
- `matheba a sa nyeleleng fa o tobetsa ka galase` — _is this Setswana? ☐ yes  ☐ no_
- `nie-verbleekende uitslag` — _is this Setswana? ☐ yes  ☐ no_
- `non-blanching rash` — _is this Setswana? ☐ yes  ☐ no_
- `purple rash` — _is this Setswana? ☐ yes  ☐ no_
- `rash pressing glass` — _is this Setswana? ☐ yes  ☐ no_
- `rash that doesn't fade` — _is this Setswana? ☐ yes  ☐ no_
- `rash won't disappear` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 15. `anaphylaxis`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 12: ANAPHYLAXIS — throat/face swelling after sting/food | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `molomo o rurugile`
- `sefatlhego`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `allegi` — _is this Setswana? ☐ yes  ☐ no_
- `allegi ya dijo` — _is this Setswana? ☐ yes  ☐ no_
- `bee` — _is this Setswana? ☐ yes  ☐ no_
- `bye` — _is this Setswana? ☐ yes  ☐ no_
- `can't swallow` — _is this Setswana? ☐ yes  ☐ no_
- `dijo` — _is this Setswana? ☐ yes  ☐ no_
- `e rurugile` — _is this Setswana? ☐ yes  ☐ no_
- `face swelling` — _is this Setswana? ☐ yes  ☐ no_
- `food allergy` — _is this Setswana? ☐ yes  ☐ no_
- `go loma` — _is this Setswana? ☐ yes  ☐ no_
- `go sa amogelege` — _is this Setswana? ☐ yes  ☐ no_
- `go sa amogelege ga dijo` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhaba` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhaba moento` — _is this Setswana? ☐ yes  ☐ no_
- `imbumba` — _is this Setswana? ☐ yes  ☐ no_
- `injection` — _is this Setswana? ☐ yes  ☐ no_
- `inspuiting` — _is this Setswana? ☐ yes  ☐ no_
- `kos` — _is this Setswana? ☐ yes  ☐ no_
- `lips swelling` — _is this Setswana? ☐ yes  ☐ no_
- `medication` — _is this Setswana? ☐ yes  ☐ no_
- `melemo` — _is this Setswana? ☐ yes  ☐ no_
- `melomo` — _is this Setswana? ☐ yes  ☐ no_
- `moento` — _is this Setswana? ☐ yes  ☐ no_
- `mokololo` — _is this Setswana? ☐ yes  ☐ no_
- `mpfundla` — _is this Setswana? ☐ yes  ☐ no_
- `nko` — _is this Setswana? ☐ yes  ☐ no_
- `nonyane` — _is this Setswana? ☐ yes  ☐ no_
- `nose` — _is this Setswana? ☐ yes  ☐ no_
- `nosi` — _is this Setswana? ☐ yes  ☐ no_
- `notši` — _is this Setswana? ☐ yes  ☐ no_
- `nut` — _is this Setswana? ☐ yes  ☐ no_
- `nyosi` — _is this Setswana? ☐ yes  ☐ no_
- `o a tswalega` — _is this Setswana? ☐ yes  ☐ no_
- `rurugile` — _is this Setswana? ☐ yes  ☐ no_
- `se rurugile` — _is this Setswana? ☐ yes  ☐ no_
- `sting` — _is this Setswana? ☐ yes  ☐ no_
- `swakudya` — _is this Setswana? ☐ yes  ☐ no_
- `throat closing` — _is this Setswana? ☐ yes  ☐ no_
- `throat swelling` — _is this Setswana? ☐ yes  ☐ no_
- `tswalega` — _is this Setswana? ☐ yes  ☐ no_
- `umjovo` — _is this Setswana? ☐ yes  ☐ no_
- `zwiliwa` — _is this Setswana? ☐ yes  ☐ no_
- `ṋovhela` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 16. `traumatic_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `blood everywhere` — _is this Setswana? ☐ yes  ☐ no_
- `blood pouring` — _is this Setswana? ☐ yes  ☐ no_
- `can't stop bleeding` — _is this Setswana? ☐ yes  ☐ no_
- `ingati ayinqamuki` — _is this Setswana? ☐ yes  ☐ no_
- `ingati iyampompoza` — _is this Setswana? ☐ yes  ☐ no_
- `madi a a elela` — _is this Setswana? ☐ yes  ☐ no_
- `madi a elela` — _is this Setswana? ☐ yes  ☐ no_
- `madi a elela thata` — _is this Setswana? ☐ yes  ☐ no_
- `madi a phatloga a tswa` — _is this Setswana? ☐ yes  ☐ no_
- `madi ga a eme` — _is this Setswana? ☐ yes  ☐ no_
- `madi go tletse gongwe le gongwe` — _is this Setswana? ☐ yes  ☐ no_
- `madi ha a eme` — _is this Setswana? ☐ yes  ☐ no_
- `ngati a yi yimi` — _is this Setswana? ☐ yes  ☐ no_
- `ngati yi humesa` — _is this Setswana? ☐ yes  ☐ no_
- `o hlabilwe` — _is this Setswana? ☐ yes  ☐ no_
- `o thuntswe e bile o dutla madi` — _is this Setswana? ☐ yes  ☐ no_
- `o tlhabilwe mme o dutla madi` — _is this Setswana? ☐ yes  ☐ no_
- `o ṱhavhiwa` — _is this Setswana? ☐ yes  ☐ no_
- `shot and bleeding` — _is this Setswana? ☐ yes  ☐ no_
- `spurting blood` — _is this Setswana? ☐ yes  ☐ no_
- `stabbed and bleeding` — _is this Setswana? ☐ yes  ☐ no_
- `u tlhabiwe` — _is this Setswana? ☐ yes  ☐ no_
- `udutshulwe` — _is this Setswana? ☐ yes  ☐ no_
- `udutyulwe` — _is this Setswana? ☐ yes  ☐ no_
- `ugwaziwe` — _is this Setswana? ☐ yes  ☐ no_
- `ugwazwe` — _is this Setswana? ☐ yes  ☐ no_
- `uhlabwe` — _is this Setswana? ☐ yes  ☐ no_
- `ukopha okunganqamuki` — _is this Setswana? ☐ yes  ☐ no_
- `uyopha kakhulu` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### ORANGE discriminators

#### ORANGE 1. `stroke_facial_droop`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `letlhakore le lengwe la sefatlhego`
- `sefatlhego ga se lekalekane`
- `sefatlhego se olela ka fa letlhakoreng`
- `sefatlhego se theogetse`
- `sefatlhego se wele`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `buso buyehla` — _is this Setswana? ☐ yes  ☐ no_
- `face drooping` — _is this Setswana? ☐ yes  ☐ no_
- `face dropped` — _is this Setswana? ☐ yes  ☐ no_
- `facial droop` — _is this Setswana? ☐ yes  ☐ no_
- `gesig hang` — _is this Setswana? ☐ yes  ☐ no_
- `gesig laat sak` — _is this Setswana? ☐ yes  ☐ no_
- `molomo o kgopame` — _is this Setswana? ☐ yes  ☐ no_
- `molomo o kgopiše` — _is this Setswana? ☐ yes  ☐ no_
- `molomo o kobegile` — _is this Setswana? ☐ yes  ☐ no_
- `mond skeef` — _is this Setswana? ☐ yes  ☐ no_
- `mouth twisted` — _is this Setswana? ☐ yes  ☐ no_
- `mulomo wo goba` — _is this Setswana? ☐ yes  ☐ no_
- `nomo wu gombile` — _is this Setswana? ☐ yes  ☐ no_
- `one side face` — _is this Setswana? ☐ yes  ☐ no_
- `skewe glimlag` — _is this Setswana? ☐ yes  ☐ no_
- `smile crooked` — _is this Setswana? ☐ yes  ☐ no_
- `tshifhaṱuwo tsho thela` — _is this Setswana? ☐ yes  ☐ no_
- `uneven face` — _is this Setswana? ☐ yes  ☐ no_
- `xikandza xi rhelerile` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 2. `stroke_arm_weakness`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `letsogo le bokoa`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `arm dropping` — _is this Setswana? ☐ yes  ☐ no_
- `arm gevoelloos` — _is this Setswana? ☐ yes  ☐ no_
- `arm is swak` — _is this Setswana? ☐ yes  ☐ no_
- `arm numb` — _is this Setswana? ☐ yes  ☐ no_
- `arm wat sak` — _is this Setswana? ☐ yes  ☐ no_
- `arm weakness` — _is this Setswana? ☐ yes  ☐ no_
- `armswakheid` — _is this Setswana? ☐ yes  ☐ no_
- `can't lift arm` — _is this Setswana? ☐ yes  ☐ no_
- `een arm is swak` — _is this Setswana? ☐ yes  ☐ no_
- `hand swak` — _is this Setswana? ☐ yes  ☐ no_
- `hand weak` — _is this Setswana? ☐ yes  ☐ no_
- `ingalo ayinyakazi` — _is this Setswana? ☐ yes  ☐ no_
- `ingalo ibhudlana` — _is this Setswana? ☐ yes  ☐ no_
- `ingalo ibuthathaka` — _is this Setswana? ☐ yes  ☐ no_
- `kan nie arm oplig` — _is this Setswana? ☐ yes  ☐ no_
- `left side weak` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo ga le tshikinyege` — _is this Setswana? ☐ yes  ☐ no_
- `letsogo ga le šikinyege` — _is this Setswana? ☐ yes  ☐ no_
- `letsoho ha le tshikinyehe` — _is this Setswana? ☐ yes  ☐ no_
- `one arm weak` — _is this Setswana? ☐ yes  ☐ no_
- `right side weak` — _is this Setswana? ☐ yes  ☐ no_
- `tshanḓa a tshi tshikinyei` — _is this Setswana? ☐ yes  ☐ no_
- `uhlangothi lubuthakathaka` — _is this Setswana? ☐ yes  ☐ no_
- `voko a ri tshikinyeki` — _is this Setswana? ☐ yes  ☐ no_
- `weakness one side` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 3. `stroke_speech`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `mafoko ga a tswe sentle`
- `o bua thata`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `akukhulumeki` — _is this Setswana? ☐ yes  ☐ no_
- `amazwi akaphumi kakuhle` — _is this Setswana? ☐ yes  ☐ no_
- `amazwi awaphumi kahle` — _is this Setswana? ☐ yes  ☐ no_
- `can't find words` — _is this Setswana? ☐ yes  ☐ no_
- `can't speak properly` — _is this Setswana? ☐ yes  ☐ no_
- `confused talking` — _is this Setswana? ☐ yes  ☐ no_
- `emagama akaphumi kahle` — _is this Setswana? ☐ yes  ☐ no_
- `maipfi ha a ḓi bvi zwavhuḓi` — _is this Setswana? ☐ yes  ☐ no_
- `o bua ka tsela e e gakgamatsang` — _is this Setswana? ☐ yes  ☐ no_
- `o bua ka tsela e e sa tlwaelegang` — _is this Setswana? ☐ yes  ☐ no_
- `puo e a kgopama` — _is this Setswana? ☐ yes  ☐ no_
- `slurred speech` — _is this Setswana? ☐ yes  ☐ no_
- `speech slurred` — _is this Setswana? ☐ yes  ☐ no_
- `talking funny` — _is this Setswana? ☐ yes  ☐ no_
- `ukhuluma kanzima` — _is this Setswana? ☐ yes  ☐ no_
- `woorde kom nie uit` — _is this Setswana? ☐ yes  ☐ no_
- `words wrong` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 4. `thunderclap_headache`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `tlhogo e e bohloko thata ka tshoganyetso`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `botlhoko jo bogolo thata jwa tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo sa tshwane le jo nkileng ka bo nna le jone` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso le ka bogale` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso mme bo le bogale` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo tlhaselang ka bonako jaaka ledimo` — _is this Setswana? ☐ yes  ☐ no_
- `explosive headache` — _is this Setswana? ☐ yes  ☐ no_
- `headache like never before` — _is this Setswana? ☐ yes  ☐ no_
- `ke botlhoko jo bogolo thata jwa tlhogo mo botshelong jwa me` — _is this Setswana? ☐ yes  ☐ no_
- `sudden severe headache` — _is this Setswana? ☐ yes  ☐ no_
- `thunderclap` — _is this Setswana? ☐ yes  ☐ no_
- `worst headache` — _is this Setswana? ☐ yes  ☐ no_
- `worst headache of my life` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 5. `post_ictal`
*STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages | POST-ICTAL — had a fit, now confused/drowsy — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `akavuki` — _is this Setswana? ☐ yes  ☐ no_
- `confused` — _is this Setswana? ☐ yes  ☐ no_
- `drowsy` — _is this Setswana? ☐ yes  ☐ no_
- `finished fitting` — _is this Setswana? ☐ yes  ☐ no_
- `fit` — _is this Setswana? ☐ yes  ☐ no_
- `fit e emisitse` — _is this Setswana? ☐ yes  ☐ no_
- `fit stopped` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tlhapisiwa tsotlhe` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tsoge` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tsoge sentle` — _is this Setswana? ☐ yes  ☐ no_
- `go rotha go fedile` — _is this Setswana? ☐ yes  ☐ no_
- `had a seizure` — _is this Setswana? ☐ yes  ☐ no_
- `ho ratha ho fedile` — _is this Setswana? ☐ yes  ☐ no_
- `just fitted` — _is this Setswana? ☐ yes  ☐ no_
- `just had a fit` — _is this Setswana? ☐ yes  ☐ no_
- `ku rhurhumela ku hele` — _is this Setswana? ☐ yes  ☐ no_
- `not fully awake` — _is this Setswana? ☐ yes  ☐ no_
- `o a otsela` — _is this Setswana? ☐ yes  ☐ no_
- `o dzhendzhele` — _is this Setswana? ☐ yes  ☐ no_
- `o eḓela` — _is this Setswana? ☐ yes  ☐ no_
- `o fetsa go nna le sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `o kile a ratha` — _is this Setswana? ☐ yes  ☐ no_
- `o nnile le sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `o otsela` — _is this Setswana? ☐ yes  ☐ no_
- `o qetile go rotha` — _is this Setswana? ☐ yes  ☐ no_
- `o robetse` — _is this Setswana? ☐ yes  ☐ no_
- `o robetše` — _is this Setswana? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this Setswana? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `o tsogile morago ga sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `seizure stopped` — _is this Setswana? ☐ yes  ☐ no_
- `sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `sethoathoa se emisitse` — _is this Setswana? ☐ yes  ☐ no_
- `slaperig` — _is this Setswana? ☐ yes  ☐ no_
- `sleepy` — _is this Setswana? ☐ yes  ☐ no_
- `u dzhendzela ho fhela` — _is this Setswana? ☐ yes  ☐ no_
- `u rhurhumele` — _is this Setswana? ☐ yes  ☐ no_
- `undwazile` — _is this Setswana? ☐ yes  ☐ no_
- `uyozela` — _is this Setswana? ☐ yes  ☐ no_
- `verward` — _is this Setswana? ☐ yes  ☐ no_
- `woke up after fit` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 6. `severe_asthma`
*SEVERE ASTHMA — inhaler not working, can't speak*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a i shumi` — _is this Setswana? ☐ yes  ☐ no_
- `a i thusi` — _is this Setswana? ☐ yes  ☐ no_
- `a yi pfuni` — _is this Setswana? ☐ yes  ☐ no_
- `a yi tirhi` — _is this Setswana? ☐ yes  ☐ no_
- `asma` — _is this Setswana? ☐ yes  ☐ no_
- `asthma` — _is this Setswana? ☐ yes  ☐ no_
- `ayincedi` — _is this Setswana? ☐ yes  ☐ no_
- `ayisizi` — _is this Setswana? ☐ yes  ☐ no_
- `can't speak` — _is this Setswana? ☐ yes  ☐ no_
- `can't talk` — _is this Setswana? ☐ yes  ☐ no_
- `can't walk` — _is this Setswana? ☐ yes  ☐ no_
- `exhausted` — _is this Setswana? ☐ yes  ☐ no_
- `ga e bereke` — _is this Setswana? ☐ yes  ☐ no_
- `ga e dire` — _is this Setswana? ☐ yes  ☐ no_
- `ga e thuse` — _is this Setswana? ☐ yes  ☐ no_
- `ga e thuše` — _is this Setswana? ☐ yes  ☐ no_
- `ga e šome` — _is this Setswana? ☐ yes  ☐ no_
- `getting worse` — _is this Setswana? ☐ yes  ☐ no_
- `go ntse go oketsega go maswe` — _is this Setswana? ☐ yes  ☐ no_
- `go ya go nna maswe le go feta` — _is this Setswana? ☐ yes  ☐ no_
- `ha e sebetse` — _is this Setswana? ☐ yes  ☐ no_
- `ha e thuse` — _is this Setswana? ☐ yes  ☐ no_
- `help nie` — _is this Setswana? ☐ yes  ☐ no_
- `inhaler` — _is this Setswana? ☐ yes  ☐ no_
- `inheila` — _is this Setswana? ☐ yes  ☐ no_
- `iphampu` — _is this Setswana? ☐ yes  ☐ no_
- `kan nie praat` — _is this Setswana? ☐ yes  ☐ no_
- `lips blue` — _is this Setswana? ☐ yes  ☐ no_
- `melomo e fetogile tala putswa` — _is this Setswana? ☐ yes  ☐ no_
- `nebulaisa` — _is this Setswana? ☐ yes  ☐ no_
- `nebuliser` — _is this Setswana? ☐ yes  ☐ no_
- `not helping` — _is this Setswana? ☐ yes  ☐ no_
- `not working` — _is this Setswana? ☐ yes  ☐ no_
- `o fetoga tala putswa` — _is this Setswana? ☐ yes  ☐ no_
- `o lapile thata` — _is this Setswana? ☐ yes  ☐ no_
- `pampu` — _is this Setswana? ☐ yes  ☐ no_
- `pompi` — _is this Setswana? ☐ yes  ☐ no_
- `pompo` — _is this Setswana? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this Setswana? ☐ yes  ☐ no_
- `pump` — _is this Setswana? ☐ yes  ☐ no_
- `sedirisiwa sa go thusa go hema` — _is this Setswana? ☐ yes  ☐ no_
- `tala putswa` — _is this Setswana? ☐ yes  ☐ no_
- `turning blue` — _is this Setswana? ☐ yes  ☐ no_
- `werk nie` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 7. `pre_eclampsia`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `sefatlhego se rurugile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `amehlo ayafifiala` — _is this Setswana? ☐ yes  ☐ no_
- `amehlo ayafifiyela` — _is this Setswana? ☐ yes  ☐ no_
- `blurred vision` — _is this Setswana? ☐ yes  ☐ no_
- `face swollen` — _is this Setswana? ☐ yes  ☐ no_
- `feet very swollen` — _is this Setswana? ☐ yes  ☐ no_
- `gesig geswel` — _is this Setswana? ☐ yes  ☐ no_
- `hands swollen` — _is this Setswana? ☐ yes  ☐ no_
- `headache` — _is this Setswana? ☐ yes  ☐ no_
- `hlogo` — _is this Setswana? ☐ yes  ☐ no_
- `hloho` — _is this Setswana? ☐ yes  ☐ no_
- `mahlo a fifala` — _is this Setswana? ☐ yes  ☐ no_
- `matlho a fifala` — _is this Setswana? ☐ yes  ☐ no_
- `ndo vhifha` — _is this Setswana? ☐ yes  ☐ no_
- `no urine` — _is this Setswana? ☐ yes  ☐ no_
- `o imile` — _is this Setswana? ☐ yes  ☐ no_
- `pain under ribs` — _is this Setswana? ☐ yes  ☐ no_
- `pregnant` — _is this Setswana? ☐ yes  ☐ no_
- `seeing stars` — _is this Setswana? ☐ yes  ☐ no_
- `swangari` — _is this Setswana? ☐ yes  ☐ no_
- `tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `ṱhoho` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 8. `ectopic_pregnancy`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a ka tswa a imile` — _is this Setswana? ☐ yes  ☐ no_
- `bogale` — _is this Setswana? ☐ yes  ☐ no_
- `bogolo thata` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko ba lehetla` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko bja legetla` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko bjo bogolo ka lehlakoreng le tee` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko bo boholo ka lehlakoreng le le leng` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko jo bogolo mo letlhakoreng le lengwe` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko jwa legetla` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogale` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa mojeng` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa molemeng` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa mojeng` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa molemeng` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka letlhakore le lengwe` — _is this Setswana? ☐ yes  ☐ no_
- `buhlungu lobukhulu ngelinye lihlangotsi` — _is this Setswana? ☐ yes  ☐ no_
- `could be pregnant` — _is this Setswana? ☐ yes  ☐ no_
- `erge pyn aan een kant` — _is this Setswana? ☐ yes  ☐ no_
- `fhungo ḽi vhavha` — _is this Setswana? ☐ yes  ☐ no_
- `ihlombe libuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `iperiod ilate` — _is this Setswana? ☐ yes  ☐ no_
- `iqatha libuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `isikhathi asifikanga` — _is this Setswana? ☐ yes  ☐ no_
- `kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `kgwedi ga e fihla` — _is this Setswana? ☐ yes  ☐ no_
- `kgwedi ga e tle` — _is this Setswana? ☐ yes  ☐ no_
- `kgwedi ha e fihle` — _is this Setswana? ☐ yes  ☐ no_
- `ku vava ka matimba hi tlhelo rin'we` — _is this Setswana? ☐ yes  ☐ no_
- `left side severe` — _is this Setswana? ☐ yes  ☐ no_
- `legare` — _is this Setswana? ☐ yes  ☐ no_
- `letlhakore` — _is this Setswana? ☐ yes  ☐ no_
- `lihlombe libuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `masiku a wu fiki` — _is this Setswana? ☐ yes  ☐ no_
- `missed period` — _is this Setswana? ☐ yes  ☐ no_
- `nako ga e fihla` — _is this Setswana? ☐ yes  ☐ no_
- `nako ga e tle` — _is this Setswana? ☐ yes  ☐ no_
- `nako ha e fihle` — _is this Setswana? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `nako ya kgwedi e diegile` — _is this Setswana? ☐ yes  ☐ no_
- `ngakwesobunxele ibuhlungu kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `nkarhi a wu fiki` — _is this Setswana? ☐ yes  ☐ no_
- `o fositse nako ya kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `period late` — _is this Setswana? ☐ yes  ☐ no_
- `pregnancy test positive` — _is this Setswana? ☐ yes  ☐ no_
- `right side severe` — _is this Setswana? ☐ yes  ☐ no_
- `rikatla ri vava` — _is this Setswana? ☐ yes  ☐ no_
- `severe pain one side` — _is this Setswana? ☐ yes  ☐ no_
- `sharp pain left side` — _is this Setswana? ☐ yes  ☐ no_
- `sharp pain right side` — _is this Setswana? ☐ yes  ☐ no_
- `shoulder pain` — _is this Setswana? ☐ yes  ☐ no_
- `shoulder tip pain` — _is this Setswana? ☐ yes  ☐ no_
- `sikhatsi asifikanga` — _is this Setswana? ☐ yes  ☐ no_
- `skerp pyn links` — _is this Setswana? ☐ yes  ☐ no_
- `skerp pyn regs` — _is this Setswana? ☐ yes  ☐ no_
- `skouer pyn` — _is this Setswana? ☐ yes  ☐ no_
- `teko ya boimana e bontsha gore o imile` — _is this Setswana? ☐ yes  ☐ no_
- `tip of shoulder` — _is this Setswana? ☐ yes  ☐ no_
- `tshifhinga a tshi ḓi` — _is this Setswana? ☐ yes  ☐ no_
- `vhutungu vhuhulu tshipiḓa tshithihi` — _is this Setswana? ☐ yes  ☐ no_
- `ṅwedzi a u ḓi` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 9. `febrile_seizure`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `baba` — _is this Setswana? ☐ yes  ☐ no_
- `baby` — _is this Setswana? ☐ yes  ☐ no_
- `banjwa` — _is this Setswana? ☐ yes  ☐ no_
- `child` — _is this Setswana? ☐ yes  ☐ no_
- `convulsion` — _is this Setswana? ☐ yes  ☐ no_
- `dzhendzela` — _is this Setswana? ☐ yes  ☐ no_
- `fever` — _is this Setswana? ☐ yes  ☐ no_
- `fit` — _is this Setswana? ☐ yes  ☐ no_
- `fitting` — _is this Setswana? ☐ yes  ☐ no_
- `go thothomela` — _is this Setswana? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this Setswana? ☐ yes  ☐ no_
- `hot` — _is this Setswana? ☐ yes  ☐ no_
- `infant` — _is this Setswana? ☐ yes  ☐ no_
- `kind` — _is this Setswana? ☐ yes  ☐ no_
- `kleuter` — _is this Setswana? ☐ yes  ☐ no_
- `mofikela` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this Setswana? ☐ yes  ☐ no_
- `nhanga` — _is this Setswana? ☐ yes  ☐ no_
- `nwana` — _is this Setswana? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `phoholo` — _is this Setswana? ☐ yes  ☐ no_
- `rhurhumela` — _is this Setswana? ☐ yes  ☐ no_
- `rotha` — _is this Setswana? ☐ yes  ☐ no_
- `seizure` — _is this Setswana? ☐ yes  ☐ no_
- `sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `shaking` — _is this Setswana? ☐ yes  ☐ no_
- `temperature` — _is this Setswana? ☐ yes  ☐ no_
- `temperatuur` — _is this Setswana? ☐ yes  ☐ no_
- `themperetšha` — _is this Setswana? ☐ yes  ☐ no_
- `thothomela` — _is this Setswana? ☐ yes  ☐ no_
- `thuthumela` — _is this Setswana? ☐ yes  ☐ no_
- `toddler` — _is this Setswana? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Setswana? ☐ yes  ☐ no_
- `umntwana` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 10. `infant_sepsis_screen`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `1 month old` — _is this Setswana? ☐ yes  ☐ no_
- `1 week old` — _is this Setswana? ☐ yes  ☐ no_
- `10 month` — _is this Setswana? ☐ yes  ☐ no_
- `11 month` — _is this Setswana? ☐ yes  ☐ no_
- `12 month` — _is this Setswana? ☐ yes  ☐ no_
- `13 month` — _is this Setswana? ☐ yes  ☐ no_
- `14 month` — _is this Setswana? ☐ yes  ☐ no_
- `15 month` — _is this Setswana? ☐ yes  ☐ no_
- `16 month` — _is this Setswana? ☐ yes  ☐ no_
- `17 month` — _is this Setswana? ☐ yes  ☐ no_
- `18 month` — _is this Setswana? ☐ yes  ☐ no_
- `19 month` — _is this Setswana? ☐ yes  ☐ no_
- `2 month` — _is this Setswana? ☐ yes  ☐ no_
- `2 week old` — _is this Setswana? ☐ yes  ☐ no_
- `20 month` — _is this Setswana? ☐ yes  ☐ no_
- `21 month` — _is this Setswana? ☐ yes  ☐ no_
- `22 month` — _is this Setswana? ☐ yes  ☐ no_
- `23 month` — _is this Setswana? ☐ yes  ☐ no_
- `3 month` — _is this Setswana? ☐ yes  ☐ no_
- `3 week old` — _is this Setswana? ☐ yes  ☐ no_
- `4 month` — _is this Setswana? ☐ yes  ☐ no_
- `4 week old` — _is this Setswana? ☐ yes  ☐ no_
- `5 month` — _is this Setswana? ☐ yes  ☐ no_
- `5 week old` — _is this Setswana? ☐ yes  ☐ no_
- `6 month` — _is this Setswana? ☐ yes  ☐ no_
- `6 week old` — _is this Setswana? ☐ yes  ☐ no_
- `7 month` — _is this Setswana? ☐ yes  ☐ no_
- `7 week old` — _is this Setswana? ☐ yes  ☐ no_
- `8 month` — _is this Setswana? ☐ yes  ☐ no_
- `8 week old` — _is this Setswana? ☐ yes  ☐ no_
- `9 month` — _is this Setswana? ☐ yes  ☐ no_
- `a nga dyi` — _is this Setswana? ☐ yes  ☐ no_
- `a nga fani na yena` — _is this Setswana? ☐ yes  ☐ no_
- `a nga nwi` — _is this Setswana? ☐ yes  ☐ no_
- `akafuni ubisi` — _is this Setswana? ☐ yes  ☐ no_
- `akasadli` — _is this Setswana? ☐ yes  ☐ no_
- `akasaphuzi` — _is this Setswana? ☐ yes  ☐ no_
- `akasayena` — _is this Setswana? ☐ yes  ☐ no_
- `akaziphilele` — _is this Setswana? ☐ yes  ☐ no_
- `altered behavior` — _is this Setswana? ☐ yes  ☐ no_
- `altered behaviour` — _is this Setswana? ☐ yes  ☐ no_
- `baba` — _is this Setswana? ☐ yes  ☐ no_
- `baby` — _is this Setswana? ☐ yes  ☐ no_
- `baie slaperig` — _is this Setswana? ☐ yes  ☐ no_
- `baie warm` — _is this Setswana? ☐ yes  ☐ no_
- `banjwa` — _is this Setswana? ☐ yes  ☐ no_
- `burning up` — _is this Setswana? ☐ yes  ☐ no_
- `child` — _is this Setswana? ☐ yes  ☐ no_
- `convulsion` — _is this Setswana? ☐ yes  ☐ no_
- `couple of months` — _is this Setswana? ☐ yes  ☐ no_
- `drink nie` — _is this Setswana? ☐ yes  ☐ no_
- `drowsy` — _is this Setswana? ☐ yes  ☐ no_
- `dzhendzela` — _is this Setswana? ☐ yes  ☐ no_
- `febrile_seizure` — _is this Setswana? ☐ yes  ☐ no_
- `fever` — _is this Setswana? ☐ yes  ☐ no_
- `few months old` — _is this Setswana? ☐ yes  ☐ no_
- `few weeks old` — _is this Setswana? ☐ yes  ☐ no_
- `fisa` — _is this Setswana? ☐ yes  ☐ no_
- `fit` — _is this Setswana? ☐ yes  ☐ no_
- `fitting` — _is this Setswana? ☐ yes  ☐ no_
- `floppy` — _is this Setswana? ☐ yes  ☐ no_
- `ga a je` — _is this Setswana? ☐ yes  ☐ no_
- `ga a nwe` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tshwane` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tshwane le ena` — _is this Setswana? ☐ yes  ☐ no_
- `go thothomela` — _is this Setswana? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this Setswana? ☐ yes  ☐ no_
- `ha a je` — _is this Setswana? ☐ yes  ☐ no_
- `ha a noe` — _is this Setswana? ☐ yes  ☐ no_
- `ha a nwa` — _is this Setswana? ☐ yes  ☐ no_
- `ha a tshwane le eena` — _is this Setswana? ☐ yes  ☐ no_
- `ha a ḽi` — _is this Setswana? ☐ yes  ☐ no_
- `ha fani na ene` — _is this Setswana? ☐ yes  ☐ no_
- `hard to wake` — _is this Setswana? ☐ yes  ☐ no_
- `high temperature` — _is this Setswana? ☐ yes  ☐ no_
- `ho fisa` — _is this Setswana? ☐ yes  ☐ no_
- `hot` — _is this Setswana? ☐ yes  ☐ no_
- `infant` — _is this Setswana? ☐ yes  ☐ no_
- `insana` — _is this Setswana? ☐ yes  ☐ no_
- `just lying there` — _is this Setswana? ☐ yes  ☐ no_
- `kind` — _is this Setswana? ☐ yes  ☐ no_
- `kleuter` — _is this Setswana? ☐ yes  ☐ no_
- `ku hisa` — _is this Setswana? ☐ yes  ☐ no_
- `lethargic` — _is this Setswana? ☐ yes  ☐ no_
- `limp` — _is this Setswana? ☐ yes  ☐ no_
- `mofikela` — _is this Setswana? ☐ yes  ☐ no_
- `my baby` — _is this Setswana? ☐ yes  ☐ no_
- `my infant` — _is this Setswana? ☐ yes  ☐ no_
- `my newborn` — _is this Setswana? ☐ yes  ☐ no_
- `newborn` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this Setswana? ☐ yes  ☐ no_
- `nhanga` — _is this Setswana? ☐ yes  ☐ no_
- `nie soos homself nie` — _is this Setswana? ☐ yes  ☐ no_
- `nie wakker te kry nie` — _is this Setswana? ☐ yes  ☐ no_
- `not breastfeeding` — _is this Setswana? ☐ yes  ☐ no_
- `not drinking` — _is this Setswana? ☐ yes  ☐ no_
- `not eating` — _is this Setswana? ☐ yes  ☐ no_
- `not feeding` — _is this Setswana? ☐ yes  ☐ no_
- `not herself` — _is this Setswana? ☐ yes  ☐ no_
- `not himself` — _is this Setswana? ☐ yes  ☐ no_
- `not latching` — _is this Setswana? ☐ yes  ☐ no_
- `not like her` — _is this Setswana? ☐ yes  ☐ no_
- `not like him` — _is this Setswana? ☐ yes  ☐ no_
- `not responsive` — _is this Setswana? ☐ yes  ☐ no_
- `nwana` — _is this Setswana? ☐ yes  ☐ no_
- `nwana lontsongo` — _is this Setswana? ☐ yes  ☐ no_
- `o robetse haholo` — _is this Setswana? ☐ yes  ☐ no_
- `o robetse thata` — _is this Setswana? ☐ yes  ☐ no_
- `o robile thata` — _is this Setswana? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `phoholo` — _is this Setswana? ☐ yes  ☐ no_
- `poor feeding` — _is this Setswana? ☐ yes  ☐ no_
- `refusing food` — _is this Setswana? ☐ yes  ☐ no_
- `refusing milk` — _is this Setswana? ☐ yes  ☐ no_
- `rhurhumela` — _is this Setswana? ☐ yes  ☐ no_
- `rotha` — _is this Setswana? ☐ yes  ☐ no_
- `seizure` — _is this Setswana? ☐ yes  ☐ no_
- `sethoathoa` — _is this Setswana? ☐ yes  ☐ no_
- `shaking` — _is this Setswana? ☐ yes  ☐ no_
- `slap` — _is this Setswana? ☐ yes  ☐ no_
- `sleepy` — _is this Setswana? ☐ yes  ☐ no_
- `temperature` — _is this Setswana? ☐ yes  ☐ no_
- `temperatuur` — _is this Setswana? ☐ yes  ☐ no_
- `themperetšha` — _is this Setswana? ☐ yes  ☐ no_
- `thothomela` — _is this Setswana? ☐ yes  ☐ no_
- `thuthumela` — _is this Setswana? ☐ yes  ☐ no_
- `toddler` — _is this Setswana? ☐ yes  ☐ no_
- `u etlela ngopfu` — _is this Setswana? ☐ yes  ☐ no_
- `u fhisa` — _is this Setswana? ☐ yes  ☐ no_
- `ufudumele` — _is this Setswana? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Setswana? ☐ yes  ☐ no_
- `umntwana` — _is this Setswana? ☐ yes  ☐ no_
- `under 1 year` — _is this Setswana? ☐ yes  ☐ no_
- `under a year` — _is this Setswana? ☐ yes  ☐ no_
- `under one year` — _is this Setswana? ☐ yes  ☐ no_
- `unresponsive` — _is this Setswana? ☐ yes  ☐ no_
- `ushisa` — _is this Setswana? ☐ yes  ☐ no_
- `uyashisa` — _is this Setswana? ☐ yes  ☐ no_
- `very hot` — _is this Setswana? ☐ yes  ☐ no_
- `very sleepy` — _is this Setswana? ☐ yes  ☐ no_
- `wil nie drink nie` — _is this Setswana? ☐ yes  ☐ no_
- `wil nie eet nie` — _is this Setswana? ☐ yes  ☐ no_
- `won't breastfeed` — _is this Setswana? ☐ yes  ☐ no_
- `won't drink` — _is this Setswana? ☐ yes  ☐ no_
- `won't eat` — _is this Setswana? ☐ yes  ☐ no_
- `won't latch` — _is this Setswana? ☐ yes  ☐ no_
- `wont eat` — _is this Setswana? ☐ yes  ☐ no_
- `xitsongwana` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 11. `acute_confusion_chronic`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `bolwetse jwa sukiri`
- `madi a godileng`
- `o na le bolwetse jwa sukiri`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a a tivi` — _is this Setswana? ☐ yes  ☐ no_
- `akati` — _is this Setswana? ☐ yes  ☐ no_
- `akazi` — _is this Setswana? ☐ yes  ☐ no_
- `arv` — _is this Setswana? ☐ yes  ☐ no_
- `confused` — _is this Setswana? ☐ yes  ☐ no_
- `deurmekaar` — _is this Setswana? ☐ yes  ☐ no_
- `diabetes` — _is this Setswana? ☐ yes  ☐ no_
- `diabetic` — _is this Setswana? ☐ yes  ☐ no_
- `doesn't know` — _is this Setswana? ☐ yes  ☐ no_
- `doesn't recognise` — _is this Setswana? ☐ yes  ☐ no_
- `ga a bue sentle` — _is this Setswana? ☐ yes  ☐ no_
- `ga a itse` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tlhaloganyege` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tsebe` — _is this Setswana? ☐ yes  ☐ no_
- `ha a tsebe` — _is this Setswana? ☐ yes  ☐ no_
- `ha a ḓivhi` — _is this Setswana? ☐ yes  ☐ no_
- `high blood` — _is this Setswana? ☐ yes  ☐ no_
- `hiv` — _is this Setswana? ☐ yes  ☐ no_
- `hypertension` — _is this Setswana? ☐ yes  ☐ no_
- `kgatelelo e e kwa godimo ya madi` — _is this Setswana? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this Setswana? ☐ yes  ☐ no_
- `maak nie sin` — _is this Setswana? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this Setswana? ☐ yes  ☐ no_
- `not making sense` — _is this Setswana? ☐ yes  ☐ no_
- `o bua dilo tse di sa utlwaleng` — _is this Setswana? ☐ yes  ☐ no_
- `o bua tsotlhe tsotlhe` — _is this Setswana? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this Setswana? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `sugar` — _is this Setswana? ☐ yes  ☐ no_
- `suiker` — _is this Setswana? ☐ yes  ☐ no_
- `sukiri` — _is this Setswana? ☐ yes  ☐ no_
- `talking nonsense` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 12. `head_trauma_loc`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages | HEAD TRAUMA + LOC — head injury + loss of consciousness or altered state. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `ke iteilwe mo tlhogong`
- `kgobalo ya tlhogo`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a ndzi tsundzuki` — _is this Setswana? ☐ yes  ☐ no_
- `a thi humbuli` — _is this Setswana? ☐ yes  ☐ no_
- `andikhumbuli` — _is this Setswana? ☐ yes  ☐ no_
- `blacked out` — _is this Setswana? ☐ yes  ☐ no_
- `bump to head` — _is this Setswana? ☐ yes  ☐ no_
- `confused after` — _is this Setswana? ☐ yes  ☐ no_
- `deurmekaar na val` — _is this Setswana? ☐ yes  ☐ no_
- `fell and hit head` — _is this Setswana? ☐ yes  ☐ no_
- `ga ke gakologelwe` — _is this Setswana? ☐ yes  ☐ no_
- `ga ke gopole` — _is this Setswana? ☐ yes  ☐ no_
- `geheueverlies` — _is this Setswana? ☐ yes  ☐ no_
- `ha ke hopole` — _is this Setswana? ☐ yes  ☐ no_
- `head injury` — _is this Setswana? ☐ yes  ☐ no_
- `head trauma` — _is this Setswana? ☐ yes  ☐ no_
- `hit head` — _is this Setswana? ☐ yes  ☐ no_
- `ke didimatse morago` — _is this Setswana? ☐ yes  ☐ no_
- `ke didimetse ka morao` — _is this Setswana? ☐ yes  ☐ no_
- `ke didimetse morago` — _is this Setswana? ☐ yes  ☐ no_
- `ke idibetse` — _is this Setswana? ☐ yes  ☐ no_
- `ke itshedisitse` — _is this Setswana? ☐ yes  ☐ no_
- `ke ngwele ka hlogo` — _is this Setswana? ☐ yes  ☐ no_
- `ke oele hlohong` — _is this Setswana? ☐ yes  ☐ no_
- `ke ole ka tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `knocked head` — _is this Setswana? ☐ yes  ☐ no_
- `knocked out` — _is this Setswana? ☐ yes  ☐ no_
- `lost consciousness` — _is this Setswana? ☐ yes  ☐ no_
- `memory loss` — _is this Setswana? ☐ yes  ☐ no_
- `ndidideke emva` — _is this Setswana? ☐ yes  ☐ no_
- `ndiquleke` — _is this Setswana? ☐ yes  ☐ no_
- `ndiwe phantsi` — _is this Setswana? ☐ yes  ☐ no_
- `ndo wa nda vhaisa ṱhoho` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi didimele endzhaku` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi wile ndzi dumba nhloko` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi wisile` — _is this Setswana? ☐ yes  ☐ no_
- `ngashona` — _is this Setswana? ☐ yes  ☐ no_
- `passed out` — _is this Setswana? ☐ yes  ☐ no_
- `unconscious` — _is this Setswana? ☐ yes  ☐ no_
- `vomiting after` — _is this Setswana? ☐ yes  ☐ no_
- `woke up confused` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 13. `open_fracture`
*OPEN FRACTURE — bone visible through skin. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `lerapo le a bonala`
- `lerapo le tswa mo letlalong`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `been uit vel` — _is this Setswana? ☐ yes  ☐ no_
- `bone sticking out` — _is this Setswana? ☐ yes  ☐ no_
- `bone through skin` — _is this Setswana? ☐ yes  ☐ no_
- `bone visible` — _is this Setswana? ☐ yes  ☐ no_
- `can see bone` — _is this Setswana? ☐ yes  ☐ no_
- `ithambo liphukile liphumele ngaphandle` — _is this Setswana? ☐ yes  ☐ no_
- `lerapo le robegile le tswa` — _is this Setswana? ☐ yes  ☐ no_
- `lerapo le robegile le tšwa` — _is this Setswana? ☐ yes  ☐ no_
- `lesapo le robehile le tsoa` — _is this Setswana? ☐ yes  ☐ no_
- `open fracture` — _is this Setswana? ☐ yes  ☐ no_
- `rhambu ri tshovekile ri huma` — _is this Setswana? ☐ yes  ☐ no_
- `ḽitambo ḽo ṱhukhukana ḽi bva` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 14. `high_energy_mechanism`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `ke kgotlilwe ke koloi`
- `ke oele go tswa godimo`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `car accident` — _is this Setswana? ☐ yes  ☐ no_
- `crush injury` — _is this Setswana? ☐ yes  ☐ no_
- `fell from height` — _is this Setswana? ☐ yes  ☐ no_
- `fell from ladder` — _is this Setswana? ☐ yes  ☐ no_
- `fell from roof` — _is this Setswana? ☐ yes  ☐ no_
- `geval van leer` — _is this Setswana? ☐ yes  ☐ no_
- `hit by car` — _is this Setswana? ☐ yes  ☐ no_
- `industrial accident` — _is this Setswana? ☐ yes  ☐ no_
- `ke oele le lereng` — _is this Setswana? ☐ yes  ☐ no_
- `ke wele le lereng` — _is this Setswana? ☐ yes  ☐ no_
- `motor accident` — _is this Setswana? ☐ yes  ☐ no_
- `motorcycle accident` — _is this Setswana? ☐ yes  ☐ no_
- `mvc` — _is this Setswana? ☐ yes  ☐ no_
- `ndiwe eluphahleni` — _is this Setswana? ☐ yes  ☐ no_
- `ndiwile phezulu` — _is this Setswana? ☐ yes  ☐ no_
- `ndo wa kha lere` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi wile eka lere` — _is this Setswana? ☐ yes  ☐ no_
- `ngwele le lereng` — _is this Setswana? ☐ yes  ☐ no_
- `raakgery deur motor` — _is this Setswana? ☐ yes  ☐ no_
- `struck by vehicle` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 15. `burns_significant`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `o tšhutse`
- `sefatlhego`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `airways` — _is this Setswana? ☐ yes  ☐ no_
- `around neck` — _is this Setswana? ☐ yes  ☐ no_
- `asemweë` — _is this Setswana? ☐ yes  ☐ no_
- `breathing problems` — _is this Setswana? ☐ yes  ☐ no_
- `burn` — _is this Setswana? ☐ yes  ☐ no_
- `burned` — _is this Setswana? ☐ yes  ☐ no_
- `burnt` — _is this Setswana? ☐ yes  ☐ no_
- `buso` — _is this Setswana? ☐ yes  ☐ no_
- `diatla le matsogo` — _is this Setswana? ☐ yes  ☐ no_
- `emqaleni` — _is this Setswana? ☐ yes  ☐ no_
- `entanyeni` — _is this Setswana? ☐ yes  ☐ no_
- `face` — _is this Setswana? ☐ yes  ☐ no_
- `gesig` — _is this Setswana? ☐ yes  ☐ no_
- `go hema` — _is this Setswana? ☐ yes  ☐ no_
- `groot area` — _is this Setswana? ☐ yes  ☐ no_
- `hande en arms` — _is this Setswana? ☐ yes  ☐ no_
- `hands and arms` — _is this Setswana? ☐ yes  ☐ no_
- `ho hema` — _is this Setswana? ☐ yes  ☐ no_
- `indawo enkhulu` — _is this Setswana? ☐ yes  ☐ no_
- `indawo enkulu` — _is this Setswana? ☐ yes  ☐ no_
- `indzawo lenkhulu` — _is this Setswana? ☐ yes  ☐ no_
- `inhaled smoke` — _is this Setswana? ☐ yes  ☐ no_
- `intamo` — _is this Setswana? ☐ yes  ☐ no_
- `intsamo` — _is this Setswana? ☐ yes  ☐ no_
- `intsizi` — _is this Setswana? ☐ yes  ☐ no_
- `izandla nezingalo` — _is this Setswana? ☐ yes  ☐ no_
- `ku hefemula` — _is this Setswana? ☐ yes  ☐ no_
- `large area` — _is this Setswana? ☐ yes  ☐ no_
- `matsoho le maoto` — _is this Setswana? ☐ yes  ☐ no_
- `mavoko ni marhambu` — _is this Setswana? ☐ yes  ☐ no_
- `molaleng` — _is this Setswana? ☐ yes  ☐ no_
- `mosi o hemetsweng` — _is this Setswana? ☐ yes  ☐ no_
- `musi o hemelwago` — _is this Setswana? ☐ yes  ☐ no_
- `ndhawu yo kula` — _is this Setswana? ☐ yes  ☐ no_
- `nkolo` — _is this Setswana? ☐ yes  ☐ no_
- `o chesitse` — _is this Setswana? ☐ yes  ☐ no_
- `o fisitswe` — _is this Setswana? ☐ yes  ☐ no_
- `o tshiwa` — _is this Setswana? ☐ yes  ☐ no_
- `o tsholetsoe` — _is this Setswana? ☐ yes  ☐ no_
- `om nek` — _is this Setswana? ☐ yes  ☐ no_
- `rook ingeasem` — _is this Setswana? ☐ yes  ☐ no_
- `scald` — _is this Setswana? ☐ yes  ☐ no_
- `sebaka se segolo` — _is this Setswana? ☐ yes  ☐ no_
- `sebaka se seholo` — _is this Setswana? ☐ yes  ☐ no_
- `sefahlego` — _is this Setswana? ☐ yes  ☐ no_
- `sefahleho` — _is this Setswana? ☐ yes  ☐ no_
- `shango ḽihulu` — _is this Setswana? ☐ yes  ☐ no_
- `singed eyebrows` — _is this Setswana? ☐ yes  ☐ no_
- `singed hair` — _is this Setswana? ☐ yes  ☐ no_
- `tandla nemigalo` — _is this Setswana? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this Setswana? ☐ yes  ☐ no_
- `u femba` — _is this Setswana? ☐ yes  ☐ no_
- `u hisile` — _is this Setswana? ☐ yes  ☐ no_
- `u pfile` — _is this Setswana? ☐ yes  ☐ no_
- `umqala` — _is this Setswana? ☐ yes  ☐ no_
- `ushisiwe` — _is this Setswana? ☐ yes  ☐ no_
- `ushiswe` — _is this Setswana? ☐ yes  ☐ no_
- `utshile` — _is this Setswana? ☐ yes  ☐ no_
- `utshisiwe` — _is this Setswana? ☐ yes  ☐ no_
- `vhunga ho funzeleaho` — _is this Setswana? ☐ yes  ☐ no_
- `xikandza` — _is this Setswana? ☐ yes  ☐ no_
- `zwanda na zwanḓa` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 16. `burns`
*HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `amanzi ashisayo` — _is this Setswana? ☐ yes  ☐ no_
- `isikhumba` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 17. `acute_abdomen`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `bohloko jwa mpa bo bogolo thata`
- `mpa e thata jaaka lepolanka`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `buhlungu besisu lobukhulu` — _is this Setswana? ☐ yes  ☐ no_
- `can't touch stomach` — _is this Setswana? ☐ yes  ☐ no_
- `ha ke tshwarelle mpa` — _is this Setswana? ☐ yes  ☐ no_
- `iintlungu zesisu ezinkulu` — _is this Setswana? ☐ yes  ☐ no_
- `kan nie maag raak nie` — _is this Setswana? ☐ yes  ☐ no_
- `khwiri a ri kombetelekiki` — _is this Setswana? ☐ yes  ☐ no_
- `lumbu ḽa sa fara` — _is this Setswana? ☐ yes  ☐ no_
- `mpa e sa swarega` — _is this Setswana? ☐ yes  ☐ no_
- `mpa ga e swarege` — _is this Setswana? ☐ yes  ☐ no_
- `rigid stomach` — _is this Setswana? ☐ yes  ☐ no_
- `severe stomach pain can't move` — _is this Setswana? ☐ yes  ☐ no_
- `stomach hard as a board` — _is this Setswana? ☐ yes  ☐ no_
- `worst stomach pain ever` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 18. `psychiatric_emergency_imminent`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `ke itshwaya gona jaanong`
- `ke nole dipilisi tse dintsi`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `about to hurt myself` — _is this Setswana? ☐ yes  ☐ no_
- `gesny aan polse` — _is this Setswana? ☐ yes  ☐ no_
- `going to kill myself` — _is this Setswana? ☐ yes  ☐ no_
- `ke ikgokile ka thapo` — _is this Setswana? ☐ yes  ☐ no_
- `ke ipofile ka thapo` — _is this Setswana? ☐ yes  ☐ no_
- `ke ithekeletse ka thapo` — _is this Setswana? ☐ yes  ☐ no_
- `ndiyazibulala ngoku` — _is this Setswana? ☐ yes  ☐ no_
- `ndizikhokele intambo` — _is this Setswana? ☐ yes  ☐ no_
- `ndizisikile ezihlakaleni` — _is this Setswana? ☐ yes  ☐ no_
- `ndo ḓirwa nga thambo` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi tipfalile hi tintambo` — _is this Setswana? ☐ yes  ☐ no_
- `overdosed` — _is this Setswana? ☐ yes  ☐ no_
- `swallowed pills on purpose` — _is this Setswana? ☐ yes  ☐ no_
- `taking tablets now` — _is this Setswana? ☐ yes  ☐ no_
- `te veel pille gedrink` — _is this Setswana? ☐ yes  ☐ no_
- `took pills to die` — _is this Setswana? ☐ yes  ☐ no_
- `tried to cut wrists` — _is this Setswana? ☐ yes  ☐ no_
- `tried to hang` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 19. `severe_hypoglycaemia`
*(nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages. | SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `ga a arabe`
- `sukiri e kwa tlase thata`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `aggressief` — _is this Setswana? ☐ yes  ☐ no_
- `aggressive` — _is this Setswana? ☐ yes  ☐ no_
- `akaphenduli` — _is this Setswana? ☐ yes  ☐ no_
- `akavuki` — _is this Setswana? ☐ yes  ☐ no_
- `bjalwa bja dipilisi bo wele` — _is this Setswana? ☐ yes  ☐ no_
- `blood sugar crashed` — _is this Setswana? ☐ yes  ☐ no_
- `collapsed` — _is this Setswana? ☐ yes  ☐ no_
- `confused` — _is this Setswana? ☐ yes  ☐ no_
- `deurmekaar` — _is this Setswana? ☐ yes  ☐ no_
- `fitting` — _is this Setswana? ☐ yes  ☐ no_
- `glucose very low` — _is this Setswana? ☐ yes  ☐ no_
- `ha a arabe` — _is this Setswana? ☐ yes  ☐ no_
- `hypo` — _is this Setswana? ☐ yes  ☐ no_
- `iglucose iphansi` — _is this Setswana? ☐ yes  ☐ no_
- `not responding` — _is this Setswana? ☐ yes  ☐ no_
- `o a ratha` — _is this Setswana? ☐ yes  ☐ no_
- `o wa` — _is this Setswana? ☐ yes  ☐ no_
- `o wele` — _is this Setswana? ☐ yes  ☐ no_
- `sugar dropped` — _is this Setswana? ☐ yes  ☐ no_
- `sugar very low` — _is this Setswana? ☐ yes  ☐ no_
- `suiker het geval` — _is this Setswana? ☐ yes  ☐ no_
- `swigiri tsho wela` — _is this Setswana? ☐ yes  ☐ no_
- `swikiri swi wile` — _is this Setswana? ☐ yes  ☐ no_
- `tsoekere e wele` — _is this Setswana? ☐ yes  ☐ no_
- `u wile` — _is this Setswana? ☐ yes  ☐ no_
- `unconscious` — _is this Setswana? ☐ yes  ☐ no_
- `uquleke` — _is this Setswana? ☐ yes  ☐ no_
- `uyabanjwa` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 20. `preterm_labour`
*SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `28 weeks` — _is this Setswana? ☐ yes  ☐ no_
- `30 weeks` — _is this Setswana? ☐ yes  ☐ no_
- `32 weeks` — _is this Setswana? ☐ yes  ☐ no_
- `34 weeks` — _is this Setswana? ☐ yes  ☐ no_
- `5 months` — _is this Setswana? ☐ yes  ☐ no_
- `6 months` — _is this Setswana? ☐ yes  ☐ no_
- `7 months` — _is this Setswana? ☐ yes  ☐ no_
- `bag of water broke` — _is this Setswana? ☐ yes  ☐ no_
- `boimana` — _is this Setswana? ☐ yes  ☐ no_
- `contractions` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this Setswana? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this Setswana? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this Setswana? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this Setswana? ☐ yes  ☐ no_
- `ditlhabi` — _is this Setswana? ☐ yes  ☐ no_
- `ditlhabi tsa go belega` — _is this Setswana? ☐ yes  ☐ no_
- `early` — _is this Setswana? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this Setswana? ☐ yes  ☐ no_
- `go belega` — _is this Setswana? ☐ yes  ☐ no_
- `labour` — _is this Setswana? ☐ yes  ☐ no_
- `maande` — _is this Setswana? ☐ yes  ☐ no_
- `metsi a popelo` — _is this Setswana? ☐ yes  ☐ no_
- `metsi a popelo a phatlogile` — _is this Setswana? ☐ yes  ☐ no_
- `not due yet` — _is this Setswana? ☐ yes  ☐ no_
- `o imile` — _is this Setswana? ☐ yes  ☐ no_
- `pains` — _is this Setswana? ☐ yes  ☐ no_
- `pele ga nako` — _is this Setswana? ☐ yes  ☐ no_
- `phatlogile` — _is this Setswana? ☐ yes  ☐ no_
- `pregnant` — _is this Setswana? ☐ yes  ☐ no_
- `premature` — _is this Setswana? ☐ yes  ☐ no_
- `swangari` — _is this Setswana? ☐ yes  ☐ no_
- `too early` — _is this Setswana? ☐ yes  ☐ no_
- `waters broke` — _is this Setswana? ☐ yes  ☐ no_
- `weke` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 21. `hiv_meningism`
*hiv_meningism*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `ache` — _is this Setswana? ☐ yes  ☐ no_
- `arv` — _is this Setswana? ☐ yes  ☐ no_
- `asma` — _is this Setswana? ☐ yes  ☐ no_
- `asthma` — _is this Setswana? ☐ yes  ☐ no_
- `asthma_inhaler_failure` — _is this Setswana? ☐ yes  ☐ no_
- `ayisizi` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `can't bend` — _is this Setswana? ☐ yes  ☐ no_
- `can't move` — _is this Setswana? ☐ yes  ☐ no_
- `cannot bend` — _is this Setswana? ☐ yes  ☐ no_
- `cant bend` — _is this Setswana? ☐ yes  ☐ no_
- `cant move` — _is this Setswana? ☐ yes  ☐ no_
- `eqinileyo` — _is this Setswana? ☐ yes  ☐ no_
- `fever` — _is this Setswana? ☐ yes  ☐ no_
- `fisa` — _is this Setswana? ☐ yes  ☐ no_
- `ga e dire` — _is this Setswana? ☐ yes  ☐ no_
- `ga e thuse` — _is this Setswana? ☐ yes  ☐ no_
- `go hema` — _is this Setswana? ☐ yes  ☐ no_
- `high temperature` — _is this Setswana? ☐ yes  ☐ no_
- `hiv disease` — _is this Setswana? ☐ yes  ☐ no_
- `hiv positive` — _is this Setswana? ☐ yes  ☐ no_
- `hiv+` — _is this Setswana? ☐ yes  ☐ no_
- `ho fisa` — _is this Setswana? ☐ yes  ☐ no_
- `hot` — _is this Setswana? ☐ yes  ☐ no_
- `hurts` — _is this Setswana? ☐ yes  ☐ no_
- `ibuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `icinile` — _is this Setswana? ☐ yes  ☐ no_
- `inhaler` — _is this Setswana? ☐ yes  ☐ no_
- `intamo` — _is this Setswana? ☐ yes  ☐ no_
- `intsamo` — _is this Setswana? ☐ yes  ☐ no_
- `isifo sofuba` — _is this Setswana? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this Setswana? ☐ yes  ☐ no_
- `molala` — _is this Setswana? ☐ yes  ☐ no_
- `mulala` — _is this Setswana? ☐ yes  ☐ no_
- `neck` — _is this Setswana? ☐ yes  ☐ no_
- `need more puffs` — _is this Setswana? ☐ yes  ☐ no_
- `nek` — _is this Setswana? ☐ yes  ☐ no_
- `nkulo` — _is this Setswana? ☐ yes  ☐ no_
- `not helping` — _is this Setswana? ☐ yes  ☐ no_
- `not working` — _is this Setswana? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this Setswana? ☐ yes  ☐ no_
- `omela` — _is this Setswana? ☐ yes  ☐ no_
- `on arvs` — _is this Setswana? ☐ yes  ☐ no_
- `pain` — _is this Setswana? ☐ yes  ☐ no_
- `pompo` — _is this Setswana? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this Setswana? ☐ yes  ☐ no_
- `pump` — _is this Setswana? ☐ yes  ☐ no_
- `qinile` — _is this Setswana? ☐ yes  ☐ no_
- `rigid` — _is this Setswana? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this Setswana? ☐ yes  ☐ no_
- `shivering` — _is this Setswana? ☐ yes  ☐ no_
- `sore` — _is this Setswana? ☐ yes  ☐ no_
- `stiff` — _is this Setswana? ☐ yes  ☐ no_
- `still struggling` — _is this Setswana? ☐ yes  ☐ no_
- `styf` — _is this Setswana? ☐ yes  ☐ no_
- `stywe` — _is this Setswana? ☐ yes  ☐ no_
- `taking arvs` — _is this Setswana? ☐ yes  ☐ no_
- `temperature` — _is this Setswana? ☐ yes  ☐ no_
- `thata` — _is this Setswana? ☐ yes  ☐ no_
- `tiyile` — _is this Setswana? ☐ yes  ☐ no_
- `ufuba` — _is this Setswana? ☐ yes  ☐ no_
- `ufudumele` — _is this Setswana? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Setswana? ☐ yes  ☐ no_
- `umnqala` — _is this Setswana? ☐ yes  ☐ no_
- `uyashisa` — _is this Setswana? ☐ yes  ☐ no_
- `vava` — _is this Setswana? ☐ yes  ☐ no_
- `vuvha` — _is this Setswana? ☐ yes  ☐ no_
- `womelele` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 22. `acute_confusion_dm`
*Afrikaans-only inline check to cover Zulu via DCSL arrays | (review batch 2026-04-29). Closes a coverage gap for the | largest SA language group on a clinically-important rule | (DKA/severe hypoglycaemia presents with confusion).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `bolwetse jwa sukiri`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `deurmekaar` — _is this Setswana? ☐ yes  ☐ no_
- `diabete` — _is this Setswana? ☐ yes  ☐ no_
- `ga go tlhaloganyege` — _is this Setswana? ☐ yes  ☐ no_
- `isifo seswekile` — _is this Setswana? ☐ yes  ☐ no_
- `maak nie sin` — _is this Setswana? ☐ yes  ☐ no_
- `suiker` — _is this Setswana? ☐ yes  ☐ no_
- `sukiri` — _is this Setswana? ☐ yes  ☐ no_
- `tlhakatlhakane` — _is this Setswana? ☐ yes  ☐ no_
- `tswakane` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### YELLOW discriminators

#### YELLOW 1. `severe_pain`
*── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `bohloko bo bogolo` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko bo boholo` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko bo montsi thata` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bo masisi (10/10` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata go feta tsotlhe` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bo sa itshokelweng` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jo bogolo` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko ke 10` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko ke 8` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko ke 9` — _is this Setswana? ☐ yes  ☐ no_
- `can't stand the pain` — _is this Setswana? ☐ yes  ☐ no_
- `excruciating` — _is this Setswana? ☐ yes  ☐ no_
- `go goa ka ntlha ya botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `ke a lela ka botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `ke a lla ka bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `ndi na vuvha vuhulu` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi le vuhlungwini lebyi kuleke` — _is this Setswana? ☐ yes  ☐ no_
- `pain 10/10` — _is this Setswana? ☐ yes  ☐ no_
- `pain 8/10` — _is this Setswana? ☐ yes  ☐ no_
- `pain 9/10` — _is this Setswana? ☐ yes  ☐ no_
- `pain is 10` — _is this Setswana? ☐ yes  ☐ no_
- `pain is 8` — _is this Setswana? ☐ yes  ☐ no_
- `pain is 9` — _is this Setswana? ☐ yes  ☐ no_
- `pain too much` — _is this Setswana? ☐ yes  ☐ no_
- `screaming in pain` — _is this Setswana? ☐ yes  ☐ no_
- `seer baie` — _is this Setswana? ☐ yes  ☐ no_
- `severe pain` — _is this Setswana? ☐ yes  ☐ no_
- `unbearable pain` — _is this Setswana? ☐ yes  ☐ no_
- `vuhlungu lebyi kuleke` — _is this Setswana? ☐ yes  ☐ no_
- `vuvha vuhulu` — _is this Setswana? ☐ yes  ☐ no_
- `worst pain` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 2. `suicidal_ideation`
*nr | ── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `a ndzi sa lavi ku hanya` — _is this Setswana? ☐ yes  ☐ no_
- `a thi tsha ṱoḓa u tshila` — _is this Setswana? ☐ yes  ☐ no_
- `andisafuni kuphila` — _is this Setswana? ☐ yes  ☐ no_
- `cutting myself` — _is this Setswana? ☐ yes  ☐ no_
- `don't want to live` — _is this Setswana? ☐ yes  ☐ no_
- `ga ke sa batle go tshela` — _is this Setswana? ☐ yes  ☐ no_
- `ga ke sa nyake go phela` — _is this Setswana? ☐ yes  ☐ no_
- `go akanya ka go fedisa botshelo` — _is this Setswana? ☐ yes  ☐ no_
- `go intsha kotsi ka boomo` — _is this Setswana? ☐ yes  ☐ no_
- `ha ke sa batle ho phela` — _is this Setswana? ☐ yes  ☐ no_
- `hurting myself` — _is this Setswana? ☐ yes  ☐ no_
- `ke batla go ipolaya` — _is this Setswana? ☐ yes  ☐ no_
- `ke batla ho ipolaya` — _is this Setswana? ☐ yes  ☐ no_
- `ke nyaka go ipolaya` — _is this Setswana? ☐ yes  ☐ no_
- `na le megopolo ya go ipolaya` — _is this Setswana? ☐ yes  ☐ no_
- `ndi ṱoḓa u ḓivhulaha` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi lava ku tirhisa` — _is this Setswana? ☐ yes  ☐ no_
- `no reason to live` — _is this Setswana? ☐ yes  ☐ no_
- `self-harm` — _is this Setswana? ☐ yes  ☐ no_
- `suicidal` — _is this Setswana? ☐ yes  ☐ no_
- `suicide` — _is this Setswana? ☐ yes  ☐ no_
- `thinking of ending` — _is this Setswana? ☐ yes  ☐ no_
- `want to kill myself` — _is this Setswana? ☐ yes  ☐ no_
- `wil doodgaan` — _is this Setswana? ☐ yes  ☐ no_
- `wil nie meer leef` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 3. `abuse_assault`
*nr | GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `abused` — _is this Setswana? ☐ yes  ☐ no_
- `assaulted` — _is this Setswana? ☐ yes  ☐ no_
- `attacked` — _is this Setswana? ☐ yes  ☐ no_
- `beaten badly` — _is this Setswana? ☐ yes  ☐ no_
- `child abuse` — _is this Setswana? ☐ yes  ☐ no_
- `domestic violence` — _is this Setswana? ☐ yes  ☐ no_
- `go itewa thata` — _is this Setswana? ☐ yes  ☐ no_
- `go sotliwa` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhaselwa` — _is this Setswana? ☐ yes  ☐ no_
- `go tshwarwa makgwakgwa` — _is this Setswana? ☐ yes  ☐ no_
- `huishoudelike geweld` — _is this Setswana? ☐ yes  ☐ no_
- `husband beat me` — _is this Setswana? ☐ yes  ☐ no_
- `indoda yam indibethile` — _is this Setswana? ☐ yes  ☐ no_
- `ke betilwe` — _is this Setswana? ☐ yes  ☐ no_
- `ke otlilwe` — _is this Setswana? ☐ yes  ☐ no_
- `ke otloilwe` — _is this Setswana? ☐ yes  ☐ no_
- `monna wa ka o ntlhabile` — _is this Setswana? ☐ yes  ☐ no_
- `monna wa ka o ntshabile` — _is this Setswana? ☐ yes  ☐ no_
- `monna wa me o ntlhabile` — _is this Setswana? ☐ yes  ☐ no_
- `munna wanga o nrwa` — _is this Setswana? ☐ yes  ☐ no_
- `ndo rwiwa` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi bitiwe` — _is this Setswana? ☐ yes  ☐ no_
- `nuna wa mina u ndzi bile` — _is this Setswana? ☐ yes  ☐ no_
- `o nteetse` — _is this Setswana? ☐ yes  ☐ no_
- `partner hit me` — _is this Setswana? ☐ yes  ☐ no_
- `tirisodikgoka` — _is this Setswana? ☐ yes  ☐ no_
- `tirisodikgoka mo lelapeng` — _is this Setswana? ☐ yes  ☐ no_
- `tshotlego ya bana` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 4. `pyelonephritis`
*GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `back pain` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko emhamben` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko mmogong` — _is this Setswana? ☐ yes  ☐ no_
- `bohloko mokokotlong` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa diphio` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa mokwatla` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko mo lethekeng` — _is this Setswana? ☐ yes  ☐ no_
- `burning urine` — _is this Setswana? ☐ yes  ☐ no_
- `chills` — _is this Setswana? ☐ yes  ☐ no_
- `diphio` — _is this Setswana? ☐ yes  ☐ no_
- `fa o rota` — _is this Setswana? ☐ yes  ☐ no_
- `feberu` — _is this Setswana? ☐ yes  ☐ no_
- `fever` — _is this Setswana? ☐ yes  ☐ no_
- `frequency` — _is this Setswana? ☐ yes  ☐ no_
- `go rota kgapetsakgapetsa` — _is this Setswana? ☐ yes  ☐ no_
- `go sha fa ke ntsha metsi` — _is this Setswana? ☐ yes  ☐ no_
- `go sha ge ke ntsha meetse` — _is this Setswana? ☐ yes  ☐ no_
- `go swela ge ke ntsha meetse` — _is this Setswana? ☐ yes  ☐ no_
- `go thothomela` — _is this Setswana? ☐ yes  ☐ no_
- `go thothomela ka ntlha ya feberu` — _is this Setswana? ☐ yes  ☐ no_
- `go thothomela thata` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Setswana? ☐ yes  ☐ no_
- `go tshwara go bohloko loko ke ntsha meetse` — _is this Setswana? ☐ yes  ☐ no_
- `go tsidifala` — _is this Setswana? ☐ yes  ☐ no_
- `ho bohloko ha ke ntsha metsi` — _is this Setswana? ☐ yes  ☐ no_
- `ho sha ha ke ntsha metsi` — _is this Setswana? ☐ yes  ☐ no_
- `kidney pain` — _is this Setswana? ☐ yes  ☐ no_
- `ku bohloko loko ndzi sila` — _is this Setswana? ☐ yes  ☐ no_
- `ku hisa loko ndzi sila manzi` — _is this Setswana? ☐ yes  ☐ no_
- `kusha emchamweni` — _is this Setswana? ☐ yes  ☐ no_
- `kushisa emchamweni` — _is this Setswana? ☐ yes  ☐ no_
- `kushisa umchamo` — _is this Setswana? ☐ yes  ☐ no_
- `letheka` — _is this Setswana? ☐ yes  ☐ no_
- `loin pain` — _is this Setswana? ☐ yes  ☐ no_
- `mahlakore a mokwatla` — _is this Setswana? ☐ yes  ☐ no_
- `mela ya moroto` — _is this Setswana? ☐ yes  ☐ no_
- `mhamba wo bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `mmogo o bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `mokokotlo o bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `mokwatla` — _is this Setswana? ☐ yes  ☐ no_
- `moroto` — _is this Setswana? ☐ yes  ☐ no_
- `moroto o o tukang` — _is this Setswana? ☐ yes  ☐ no_
- `murahu u rema` — _is this Setswana? ☐ yes  ☐ no_
- `muvhili wa murahu u rema` — _is this Setswana? ☐ yes  ☐ no_
- `o o botlhoko fa o rota` — _is this Setswana? ☐ yes  ☐ no_
- `o tukang` — _is this Setswana? ☐ yes  ☐ no_
- `pain when urinating` — _is this Setswana? ☐ yes  ☐ no_
- `pyn as ek urineer` — _is this Setswana? ☐ yes  ☐ no_
- `rigors` — _is this Setswana? ☐ yes  ☐ no_
- `rug is seer` — _is this Setswana? ☐ yes  ☐ no_
- `rugpyn` — _is this Setswana? ☐ yes  ☐ no_
- `shivering` — _is this Setswana? ☐ yes  ☐ no_
- `temperature` — _is this Setswana? ☐ yes  ☐ no_
- `tshwaetso ya mela ya moroto` — _is this Setswana? ☐ yes  ☐ no_
- `u fhisa hune ndi a china` — _is this Setswana? ☐ yes  ☐ no_
- `u rema hune ndi a china` — _is this Setswana? ☐ yes  ☐ no_
- `urinary tract` — _is this Setswana? ☐ yes  ☐ no_
- `uti` — _is this Setswana? ☐ yes  ☐ no_
- `vomiting` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 5. `dka`
*GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `bolwetse jwa sukiri`
- `motho yo o nang le bolwetse jwa sukiri`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `abdominal pain` — _is this Setswana? ☐ yes  ☐ no_
- `blood sugar very high` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa mala` — _is this Setswana? ☐ yes  ☐ no_
- `braak` — _is this Setswana? ☐ yes  ☐ no_
- `breath smells sweet` — _is this Setswana? ☐ yes  ☐ no_
- `diabeet` — _is this Setswana? ☐ yes  ☐ no_
- `diabetes` — _is this Setswana? ☐ yes  ☐ no_
- `diabetic` — _is this Setswana? ☐ yes  ☐ no_
- `fruity breath` — _is this Setswana? ☐ yes  ☐ no_
- `glucose` — _is this Setswana? ☐ yes  ☐ no_
- `glucose 20` — _is this Setswana? ☐ yes  ☐ no_
- `glucose e feta 15` — _is this Setswana? ☐ yes  ☐ no_
- `glucose e feta 20` — _is this Setswana? ☐ yes  ☐ no_
- `glucose over 15` — _is this Setswana? ☐ yes  ☐ no_
- `glucose over 20` — _is this Setswana? ☐ yes  ☐ no_
- `go hlanza` — _is this Setswana? ☐ yes  ☐ no_
- `go ikutlwa o batla go tlhatsa` — _is this Setswana? ☐ yes  ☐ no_
- `go nyorilwe ke pelo` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhaka` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Setswana? ☐ yes  ☐ no_
- `gooi op` — _is this Setswana? ☐ yes  ☐ no_
- `ho hlantsa` — _is this Setswana? ☐ yes  ☐ no_
- `insulin` — _is this Setswana? ☐ yes  ☐ no_
- `ishugela` — _is this Setswana? ☐ yes  ☐ no_
- `ishugela liphakeme kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `ishukela` — _is this Setswana? ☐ yes  ☐ no_
- `ishukela liphezulu kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `isisu sibuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `ke a hlantsa` — _is this Setswana? ☐ yes  ☐ no_
- `ke a hlanza` — _is this Setswana? ☐ yes  ☐ no_
- `ke a tlhaka` — _is this Setswana? ☐ yes  ☐ no_
- `ketone breath` — _is this Setswana? ☐ yes  ☐ no_
- `ku hlanza` — _is this Setswana? ☐ yes  ☐ no_
- `kuhlanza` — _is this Setswana? ☐ yes  ☐ no_
- `maag pyn` — _is this Setswana? ☐ yes  ☐ no_
- `mowa o o nang le diketone` — _is this Setswana? ☐ yes  ☐ no_
- `mowa o o nkgang jaaka maungo` — _is this Setswana? ☐ yes  ☐ no_
- `mowa o o tswang mo molomong o nkgang monate` — _is this Setswana? ☐ yes  ☐ no_
- `mpa e bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `mpa e botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `nauseous` — _is this Setswana? ☐ yes  ☐ no_
- `ndi a sema` — _is this Setswana? ☐ yes  ☐ no_
- `ndinesifo seswekile` — _is this Setswana? ☐ yes  ☐ no_
- `ndiyahlanza` — _is this Setswana? ☐ yes  ☐ no_
- `ndzayo wu vava` — _is this Setswana? ☐ yes  ☐ no_
- `ndzi a hlanza` — _is this Setswana? ☐ yes  ☐ no_
- `o dirisa insulin` — _is this Setswana? ☐ yes  ☐ no_
- `on insulin` — _is this Setswana? ☐ yes  ☐ no_
- `sisu sibuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `stomach pain` — _is this Setswana? ☐ yes  ☐ no_
- `sugar` — _is this Setswana? ☐ yes  ☐ no_
- `sugar very high` — _is this Setswana? ☐ yes  ☐ no_
- `suiker` — _is this Setswana? ☐ yes  ☐ no_
- `suiker baie hoog` — _is this Setswana? ☐ yes  ☐ no_
- `suikersiekte` — _is this Setswana? ☐ yes  ☐ no_
- `sukiri` — _is this Setswana? ☐ yes  ☐ no_
- `sukiri e kwa godimo thata` — _is this Setswana? ☐ yes  ☐ no_
- `sukiri mo mading e kwa godimo thata` — _is this Setswana? ☐ yes  ☐ no_
- `swigiri` — _is this Setswana? ☐ yes  ☐ no_
- `swigiri dzi ḓiimisela ngopfu` — _is this Setswana? ☐ yes  ☐ no_
- `swikiri` — _is this Setswana? ☐ yes  ☐ no_
- `swikiri e phagameng kudu` — _is this Setswana? ☐ yes  ☐ no_
- `swikiri yi tlakukile ngopfu` — _is this Setswana? ☐ yes  ☐ no_
- `thumbu i na vuvha` — _is this Setswana? ☐ yes  ☐ no_
- `tsoekere` — _is this Setswana? ☐ yes  ☐ no_
- `tsoekere e phagameng haholo` — _is this Setswana? ☐ yes  ☐ no_
- `tswekere` — _is this Setswana? ☐ yes  ☐ no_
- `tswekere e kwa godimo` — _is this Setswana? ☐ yes  ☐ no_
- `u sema` — _is this Setswana? ☐ yes  ☐ no_
- `vomiting` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 6. `tb_triad`
*tb_triad*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `bosigo` — _is this Setswana? ☐ yes  ☐ no_
- `cough` — _is this Setswana? ☐ yes  ☐ no_
- `fufulelwa bosigo` — _is this Setswana? ☐ yes  ☐ no_
- `gewig verloor` — _is this Setswana? ☐ yes  ☐ no_
- `go fufulelwa bosigo` — _is this Setswana? ☐ yes  ☐ no_
- `go khohlela` — _is this Setswana? ☐ yes  ☐ no_
- `go latlhegelwa ke boima` — _is this Setswana? ☐ yes  ☐ no_
- `gohlola` — _is this Setswana? ☐ yes  ☐ no_
- `hehela` — _is this Setswana? ☐ yes  ☐ no_
- `hoes` — _is this Setswana? ☐ yes  ☐ no_
- `hovelela` — _is this Setswana? ☐ yes  ☐ no_
- `khalutshela` — _is this Setswana? ☐ yes  ☐ no_
- `khohlela` — _is this Setswana? ☐ yes  ☐ no_
- `khomokile ncilo` — _is this Setswana? ☐ yes  ☐ no_
- `khwehlela` — _is this Setswana? ☐ yes  ☐ no_
- `laha vhuimo` — _is this Setswana? ☐ yes  ☐ no_
- `lahlegetšwe ke boima` — _is this Setswana? ☐ yes  ☐ no_
- `lahlehetse boima` — _is this Setswana? ☐ yes  ☐ no_
- `lahlekelwe isisindo` — _is this Setswana? ☐ yes  ☐ no_
- `lahlekelwe sisixa` — _is this Setswana? ☐ yes  ☐ no_
- `latlhile boima` — _is this Setswana? ☐ yes  ☐ no_
- `losing weight` — _is this Setswana? ☐ yes  ☐ no_
- `lost weight` — _is this Setswana? ☐ yes  ☐ no_
- `mavhungo usiku` — _is this Setswana? ☐ yes  ☐ no_
- `nagsweet` — _is this Setswana? ☐ yes  ☐ no_
- `nciphile isisindo` — _is this Setswana? ☐ yes  ☐ no_
- `ncokolele lisindo` — _is this Setswana? ☐ yes  ☐ no_
- `ndikhohla` — _is this Setswana? ☐ yes  ☐ no_
- `ndikhwehlela` — _is this Setswana? ☐ yes  ☐ no_
- `night sweats` — _is this Setswana? ☐ yes  ☐ no_
- `o latlhegetswe ke boima` — _is this Setswana? ☐ yes  ☐ no_
- `phulukane nesixa` — _is this Setswana? ☐ yes  ☐ no_
- `phwa bosigo` — _is this Setswana? ☐ yes  ☐ no_
- `sweat at night` — _is this Setswana? ☐ yes  ☐ no_
- `sweating at night` — _is this Setswana? ☐ yes  ☐ no_
- `sweet snags` — _is this Setswana? ☐ yes  ☐ no_
- `tatlhegelo ya boima` — _is this Setswana? ☐ yes  ☐ no_
- `tswa marothodi bosigo` — _is this Setswana? ☐ yes  ☐ no_
- `tswa molapo bosiu` — _is this Setswana? ☐ yes  ☐ no_
- `weight loss` — _is this Setswana? ☐ yes  ☐ no_
- `xurha usiku` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 7. `possible_fracture`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `can't bear weight` — _is this Setswana? ☐ yes  ☐ no_
- `can't move it` — _is this Setswana? ☐ yes  ☐ no_
- `can't walk` — _is this Setswana? ☐ yes  ☐ no_
- `crooked` — _is this Setswana? ☐ yes  ☐ no_
- `deformed` — _is this Setswana? ☐ yes  ☐ no_
- `fell` — _is this Setswana? ☐ yes  ☐ no_
- `fell down` — _is this Setswana? ☐ yes  ☐ no_
- `injury` — _is this Setswana? ☐ yes  ☐ no_
- `kotsi` — _is this Setswana? ☐ yes  ☐ no_
- `kotsi e kgolo` — _is this Setswana? ☐ yes  ☐ no_
- `kugobekile` — _is this Setswana? ☐ yes  ☐ no_
- `ligwegwile` — _is this Setswana? ☐ yes  ☐ no_
- `looks bent` — _is this Setswana? ☐ yes  ☐ no_
- `o wele` — _is this Setswana? ☐ yes  ☐ no_
- `o wele fatshe` — _is this Setswana? ☐ yes  ☐ no_
- `se botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `se kobegile` — _is this Setswana? ☐ yes  ☐ no_
- `se lebega se kobegile` — _is this Setswana? ☐ yes  ☐ no_
- `se nang le sebopego se se sa tlwaelegang` — _is this Setswana? ☐ yes  ☐ no_
- `se rurugile` — _is this Setswana? ☐ yes  ☐ no_
- `se rurugile mme se botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `se sa tlhamalala` — _is this Setswana? ☐ yes  ☐ no_
- `se sothegile` — _is this Setswana? ☐ yes  ☐ no_
- `skewe` — _is this Setswana? ☐ yes  ☐ no_
- `swollen and painful` — _is this Setswana? ☐ yes  ☐ no_
- `trauma` — _is this Setswana? ☐ yes  ☐ no_
- `twisted` — _is this Setswana? ☐ yes  ☐ no_
- `ukwethuka kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `uphazamisekile` — _is this Setswana? ☐ yes  ☐ no_
- `uphukile` — _is this Setswana? ☐ yes  ☐ no_
- `uvuvukile` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 8. `hypertensive_urgency`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `madi a godileng`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `blood pressure high` — _is this Setswana? ☐ yes  ☐ no_
- `blurred vision` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `bp` — _is this Setswana? ☐ yes  ☐ no_
- `bp e kwa godimo` — _is this Setswana? ☐ yes  ☐ no_
- `bp high` — _is this Setswana? ☐ yes  ☐ no_
- `confused` — _is this Setswana? ☐ yes  ☐ no_
- `dizzy` — _is this Setswana? ☐ yes  ☐ no_
- `duiselig` — _is this Setswana? ☐ yes  ☐ no_
- `fifetseng` — _is this Setswana? ☐ yes  ☐ no_
- `ga a tlhaloganye` — _is this Setswana? ☐ yes  ☐ no_
- `go dutla madi mo nko` — _is this Setswana? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `headache` — _is this Setswana? ☐ yes  ☐ no_
- `high blood` — _is this Setswana? ☐ yes  ☐ no_
- `hlogo` — _is this Setswana? ☐ yes  ☐ no_
- `hloho` — _is this Setswana? ☐ yes  ☐ no_
- `hypertension` — _is this Setswana? ☐ yes  ☐ no_
- `isiyezi` — _is this Setswana? ☐ yes  ☐ no_
- `iyesuka` — _is this Setswana? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this Setswana? ☐ yes  ☐ no_
- `kgatelelo ya madi e e kwa godimo` — _is this Setswana? ☐ yes  ☐ no_
- `kgatelelo ya madi e godimo` — _is this Setswana? ☐ yes  ☐ no_
- `kgatelelo ya madi e kwa godimo` — _is this Setswana? ☐ yes  ☐ no_
- `kgatello ya madi e phahameng` — _is this Setswana? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this Setswana? ☐ yes  ☐ no_
- `madi a kgatelelo a kwa godimo` — _is this Setswana? ☐ yes  ☐ no_
- `nko` — _is this Setswana? ☐ yes  ☐ no_
- `nosebleed` — _is this Setswana? ☐ yes  ☐ no_
- `nsinya wa ngati wu tlakukile` — _is this Setswana? ☐ yes  ☐ no_
- `o a tekateka` — _is this Setswana? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this Setswana? ☐ yes  ☐ no_
- `phuvhelo ya madi i phanda` — _is this Setswana? ☐ yes  ☐ no_
- `pono` — _is this Setswana? ☐ yes  ☐ no_
- `pono e e fifetseng` — _is this Setswana? ☐ yes  ☐ no_
- `pono e sa bonalang sentle` — _is this Setswana? ☐ yes  ☐ no_
- `tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `u a tekateka` — _is this Setswana? ☐ yes  ☐ no_
- `u a ṱavhanya` — _is this Setswana? ☐ yes  ☐ no_
- `umfutho wegazi uphakeme` — _is this Setswana? ☐ yes  ☐ no_
- `umfutho wegazi uphezulu` — _is this Setswana? ☐ yes  ☐ no_
- `uxinzelelo lwegazi luphezulu` — _is this Setswana? ☐ yes  ☐ no_
- `uyesuka` — _is this Setswana? ☐ yes  ☐ no_
- `ṱhoho` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 9. `hypertensive_urgency_reading`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `botlhoko jwa tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `bp 170` — _is this Setswana? ☐ yes  ☐ no_
- `bp 180` — _is this Setswana? ☐ yes  ☐ no_
- `bp 190` — _is this Setswana? ☐ yes  ☐ no_
- `bp 200` — _is this Setswana? ☐ yes  ☐ no_
- `dizzy` — _is this Setswana? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `headache` — _is this Setswana? ☐ yes  ☐ no_
- `kop pyn` — _is this Setswana? ☐ yes  ☐ no_
- `pono` — _is this Setswana? ☐ yes  ☐ no_
- `umfutho wegazi` — _is this Setswana? ☐ yes  ☐ no_
- `uyadidizela` — _is this Setswana? ☐ yes  ☐ no_
- `uyadiyazela` — _is this Setswana? ☐ yes  ☐ no_
- `vision` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 10. `appendicitis_pattern`
*appendicitis_pattern*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `appendix` — _is this Setswana? ☐ yes  ☐ no_
- `appendix pain` — _is this Setswana? ☐ yes  ☐ no_
- `bo nna maswe fa o iketla` — _is this Setswana? ☐ yes  ☐ no_
- `bo nna maswe fa o tsamaya` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa appendix` — _is this Setswana? ☐ yes  ☐ no_
- `can't straighten up` — _is this Setswana? ☐ yes  ☐ no_
- `fever` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Setswana? ☐ yes  ☐ no_
- `ka fa mojeng wa mala` — _is this Setswana? ☐ yes  ☐ no_
- `ka fa mojeng wa mpa` — _is this Setswana? ☐ yes  ☐ no_
- `karolo e e kwa tlase ka fa mojeng` — _is this Setswana? ☐ yes  ☐ no_
- `lower right pain` — _is this Setswana? ☐ yes  ☐ no_
- `maagpyn` — _is this Setswana? ☐ yes  ☐ no_
- `mala` — _is this Setswana? ☐ yes  ☐ no_
- `mo tlase ka fa mojeng` — _is this Setswana? ☐ yes  ☐ no_
- `mpa` — _is this Setswana? ☐ yes  ☐ no_
- `pain right side stomach` — _is this Setswana? ☐ yes  ☐ no_
- `right abdo pain` — _is this Setswana? ☐ yes  ☐ no_
- `right lower quadrant` — _is this Setswana? ☐ yes  ☐ no_
- `vomiting` — _is this Setswana? ☐ yes  ☐ no_
- `worse when moving` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 11. `asthma_inhaler_failure`
*asthma_inhaler_failure*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `asma` — _is this Setswana? ☐ yes  ☐ no_
- `asthma` — _is this Setswana? ☐ yes  ☐ no_
- `ayisizi` — _is this Setswana? ☐ yes  ☐ no_
- `ga e dire` — _is this Setswana? ☐ yes  ☐ no_
- `ga e thuse` — _is this Setswana? ☐ yes  ☐ no_
- `go hema` — _is this Setswana? ☐ yes  ☐ no_
- `inhaler` — _is this Setswana? ☐ yes  ☐ no_
- `isifo sofuba` — _is this Setswana? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this Setswana? ☐ yes  ☐ no_
- `need more puffs` — _is this Setswana? ☐ yes  ☐ no_
- `not helping` — _is this Setswana? ☐ yes  ☐ no_
- `not working` — _is this Setswana? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this Setswana? ☐ yes  ☐ no_
- `pompo` — _is this Setswana? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this Setswana? ☐ yes  ☐ no_
- `pump` — _is this Setswana? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this Setswana? ☐ yes  ☐ no_
- `still struggling` — _is this Setswana? ☐ yes  ☐ no_
- `ufuba` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 12. `meningism`
*same-day review is the safety-correct default.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `botlhoko jwa molala` — _is this Setswana? ☐ yes  ☐ no_
- `can't bend neck` — _is this Setswana? ☐ yes  ☐ no_
- `feberu` — _is this Setswana? ☐ yes  ☐ no_
- `fever` — _is this Setswana? ☐ yes  ☐ no_
- `intamo eqinileyo` — _is this Setswana? ☐ yes  ☐ no_
- `intamo ibuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `intamo iqinile` — _is this Setswana? ☐ yes  ☐ no_
- `intsamo ibuhlungu` — _is this Setswana? ☐ yes  ☐ no_
- `intsamo icinile` — _is this Setswana? ☐ yes  ☐ no_
- `molala` — _is this Setswana? ☐ yes  ☐ no_
- `molala o bohloko` — _is this Setswana? ☐ yes  ☐ no_
- `molala o botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `molala o o thata` — _is this Setswana? ☐ yes  ☐ no_
- `molala o thata` — _is this Setswana? ☐ yes  ☐ no_
- `mulala u na vuvha` — _is this Setswana? ☐ yes  ☐ no_
- `mulala wo omela` — _is this Setswana? ☐ yes  ☐ no_
- `neck is stiff` — _is this Setswana? ☐ yes  ☐ no_
- `neck pain` — _is this Setswana? ☐ yes  ☐ no_
- `neck stiff` — _is this Setswana? ☐ yes  ☐ no_
- `nek is styf` — _is this Setswana? ☐ yes  ☐ no_
- `nkulo wu tiyile` — _is this Setswana? ☐ yes  ☐ no_
- `nkulo wu vava` — _is this Setswana? ☐ yes  ☐ no_
- `o thata` — _is this Setswana? ☐ yes  ☐ no_
- `stiff neck` — _is this Setswana? ☐ yes  ☐ no_
- `stywe nek` — _is this Setswana? ☐ yes  ☐ no_
- `thata` — _is this Setswana? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Setswana? ☐ yes  ☐ no_
- `umnqala womelele` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 13. `hiv_fever`
*HIV + fever: risk-UPGRADE signal. Enforce YELLOW as a floor, preserve any | higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `arv` — _is this Setswana? ☐ yes  ☐ no_
- `di-arv` — _is this Setswana? ☐ yes  ☐ no_
- `fever` — _is this Setswana? ☐ yes  ☐ no_
- `high temperature` — _is this Setswana? ☐ yes  ☐ no_
- `hiv` — _is this Setswana? ☐ yes  ☐ no_
- `hiv positive` — _is this Setswana? ☐ yes  ☐ no_
- `hiv+` — _is this Setswana? ☐ yes  ☐ no_
- `hiv_fever` — _is this Setswana? ☐ yes  ☐ no_
- `ingculaza` — _is this Setswana? ☐ yes  ☐ no_
- `o a lwala` — _is this Setswana? ☐ yes  ☐ no_
- `o dirisa di-arv` — _is this Setswana? ☐ yes  ☐ no_
- `o na le bolwetse` — _is this Setswana? ☐ yes  ☐ no_
- `o na le hiv` — _is this Setswana? ☐ yes  ☐ no_
- `o tsaya di-arv` — _is this Setswana? ☐ yes  ☐ no_
- `on arvs` — _is this Setswana? ☐ yes  ☐ no_
- `positive` — _is this Setswana? ☐ yes  ☐ no_
- `shisa kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `sick` — _is this Setswana? ☐ yes  ☐ no_
- `taking arvs` — _is this Setswana? ☐ yes  ☐ no_
- `temperature` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 14. `lower_abdo_missed_period`
*higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `botlase jwa mpa` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko mo pelviking` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mala` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mpa` — _is this Setswana? ☐ yes  ☐ no_
- `diegile` — _is this Setswana? ☐ yes  ☐ no_
- `ga go na kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `go diega ga nako ya go tla ga kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `go se tle ga kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `kgwedi e diegile` — _is this Setswana? ☐ yes  ☐ no_
- `late period` — _is this Setswana? ☐ yes  ☐ no_
- `lower abdominal pain` — _is this Setswana? ☐ yes  ☐ no_
- `lower belly pain` — _is this Setswana? ☐ yes  ☐ no_
- `lower tummy pain` — _is this Setswana? ☐ yes  ☐ no_
- `maagpyn` — _is this Setswana? ☐ yes  ☐ no_
- `mala` — _is this Setswana? ☐ yes  ☐ no_
- `missed period` — _is this Setswana? ☐ yes  ☐ no_
- `mpa` — _is this Setswana? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this Setswana? ☐ yes  ☐ no_
- `no period` — _is this Setswana? ☐ yes  ☐ no_
- `pelvic pain` — _is this Setswana? ☐ yes  ☐ no_
- `pelviki` — _is this Setswana? ☐ yes  ☐ no_
- `period late` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 15. `pregnancy_complication`
*pregnancy_complication*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `baby hasn't moved` — _is this Setswana? ☐ yes  ☐ no_
- `bleeding` — _is this Setswana? ☐ yes  ☐ no_
- `boimana` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this Setswana? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this Setswana? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this Setswana? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this Setswana? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this Setswana? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this Setswana? ☐ yes  ☐ no_
- `headache` — _is this Setswana? ☐ yes  ☐ no_
- `motsamao o fokotsehile` — _is this Setswana? ☐ yes  ☐ no_
- `movement reduced` — _is this Setswana? ☐ yes  ☐ no_
- `no movement` — _is this Setswana? ☐ yes  ☐ no_
- `o imile` — _is this Setswana? ☐ yes  ☐ no_
- `pain` — _is this Setswana? ☐ yes  ☐ no_
- `pele ga nako` — _is this Setswana? ☐ yes  ☐ no_
- `pregnant` — _is this Setswana? ☐ yes  ☐ no_
- `swangari` — _is this Setswana? ☐ yes  ☐ no_
- `swelling` — _is this Setswana? ☐ yes  ☐ no_
- `vision` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 16. `gi_bleeding`
*gi_bleeding*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `black tarry stool` — _is this Setswana? ☐ yes  ☐ no_
- `blood in poo` — _is this Setswana? ☐ yes  ☐ no_
- `blood in stool` — _is this Setswana? ☐ yes  ☐ no_
- `blood in vomit` — _is this Setswana? ☐ yes  ☐ no_
- `bloody diarrhoea` — _is this Setswana? ☐ yes  ☐ no_
- `ingati esitweni` — _is this Setswana? ☐ yes  ☐ no_
- `ingati iyaphumela ngemlomeni` — _is this Setswana? ☐ yes  ☐ no_
- `letshololo le le nang le madi` — _is this Setswana? ☐ yes  ☐ no_
- `madi a tswa ka ganong` — _is this Setswana? ☐ yes  ☐ no_
- `madi a tšwa ka ganong` — _is this Setswana? ☐ yes  ☐ no_
- `madi leetšong` — _is this Setswana? ☐ yes  ☐ no_
- `madi mantšwing` — _is this Setswana? ☐ yes  ☐ no_
- `madi mo mantswing` — _is this Setswana? ☐ yes  ☐ no_
- `mantlwana a mantsho a a tshwanang le sekgoa` — _is this Setswana? ☐ yes  ☐ no_
- `ngati enyangweni` — _is this Setswana? ☐ yes  ☐ no_
- `ngati yi huma hi nomo` — _is this Setswana? ☐ yes  ☐ no_
- `rectal bleeding` — _is this Setswana? ☐ yes  ☐ no_
- `throwing up blood` — _is this Setswana? ☐ yes  ☐ no_
- `vomiting blood` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 17. `deep_wound`
*deep_wound*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `animal bite` — _is this Setswana? ☐ yes  ☐ no_
- `bite wound` — _is this Setswana? ☐ yes  ☐ no_
- `can't stop` — _is this Setswana? ☐ yes  ☐ no_
- `deep cut` — _is this Setswana? ☐ yes  ☐ no_
- `deep wound` — _is this Setswana? ☐ yes  ☐ no_
- `dierbyt` — _is this Setswana? ☐ yes  ☐ no_
- `galase` — _is this Setswana? ☐ yes  ☐ no_
- `galase mo nthong` — _is this Setswana? ☐ yes  ☐ no_
- `glass in wound` — _is this Setswana? ☐ yes  ☐ no_
- `go elela` — _is this Setswana? ☐ yes  ☐ no_
- `go elela ka bontsi` — _is this Setswana? ☐ yes  ☐ no_
- `go elela ka maatla` — _is this Setswana? ☐ yes  ☐ no_
- `go longwa ke phologolo` — _is this Setswana? ☐ yes  ☐ no_
- `inxeba` — _is this Setswana? ☐ yes  ☐ no_
- `ka bontsi` — _is this Setswana? ☐ yes  ☐ no_
- `ka maatla` — _is this Setswana? ☐ yes  ☐ no_
- `kgagogo` — _is this Setswana? ☐ yes  ☐ no_
- `kgagogo e e tseneletseng` — _is this Setswana? ☐ yes  ☐ no_
- `lenala` — _is this Setswana? ☐ yes  ☐ no_
- `lenala le le rusetse` — _is this Setswana? ☐ yes  ☐ no_
- `ntho` — _is this Setswana? ☐ yes  ☐ no_
- `ntho e e tseneletseng` — _is this Setswana? ☐ yes  ☐ no_
- `ntho ya go longwa` — _is this Setswana? ☐ yes  ☐ no_
- `ntho ya go phunyediwa` — _is this Setswana? ☐ yes  ☐ no_
- `ntho ya go tlhabiwa` — _is this Setswana? ☐ yes  ☐ no_
- `phologolo` — _is this Setswana? ☐ yes  ☐ no_
- `pouring` — _is this Setswana? ☐ yes  ☐ no_
- `puncture wound` — _is this Setswana? ☐ yes  ☐ no_
- `rusty nail` — _is this Setswana? ☐ yes  ☐ no_
- `spurting` — _is this Setswana? ☐ yes  ☐ no_
- `stab wound` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 18. `severe_dehydration_vulnerable`
*severe_dehydration_vulnerable*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- `motho yo o nang le bolwetse jwa sukiri`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `akakaze achame isikhathi eside` — _is this Setswana? ☐ yes  ☐ no_
- `baby` — _is this Setswana? ☐ yes  ☐ no_
- `bagolo` — _is this Setswana? ☐ yes  ☐ no_
- `can't keep fluids down` — _is this Setswana? ☐ yes  ☐ no_
- `child` — _is this Setswana? ☐ yes  ☐ no_
- `diabetic` — _is this Setswana? ☐ yes  ☐ no_
- `diarrhoea and vomiting together` — _is this Setswana? ☐ yes  ☐ no_
- `elderly` — _is this Setswana? ☐ yes  ☐ no_
- `ga a ise a rote` — _is this Setswana? ☐ yes  ☐ no_
- `ga a ise a rote diura tsotlhe` — _is this Setswana? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Setswana? ☐ yes  ☐ no_
- `hiv` — _is this Setswana? ☐ yes  ☐ no_
- `infant` — _is this Setswana? ☐ yes  ☐ no_
- `letshololo` — _is this Setswana? ☐ yes  ☐ no_
- `letshololo le go tlhatsa ka nako e le nngwe` — _is this Setswana? ☐ yes  ☐ no_
- `mogolo` — _is this Setswana? ☐ yes  ☐ no_
- `molomo o omile thata` — _is this Setswana? ☐ yes  ☐ no_
- `mouth very dry` — _is this Setswana? ☐ yes  ☐ no_
- `ngwana` — _is this Setswana? ☐ yes  ☐ no_
- `no urine for hours` — _is this Setswana? ☐ yes  ☐ no_
- `not passed urine` — _is this Setswana? ☐ yes  ☐ no_
- `o potologa tlhogo thata` — _is this Setswana? ☐ yes  ☐ no_
- `o tlhatsa tsotlhe` — _is this Setswana? ☐ yes  ☐ no_
- `okukhulu` — _is this Setswana? ☐ yes  ☐ no_
- `omile` — _is this Setswana? ☐ yes  ☐ no_
- `ukoma kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `umchamo awuphumi` — _is this Setswana? ☐ yes  ☐ no_
- `uyahlanza` — _is this Setswana? ☐ yes  ☐ no_
- `very dizzy` — _is this Setswana? ☐ yes  ☐ no_
- `vomiting everything` — _is this Setswana? ☐ yes  ☐ no_
- `wome kakhulu` — _is this Setswana? ☐ yes  ☐ no_
- `womile` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 19. `eye_emergency`
*eye_emergency*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `akaboni kahle` — _is this Setswana? ☐ yes  ☐ no_
- `blur suddenly` — _is this Setswana? ☐ yes  ☐ no_
- `can't see` — _is this Setswana? ☐ yes  ☐ no_
- `chemical in eye` — _is this Setswana? ☐ yes  ☐ no_
- `eye injury` — _is this Setswana? ☐ yes  ☐ no_
- `fifala` — _is this Setswana? ☐ yes  ☐ no_
- `foufetse` — _is this Setswana? ☐ yes  ☐ no_
- `go na le sengwe mo leitlhong` — _is this Setswana? ☐ yes  ☐ no_
- `hit in eye` — _is this Setswana? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this Setswana? ☐ yes  ☐ no_
- `khemikhale` — _is this Setswana? ☐ yes  ☐ no_
- `khemikhale mo leitlhong` — _is this Setswana? ☐ yes  ☐ no_
- `kotsi ya leitlho` — _is this Setswana? ☐ yes  ☐ no_
- `leitlho` — _is this Setswana? ☐ yes  ☐ no_
- `o foufetse` — _is this Setswana? ☐ yes  ☐ no_
- `o iteilwe mo leitlhong` — _is this Setswana? ☐ yes  ☐ no_
- `oogbesering` — _is this Setswana? ☐ yes  ☐ no_
- `pono` — _is this Setswana? ☐ yes  ☐ no_
- `pono e fifala ka tshoganyetso` — _is this Setswana? ☐ yes  ☐ no_
- `sengwe mo leitlhong` — _is this Setswana? ☐ yes  ☐ no_
- `something in eye` — _is this Setswana? ☐ yes  ☐ no_
- `sudden` — _is this Setswana? ☐ yes  ☐ no_
- `suddenly` — _is this Setswana? ☐ yes  ☐ no_
- `tshoganyetso` — _is this Setswana? ☐ yes  ☐ no_
- `ungenwe okuthile ehlweni` — _is this Setswana? ☐ yes  ☐ no_
- `uxhophekile` — _is this Setswana? ☐ yes  ☐ no_
- `uxhoshiwe` — _is this Setswana? ☐ yes  ☐ no_
- `vision` — _is this Setswana? ☐ yes  ☐ no_
- `went blind` — _is this Setswana? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 20. `testicular_torsion`
*testicular_torsion*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Setswana keywords** (what the rule recognises in Setswana):
- **⚠️ NONE — please provide keywords for this symptom in Setswana**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Setswana:
- `amasende avuvukile` — _is this Setswana? ☐ yes  ☐ no_
- `bo masisi thata` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa ditesticle` — _is this Setswana? ☐ yes  ☐ no_
- `botlhoko jwa scrotum` — _is this Setswana? ☐ yes  ☐ no_
- `can't walk` — _is this Setswana? ☐ yes  ☐ no_
- `ditesticle` — _is this Setswana? ☐ yes  ☐ no_
- `e rurugile` — _is this Setswana? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this Setswana? ☐ yes  ☐ no_
- `masisi` — _is this Setswana? ☐ yes  ☐ no_
- `rurugile` — _is this Setswana? ☐ yes  ☐ no_
- `scrotum` — _is this Setswana? ☐ yes  ☐ no_
- `scrotum pain` — _is this Setswana? ☐ yes  ☐ no_
- `severe` — _is this Setswana? ☐ yes  ☐ no_
- `sudden` — _is this Setswana? ☐ yes  ☐ no_
- `swollen testicle` — _is this Setswana? ☐ yes  ☐ no_
- `testicle` — _is this Setswana? ☐ yes  ☐ no_
- `testicle pain` — _is this Setswana? ☐ yes  ☐ no_
- `testicular pain` — _is this Setswana? ☐ yes  ☐ no_
- `tshoganyetso` — _is this Setswana? ☐ yes  ☐ no_

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
