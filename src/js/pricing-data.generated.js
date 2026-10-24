/**
 * GENERATED FILE: DO NOT EDIT.
 *
 * Written by scripts/pricing/apply.js from pricing/pricing.config.jsonc.
 * Any edit here is overwritten on the next build. Change the price in the
 * config file instead.
 *
 * Country price levels: World Bank PA.NUS.PRVT.PLI, CC BY 4.0.
 */
window.MAC_PRICING = {
  "version": 2,
  "updated": "2026-10-23",
  "generatedFrom": "pricing/pricing.config.jsonc",
  "plans": {
    "coding": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 4999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      },
      "canada": {
        "group": 140,
        "miniBatch": null,
        "personal": 210
      }
    },
    "maths": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 4999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      },
      "canada": {
        "group": 140,
        "miniBatch": null,
        "personal": 210
      }
    },
    "agents": {
      "india": {
        "group": 1499,
        "miniBatch": 2999,
        "personal": 4999
      },
      "international": {
        "group": 100,
        "miniBatch": null,
        "personal": 150
      },
      "canada": {
        "group": 140,
        "miniBatch": null,
        "personal": 210
      }
    },
    "gemini": {
      "india": {
        "group": null,
        "miniBatch": null,
        "personal": 14999
      },
      "international": {
        "group": null,
        "miniBatch": null,
        "personal": 250
      },
      "canada": {
        "group": null,
        "miniBatch": null,
        "personal": 350
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
      },
      "canada": {
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
      },
      "canada": {
        "oneTime": 280
      }
    }
  },
  "courseOverrides": {
    "codex-and-claude-code-ai-coding-agents-course-for-teens": "agents",
    "codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals": "agents",
    "ai-agents-with-microsoft-copilot-studio-course-for-teens": "agents",
    "ai-agents-with-microsoft-copilot-studio-course-for-college-students": "agents",
    "ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals": "agents",
    "build-ai-agents-with-google-gemini-enterprise-course": "gemini"
  },
  "sixMonth": {
    "appliesTo": [
      "coding",
      "maths",
      "agents"
    ],
    "india": {
      "group": 7199,
      "miniBatch": 14399,
      "personal": 24000
    },
    "international": {
      "group": 449,
      "miniBatch": null,
      "personal": 672
    },
    "canada": {
      "group": 629,
      "miniBatch": null,
      "personal": 941
    }
  },
  "gatewayFee": {
    "percent": 2.5,
    "label": "Payment gateway charges"
  },
  "canada": {
    "live": true,
    "timeZones": [
      "America/Toronto",
      "America/Montreal",
      "America/Vancouver",
      "America/Edmonton",
      "America/Winnipeg",
      "America/Regina",
      "America/Swift_Current",
      "America/Halifax",
      "America/Glace_Bay",
      "America/Moncton",
      "America/Goose_Bay",
      "America/St_Johns",
      "America/Whitehorse",
      "America/Dawson",
      "America/Dawson_Creek",
      "America/Fort_Nelson",
      "America/Creston",
      "America/Yellowknife",
      "America/Inuvik",
      "America/Iqaluit",
      "America/Rankin_Inlet",
      "America/Resolute",
      "America/Cambridge_Bay",
      "America/Atikokan",
      "America/Blanc-Sablon",
      "America/Nipigon",
      "America/Thunder_Bay",
      "America/Rainy_River",
      "America/Pangnirtung",
      "Canada/Atlantic",
      "Canada/Central",
      "Canada/Eastern",
      "Canada/Mountain",
      "Canada/Newfoundland",
      "Canada/Pacific",
      "Canada/Saskatchewan",
      "Canada/Yukon"
    ]
  },
  "display": {
    "chargeCurrencies": {
      "india": "INR",
      "international": "USD",
      "canada": "CAD"
    },
    "periodLabels": {
      "monthly": "/month",
      "oneTime": ""
    },
    "classesPerMonth": 8,
    "classesPerMonthOverrides": {
      "coding.india.personal": 4,
      "maths.india.personal": 4,
      "agents.india.personal": 4
    },
    "hoursPerClass": 1
  }
};
