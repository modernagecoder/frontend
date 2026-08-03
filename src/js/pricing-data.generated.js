/**
 * GENERATED FILE — DO NOT EDIT.
 *
 * Written by scripts/pricing/apply.js from pricing/pricing.config.jsonc.
 * Any edit here is overwritten on the next build. Change the price in the
 * config file instead.
 *
 * Country price levels: World Bank PA.NUS.PRVT.PLI, CC BY 4.0.
 */
window.MAC_PRICING = {
  "version": 2,
  "updated": "2026-08-03",
  "generatedFrom": "pricing/pricing.config.jsonc",
  "plans": {
    "coding": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 7500
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      }
    },
    "maths": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 8500
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      }
    },
    "agents": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 9999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      }
    },
    "school": {
      "india": {
        "group": 1499,
        "miniBatch": null,
        "personal": 2999
      },
      "international": {
        "group": null,
        "miniBatch": null,
        "personal": null
      }
    },
    "camps": {
      "india": {
        "oneTime": 9999
      },
      "international": {
        "oneTime": 200
      }
    }
  },
  "courseOverrides": {
    "codex-and-claude-code-ai-coding-agents-course-for-teens": "agents",
    "codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals": "agents"
  },
  "display": {
    "chargeCurrencies": {
      "india": "INR",
      "international": "USD"
    },
    "periodLabels": {
      "monthly": "/month",
      "oneTime": ""
    },
    "classesPerMonth": 8,
    "hoursPerClass": 1
  }
};
