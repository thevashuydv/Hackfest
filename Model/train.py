import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import LabelEncoder

# Load the dataset
dataset = pd.read_csv('D:/GFG Hackathon/Model/user_transactions.csv')

# Display the first few rows of the dataset
print("Sample Data:\n", dataset.head())

# Step 1: Preprocessing the Data
# Convert 'Recurring' and 'Mode' columns into numerical values (e.g., 0 and 1 for boolean)
dataset['Recurring'] = dataset['Recurring'].astype(int)

# Step 2: Handle Categorical Features
# Encode categorical columns such as 'Category' and 'Merchant Description'
label_encoders = {}

# Encode 'Category' column
label_encoders['Category'] = LabelEncoder()
dataset['Category'] = label_encoders['Category'].fit_transform(dataset['Category'])

# Encode 'Merchant Description' column
label_encoders['Merchant Description'] = LabelEncoder()
dataset['Merchant Description'] = label_encoders['Merchant Description'].fit_transform(dataset['Merchant Description'])

# Step 3: Handle the Target (OTT Label)
# We will convert OTT platform names (Netflix, Amazon Prime, etc.) into numerical values
dataset['OTT Label'] = dataset['OTT Label'].fillna('None')  # Replace NaN with 'None'
label_encoders['OTT Label'] = LabelEncoder()
dataset['OTT Label'] = label_encoders['OTT Label'].fit_transform(dataset['OTT Label'])

# Step 4: Select Features and Target
# We'll use 'Amount', 'Category', 'Merchant Description', 'Recurring', and 'Mode' as features
# Target is 'OTT Label', which indicates the OTT platform (or None if it's not an OTT transaction)
X = dataset[['Amount', 'Category', 'Merchant Description', 'Recurring', 'Mode']]

# Convert 'Mode' to numerical values (Card, UPI, Cash)
X['Mode'] = LabelEncoder().fit_transform(X['Mode'])

y = dataset['OTT Label']

# Step 5: Split the Data into Training and Testing Sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 6: Train the Random Forest Classifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 7: Make Predictions and Evaluate the Model
y_pred = model.predict(X_test)

# Step 8: Evaluate the Model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")

# Classification Report for detailed performance
print("\nClassification Report:\n", classification_report(y_test, y_pred, target_names=label_encoders['OTT Label'].classes_))

# Confusion Matrix to see how well it classified OTT vs Non-OTT transactions
print("\nConfusion Matrix:\n", confusion_matrix(y_test, y_pred))

