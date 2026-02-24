---
title: "Privacy Policy"
description: "Privacy Policy for Luen and Daylight by luen. Your health data never leaves your device. We operate no server, no database, and no account system."
ogTitle: "Privacy Policy – luen apps"
jsonLdType: "WebPage"
---

## Privacy Policy — luen apps

<span class="date-badge">Effective date: February 24, 2026</span>

Published at: [www.luen.app/privacy](/privacy/)
Applies to: **Luen** and **Daylight** by luen

### Who we are

Luen and Daylight are iOS apps developed and published by Willi Wiedergold ("we", "us", "our"). This privacy policy covers both apps and explains what happens — and what does not happen — with your data.

For questions, contact us at: [support@luen.app](mailto:support@luen.app)

### The short version

Neither app collects personal data on our end. We operate no server, no database, and no account system. We cannot see who you are, where you are, or how you use our apps. All health and fitness data stays on your device. The only outbound network request across both apps is a coordinates-based UV index lookup in Daylight — no user identifier is attached.

### What our apps access and why

#### Apple Health data (HealthKit — Read Only)

Both apps request read-only access to specific Apple Health metrics. No health data is ever transmitted off your device, stored on our systems, or shared with any third party. We do not write to Apple Health.

**Luen** reads: VO2 Max, Resting Heart Rate, Heart Rate, Heart Rate Variability (HRV), Sleep Analysis, Workouts, Time in Daylight, Date of Birth, and Biological Sex. This data is used locally to generate fitness metrics, percentile rankings, habit tracking, personalized insights, and trend summaries.

**Daylight** reads: Time in Daylight (recorded by Apple Watch). This data is used locally to calculate your estimated Vitamin D synthesis from sun exposure.

#### Location (Daylight only — "When In Use")

Daylight requests your device location once per day to look up the UV index for your area via the Open-Meteo API. Your coordinates (latitude and longitude) and the current date are sent to Open-Meteo's servers for this purpose. No other location data is collected or transmitted. Your location is never stored by us and never sent to any other party.

If you deny location access in Daylight, UV-based synthesis calculations will not function. Supplement tracking continues to work without location.

Luen does not request or use location data.

### Local storage

**Luen** stores your health metrics and app data locally using Apple's SwiftData framework.

**Daylight** stores your skin type, supplement dose, cached UV forecasts, and app preferences locally using standard iOS storage (UserDefaults).

In both cases, this data never leaves your device.

### Notifications

Both apps use local notifications only (weekly recaps in Luen, daily UV nudges in Daylight). Notifications are generated entirely on your device. No external push service is involved.

### Third-party services

The only third-party service either app communicates with is [Open-Meteo](https://open-meteo.com), used by Daylight only. Open-Meteo is an open-source weather and UV forecast API. The data sent is limited to: latitude, longitude, and date. No user identifier, device ID, or personal information is included. Open-Meteo's privacy policy is available at [open-meteo.com/en/privacy](https://open-meteo.com/en/privacy).

Luen makes no outbound network requests whatsoever.

Neither app contains advertising SDKs, analytics frameworks, or crash reporting services.

### Data retention

We retain no data because we receive no data. All information our apps use — health data, location, settings — exists only on your device and is governed by Apple's iOS data retention policies. Uninstalling either app removes all of its data from your device.

### Your rights (GDPR)

If you are located in the European Economic Area, you have the following rights under the General Data Protection Regulation:

**Right of access** — You have the right to know what personal data we process about you. As described above, we process no personal data on our systems.

**Right to erasure** — You may delete all app data by uninstalling the respective app. All locally stored data is removed upon deletion.

**Right to object** — In Daylight, you may withdraw location permission at any time in iOS Settings → Privacy & Security → Location Services → Daylight. In both apps, you may revoke Health access in iOS Settings → Health → Data Access & Devices.

**Right to lodge a complaint** — You may file a complaint with your local data protection authority.

The legal basis for Daylight's transmission of coordinates to Open-Meteo is legitimate interest (Article 6(1)(f) GDPR): the transmission is necessary to retrieve the UV index required for the app's core function, and no user identification occurs.

### Changes to this policy

If we make material changes to this policy, we will update the effective date above. We encourage you to review this page periodically.

### Contact

[support@luen.app](mailto:support@luen.app)
