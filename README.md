# Machine Learning Heart Attack

![Screenshot 2024-06-17 at 00 04 18](https://github.com/hatkiet/Project_4/assets/154283864/8b2c5940-9764-4c15-ba20-691b1b719c75)

## Project Description: 

Use 2022 CDC BRFSS survey dataset to respondents group, analyze and evaluate for patterns. We will develop Machine Learning models based off demographic information, risk factors along with additonal health information, to best develop a prediction of heart attack risks for indviduals. A machine learning model that could predict an individual’s risk of heart attack would be highly beneficial as healthcare resources can be allocated more effectively and early prevention will significantly reduce healthcare costs.

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

* Using SparkSQL to query data (in Google Colab) (_1_HeartAttack_SparkSQL.ipynb_)

1. Download the dataset from Kaggle / CDC
2. Check the missing values / filter / clean
3. Export to CSV for Visualization
   * (_heart_2022_Spark.csv_)
5. Using Jupyter Notebook for Visualization
   * (_2_HeartAttack_Visualization.ipynb_)
6. Insight into the Dataset: Using Pandas and Matplotlib
7. Exploratory Data Analysis (EDA): One-variable, Two-variable Analysis
8. Data Visualization / Plotting the data
9. Data Processing: Encoding data variables, Calculate correlation matrix
10. Export CSV for Machine Learning
    * (_heart_2022_cleaned.csv_)


### (ii) Machine Learning: 

1. Split data into features (X) and target variable (y)
2. Training Model
3. Supervised Learning - Random Forests
   * (_3.1_HeartAttack_ML_RandomForests_Oversampling.ipynb_)
   * (_3.1_HeartAttack_ML_RandomForests_Undersampling.ipynb_)
4. Deep Learning Neural Networks
   * (_3.2_HeartAttack_ML_NeuralNetwork_Oversampling.ipynb_)
   * (_3.2_HeartAttack_ML_NeuralNetwork_Undersampling.ipynb_)
5. Comparison and evaluation of Machine Learning models:
   * (_4.1_ML_Comp_Under.ipynb_)
   * (_4.1_ML_Comp_Over.ipynb_)
   * (_4.1_ML_Comp_ADASYN.ipynb_)


### (iii) Tableau Story:
1. Visualizations of machine learning outcomes
2. Presentation stories in Tableau
