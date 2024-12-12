from flask import Flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
from pytorch_tabnet.tab_model import TabNetRegressor
import numpy as np # Import numpy
import warnings
warnings.filterwarnings("ignore", category=FutureWarning)

app = Flask(__name__)
CORS(app, support_credentials=True)  # Tự động cấu hình CORS cho toàn bộ ứng dụng

model = TabNetRegressor()

@app.route('/members')
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}

@app.route('/predict', methods=['POST'])
def predict():
    # print(request.json)
    form = request.json
    if not form:
        return jsonify({'error': 'No formData provided'}), 400
    
    predictors = [
        int(form['namsinh'])-1985,
        float(form['gioitinh']),
        float(form['dtb_toankhoa']),
        float(form['dtb_tichluy']),
        float(form['sotc_tichluy'])
    ]
    i = 1
    while 'diemtbhk_' + str(i) in form:
        predictors.append(float(form['diemtbhk_' + str(i)]))
        i += 1
    print(predictors)
    model_path = f'models/tabnet_diemtbhk_{len(predictors)-4}.pt.zip'
    model.load_model(model_path)
    X = np.array(predictors).reshape(1, -1)
    prediction = model.predict(X)
    # print("Prediction: ", prediction[0][0])
    
    # Trả về kết quả dự đoán
    result = float(prediction[0][0])
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)

