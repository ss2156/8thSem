import matplotlib.pyplot as plt

# Data
age_groups = [
    "Newborn (0-3 months)",
    "Infant (4-12 months)",
    "Toddler (1-2 years)",
    "Preschool (3-5 years)",
    "School Age (6-12 years)",
    "Teen (13-18 years)",
    "Adult (18-60 years)",
    "Adult (61-64 years)",
    "Senior (65+ years)"
]
min_hours = [14, 12, 11, 10, 9, 8, 7, 7, 7]
max_hours = [17, 16, 14, 13, 12, 10, 7, 9, 8]

# Plotting
plt.figure(figsize=(10, 8))
plt.barh(age_groups, max_hours, color='skyblue', label='Max Recommended Hours')
plt.barh(age_groups, min_hours, color='salmon', label='Min Recommended Hours')
plt.xlabel('Hours of Sleep')
plt.title('Recommended Hours of Sleep Per Day by Age Group')
plt.legend()
plt.tight_layout()

# Show plot
plt.show()
