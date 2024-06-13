# Project-4: Machine Learning Heart Attack

## Project Description: 

Use Heart Attack Dataset to segment customers based on demographics and make predictions. We will be forming clusters based on demographics information and using this to gather valuable insights and making prediction/forecasting. 

### Technologies: Spark, SQL, Python, Pandas, Matplotlib, Tensorflow, Supervised Machine Learning (Random Forests), Deep Learning (Neural Networks)

### Database: from Kaggle 

### Question we are interested in: 

[1] 

### Tasks: 

[1] Data Engineering: querying, cleaning, merging datasets 

[2] Machine Learning: Supervised learning and Deep Learning 

[3] Visualizations will be made with HTML DropDown Menu and a story.

### Group Members and tasks each will do: 

All members look for datasets, query data, extract, transform and load (ETL) to Jupyter Notebook, and then perform visualization, and machine learning modeling. 


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
