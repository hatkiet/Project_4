from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the model
model = joblib.load('../ML_models/gradient_model.pkl')


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    # Assuming your model expects features in a certain order
    features = [data['feature1'], data['feature2'], ..., data['featureN']]
    prediction = model.predict([features])
    output = prediction[0]
    return jsonify(result=output)

if __name__ == '__main__':
    app.run(debug=True)