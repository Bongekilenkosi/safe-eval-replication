# Test-fixture audit — isiXhosa (6 phrases)

**Date:** 2026-05-10
**Reviewer:** Unathi Kenene
**What this is:** 6 phrases the system uses to test itself in isiXhosa. These are AI-drafted simulations of what a patient might type into WhatsApp. We need to know whether each one actually sounds like real isiXhosa a patient would type — or whether the AI got the phrasing wrong.

**This is NOT the comprehensive review** (the WhatsApp messages and DCSL keywords). Those have been completed. This is a separate audit of the system's *own test inputs*.

## How to review

For each phrase below, you'll see:

1. **The clinical scenario** in English — what the system thinks the patient is describing
2. **The triage urgency** — how serious the system treats this scenario
3. **The current isiXhosa phrase** — what the AI generated as a simulated patient input
4. **Your verdict** — three options:
   - ✅ **Natural** — a real isiXhosa speaker would actually type this
   - ⚠️ **Clinically right but unnatural** — describes the scenario correctly but no real patient would phrase it this way
   - ❌ **Doesn't describe the scenario** — the isiXhosa doesn't actually mean what it claims to mean

If ⚠️ or ❌, please give us your version of what a real isiXhosa patient would actually type to describe this scenario.

## Important framing

**Patient register, not clinical register.** We need what someone messaging for help on WhatsApp would say — not how a clinician would document the same thing. *"DKA"*, *"hypertensive urgency"*, *"acute coronary syndrome"* are clinical terms. A real patient says *"my sugar is very high and I'm vomiting"*, *"my blood pressure is high and my head is pounding"*, *"my chest is hurting and I can't breathe"*.

**Same-day apply on RED-rule corrections** (life-threatening). Other corrections batch into the next bi-weekly cycle.

---

### Phrase 1

**Clinical scenario** (English): Patient has stopped breathing OR their heart has stopped — life-threatening

**Triage urgency**: 🔴 RED — life-threatening, call ambulance now

**The current isiXhosa phrase:**

> aaphefumli

**Your verdict:**

- [ ] ✅ Natural — a real isiXhosa speaker would actually type this
- [ ] ⚠️ Clinically right but unnatural — describes the scenario correctly but a real patient wouldn't phrase it this way
- [ ] ❌ Doesn't describe the scenario — the isiXhosa doesn't mean what it claims to mean

**If ⚠️ or ❌, what would a real isiXhosa patient actually type to describe this scenario?**

> _________________________________________________

---

### Phrase 2

**Clinical scenario** (English): Patient is unconscious / unresponsive / collapsed and not waking up

**Triage urgency**: 🔴 RED — life-threatening, call ambulance now

**The current isiXhosa phrase:**

> uwe phantsi

**Your verdict:**

- [ ] ✅ Natural — a real isiXhosa speaker would actually type this
- [ ] ⚠️ Clinically right but unnatural — describes the scenario correctly but a real patient wouldn't phrase it this way
- [ ] ❌ Doesn't describe the scenario — the isiXhosa doesn't mean what it claims to mean

**If ⚠️ or ❌, what would a real isiXhosa patient actually type to describe this scenario?**

> _________________________________________________

---

### Phrase 3

**Clinical scenario** (English): Patient is currently having a seizure / fit right now (still convulsing)

**Triage urgency**: 🔴 RED — life-threatening, call ambulance now

**The current isiXhosa phrase:**

> unyikinyeka ngoku

**Your verdict:**

- [ ] ✅ Natural — a real isiXhosa speaker would actually type this
- [ ] ⚠️ Clinically right but unnatural — describes the scenario correctly but a real patient wouldn't phrase it this way
- [ ] ❌ Doesn't describe the scenario — the isiXhosa doesn't mean what it claims to mean

**If ⚠️ or ❌, what would a real isiXhosa patient actually type to describe this scenario?**

> _________________________________________________

---

### Phrase 4

**Clinical scenario** (English): Patient has chest pain AND difficulty breathing — possible heart attack

**Triage urgency**: 🔴 RED — life-threatening, call ambulance now

**The current isiXhosa phrase:**

> isifuba andiPhefumli

**Your verdict:**

- [ ] ✅ Natural — a real isiXhosa speaker would actually type this
- [ ] ⚠️ Clinically right but unnatural — describes the scenario correctly but a real patient wouldn't phrase it this way
- [ ] ❌ Doesn't describe the scenario — the isiXhosa doesn't mean what it claims to mean

**If ⚠️ or ❌, what would a real isiXhosa patient actually type to describe this scenario?**

> _________________________________________________

---

### Phrase 5

**Clinical scenario** (English): Stroke — slurred speech / can't speak properly

**Triage urgency**: 🟠 ORANGE — very urgent, must be seen within 10 minutes

**The current isiXhosa phrase:**

> uthetha nzima

**Your verdict:**

- [ ] ✅ Natural — a real isiXhosa speaker would actually type this
- [ ] ⚠️ Clinically right but unnatural — describes the scenario correctly but a real patient wouldn't phrase it this way
- [ ] ❌ Doesn't describe the scenario — the isiXhosa doesn't mean what it claims to mean

**If ⚠️ or ❌, what would a real isiXhosa patient actually type to describe this scenario?**

> _________________________________________________

---

### Phrase 6

**Clinical scenario** (English): Cough longer than 3 weeks + night sweats + losing weight — possible TB

**Triage urgency**: 🟡 YELLOW — urgent, must be seen today

**The current isiXhosa phrase:**

> ndikhohla khefuzela ebusuku phulukane nesixa

**Your verdict:**

- [ ] ✅ Natural — a real isiXhosa speaker would actually type this
- [ ] ⚠️ Clinically right but unnatural — describes the scenario correctly but a real patient wouldn't phrase it this way
- [ ] ❌ Doesn't describe the scenario — the isiXhosa doesn't mean what it claims to mean

**If ⚠️ or ❌, what would a real isiXhosa patient actually type to describe this scenario?**

> _________________________________________________

---

## Reviewer sign-off

**Reviewer name:** ________________________________

**Date completed:** ________________

**Overall:**
- ☐ All phrases natural — no changes needed
- ☐ Most natural — specific corrections noted above
- ☐ Substantial corrections needed — see notes
