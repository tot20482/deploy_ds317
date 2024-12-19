from flask import Flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
from pytorch_tabnet.tab_model import TabNetRegressor
import numpy as np # Import numpy
import warnings
import os
# from models import Students, db
from flask_sqlalchemy import SQLAlchemy
warnings.filterwarnings("ignore", category=FutureWarning)

app = Flask(__name__)
CORS(app, support_credentials=True)  # Tự động cấu hình CORS cho toàn bộ ứng dụng

# Cấu hình database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db.init_app(app)
db = SQLAlchemy(app)

class Students(db.Model):
    __tablename__ = 'students'
    
    id = db.Column(db.Integer, primary_key=True)  # Khóa chính
    mssv = db.Column(db.String(20), nullable=False, unique=True)  # Mã số sinh viên
    namsinh = db.Column(db.Integer, nullable=False)  # Năm sinh
    gioitinh = db.Column(db.String(10), nullable=False)  # Giới tính
    drl = db.Column(db.Float, nullable=True)  # Điểm rèn luyện
    diem_tt = db.Column(db.Float, nullable=True)  # Điểm thực tập
    dtb_toankhoa = db.Column(db.Float, nullable=True)  # Điểm trung bình toàn khóa
    dtb_tichluy = db.Column(db.Float, nullable=True)  # Điểm trung bình tích lũy
    sotc_tichluy = db.Column(db.Integer, nullable=True)  # Số tín chỉ tích lũy
    diemtbhk_1 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 1
    diemtbhk_2 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 2
    diemtbhk_3 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 3
    diemtbhk_4 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 4
    diemtbhk_5 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 5
    diemtbhk_6 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 6
    diemtbhk_7 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 7
    diemtbhk_8 = db.Column(db.Float, nullable=True)  # Điểm TB học kỳ 8
    mssv_login = db.Column(db.Integer, nullable=False, unique=True)  # Mã login đánh số từ 1 đến n

    def __repr__(self):
        return f'<Student {self.mssv}>'

model = TabNetRegressor()

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

@app.route("/login", methods=["POST"])
def login():
    # Lấy dữ liệu mssv_login từ yêu cầu JSON
    data = request.get_json()
    print(data)
    mssv_login = data.get("mssv_login")
    print(mssv_login)

    # Tìm kiếm sinh viên trong database theo mssv_login
    # student = Students.query.filter_by(mssv=mssv_login).first()
    student = Students.query.filter_by(mssv_login=mssv_login).first()
    print(student)
    if student:
        # Trả về thông tin của tất cả các cột
        return jsonify({
            "mssv_login": student.mssv_login,
            "mssv": student.mssv,
            "namsinh": student.namsinh,
            "gioitinh": student.gioitinh,
            "drl": student.drl,
            "diem_tt": student.diem_tt,
            "dtb_toankhoa": student.dtb_toankhoa,
            "dtb_tichluy": student.dtb_tichluy,
            "sotc_tichluy": student.sotc_tichluy,
            "diemtbhk_1": student.diemtbhk_1,
            "diemtbhk_2": student.diemtbhk_2,
            "diemtbhk_3": student.diemtbhk_3,
            "diemtbhk_4": student.diemtbhk_4,
            "diemtbhk_5": student.diemtbhk_5,
            "diemtbhk_6": student.diemtbhk_6,
            "diemtbhk_7": student.diemtbhk_7,
            "diemtbhk_8": student.diemtbhk_8,
        }), 200
    else:
        return jsonify({"message": "Mã số sinh viên không tồn tại"}), 400

if __name__ == '__main__':
    with app.app_context():  # This ensures that db.create_all() is executed in the correct context
        db.create_all()  # Create the database tables if they don't exist already
    app.run(debug=True)
