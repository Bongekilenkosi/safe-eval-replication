# BIZUSIZO native-speaker review — Xitsonga

**Language:** Xitsonga (code: `ts`)
**Generated:** 2026-05-04 (from live source code)
**Reviewer instructions:** For each entry below, please mark ✅ (correct and natural), ❌ (wrong — suggest fix), or ➕ (add missing phrasing). For any ❌ or ➕, please provide the correct/additional phrasing in the notes column.

**What you are reviewing:** all Xitsonga content that a patient might read (Part 1 — WhatsApp messages) or that the system scans patient text for (Part 2 — clinical safety keywords).

---

## PART 1 — Patient-facing WhatsApp messages (51 entries)

Each row shows the English source text (for reference) and the current Xitsonga translation. If Xitsonga is marked **[MISSING — PLEASE TRANSLATE]**, the translation has not been written yet and we need you to provide it.

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

**Xitsonga:**
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

**Xitsonga:**
```
✅ Ririmi ri vekiwile eka *Xitsonga*.
Tsala "ririmi" nkarhi wun'wana ku cinca.
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

**Xitsonga:**
```
U amukelekile eka BIZUSIZO. 🏥

Vukorhokeri lebyi byi ku pfuna ku twisisa ku tshikelela ka swikombiso swa wena naswona byi ku laela laha u lava pfuno kona.

Swi-bohlokwa:
• Vukorhokeri lebyi byi nyika switsundzuxo swa rihanyo fela.
• A byi kambeli maemo ya vutshwari.
• A byi nki xiyimo xa dokodela kumbe nesi.

Hi nga ku vutisa swivutiso mayelana na swikombiso swa wena ku ku laela. Tivindlo ta wena ti nga hlayisiwa hi ku hlayiseka ku antswisa polokelo na boleng bya vukorhokeri. Loko u rhumeriwa ekliniki kumbe exibedlhele, vuxokoxoko bya wena bya rihanyo byi nga avelana na ndhawu leyi ku amukelaka ku tiyisisa leswaku u kuma vukorhokeri lebyi faneleke. Vuxokoxoko bya wena byi ta tirhisiwa hi ku ya hi milawu ya sephiri ya Afrika Borwa (POPIA).

Xana wa pfumela ku tirhisa vukorhokeri lebyi?

1 — Ina, ndza pfumela naswona ndzi lava ku ya emahlweni
2 — Ee-ee, huma
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.4 `consent_yes` *(lib/messages.js)*

**English source:**
```
✅ Thank you. Let's get you to the right care.
```

**Xitsonga:**
```
✅ Hi khensa. A hi ku laela eka nhlamulo leyo fanelaka.
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

**Xitsonga:**
```
Swi lava. Sesheni ya wena yi herile naswona a ku na vuxokoxoko lebyi hlayisiweke.

Loko u cinca mianakanyo kumbe u lava pfuno enkarhini wo tlanga, rhumela "Hi" ku sungula nakambe. U nga endzela kliniki ya wena ya kusuhi.

Tihlayisa. 🙏
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

**Xitsonga:**
```
Xiphiqo xa wena lexikulu i yini namuntlha?

1. 🫁 Ku hefemula / Ku vava ka xifuva
2. 🤕 Khombo ra nhloko / Nhloko yo vava
3. 🤰 Swa vukatana
4. 🩸 Ku hangalaka ka ngati / Ndzovo
5. 🤒 Fifera / Mukhuhlwana / Ku khohola
6. 🤢 Xisu / Ku hlanza
7. 👶 Vuvabyi bya n'wana
8. 💊 Murhi / Vuvabyi byo tshama
9. 🦴 Rirambu / Malungu / Ku vava ka nkongo
10. 🧠 Rihanyo ra mianakanyo
11. 🤧 Aletshe / Ku pfimba ka dzovo
12. ✏️ Swin'wana — tsala swikombiso swa wena
13. 👤 Vulavula na munhu
14. 🩺 Rihanyo ra vavasati (ku pulana ndyangu)
15. 🔬 Mavonelo ya rihanyo (HIV, BP, swikiri)
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

**Xitsonga:**
```
🔴 *XIHATLA*

Ringela *10177* ku kombela ambulense SWESWI.
Prayivhete: ER24 *084 124*.

⚠️ *U NGA YIMI ambulense* — famba u ya exibedlhele xa kusuhi hi ku hatlisa. Kombela munhu ku ku yisa kumbe u teka thekisi.
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

**Xitsonga:**
```
🟠 *SWI HATLISA NGOPFU*
U lava vukorhokeri hi ku hatlisa.
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

**Xitsonga:**
```
Ndzi lava vuxokoxoko byin'wana ku kambela swikombiso swa wena hi ku twisiseka.

A wu nga hlamusela leswi wu twang hi vuxokoxoko?

- Hi kwihi ku olova nhlokometo kumbe ku pfumaleka kahle?
- U na xikombo lexi nkarhi wa xikan'we?
- Xi tika, xi lulama, kumbe xi dula njalo?
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

**Xitsonga:**
```
ℹ️ Hi kambele swikombiso swa wena, kambe ku tshemba ka hina ku le hansi ku tlula ntolovelo. Mbuyelo wa wena wu ha kombisiwa laha henhla.

Tani hi ku tivikela:
- Loko swikombiso swa wena swi cinca kumbe swi nyanya, ta ekliniki *namuntlha*
- Nesi u tivisiwe ku kambela mhaka ya wena
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

**Xitsonga:**
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

**Xitsonga:**
```
Kliniki yi pfariwile sweswi. Ya exibedlhele xa kusuhi — ka xiyenge xa swihatla.
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

**Xitsonga:**
```
U nga ya endhawini yo kufumela hi ku hlayiseka?

1 — Ina, ndzi nga ya hi ndzi ri ndzexe kumbe munhu a nga ndzi yisa
2 — Ee-ee, ndzi vabya ngopfu ku famba hi ku hlayiseka
3 — A ndzi na xifambisi
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.14 `transport_safe` *(lib/messages.js)*

**English source:**
```
Good. Please leave now — do not delay.
```

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
```
🟡 *SWA HATLISA*
Endzela kliniki namuntlha. U nga hlweli.
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

**Xitsonga:**
```
⏰ Tikliniki ti pfariwile sweswi. Hi leswi u faneleke ku swi endla:

1. *Loko swikombiso swa wena swi koteka* — wisa ekaya u ya ekliniki mundzuku nimixo (pele ka 08:00)

2. *Loko swikombiso swi tika nivusiku* — ya exibedlhele xa kusuhi kumbe u ringela *10177*

Hi ta ku rhumela xikhumbutso mundzuku nimixo.
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

**Xitsonga:**
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

**Xitsonga:**
```
🟢 *SWA NTOLOVELO — A hi xihatla*

Swikombiso swa wena a hi xihatla. Maele loko u ehleketa hi goza leri landzelaka:
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

**Xitsonga:**
```
📍 Ndhawu ya kusuhi: *[name]* ([dist] km).

U nga fikela ku olova?
1 — Ina
2 — Ee-ee, ndzi kombela tin'wana
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

**Xitsonga:**
```
✅ Famba u ya eka *[name]*.

📋 *Loko u fika:*
1. Yaa eka reception
2. Va byela: "Ndzi tirhisile BIZUSIZO"
3. Va kombela nomboro ya wena (tsala *code*)
4. Va na vuxokoxoko bya wena

U famba kahle. Hi ta ku vutisa endzhaku ka tiawara ta 48.
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

**Xitsonga:**
```
Leti i tindhawu tin'wana ta kusuhi:
[facilities]

0 — Tlhelela eka xiringanyeto xo sungula (*[firstName]*)

Hlamula hi nomboro ya nhlawulo wa wena.
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

**Xitsonga:**
```
Xewani, u ti tshikelele na BIZUSIZO masiku ya 2 ya hundzi. Swikombiso swa wena swi njhani?
1. Swi antswa ✅
2. Swi fanana ➡️
3. Swi tika ku tlula ⚠️
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.25 `follow_up_better` *(lib/messages.js)*

**English source:**
```
✅ Glad you are feeling better. No further action needed. Stay well!
```

**Xitsonga:**
```
✅ Hi tsakile leswaku u titwa u antswa. A ku na swo engetela swi lavekaka. Tshama kahle!
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.26 `follow_up_same` *(lib/messages.js)*

**English source:**
```
🟡 Please continue monitoring your symptoms. Visit a clinic if they do not improve in the next 24 hours.
```

**Xitsonga:**
```
🟡 Yisa emahlweni u vona swikombiso swa wena. Endzela kliniki loko swi nga antswa hi tiawara ta 24.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.27 `follow_up_worse` *(lib/messages.js)*

**English source:**
```
⚠️ Your symptoms may be worsening. A nurse has been notified and will review your case. If it is an emergency, call *10177* now.
```

**Xitsonga:**
```
⚠️ Swikombiso swa wena swi nga tika. Nesi u tivisiwe. Loko ku ri xihatla, ringela *10177* sweswi.
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

**Xitsonga:**
```
Xivutiso xin'wana — xana u endlele kliniki endzhaku ka ku hlahlobiwa?

1 — Ina, ndzi ile kliniki ✅
2 — E-e, a ndzi yanga ❌
3 — Ndzi ile xibedlhele esikhundleni 🏥
4 — Ndzi ile kambe ndzi vuliwa ⛔
5 — Ndzi ile kambe ku hava manganyana 💊
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.29 `follow_up_clinic_thanks` *(lib/messages.js)*

**English source:**
```
Thank you. Your response helps us improve BIZUSIZO for everyone. Stay well. 🙏
```

**Xitsonga:**
```
Inkomu. Nhlamulo ya wena yi hi pfuna ku antswisa BIZUSIZO. Tshama kahle. 🙏
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

**Xitsonga:**
```
📍 Hi kombela u avelana ndhawu ya wena leswaku hi kuma ndhawu yo kufumela ya kusuhi.

Sindzisa bhatani ya 📎 → Ndhawu → Rhumela ndhawu ya wena ya sweswi.
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

**Xitsonga:**
```
Loko hi nga si ya emahlweni, xana u nwa mirhi ya mavabyi lama? (Hlamula hi tinomboro, xik. "1,3" kumbe "0" loko ku ri hava)

0. Ku hava
1. 💊 HIV / Mirhi ya ARV
2. 🩸 Ngati ya le henhla
3. 🍬 Vuvabyi bya xwikiri
4. ❤️ Vuvabyi bya mbilu
5. 🫁 Xifuva / Maphapha
6. 🧠 Vuvabyi bya ku wa
7. 💊 Mirhi yin'wana ya mavabyi ya ku nga heli
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.32 `chronic_screening_saved` *(lib/messages.js)*

**English source:**
```
✅ Thank you. This helps us give you better guidance.
```

**Xitsonga:**
```
✅ Hi khensa. Leswi swi hi pfuna ku ku nyika switsundzuxo swo antswa.
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

**Xitsonga:**
```
Vito ra wena i mani? (Tanihileswi ri ngwaleke eka ID ya wena)

Tsala vito ra wena:
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

**Xitsonga:**
```
Hi khensa, *[firstName]*.

Xivongo xa wena i mani?

Tsala xivongo xa wena:
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

**Xitsonga:**
```
Siku ra wena ro velekiwa hi rini?

Tsala hi ndlela leyi: *DD-MM-YYYY*
Xikombiso: *15-03-1992*
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

**Xitsonga:**
```
Rimbewu ra wena i yini?

1 — Wanuna
2 — Wansati
3 — Intersex
4 — A ndzi lavi ku vula
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.37 `identity_confirmed` *(lib/messages.js)*

**English source:**
```
✅ Thank you, *[name] [surname]*. This helps the clinic prepare your file before you arrive.
```

**Xitsonga:**
```
✅ Hi khensa, *[name] [surname]*. Leswi swi pfuna kliniki ku lulamisa fayili ya wena u nga si fika.
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

**Xitsonga:**
```
Xana u tshame u ya eka *[facilityName]* khale?

1 — Ina, ndzi na fayili kwalaho
2 — Ee-ee, ku endzela ka mina ko sungula
3 — A ndzi tiyiseki
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.39 `returning_yes` *(lib/messages.js)*

**English source:**
```
📁 Good — the clinic will look for your file before you arrive.
```

**Xitsonga:**
```
📁 Swa saseka — kliniki yi ta lava fayili ya wena u nga si fika.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.40 `returning_new` *(lib/messages.js)*

**English source:**
```
🆕 No problem — the clinic will create a new file for you. This saves time when you arrive.
```

**Xitsonga:**
```
🆕 Ku hava xiphiqo — kliniki yi ta endla fayili leyintshwa. Leswi swi hlayisa nkarhi loko u fika.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.41 `returning_unsure` *(lib/messages.js)*

**English source:**
```
📋 No problem. The clinic will check when you arrive. Your name and date of birth will help them find your file quickly.
```

**Xitsonga:**
```
📋 Ku hava xiphiqo. Kliniki yi ta kambela loko u fika. Vito ra wena na siku ro velekiwa swi ta va pfuna ku kuma fayili ya wena hi ku hatlisa.
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

**Xitsonga:**
```
Xana u teka xiave eka ndzavisiso wa BIZUSIZO ekliniki?

1 — Ina, ndzi muteki-xiave wa ndzavisiso
2 — Ee-ee, ndzi tirhisa BIZUSIZO ntsena
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

**Xitsonga:**
```
🔢 Khodi ya wena ya ndzavisiso i ri: *[code]*

Hi kombela u kombisa khodi leyi eka mulavisisi loko u fika ekliniki. Yi hi pfuna ku hlanganisa triage ya wena ya BIZUSIZO na ku endzela ka wena ekliniki.

U nga tsala "code" nkarhi wun'wana na wun'wana ku vona khodi ya wena nakambe.
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

**Xitsonga:**
```
U hlawule: *[category]*

Swi bihile ku fikela kwihi?
1 — Swi nyane (ndzi nga endla mintirho ya mina ya siku na siku)
2 — Swi ringana (swi khumbha mintirho ya mina)
3 — Swi tika (a ndzi koti na swintsongo)

Kumbe u hlamusela swikombiso swa wena hi marito ya wena.
U nga rhumela voice note 🎤
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

**Xitsonga:**
```
🎤 U nga rhumela voice note u hlamusela swikombiso swa wena. Vulavula kahle u hi byela:

• Ku humelela yini
• Ku sungule rini
• Ku bihile ku fikela kwihi

Hi ta yingisela mahungu ya wena hi ku pfuna.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.46 `voice_note_received` *(lib/messages.js)*

**English source:**
```
🎤 Voice note received. Let me process your message...
```

**Xitsonga:**
```
🎤 Voice note yi amukelekile. A ndzi tirhe mahungu ya wena...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.47 `thinking` *(lib/messages.js)*

**English source:**
```
🔍 Assessing your symptoms...
```

**Xitsonga:**
```
🔍 Hi kambela swikombiso swa wena...
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

**Xitsonga:**
```

💡 *Switsundzuxo:*
Tsala *0* — nkani leyintshwa
Tsala *ririmi* — cinca ririmi
Tsala *code* — kombisa nomboro ya wena
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

**Xitsonga:**
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

**Xitsonga:**
```
⚠️ Hi kumile swiphiqo swa thekinoloji naswona a hi koti ku tirha mahungu ya wena sweswi.

🚨 *Loko ku ri xihatla:*
• Ringela *10177* (ambulense) kumbe *084 124* (ER24)
• Famba u ya ekliniki kumbe exibedlhele xa kusuhi SWESWI — u nga yimi ambulense

Hi ta ringeta ku hlamula loko sisiteme yi vuyile. Hi kombela ku khomela.
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

**Xitsonga:**
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

**Xitsonga:**
```
Xana u laha ku ta teka mirhi ya vurhongo?\n1 — Ina, ndzi lava mirhi ya mina ya ntolovelo\n2 — Ee-ee, ndzi na swikombiso swa ntshwa kumbe swo biha
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

**Xitsonga:**
```
U teka mirhi yihi? (Hlawula hinkwayo leyi yi amanaka)\n1 — Ti-ARV (HIV)\n2 — Ngati ya le henhla\n3 — Swikiri (Diabetes)\n4 — Mbilu / Angina\n5 — Xifuva / Mafahla\n6 — Vuvabyi bya ku wa (Epilepsy)\n7 — Mirhi yin'wana ya vurhongo
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.54 `ccmdd_route` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Your nearest medication pickup point is:\n*${name}* (${dist} km)\n\nYou can collect your chronic medication there without queuing at a clinic.\n\nCan you get there?\n1 — Yes\n2 — No, show alternatives
```

**Xitsonga:**
```
💊 Ndhawu ya wena ya kusuhi ya ku teka mirhi i:\n*${name}* (${dist} km)\n\nU nga teka mirhi ya wena ya vurhongo kona ku si yimi emulayinini ekliniki.\n\nU nga fika?\n1 — Ina\n2 — Ee-ee, ndzi kombela tin'wana
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.55 `ccmdd_confirmed` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
✅ Go to *${name}* to collect your medication.\n\nRemember to bring your ID and prescription/clinic card.\n\nWe will remind you when your next collection is due.
```

**Xitsonga:**
```
✅ Yana eka *${name}* ku teka mirhi ya wena.\n\nTsundza ku tisa ID ya wena na karata ya kliniki.\n\nHi ta ku tsundzuxa loko nkarhi wa ku teka wo landza wu fika.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.56 `ccmdd_not_available` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 CCMDD pickup is not yet available in your area. Please visit your nearest clinic for your medication refill.
```

**Xitsonga:**
```
💊 Ku teka mirhi a ku si va kona endhawini ya wena. Hi kombela u endzela kliniki ya kusuhi ku teka mirhi.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.57 `reminder_24h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
💊 Reminder: Your medication is ready for collection at *${name}*.\n\nPlease collect today if possible. Your health depends on taking your medication consistently.
```

**Xitsonga:**
```
💊 Xitsundzuxo: Mirhi ya wena yi lunghile ku tekiwa eka *${name}*.\n\nHi kombela u yi teke namuntlha loko swi koteka. Rihanyo ra wena ri titshege hi ku teka mirhi hi ku ya emahlweni.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.58 `reminder_48h` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
⚠️ Your medication at *${name}* has not been collected yet.\n\nMissing your medication can cause your condition to worsen. Please collect as soon as possible.\n\nHaving trouble getting there?\n1 — I will collect today\n2 — I cannot get to this location\n3 — I have a problem (tell us)
```

**Xitsonga:**
```
⚠️ Mirhi ya wena eka *${name}* a yi si tekiwa.\n\nKu palelwa hi ku teka mirhi swi nga endla xiyimo xa wena xi biha. Hi kombela u yi teke hi ku hatlisa.\n\nU na xiphiqo xo fika?\n1 — Ndzi ta yi teka namuntlha\n2 — A ndzi koti ku fika ndhawini leyi\n3 — Ndzi na xiphiqo (hi byele)
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.59 `reminder_72h_escalation` *(index.js → CCMDD_MESSAGES)*

**English source:**
```
🔴 You have not collected your medication for 3 days.\n\nMissing medication puts your health at serious risk. A healthcare worker has been notified.\n\nPlease tell us what is preventing you from collecting:\n1 — Transport / distance problem\n2 — Cannot take time off work\n3 — Pickup point was closed when I went\n4 — Medication was not available\n5 — Side effects — I stopped taking medication\n6 — Other reason
```

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
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

**Xitsonga:**
```
📱 Ku bonana hi video swi nga kumeka eka xiyimo xa wena.\n\nU nga vulavula na muongi hi video call ku ri na ku ya ekliniki.\n\nU ta lava:\n1 — Ku buka ku bonana hi video\n2 — Ee-ee ndza khensa, ndzi ta endzela kliniki
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.68 `booking_api` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
✅ Your virtual consultation has been booked. You will receive a confirmation message with the date, time, and video link.
```

**Xitsonga:**
```
✅ Ku bonana ka wena hi video ku bukiwile. U ta amukela tsalwa ra ku tiyisisa hi siku, nkarhi, na linki ya video.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.69 `booking_whatsapp` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 To book your virtual consultation, please message this number on WhatsApp:\n\n*${phone}*\n\nTell them BIZUSIZO referred you and describe your symptoms.
```

**Xitsonga:**
```
📱 Ku buka ku bonana ka wena hi video, hi kombela u rhumela tsalwa eka nomboro leyi hi WhatsApp:\n\n*${phone}*\n\nVa byela leswaku BIZUSIZO yi ku rhumele naswona u hlamusela swikombiso swa wena.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.70 `not_available` *(index.js → VIRTUAL_CONSULT_MESSAGES)*

**English source:**
```
📱 Virtual consultations are not yet available in your area. Please visit your nearest clinic.
```

**Xitsonga:**
```
📱 Ku bonana hi video a ku si va kona endhawini ya wena. Hi kombela u endzela kliniki ya kusuhi.
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

**Xitsonga:**
```
📋 Mbuyelo wa wena wa *${testType}* wu lunghile.\n\nHi kombela u endzela kliniki ya wena ku burisana na muongi hi mbuyelo.\n\nLoko u vuyiseriwile ekliniki, leswi A SWI vuli leswaku ku na xiphiqo — mimbuyelo yo tala i ya ku kamberiwa ka ntolovelo.\n\nSwivutiso? Hlamula "mimbuyelo" kumbe u rhingela kliniki ya wena.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.72 `result_action_required` *(index.js → LAB_MESSAGES)*

**English source:**
```
📋 Your *${testType}* results are ready and your healthcare provider would like to see you.\n\nPlease visit your clinic within the next 7 days. This is important for your ongoing care.\n\nIf you cannot get to the clinic, reply "help" and we will assist you.
```

**Xitsonga:**
```
📋 Mbuyelo wa wena wa *${testType}* wu lunghile naswona muongi wa wena u lava ku ku vona.\n\nHi kombela u endzela kliniki ya wena eka masiku ya 7 ya ha mambe. Leswi swi na nkoka eka vukorhokeri bya wena.\n\nLoko u nga koti ku fika ekliniki, hlamula "mpfuno" hi ta ku pfuna.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.73 `result_normal` *(index.js → LAB_MESSAGES)*

**English source:**
```
✅ Good news! Your *${testType}* results are back and everything looks normal.\n\nKeep taking your medication as prescribed. Your next check-up will be scheduled as usual.\n\nStay well! 💚
```

**Xitsonga:**
```
✅ Mahungu lamanene! Mbuyelo wa wena wa *${testType}* wu vuyile naswona hinkwaswo swi vonaka swi ri kahle.\n\nYisa emahlweni ku teka mirhi ya wena hilaha u laerisiweke. Ku kambelwa ka wena loku landzelaka ku ta hleriwa hi ntolovelo.\n\nTshama kahle! 💚
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.74 `check_status` *(index.js → LAB_MESSAGES)*

**English source:**
```
Let me check your lab results. One moment please...
```

**Xitsonga:**
```
A ndzi kambela mbuyelo wa wena wa laborathori. Xinkarhana xin\'we hi kombela...
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.75 `no_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
We do not have any lab results on file for you at the moment. If you are expecting results, please check with your clinic.\n\nResults typically take 3-7 working days depending on the test type.
```

**Xitsonga:**
```
A hi na mbuyelo wa laborathori hi wena sweswi. Loko u languterile mbuyelo, vutisa kliniki ya wena.\n\nMimbuyelo hi ntolovelo yi teka masiku ya 3-7 ya ntirho ku ya hi muxaka wa teko.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---

### 1.76 `pending_results` *(index.js → LAB_MESSAGES)*

**English source:**
```
Your *${testType}* test from *${testDate}* is still being processed. We will notify you on WhatsApp as soon as results are available.\n\nYou do not need to visit the clinic to check — we will come to you.
```

**Xitsonga:**
```
Teko ya wena ya *${testType}* ya *${testDate}* yi ha yi endliwa. Hi ta ku tivisa hi WhatsApp loko mbuyelo wu kumeka.\n\nA wu lavi ku endzela kliniki ku kambela — hi ta ta eka wena.
```

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ add (below)

**Notes / corrections / additions:**

---


## PART 2 — Clinical safety keywords (58 rules)

The system scans patient text for keyword combinations and assigns a triage level (RED = emergency, ORANGE = very urgent, YELLOW = urgent) **independent of the AI**. Each rule below shows the English trigger phrases (so you know what the rule is for) and the current Xitsonga keywords the system recognises. These are natural patient phrasings, not clinical terminology.

**For each rule, please:**
1. Confirm the listed Xitsonga keywords are correct and natural for how a patient would type on WhatsApp.
2. Add any common phrasings a patient might use for this symptom that are **not** currently listed.
3. Flag any keyword that sounds unnatural, overly formal, or potentially misleading.

**Priority:** ✨ high (RED rules, life-threatening) · important (ORANGE) · ⚪ lower priority (YELLOW)

### RED discriminators

#### RED 1. `respiratory_cardiac_arrest`
*── RED DISCRIMINATORS ── | ════════════════════════════════════════════════════════════════ | RED 1: RESPIRATORY / CARDIAC ARREST — not breathing, heart stopped | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `ku hefemula ku yimile`
- `mbilu yi yimile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a a hefemuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `a a phefumolohe` — _is this Xitsonga? ☐ yes  ☐ no_
- `awaphefumuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `cardiac arrest` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga go na go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `heart stopped` — _is this Xitsonga? ☐ yes  ☐ no_
- `inhliziyo yama` — _is this Xitsonga? ☐ yes  ☐ no_
- `inhliziyo yema` — _is this Xitsonga? ☐ yes  ☐ no_
- `no breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `not breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `o emisitse go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tlogetse go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `stopped breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `wehlil' emzimbeni` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 2. `unconscious`
*════════════════════════════════════════════════════════════════ | RED 2: UNCONSCIOUS — unresponsive, not waking, collapsed | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `a a pfuki`
- `u etlele`
- `u wisile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a a hlamuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `abuyi` — _is this Xitsonga? ☐ yes  ☐ no_
- `akanyakazi` — _is this Xitsonga? ☐ yes  ☐ no_
- `alawuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `alibeki` — _is this Xitsonga? ☐ yes  ☐ no_
- `angaphaphami` — _is this Xitsonga? ☐ yes  ☐ no_
- `aziphaphami` — _is this Xitsonga? ☐ yes  ☐ no_
- `collapsed and not moving` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tsoge` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a arabe` — _is this Xitsonga? ☐ yes  ☐ no_
- `limp and not moving` — _is this Xitsonga? ☐ yes  ☐ no_
- `not waking` — _is this Xitsonga? ☐ yes  ☐ no_
- `o wele fase` — _is this Xitsonga? ☐ yes  ☐ no_
- `passed out` — _is this Xitsonga? ☐ yes  ☐ no_
- `unconscious` — _is this Xitsonga? ☐ yes  ☐ no_
- `unresponsive` — _is this Xitsonga? ☐ yes  ☐ no_
- `uwele phansi` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 3. `active_seizure`
*════════════════════════════════════════════════════════════════ | RED 3: ACTIVE SEIZURE — currently fitting, convulsing | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `nhlanga sweswi`
- `u a rhurhumela`
- `u a tsekatseka`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `body shaking uncontrolled` — _is this Xitsonga? ☐ yes  ☐ no_
- `convulsing now` — _is this Xitsonga? ☐ yes  ☐ no_
- `currently fitting` — _is this Xitsonga? ☐ yes  ☐ no_
- `fitting now` — _is this Xitsonga? ☐ yes  ☐ no_
- `having a fit` — _is this Xitsonga? ☐ yes  ☐ no_
- `isidina manje` — _is this Xitsonga? ☐ yes  ☐ no_
- `jaanong o tshwarwa ke sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `jaanong o tshwerwe ke sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa jaanong` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tshwerwe ke bolwetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `seizure now` — _is this Xitsonga? ☐ yes  ☐ no_
- `shaking and not stopping` — _is this Xitsonga? ☐ yes  ☐ no_
- `u swiwa nga vhulwadze` — _is this Xitsonga? ☐ yes  ☐ no_
- `unamaxhala ngoku` — _is this Xitsonga? ☐ yes  ☐ no_
- `unyikinyeka ngoku` — _is this Xitsonga? ☐ yes  ☐ no_
- `val nou` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 4. `cardiac_emergency`
*════════════════════════════════════════════════════════════════ | RED 4: CARDIAC EMERGENCY — chest pain + breathing difficulty | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `xifuva`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a ndzi hefemuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `a thi fembi` — _is this Xitsonga? ☐ yes  ☐ no_
- `asem` — _is this Xitsonga? ☐ yes  ☐ no_
- `asemhaling` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't breathe` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `difficulty breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga ke heme` — _is this Xitsonga? ☐ yes  ☐ no_
- `go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `go hema go thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho phefumoloha` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku hefemula` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku hefemula ku tika` — _is this Xitsonga? ☐ yes  ☐ no_
- `kuphefumula` — _is this Xitsonga? ☐ yes  ☐ no_
- `kuphefumula kumatima` — _is this Xitsonga? ☐ yes  ☐ no_
- `phefumla` — _is this Xitsonga? ☐ yes  ☐ no_
- `phefumula` — _is this Xitsonga? ☐ yes  ☐ no_
- `short of breath` — _is this Xitsonga? ☐ yes  ☐ no_
- `shortness of breath` — _is this Xitsonga? ☐ yes  ☐ no_
- `sifuba` — _is this Xitsonga? ☐ yes  ☐ no_
- `struggling to breathe` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshifuva` — _is this Xitsonga? ☐ yes  ☐ no_
- `u femba` — _is this Xitsonga? ☐ yes  ☐ no_
- `u femba hu a onda` — _is this Xitsonga? ☐ yes  ☐ no_
- `uphefumula kanzima` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 5. `cardiac_emergency_radiation`
*Complements the chest+breathing rule above. Surfaced by eval P01: chest + arm | heaviness + sweating had no deterministic net; LLM caught it at 95% confidence | but no fallback existed. Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr | pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `xifuva xi tika`
- `xifuva xi vava`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a opela` — _is this Xitsonga? ☐ yes  ☐ no_
- `a tsidifala` — _is this Xitsonga? ☐ yes  ☐ no_
- `anamela` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm aching` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm feels heavy` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm feels numb` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm heavy` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm is dof` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm is heavy` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm is numb` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm numb` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm tingling` — _is this Xitsonga? ☐ yes  ☐ no_
- `bo anamela` — _is this Xitsonga? ☐ yes  ☐ no_
- `bo fologela` — _is this Xitsonga? ☐ yes  ☐ no_
- `boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest discomfort` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest heaviness` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest hurts` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest is heavy` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest pressure` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest tight` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest tightness` — _is this Xitsonga? ☐ yes  ☐ no_
- `clammy` — _is this Xitsonga? ☐ yes  ☐ no_
- `cold sweat` — _is this Xitsonga? ☐ yes  ☐ no_
- `cold sweats` — _is this Xitsonga? ☐ yes  ☐ no_
- `diaphoresis` — _is this Xitsonga? ☐ yes  ☐ no_
- `fologela` — _is this Xitsonga? ☐ yes  ☐ no_
- `go pitlagana` — _is this Xitsonga? ☐ yes  ☐ no_
- `go sa phuthologa` — _is this Xitsonga? ☐ yes  ☐ no_
- `in my arm` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingalo ibuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingalo inzima` — _is this Xitsonga? ☐ yes  ☐ no_
- `jaw ache` — _is this Xitsonga? ☐ yes  ☐ no_
- `jaw hurts` — _is this Xitsonga? ☐ yes  ☐ no_
- `jaw pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatelelo` — _is this Xitsonga? ☐ yes  ☐ no_
- `kolobile` — _is this Xitsonga? ☐ yes  ☐ no_
- `le a opela` — _is this Xitsonga? ☐ yes  ☐ no_
- `le a tonya` — _is this Xitsonga? ☐ yes  ☐ no_
- `le ikutlwa le le boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `le ikutlwa le sule` — _is this Xitsonga? ☐ yes  ☐ no_
- `le le boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `le sule` — _is this Xitsonga? ☐ yes  ☐ no_
- `left arm` — _is this Xitsonga? ☐ yes  ☐ no_
- `left shoulder` — _is this Xitsonga? ☐ yes  ☐ no_
- `legare` — _is this Xitsonga? ☐ yes  ☐ no_
- `legare la molema` — _is this Xitsonga? ☐ yes  ☐ no_
- `letlalo` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo la me` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo la moja` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo la molema` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo le boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsoho le boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `mofufutsho o tsididi` — _is this Xitsonga? ☐ yes  ☐ no_
- `mohonga u vhavha` — _is this Xitsonga? ☐ yes  ☐ no_
- `motlhala` — _is this Xitsonga? ☐ yes  ☐ no_
- `motlhala wa me` — _is this Xitsonga? ☐ yes  ☐ no_
- `mouoane` — _is this Xitsonga? ☐ yes  ☐ no_
- `muheme wa tsunda` — _is this Xitsonga? ☐ yes  ☐ no_
- `muheme wu vava` — _is this Xitsonga? ☐ yes  ☐ no_
- `my arm` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a opela` — _is this Xitsonga? ☐ yes  ☐ no_
- `o fufuleha mofufutsho o batang` — _is this Xitsonga? ☐ yes  ☐ no_
- `o fufulela phefo e tonyago` — _is this Xitsonga? ☐ yes  ☐ no_
- `o montsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tsididi` — _is this Xitsonga? ☐ yes  ☐ no_
- `opela` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain down my shoulder` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain in jaw` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain in my jaw` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain to shoulder` — _is this Xitsonga? ☐ yes  ☐ no_
- `pitlagana` — _is this Xitsonga? ☐ yes  ☐ no_
- `pitlagane` — _is this Xitsonga? ☐ yes  ☐ no_
- `radiating` — _is this Xitsonga? ☐ yes  ☐ no_
- `right arm` — _is this Xitsonga? ☐ yes  ☐ no_
- `se a opela` — _is this Xitsonga? ☐ yes  ☐ no_
- `se pitlagane` — _is this Xitsonga? ☐ yes  ☐ no_
- `seledu se bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `shoulder pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `spreading to` — _is this Xitsonga? ☐ yes  ☐ no_
- `spreads to` — _is this Xitsonga? ☐ yes  ☐ no_
- `sule` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweating` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweaty` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweet bars` — _is this Xitsonga? ☐ yes  ☐ no_
- `tonya` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshanḓa tsho lemala` — _is this Xitsonga? ☐ yes  ☐ no_
- `tsididi` — _is this Xitsonga? ☐ yes  ☐ no_
- `tsidifala` — _is this Xitsonga? ☐ yes  ☐ no_
- `tsikinyega` — _is this Xitsonga? ☐ yes  ☐ no_
- `u suka ngoho` — _is this Xitsonga? ☐ yes  ☐ no_
- `umjuluk' obandayo` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyabila` — _is this Xitsonga? ☐ yes  ☐ no_
- `voko ri tika` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 6. `acs_radiation`
*════════════════════════════════════════════════════════════════ | RED 5: ACS RADIATION — chest pain + arm/jaw pain + sweating | Extended to all 11 languages (nso/tn/st/ts/ss/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `xifuva`
- `xifuva xi vava`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `arm` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest hurts` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest tight` — _is this Xitsonga? ☐ yes  ☐ no_
- `feels like something sitting on my chest` — _is this Xitsonga? ☐ yes  ☐ no_
- `fhungo` — _is this Xitsonga? ☐ yes  ☐ no_
- `go fufulelwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `go utlwalega e kete go na le sengwe se se ntseng mo sehubeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `ihlombe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingalo` — _is this Xitsonga? ☐ yes  ☐ no_
- `iqatha` — _is this Xitsonga? ☐ yes  ☐ no_
- `jaw pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `khana` — _is this Xitsonga? ☐ yes  ☐ no_
- `left arm` — _is this Xitsonga? ☐ yes  ☐ no_
- `legare` — _is this Xitsonga? ☐ yes  ☐ no_
- `legetla` — _is this Xitsonga? ☐ yes  ☐ no_
- `lehetla` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo la molema` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsoho` — _is this Xitsonga? ☐ yes  ☐ no_
- `lihlombe` — _is this Xitsonga? ☐ yes  ☐ no_
- `mofufutšo` — _is this Xitsonga? ☐ yes  ☐ no_
- `motlhala` — _is this Xitsonga? ☐ yes  ☐ no_
- `mouoane` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a fufuleha` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a fufulela` — _is this Xitsonga? ☐ yes  ☐ no_
- `opela` — _is this Xitsonga? ☐ yes  ☐ no_
- `pitlagane` — _is this Xitsonga? ☐ yes  ☐ no_
- `rikatla` — _is this Xitsonga? ☐ yes  ☐ no_
- `se a opela` — _is this Xitsonga? ☐ yes  ☐ no_
- `se pitlagane` — _is this Xitsonga? ☐ yes  ☐ no_
- `shoulder pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `sifuba` — _is this Xitsonga? ☐ yes  ☐ no_
- `skouer` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweating` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweet` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweetvogtig` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshanḓa` — _is this Xitsonga? ☐ yes  ☐ no_
- `u a suka` — _is this Xitsonga? ☐ yes  ☐ no_
- `u a suza` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyabila` — _is this Xitsonga? ☐ yes  ☐ no_
- `voko` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 7. `obstetric_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 6: OBSTETRIC HAEMORRHAGE — pregnant + bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `ndzi tikile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a mantsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `bleeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `bleeding heavily` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood` — _is this Xitsonga? ☐ yes  ☐ no_
- `boimana` — _is this Xitsonga? ☐ yes  ☐ no_
- `dutla` — _is this Xitsonga? ☐ yes  ☐ no_
- `go dutla madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `go dutla madi a mantsi thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `go dutla madi go go masisi` — _is this Xitsonga? ☐ yes  ☐ no_
- `go dutla madi thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `go lahlegelwa ke madi thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `haemorrhage` — _is this Xitsonga? ☐ yes  ☐ no_
- `hemorrhage` — _is this Xitsonga? ☐ yes  ☐ no_
- `imile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingati` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke ipaakanyeditse` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `massive bleeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngati` — _is this Xitsonga? ☐ yes  ☐ no_
- `o imile` — _is this Xitsonga? ☐ yes  ☐ no_
- `opha` — _is this Xitsonga? ☐ yes  ☐ no_
- `pregnancy` — _is this Xitsonga? ☐ yes  ☐ no_
- `pregnant` — _is this Xitsonga? ☐ yes  ☐ no_
- `swangari` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyopha` — _is this Xitsonga? ☐ yes  ☐ no_
- `zwigolo` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 8. `obstetric_cord_or_fetal`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 7: OBSTETRIC CORD / FETAL EMERGENCY | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `baba beweeg nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `baby not moving` — _is this Xitsonga? ☐ yes  ☐ no_
- `baby stopped moving` — _is this Xitsonga? ☐ yes  ☐ no_
- `cord came out` — _is this Xitsonga? ☐ yes  ☐ no_
- `cord is out` — _is this Xitsonga? ☐ yes  ☐ no_
- `mhahla wu humile` — _is this Xitsonga? ☐ yes  ☐ no_
- `mohara o tsoile` — _is this Xitsonga? ☐ yes  ☐ no_
- `mohara o tswile` — _is this Xitsonga? ☐ yes  ☐ no_
- `mohara o tšwile` — _is this Xitsonga? ☐ yes  ☐ no_
- `mohlola wo bva` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana ga a šikinyege` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana ha a tshikinyege` — _is this Xitsonga? ☐ yes  ☐ no_
- `no fetal movement` — _is this Xitsonga? ☐ yes  ☐ no_
- `nwana a a tshikinyeki` — _is this Xitsonga? ☐ yes  ☐ no_
- `prolapsed cord` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 9. `envenomation`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 8: SNAKE BITE — all 11 languages | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `nyoka yi lumile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `bit by snake` — _is this Xitsonga? ☐ yes  ☐ no_
- `bitten by snake` — _is this Xitsonga? ☐ yes  ☐ no_
- `go longwa ke noga` — _is this Xitsonga? ☐ yes  ☐ no_
- `noga e a loma` — _is this Xitsonga? ☐ yes  ☐ no_
- `noga e nkometse` — _is this Xitsonga? ☐ yes  ☐ no_
- `nyoka yi n'wi lumile` — _is this Xitsonga? ☐ yes  ☐ no_
- `o lomilwe ke noga` — _is this Xitsonga? ☐ yes  ☐ no_
- `snake bit` — _is this Xitsonga? ☐ yes  ☐ no_
- `snake bite` — _is this Xitsonga? ☐ yes  ☐ no_
- `snakebite` — _is this Xitsonga? ☐ yes  ☐ no_
- `ṋowa` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 10. `severe_burns`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `mati ya ku hisa`
- `u hisiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `body on fire` — _is this Xitsonga? ☐ yes  ☐ no_
- `burn from explosion` — _is this Xitsonga? ☐ yes  ☐ no_
- `burning all over` — _is this Xitsonga? ☐ yes  ☐ no_
- `burns to face and hands` — _is this Xitsonga? ☐ yes  ☐ no_
- `burnt all over` — _is this Xitsonga? ☐ yes  ☐ no_
- `izandla nobuso kushisile` — _is this Xitsonga? ☐ yes  ☐ no_
- `izandla nobuso zitshisiwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `large burn` — _is this Xitsonga? ☐ yes  ☐ no_
- `meetse a go fisha` — _is this Xitsonga? ☐ yes  ☐ no_
- `metsi a chesang` — _is this Xitsonga? ☐ yes  ☐ no_
- `o cheswe` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tshiwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `severe burn` — _is this Xitsonga? ☐ yes  ☐ no_
- `u pfile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ushiswe kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `vuur oor liggaam` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 11. `severe_burns_context`
*════════════════════════════════════════════════════════════════ | RED 9: SEVERE BURNS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `mati ya ku hisa ehenhla ka`
- `xifuva`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `back` — _is this Xitsonga? ☐ yes  ☐ no_
- `bene` — _is this Xitsonga? ☐ yes  ☐ no_
- `boiling water on` — _is this Xitsonga? ☐ yes  ☐ no_
- `bors` — _is this Xitsonga? ☐ yes  ☐ no_
- `buso` — _is this Xitsonga? ☐ yes  ☐ no_
- `chest` — _is this Xitsonga? ☐ yes  ☐ no_
- `face` — _is this Xitsonga? ☐ yes  ☐ no_
- `gesig` — _is this Xitsonga? ☐ yes  ☐ no_
- `imilente` — _is this Xitsonga? ☐ yes  ☐ no_
- `imilenze` — _is this Xitsonga? ☐ yes  ☐ no_
- `isisu` — _is this Xitsonga? ☐ yes  ☐ no_
- `khana` — _is this Xitsonga? ☐ yes  ☐ no_
- `khwiri` — _is this Xitsonga? ☐ yes  ☐ no_
- `legs` — _is this Xitsonga? ☐ yes  ☐ no_
- `lumbu` — _is this Xitsonga? ☐ yes  ☐ no_
- `maag` — _is this Xitsonga? ☐ yes  ☐ no_
- `maoto` — _is this Xitsonga? ☐ yes  ☐ no_
- `milenge` — _is this Xitsonga? ☐ yes  ☐ no_
- `milenzhe` — _is this Xitsonga? ☐ yes  ☐ no_
- `mokokotlo` — _is this Xitsonga? ☐ yes  ☐ no_
- `mokwatla` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpa` — _is this Xitsonga? ☐ yes  ☐ no_
- `muṱana` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngalati` — _is this Xitsonga? ☐ yes  ☐ no_
- `nkolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `rug` — _is this Xitsonga? ☐ yes  ☐ no_
- `sefahlego` — _is this Xitsonga? ☐ yes  ☐ no_
- `sefahleho` — _is this Xitsonga? ☐ yes  ☐ no_
- `sifuba` — _is this Xitsonga? ☐ yes  ☐ no_
- `sisu` — _is this Xitsonga? ☐ yes  ☐ no_
- `stomach` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this Xitsonga? ☐ yes  ☐ no_
- `umhlana` — _is this Xitsonga? ☐ yes  ☐ no_
- `umhlane` — _is this Xitsonga? ☐ yes  ☐ no_
- `xikandza` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 12. `neonatal_apnoea`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `baby not breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `baby stopped breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `infant not breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `newborn not breathing` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana o emisitse go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `nwana a a hefemuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `nwana lontsongo a nga hefemuli` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 13. `paediatric_unconscious`
*════════════════════════════════════════════════════════════════ | RED 10: NEONATAL APNOEA / PAEDIATRIC UNCONSCIOUS | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `baby unconscious` — _is this Xitsonga? ☐ yes  ☐ no_
- `child unconscious` — _is this Xitsonga? ☐ yes  ☐ no_
- `infant unconscious` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana ga a itse sepe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana o phutlhame` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana o wele fa fatshe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana o wetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana o wetse fatshe` — _is this Xitsonga? ☐ yes  ☐ no_
- `nwana a nga vuki` — _is this Xitsonga? ☐ yes  ☐ no_
- `toddler collapsed` — _is this Xitsonga? ☐ yes  ☐ no_
- `umntwana oqulekile` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 14. `meningococcal_rash`
*════════════════════════════════════════════════════════════════ | RED 11: MENINGOCOCCAL RASH — purple/non-blanching | Extended to all 11 languages (nso/tn/st/ts/ve/nr pending native-speaker review) | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `swiphanga leswi dzwihaleke`
- `swiphanga leswi nga hundzukiki`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `amabala amnyama` — _is this Xitsonga? ☐ yes  ☐ no_
- `amabala aphuzi` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood rash` — _is this Xitsonga? ☐ yes  ☐ no_
- `dark rash` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga le nyelele` — _is this Xitsonga? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a lefifi` — _is this Xitsonga? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a pherese` — _is this Xitsonga? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a a sa nyeleleng fa o le tobetsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `letlalo le le nang le matheba a madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `matheba a sa nyeleleng fa o tobetsa ka galase` — _is this Xitsonga? ☐ yes  ☐ no_
- `nie-verbleekende uitslag` — _is this Xitsonga? ☐ yes  ☐ no_
- `non-blanching rash` — _is this Xitsonga? ☐ yes  ☐ no_
- `purple rash` — _is this Xitsonga? ☐ yes  ☐ no_
- `rash pressing glass` — _is this Xitsonga? ☐ yes  ☐ no_
- `rash that doesn't fade` — _is this Xitsonga? ☐ yes  ☐ no_
- `rash won't disappear` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 15. `anaphylaxis`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 12: ANAPHYLAXIS — throat/face swelling after sting/food | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `nkulo wu pfulile`
- `xikandza xi pfulile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `allegi` — _is this Xitsonga? ☐ yes  ☐ no_
- `allegi ya dijo` — _is this Xitsonga? ☐ yes  ☐ no_
- `bee` — _is this Xitsonga? ☐ yes  ☐ no_
- `bye` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't swallow` — _is this Xitsonga? ☐ yes  ☐ no_
- `dijo` — _is this Xitsonga? ☐ yes  ☐ no_
- `e rurugile` — _is this Xitsonga? ☐ yes  ☐ no_
- `face swelling` — _is this Xitsonga? ☐ yes  ☐ no_
- `food allergy` — _is this Xitsonga? ☐ yes  ☐ no_
- `go loma` — _is this Xitsonga? ☐ yes  ☐ no_
- `go sa amogelege` — _is this Xitsonga? ☐ yes  ☐ no_
- `go sa amogelege ga dijo` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhaba` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhaba moento` — _is this Xitsonga? ☐ yes  ☐ no_
- `imbumba` — _is this Xitsonga? ☐ yes  ☐ no_
- `injection` — _is this Xitsonga? ☐ yes  ☐ no_
- `inspuiting` — _is this Xitsonga? ☐ yes  ☐ no_
- `kos` — _is this Xitsonga? ☐ yes  ☐ no_
- `lips swelling` — _is this Xitsonga? ☐ yes  ☐ no_
- `medication` — _is this Xitsonga? ☐ yes  ☐ no_
- `melemo` — _is this Xitsonga? ☐ yes  ☐ no_
- `melomo` — _is this Xitsonga? ☐ yes  ☐ no_
- `moento` — _is this Xitsonga? ☐ yes  ☐ no_
- `mokololo` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpfundla` — _is this Xitsonga? ☐ yes  ☐ no_
- `nko` — _is this Xitsonga? ☐ yes  ☐ no_
- `nonyane` — _is this Xitsonga? ☐ yes  ☐ no_
- `nose` — _is this Xitsonga? ☐ yes  ☐ no_
- `nosi` — _is this Xitsonga? ☐ yes  ☐ no_
- `notši` — _is this Xitsonga? ☐ yes  ☐ no_
- `nut` — _is this Xitsonga? ☐ yes  ☐ no_
- `nyosi` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a tswalega` — _is this Xitsonga? ☐ yes  ☐ no_
- `rurugile` — _is this Xitsonga? ☐ yes  ☐ no_
- `se rurugile` — _is this Xitsonga? ☐ yes  ☐ no_
- `sting` — _is this Xitsonga? ☐ yes  ☐ no_
- `swakudya` — _is this Xitsonga? ☐ yes  ☐ no_
- `throat closing` — _is this Xitsonga? ☐ yes  ☐ no_
- `throat swelling` — _is this Xitsonga? ☐ yes  ☐ no_
- `tswalega` — _is this Xitsonga? ☐ yes  ☐ no_
- `umjovo` — _is this Xitsonga? ☐ yes  ☐ no_
- `zwiliwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ṋovhela` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### RED 16. `traumatic_haemorrhage`
*════════════════════════════════════════════════════════════════ | ════════════════════════════════════════════════════════════════ | RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `blood everywhere` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood pouring` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't stop bleeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingati ayinqamuki` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingati iyampompoza` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a a elela` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a elela` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a elela thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a phatloga a tswa` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi ga a eme` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi go tletse gongwe le gongwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi ha a eme` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngati a yi yimi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngati yi humesa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o hlabilwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `o thuntswe e bile o dutla madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tlhabilwe mme o dutla madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `o ṱhavhiwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `shot and bleeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `spurting blood` — _is this Xitsonga? ☐ yes  ☐ no_
- `stabbed and bleeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `u tlhabiwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `udutshulwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `udutyulwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ugwaziwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ugwazwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `uhlabwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ukopha okunganqamuki` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyopha kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### ORANGE discriminators

#### ORANGE 1. `stroke_facial_droop`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `buso buyehla` — _is this Xitsonga? ☐ yes  ☐ no_
- `face drooping` — _is this Xitsonga? ☐ yes  ☐ no_
- `face dropped` — _is this Xitsonga? ☐ yes  ☐ no_
- `facial droop` — _is this Xitsonga? ☐ yes  ☐ no_
- `gesig hang` — _is this Xitsonga? ☐ yes  ☐ no_
- `gesig laat sak` — _is this Xitsonga? ☐ yes  ☐ no_
- `molomo o kgopame` — _is this Xitsonga? ☐ yes  ☐ no_
- `molomo o kgopiše` — _is this Xitsonga? ☐ yes  ☐ no_
- `molomo o kobegile` — _is this Xitsonga? ☐ yes  ☐ no_
- `mond skeef` — _is this Xitsonga? ☐ yes  ☐ no_
- `mouth twisted` — _is this Xitsonga? ☐ yes  ☐ no_
- `mulomo wo goba` — _is this Xitsonga? ☐ yes  ☐ no_
- `nomo wu gombile` — _is this Xitsonga? ☐ yes  ☐ no_
- `one side face` — _is this Xitsonga? ☐ yes  ☐ no_
- `skewe glimlag` — _is this Xitsonga? ☐ yes  ☐ no_
- `smile crooked` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshifhaṱuwo tsho thela` — _is this Xitsonga? ☐ yes  ☐ no_
- `uneven face` — _is this Xitsonga? ☐ yes  ☐ no_
- `xikandza xi rhelerile` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 2. `stroke_arm_weakness`
*RED 13: TRAUMATIC HAEMORRHAGE — uncontrollable bleeding | ════════════════════════════════════════════════════════════════ | ── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `voko ri hele matimba`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `arm dropping` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm gevoelloos` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm is swak` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm numb` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm wat sak` — _is this Xitsonga? ☐ yes  ☐ no_
- `arm weakness` — _is this Xitsonga? ☐ yes  ☐ no_
- `armswakheid` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't lift arm` — _is this Xitsonga? ☐ yes  ☐ no_
- `een arm is swak` — _is this Xitsonga? ☐ yes  ☐ no_
- `hand swak` — _is this Xitsonga? ☐ yes  ☐ no_
- `hand weak` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingalo ayinyakazi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingalo ibhudlana` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingalo ibuthathaka` — _is this Xitsonga? ☐ yes  ☐ no_
- `kan nie arm oplig` — _is this Xitsonga? ☐ yes  ☐ no_
- `left side weak` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo ga le tshikinyege` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsogo ga le šikinyege` — _is this Xitsonga? ☐ yes  ☐ no_
- `letsoho ha le tshikinyehe` — _is this Xitsonga? ☐ yes  ☐ no_
- `one arm weak` — _is this Xitsonga? ☐ yes  ☐ no_
- `right side weak` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshanḓa a tshi tshikinyei` — _is this Xitsonga? ☐ yes  ☐ no_
- `uhlangothi lubuthakathaka` — _is this Xitsonga? ☐ yes  ☐ no_
- `voko a ri tshikinyeki` — _is this Xitsonga? ☐ yes  ☐ no_
- `weakness one side` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 3. `stroke_speech`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `marito a a humeli kahle`
- `u vulavula hi ku tika`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `akukhulumeki` — _is this Xitsonga? ☐ yes  ☐ no_
- `amazwi akaphumi kakuhle` — _is this Xitsonga? ☐ yes  ☐ no_
- `amazwi awaphumi kahle` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't find words` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't speak properly` — _is this Xitsonga? ☐ yes  ☐ no_
- `confused talking` — _is this Xitsonga? ☐ yes  ☐ no_
- `emagama akaphumi kahle` — _is this Xitsonga? ☐ yes  ☐ no_
- `maipfi ha a ḓi bvi zwavhuḓi` — _is this Xitsonga? ☐ yes  ☐ no_
- `o bua ka tsela e e gakgamatsang` — _is this Xitsonga? ☐ yes  ☐ no_
- `o bua ka tsela e e sa tlwaelegang` — _is this Xitsonga? ☐ yes  ☐ no_
- `puo e a kgopama` — _is this Xitsonga? ☐ yes  ☐ no_
- `slurred speech` — _is this Xitsonga? ☐ yes  ☐ no_
- `speech slurred` — _is this Xitsonga? ☐ yes  ☐ no_
- `talking funny` — _is this Xitsonga? ☐ yes  ☐ no_
- `ukhuluma kanzima` — _is this Xitsonga? ☐ yes  ☐ no_
- `woorde kom nie uit` — _is this Xitsonga? ☐ yes  ☐ no_
- `words wrong` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 4. `thunderclap_headache`
*── ORANGE DISCRIMINATORS ── | STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `rixaka leri buhasaka ngopfu hi ku hatla`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `botlhoko jo bogolo thata jwa tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo sa tshwane le jo nkileng ka bo nna le jone` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso le ka bogale` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo simololang ka tshoganyetso mme bo le bogale` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo jo bo tlhaselang ka bonako jaaka ledimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `explosive headache` — _is this Xitsonga? ☐ yes  ☐ no_
- `headache like never before` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke botlhoko jo bogolo thata jwa tlhogo mo botshelong jwa me` — _is this Xitsonga? ☐ yes  ☐ no_
- `sudden severe headache` — _is this Xitsonga? ☐ yes  ☐ no_
- `thunderclap` — _is this Xitsonga? ☐ yes  ☐ no_
- `worst headache` — _is this Xitsonga? ☐ yes  ☐ no_
- `worst headache of my life` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 5. `post_ictal`
*STROKE — facial droop, arm weakness, speech (FAST signs) — all 11 languages | POST-ICTAL — had a fit, now confused/drowsy — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `a a pfuki`
- `u didimele`
- `u etlele`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `akavuki` — _is this Xitsonga? ☐ yes  ☐ no_
- `confused` — _is this Xitsonga? ☐ yes  ☐ no_
- `drowsy` — _is this Xitsonga? ☐ yes  ☐ no_
- `finished fitting` — _is this Xitsonga? ☐ yes  ☐ no_
- `fit` — _is this Xitsonga? ☐ yes  ☐ no_
- `fit e emisitse` — _is this Xitsonga? ☐ yes  ☐ no_
- `fit stopped` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tlhapisiwa tsotlhe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tsoge` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tsoge sentle` — _is this Xitsonga? ☐ yes  ☐ no_
- `go rotha go fedile` — _is this Xitsonga? ☐ yes  ☐ no_
- `had a seizure` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho ratha ho fedile` — _is this Xitsonga? ☐ yes  ☐ no_
- `just fitted` — _is this Xitsonga? ☐ yes  ☐ no_
- `just had a fit` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku rhurhumela ku hele` — _is this Xitsonga? ☐ yes  ☐ no_
- `not fully awake` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a otsela` — _is this Xitsonga? ☐ yes  ☐ no_
- `o dzhendzhele` — _is this Xitsonga? ☐ yes  ☐ no_
- `o eḓela` — _is this Xitsonga? ☐ yes  ☐ no_
- `o fetsa go nna le sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o kile a ratha` — _is this Xitsonga? ☐ yes  ☐ no_
- `o nnile le sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o otsela` — _is this Xitsonga? ☐ yes  ☐ no_
- `o qetile go rotha` — _is this Xitsonga? ☐ yes  ☐ no_
- `o robetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `o robetše` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tsogile morago ga sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `seizure stopped` — _is this Xitsonga? ☐ yes  ☐ no_
- `sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `sethoathoa se emisitse` — _is this Xitsonga? ☐ yes  ☐ no_
- `slaperig` — _is this Xitsonga? ☐ yes  ☐ no_
- `sleepy` — _is this Xitsonga? ☐ yes  ☐ no_
- `u dzhendzela ho fhela` — _is this Xitsonga? ☐ yes  ☐ no_
- `u rhurhumele` — _is this Xitsonga? ☐ yes  ☐ no_
- `undwazile` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyozela` — _is this Xitsonga? ☐ yes  ☐ no_
- `verward` — _is this Xitsonga? ☐ yes  ☐ no_
- `woke up after fit` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 6. `severe_asthma`
*SEVERE ASTHMA — inhaler not working, can't speak*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `xifuva xa moya`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a i shumi` — _is this Xitsonga? ☐ yes  ☐ no_
- `a i thusi` — _is this Xitsonga? ☐ yes  ☐ no_
- `a yi pfuni` — _is this Xitsonga? ☐ yes  ☐ no_
- `a yi tirhi` — _is this Xitsonga? ☐ yes  ☐ no_
- `asma` — _is this Xitsonga? ☐ yes  ☐ no_
- `asthma` — _is this Xitsonga? ☐ yes  ☐ no_
- `ayincedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ayisizi` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't speak` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't talk` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't walk` — _is this Xitsonga? ☐ yes  ☐ no_
- `exhausted` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e bereke` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e dire` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e thuse` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e thuše` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e šome` — _is this Xitsonga? ☐ yes  ☐ no_
- `getting worse` — _is this Xitsonga? ☐ yes  ☐ no_
- `go ntse go oketsega go maswe` — _is this Xitsonga? ☐ yes  ☐ no_
- `go ya go nna maswe le go feta` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha e sebetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha e thuse` — _is this Xitsonga? ☐ yes  ☐ no_
- `help nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `inhaler` — _is this Xitsonga? ☐ yes  ☐ no_
- `inheila` — _is this Xitsonga? ☐ yes  ☐ no_
- `iphampu` — _is this Xitsonga? ☐ yes  ☐ no_
- `kan nie praat` — _is this Xitsonga? ☐ yes  ☐ no_
- `lips blue` — _is this Xitsonga? ☐ yes  ☐ no_
- `melomo e fetogile tala putswa` — _is this Xitsonga? ☐ yes  ☐ no_
- `nebulaisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `nebuliser` — _is this Xitsonga? ☐ yes  ☐ no_
- `not helping` — _is this Xitsonga? ☐ yes  ☐ no_
- `not working` — _is this Xitsonga? ☐ yes  ☐ no_
- `o fetoga tala putswa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o lapile thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `pampu` — _is this Xitsonga? ☐ yes  ☐ no_
- `pompi` — _is this Xitsonga? ☐ yes  ☐ no_
- `pompo` — _is this Xitsonga? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `pump` — _is this Xitsonga? ☐ yes  ☐ no_
- `sedirisiwa sa go thusa go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `tala putswa` — _is this Xitsonga? ☐ yes  ☐ no_
- `turning blue` — _is this Xitsonga? ☐ yes  ☐ no_
- `werk nie` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 7. `pre_eclampsia`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `mahlo ya fifiala`
- `ndzi tikile`
- `rixaka`
- `xikandza xi pfulile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `amehlo ayafifiala` — _is this Xitsonga? ☐ yes  ☐ no_
- `amehlo ayafifiyela` — _is this Xitsonga? ☐ yes  ☐ no_
- `blurred vision` — _is this Xitsonga? ☐ yes  ☐ no_
- `face swollen` — _is this Xitsonga? ☐ yes  ☐ no_
- `feet very swollen` — _is this Xitsonga? ☐ yes  ☐ no_
- `gesig geswel` — _is this Xitsonga? ☐ yes  ☐ no_
- `hands swollen` — _is this Xitsonga? ☐ yes  ☐ no_
- `headache` — _is this Xitsonga? ☐ yes  ☐ no_
- `hlogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `hloho` — _is this Xitsonga? ☐ yes  ☐ no_
- `mahlo a fifala` — _is this Xitsonga? ☐ yes  ☐ no_
- `matlho a fifala` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndo vhifha` — _is this Xitsonga? ☐ yes  ☐ no_
- `no urine` — _is this Xitsonga? ☐ yes  ☐ no_
- `o imile` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain under ribs` — _is this Xitsonga? ☐ yes  ☐ no_
- `pregnant` — _is this Xitsonga? ☐ yes  ☐ no_
- `seeing stars` — _is this Xitsonga? ☐ yes  ☐ no_
- `swangari` — _is this Xitsonga? ☐ yes  ☐ no_
- `tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ṱhoho` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 8. `ectopic_pregnancy`
*SEVERE ASTHMA — inhaler not working, can't speak | PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a ka tswa a imile` — _is this Xitsonga? ☐ yes  ☐ no_
- `bogale` — _is this Xitsonga? ☐ yes  ☐ no_
- `bogolo thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko ba lehetla` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko bja legetla` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko bjo bogolo ka lehlakoreng le tee` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko bo boholo ka lehlakoreng le le leng` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko jo bogolo mo letlhakoreng le lengwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko jwa legetla` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogale` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa mojeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogale ka fa molemeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa mojeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka fa molemeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogolo thata ka letlhakore le lengwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `buhlungu lobukhulu ngelinye lihlangotsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `could be pregnant` — _is this Xitsonga? ☐ yes  ☐ no_
- `erge pyn aan een kant` — _is this Xitsonga? ☐ yes  ☐ no_
- `fhungo ḽi vhavha` — _is this Xitsonga? ☐ yes  ☐ no_
- `ihlombe libuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `iperiod ilate` — _is this Xitsonga? ☐ yes  ☐ no_
- `iqatha libuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `isikhathi asifikanga` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgwedi ga e fihla` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgwedi ga e tle` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgwedi ha e fihle` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku vava ka matimba hi tlhelo rin'we` — _is this Xitsonga? ☐ yes  ☐ no_
- `left side severe` — _is this Xitsonga? ☐ yes  ☐ no_
- `legare` — _is this Xitsonga? ☐ yes  ☐ no_
- `letlhakore` — _is this Xitsonga? ☐ yes  ☐ no_
- `lihlombe libuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `masiku a wu fiki` — _is this Xitsonga? ☐ yes  ☐ no_
- `missed period` — _is this Xitsonga? ☐ yes  ☐ no_
- `nako ga e fihla` — _is this Xitsonga? ☐ yes  ☐ no_
- `nako ga e tle` — _is this Xitsonga? ☐ yes  ☐ no_
- `nako ha e fihle` — _is this Xitsonga? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `nako ya kgwedi e diegile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngakwesobunxele ibuhlungu kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `nkarhi a wu fiki` — _is this Xitsonga? ☐ yes  ☐ no_
- `o fositse nako ya kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `period late` — _is this Xitsonga? ☐ yes  ☐ no_
- `pregnancy test positive` — _is this Xitsonga? ☐ yes  ☐ no_
- `right side severe` — _is this Xitsonga? ☐ yes  ☐ no_
- `rikatla ri vava` — _is this Xitsonga? ☐ yes  ☐ no_
- `severe pain one side` — _is this Xitsonga? ☐ yes  ☐ no_
- `sharp pain left side` — _is this Xitsonga? ☐ yes  ☐ no_
- `sharp pain right side` — _is this Xitsonga? ☐ yes  ☐ no_
- `shoulder pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `shoulder tip pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `sikhatsi asifikanga` — _is this Xitsonga? ☐ yes  ☐ no_
- `skerp pyn links` — _is this Xitsonga? ☐ yes  ☐ no_
- `skerp pyn regs` — _is this Xitsonga? ☐ yes  ☐ no_
- `skouer pyn` — _is this Xitsonga? ☐ yes  ☐ no_
- `teko ya boimana e bontsha gore o imile` — _is this Xitsonga? ☐ yes  ☐ no_
- `tip of shoulder` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshifhinga a tshi ḓi` — _is this Xitsonga? ☐ yes  ☐ no_
- `vhutungu vhuhulu tshipiḓa tshithihi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ṅwedzi a u ḓi` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 9. `febrile_seizure`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `fivha`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `baba` — _is this Xitsonga? ☐ yes  ☐ no_
- `baby` — _is this Xitsonga? ☐ yes  ☐ no_
- `banjwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `child` — _is this Xitsonga? ☐ yes  ☐ no_
- `convulsion` — _is this Xitsonga? ☐ yes  ☐ no_
- `dzhendzela` — _is this Xitsonga? ☐ yes  ☐ no_
- `fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `fit` — _is this Xitsonga? ☐ yes  ☐ no_
- `fitting` — _is this Xitsonga? ☐ yes  ☐ no_
- `go thothomela` — _is this Xitsonga? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this Xitsonga? ☐ yes  ☐ no_
- `hot` — _is this Xitsonga? ☐ yes  ☐ no_
- `infant` — _is this Xitsonga? ☐ yes  ☐ no_
- `kind` — _is this Xitsonga? ☐ yes  ☐ no_
- `kleuter` — _is this Xitsonga? ☐ yes  ☐ no_
- `mofikela` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this Xitsonga? ☐ yes  ☐ no_
- `nhanga` — _is this Xitsonga? ☐ yes  ☐ no_
- `nwana` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `phoholo` — _is this Xitsonga? ☐ yes  ☐ no_
- `rhurhumela` — _is this Xitsonga? ☐ yes  ☐ no_
- `rotha` — _is this Xitsonga? ☐ yes  ☐ no_
- `seizure` — _is this Xitsonga? ☐ yes  ☐ no_
- `sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `shaking` — _is this Xitsonga? ☐ yes  ☐ no_
- `temperature` — _is this Xitsonga? ☐ yes  ☐ no_
- `temperatuur` — _is this Xitsonga? ☐ yes  ☐ no_
- `themperetšha` — _is this Xitsonga? ☐ yes  ☐ no_
- `thothomela` — _is this Xitsonga? ☐ yes  ☐ no_
- `thuthumela` — _is this Xitsonga? ☐ yes  ☐ no_
- `toddler` — _is this Xitsonga? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Xitsonga? ☐ yes  ☐ no_
- `umntwana` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 10. `infant_sepsis_screen`
*PRE-ECLAMPSIA — pregnant + headache + swelling/vision (all 11 languages) | ECTOPIC PREGNANCY — missed period + severe one-sided pain | FEBRILE SEIZURE — child + fit + fever (all 11 languages)*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `fivha`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `1 month old` — _is this Xitsonga? ☐ yes  ☐ no_
- `1 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `10 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `11 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `12 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `13 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `14 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `15 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `16 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `17 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `18 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `19 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `2 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `2 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `20 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `21 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `22 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `23 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `3 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `3 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `4 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `4 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `5 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `5 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `6 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `6 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `7 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `7 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `8 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `8 week old` — _is this Xitsonga? ☐ yes  ☐ no_
- `9 month` — _is this Xitsonga? ☐ yes  ☐ no_
- `a nga dyi` — _is this Xitsonga? ☐ yes  ☐ no_
- `a nga fani na yena` — _is this Xitsonga? ☐ yes  ☐ no_
- `a nga nwi` — _is this Xitsonga? ☐ yes  ☐ no_
- `akafuni ubisi` — _is this Xitsonga? ☐ yes  ☐ no_
- `akasadli` — _is this Xitsonga? ☐ yes  ☐ no_
- `akasaphuzi` — _is this Xitsonga? ☐ yes  ☐ no_
- `akasayena` — _is this Xitsonga? ☐ yes  ☐ no_
- `akaziphilele` — _is this Xitsonga? ☐ yes  ☐ no_
- `altered behavior` — _is this Xitsonga? ☐ yes  ☐ no_
- `altered behaviour` — _is this Xitsonga? ☐ yes  ☐ no_
- `baba` — _is this Xitsonga? ☐ yes  ☐ no_
- `baby` — _is this Xitsonga? ☐ yes  ☐ no_
- `baie slaperig` — _is this Xitsonga? ☐ yes  ☐ no_
- `baie warm` — _is this Xitsonga? ☐ yes  ☐ no_
- `banjwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `burning up` — _is this Xitsonga? ☐ yes  ☐ no_
- `child` — _is this Xitsonga? ☐ yes  ☐ no_
- `convulsion` — _is this Xitsonga? ☐ yes  ☐ no_
- `couple of months` — _is this Xitsonga? ☐ yes  ☐ no_
- `drink nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `drowsy` — _is this Xitsonga? ☐ yes  ☐ no_
- `dzhendzela` — _is this Xitsonga? ☐ yes  ☐ no_
- `febrile_seizure` — _is this Xitsonga? ☐ yes  ☐ no_
- `fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `few months old` — _is this Xitsonga? ☐ yes  ☐ no_
- `few weeks old` — _is this Xitsonga? ☐ yes  ☐ no_
- `fisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `fit` — _is this Xitsonga? ☐ yes  ☐ no_
- `fitting` — _is this Xitsonga? ☐ yes  ☐ no_
- `floppy` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a je` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a nwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tshwane` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tshwane le ena` — _is this Xitsonga? ☐ yes  ☐ no_
- `go thothomela` — _is this Xitsonga? ☐ yes  ☐ no_
- `go thothomela ga mmele` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a je` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a noe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a nwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a tshwane le eena` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a ḽi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha fani na ene` — _is this Xitsonga? ☐ yes  ☐ no_
- `hard to wake` — _is this Xitsonga? ☐ yes  ☐ no_
- `high temperature` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho fisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `hot` — _is this Xitsonga? ☐ yes  ☐ no_
- `infant` — _is this Xitsonga? ☐ yes  ☐ no_
- `insana` — _is this Xitsonga? ☐ yes  ☐ no_
- `just lying there` — _is this Xitsonga? ☐ yes  ☐ no_
- `kind` — _is this Xitsonga? ☐ yes  ☐ no_
- `kleuter` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku hisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `lethargic` — _is this Xitsonga? ☐ yes  ☐ no_
- `limp` — _is this Xitsonga? ☐ yes  ☐ no_
- `mofikela` — _is this Xitsonga? ☐ yes  ☐ no_
- `my baby` — _is this Xitsonga? ☐ yes  ☐ no_
- `my infant` — _is this Xitsonga? ☐ yes  ☐ no_
- `my newborn` — _is this Xitsonga? ☐ yes  ☐ no_
- `newborn` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana yo monnye` — _is this Xitsonga? ☐ yes  ☐ no_
- `nhanga` — _is this Xitsonga? ☐ yes  ☐ no_
- `nie soos homself nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `nie wakker te kry nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `not breastfeeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `not drinking` — _is this Xitsonga? ☐ yes  ☐ no_
- `not eating` — _is this Xitsonga? ☐ yes  ☐ no_
- `not feeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `not herself` — _is this Xitsonga? ☐ yes  ☐ no_
- `not himself` — _is this Xitsonga? ☐ yes  ☐ no_
- `not latching` — _is this Xitsonga? ☐ yes  ☐ no_
- `not like her` — _is this Xitsonga? ☐ yes  ☐ no_
- `not like him` — _is this Xitsonga? ☐ yes  ☐ no_
- `not responsive` — _is this Xitsonga? ☐ yes  ☐ no_
- `nwana` — _is this Xitsonga? ☐ yes  ☐ no_
- `nwana lontsongo` — _is this Xitsonga? ☐ yes  ☐ no_
- `o robetse haholo` — _is this Xitsonga? ☐ yes  ☐ no_
- `o robetse thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `o robile thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tshwarwa ke sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `phoholo` — _is this Xitsonga? ☐ yes  ☐ no_
- `poor feeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `refusing food` — _is this Xitsonga? ☐ yes  ☐ no_
- `refusing milk` — _is this Xitsonga? ☐ yes  ☐ no_
- `rhurhumela` — _is this Xitsonga? ☐ yes  ☐ no_
- `rotha` — _is this Xitsonga? ☐ yes  ☐ no_
- `seizure` — _is this Xitsonga? ☐ yes  ☐ no_
- `sethoathoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `shaking` — _is this Xitsonga? ☐ yes  ☐ no_
- `slap` — _is this Xitsonga? ☐ yes  ☐ no_
- `sleepy` — _is this Xitsonga? ☐ yes  ☐ no_
- `temperature` — _is this Xitsonga? ☐ yes  ☐ no_
- `temperatuur` — _is this Xitsonga? ☐ yes  ☐ no_
- `themperetšha` — _is this Xitsonga? ☐ yes  ☐ no_
- `thothomela` — _is this Xitsonga? ☐ yes  ☐ no_
- `thuthumela` — _is this Xitsonga? ☐ yes  ☐ no_
- `toddler` — _is this Xitsonga? ☐ yes  ☐ no_
- `u etlela ngopfu` — _is this Xitsonga? ☐ yes  ☐ no_
- `u fhisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ufudumele` — _is this Xitsonga? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Xitsonga? ☐ yes  ☐ no_
- `umntwana` — _is this Xitsonga? ☐ yes  ☐ no_
- `under 1 year` — _is this Xitsonga? ☐ yes  ☐ no_
- `under a year` — _is this Xitsonga? ☐ yes  ☐ no_
- `under one year` — _is this Xitsonga? ☐ yes  ☐ no_
- `unresponsive` — _is this Xitsonga? ☐ yes  ☐ no_
- `ushisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyashisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `very hot` — _is this Xitsonga? ☐ yes  ☐ no_
- `very sleepy` — _is this Xitsonga? ☐ yes  ☐ no_
- `wil nie drink nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `wil nie eet nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `won't breastfeed` — _is this Xitsonga? ☐ yes  ☐ no_
- `won't drink` — _is this Xitsonga? ☐ yes  ☐ no_
- `won't eat` — _is this Xitsonga? ☐ yes  ☐ no_
- `won't latch` — _is this Xitsonga? ☐ yes  ☐ no_
- `wont eat` — _is this Xitsonga? ☐ yes  ☐ no_
- `xitsongwana` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 11. `acute_confusion_chronic`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `ngati ya le henhla`
- `u didimele`
- `vuvabyi bya swikiri`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a a tivi` — _is this Xitsonga? ☐ yes  ☐ no_
- `akati` — _is this Xitsonga? ☐ yes  ☐ no_
- `akazi` — _is this Xitsonga? ☐ yes  ☐ no_
- `arv` — _is this Xitsonga? ☐ yes  ☐ no_
- `confused` — _is this Xitsonga? ☐ yes  ☐ no_
- `deurmekaar` — _is this Xitsonga? ☐ yes  ☐ no_
- `diabetes` — _is this Xitsonga? ☐ yes  ☐ no_
- `diabetic` — _is this Xitsonga? ☐ yes  ☐ no_
- `doesn't know` — _is this Xitsonga? ☐ yes  ☐ no_
- `doesn't recognise` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a bue sentle` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a itse` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tlhaloganyege` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tsebe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a tsebe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a ḓivhi` — _is this Xitsonga? ☐ yes  ☐ no_
- `high blood` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv` — _is this Xitsonga? ☐ yes  ☐ no_
- `hypertension` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatelelo e e kwa godimo ya madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `maak nie sin` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this Xitsonga? ☐ yes  ☐ no_
- `not making sense` — _is this Xitsonga? ☐ yes  ☐ no_
- `o bua dilo tse di sa utlwaleng` — _is this Xitsonga? ☐ yes  ☐ no_
- `o bua tsotlhe tsotlhe` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tsenwe ke tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `sugar` — _is this Xitsonga? ☐ yes  ☐ no_
- `suiker` — _is this Xitsonga? ☐ yes  ☐ no_
- `sukiri` — _is this Xitsonga? ☐ yes  ☐ no_
- `talking nonsense` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 12. `head_trauma_loc`
*ACUTE CONFUSION + CHRONIC DISEASE — all 11 languages | HEAD TRAUMA + LOC — head injury + loss of consciousness or altered state. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `ku vaviseka ka nhloko`
- `ndzi bile enhlokweni`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a ndzi tsundzuki` — _is this Xitsonga? ☐ yes  ☐ no_
- `a thi humbuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `andikhumbuli` — _is this Xitsonga? ☐ yes  ☐ no_
- `blacked out` — _is this Xitsonga? ☐ yes  ☐ no_
- `bump to head` — _is this Xitsonga? ☐ yes  ☐ no_
- `confused after` — _is this Xitsonga? ☐ yes  ☐ no_
- `deurmekaar na val` — _is this Xitsonga? ☐ yes  ☐ no_
- `fell and hit head` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga ke gakologelwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga ke gopole` — _is this Xitsonga? ☐ yes  ☐ no_
- `geheueverlies` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha ke hopole` — _is this Xitsonga? ☐ yes  ☐ no_
- `head injury` — _is this Xitsonga? ☐ yes  ☐ no_
- `head trauma` — _is this Xitsonga? ☐ yes  ☐ no_
- `hit head` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke didimatse morago` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke didimetse ka morao` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke didimetse morago` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke idibetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke itshedisitse` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke ngwele ka hlogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke oele hlohong` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke ole ka tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `knocked head` — _is this Xitsonga? ☐ yes  ☐ no_
- `knocked out` — _is this Xitsonga? ☐ yes  ☐ no_
- `lost consciousness` — _is this Xitsonga? ☐ yes  ☐ no_
- `memory loss` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndidideke emva` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndiquleke` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndiwe phantsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndo wa nda vhaisa ṱhoho` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi didimele endzhaku` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi wile ndzi dumba nhloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi wisile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngashona` — _is this Xitsonga? ☐ yes  ☐ no_
- `passed out` — _is this Xitsonga? ☐ yes  ☐ no_
- `unconscious` — _is this Xitsonga? ☐ yes  ☐ no_
- `vomiting after` — _is this Xitsonga? ☐ yes  ☐ no_
- `woke up confused` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 13. `open_fracture`
*OPEN FRACTURE — bone visible through skin. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `rhambu ri huma eka ganga`
- `rhambu ri voniwa`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `been uit vel` — _is this Xitsonga? ☐ yes  ☐ no_
- `bone sticking out` — _is this Xitsonga? ☐ yes  ☐ no_
- `bone through skin` — _is this Xitsonga? ☐ yes  ☐ no_
- `bone visible` — _is this Xitsonga? ☐ yes  ☐ no_
- `can see bone` — _is this Xitsonga? ☐ yes  ☐ no_
- `ithambo liphukile liphumele ngaphandle` — _is this Xitsonga? ☐ yes  ☐ no_
- `lerapo le robegile le tswa` — _is this Xitsonga? ☐ yes  ☐ no_
- `lerapo le robegile le tšwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `lesapo le robehile le tsoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `open fracture` — _is this Xitsonga? ☐ yes  ☐ no_
- `rhambu ri tshovekile ri huma` — _is this Xitsonga? ☐ yes  ☐ no_
- `ḽitambo ḽo ṱhukhukana ḽi bva` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 14. `high_energy_mechanism`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `ndzi bile hi movha`
- `ndzi wile ehenhla`
- `xihoko xa movha`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `car accident` — _is this Xitsonga? ☐ yes  ☐ no_
- `crush injury` — _is this Xitsonga? ☐ yes  ☐ no_
- `fell from height` — _is this Xitsonga? ☐ yes  ☐ no_
- `fell from ladder` — _is this Xitsonga? ☐ yes  ☐ no_
- `fell from roof` — _is this Xitsonga? ☐ yes  ☐ no_
- `geval van leer` — _is this Xitsonga? ☐ yes  ☐ no_
- `hit by car` — _is this Xitsonga? ☐ yes  ☐ no_
- `industrial accident` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke oele le lereng` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke wele le lereng` — _is this Xitsonga? ☐ yes  ☐ no_
- `motor accident` — _is this Xitsonga? ☐ yes  ☐ no_
- `motorcycle accident` — _is this Xitsonga? ☐ yes  ☐ no_
- `mvc` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndiwe eluphahleni` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndiwile phezulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndo wa kha lere` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi wile eka lere` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwele le lereng` — _is this Xitsonga? ☐ yes  ☐ no_
- `raakgery deur motor` — _is this Xitsonga? ☐ yes  ☐ no_
- `struck by vehicle` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 15. `burns_significant`
*OPEN FRACTURE — bone visible through skin. All 11 languages. | HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `u hisiwe`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `airways` — _is this Xitsonga? ☐ yes  ☐ no_
- `around neck` — _is this Xitsonga? ☐ yes  ☐ no_
- `asemweë` — _is this Xitsonga? ☐ yes  ☐ no_
- `breathing problems` — _is this Xitsonga? ☐ yes  ☐ no_
- `burn` — _is this Xitsonga? ☐ yes  ☐ no_
- `burned` — _is this Xitsonga? ☐ yes  ☐ no_
- `burnt` — _is this Xitsonga? ☐ yes  ☐ no_
- `buso` — _is this Xitsonga? ☐ yes  ☐ no_
- `diatla le matsogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `emqaleni` — _is this Xitsonga? ☐ yes  ☐ no_
- `entanyeni` — _is this Xitsonga? ☐ yes  ☐ no_
- `face` — _is this Xitsonga? ☐ yes  ☐ no_
- `gesig` — _is this Xitsonga? ☐ yes  ☐ no_
- `go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `groot area` — _is this Xitsonga? ☐ yes  ☐ no_
- `hande en arms` — _is this Xitsonga? ☐ yes  ☐ no_
- `hands and arms` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `indawo enkhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `indawo enkulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `indzawo lenkhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `inhaled smoke` — _is this Xitsonga? ☐ yes  ☐ no_
- `intamo` — _is this Xitsonga? ☐ yes  ☐ no_
- `intsamo` — _is this Xitsonga? ☐ yes  ☐ no_
- `intsizi` — _is this Xitsonga? ☐ yes  ☐ no_
- `izandla nezingalo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku hefemula` — _is this Xitsonga? ☐ yes  ☐ no_
- `large area` — _is this Xitsonga? ☐ yes  ☐ no_
- `matsoho le maoto` — _is this Xitsonga? ☐ yes  ☐ no_
- `mavoko ni marhambu` — _is this Xitsonga? ☐ yes  ☐ no_
- `molaleng` — _is this Xitsonga? ☐ yes  ☐ no_
- `mosi o hemetsweng` — _is this Xitsonga? ☐ yes  ☐ no_
- `musi o hemelwago` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndhawu yo kula` — _is this Xitsonga? ☐ yes  ☐ no_
- `nkolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `o chesitse` — _is this Xitsonga? ☐ yes  ☐ no_
- `o fisitswe` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tshiwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tsholetsoe` — _is this Xitsonga? ☐ yes  ☐ no_
- `om nek` — _is this Xitsonga? ☐ yes  ☐ no_
- `rook ingeasem` — _is this Xitsonga? ☐ yes  ☐ no_
- `scald` — _is this Xitsonga? ☐ yes  ☐ no_
- `sebaka se segolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `sebaka se seholo` — _is this Xitsonga? ☐ yes  ☐ no_
- `sefahlego` — _is this Xitsonga? ☐ yes  ☐ no_
- `sefahleho` — _is this Xitsonga? ☐ yes  ☐ no_
- `shango ḽihulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `singed eyebrows` — _is this Xitsonga? ☐ yes  ☐ no_
- `singed hair` — _is this Xitsonga? ☐ yes  ☐ no_
- `tandla nemigalo` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshifhaṱuwo` — _is this Xitsonga? ☐ yes  ☐ no_
- `u femba` — _is this Xitsonga? ☐ yes  ☐ no_
- `u hisile` — _is this Xitsonga? ☐ yes  ☐ no_
- `u pfile` — _is this Xitsonga? ☐ yes  ☐ no_
- `umqala` — _is this Xitsonga? ☐ yes  ☐ no_
- `ushisiwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ushiswe` — _is this Xitsonga? ☐ yes  ☐ no_
- `utshile` — _is this Xitsonga? ☐ yes  ☐ no_
- `utshisiwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `vhunga ho funzeleaho` — _is this Xitsonga? ☐ yes  ☐ no_
- `xikandza` — _is this Xitsonga? ☐ yes  ☐ no_
- `zwanda na zwanḓa` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 16. `burns`
*HIGH-ENERGY MECHANISM — car / fall from height / crush. All 11 languages. | BURNS SIGNIFICANT — burn + high-risk anatomy (face, airway, hands, large area). All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `amanzi ashisayo` — _is this Xitsonga? ☐ yes  ☐ no_
- `isikhumba` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 17. `acute_abdomen`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `khwiri ri tiyile ku fana ni pulanga`
- `ku vava ka khwiri ku tele`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `buhlungu besisu lobukhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't touch stomach` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha ke tshwarelle mpa` — _is this Xitsonga? ☐ yes  ☐ no_
- `iintlungu zesisu ezinkulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `kan nie maag raak nie` — _is this Xitsonga? ☐ yes  ☐ no_
- `khwiri a ri kombetelekiki` — _is this Xitsonga? ☐ yes  ☐ no_
- `lumbu ḽa sa fara` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpa e sa swarega` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpa ga e swarege` — _is this Xitsonga? ☐ yes  ☐ no_
- `rigid stomach` — _is this Xitsonga? ☐ yes  ☐ no_
- `severe stomach pain can't move` — _is this Xitsonga? ☐ yes  ☐ no_
- `stomach hard as a board` — _is this Xitsonga? ☐ yes  ☐ no_
- `worst stomach pain ever` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 18. `psychiatric_emergency_imminent`
*ACUTE ABDOMEN — rigid/board-like abdomen, severe immovable pain. All 11 languages | (nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `ndzi swarile dziphilisi to tala`
- `ndzi tidlaya sweswi`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `about to hurt myself` — _is this Xitsonga? ☐ yes  ☐ no_
- `gesny aan polse` — _is this Xitsonga? ☐ yes  ☐ no_
- `going to kill myself` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke ikgokile ka thapo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke ipofile ka thapo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke ithekeletse ka thapo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndiyazibulala ngoku` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndizikhokele intambo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndizisikile ezihlakaleni` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndo ḓirwa nga thambo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi tipfalile hi tintambo` — _is this Xitsonga? ☐ yes  ☐ no_
- `overdosed` — _is this Xitsonga? ☐ yes  ☐ no_
- `swallowed pills on purpose` — _is this Xitsonga? ☐ yes  ☐ no_
- `taking tablets now` — _is this Xitsonga? ☐ yes  ☐ no_
- `te veel pille gedrink` — _is this Xitsonga? ☐ yes  ☐ no_
- `took pills to die` — _is this Xitsonga? ☐ yes  ☐ no_
- `tried to cut wrists` — _is this Xitsonga? ☐ yes  ☐ no_
- `tried to hang` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 19. `severe_hypoglycaemia`
*(nso/tn/st/ts/ss/ve/nr pending native-speaker review). | PSYCHIATRIC EMERGENCY IMMINENT — active self-harm risk or attempt in progress. All 11 languages. | SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `a a pfuki`
- `swikiri swi le hansi ngopfu`
- `u a rhurhumela`
- `u didimele`
- `u wisile`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `aggressief` — _is this Xitsonga? ☐ yes  ☐ no_
- `aggressive` — _is this Xitsonga? ☐ yes  ☐ no_
- `akaphenduli` — _is this Xitsonga? ☐ yes  ☐ no_
- `akavuki` — _is this Xitsonga? ☐ yes  ☐ no_
- `bjalwa bja dipilisi bo wele` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood sugar crashed` — _is this Xitsonga? ☐ yes  ☐ no_
- `collapsed` — _is this Xitsonga? ☐ yes  ☐ no_
- `confused` — _is this Xitsonga? ☐ yes  ☐ no_
- `deurmekaar` — _is this Xitsonga? ☐ yes  ☐ no_
- `fitting` — _is this Xitsonga? ☐ yes  ☐ no_
- `glucose very low` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha a arabe` — _is this Xitsonga? ☐ yes  ☐ no_
- `hypo` — _is this Xitsonga? ☐ yes  ☐ no_
- `iglucose iphansi` — _is this Xitsonga? ☐ yes  ☐ no_
- `not responding` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a ratha` — _is this Xitsonga? ☐ yes  ☐ no_
- `o wa` — _is this Xitsonga? ☐ yes  ☐ no_
- `o wele` — _is this Xitsonga? ☐ yes  ☐ no_
- `sugar dropped` — _is this Xitsonga? ☐ yes  ☐ no_
- `sugar very low` — _is this Xitsonga? ☐ yes  ☐ no_
- `suiker het geval` — _is this Xitsonga? ☐ yes  ☐ no_
- `swigiri tsho wela` — _is this Xitsonga? ☐ yes  ☐ no_
- `swikiri swi wile` — _is this Xitsonga? ☐ yes  ☐ no_
- `tsoekere e wele` — _is this Xitsonga? ☐ yes  ☐ no_
- `u wile` — _is this Xitsonga? ☐ yes  ☐ no_
- `unconscious` — _is this Xitsonga? ☐ yes  ☐ no_
- `uquleke` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyabanjwa` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 20. `preterm_labour`
*SEVERE HYPOGLYCAEMIA — low sugar + altered consciousness/behaviour. All 11 languages.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `28 weeks` — _is this Xitsonga? ☐ yes  ☐ no_
- `30 weeks` — _is this Xitsonga? ☐ yes  ☐ no_
- `32 weeks` — _is this Xitsonga? ☐ yes  ☐ no_
- `34 weeks` — _is this Xitsonga? ☐ yes  ☐ no_
- `5 months` — _is this Xitsonga? ☐ yes  ☐ no_
- `6 months` — _is this Xitsonga? ☐ yes  ☐ no_
- `7 months` — _is this Xitsonga? ☐ yes  ☐ no_
- `bag of water broke` — _is this Xitsonga? ☐ yes  ☐ no_
- `boimana` — _is this Xitsonga? ☐ yes  ☐ no_
- `contractions` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this Xitsonga? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this Xitsonga? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this Xitsonga? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this Xitsonga? ☐ yes  ☐ no_
- `ditlhabi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ditlhabi tsa go belega` — _is this Xitsonga? ☐ yes  ☐ no_
- `early` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this Xitsonga? ☐ yes  ☐ no_
- `go belega` — _is this Xitsonga? ☐ yes  ☐ no_
- `labour` — _is this Xitsonga? ☐ yes  ☐ no_
- `maande` — _is this Xitsonga? ☐ yes  ☐ no_
- `metsi a popelo` — _is this Xitsonga? ☐ yes  ☐ no_
- `metsi a popelo a phatlogile` — _is this Xitsonga? ☐ yes  ☐ no_
- `not due yet` — _is this Xitsonga? ☐ yes  ☐ no_
- `o imile` — _is this Xitsonga? ☐ yes  ☐ no_
- `pains` — _is this Xitsonga? ☐ yes  ☐ no_
- `pele ga nako` — _is this Xitsonga? ☐ yes  ☐ no_
- `phatlogile` — _is this Xitsonga? ☐ yes  ☐ no_
- `pregnant` — _is this Xitsonga? ☐ yes  ☐ no_
- `premature` — _is this Xitsonga? ☐ yes  ☐ no_
- `swangari` — _is this Xitsonga? ☐ yes  ☐ no_
- `too early` — _is this Xitsonga? ☐ yes  ☐ no_
- `waters broke` — _is this Xitsonga? ☐ yes  ☐ no_
- `weke` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 21. `hiv_meningism`
*hiv_meningism*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `fivha`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `ache` — _is this Xitsonga? ☐ yes  ☐ no_
- `arv` — _is this Xitsonga? ☐ yes  ☐ no_
- `asma` — _is this Xitsonga? ☐ yes  ☐ no_
- `asthma` — _is this Xitsonga? ☐ yes  ☐ no_
- `asthma_inhaler_failure` — _is this Xitsonga? ☐ yes  ☐ no_
- `ayisizi` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't bend` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't move` — _is this Xitsonga? ☐ yes  ☐ no_
- `cannot bend` — _is this Xitsonga? ☐ yes  ☐ no_
- `cant bend` — _is this Xitsonga? ☐ yes  ☐ no_
- `cant move` — _is this Xitsonga? ☐ yes  ☐ no_
- `eqinileyo` — _is this Xitsonga? ☐ yes  ☐ no_
- `fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `fisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e dire` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e thuse` — _is this Xitsonga? ☐ yes  ☐ no_
- `go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `high temperature` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv disease` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv positive` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv+` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho fisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `hot` — _is this Xitsonga? ☐ yes  ☐ no_
- `hurts` — _is this Xitsonga? ☐ yes  ☐ no_
- `ibuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `icinile` — _is this Xitsonga? ☐ yes  ☐ no_
- `inhaler` — _is this Xitsonga? ☐ yes  ☐ no_
- `intamo` — _is this Xitsonga? ☐ yes  ☐ no_
- `intsamo` — _is this Xitsonga? ☐ yes  ☐ no_
- `isifo sofuba` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this Xitsonga? ☐ yes  ☐ no_
- `molala` — _is this Xitsonga? ☐ yes  ☐ no_
- `mulala` — _is this Xitsonga? ☐ yes  ☐ no_
- `neck` — _is this Xitsonga? ☐ yes  ☐ no_
- `need more puffs` — _is this Xitsonga? ☐ yes  ☐ no_
- `nek` — _is this Xitsonga? ☐ yes  ☐ no_
- `nkulo` — _is this Xitsonga? ☐ yes  ☐ no_
- `not helping` — _is this Xitsonga? ☐ yes  ☐ no_
- `not working` — _is this Xitsonga? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `omela` — _is this Xitsonga? ☐ yes  ☐ no_
- `on arvs` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `pompo` — _is this Xitsonga? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `pump` — _is this Xitsonga? ☐ yes  ☐ no_
- `qinile` — _is this Xitsonga? ☐ yes  ☐ no_
- `rigid` — _is this Xitsonga? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `shivering` — _is this Xitsonga? ☐ yes  ☐ no_
- `sore` — _is this Xitsonga? ☐ yes  ☐ no_
- `stiff` — _is this Xitsonga? ☐ yes  ☐ no_
- `still struggling` — _is this Xitsonga? ☐ yes  ☐ no_
- `styf` — _is this Xitsonga? ☐ yes  ☐ no_
- `stywe` — _is this Xitsonga? ☐ yes  ☐ no_
- `taking arvs` — _is this Xitsonga? ☐ yes  ☐ no_
- `temperature` — _is this Xitsonga? ☐ yes  ☐ no_
- `thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `tiyile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ufuba` — _is this Xitsonga? ☐ yes  ☐ no_
- `ufudumele` — _is this Xitsonga? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Xitsonga? ☐ yes  ☐ no_
- `umnqala` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyashisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `vava` — _is this Xitsonga? ☐ yes  ☐ no_
- `vuvha` — _is this Xitsonga? ☐ yes  ☐ no_
- `womelele` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### ORANGE 22. `acute_confusion_dm`
*Afrikaans-only inline check to cover Zulu via DCSL arrays | (review batch 2026-04-29). Closes a coverage gap for the | largest SA language group on a clinically-important rule | (DKA/severe hypoglycaemia presents with confusion).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `deurmekaar` — _is this Xitsonga? ☐ yes  ☐ no_
- `diabete` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga go tlhaloganyege` — _is this Xitsonga? ☐ yes  ☐ no_
- `isifo seswekile` — _is this Xitsonga? ☐ yes  ☐ no_
- `maak nie sin` — _is this Xitsonga? ☐ yes  ☐ no_
- `suiker` — _is this Xitsonga? ☐ yes  ☐ no_
- `sukiri` — _is this Xitsonga? ☐ yes  ☐ no_
- `tlhakatlhakane` — _is this Xitsonga? ☐ yes  ☐ no_
- `tswakane` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

### YELLOW discriminators

#### YELLOW 1. `severe_pain`
*── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `bohloko bo bogolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko bo boholo` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko bo montsi thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bo masisi (10/10` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bo masisi thata go feta tsotlhe` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bo sa itshokelweng` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jo bogolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko ke 10` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko ke 8` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko ke 9` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't stand the pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `excruciating` — _is this Xitsonga? ☐ yes  ☐ no_
- `go goa ka ntlha ya botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke a lela ka botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke a lla ka bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndi na vuvha vuhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi le vuhlungwini lebyi kuleke` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain 10/10` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain 8/10` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain 9/10` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain is 10` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain is 8` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain is 9` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain too much` — _is this Xitsonga? ☐ yes  ☐ no_
- `screaming in pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `seer baie` — _is this Xitsonga? ☐ yes  ☐ no_
- `severe pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `unbearable pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `vuhlungu lebyi kuleke` — _is this Xitsonga? ☐ yes  ☐ no_
- `vuvha vuhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `worst pain` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 2. `suicidal_ideation`
*nr | ── YELLOW DISCRIMINATORS ──*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `a ndzi sa lavi ku hanya` — _is this Xitsonga? ☐ yes  ☐ no_
- `a thi tsha ṱoḓa u tshila` — _is this Xitsonga? ☐ yes  ☐ no_
- `andisafuni kuphila` — _is this Xitsonga? ☐ yes  ☐ no_
- `cutting myself` — _is this Xitsonga? ☐ yes  ☐ no_
- `don't want to live` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga ke sa batle go tshela` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga ke sa nyake go phela` — _is this Xitsonga? ☐ yes  ☐ no_
- `go akanya ka go fedisa botshelo` — _is this Xitsonga? ☐ yes  ☐ no_
- `go intsha kotsi ka boomo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ha ke sa batle ho phela` — _is this Xitsonga? ☐ yes  ☐ no_
- `hurting myself` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke batla go ipolaya` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke batla ho ipolaya` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke nyaka go ipolaya` — _is this Xitsonga? ☐ yes  ☐ no_
- `na le megopolo ya go ipolaya` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndi ṱoḓa u ḓivhulaha` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi lava ku tirhisa` — _is this Xitsonga? ☐ yes  ☐ no_
- `no reason to live` — _is this Xitsonga? ☐ yes  ☐ no_
- `self-harm` — _is this Xitsonga? ☐ yes  ☐ no_
- `suicidal` — _is this Xitsonga? ☐ yes  ☐ no_
- `suicide` — _is this Xitsonga? ☐ yes  ☐ no_
- `thinking of ending` — _is this Xitsonga? ☐ yes  ☐ no_
- `want to kill myself` — _is this Xitsonga? ☐ yes  ☐ no_
- `wil doodgaan` — _is this Xitsonga? ☐ yes  ☐ no_
- `wil nie meer leef` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 3. `abuse_assault`
*nr | GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `abused` — _is this Xitsonga? ☐ yes  ☐ no_
- `assaulted` — _is this Xitsonga? ☐ yes  ☐ no_
- `attacked` — _is this Xitsonga? ☐ yes  ☐ no_
- `beaten badly` — _is this Xitsonga? ☐ yes  ☐ no_
- `child abuse` — _is this Xitsonga? ☐ yes  ☐ no_
- `domestic violence` — _is this Xitsonga? ☐ yes  ☐ no_
- `go itewa thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `go sotliwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhaselwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tshwarwa makgwakgwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `huishoudelike geweld` — _is this Xitsonga? ☐ yes  ☐ no_
- `husband beat me` — _is this Xitsonga? ☐ yes  ☐ no_
- `indoda yam indibethile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke betilwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke otlilwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke otloilwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `monna wa ka o ntlhabile` — _is this Xitsonga? ☐ yes  ☐ no_
- `monna wa ka o ntshabile` — _is this Xitsonga? ☐ yes  ☐ no_
- `monna wa me o ntlhabile` — _is this Xitsonga? ☐ yes  ☐ no_
- `munna wanga o nrwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndo rwiwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi bitiwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `nuna wa mina u ndzi bile` — _is this Xitsonga? ☐ yes  ☐ no_
- `o nteetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `partner hit me` — _is this Xitsonga? ☐ yes  ☐ no_
- `tirisodikgoka` — _is this Xitsonga? ☐ yes  ☐ no_
- `tirisodikgoka mo lelapeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshotlego ya bana` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 4. `pyelonephritis`
*GBV / Sexual assault — ORANGE (not YELLOW) for rape/sexual assault | Rape survivors need immediate care: PEP within 72h, emergency contraception within 120h | GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `back pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko emhamben` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko mmogong` — _is this Xitsonga? ☐ yes  ☐ no_
- `bohloko mokokotlong` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa diphio` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa mokwatla` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko mo lethekeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `burning urine` — _is this Xitsonga? ☐ yes  ☐ no_
- `chills` — _is this Xitsonga? ☐ yes  ☐ no_
- `diphio` — _is this Xitsonga? ☐ yes  ☐ no_
- `fa o rota` — _is this Xitsonga? ☐ yes  ☐ no_
- `feberu` — _is this Xitsonga? ☐ yes  ☐ no_
- `fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `frequency` — _is this Xitsonga? ☐ yes  ☐ no_
- `go rota kgapetsakgapetsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `go sha fa ke ntsha metsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `go sha ge ke ntsha meetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `go swela ge ke ntsha meetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `go thothomela` — _is this Xitsonga? ☐ yes  ☐ no_
- `go thothomela ka ntlha ya feberu` — _is this Xitsonga? ☐ yes  ☐ no_
- `go thothomela thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tshwara go bohloko loko ke ntsha meetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tsidifala` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho bohloko ha ke ntsha metsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho sha ha ke ntsha metsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kidney pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku bohloko loko ndzi sila` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku hisa loko ndzi sila manzi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kusha emchamweni` — _is this Xitsonga? ☐ yes  ☐ no_
- `kushisa emchamweni` — _is this Xitsonga? ☐ yes  ☐ no_
- `kushisa umchamo` — _is this Xitsonga? ☐ yes  ☐ no_
- `letheka` — _is this Xitsonga? ☐ yes  ☐ no_
- `loin pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `mahlakore a mokwatla` — _is this Xitsonga? ☐ yes  ☐ no_
- `mela ya moroto` — _is this Xitsonga? ☐ yes  ☐ no_
- `mhamba wo bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `mmogo o bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `mokokotlo o bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `mokwatla` — _is this Xitsonga? ☐ yes  ☐ no_
- `moroto` — _is this Xitsonga? ☐ yes  ☐ no_
- `moroto o o tukang` — _is this Xitsonga? ☐ yes  ☐ no_
- `murahu u rema` — _is this Xitsonga? ☐ yes  ☐ no_
- `muvhili wa murahu u rema` — _is this Xitsonga? ☐ yes  ☐ no_
- `o o botlhoko fa o rota` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tukang` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain when urinating` — _is this Xitsonga? ☐ yes  ☐ no_
- `pyn as ek urineer` — _is this Xitsonga? ☐ yes  ☐ no_
- `rigors` — _is this Xitsonga? ☐ yes  ☐ no_
- `rug is seer` — _is this Xitsonga? ☐ yes  ☐ no_
- `rugpyn` — _is this Xitsonga? ☐ yes  ☐ no_
- `shivering` — _is this Xitsonga? ☐ yes  ☐ no_
- `temperature` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshwaetso ya mela ya moroto` — _is this Xitsonga? ☐ yes  ☐ no_
- `u fhisa hune ndi a china` — _is this Xitsonga? ☐ yes  ☐ no_
- `u rema hune ndi a china` — _is this Xitsonga? ☐ yes  ☐ no_
- `urinary tract` — _is this Xitsonga? ☐ yes  ☐ no_
- `uti` — _is this Xitsonga? ☐ yes  ☐ no_
- `vomiting` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 5. `dka`
*GBV / domestic violence / assault — YELLOW*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `vuvabyi bya swikiri`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `abdominal pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood sugar very high` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa mala` — _is this Xitsonga? ☐ yes  ☐ no_
- `braak` — _is this Xitsonga? ☐ yes  ☐ no_
- `breath smells sweet` — _is this Xitsonga? ☐ yes  ☐ no_
- `diabeet` — _is this Xitsonga? ☐ yes  ☐ no_
- `diabetes` — _is this Xitsonga? ☐ yes  ☐ no_
- `diabetic` — _is this Xitsonga? ☐ yes  ☐ no_
- `fruity breath` — _is this Xitsonga? ☐ yes  ☐ no_
- `glucose` — _is this Xitsonga? ☐ yes  ☐ no_
- `glucose 20` — _is this Xitsonga? ☐ yes  ☐ no_
- `glucose e feta 15` — _is this Xitsonga? ☐ yes  ☐ no_
- `glucose e feta 20` — _is this Xitsonga? ☐ yes  ☐ no_
- `glucose over 15` — _is this Xitsonga? ☐ yes  ☐ no_
- `glucose over 20` — _is this Xitsonga? ☐ yes  ☐ no_
- `go hlanza` — _is this Xitsonga? ☐ yes  ☐ no_
- `go ikutlwa o batla go tlhatsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `go nyorilwe ke pelo` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhaka` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `gooi op` — _is this Xitsonga? ☐ yes  ☐ no_
- `ho hlantsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `insulin` — _is this Xitsonga? ☐ yes  ☐ no_
- `ishugela` — _is this Xitsonga? ☐ yes  ☐ no_
- `ishugela liphakeme kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `ishukela` — _is this Xitsonga? ☐ yes  ☐ no_
- `ishukela liphezulu kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `isisu sibuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke a hlantsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke a hlanza` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke a tlhaka` — _is this Xitsonga? ☐ yes  ☐ no_
- `ketone breath` — _is this Xitsonga? ☐ yes  ☐ no_
- `ku hlanza` — _is this Xitsonga? ☐ yes  ☐ no_
- `kuhlanza` — _is this Xitsonga? ☐ yes  ☐ no_
- `maag pyn` — _is this Xitsonga? ☐ yes  ☐ no_
- `mowa o o nang le diketone` — _is this Xitsonga? ☐ yes  ☐ no_
- `mowa o o nkgang jaaka maungo` — _is this Xitsonga? ☐ yes  ☐ no_
- `mowa o o tswang mo molomong o nkgang monate` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpa e bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpa e botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `nauseous` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndi a sema` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndinesifo seswekile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndiyahlanza` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzayo wu vava` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndzi a hlanza` — _is this Xitsonga? ☐ yes  ☐ no_
- `o dirisa insulin` — _is this Xitsonga? ☐ yes  ☐ no_
- `on insulin` — _is this Xitsonga? ☐ yes  ☐ no_
- `sisu sibuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `stomach pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `sugar` — _is this Xitsonga? ☐ yes  ☐ no_
- `sugar very high` — _is this Xitsonga? ☐ yes  ☐ no_
- `suiker` — _is this Xitsonga? ☐ yes  ☐ no_
- `suiker baie hoog` — _is this Xitsonga? ☐ yes  ☐ no_
- `suikersiekte` — _is this Xitsonga? ☐ yes  ☐ no_
- `sukiri` — _is this Xitsonga? ☐ yes  ☐ no_
- `sukiri e kwa godimo thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `sukiri mo mading e kwa godimo thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `swigiri` — _is this Xitsonga? ☐ yes  ☐ no_
- `swigiri dzi ḓiimisela ngopfu` — _is this Xitsonga? ☐ yes  ☐ no_
- `swikiri` — _is this Xitsonga? ☐ yes  ☐ no_
- `swikiri e phagameng kudu` — _is this Xitsonga? ☐ yes  ☐ no_
- `swikiri yi tlakukile ngopfu` — _is this Xitsonga? ☐ yes  ☐ no_
- `thumbu i na vuvha` — _is this Xitsonga? ☐ yes  ☐ no_
- `tsoekere` — _is this Xitsonga? ☐ yes  ☐ no_
- `tsoekere e phagameng haholo` — _is this Xitsonga? ☐ yes  ☐ no_
- `tswekere` — _is this Xitsonga? ☐ yes  ☐ no_
- `tswekere e kwa godimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `u sema` — _is this Xitsonga? ☐ yes  ☐ no_
- `vomiting` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 6. `tb_triad`
*tb_triad*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `bosigo` — _is this Xitsonga? ☐ yes  ☐ no_
- `cough` — _is this Xitsonga? ☐ yes  ☐ no_
- `fufulelwa bosigo` — _is this Xitsonga? ☐ yes  ☐ no_
- `gewig verloor` — _is this Xitsonga? ☐ yes  ☐ no_
- `go fufulelwa bosigo` — _is this Xitsonga? ☐ yes  ☐ no_
- `go khohlela` — _is this Xitsonga? ☐ yes  ☐ no_
- `go latlhegelwa ke boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `gohlola` — _is this Xitsonga? ☐ yes  ☐ no_
- `hehela` — _is this Xitsonga? ☐ yes  ☐ no_
- `hoes` — _is this Xitsonga? ☐ yes  ☐ no_
- `hovelela` — _is this Xitsonga? ☐ yes  ☐ no_
- `khalutshela` — _is this Xitsonga? ☐ yes  ☐ no_
- `khohlela` — _is this Xitsonga? ☐ yes  ☐ no_
- `khomokile ncilo` — _is this Xitsonga? ☐ yes  ☐ no_
- `khwehlela` — _is this Xitsonga? ☐ yes  ☐ no_
- `laha vhuimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `lahlegetšwe ke boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `lahlehetse boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `lahlekelwe isisindo` — _is this Xitsonga? ☐ yes  ☐ no_
- `lahlekelwe sisixa` — _is this Xitsonga? ☐ yes  ☐ no_
- `latlhile boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `losing weight` — _is this Xitsonga? ☐ yes  ☐ no_
- `lost weight` — _is this Xitsonga? ☐ yes  ☐ no_
- `mavhungo usiku` — _is this Xitsonga? ☐ yes  ☐ no_
- `nagsweet` — _is this Xitsonga? ☐ yes  ☐ no_
- `nciphile isisindo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ncokolele lisindo` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndikhohla` — _is this Xitsonga? ☐ yes  ☐ no_
- `ndikhwehlela` — _is this Xitsonga? ☐ yes  ☐ no_
- `night sweats` — _is this Xitsonga? ☐ yes  ☐ no_
- `o latlhegetswe ke boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `phulukane nesixa` — _is this Xitsonga? ☐ yes  ☐ no_
- `phwa bosigo` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweat at night` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweating at night` — _is this Xitsonga? ☐ yes  ☐ no_
- `sweet snags` — _is this Xitsonga? ☐ yes  ☐ no_
- `tatlhegelo ya boima` — _is this Xitsonga? ☐ yes  ☐ no_
- `tswa marothodi bosigo` — _is this Xitsonga? ☐ yes  ☐ no_
- `tswa molapo bosiu` — _is this Xitsonga? ☐ yes  ☐ no_
- `weight loss` — _is this Xitsonga? ☐ yes  ☐ no_
- `xurha usiku` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 7. `possible_fracture`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `can't bear weight` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't move it` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't walk` — _is this Xitsonga? ☐ yes  ☐ no_
- `crooked` — _is this Xitsonga? ☐ yes  ☐ no_
- `deformed` — _is this Xitsonga? ☐ yes  ☐ no_
- `fell` — _is this Xitsonga? ☐ yes  ☐ no_
- `fell down` — _is this Xitsonga? ☐ yes  ☐ no_
- `injury` — _is this Xitsonga? ☐ yes  ☐ no_
- `kotsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kotsi e kgolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `kugobekile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ligwegwile` — _is this Xitsonga? ☐ yes  ☐ no_
- `looks bent` — _is this Xitsonga? ☐ yes  ☐ no_
- `o wele` — _is this Xitsonga? ☐ yes  ☐ no_
- `o wele fatshe` — _is this Xitsonga? ☐ yes  ☐ no_
- `se botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `se kobegile` — _is this Xitsonga? ☐ yes  ☐ no_
- `se lebega se kobegile` — _is this Xitsonga? ☐ yes  ☐ no_
- `se nang le sebopego se se sa tlwaelegang` — _is this Xitsonga? ☐ yes  ☐ no_
- `se rurugile` — _is this Xitsonga? ☐ yes  ☐ no_
- `se rurugile mme se botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `se sa tlhamalala` — _is this Xitsonga? ☐ yes  ☐ no_
- `se sothegile` — _is this Xitsonga? ☐ yes  ☐ no_
- `skewe` — _is this Xitsonga? ☐ yes  ☐ no_
- `swollen and painful` — _is this Xitsonga? ☐ yes  ☐ no_
- `trauma` — _is this Xitsonga? ☐ yes  ☐ no_
- `twisted` — _is this Xitsonga? ☐ yes  ☐ no_
- `ukwethuka kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `uphazamisekile` — _is this Xitsonga? ☐ yes  ☐ no_
- `uphukile` — _is this Xitsonga? ☐ yes  ☐ no_
- `uvuvukile` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 8. `hypertensive_urgency`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `ngati ya le henhla`
- `rixaka`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `blood pressure high` — _is this Xitsonga? ☐ yes  ☐ no_
- `blurred vision` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `bp` — _is this Xitsonga? ☐ yes  ☐ no_
- `bp e kwa godimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `bp high` — _is this Xitsonga? ☐ yes  ☐ no_
- `confused` — _is this Xitsonga? ☐ yes  ☐ no_
- `dizzy` — _is this Xitsonga? ☐ yes  ☐ no_
- `duiselig` — _is this Xitsonga? ☐ yes  ☐ no_
- `fifetseng` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a tlhaloganye` — _is this Xitsonga? ☐ yes  ☐ no_
- `go dutla madi mo nko` — _is this Xitsonga? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `headache` — _is this Xitsonga? ☐ yes  ☐ no_
- `high blood` — _is this Xitsonga? ☐ yes  ☐ no_
- `hlogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `hloho` — _is this Xitsonga? ☐ yes  ☐ no_
- `hypertension` — _is this Xitsonga? ☐ yes  ☐ no_
- `isiyezi` — _is this Xitsonga? ☐ yes  ☐ no_
- `iyesuka` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatelelo ya madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatelelo ya madi e e kwa godimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatelelo ya madi e godimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatelelo ya madi e kwa godimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgatello ya madi e phahameng` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a kgatelelo` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a kgatelelo a kwa godimo` — _is this Xitsonga? ☐ yes  ☐ no_
- `nko` — _is this Xitsonga? ☐ yes  ☐ no_
- `nosebleed` — _is this Xitsonga? ☐ yes  ☐ no_
- `nsinya wa ngati wu tlakukile` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a tekateka` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tlhakatlhakane` — _is this Xitsonga? ☐ yes  ☐ no_
- `phuvhelo ya madi i phanda` — _is this Xitsonga? ☐ yes  ☐ no_
- `pono` — _is this Xitsonga? ☐ yes  ☐ no_
- `pono e e fifetseng` — _is this Xitsonga? ☐ yes  ☐ no_
- `pono e sa bonalang sentle` — _is this Xitsonga? ☐ yes  ☐ no_
- `tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `u a tekateka` — _is this Xitsonga? ☐ yes  ☐ no_
- `u a ṱavhanya` — _is this Xitsonga? ☐ yes  ☐ no_
- `umfutho wegazi uphakeme` — _is this Xitsonga? ☐ yes  ☐ no_
- `umfutho wegazi uphezulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `uxinzelelo lwegazi luphezulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyesuka` — _is this Xitsonga? ☐ yes  ☐ no_
- `ṱhoho` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 9. `hypertensive_urgency_reading`
*nr*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `botlhoko jwa tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `bp 170` — _is this Xitsonga? ☐ yes  ☐ no_
- `bp 180` — _is this Xitsonga? ☐ yes  ☐ no_
- `bp 190` — _is this Xitsonga? ☐ yes  ☐ no_
- `bp 200` — _is this Xitsonga? ☐ yes  ☐ no_
- `dizzy` — _is this Xitsonga? ☐ yes  ☐ no_
- `go potologa tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `headache` — _is this Xitsonga? ☐ yes  ☐ no_
- `kop pyn` — _is this Xitsonga? ☐ yes  ☐ no_
- `pono` — _is this Xitsonga? ☐ yes  ☐ no_
- `umfutho wegazi` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyadidizela` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyadiyazela` — _is this Xitsonga? ☐ yes  ☐ no_
- `vision` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 10. `appendicitis_pattern`
*appendicitis_pattern*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `appendix` — _is this Xitsonga? ☐ yes  ☐ no_
- `appendix pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `bo nna maswe fa o iketla` — _is this Xitsonga? ☐ yes  ☐ no_
- `bo nna maswe fa o tsamaya` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa appendix` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't straighten up` — _is this Xitsonga? ☐ yes  ☐ no_
- `fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ka fa mojeng wa mala` — _is this Xitsonga? ☐ yes  ☐ no_
- `ka fa mojeng wa mpa` — _is this Xitsonga? ☐ yes  ☐ no_
- `karolo e e kwa tlase ka fa mojeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `lower right pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `maagpyn` — _is this Xitsonga? ☐ yes  ☐ no_
- `mala` — _is this Xitsonga? ☐ yes  ☐ no_
- `mo tlase ka fa mojeng` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpa` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain right side stomach` — _is this Xitsonga? ☐ yes  ☐ no_
- `right abdo pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `right lower quadrant` — _is this Xitsonga? ☐ yes  ☐ no_
- `vomiting` — _is this Xitsonga? ☐ yes  ☐ no_
- `worse when moving` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 11. `asthma_inhaler_failure`
*asthma_inhaler_failure*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `asma` — _is this Xitsonga? ☐ yes  ☐ no_
- `asthma` — _is this Xitsonga? ☐ yes  ☐ no_
- `ayisizi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e dire` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e thuse` — _is this Xitsonga? ☐ yes  ☐ no_
- `go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `inhaler` — _is this Xitsonga? ☐ yes  ☐ no_
- `isifo sofuba` — _is this Xitsonga? ☐ yes  ☐ no_
- `ke tlhoka go hema gape ka inhaler` — _is this Xitsonga? ☐ yes  ☐ no_
- `need more puffs` — _is this Xitsonga? ☐ yes  ☐ no_
- `not helping` — _is this Xitsonga? ☐ yes  ☐ no_
- `not working` — _is this Xitsonga? ☐ yes  ☐ no_
- `o sa thatafalelwa ke go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `pompo` — _is this Xitsonga? ☐ yes  ☐ no_
- `pompo ya go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `pump` — _is this Xitsonga? ☐ yes  ☐ no_
- `sesebediswa sa go hema` — _is this Xitsonga? ☐ yes  ☐ no_
- `still struggling` — _is this Xitsonga? ☐ yes  ☐ no_
- `ufuba` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 12. `meningism`
*same-day review is the safety-correct default.*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- `fivha`

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `botlhoko jwa molala` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't bend neck` — _is this Xitsonga? ☐ yes  ☐ no_
- `feberu` — _is this Xitsonga? ☐ yes  ☐ no_
- `fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `intamo eqinileyo` — _is this Xitsonga? ☐ yes  ☐ no_
- `intamo ibuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `intamo iqinile` — _is this Xitsonga? ☐ yes  ☐ no_
- `intsamo ibuhlungu` — _is this Xitsonga? ☐ yes  ☐ no_
- `intsamo icinile` — _is this Xitsonga? ☐ yes  ☐ no_
- `molala` — _is this Xitsonga? ☐ yes  ☐ no_
- `molala o bohloko` — _is this Xitsonga? ☐ yes  ☐ no_
- `molala o botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `molala o o thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `molala o thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `mulala u na vuvha` — _is this Xitsonga? ☐ yes  ☐ no_
- `mulala wo omela` — _is this Xitsonga? ☐ yes  ☐ no_
- `neck is stiff` — _is this Xitsonga? ☐ yes  ☐ no_
- `neck pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `neck stiff` — _is this Xitsonga? ☐ yes  ☐ no_
- `nek is styf` — _is this Xitsonga? ☐ yes  ☐ no_
- `nkulo wu tiyile` — _is this Xitsonga? ☐ yes  ☐ no_
- `nkulo wu vava` — _is this Xitsonga? ☐ yes  ☐ no_
- `o thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `stiff neck` — _is this Xitsonga? ☐ yes  ☐ no_
- `stywe nek` — _is this Xitsonga? ☐ yes  ☐ no_
- `thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `umkhuhlane` — _is this Xitsonga? ☐ yes  ☐ no_
- `umnqala womelele` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 13. `hiv_fever`
*HIV + fever: risk-UPGRADE signal. Enforce YELLOW as a floor, preserve any | higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `arv` — _is this Xitsonga? ☐ yes  ☐ no_
- `di-arv` — _is this Xitsonga? ☐ yes  ☐ no_
- `fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `high temperature` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv positive` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv+` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv_fever` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingculaza` — _is this Xitsonga? ☐ yes  ☐ no_
- `o a lwala` — _is this Xitsonga? ☐ yes  ☐ no_
- `o dirisa di-arv` — _is this Xitsonga? ☐ yes  ☐ no_
- `o na le bolwetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `o na le hiv` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tsaya di-arv` — _is this Xitsonga? ☐ yes  ☐ no_
- `on arvs` — _is this Xitsonga? ☐ yes  ☐ no_
- `positive` — _is this Xitsonga? ☐ yes  ☐ no_
- `shisa kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `sick` — _is this Xitsonga? ☐ yes  ☐ no_
- `taking arvs` — _is this Xitsonga? ☐ yes  ☐ no_
- `temperature` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 14. `lower_abdo_missed_period`
*higher level the LLM already assigned (eval P16 caught this overwriting ORANGE).*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `botlase jwa mpa` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko mo pelviking` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mala` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko mo tlase ga mpa` — _is this Xitsonga? ☐ yes  ☐ no_
- `diegile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga go na kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `go diega ga nako ya go tla ga kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `go se tle ga kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgwedi e diegile` — _is this Xitsonga? ☐ yes  ☐ no_
- `late period` — _is this Xitsonga? ☐ yes  ☐ no_
- `lower abdominal pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `lower belly pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `lower tummy pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `maagpyn` — _is this Xitsonga? ☐ yes  ☐ no_
- `mala` — _is this Xitsonga? ☐ yes  ☐ no_
- `missed period` — _is this Xitsonga? ☐ yes  ☐ no_
- `mpa` — _is this Xitsonga? ☐ yes  ☐ no_
- `nako ya kgwedi` — _is this Xitsonga? ☐ yes  ☐ no_
- `no period` — _is this Xitsonga? ☐ yes  ☐ no_
- `pelvic pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `pelviki` — _is this Xitsonga? ☐ yes  ☐ no_
- `period late` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 15. `pregnancy_complication`
*pregnancy_complication*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `baby hasn't moved` — _is this Xitsonga? ☐ yes  ☐ no_
- `bleeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `boimana` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa tlhogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 28` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 30` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 32` — _is this Xitsonga? ☐ yes  ☐ no_
- `dibeke di le 34` — _is this Xitsonga? ☐ yes  ☐ no_
- `dikgwedi di le 5` — _is this Xitsonga? ☐ yes  ☐ no_
- `dikgwedi di le 6` — _is this Xitsonga? ☐ yes  ☐ no_
- `dikgwedi di le 7` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga e ise e fitlhe nako ya go belega` — _is this Xitsonga? ☐ yes  ☐ no_
- `headache` — _is this Xitsonga? ☐ yes  ☐ no_
- `motsamao o fokotsehile` — _is this Xitsonga? ☐ yes  ☐ no_
- `movement reduced` — _is this Xitsonga? ☐ yes  ☐ no_
- `no movement` — _is this Xitsonga? ☐ yes  ☐ no_
- `o imile` — _is this Xitsonga? ☐ yes  ☐ no_
- `pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `pele ga nako` — _is this Xitsonga? ☐ yes  ☐ no_
- `pregnant` — _is this Xitsonga? ☐ yes  ☐ no_
- `swangari` — _is this Xitsonga? ☐ yes  ☐ no_
- `swelling` — _is this Xitsonga? ☐ yes  ☐ no_
- `vision` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 16. `gi_bleeding`
*gi_bleeding*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `black tarry stool` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood in poo` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood in stool` — _is this Xitsonga? ☐ yes  ☐ no_
- `blood in vomit` — _is this Xitsonga? ☐ yes  ☐ no_
- `bloody diarrhoea` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingati esitweni` — _is this Xitsonga? ☐ yes  ☐ no_
- `ingati iyaphumela ngemlomeni` — _is this Xitsonga? ☐ yes  ☐ no_
- `letshololo le le nang le madi` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a tswa ka ganong` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi a tšwa ka ganong` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi leetšong` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi mantšwing` — _is this Xitsonga? ☐ yes  ☐ no_
- `madi mo mantswing` — _is this Xitsonga? ☐ yes  ☐ no_
- `mantlwana a mantsho a a tshwanang le sekgoa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngati enyangweni` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngati yi huma hi nomo` — _is this Xitsonga? ☐ yes  ☐ no_
- `rectal bleeding` — _is this Xitsonga? ☐ yes  ☐ no_
- `throwing up blood` — _is this Xitsonga? ☐ yes  ☐ no_
- `vomiting blood` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 17. `deep_wound`
*deep_wound*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `animal bite` — _is this Xitsonga? ☐ yes  ☐ no_
- `bite wound` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't stop` — _is this Xitsonga? ☐ yes  ☐ no_
- `deep cut` — _is this Xitsonga? ☐ yes  ☐ no_
- `deep wound` — _is this Xitsonga? ☐ yes  ☐ no_
- `dierbyt` — _is this Xitsonga? ☐ yes  ☐ no_
- `galase` — _is this Xitsonga? ☐ yes  ☐ no_
- `galase mo nthong` — _is this Xitsonga? ☐ yes  ☐ no_
- `glass in wound` — _is this Xitsonga? ☐ yes  ☐ no_
- `go elela` — _is this Xitsonga? ☐ yes  ☐ no_
- `go elela ka bontsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `go elela ka maatla` — _is this Xitsonga? ☐ yes  ☐ no_
- `go longwa ke phologolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `inxeba` — _is this Xitsonga? ☐ yes  ☐ no_
- `ka bontsi` — _is this Xitsonga? ☐ yes  ☐ no_
- `ka maatla` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgagogo` — _is this Xitsonga? ☐ yes  ☐ no_
- `kgagogo e e tseneletseng` — _is this Xitsonga? ☐ yes  ☐ no_
- `lenala` — _is this Xitsonga? ☐ yes  ☐ no_
- `lenala le le rusetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `ntho` — _is this Xitsonga? ☐ yes  ☐ no_
- `ntho e e tseneletseng` — _is this Xitsonga? ☐ yes  ☐ no_
- `ntho ya go longwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ntho ya go phunyediwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `ntho ya go tlhabiwa` — _is this Xitsonga? ☐ yes  ☐ no_
- `phologolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `pouring` — _is this Xitsonga? ☐ yes  ☐ no_
- `puncture wound` — _is this Xitsonga? ☐ yes  ☐ no_
- `rusty nail` — _is this Xitsonga? ☐ yes  ☐ no_
- `spurting` — _is this Xitsonga? ☐ yes  ☐ no_
- `stab wound` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 18. `severe_dehydration_vulnerable`
*severe_dehydration_vulnerable*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `akakaze achame isikhathi eside` — _is this Xitsonga? ☐ yes  ☐ no_
- `baby` — _is this Xitsonga? ☐ yes  ☐ no_
- `bagolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't keep fluids down` — _is this Xitsonga? ☐ yes  ☐ no_
- `child` — _is this Xitsonga? ☐ yes  ☐ no_
- `diabetic` — _is this Xitsonga? ☐ yes  ☐ no_
- `diarrhoea and vomiting together` — _is this Xitsonga? ☐ yes  ☐ no_
- `elderly` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a ise a rote` — _is this Xitsonga? ☐ yes  ☐ no_
- `ga a ise a rote diura tsotlhe` — _is this Xitsonga? ☐ yes  ☐ no_
- `go tlhatsa` — _is this Xitsonga? ☐ yes  ☐ no_
- `hiv` — _is this Xitsonga? ☐ yes  ☐ no_
- `infant` — _is this Xitsonga? ☐ yes  ☐ no_
- `letshololo` — _is this Xitsonga? ☐ yes  ☐ no_
- `letshololo le go tlhatsa ka nako e le nngwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `mogolo` — _is this Xitsonga? ☐ yes  ☐ no_
- `molomo o omile thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `mouth very dry` — _is this Xitsonga? ☐ yes  ☐ no_
- `ngwana` — _is this Xitsonga? ☐ yes  ☐ no_
- `no urine for hours` — _is this Xitsonga? ☐ yes  ☐ no_
- `not passed urine` — _is this Xitsonga? ☐ yes  ☐ no_
- `o potologa tlhogo thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `o tlhatsa tsotlhe` — _is this Xitsonga? ☐ yes  ☐ no_
- `okukhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `omile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ukoma kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `umchamo awuphumi` — _is this Xitsonga? ☐ yes  ☐ no_
- `uyahlanza` — _is this Xitsonga? ☐ yes  ☐ no_
- `very dizzy` — _is this Xitsonga? ☐ yes  ☐ no_
- `vomiting everything` — _is this Xitsonga? ☐ yes  ☐ no_
- `wome kakhulu` — _is this Xitsonga? ☐ yes  ☐ no_
- `womile` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 19. `eye_emergency`
*eye_emergency*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `akaboni kahle` — _is this Xitsonga? ☐ yes  ☐ no_
- `blur suddenly` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't see` — _is this Xitsonga? ☐ yes  ☐ no_
- `chemical in eye` — _is this Xitsonga? ☐ yes  ☐ no_
- `eye injury` — _is this Xitsonga? ☐ yes  ☐ no_
- `fifala` — _is this Xitsonga? ☐ yes  ☐ no_
- `foufetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `go na le sengwe mo leitlhong` — _is this Xitsonga? ☐ yes  ☐ no_
- `hit in eye` — _is this Xitsonga? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this Xitsonga? ☐ yes  ☐ no_
- `khemikhale` — _is this Xitsonga? ☐ yes  ☐ no_
- `khemikhale mo leitlhong` — _is this Xitsonga? ☐ yes  ☐ no_
- `kotsi ya leitlho` — _is this Xitsonga? ☐ yes  ☐ no_
- `leitlho` — _is this Xitsonga? ☐ yes  ☐ no_
- `o foufetse` — _is this Xitsonga? ☐ yes  ☐ no_
- `o iteilwe mo leitlhong` — _is this Xitsonga? ☐ yes  ☐ no_
- `oogbesering` — _is this Xitsonga? ☐ yes  ☐ no_
- `pono` — _is this Xitsonga? ☐ yes  ☐ no_
- `pono e fifala ka tshoganyetso` — _is this Xitsonga? ☐ yes  ☐ no_
- `sengwe mo leitlhong` — _is this Xitsonga? ☐ yes  ☐ no_
- `something in eye` — _is this Xitsonga? ☐ yes  ☐ no_
- `sudden` — _is this Xitsonga? ☐ yes  ☐ no_
- `suddenly` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshoganyetso` — _is this Xitsonga? ☐ yes  ☐ no_
- `ungenwe okuthile ehlweni` — _is this Xitsonga? ☐ yes  ☐ no_
- `uxhophekile` — _is this Xitsonga? ☐ yes  ☐ no_
- `uxhoshiwe` — _is this Xitsonga? ☐ yes  ☐ no_
- `vision` — _is this Xitsonga? ☐ yes  ☐ no_
- `went blind` — _is this Xitsonga? ☐ yes  ☐ no_

**Status:** ☐ ✅ correct  ☐ ❌ wrong (fix below)  ☐ ➕ missing phrases to add

**Notes / corrections / additions:**

---

#### YELLOW 20. `testicular_torsion`
*testicular_torsion*

**English trigger phrases** (what the rule looks for in English):
- *(no English triggers — this rule is language-conditional)*

**Current Xitsonga keywords** (what the rule recognises in Xitsonga):
- **⚠️ NONE — please provide keywords for this symptom in Xitsonga**

**Keywords with uncertain language** — auto-detection couldn't classify these. Please confirm whether each belongs in Xitsonga:
- `amasende avuvukile` — _is this Xitsonga? ☐ yes  ☐ no_
- `bo masisi thata` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa ditesticle` — _is this Xitsonga? ☐ yes  ☐ no_
- `botlhoko jwa scrotum` — _is this Xitsonga? ☐ yes  ☐ no_
- `can't walk` — _is this Xitsonga? ☐ yes  ☐ no_
- `ditesticle` — _is this Xitsonga? ☐ yes  ☐ no_
- `e rurugile` — _is this Xitsonga? ☐ yes  ☐ no_
- `ka tshoganyetso` — _is this Xitsonga? ☐ yes  ☐ no_
- `masisi` — _is this Xitsonga? ☐ yes  ☐ no_
- `rurugile` — _is this Xitsonga? ☐ yes  ☐ no_
- `scrotum` — _is this Xitsonga? ☐ yes  ☐ no_
- `scrotum pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `severe` — _is this Xitsonga? ☐ yes  ☐ no_
- `sudden` — _is this Xitsonga? ☐ yes  ☐ no_
- `swollen testicle` — _is this Xitsonga? ☐ yes  ☐ no_
- `testicle` — _is this Xitsonga? ☐ yes  ☐ no_
- `testicle pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `testicular pain` — _is this Xitsonga? ☐ yes  ☐ no_
- `tshoganyetso` — _is this Xitsonga? ☐ yes  ☐ no_

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
