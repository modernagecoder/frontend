---
title: "Practice: AI Ethics and Career Guide"
description: "50 practice problems for AI Ethics and Career Guide in AI and Machine Learning"
slug: ai-ethics-and-career-guide-practice
canonical: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ai-ethics-and-career-guide/practice
category: "AI and Machine Learning"
---
# Practice: AI Ethics and Career Guide

**Total questions:** 50

## Topic-Specific Questions

### Q1. [Easy] What is the output of the following code?

```
bias_types = ["Historical", "Representation", "Measurement", "Labeling"]
for i, bias in enumerate(bias_types, 1):
    print(f"{i}. {bias} bias")
```

*Hint:* enumerate with start=1 gives 1-based indexing.

**Answer:** `1. Historical bias`
`2. Representation bias`
`3. Measurement bias`
`4. Labeling bias`

Four types of bias in AI training data: Historical (data reflects past discrimination), Representation (some groups are underrepresented), Measurement (features are imperfect proxies), and Labeling (annotators have biases).

### Q2. [Easy] What is the output?

```
roles = {
    "Data Analyst": "4-8 LPA",
    "Data Scientist": "8-20 LPA",
    "ML Engineer": "12-30 LPA",
    "AI Researcher": "20-50+ LPA"
}
for role, salary in roles.items():
    print(f"{role:20s}: {salary}")
```

*Hint:* Dictionary iteration produces key-value pairs.

**Answer:** `Data Analyst        : 4-8 LPA`
`Data Scientist      : 8-20 LPA`
`ML Engineer         : 12-30 LPA`
`AI Researcher       : 20-50+ LPA`

AI/ML salaries in India (2025-2026 estimates). LPA = Lakhs Per Annum. Salaries increase with specialization, experience, and company tier. ML Engineers and AI Researchers command premium salaries due to their deployment and research skills.

### Q3. [Easy] What is the output?

```
principles = ["Transparency", "Accountability", "Privacy", "Safety", "Fairness"]
print(f"Responsible AI has {len(principles)} key principles:")
for p in principles:
    print(f"  - {p}")
```

*Hint:* len() counts 5 principles. Each is printed with a dash prefix.

**Answer:** `Responsible AI has 5 key principles:`
`  - Transparency`
`  - Accountability`
`  - Privacy`
`  - Safety`
`  - Fairness`

These five principles form the foundation of responsible AI development. Every AI system should be transparent (explainable), accountable (someone is responsible), privacy-preserving, safe (predictable, robust), and fair (non-discriminatory).

### Q4. [Medium] What is the output?

```
def disparate_impact_ratio(group_a_rate, group_b_rate):
    ratio = min(group_a_rate, group_b_rate) / max(group_a_rate, group_b_rate)
    return round(ratio, 3)

male_rate = 0.75
female_rate = 0.55

ratio = disparate_impact_ratio(male_rate, female_rate)
print(f"Male approval rate: {male_rate}")
print(f"Female approval rate: {female_rate}")
print(f"Disparate impact ratio: {ratio}")
print(f"Passes 80% rule: {ratio >= 0.8}")
```

*Hint:* Disparate impact = min_rate / max_rate. The 80% rule says this should be >= 0.8.

**Answer:** `Male approval rate: 0.75`
`Female approval rate: 0.55`
`Disparate impact ratio: 0.733`
`Passes 80% rule: False`

The disparate impact ratio is 0.55/0.75 = 0.733. Under the U.S. 80% rule, a ratio below 0.8 indicates potential illegal discrimination. This model should be investigated for gender bias, even if gender is not a direct feature.

### Q5. [Medium] What is the output?

```
eu_ai_risk_levels = [
    ("Unacceptable", "Banned", "Social scoring"),
    ("High", "Regulated", "Credit scoring, hiring"),
    ("Limited", "Disclosure", "Chatbots, deepfakes"),
    ("Minimal", "No regulation", "Games, spam filters")
]

print("EU AI Act Risk Classification:")
for level, requirement, examples in eu_ai_risk_levels:
    print(f"  {level:15s} | {requirement:15s} | {examples}")
```

*Hint:* Four risk levels in the EU AI Act, from banned to unregulated.

**Answer:** `EU AI Act Risk Classification:`
`  Unacceptable    | Banned          | Social scoring`
`  High            | Regulated       | Credit scoring, hiring`
`  Limited         | Disclosure      | Chatbots, deepfakes`
`  Minimal         | No regulation   | Games, spam filters`

The EU AI Act (2024) is the world's first comprehensive AI law. It bans unacceptable-risk AI (social scoring), heavily regulates high-risk AI (requires conformity assessment), requires disclosure for limited-risk AI (chatbots must identify as AI), and does not regulate minimal-risk AI.

### Q6. [Medium] What is the output?

```
interview_rounds = {
    "ML Theory": ["Bias-variance", "Regularization", "Gradient descent"],
    "Coding": ["Python", "Data structures", "ML from scratch"],
    "System Design": ["Recommendation", "Fraud detection", "Search ranking"],
    "Behavioral": ["Past projects", "Teamwork", "Ethics"]
}

for round_name, topics in interview_rounds.items():
    print(f"{round_name}: {', '.join(topics)}")
print(f"\nTotal rounds: {len(interview_rounds)}")
```

*Hint:* Dictionary with 4 keys, each having a list of 3 topics.

**Answer:** `ML Theory: Bias-variance, Regularization, Gradient descent`
`Coding: Python, Data structures, ML from scratch`
`System Design: Recommendation, Fraud detection, Search ranking`
`Behavioral: Past projects, Teamwork, Ethics`

`Total rounds: 4`

ML interviews at top companies typically have 4 rounds: ML theory (conceptual understanding), coding (implementation skills), system design (end-to-end thinking), and behavioral (soft skills, ethics awareness). Prepare for all four.

### Q7. [Easy] What is proxy discrimination in AI, and why is removing protected attributes from the model not sufficient to prevent bias?

*Hint:* Think about features that correlate with protected attributes.

**Answer:** **Proxy discrimination** occurs when a model uses features that correlate with protected attributes (race, gender, religion) to make biased predictions, even though the protected attributes are not direct inputs. For example, zip code can proxy for race (due to residential segregation), income can proxy for gender (due to the pay gap), and name patterns can proxy for ethnicity. Simply removing protected attributes from the feature set does not eliminate these proxy relationships. The model can still learn biased patterns through the remaining correlated features. The solution requires actively testing outcomes across protected groups and using fairness-aware training methods.

This is why 'fairness through unawareness' (just removing sensitive features) does not work. Real-world features are deeply interconnected. Addressing bias requires measuring outcomes, not just removing inputs.

### Q8. [Medium] What is the difference between LIME and SHAP for model explainability? When would Priya use one over the other?

*Hint:* Think about speed, theoretical foundation, and type of explanation.

**Answer:** **LIME** creates a local linear approximation around a specific prediction by perturbing the input and observing how predictions change. It is fast, simple to understand, and works with any model. However, it can be unstable (different runs may give different explanations) and the local approximation may not capture complex non-linear boundaries. **SHAP** uses Shapley values from game theory to assign each feature a fair contribution to the prediction. It is theoretically grounded, consistent, and provides both local and global explanations. However, it is slower, especially for non-tree models. Priya should use SHAP when she needs rigorous, consistent explanations (regulatory compliance, audits). She should use LIME for quick, approximate explanations during development or when SHAP is too slow.

In practice, use both and compare. If LIME and SHAP agree on the top features, the explanations are more trustworthy. If they disagree, investigate further. SHAP's TreeExplainer is fast for tree-based models, making it the default choice for random forests and gradient boosting.

### Q9. [Medium] Describe the AI alignment problem. Why is it considered one of the most important challenges in AI safety?

*Hint:* Think about the gap between what we tell AI to do and what we actually want.

**Answer:** The **alignment problem** is the challenge of ensuring AI systems pursue goals that are aligned with human intentions and values. As AI becomes more capable, misalignment becomes more dangerous. Key issues: (1) **Reward hacking**: AI finds unintended ways to maximize its reward (e.g., a cleaning robot puts trash in a closet instead of removing it -- technically "clean" by the metric). (2) **Specification gaming**: The objective function does not capture the full intent (e.g., optimizing for clicks produces clickbait). (3) **Value encoding**: Human values are complex, contextual, and often contradictory -- encoding them mathematically is extremely difficult. RLHF is one approach: train a reward model from human preferences, then optimize the AI to maximize this learned reward. But RLHF itself has limitations (reward model may not generalize to new situations).

Alignment is considered critical because a superintelligent AI pursuing misaligned goals could cause catastrophic harm. Even current systems show mild misalignment: social media algorithms optimized for engagement promote addictive, divisive content. The alignment problem scales with AI capability.

### Q10. [Hard] The impossibility theorem states that it is impossible to satisfy all fairness criteria simultaneously. Explain why, and how Arjun should choose which fairness metric to optimize for a loan approval system.

*Hint:* Think about the mathematical constraints between demographic parity, equal opportunity, and equalized odds.

**Answer:** The impossibility theorem (Chouldechova, 2017; Kleinberg et al., 2016) proves that Demographic Parity, Equal Opportunity, and Predictive Parity cannot all be achieved simultaneously except when either the base rates are equal across groups or the classifier is perfect. In real-world lending, different demographic groups have different historical default rates (due to systemic inequality), so the base rates differ. For Arjun's loan system, the choice depends on the goal: **Equal Opportunity** (equal TPR) is most appropriate because it ensures that qualified applicants from all groups have the same chance of approval -- it equalizes opportunity for those who would actually repay the loan, without requiring equal approval rates for groups with different qualifications. Demographic Parity would require approving the same percentage from each group, potentially approving unqualified applicants or rejecting qualified ones just to match rates.

This is a deep ethical decision, not just a technical one. Equal Opportunity says 'if you can repay, you should have the same chance of approval regardless of group.' Demographic Parity says 'each group should get the same approval rate.' In lending, Equal Opportunity is generally preferred because it focuses on merit while ensuring equal treatment of qualified individuals.

### Q11. [Hard] What is the output?

```
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def logistic_loss(y_true, y_pred):
    epsilon = 1e-8
    return -np.mean(
        y_true * np.log(y_pred + epsilon) +
        (1 - y_true) * np.log(1 - y_pred + epsilon)
    )

# Interview question: compute loss for perfect and imperfect predictions
y_true = np.array([1, 0, 1, 0])

# Perfect predictions
y_perfect = np.array([0.99, 0.01, 0.99, 0.01])
loss_perfect = logistic_loss(y_true, y_perfect)

# Imperfect predictions
y_imperfect = np.array([0.6, 0.4, 0.7, 0.3])
loss_imperfect = logistic_loss(y_true, y_imperfect)

# Worst predictions (opposite)
y_worst = np.array([0.01, 0.99, 0.01, 0.99])
loss_worst = logistic_loss(y_true, y_worst)

print(f"Perfect:   loss = {loss_perfect:.4f}")
print(f"Imperfect: loss = {loss_imperfect:.4f}")
print(f"Worst:     loss = {loss_worst:.4f}")
print(f"\nPerfect < Imperfect < Worst: {loss_perfect < loss_imperfect < loss_worst}")
```

*Hint:* Binary cross-entropy: lower loss for predictions closer to true labels.

**Answer:** `Perfect:   loss = 0.0101`
`Imperfect: loss = 0.5108` (approximately)
`Worst:     loss = 4.6052`

`Perfect < Imperfect < Worst: True`

Binary cross-entropy loss is near 0 for perfect predictions, moderate for imperfect ones, and very high for completely wrong predictions. Understanding this loss function is essential for ML interviews -- it is the foundation of logistic regression and neural network classification.

### Q12. [Hard] How should Kavitha build a Kaggle portfolio that stands out to potential employers? What differentiates a good Kaggle profile from a great one?

*Hint:* Think beyond just competition rankings.

**Answer:** A **good** Kaggle profile has a few competition entries. A **great** Kaggle profile has: (1) **Top rankings** in 3-5 competitions (top 10-20% shows real skill). (2) **Published notebooks** with detailed EDA, feature engineering, and model explanations (Kaggle Notebooks Expert/Master status). (3) **Discussion contributions** showing domain knowledge and helpfulness. (4) **Diverse competition types** (tabular, NLP, vision, time series) showing breadth. (5) **Blog posts** explaining competition approaches (on Medium or personal blog). What employers look for: not just rankings, but the process -- how did Kavitha approach the problem, what features did she engineer, how did she iterate, what did she learn from failures? A well-documented silver-medal solution is more impressive than an undocumented gold medal.

Kaggle is valuable but not sufficient alone. Combine Kaggle experience with deployed projects (showing engineering skills), blog writing (showing communication), and open source contributions (showing collaboration). The best portfolios tell a story of growth and curiosity.

### Q13. [Easy] What is the output?

```
fairness_metrics = ["Demographic Parity", "Equal Opportunity", "Equalized Odds", "Individual Fairness"]
for metric in fairness_metrics:
    print(f"  - {metric}")
print(f"Total: {len(fairness_metrics)} (cannot all be satisfied simultaneously)")
```

*Hint:* 4 fairness metrics, with a note about the impossibility theorem.

**Answer:** `  - Demographic Parity`
`  - Equal Opportunity`
`  - Equalized Odds`
`  - Individual Fairness`
`Total: 4 (cannot all be satisfied simultaneously)`

Multiple fairness definitions exist but the impossibility theorem proves they cannot all hold simultaneously when base rates differ. Choosing which to optimize is an ethical decision based on the application context.

### Q14. [Medium] What is the output?

```
def salary_range(role, experience_years):
    base = {"Data Analyst": 6, "Data Scientist": 12, "ML Engineer": 18, "AI Researcher": 30}
    b = base[role]
    low = b + experience_years * 1.5
    high = b + experience_years * 3
    return f"{low:.0f}-{high:.0f} LPA"

for role in ["Data Analyst", "Data Scientist", "ML Engineer"]:
    print(f"{role:20s}: {salary_range(role, 3)}")
```

*Hint:* Calculate salary range based on base + experience multiplier.

**Answer:** `Data Analyst        : 10-15 LPA`
`Data Scientist      : 17-21 LPA`
`ML Engineer         : 23-27 LPA`

AI/ML salaries in India increase with role specialization and experience. With 3 years of experience: Data Analysts earn 10-15 LPA, Data Scientists 17-21 LPA, and ML Engineers 23-27 LPA. These are estimates; actual salaries vary by company, location, and skills.

### Q15. [Hard] What is the difference between individual fairness and group fairness? When might they conflict?

*Hint:* One focuses on treating similar people similarly, the other focuses on equal outcomes for groups.

**Answer:** **Group fairness** requires statistical equality across demographic groups (e.g., equal approval rates for men and women). **Individual fairness** requires that similar individuals receive similar predictions regardless of group membership. They can conflict: consider two applicants with identical qualifications except one is from an overrepresented group. Group fairness might require rejecting the overrepresented applicant to balance rates, violating individual fairness (similar people get different outcomes). Conversely, strict individual fairness might perpetuate historical patterns that lead to group-level inequality. The choice depends on context: group fairness is often preferred for systemic change, individual fairness for case-by-case justice.

This tension is at the heart of fairness debates in AI. There is no universal answer -- the right approach depends on the specific application, legal requirements, and societal goals.

### Q16. [Medium] What is the output?

```
ml_interview = {
    "ML Theory": 30,
    "Coding": 25,
    "System Design": 25,
    "Behavioral": 20
}
print("Interview Weight Distribution:")
for round_name, weight in ml_interview.items():
    bar = "#" * (weight // 5)
    print(f"  {round_name:15s}: {weight}% {bar}")
print(f"Total: {sum(ml_interview.values())}%")
```

*Hint:* 4 interview rounds with percentage weights totaling 100%.

**Answer:** `Interview Weight Distribution:`
`  ML Theory      : 30% ######`
`  Coding         : 25% #####`
`  System Design  : 25% #####`
`  Behavioral     : 20% ####`
`Total: 100%`

ML interviews at top companies weight theory and coding roughly equally, with system design becoming increasingly important. Behavioral rounds assess communication, ethics awareness, and cultural fit. Prepare for all four to maximize your chances.

### Q17. [Easy] What is the output?

```
top_companies = ["Google", "Microsoft", "Amazon", "Flipkart", "PhonePe"]
print(f"Top AI hiring companies in India ({len(top_companies)}):")
for c in top_companies:
    print(f"  - {c}")
```

*Hint:* 5 top companies hiring AI talent in India.

**Answer:** `Top AI hiring companies in India (5):`
`  - Google`
`  - Microsoft`
`  - Amazon`
`  - Flipkart`
`  - PhonePe`

India is the second-largest AI talent pool globally. Top hirers include global tech giants (Google, Microsoft, Amazon) and Indian tech companies (Flipkart, PhonePe, Swiggy, Ola). AI startups are also growing rapidly.

### Q18. [Hard] What is the EU AI Act's approach to regulating generative AI, and how does it affect developers building AI products?

*Hint:* Think about transparency requirements and risk classification.

**Answer:** The EU AI Act classifies generative AI (foundation models) under specific obligations: (1) **Transparency**: AI-generated content must be labeled (users must know they are interacting with AI). Deepfakes must be disclosed. (2) **Copyright compliance**: Providers must publish summaries of copyrighted training data used. (3) **Safety testing**: High-capability models must undergo red-teaming and adversarial testing before release. (4) **Technical documentation**: Model cards describing capabilities, limitations, and intended use. For developers, this means: adding AI disclosure labels, documenting training data sources, implementing safety evaluations, and maintaining technical documentation. Non-compliance can result in fines up to 35 million euros or 7% of global revenue.

The EU AI Act is the first law to specifically regulate foundation models and generative AI. Developers building products for EU markets must comply, making AI governance and documentation skills increasingly important for engineering teams.

## Mixed Questions

### Q1. [Easy] What is the output?

```
portfolio_items = [
    "Kaggle competitions",
    "GitHub projects",
    "Blog posts",
    "Open source contributions"
]
for item in portfolio_items:
    print(f"  Portfolio: {item}")
print(f"Total: {len(portfolio_items)} types")
```

*Hint:* Four items in the portfolio list.

**Answer:** `  Portfolio: Kaggle competitions`
`  Portfolio: GitHub projects`
`  Portfolio: Blog posts`
`  Portfolio: Open source contributions`
`Total: 4 types`

A strong AI portfolio includes competitive ML (Kaggle), software engineering (GitHub), communication (blogs), and community engagement (open source). Together they demonstrate breadth of skills.

### Q2. [Easy] What is the output?

```
skills_by_role = {
    "Data Analyst": ["SQL", "Excel", "Tableau"],
    "ML Engineer": ["Python", "Docker", "MLOps"]
}
for role, skills in skills_by_role.items():
    print(f"{role}: {' + '.join(skills)}")
```

*Hint:* join connects list items with ' + ' separator.

**Answer:** `Data Analyst: SQL + Excel + Tableau`
`ML Engineer: Python + Docker + MLOps`

Different AI roles require different skill sets. Data Analysts focus on querying and visualization. ML Engineers focus on building, deploying, and maintaining ML systems in production.

### Q3. [Medium] What is the output?

```
def check_fairness(group_a_tpr, group_b_tpr, threshold=0.1):
    diff = abs(group_a_tpr - group_b_tpr)
    return {
        "difference": round(diff, 3),
        "fair": diff < threshold,
        "metric": "Equal Opportunity"
    }

result = check_fairness(0.85, 0.72)
print(f"Metric: {result['metric']}")
print(f"TPR difference: {result['difference']}")
print(f"Fair: {result['fair']}")
```

*Hint:* abs(0.85 - 0.72) = 0.13. Is 0.13 < 0.1?

**Answer:** `Metric: Equal Opportunity`
`TPR difference: 0.13`
`Fair: False`

Equal Opportunity requires that True Positive Rates be similar across groups. A difference of 0.13 (13 percentage points) exceeds the 0.1 threshold, indicating unfairness. Group B's qualified members have a 13% lower chance of receiving a positive prediction.

### Q4. [Medium] What is the output?

```
def salary_comparison(india_lpa, us_usd_k):
    # Approximate conversion: 1 LPA = ~$1,200 USD
    india_usd = india_lpa * 1200
    us_usd = us_usd_k * 1000
    ppp_factor = 4.5  # PPP adjustment for India
    india_adjusted = india_usd * ppp_factor
    return {
        "india_nominal": india_usd,
        "us_nominal": us_usd,
        "india_ppp": india_adjusted,
        "ppp_ratio": round(india_adjusted / us_usd, 2)
    }

# ML Engineer salary comparison
result = salary_comparison(20, 150)  # 20 LPA India, $150K US
print(f"India (nominal): ${result['india_nominal']:,}")
print(f"US (nominal): ${result['us_nominal']:,}")
print(f"India (PPP-adjusted): ${result['india_ppp']:,}")
print(f"PPP ratio: {result['ppp_ratio']}")
```

*Hint:* 20 LPA * 1200 = $24,000 nominal. PPP-adjusted = $24,000 * 4.5.

**Answer:** `India (nominal): $24,000`
`US (nominal): $150,000`
`India (PPP-adjusted): $108,000`
`PPP ratio: 0.72`

While Indian ML Engineer salaries are lower in nominal USD ($24K vs $150K), PPP (Purchasing Power Parity) adjustment shows that 20 LPA in India has roughly 72% of the purchasing power of $150K in the US. India offers strong career value when adjusted for cost of living.

### Q5. [Medium] Suresh is asked in an ML interview: 'Design a fraud detection system for a payment company.' How should he structure his answer?

*Hint:* Cover data, features, model, serving, and monitoring.

**Answer:** Suresh should follow the standard ML system design framework: (1) **Clarify requirements**: Scale (transactions per second), latency (real-time or batch), precision vs recall priority (false positives cost user friction, false negatives cost money). (2) **Data**: Transaction logs, user history, device info, geolocation. (3) **Features**: Transaction amount, frequency, time since last transaction, distance from usual location, device fingerprint, velocity features (spending pattern changes). (4) **Model**: Two-stage: rule-based filters (hard limits) + ML model (gradient boosting or neural network). Handle class imbalance with SMOTE/undersampling. (5) **Serving**: Real-time inference (< 50ms). Feature store for precomputed features. (6) **Monitoring**: Precision/recall on flagged transactions, false positive rate, latency, feature drift. Human review loop for edge cases.

System design interviews test end-to-end thinking. Suresh should spend 5 minutes clarifying requirements, 15-20 minutes on the design, and 5-10 minutes discussing trade-offs, monitoring, and iterations. Drawing a system diagram is always helpful.

### Q6. [Hard] A hospital wants to deploy an AI system for diagnosing skin conditions from photos. What ethical considerations must Meera address before deployment?

*Hint:* Think about bias, explainability, safety, privacy, and human oversight.

**Answer:** Meera must address: (1) **Representation bias**: Dermatology AI trained mostly on lighter skin tones performs significantly worse on darker skin (proven by multiple studies). She must ensure diverse training data and test accuracy across all skin tones. (2) **Explainability**: Doctors need to understand why the AI flagged a condition. Use GradCAM or attention maps to highlight which image regions influenced the diagnosis. (3) **Human oversight**: The AI should assist doctors, not replace them. All AI diagnoses must be reviewed by a dermatologist. (4) **Privacy**: Medical images are sensitive. Ensure HIPAA/equivalent compliance, data encryption, and no unauthorized storage. (5) **Safety**: False negatives (missing a melanoma) are life-threatening. Optimize for high recall (sensitivity) even at the cost of more false positives. (6) **Informed consent**: Patients should know AI is being used and have the option to opt out.

Healthcare AI requires the highest ethical standards because errors directly impact lives. The skin tone bias problem is well-documented -- commercial dermatology AI systems have shown error rates 2-3x higher on darker skin. This is both an ethical and legal liability.

### Q7. [Hard] What is the difference between privacy and fairness in AI? Can a system be private but unfair, or fair but not private?

*Hint:* Think about what each concept protects and whether they can conflict.

**Answer:** Privacy and fairness are independent ethical dimensions that can conflict: A system can be **private but unfair**: A loan approval model uses differential privacy to protect individual data, but its training data has historical racial bias, so it unfairly denies loans to minorities. Data is protected but outcomes are biased. A system can be **fair but not private**: A model achieves equal approval rates across racial groups, but to do so it requires access to racial information -- collecting and storing this sensitive data creates privacy risks. A system can be **both**: Using federated learning (privacy) with fairness constraints (fairness). Or **neither**: An unencrypted database of biased predictions. The tension: testing for fairness often requires collecting protected attributes (race, gender), which raises privacy concerns. Solutions include secure computation, privacy-preserving audits, and differential privacy with fairness constraints.

This is a nuanced topic frequently discussed in AI ethics research. Responsible AI must address both privacy and fairness, recognizing that they may require different -- and sometimes conflicting -- technical approaches.

### Q8. [Hard] What is the output?

```
def bias_variance_tradeoff(model_complexity):
    """ML interview classic: explain bias-variance."""
    if model_complexity < 3:
        return {"bias": "High", "variance": "Low", "error": "Underfitting"}
    elif model_complexity > 7:
        return {"bias": "Low", "variance": "High", "error": "Overfitting"}
    else:
        return {"bias": "Medium", "variance": "Medium", "error": "Good fit"}

for complexity in [1, 5, 9]:
    result = bias_variance_tradeoff(complexity)
    print(f"Complexity={complexity}: {result['error']:12s} | "
          f"Bias={result['bias']:6s} | Variance={result['variance']}")
```

*Hint:* Low complexity = high bias (underfitting). High complexity = high variance (overfitting).

**Answer:** `Complexity=1: Underfitting  | Bias=High   | Variance=Low`
`Complexity=5: Good fit      | Bias=Medium | Variance=Medium`
`Complexity=9: Overfitting   | Bias=Low    | Variance=High`

The bias-variance tradeoff is a fundamental ML concept and interview staple. Simple models (few parameters) have high bias (cannot capture patterns) but low variance (stable across datasets). Complex models have low bias but high variance (overfit to training data). The goal is to find the sweet spot.

### Q9. [Easy] What is the output?

```
explain_tools = {"LIME": "Local linear approximation", "SHAP": "Shapley value attribution"}
for tool, method in explain_tools.items():
    print(f"{tool}: {method}")
```

*Hint:* Two major explainability tools and their underlying methods.

**Answer:** `LIME: Local linear approximation`
`SHAP: Shapley value attribution`

LIME and SHAP are the two most popular model explainability tools. LIME fits a local interpretable model around a prediction. SHAP uses game theory (Shapley values) to fairly attribute feature contributions. Both help make black-box models transparent.

### Q10. [Medium] What is the output?

```
def career_skills_overlap(role1_skills, role2_skills):
    common = set(role1_skills) & set(role2_skills)
    return sorted(common)

ds_skills = ["Python", "Statistics", "ML", "SQL", "Communication"]
mle_skills = ["Python", "Docker", "MLOps", "ML", "Cloud", "APIs"]

overlap = career_skills_overlap(ds_skills, mle_skills)
print(f"Data Scientist skills: {len(ds_skills)}")
print(f"ML Engineer skills: {len(mle_skills)}")
print(f"Overlap: {overlap}")
print(f"Overlap count: {len(overlap)}")
```

*Hint:* Set intersection finds common skills between two roles.

**Answer:** `Data Scientist skills: 5`
`ML Engineer skills: 6`
`Overlap: ['ML', 'Python']`
`Overlap count: 2`

Python and ML knowledge are common to both roles. Data Scientists additionally need statistics and communication. ML Engineers additionally need Docker, MLOps, cloud, and API skills. Understanding the overlap helps plan career transitions between roles.

### Q11. [Medium] What is differential privacy and how does it protect individual data in ML?

*Hint:* Think about adding noise to make individual data points unidentifiable.

**Answer:** Differential privacy is a mathematical framework that provides formal privacy guarantees. It works by adding calibrated noise to computations (queries, model training) so that the presence or absence of any single individual's data does not significantly change the output. In ML, differential privacy can be applied during training (DP-SGD: differentially private stochastic gradient descent) by clipping gradients and adding Gaussian noise. The privacy budget (epsilon) controls the noise-utility tradeoff: smaller epsilon means more privacy but lower model accuracy. Apple uses differential privacy for iPhone analytics, and Google uses it for Chrome browser data collection.

Differential privacy provides mathematical certainty that individual data is protected, unlike ad-hoc anonymization which can often be reversed. It is increasingly required for ML systems handling sensitive data in healthcare, finance, and government.

### Q12. [Hard] Rohit is transitioning from a Data Analyst role to an ML Engineer role. What specific skills should he develop, and what projects should he build to demonstrate readiness?

*Hint:* Think about the gap between analysis and production ML systems.

**Answer:** Rohit needs to bridge the gap from analysis to engineering: **Technical skills**: (1) Advanced Python (classes, decorators, type hints, not just scripts). (2) MLOps tools (Docker, MLflow, CI/CD). (3) API development (FastAPI/Flask). (4) Cloud platforms (AWS SageMaker or GCP Vertex AI -- get a certification). (5) Software engineering practices (Git workflows, testing, code review). **Portfolio projects**: (1) End-to-end ML project: data pipeline -> model -> FastAPI deployment -> Docker -> cloud hosting. (2) A/B testing framework for model comparison. (3) Automated retraining pipeline triggered by data drift. (4) Contribute to an open-source MLOps tool. **Key differentiator**: Rohit should emphasize that his analyst background gives him strong data intuition that many ML Engineers lack. Position it as a strength, not a gap.

The Data Analyst -> ML Engineer transition is common and valued. Analysts understand data deeply; they need to add engineering skills. Building 2-3 deployed projects and earning a cloud certification typically takes 6-12 months and makes the transition viable.

## Multiple Choice Questions

### Q1. [Easy] What is bias in AI training data?

**Answer:** B

**B is correct.** AI bias refers to systematic errors or prejudices in training data that cause the model to make unfair predictions. This can arise from historical discrimination, underrepresentation of groups, or biased labeling.

### Q2. [Easy] What tool uses Shapley values from game theory to explain model predictions?

**Answer:** B

**B is correct.** SHAP (SHapley Additive exPlanations) uses Shapley values from cooperative game theory to fairly attribute each feature's contribution to a prediction. It provides both local (per-prediction) and global (overall) explanations.

### Q3. [Easy] What is the first comprehensive AI law in the world?

**Answer:** B

**B is correct.** The EU AI Act (2024) is the world's first comprehensive AI regulation. It classifies AI systems by risk level and imposes requirements ranging from banning unacceptable-risk AI to requiring transparency for chatbots.

### Q4. [Easy] Which ML career role focuses primarily on deploying and scaling ML systems in production?

**Answer:** C

**C is correct.** ML Engineers focus on taking ML models from research/development to production. Their skills include Python, Docker, cloud platforms, API development, MLOps, and system design.

### Q5. [Easy] What is demographic parity as a fairness metric?

**Answer:** B

**B is correct.** Demographic parity requires that the rate of positive predictions (e.g., loan approvals) be equal across all demographic groups, regardless of qualifications. P(Y_hat=1|Group A) = P(Y_hat=1|Group B).

### Q6. [Medium] What is the 80% rule (four-fifths rule) for disparate impact?

**Answer:** B

**B is correct.** The four-fifths (80%) rule states that the selection rate for any protected group should be at least 80% of the rate of the most-selected group. A ratio below 0.8 indicates potential illegal discrimination and warrants investigation.

### Q7. [Medium] How does LIME explain a single prediction?

**Answer:** B

**B is correct.** LIME generates perturbed samples around the instance to explain, gets model predictions for all of them, then fits a simple interpretable model (e.g., linear regression) on these samples. The simple model's coefficients explain which features most influenced the prediction.

### Q8. [Medium] What is the AI alignment problem?

**Answer:** B

**B is correct.** The alignment problem is ensuring AI systems do what we actually want, not just what we technically specified. Misalignment can lead to reward hacking, specification gaming, and unintended harmful behaviors as AI becomes more capable.

### Q9. [Medium] Which platform is best for showcasing ML competition skills?

**Answer:** B

**B is correct.** Kaggle is the premier platform for ML competitions, notebooks, and datasets. Competition rankings, published notebooks, and discussion contributions demonstrate practical ML skills. A strong Kaggle profile (Expert/Master) is highly valued by employers.

### Q10. [Medium] What is the bias-variance tradeoff?

**Answer:** B

**B is correct.** Bias is error from oversimplified models (underfitting). Variance is error from overly complex models that are sensitive to training data (overfitting). The goal is to find the complexity level that minimizes total error (bias^2 + variance).

### Q11. [Hard] Why does the impossibility theorem make AI fairness particularly challenging?

**Answer:** B

**B is correct.** The impossibility theorem (Chouldechova, 2017) proves that Demographic Parity, Equal Opportunity, and Predictive Parity cannot all hold simultaneously when different groups have different base rates. This means choosing which fairness criterion to optimize is an ethical decision, not just a technical one.

### Q12. [Hard] In an ML system design interview for a recommendation system, what is the 'cold start' problem?

**Answer:** B

**B is correct.** Cold start occurs when a new user (no history) or new item (no interactions) enters the system. Solutions: content-based recommendations (use item attributes for new items), demographic-based (use user profile for new users), popularity-based fallback, and onboarding surveys.

### Q13. [Hard] What is federated learning, and how does it address privacy concerns?

**Answer:** B

**B is correct.** Federated learning trains ML models across multiple devices or institutions without centralizing the data. Each participant trains a local model and only shares model updates (gradients), not raw data. This protects privacy while enabling collaborative learning -- used in healthcare (hospitals collaborate without sharing patient data) and mobile keyboards (Google Gboard).

### Q14. [Hard] Under the EU AI Act, which of these AI applications is classified as 'high risk'?

**Answer:** B

**B is correct.** The EU AI Act classifies AI used in credit scoring and hiring as high-risk because these decisions significantly impact people's lives. High-risk AI must undergo conformity assessments, provide transparency, enable human oversight, and maintain detailed documentation.

### Q15. [Hard] What is RLHF (Reinforcement Learning from Human Feedback) used for in modern AI?

**Answer:** B

**B is correct.** RLHF aligns LLMs (like ChatGPT and Claude) with human values by: training a reward model from human preference rankings, then optimizing the LLM using PPO to maximize this learned reward. This makes LLMs more helpful, harmless, and honest.

### Q16. [Hard] What makes a strong AI/ML portfolio project stand out from the crowd?

**Answer:** B

**B is correct.** Stand-out projects solve real, unique problems (not standard datasets), include end-to-end implementation (data to deployment), have proper software engineering (modules, tests, Docker), and are well-documented (README, blog post). A deployed sentiment analyzer for a niche domain shows more skill than 10 notebook-only Titanic analyses.

### Q17. [Easy] What is the purpose of LIME in AI explainability?

**Answer:** B

**B is correct.** LIME (Local Interpretable Model-agnostic Explanations) explains a single prediction by perturbing the input, observing prediction changes, and fitting a simple local model. The local model's coefficients show which features most influenced the prediction.

### Q18. [Medium] What is proxy discrimination in AI?

**Answer:** B

**B is correct.** Proxy discrimination occurs when non-protected features (income, zip code) correlate with protected attributes (race, gender) and produce biased outcomes. Simply removing protected features does not eliminate bias if proxy features remain.

### Q19. [Hard] What skills differentiate an ML Engineer from a Data Scientist?

**Answer:** B

**B is correct.** Data Scientists build and evaluate models (statistics, feature engineering, experimentation). ML Engineers deploy, scale, and maintain models in production (Docker, APIs, cloud, CI/CD, monitoring). Both use Python and ML, but ML Engineers add software engineering and operations skills.

### Q20. [Easy] What does SHAP stand for?

**Answer:** B

**B is correct.** SHAP (SHapley Additive exPlanations) uses Shapley values from cooperative game theory to fairly attribute each feature's contribution to a model prediction. It provides both local and global explanations.

---

*Notes: https://learn.modernagecoders.com/resources/ai-and-machine-learning/ai-ethics-and-career-guide/*
