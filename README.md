# Project-4: Machine Learning Heart Attack

## Project Description: 

Use CDC 2022 BRFSS survey dataset to respondents group, analyze and evaluate for patterns. We will develop Machine Learning models based off demographic information, risk factors along with additonal health information, to best develop a prediction of heart attack risks for indviduals. A machine learning model that could predict an individual’s risk of heart attack would be highly beneficial as healthcare resources can be allocated more effectively and early prevention will significantly reduce healthcare costs.

For future implementations of this model, an individual can input their general health information, including Age, Physical Activity, Smoking, BMI, and more, and the model will determine whether the individual is at high or low risk of heart attack. If high risk, the platform will provide a list of next steps, including a medical consultation, lifestyle changes, regular monitoring of health indicators, and potential treatments. This will lead to behavioural changes and more informed patients.

### Technologies: Spark, SQL, Python, Pandas, Matplotlib, Logistic Regression, Tensorflow, Supervised Machine Learning (Random Forests), Deep Learning (Neural Networks), XGBoost, GradientBoosting, Adaptive Synthetic Sampling 

### Dataset: 
https://www.cdc.gov/brfss/annual_data/annual_2022.html


### Tasks: 

[1] Data Engineering: querying, cleaning, merging datasets 

[2] Machine Learning: Supervised learning and Deep Learning 

[3] Visualizations will be made with Tableau, Matplotlib, MissingNo, tensorflow, and Pandas. 

### Group Members(Alphabetical): Fara Naghavi, Harrison Lee, Kiet Hoang, Mia Hursh

All members contributed equally and preforming all tasks delegated. 


## TECHNICAL STEPS:


### (i) Data Engineering Steps: 

* Using SparkSQL to query data (in Colab) (_1_HeartAttack_SparkSQL.ipynb_)

1. DownLoad the dataset from Kaggle / read csv
2. Check the missing values / filter / clean
3. Export to CSV (_heart_2022_Spark.csv_) for Visualization

* Using Jupyter Notebook for Visualization (_2_HeartAttack_Visualization.ipynb_)

4. Insight into the Dataset: Dataset describe
5. Exploratory Data Analysis (EDA): One-variable, Two-variable Analysis
6. Data Visualization / Plotting the data
7. Data Processing: Encoding data variables, Calculate correlation matrix
8. Export CSV (_heart_2022_cleaned.csv_) for Machine Learning


### (ii) Machine Learning: 

1. Split data into features (X) and target variable (y)
2. Training Model
3. Supervised Learning - Random Forests (_3.1_HeartAttack_ML_RandomForests.ipynb_)
4. Deep Learning Neural Networks - Standard scaler module (_3.2_HeartAttack_ML_NeuralNetwork.ipynb_)



### (iii) HTML Dropdown Menu:
1. Visualizations of machine learning outcomes
2. Presentation stories in HTML
