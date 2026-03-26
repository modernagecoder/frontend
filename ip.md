I want you to design and implement a feature on my website that dynamically adjusts course pricing based on purchasing power across regions — without using or storing the user’s location data (such as GPS, IP tracking, or precise geolocation).

Core Requirements:
Dynamic Pricing Adjustment
Pricing must update automatically when a user opens the pricing page.
Pricing should vary based on regional purchasing power.
The system should intelligently infer pricing tiers without directly accessing or storing user location data.
Strict Privacy Constraint
The website must NOT use or store:
GPS location
Exact IP-based tracking
Any personally identifiable location data
Privacy-first approach is mandatory.
Alternative Approach for Region Detection
Use one or more of the following:
Browser locale (e.g., navigator.language)
User-selected country/region (manual selector)
Currency preference selection
The system should work even if no data is available (fallback logic required).
Pricing Constraints
Minimum price: ₹8,000 (must never go below this)
Prices should scale upward depending on inferred economic region.
Currency Localization
Prices must be displayed in the selected or inferred local currency.
Example:
INR, USD, EUR, etc.
Performance Requirements
Pricing must load instantly when the page opens.
No lag, flicker, or delayed rendering.
Must not impact overall website performance.
Scalability
System must handle large traffic efficiently.
Should support global users without slowdown.
Non-Disruptive Integration
Must not break or interfere with existing website features.
Clean and modular integration required.
Expected Output:

Create a detailed technical plan including:

Architecture design (Frontend + Backend)
Privacy-safe region inference strategy
Purchasing power mapping logic (tier-based system)
Pricing calculation formula
Currency conversion approach
Performance optimization (caching, preloading, etc.)
Edge cases:
No locale data
User switches region manually
Currency mismatch
Security considerations
Step-by-step implementation plan
File Requirement:
Save the complete plan in a file named:
internationalpricing.md
Important Notes:
This system must be privacy-first, fast, and scalable.
Avoid any direct or indirect invasive tracking.
Focus on smart inference + user-controlled inputs.