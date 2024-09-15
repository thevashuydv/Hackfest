import pandas as pd
import random
from faker import Faker

# Initialize Faker and set random seed for reproducibility
fake = Faker()
Faker.seed(42)
random.seed(42)

# Define OTT platforms and subscription amounts
ott_platforms = {
    "Netflix": 15.99,
    "Amazon Prime Video": 7.99,
    "Disney+": 8.99,
    "Hulu": 12.99
}

# Define other transaction categories
categories = ['Groceries', 'Transport', 'Dining', 'Shopping', 'Health', 'Utilities']

# Function to generate a single transaction
def generate_transaction(user_id, recurring=False):
    if recurring:
        # Generate a recurring OTT subscription transaction
        platform = random.choice(list(ott_platforms.keys()))
        return {
            'Transaction ID': fake.uuid4(),
            'User ID': user_id,
            'Date': fake.date_this_year(),
            'Amount': ott_platforms[platform],
            'Category': 'Subscription',
            'Merchant Description': platform,
            'Recurring': True,
            'Frequency': 'Monthly',
            'Mode': random.choice(['Card', 'UPI']),
            'OTT Label': platform
        }
    else:
        # Generate a regular daily life transaction
        return {
            'Transaction ID': fake.uuid4(),
            'User ID': user_id,
            'Date': fake.date_this_year(),
            'Amount': round(random.uniform(5.0, 200.0), 2),
            'Category': random.choice(categories),
            'Merchant Description': fake.company(),
            'Recurring': False,
            'Frequency': 'N/A',
            'Mode': random.choice(['Card', 'UPI', 'Cash']),
            'OTT Label': None
        }

# Function to generate a dataset for multiple users
def generate_dataset(num_users=10, num_transactions=1000, ott_ratio=0.1):
    transactions = []
    for user_id in range(1, num_users + 1):
        for _ in range(num_transactions // num_users):
            # Generate a mix of OTT and non-OTT transactions based on the ott_ratio
            if random.random() < ott_ratio:
                transactions.append(generate_transaction(user_id, recurring=True))
            else:
                transactions.append(generate_transaction(user_id, recurring=False))
    
    return pd.DataFrame(transactions)

# Generate the dataset
dataset = generate_dataset(num_users=100, num_transactions=5000, ott_ratio=0.2)

# Save the dataset to a CSV file
dataset.to_csv('user_transactions.csv', index=False)

# Print the first few rows of the dataset
print(dataset.head())
