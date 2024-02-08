import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt


# Data from the table image
data = {
    'Variables': ['Age <35', 'Age ≥36', 'Male', 'Female', 'Basic schooling', 'Undergraduate', 
                  'Graduate', 'Postgraduate', 'Unemployed', 'Unskilled work', 'Skilled work', 
                  'Professional', 'Income <25,000', 'Income 26,000-50,000', 'Income 51,000-75,000', 'Income >75,000'],
    'Insomnia_present': [29, 63, 29, 63, 57, 6, 23, 6, 47, 16, 19, 10, 52, 19, 12, 9],
    'Insomnia_absent': [87, 99, 69, 117, 87, 26, 53, 26, 78, 32, 53, 23, 128, 33, 50, 13],
    'Total': [116, 162, 98, 180, 144, 32, 76, 32, 125, 48, 72, 33, 180, 52, 62, 22]
}

# Creating a DataFrame
df = pd.DataFrame(data)

# Melting the DataFrame to have 'Variables' and 'Status' in long format
df_melted = df.melt(id_vars=['Variables'], value_vars=['Insomnia_present', 'Insomnia_absent'],
                    var_name='Status', value_name='Count')

# Plotting
plt.figure(figsize=(15, 10))
sns.barplot(x='Count', y='Variables', hue='Status', data=df_melted)

# Customization
plt.title('Association of Socioeconomic Variables with Insomnia')
plt.xlabel('Count')
plt.ylabel('Socioeconomic Variables')
plt.legend(title='Insomnia Status')

plt.tight_layout()
plt.show()
