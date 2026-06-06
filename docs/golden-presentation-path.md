# EV Share Golden Presentation Path

Last updated: 2026-06-05

## Goal

Use this path to present the EV Share website with the least friction and the highest conversion clarity. The demo should prove one story:

> EV Share lets a visitor understand the income-generating mobility asset model, trust the operating system, choose to start, and submit a partner request without confusion.

## Demo Scope

Show these pages only:

- `/` or `/ar`: main conversion story
- `/about`: company context, only if the audience asks who is behind the model
- `/partner`: lead capture and final proof that the website can convert interest into a submitted request

Do not show these during the main path:

- `/qr`: currently empty
- `/contact`: useful as support information, but the current form has no API submission behavior
- `/privacy-policy` and `/terms-of-service`: keep ready for legal/trust questions, but do not spend presentation time there

## Preflight Checklist

Run this before any client, investor, or exhibition demo.

- Open the site in Chrome using a clean browser profile or incognito window.
- Test both desktop and mobile width before the event.
- Confirm the production backend is reachable: `https://backend.evshare.app/api/v1`.
- Confirm the partner form endpoint accepts requests: `POST /consultations`.
- Confirm images load: hero, app mockup, car, scooter, bike, mobile preview, logo, flag.
- Confirm Arabic and English language switching does not break layout.
- Confirm the internet connection is stable enough for the live backend request.
- Prepare one valid test lead that can be submitted without using a real customer identity.
- Keep a backup recording or screenshots of the successful flow in case exhibition internet fails.

## Golden Path Summary

Target time: 4 to 6 minutes.

| Step | Page | Action | Message |
| --- | --- | --- | --- |
| 1 | Home hero | Open `/ar` or `/` | EV Share is an asset ownership model for daily income without operating complexity. |
| 2 | App banner | Scroll to app section | The app connects riders, QR unlock, live assets, and merchant/asset tools in one ecosystem. |
| 3 | Passive income | Scroll once | The owner owns the asset, EV Share handles operation, and returns are tracked. |
| 4 | Asset portfolio | Show scooter, bike, car cards | Visitors can understand the available asset categories quickly. |
| 5 | Why EV Share | Show 4 reasons | Full asset management, smart platform, operating partners, ownership without operating burden. |
| 6 | Four steps | Show onboarding steps | Download, choose asset, choose operation mode, track daily profit. |
| 7 | CTA | Click "Subscribe now" | Interest becomes a partner request. |
| 8 | Partner form | Submit valid lead | The website can capture qualified demand successfully. |

## Presenter Script

### 1. Hero Opening

Route: `/ar` or `/`

Say:

> EV Share is built around a simple promise: own a mobility asset that can generate daily income without asking you to manage operations yourself.

Action:

- Show the hero.
- Point to the primary message.
- Do not over-explain the business model yet.
- Click "Start now" only if you want to briefly introduce the About page. For the fastest path, scroll instead.

Success signal:

- Audience understands the category: income-generating mobility assets.

### 2. Product Proof: App And Operations

Section: app banner

Say:

> This is not just a landing page. The website introduces an operating ecosystem: riders find assets on a map, unlock with QR, and merchants track assets and operations.

Action:

- Show the app mockup.
- Point to the three proof cards: live map, QR unlock, merchant tools.
- Mention that this is the bridge between customer use and investor/merchant value.

Success signal:

- Audience understands that the model depends on a real operating loop, not only asset sales.

### 3. Income Story

Section: passive income

Say:

> The main value is removing operational friction. The visitor owns the asset, while EV Share handles operation and reporting.

Action:

- Scroll slowly through the passive income section.
- Keep the message focused: ownership, operation, daily tracking.

Success signal:

- Audience can repeat the model in one sentence.

### 4. Asset Choice

Sections: choose asset and asset showcase

Say:

> EV Share gives the visitor a simple asset menu: smart bikes, electric scooters, and cars. Each asset category is positioned as a practical income opportunity.

Action:

- Show all three cards.
- Do not click card CTAs because the cards currently do not navigate.

Success signal:

- Audience sees the asset options without needing extra pages.

### 5. Why EV Share

Section: why EV Share

Say:

> The trust layer is management, platform visibility, operating options, and ownership without day-to-day operating burden.

Action:

- Read or summarize the four reasons.
- Keep this section short.

Success signal:

- Audience has enough confidence to move toward the conversion step.

### 6. Four-Step Operating Path

Section: start in minutes / app steps

Say:

> The user journey is intentionally simple: download the app, choose an asset, choose the operating model, then track daily profits from the dashboard.

Action:

- Walk through steps 01 to 04.
- Emphasize that this is the cleanest explanation of the business path.

Success signal:

- Audience understands the process from interest to active asset.

### 7. Conversion CTA

Section: profit CTA

Say:

> After the story is clear, the website asks for one action: submit a partner request so the team can contact the lead.

Action:

- Click "Subscribe now".
- Confirm it navigates to `/partner`.

Success signal:

- The audience sees a direct conversion path.

### 8. Partner Form Submission

Route: `/partner`

Use this safe test data:

| Field | Value |
| --- | --- |
| Full name | Exhibition Test Lead |
| Email | demo@evshare.app |
| Mobile number | `552253991` |
| Details | Interested in EV Share asset ownership and operation model. |

Important validation notes:

- The phone field displays Saudi code `+966`.
- Enter the local number without country code: `552253991`.
- The schema normalizes this to `966552253991`.
- A valid mobile number must match `9665XXXXXXXX`.
- Details must be at least 10 characters.

Action:

- Submit the form.
- Wait for the success modal.
- Click OK only after the audience sees the success state.

Success signal:

- Success modal appears: "Done Successfully!" / "تم بنجاح!"
- The flow returns to the homepage after closing the modal.

## Full Test Checklist

Use this checklist for the "works 10000%" rehearsal.

### Navigation

- `/ar` loads the Arabic homepage.
- `/en` loads the English homepage.
- Logo returns to the homepage.
- Language switcher changes locale correctly.
- Hero primary CTA navigates to `/about`.
- About CTA navigates to `/partner`.
- Final homepage CTA navigates to `/partner`.

### Main Demo Sections

- Hero text is visible above the fold on desktop and mobile.
- App download banner displays app mockup and both store buttons.
- Passive income section loads without layout shift.
- Asset showcase shows bike, scooter, and car images.
- Why EV Share section shows four value points.
- Four-step section shows steps 01, 02, 03, and 04.
- Profit CTA is visible and clickable.

### Partner Form

- Empty submit shows required field errors.
- Invalid email shows email validation error.
- Invalid phone such as `12345` shows phone validation error.
- Valid local Saudi mobile such as `552253991` passes validation.
- Details shorter than 10 characters show validation error.
- Valid submission calls the backend.
- Success modal opens after successful backend response.
- OK button closes modal and returns to homepage.
- Backend failure shows toast error instead of silently failing.

### Responsive

- Test desktop width: 1440px.
- Test tablet width: 768px.
- Test mobile width: 390px.
- No hero text overlaps image content.
- CTA buttons remain tappable on mobile.
- Partner form fields remain readable and usable.

### Exhibition Readiness

- Browser zoom is 100%.
- Autocomplete is cleared before the demo.
- Test lead data is ready in a note.
- Backend health is checked within 30 minutes of the presentation.
- Store links are tested once, but not opened during the main demo unless asked.
- Backup screenshots or a short screen recording are available offline.

## Backup Path If Backend Fails

If the partner form cannot submit because of internet or backend downtime:

1. Show the filled form.
2. Click submit once.
3. If an error toast appears, say:

> The front-end validation and lead payload are ready. The only failing dependency is the live backend connection, so the team can still capture the lead manually during the event and retry the API after connectivity is restored.

4. Open the prepared successful-flow screenshot or recording.
5. Do not continue retrying live in front of the audience.

## Known Risks To Fix Before A High-Stakes Demo

- `/qr` is empty. Do not route exhibition users there until it has content.
- The contact form currently validates fields but does not submit to an API.
- The Arabic message file contains mojibake in many strings. Some strings are valid Unicode escape sequences, but many visible Arabic labels may render incorrectly if not fixed.
- The hero "Start now" CTA goes to `/about`, while the strongest conversion CTA goes to `/partner`. This is acceptable for a narrative path, but direct conversion would be cleaner if "Start now" should mean lead capture.
- Asset card CTA text exists in translations, but the card component does not render a clickable CTA.

## Website Q&A

Use these answers if someone asks questions during the website demo. Keep answers short, then return to the golden path.

### What is EV Share?

EV Share is a smart mobility platform built around income-generating transport assets. The website presents the model as asset ownership with EV Share handling the operating complexity.

### Who is the website for?

The main website path is for investors, merchants, and partners who are interested in owning or operating mobility assets such as scooters, bikes, and cars.

### What problem does EV Share solve?

It removes the operational burden from asset ownership. The visitor does not need to manage daily operations directly; EV Share presents the system, tools, and operating flow.

### What assets are available?

The website currently presents three asset categories:

- Smart bikes
- Electric scooters
- Cars

### How does someone start?

The website explains four steps:

1. Download the app.
2. Choose from available assets.
3. Choose the operation mode.
4. Track daily profits from the dashboard.

### Where should an interested person go?

Send them to `/partner`. This is the strongest conversion page because it captures the visitor's name, email, Saudi mobile number, and request details.

### What happens after submitting the partner form?

The form sends the lead to the backend endpoint `POST /consultations`. On success, the website shows a success modal and then returns the visitor to the homepage after confirmation.

### What phone number format should be used?

Use a Saudi local mobile number without the country code, for example `552253991`. The website displays `+966` and normalizes the number internally to `966552253991`.

### Does the website support Arabic and English?

Yes. The routes support Arabic and English through `/ar` and `/en`, with Arabic as the default locale. Before a public demo, check both languages visually because some Arabic translation strings need cleanup.

### Are App Store and Google Play links available?

The app banner includes Google Play and App Store buttons. Test the links before the demo, but do not open them during the main golden path unless the audience asks.

### Should we show the QR page?

No. The `/qr` page is currently empty, so it should not be part of the presentation path.

### Should we show the contact page?

Only if someone asks for support channels. Do not use it as the main lead capture path because the contact form currently validates input but does not submit to an API.

### Should we show privacy policy or terms?

Only if someone asks legal or compliance questions. Keep them available as trust pages, but do not spend time on them during the main pitch.

### Is daily profit guaranteed?

Do not promise guaranteed returns. Use the website language carefully: assets are positioned to generate daily income, while returns depend on operation and market conditions.

### Who manages the assets?

The website message is that EV Share provides asset management through an operating platform and trusted operating partners, reducing the owner's day-to-day burden.

### What is the strongest 30-second answer if someone asks "Why EV Share?"

Say:

> EV Share combines asset ownership, smart mobility demand, and managed operation. The visitor can understand the opportunity quickly, choose an asset path, and submit a partner request from the same website.

### What should we do if a feature is not ready?

Do not improvise or click into unfinished pages. Say:

> This part is not included in today's golden path. The live demo focuses on the finished conversion flow: understand the model, see the operating logic, and submit a partner request.

## Final Golden Path

Use this as the live click path:

1. Open `/ar`.
2. Show hero.
3. Scroll to app banner.
4. Scroll to passive income.
5. Scroll to asset showcase.
6. Scroll to why EV Share.
7. Scroll to four-step onboarding.
8. Click final "Subscribe now".
9. Fill and submit `/partner`.
10. Show success modal.

This is the shortest complete path that explains value, proves operating logic, avoids low-value pages, and ends with a measurable conversion.
