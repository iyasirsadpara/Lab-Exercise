import pandas as pd
import matplotlib.pyplot as plt

# Read Excel file
df = pd.read_excel("wildlife.xlsx")

# Remove extra spaces from column names
df.columns = df.columns.str.strip()

# -----------------------------
# Education
# -----------------------------
plt.figure(figsize=(6,4))
df["Education"].value_counts().plot(kind="bar")
plt.title("Education Level")
plt.xlabel("Education")
plt.ylabel("Count")
plt.tight_layout()
plt.show()

# -----------------------------
# Occupation
# -----------------------------
plt.figure(figsize=(8,4))
df["Occupation"].fillna("Unknown").value_counts().plot(kind="bar")
plt.title("Occupation")
plt.xlabel("Occupation")
plt.ylabel("People")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# -----------------------------
# Previous Training
# -----------------------------
plt.figure(figsize=(6,6))
df["Any Prev. Training?"].fillna("Unknown").value_counts().plot(
    kind="pie",
    autopct="%1.1f%%"
)
plt.title("Previous Wildlife Training")
plt.ylabel("")
plt.tight_layout()
plt.show()

# =====================================================
# GROUP 1 (Questions 3,4,5,6,7,8,14,15)
# =====================================================

# Column positions in your Excel
questions1 = df.iloc[:, [8, 9, 10, 11, 12, 13, 14, 15]]

# Clean responses
replace = {
    "Yes easily": "Yes",
    "Yes, easily": "Yes",
    "NO": "No",
    "No": "No",
    "With difficulty": "With Difficulty",
    "Don't NO": "Don't Know",
    "Don't No": "Don't Know"
}

questions1 = questions1.replace(replace)

counts1 = questions1.apply(pd.Series.value_counts).fillna(0).T

# Rename rows
counts1.index = ["Q3","Q4","Q5","Q6","Q7","Q8","Q14","Q15"]

plt.figure(figsize=(12,6))
counts1.plot(kind="bar")
plt.title("Knowledge and Skills Related to Wildlife Monitoring")
plt.xlabel("Questions")
plt.ylabel("Number of Respondents")
plt.xticks(rotation=0)
plt.legend(title="Responses")
plt.tight_layout()
plt.show()

# =====================================================
# GROUP 2 (Questions 9,10,11,12,13,16)
# =====================================================

# IMPORTANT:
# According to your Excel, these columns come after Q15.
questions2 = df.iloc[:, [16, 17, 18, 19, 20, 21]]

counts2 = questions2.apply(pd.Series.value_counts).fillna(0).T

counts2.index = ["Q16","Q9","Q10","Q11","Q12","Q13"]

plt.figure(figsize=(12,6))
counts2.plot(kind="bar")
plt.title("Wildlife Conservation Attitudes")
plt.xlabel("Questions")
plt.ylabel("Number of Respondents")
plt.xticks(rotation=0)
plt.legend(title="Responses")
plt.tight_layout()
plt.show()